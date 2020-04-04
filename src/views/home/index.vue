<template>
  <div class="home">
    <header-bar></header-bar>
    我是home里面的内容
    <mt-button type="danger" >danger</mt-button>
    <mt-button type="default">default</mt-button>
    <mt-button type="primary">primary</mt-button>
  </div>
</template>

<script>
    import headerBar from "@/components/headerBar";
    export default {
        components: {headerBar},
        name: "index",

    }
</script>

<style scoped>

</style>
