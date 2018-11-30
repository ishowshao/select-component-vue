<template>
  <div id="app">
    <foo>
      <bar></bar>
      <bar></bar>
      <bar></bar>
    </foo>
  </div>
</template>

<script>
import Foo from './Foo'
import Bar from './Bar'
export default {
  name: 'app',
  components: {
    Foo,
    Bar
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    // this.selectComponent('#the-id');
    // this.selectComponent('.bar');
    // this.selectComponent('.foo > .bar');
    // this.selectComponent('.foo .test');

    this.selectAllComponents('#the-id');
    this.selectAllComponents('.bar');
    this.selectAllComponents('.foo > .bar');
    this.selectAllComponents('.foo .test');
    this.selectAllComponents('.foo .bar .test');
    this.selectAllComponents('.bar .test');
    // this.selectComponent('.the-ancestor .the-descendant');
    // this.selectComponent('.the-ancestor >>> .the-descendant');
    // this.selectComponent('.the-ancestor .the-descendant > .a');
  }
}
</script>
