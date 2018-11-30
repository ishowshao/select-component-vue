import Vue from 'vue';

const createTraverse = () => {
    let stop = false;
    return function traverse(root, callback) {
        if (!stop && typeof callback === 'function') {
            let children = root.$children;
            for (let index = 0; !stop && index < children.length; index++) {
                let element = children[index];
                stop = callback(element) === true;
                traverse(element, callback);
            }
        }
    };
};

const match = (node, selector) => {
    const vnode = node._vnode;
    let attrs = vnode.data.attrs || {};
    let staticClass = vnode.data.staticClass || '';
    const id = attrs.id || '';
    if (selector[0] === '#') {
        return selector.substr(1) === id;
    } else {
        staticClass = staticClass.trim().split(' ');
        selector = selector.substr(1).split('.');
        return selector.reduce((a, c) => a && staticClass.includes(c), true);
    }
};

const selectorBuilder = (selector) => {
    selector = selector.replace(/>>>/g, '>');
    selector = selector.split('>').map(s => {
        return s.trim().split(' ').join(`').descendant('`);
    }).join(`').child('`);
    return new Function('Selector', 'node', 'all', `return new Selector(node, all).descendant('` + selector + `')`);
};

class Selector {
    constructor(node, all = false) {
        this.nodes = [node];
        this.all = all;
    }

    child(selector) {
        let matches = [];
        if (this.all) {
            this.nodes.forEach(node => {
                matches.push(...node.$children.filter(node => match(node, selector)));
            });
        } else {
            if (this.nodes.length > 0) {
                let node = this.nodes[0].$children.find(node => match(node, selector));
                matches = node ? [node] : [];
            }
        }
        this.nodes = matches;
        return this;
    }

    descendant(selector) {
        let matches = [];
        this.nodes.forEach(root => {
            createTraverse()(root, (node) => {
                if (match(node, selector)) {
                    matches.push(node);
                    return !this.all;
                }
            });
        });
        this.nodes = matches;
        return this;
    }
}

Vue.prototype.selectComponent = function (selector) {
    const querySelector = selectorBuilder(selector);
    console.log(selector, querySelector(Selector, this, false, selector).nodes[0]);
};
Vue.prototype.selectAllComponents = function (selector) {
    const querySelector = selectorBuilder(selector);
    console.log(selector, querySelector(Selector, this, true, selector).nodes);
};