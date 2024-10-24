<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface TestData {
  id: string;
  title: string;
  department: string;
  dataType: string;
  taskType: string;
  purpose: string;
  dateRange: string;
  status: string;
}

export default defineComponent({
  name: 'TestInformation',
  props: {
    test: {
      type: Object as PropType<TestData>,
      required: true,
    },
  },
});
</script>

<template>
<div class="test-information">
    <div class="header">
      <h3>Test Information</h3>
      <button class="edit-button">수정하기
        <i class="fas fa-chevron-right"  style="color: #7168F9;"></i>
      </button>
    </div>
    <div class="information-grid">
      <div><span class="label">Test NO:</span> <span class="value">{{ test.id }}</span></div>
      <div><span class="label">Test Title:</span> <span class="value">{{ test.title }}</span></div>
      <div><span class="label">Department:</span> <span class="value">{{ test.department }}</span></div>
      <div><span class="label">Data Type:</span> <span class="value">{{ test.dataType }}</span></div>
      <div><span class="label">Task Type:</span> <span class="value">{{ test.taskType }}</span></div>
      <div><span class="label">Purpose:</span> <span class="value">{{ test.purpose }}</span></div>
      <div><span class="label">Date Range:</span> <span class="value">{{ test.dateRange }}</span></div>
      <div><span class="label">Status:</span> <span class="value"><i class="far fa-circle" style="color: #FFFFFF99;"></i>  {{ test.status }}</span></div>
    </div>

  </div>
</template>

<style scoped>
h3 {
  margin: 20px;
  color: #FFFFFFDE;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
}
.test-information {
  background-color: #FFFFFF0D;
  border-radius: 10px;
  margin: 20px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.information-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  align-items: flex-start;
  gap: 15px;
  text-align: left;
  margin: 20px;

}

.label {
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  color: #FFFFFF99;
}

.value {
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  color: #FFFFFFDE;
}
.edit-button {
  color: #FFFFFFDE;
  background-color: #FFFFFF0D !important;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
  margin-right: 10px;
}

.edit-button:hover {
  color: #7268F9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* 약간의 그림자 효과 */
}

</style>