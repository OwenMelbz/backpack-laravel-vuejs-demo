<template>
    <div class="form-group">
        <label for="sharedState">Shared state input:</label><br>
        <input class="form-control" id="sharedState" type="text" v-model="store.example">
    </div>
</template>

<script>
    import store from '../store'

    export default {
        name: "SharedStateInput",
        data: () => ({
            store,
        })
    }
</script>

<style scoped>
    .form-group {
        padding: 20px 10px;
    }

    label {
        color: #fff;
    }
</style>
