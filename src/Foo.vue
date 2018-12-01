<template>
    <div id="the-id" class="foo">
        <div>component foo</div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    methods: {
        print() {
            console.log('component foo');
        }
    }
}
</script>
<style>
.foo {
    border: 1px solid black;
    padding: 10px;
}
</style>

