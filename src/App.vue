<template>
  <div id="app">
    <foo>
      <bar>
        <test></test>
      </bar>
      <bar>
        <bar></bar>
      </bar>
      <bar></bar>
    </foo>
  </div>
</template>

<script>
import Foo from './Foo'
import Bar from './Bar'
import Test from './Test'
export default {
  name: 'app',
  components: {
    Foo,
    Bar,
    Test
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

    console.log('#the-id', this.selectAllComponents('#the-id'));
    console.log('.bar', this.selectAllComponents('.bar'));
    console.log('.bar >', this.selectAllComponents('.bar'));
    console.log('.foo > .bar', this.selectAllComponents('.foo > .bar'));
    console.log('.foo .bar', this.selectAllComponents('.foo .bar'));
    console.log('.foo .test', this.selectAllComponents('.foo .test'));
    console.log('.foo .bar .test', this.selectAllComponents('.foo .bar .test'));
    console.log('.bar .test', this.selectAllComponents('.bar .test'));
    console.log('.bar >.test', this.selectAllComponents('.bar >.test'));
    console.log('.foo > .test', this.selectAllComponents('.foo > .test'));
    console.log('.test', this.selectAllComponents('.test'));
    console.log('.test > .bar', this.selectAllComponents('.test > .bar'));
  }
}
</script>
