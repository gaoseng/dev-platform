<template>
    <div>
        home
        <router-link :to="{ name: 'login', params: { userId: 123 }}">User</router-link>
    </div>
</template>

<script>
    export default {
        name: 'homePage'
    }
</script>

<style lang="scss" scoped>

</style>