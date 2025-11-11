<script setup>

</script>

<template>
  <header>
    <div class="links">
      <router-link to="/PieChart">
        <img src="/public/pei.svg" alt="">
      </router-link>
      <router-link to="/ProgressBar">
        <img src="/public/progress.svg" alt="">
      </router-link>
    </div>
    <div class="wrapper">
      <RouterView/>
    </div>
  </header>

  <main></main>
</template>

<style scoped>
.wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1170px;
}
.links{
  display: flex;
  border-radius: 20px;
  height: 100px;
  background: #DBDFE933;
  box-shadow: 1px 2px 4px rgb(187 185 185);
  gap: 10px;
  position: fixed;
  left: 0;
  top: 25%;
  text-decoration: none;
  padding: 3px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.links> a:hover {
    background-color: #86899133;
  }
</style>
