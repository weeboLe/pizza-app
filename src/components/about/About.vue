<template>
  <div>
    <div class="row mb-5">
      <div class="col-4">
        <!-- 导航 -->
        <div class="list-group mb-5">
          <router-link class="nav-link" tag="li" :to="{name: 'historyLink'}">
            <a href="javascript:;"  class="list-group-item list-group-item-action">历史订单</a>
          </router-link>
          <router-link class="nav-link" tag="li" :to="{name: 'contactLink'}">
            <a href="javascript:;"  class="list-group-item list-group-item-action">联系我们</a>
          </router-link>
          <router-link class="nav-link" tag="li" :to="{name: 'orderingGuideLink'}">
            <a href="javascript:;"  class="list-group-item list-group-item-action">点餐文档</a>
          </router-link>
          <router-link class="nav-link" tag="li" :to="{name: 'deliveryLink'}">
            <a href="javascript:;"  class="list-group-item list-group-item-action">快递信息</a>
          </router-link>
        </div>
      </div>
      <div class="col-8">
        <!-- 导航所对应的内容 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
  export default {

  }

</script>
<style>

</style>
