<template>
  <div class="admin-dashboard">
    <DashboardSidebar />
    <DashboardHeader />
    <ReaderTestList />
</template>
<script>
import DashboardSidebar from "@/components/layout/DashboardSidebar.vue";
import DashboardHeader from "@/components/layout/DashboardHeader.vue";
import ReaderTestList from '@/components/ReaderTestList.vue';


export default {
  name: 'AdminDashboard',
  components: {
    DashboardSidebar,
    DashboardHeader,
    ReaderTestList,
  }
}
</script>

<style scoped>
.admin-dashboard {
  display: flex;
}
.content {
  flex-grow: 1;
  background-color: #000;
  color: white;
  padding: 20px;
}
</style>
