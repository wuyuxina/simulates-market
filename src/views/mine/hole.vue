<template>
    <div class="mine_hole">
<!--      我的页面萝卜坑-->
      <transition name="fade-left" mode="out-in" >
        <router-view></router-view>
      </transition>
    </div>
</template>

<script>
    export default {
        name: "hole"
    }
</script>
