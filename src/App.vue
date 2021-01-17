<template>
  <div id="app">
    <router-view />
    <h1>1111</h1>
    <div>
      <i class="iconfont icondianzan"></i>
      <van-button type="info">信息按钮</van-button>
    </div>
    <van-cell-group>
      <van-cell title="单元格"
                value="内容" />
      <van-cell title="单元格"
                value="内容"
                label="描述信息" />
    </van-cell-group>

    <div class="box">

    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
.box {
  width: 200px;
  height: 100px;
  background-color: pinknpm i axios;
}
</style>
