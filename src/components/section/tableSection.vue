<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TableSection',
  props: {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      headers: ["NO", "아이디", "이름", "기타 정보"], // 헤더 예시
    };
  },
});
</script>

<template>
<div class="table-section">
  <div class="header">
    <h3>{{ title }}</h3>
    <div class="action-section">
      <slot name="action"></slot>
    </div>
  </div>
  <table>
    <thead>
      <tr>
        <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in items" :key="index">
        <td v-for="(value, key) in item" :key="key">{{ value }}</td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<style scoped>
.table-section {
  background-color: #FFFFFF0D;
  border-radius: 10px;
  margin: 20px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
h3 {
  margin: 20px;
  color: #FFFFFFDE;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
}
.action-section {
  text-align: right;
}
table {
  width: 100%;

}
th, td {
  font-weight: 500;
  font-size: 11px;
  line-height: 11px;
  color: #FFFFFF99;
  border: 1px solid #FFFFFF26;
  padding: 8px;
}
th {
  background-color: #FFFFFF26;
}
</style>