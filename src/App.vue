<template>
    <div>
        <AppHeader></AppHeader>
        <router-view></router-view>

    </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import { mapGetters } from 'vuex'
export default {
    name: 'App',
    components: { AppHeader },
    computed: {
        ...mapGetters(['isLoggedIn'])
    }
}
</script>