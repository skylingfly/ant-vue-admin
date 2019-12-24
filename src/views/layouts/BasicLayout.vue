<template>
  <div :class="[`nav-theme-${navTheme}`, `nav-layout-${navLayout}`]">
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <a-layout-sider
        v-if="navLayout === 'left'"
        :theme="navTheme"
        :trigger="null"
        collapsible
        v-model="collapsed"
      >
        <div class="logo">VUE SKY ADMIN</div>
        <SiderMenu />
      </a-layout-sider>
      <a-layout>
        <a-layout-header
          class="headerWrap"
          style="background: #fff; padding: 0"
        >
          <a-icon
            class="menu-collapsed"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="collapsed = !collapsed"
          />
          <Header class="header" />
        </a-layout-header>
        <a-layout-content style="margin: 0 16px">
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          <Footer />
        </a-layout-footer>
      </a-layout>
    </a-layout>
    <Drawer />
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import SiderMenu from "./SiderMenu";
import Drawer from "../../components/drawer";

export default {
  data() {
    return {
      collapsed: false
    };
  },
  components: {
    Header,
    Footer,
    SiderMenu,
    Drawer
  },
  computed: {
    navTheme() {
      return this.$route.query.navTheme || "dark";
    },
    navLayout() {
      return this.$route.query.navLayout || "left";
    }
  }
};
</script>

<style scoped lang="less">
.menu-collapsed {
  padding: 0 20px;
  font-size: 20px;
  line-height: 64px;
  &:hover {
    background-color: #f2f2f2;
  }
}
.logo {
  height: 60px;
  line-height: 60px;
  text-align: center;
  user-select: none;
}
.nav-theme-dark {
  /deep/ .logo {
    color: #fff;
  }
}
</style>
