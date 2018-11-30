<template>
    <div class="bar">component bar<test></test></div>
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