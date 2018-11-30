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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
