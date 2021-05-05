<template>
    <div class="about">
        <h1>This is an about page</h1>
    </div>
</template>
<script>
// @ is an alias to /src

    export default {
        name: 'About'
        ,
        mounted() {

            fetch('https://localhost:5555/Cevat',
                {
                    method: 'post',
                    headers: new Headers({
                        'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiY2E0MjhmMC02NDc4LTRkYTEtYjBiZi1kOTBlODljZTM4ZGMiLCJVc2VyTmFtZSI6Im9udXJiaXlpa2trayIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJvbnVyYml5aWtra2syIiwibmFtZSI6Im9udXJiaXlpayIsIm5iZiI6MTYyMDIxMTMwMywiZXhwIjoxNjIwMjk3NzAzLCJpc3MiOiJvbnVyIiwiYXVkIjoiZmFya2V0bWV6In0.iqWJ-5ByrR2V5XhJ5DK47GznDaoHfd-K1Zqv2ZhFHGc',
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }),
                })
                .then(response => response.json())
                .then(data => console.log(data));
        }
    }
</script>

