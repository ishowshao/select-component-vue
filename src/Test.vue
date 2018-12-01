<template>
    <div class="test">
        <div>component test</div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    methods: {
        print() {
            console.log('component test');
        }
    }
}
</script>
<style>
.test {
    border: 1px solid black;
    padding: 10px;
}
</style>