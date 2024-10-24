<script lang="ts">
import { defineComponent } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

// 라이브러리에 아이콘 추가
library.add(fas);

export default defineComponent({
  name: 'DetailButtonBar',
  methods: {
    goBack() {
      this.$router.push('/test-management');
    },
    preview() {
      // 미리보기 동작 노드 작성
      console.log('Preview button clicked');
    },
    edit() {
      // 수정하기 동작 노드 작성
      console.log('Edit button clicked');
    },
    deleteTest() {
      // 삭제하기 동작 노드 작성
      console.log('Delete button clicked');
    }
  }
});
</script>

<template>
<div class="button-bar">
    <button class="back-button" @click="goBack">
      <i class="fas fa-arrow-left" style="color: #FFFFFFDE;"></i>  Test List로 돌아가기
    </button>
    <div class="action-buttons">
      <button class="preview-button" @click="preview">
        <i class="far fa-eye" style="color: #FFFFFFDE;"></i> 미리보기
      </button>
      <button class="edit-button" @click="edit">
        <i class="fas fa-pencil" style="color: #FFFFFFDE;"></i> 수정하기
      </button>
      <button class="delete-button" @click="deleteTest">
        <i class="far fa-trash-can" style="color: #CE3A3ADE;"></i> 삭제하기
      </button>
    </div>
  </div>
</template>

<style scoped>
@import '@fortawesome/fontawesome-free/css/all.css';

.button-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
}

.back-button {
  background-color: #FFFFFF17;
  color: #FFFFFFDE;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 10px;
  display: flex;
  align-items: center;
}

.action-buttons {
  display: flex;
  gap: 10px;
}

.preview-button, .edit-button, .delete-button {
  background-color:#FFFFFF17;
  color: #FFFFFFDE;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 10px;
  display: flex;
  align-items: center;
}

.back-button:hover, .preview-button:hover, .edit-button:hover, .delete-button:hover {
  background-color: grey;
}


.action-buttons i {
  margin-right: 5px;
}
.fas {
  margin-right: 5px;
}

</style>