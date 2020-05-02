<template>
    <div v-if= "isLoggedIn" class="dropper">
        <input 
        type="file" 
        @change="uploadImages($event.target.files)"
        multiple
        accept="image/*"
        />
        <span>Drag files here!</span>
    </div>
</template>

<script>
import { mapActions, mapGetters }  from 'vuex'

export default {
    name: 'UploadForm',
    methods: {
        ...mapActions(["uploadImages"])
    },
    computed: {
        ...mapGetters(['isLoggedIn', 'allImages'])
    },
}
</script>

<style scoped>
.dropper {
    height: 30vh;
    border: 2px dashed black;
    border-radius: 5px;
    margin: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.dropper:hover {
    background-color: #eee;
}
input {
    width: 100%;
    height: 30vh;
    position: absolute;
    opacity: 0;
}
span {
    font-size: 50;
}
</style>