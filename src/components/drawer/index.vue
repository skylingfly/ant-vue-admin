<template>
  <div>
    <a-drawer
      title="Basic Drawer"
      placement="right"
      :closable="false"
      @close="onClose"
      :visible="visible"
      width="300px"
    >
      <template v-slot:handle>
        <div class="handle" @click="visible = !visible">
          <a-icon :type="visible ? 'close' : 'setting'"></a-icon>
        </div>
      </template>
      <div>
        <h2>整体风格设定</h2>
        <a-radio-group
          :value="$route.query.navTheme || 'dark'"
          @change="e => handlechange(e, 'navTheme')"
        >
          <a-radio value="dark">黑色</a-radio>
          <a-radio value="light">白色</a-radio>
        </a-radio-group>
        <h2>导航模式</h2>
        <a-radio-group
          :value="$route.query.navLayout || 'left'"
          @change="e => handlechange(e, 'navLayout')"
        >
          <a-radio value="left">左侧</a-radio>
          <a-radio value="top">顶部</a-radio>
        </a-radio-group>
      </div>
    </a-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false
    };
  },
  methods: {
    onClose() {
      this.visible = false;
    },
    // 同步路由
    handlechange(e, type) {
      this.$router.push({
        query: { ...this.$route.query, [type]: e.target.value }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.handle {
  position: absolute;
  top: 240px;
  right: 300px;
  width: 48px;
  height: 48px;
  background-color: #1890ff;
  font-size: 20px;
  color: #fff;
  text-align: center;
  line-height: 48px;
  border-radius: 3px;
}
</style>
