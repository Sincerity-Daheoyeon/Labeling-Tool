<template>
  <div class="test-list">
    <div class="list">
      <table class="lists" style="table-layout: auto;">
        <tbody>
          <tr v-for="test in readerTests" :key="test.id">
            <td class="col-no">
              <div class="no-column">
                  {{  test.no }}
              </div>
            </td>
            <td class="col-title">
              <div class="title-column">
                <span class="title">{{  test.title }}</span><br>
                <span class="department">{{  test.department}}</span>
              </div>
            </td>
            <td class="col-tool">
              <div class="tool-column"><button class="tool-button">{{  test.tool }}</button></div>
            </td>
            <td class="col-purpose">
              <div class="purpose-column">
                <i class="fas fa-stethoscope" style="color: #7168F9;"></i>&nbsp; &nbsp;{{  test.purpose }}</div>
            </td>
            <td class="col-participants">
              <div class="participant-column">
                <i class="fas fa-user" style="color: #FFFFFF99"></i>&nbsp; &nbsp;{{  test.participants }}</div>
            </td>
            <td class="col-progress">
              <div class="progress-column">
                <i class="fa-regular fa-circle" style="color: #FFFFFF99;"></i>&nbsp; &nbsp;
                <span class="progress">{{  test.progress }}</span> <br>
                <span class="period">{{  test.period }}</span></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="list-right" style="position: relative;">
      <button class="more-button" @click="toggleOptions"><i class="fas fa-ellipsis" style="color: #FFFFFFDE;"></i></button>
        <div v-if="showOptions" class="options-menu" style="top: 40px;">
          <ul>
            <li><button @click="editTest">수정하기</button></li>
            <li><button @click="deleteTest">삭제하기</button></li>
            <li><button @click="shareTest">공유하기</button></li>
            <li><button @click="previewTest">미리보기</button></li>
          </ul>
        </div>
    </div>
  </div>
<!--  <div class="pagination">-->
<!--    <button @click="prevPage" :disabled="currentPage === 1" class="pagination-button">Previous</button>-->
<!--    <span class="pagination-info">Page {{ currentPage }} of {{ totalPages }}</span>-->
<!--    <button @click="nextPage" :disabled="currentPage === totalPages" class="pagination-button">Next</button>-->
<!--  </div>-->
</template>

<script>
export default {
  name: 'ReaderTestList',
  data() {
    return {
      readerTests: [
        {
          no: 1,
          title: 'Thyroid gland reader test',
          department: 'Endocrinology | Thyroid gland',
          tool: 'Classification',
          purpose: 'For Professionals',
          participants: 50,
          progress: 'Not started',
          period: '24.10.12 ~ 24.10.16'
        }
        // Add more test entries as needed
      ],
      currentPage: 1,
      itemsPerPage: 10,
      showOptions: false  // showOptions 추가
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.readerTests.length / this.itemsPerPage);
    }
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    toggleOptions() {
      this.showOptions = !this.showOptions;
    },
    editTest() {
      console.log('Edit test clicked');
    },
    deleteTest() {
      console.log('Delete test clicked');
    },
    shareTest() {
      console.log('Share test clicked');
    },
    previewTest() {
      console.log('Preview test clicked');
    }
  }
}
</script>

<style scoped>
@import "@/assets/styles/tableStyles.css";
@import '@fortawesome/fontawesome-free/css/all.css';

.test-list {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #3E3E3E;
  padding: 20px;
  background: rgba(255, 255, 255, 0.07);
  border-radius: 10px;
  flex-grow: 1; /* 리스트가 가능한 공간을 모두 차지하도록 설정 */
}

.list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  flex: 1;
  text-align: left;
}

.list-table td {
  padding: 20px;
  text-align: left;
  border: none;

}

.no-column {
  font-weight: 500;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.87);
  margin-right: 10px;
}

.title-column .title {
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  color: #FFFFFFDE;
}

.title-column .department {
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  color: #FFFFFF99;
}

.tool-column {
  margin: 3px;
}
.tool-button {
  padding: 5px 15px;
  border: 1px solid #7168F9;
  background: #7168F926;
  color: #FFFFFF;
  font-weight: bold;
  border-radius: 20px;
  cursor: pointer;
}
.tool-button:hover {
  background-color: #7168F9;
}

.purpose-column {
  margin: 3px;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  color: #FFFFFFDE;

}

.participant-column {
  margin: 5px;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  color: #FFFFFFDE;

}

.progress-column .progress {
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  color: #FFFFFFDE;
}
.progress-column .period {
  margin-left: 40px;
  font-weight: 500;
  font-size: 10px;
  line-height: 10px;
  color: #FFFFFF99;
}

.list-right {
  width: 3%;
  display: flex;
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
  line-height: 14px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
}
.more-button {
  background: #FFFFFF14;
  color: #FFFFFFDE;
  border: none;
  border-radius: 60px;
}

.options-menu {
  position: absolute;
  top: 40px; /* 버튼 아래에 옵션 메뉴가 표시되도록 설정 */
  left: 0;
  background-color: #1E1E1E;
  border: 1px solid #3E3E3E;
  border-radius: 4px;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  z-index: 100; /* 다른 요소보다 위에 표시되도록 설정 */
}
.options-menu ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.options-menu li {
  margin-bottom: 5px;
}
.options-menu button {
  background: none;
  border: none;
  color: #FFFFFF;
  cursor: pointer;
  font-weight: bold;
}
.options-menu button:hover {
  color: #7168F9;
}

.pagination {
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #1E1E1E;
  padding: 10px;
  border-radius: 4px;
  align-self: center; /* 페이지네이션을 가운데 정렬 */
  margin-top: 40px;
  align-items: center;

  overflow: auto;
  z-index: auto;
}
.pagination-button {
  padding: 10px;
  background-color: #6200EE;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 5px;

}

.pagination-button:hover {
  background-color: #3700B3;
}


.pagination-info {
  font-weight: bold;
  color: #FFFFFF;
  margin: 0 10px;
}
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}


</style>