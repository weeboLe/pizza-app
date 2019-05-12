<template>
  <div class="card text-dark gn-light mb-3">
    <div class="card-header">联系我们</div>
    <div class="card-body">
      <h4 class="card-title">联系我们</h4>
      <p class="card-text">13151558707@163.com</p>
      <router-link :to="{name: 'phoneNumber'}">电话</router-link>
      <router-link class="ml-3" :to="{name: 'personName'}">联系人</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>