<template>
  <div class="default-layout">
      <NavigationBar />
    <div class="content-container">
      <AdminSideBar />
      <div class="content">
        <DashboardSidebar />
        <DashboardHeader />
        <ReaderTestList />
<!--        <router-view />-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AdminSideBar from "../components/layout/AdminSideBar.vue";
import NavigationBar from "../components/layout/NavigationBar.vue";
import AdminDashboard from "@/components/layout/AdminDashboard.vue";
import DashboardHeader from "@/components/layout/DashboardHeader.vue";
import DashboardSidebar from "@/components/layout/DashboardSidebar.vue";
import ReaderTestList from "@/components/layout/ReaderTestList.vue";

export default defineComponent({
  name: "AdminManagement",
  components: {
    DashboardSidebar,
    DashboardHeader,
    ReaderTestList,
    AdminSideBar,
    NavigationBar
  },
  mounted() {
    console.log('123');
  }
});
</script>

<style scoped>
.default-layout {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.content-container {
  display: flex;
  flex-direction: row;
  min-height: 100vh; /* 높이를 전체 화면으로 설정 */
}

.content {
  flex: 1; /* 남은 공간을 전부 차지하게 설정 */
  background-color: #121212;
  padding: 20px;
  color: white;
}

body {
  background-color: white;
}
</style>
