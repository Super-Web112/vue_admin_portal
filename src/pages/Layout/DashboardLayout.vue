<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <side-bar
      :sidebar-item-color="sidebarBackground"
      :sidebar-background-image="sidebarBackgroundImage"
    >
      
      <sidebar-link to="/login">
        <md-icon>dashboard</md-icon>
        <p>Login</p>
      </sidebar-link>
      <sidebar-link to="/order">
        <md-icon>content_paste</md-icon>
        <p>Sales</p>
      </sidebar-link>
      <sidebar-link to="/service">
        <md-icon>library_books</md-icon>
        <p>Service</p>
      </sidebar-link>
      <sidebar-link to="/inventory">
        <md-icon>bubble_chart</md-icon>
        <p>Inventory</p>
      </sidebar-link>
      <sidebar-link to="/payout">
        <md-icon>notifications</md-icon>
        <p>Payout</p>
      </sidebar-link>
      <sidebar-link to="/offers">
        <md-icon>unarchive</md-icon>
        <p>Offers and Promotion</p>
      </sidebar-link>
      
      <sidebar-link to="/period">
        <md-icon>unarchive</md-icon>
        <p>Miscellaneous</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      

      <fixed-plugin
        :color.sync="sidebarBackground"
        :image.sync="sidebarBackgroundImage"
      >
      </fixed-plugin>

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>

<script>
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import FixedPlugin from "./Extra/FixedPlugin.vue";

export default {
  components: {
    DashboardContent,
    ContentFooter,
    FixedPlugin
  },
  data() {
    return {
      sidebarBackground: "green",
      sidebarBackgroundImage: require("@/assets/img/sidebar-2.jpg")
    };
  }
};
</script>
