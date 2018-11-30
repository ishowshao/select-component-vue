<template>
    <div class="test">component test<slot></slot></div>
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
