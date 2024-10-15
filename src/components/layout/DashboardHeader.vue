<template>
  <div class="header">
    <div class="header-left">
      <table class="list-header" style="width: 100%; table-layout: auto;">

        <thead>
          <tr>
            <th class="col-no">NO</th>
            <th class="col-title">Title / Department</th>
            <th class="col-tool">Tool</th>
            <th class="col-purpose">Purpose</th>
            <th class="col-participants">Participants</th>
            <th class="col-progress">Progress</th>
          </tr>
        </thead>
      </table>

    </div>
    <div class="header-right">
      <button class="create-test-button">리더 테스트 생성하기 <i class="fas fa-circle-plus" style="#FFFFFF;"></i></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReaderTestHeader',
  data() {
    return {
      sortBy: 'title'
    };
  }
}
</script>

<style scoped>
@import "@/assets/styles/tableStyles.css";

.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #3E3E3E;
}
.header-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  flex: 1;
  text-align: left;
}

.list-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  table-layout: auto;
}
.list-table th, .list-table td {
  padding: 20px;
  text-align: left;
  border: none;

}

th {
  color: #FFFFFF99;
  font-weight: 500;
  font-size: 11px;
  line-height: 11px;
}


.header-right {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
}
.create-test-button {
  padding: 10px 20px;
  background-color: #7168F9;
  color: #FFFFFF;
  border: none;
  border-radius: 100px;
  font-weight: bold;
  cursor: pointer;
  line-height: 14px;
  justify-content: center;
  align-items: center;
}
.create-test-button:hover {
  background-color: #3700B3;
}
.sort-options {
  display: flex;
  align-items: center;
  margin-left: 20px;
}
.sort-options label {
  margin-right: 10px;
  font-weight: bold;
}
.sort-options select {
  padding: 5px;
  background-color: #2E2E2E;
  color: white;
  border: none;
  border-radius: 4px;
}
</style>
