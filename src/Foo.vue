<template>
    <div class="foo">component foo<slot></slot></div>
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
