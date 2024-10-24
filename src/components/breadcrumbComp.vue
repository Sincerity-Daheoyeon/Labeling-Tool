<script lang="ts">
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>

  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li v-for="(item, index) in items" :key="index" class="breadcrumb-item">
        <router-link v-if="item.link" :to="item.link">{{ item.name }}</router-link>
        <span v-else>{{ item.name }}</span>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.breadcrumb {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}
.breadcrumb-item {
  margin-right: 0.5em;
}
.breadcrumb-item::after {
  content: '>';
  margin-left: 0.5em;
  margin-right: 0.5em; /* 구분자와 다음 아이템 사이의 간격 설정 */
  color: #CCCCCC; /* 구분 기호의 색상 변경 */
}
.breadcrumb-item:last-child::after {
  content: ''; /* 마지막 아이템에는 구분 기호를 표시하지 않음 */
  color: #7268F9;
}
</style>