<template>
 <div class="default-layout">
   <NavigationBar />
    <div class="content-container">
      <AdminSideBar />
        <div class="test-management-detail">
            <AdminPageHeader :title="test.title" :subtitle="breadcrumbSubtitle" />
            <DetailButtonBar />
            <div class="test-detail">
              <!-- 테스트 리스트 세부 사항이 여기에 들어갑니다 -->
              <TestInformation :test="test" />
              <TableSection title="Data" :items="data">
                <template #action>
                  <button class="edit-button">수정하기
                    <i class="fas fa-chevron-right" style="color: #7168F9;"></i>
                  </button>
                </template>
              </TableSection>
              <TableSection title="Participants" :items="participants">
                <template #action>
                  <button class="edit-button">수정하기
                    <i class="fas fa-chevron-right" style="color: #7168F9;"></i>
                  </button>

                </template>
              </TableSection>
              <TableSection title="Results" :items="results">
                <template #action>
                  <button class="download-button">다운받기
                    <i class="fas fa-chevron-right" style="color: #7168F9;"></i>
                  </button>
                </template>
              </TableSection>
            </div>
          </div>
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AdminDefaultLayout from '@/layouts/AdminDefaultLayout.vue';
import AdminPageHeader from '@/components/header/AdminPageHeader.vue';
import breadcrumbComp from "@/components/breadcrumbComp.vue";
import TestInformation from '@/components/section/testInformation.vue';
import TableSection from '@/components/section/tableSection.vue';
import DetailButtonBar from "@/components/layout/DetailButtonBar.vue";
import DashboardSidebar from "@/components/layout/DashboardSidebar.vue";
import NavigationBar from "@/components/layout/NavigationBar.vue";
import AdminSideBar from "@/components/layout/AdminSideBar.vue";

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

interface DataItem {
  no: number;
  id: string;
  name: string;
  description: string;
}

interface Participant {
  no: number;
  id: string;
  name: string;
  role: string;
}

interface ResultItem {
  no: number;
  id: string;
  name: string;
  description: string;
}

export default defineComponent({
  name: "TestManagementDetail",
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: {
    AdminSideBar, NavigationBar,
    DetailButtonBar,
    AdminPageHeader,
    TestInformation,
    TableSection,
  },
  data() {
    return {
      breadcrumbItems: [
        { name: 'Test Management', link: '/test-management' },
        { name: '' }
      ],
      test: {
        id: '1',
        title: 'Thyroid gland reader test',
        department: 'Endocrinology',
        taskType: 'Classification',
        purpose: 'For Professionals',
        dateRange: '2024.10.12 - 2024.10.16',
        status: 'Not started'
      } as TestData,
      data: [
        // 데이터 리스트
      ] as DataItem[],
      participants: [
        // 참여자 리스트
      ] as Participant[],
      results: [
        // 결과 리스트
      ] as ResultItem[]
    };

  },
  computed: {
    breadcrumbSubtitle(): string {
      return `Test Management > ${this.test.title}`;
    }
  },
  created() {
    this.fetchTestDetails();
  },
  methods: {
    fetchTestDetails() {
      console.log(`Fetching details for test id: ${this.id}`);
      this.test = {
        id: this.id,
        title: 'Thyroid gland reader test',
        department: 'Endocrinology',
        dataType: 'Thyroid gland',
        taskType: 'Classification',
        purpose: 'For Professionals',
        dateRange: '2024.10.12 - 2024.10.16',
        status: 'Not started'
      };
      // breadcrumbItems 업데이트
      this.breadcrumbItems[1].name = this.test.title;
      // data, participants, results 데이터도 여기서 설정할 수 있습니다.
      this.data = [
      ];
      this.participants = [
      ];
      this.results = [
      ];
    }
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
.test-management-detail {
  flex: 1; /* 남은 공간을 전부 차지하게 설정 */
  background-color: #121212;
  padding: 20px;
  color: white;
}

.test-detail {
  margin-top: 20px;
}

.edit-button, .download-button {
  color: #FFFFFFDE;
  background-color: #FFFFFF0D !important;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
  margin-right: 10px;
}

.edit-button:hover, .download-button:hover {
  color: #7268F9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* 약간의 그림자 효과 */
}
</style>
