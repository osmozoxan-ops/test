<script setup>

</script>

<template>
  <header>
  </header>

  <main>
    <div class="Header">
      <p>Чтобы переключаться между страницами используйте меню слева</p>
      <p>сделал Антон Трофимов</p>
    </div>
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
  </main>
</template>

<style scoped>
.Header{
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid;
}
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
