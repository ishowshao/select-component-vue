<template>
    <div class="bar">
        <div>component bar</div>
        <slot></slot>
    </div>
</template>
<script>
import Test from './Test';
export default {
    components: {
        Test
    },
    methods: {
        print() {
            console.log('component bar');
        }
    }
}
</script>
<style>
.bar {
    border: 1px solid black;
    padding: 10px;
}
</style>
