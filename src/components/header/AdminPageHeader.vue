<template>

  <div class="admin-page-header">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li v-for="(item, index) in breadcrumbItems" :key="index" :class="['breadcrumb-item', { 'active-item': index === breadcrumbItems.length - 1 }]">
          <router-link v-if="index !== breadcrumbItems.length - 1" :to="item.link" class="breadcrumb-link">{{ item.name }}</router-link>
          <span v-else class="active-link">{{ title }}</span>
        </li>
      </ol>
    </nav>
    <h2 class="page-title">{{ title }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "AdminPageHeader",
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      breadcrumbItems: [
        { name: 'Test Management', link: '/test-management' },
        { name: '' }
      ],
    };
  },
});
</script>

<style scoped>
.admin-page-header {
  display: flex;
  flex-direction: column;
}

.breadcrumb {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}
.breadcrumb-item {
  margin-right: 0.5em;
}
.breadcrumb-link {
  color: #FFFFFFDE;
  text-decoration: none;
}

.breadcrumb-link:hover {
  text-decoration: underline;
}

.breadcrumb-item::after {
  content: '>';
  margin-left: 0.5em;
  margin-right: 0.5em; /* 구분자와 다음 아이템 사이의 간격 설정 */
  color: #FFFFFFDE;
}
.breadcrumb-item:last-child::after {
  content: ''; /* 마지막 아이템에는 구분 기호를 표시하지 않음 */
  color: #7268F9;
}
.active-link {
  color: #7168F9;
  font-weight: bold;
}

.page-title {
  text-align: left;
  margin-left: 30px;
  margin-top: 0;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  color: #FFFFFFDE;
}
</style>
