<template>
    <div>
        <password v-model="value"/>

        <div ref="input" aria-hidden="true" class="hidden">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import Password from 'vue-password-strength-meter'

    export default {
        name: "PasswordMeter",
        props: ['_value'],
        components: { Password },
        data() {
            return {
                value: this._value
            }
        },
        watch: {
            value(newValue) {
                this.$refs.input.querySelector('input').value = newValue;
            }
        }
    }
</script>

<style scoped>
    .Password {
        margin: 0;
        max-width: 100%;
    }
</style>
