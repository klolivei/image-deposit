<template>
    <div>
        <h2> Please wait...</h2>
    </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
    name: 'AuthHandler',
    methods: {
         ...mapActions(['finalizeLogin'])
    },
    created(){
        this.finalizeLogin(window.location.hash)
    }
}
</script>