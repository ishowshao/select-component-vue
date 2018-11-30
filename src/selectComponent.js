import Vue from 'vue';

const createTraverse = () => {
    let stop = false;
    return function traverse(root, callback) {
        if (!stop && typeof callback !== 'function') {
            let children = root.$children;
            for (let index = 0; !stop && index < children.length; index++) {
                let element = children[index];
                let vnode = element._vnode;
                if (vnode && vnode.data) {
                    if (callback(vnode.data) === true) {
                        stop = true;
                    }
                }
                traverse(element, callback);
            }
        }
    };
};

const match = (node, selector) => {
    const vnode = node._vnode;
    let {attrs = {}, staticClass = ''} = vnode.data;
    const {id = ''} = attrs;
    if (selector[0] === '#') {
        let result = /#(\w+)/.exec(selector);
        return result && result[1] === id;
    } else {
        staticClass = staticClass.trim().split(' ');
        selector = selector.substr(1).split('.');
        return selector.reduce((a, c) => a && staticClass.includes(c), true);
    }
};

const selectorBuilder = (selector) => {
    
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
                if (match(node, selector)) {
                    matches.push(node);
                }
            });
        } else {
            let node = this.nodes.find(node => match(node, selector));
            matches = node ? [node] : [];
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

// new Selector().child()


Vue.prototype.selectComponent = function (selector) {
    console.log(selector, this);
    createTraverse()(this, (data) => {
        console.log(data);
        if (data.staticClass && data.staticClass.indexOf('checkbox iconfont') !== -1) {
            return true;
        }
    });
};