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
  }
}
</script>
