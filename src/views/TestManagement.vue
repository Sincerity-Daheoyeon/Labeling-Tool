<template>
  <AdminDefaultLayout :breadcrumbItems="breadcrumbItems">
    <div class="test-management">
<!--      <AdminPageHeader title="Reader Test List" subtitle="Test Management" />-->
      <ReaderTestHeader />
      <ReaderTestList />
      <div class="test-list">
        <!-- 테스트 리스트가 여기에 들어갑니다 -->
        <div v-for="test in tests" :key="test.id" class="test-item">
          <router-link :to="`/test-management/${test.id}`">
            <span>{{ test.id }}. {{ test.title }}</span>
          </router-link>
        </div>
      </div>
    </div>
  </AdminDefaultLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AdminDefaultLayout from '../layouts/AdminDefaultLayout.vue';
import AdminPageHeader from '../components/header/AdminPageHeader.vue';
import ReaderTestHeader from "../components/layout/DashboardHeader.vue";
import ReaderTestList from "../components/layout/ReaderTestList.vue";

export default defineComponent({
  name: "TestManagement",
  components: {
    AdminDefaultLayout,
    // AdminPageHeader,
    ReaderTestHeader,
    ReaderTestList,
  },
  data() {
    return {
      breadcrumbItems: [
        { name: 'Test Management', link: '/test-management' },
        { name: 'Reader Test List' }
      ],
      tests: [
        { id: 1, title: 'Thyroid gland reader test' }
        // 다른 테스트 항목들...
      ]
    };
  }
});
</script>

<style scoped>
.test-management {
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.test-list {
  margin-top: 20px;
  background: rgba(255, 255, 255, 0.07);
  border-radius: 10px;
  padding: 20px;
}


.test-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #3E3E3E;
  margin-bottom: 10px;
}

.title:hover {
  cursor: pointer;

}
.test-item:last-child {
  border-bottom: none;
}

.test-item span {
  color: #FFFFFFDE;
  font-weight: 500;
  font-size: 16px;
}
</style>
