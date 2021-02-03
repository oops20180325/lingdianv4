<template>
  <div class="layout">
    <div>
      top
    </div>
    <div> left </div>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted(){
    var map = new BMapGL.Map("allmap"); // 创建Map实例
    map.centerAndZoom(new BMapGL.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
  }

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #allmap {width: 500px;height: 200px;overflow: hidden;margin:0;font-family:"微软雅黑";}
</style>
