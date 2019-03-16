<template>
    <a href="#">
        Shared state output: <strong>{{ store.example }}</strong>
    </a>
</template>

<script>
    import store from '../store'

    export default {
        name: "SharedStateOutput",
        data: () => ({
            store,
        })
    }
</script>

<style scoped>

</style>
