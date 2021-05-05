<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'Home',
        components: {
            HelloWorld
        }
        ,
        mounted() {

            fetch('https://localhost:5555/BeniRedirect',
                { method: 'get' })
                .then(response => response.json())
                .then(data => console.log(data))
                //.then(data =>

                //    fetch('https://localhost:5555/WinOt',
                //        { credentials: 'include', method: 'post' })
                //        .then(response => response.json())
                //        .then(data => console.log(data))
                //);

        }
    }
</script>


