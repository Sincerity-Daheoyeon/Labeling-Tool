<script lang="ts">
import { defineComponent } from "vue";
import ThumbnailComponents from "../components/thumbnail/ThumbnailComponents.vue";
import axios from "axios";

export default defineComponent({
  name: "ClassificationView",
  components: {
    ThumbnailComponents,
  },
  data() {
    return {
      currentPatientID: "", // 현재 선택된 환자의 ID
      currentImageID: 0, // 현재 보여줄 이미지의 ID 번호
      thumbnailList: [] as { patient_name: string; thumbnail_image: string }[], // 썸네일 리스트
      patientImages: [] as string[], // 환자의 이미지 리스트
      currentImageIndex: 0, // 현재 보여줄 이미지 인덱스
    };
  },

  methods: {
    handleThumbnailClick(patient: { patient_name: string }) {
      // 썸네일 클릭 시 환자 ID 설정
      this.setPatientID(patient.patient_name);
    },
    setPatientID(patient_name: string) {
      this.currentPatientID = patient_name;
      const imageTitle = document.getElementById(
        "image-title"

      ) as HTMLSpanElement;
      if (imageTitle) {
        imageTitle.innerText = patient_name;
      }
      // 이미지 요소의 ID 설정
      this.currentImageID = this.currentImageIndex;
      const previewImage = document.getElementById("preview") as HTMLImageElement;
      if (previewImage) {
        previewImage.id = `image-${this.currentImageID}`; // 이미지 요소의 ID를 이미지 번호로 설정
      }
    },

    // preview 이미지를 업데이트하는 메서드
    updatePreview() {
      if (this.patientImages.length > 0) {
        const preview = document.getElementById(`image-${this.currentImageID}`) as HTMLImageElement;
        if (preview) {
          preview.src = `data:image/png;base64,${
            this.patientImages[this.currentImageIndex]
          }`;
        }
      }
    },

    // 스크롤로 이미지를 변경하는 메서드
    handleScroll(event: WheelEvent) {
      const sensitivity = 10; // 민감도 값 (크면 스크롤이 느려짐)

      if (event.deltaY < -sensitivity) {
        // 스크롤 업: 이전 이미지로 넘어감
        if (this.currentImageIndex > 0) {
          this.currentImageIndex--;
        }
        this.updatePreview(); // 이미지 변경 후 업데이트
      } else if (event.deltaY > sensitivity) {
        // 스크롤 다운: 다음 이미지로 넘어감
        if (this.currentImageIndex < this.patientImages.length - 1) {
          this.currentImageIndex++;
        }
        this.updatePreview(); // 이미지 변경 후 업데이트
      }
    },

    mounted() {
      // preview 이미지에 스크롤 이벤트 리스너 등록
      const previewElement = document.getElementById("preview");
      if (previewElement) {
        previewElement.addEventListener("wheel", this.handleScroll);
      }
    },
    beforeUnmount() {
      // 컴포넌트가 파괴될 때 이벤트 리스너 해제
      const previewElement = document.getElementById(`image-${this.currentImageID}`);
      if (previewElement) {
        previewElement.removeEventListener("wheel", this.handleScroll);
      }
    },
  },
});
</script>

<template>
  <div class="view-container">
    <div class="left-container">
      <div class="left-items"></div>
      <div class="left-items"></div>
      <div class="left-items"></div>
      <div class="left-items"></div>
      <div class="image-title-container">
        <span class="image-title" id="image-title"></span>
        <div class="image-container">
<!--          <img-->
<!--            id="preview"-->
<!--            src=""-->
<!--            alt="loading..."-->
<!--          />-->
        </div>
      </div>
      <div class="left-items"></div>
      <div class="left-items"></div>
      <div class="reader-container">
        <div class="reader-text-container">
          <p style="color: white">
            생각하시기에, 해당 환자는 어떤 것 같습니까? <br />
            ICP가 20보다 작을 경우 (ICP &lt;= 20 mmHg) - No IICP 버튼을, <br>
            20보다 크다고 생각될 경우 (ICP &gt; 20 mmHg) - IICP 버튼을 눌러주세요.
          </p>
        </div>
        <div class="reader-button-container">
          <button class="no-iicp" @click="setLabel(0)">
            No IICP ( &lt; 20)
          </button>
          <button class="iicp" @click="setLabel(1)">IICP (&gt; 20)</button>
        </div>
      </div>
      <div class="left-items"></div>
      <!--      <div class="tool-bar">-->
      <!--        <div class="tool-bar-default"></div>-->
      <!--        <div class="tool-bar-contents">-->
      <!--          <div></div>-->
      <!--&lt;!&ndash;          <div class="tool-bar-item-container">&ndash;&gt;-->
      <!--&lt;!&ndash;            <div class="tool-bar-content-item-01 tool-bar-item" id="tool-bar-content-item-01"></div>&ndash;&gt;-->
      <!--&lt;!&ndash;          </div>&ndash;&gt;-->
      <!--&lt;!&ndash;          <div class="tool-bar-item-container">&ndash;&gt;-->
      <!--&lt;!&ndash;            <div class="tool-bar-content-item-02 tool-bar-item" id="tool-bar-content-item-02"></div>&ndash;&gt;-->
      <!--&lt;!&ndash;          </div>&ndash;&gt;-->
      <!--          <div class="tool-bar-item-container">-->
      <!--            <div class="tool-bar-content-item-03 tool-bar-item" id="tool-bar-content-item-03"></div>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->
    </div>
    <div class="right-container">
      <div class="rt-container">
        <span
          id="patient-meta"
          :class="[
            currentPatientID === ''
              ? 'patient-meta-text-center'
              : 'patient-meta-text',
          ]"
        >
          환자 정보
        </span>
      </div>
      <div class="rd-container">

        <div class="center-align">
          <ThumbnailComponents
            :thumbnailList="thumbnailList"
            @select-thumbnail="fetchPatientImages"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Reader Test - Classification */

.view-container {
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1.75fr 1fr;
  background: #121212;
  box-shadow: 0 7px 29px rgba(100, 100, 111, 0.2);

}

.left-container {
  width: 100%;
  height: 100%;
  background: #121212;
  display: grid;
  grid-template-rows: 0.5fr 5fr 3fr;
  grid-template-columns: 1fr 5fr 1fr;
  justify-items: center;
  align-items: center;
  border-radius: 20px;
}

.tool-bar {
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 20px;
  margin-top: 20px;
  width: 50px;
  height: 50px;
  background-color: #141414;
  border-radius: 20px;
  border: #2c2c2c 1px solid;
  transition: width 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tool-bar-contents {
  display: grid;
  opacity: 0;
  visibility: hidden;
  width: 0;
  height: 100%;
  grid-template-columns: 0.75fr 1fr 1fr 1fr;
  transition: opacity 0.3s ease-in-out 0.3s, visibility 0.3s ease-in-out 0.3s;
  justify-items: center;
  align-items: center;
}

/*
.tool-bar-default {
  width: 80%;
  height: 80%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  content: url("../../../../../../Downloads/snuh-anesthesiology-front-main 2/src/assets/icons/menu.svg");
}

.tool-bar-content-item-01 {
  content: url("../../../../../../Downloads/snuh-anesthesiology-front-main 2/src/assets/icons/zoom-in.svg");
}

.tool-bar-content-item-02 {
  content: url("../../../../../../Downloads/snuh-anesthesiology-front-main 2/src/assets/icons/zoom-out.svg");
}

.tool-bar-content-item-03 {
  content: url("../../../../../../Downloads/snuh-anesthesiology-front-main 2/src/assets/icons/measure.svg");
}

*/

.tool-bar:hover {
  width: 200px;
  box-shadow: 0 -2px 5px rgba(255, 255, 255, 0.1);
}

.tool-bar:hover .tool-bar-contents {
  width: 100%;
  opacity: 1;
  visibility: visible;
}

.tool-bar:hover .tool-bar-default {
  display: none;
}

.tool-bar-item {
  width: 70%;
  height: 70%;
  transition: width 0.2s ease-in-out, height 0.2s ease-in-out;
}

.tool-bar-item-container {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tool-bar-item:hover {
  width: 90%;
  height: 90%;
}

.image-title-container {
  width: calc(min(80%, 55dvh));
  aspect-ratio: 1 / 1;
}

.image-container {
  width: 100%;
  height: calc(100% - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
  border: #ffffff 1px solid;
  border-radius: 10px;
  overflow: hidden;
  padding: 30px;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.image-title {
  width: 100%;
  height: 50px;
  padding: 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFFDE;
  font-size: 24px;
  font-weight: 400;
  line-height: 28.64px;
}

.reader-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  gap: 10px;
  margin-bottom: 20px;
}

.reader-text-container {
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 16px;
  justify-content: center;
  align-items: center;
}

.reader-text-container p {
  color: white;
  width: 100%;
  height: 100%;
  text-align: center;
  align-content: center;
  justify-content: space-evenly;
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  color: #FFFFFFDE;
}

.reader-button-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  width: 80%;
}

.reader-button-container button {
  min-width: 120px;
  width: 80%;
  height: 80%;
  color: #FFFFFFDE;
  background-color: #7168F926;
  border: #7168F9 1px solid;
  cursor: pointer;
  font-weight: 400;
  font-family: "Nunito", sans-serif;
  border-radius: 10px;
  overflow: hidden;
  padding: 8px;
  font-size: 16px;
  transition: background-color 0.45s ease-in-out, box-shadow 0.45s ease-in-out,
    border 0.45s ease-in-out;
}

.reader-button-container button:hover {
  box-shadow: 0 0 4px rgba(255, 255, 255, 1);
  border: white 1px solid;
}

.reader-button-container .no-iicp:hover {
  background-color: #007bff;
}

.reader-button-container .iicp:hover {
  background-color: #728c46;
}

.right-container {
  width: 100%;
  height: 100%;
  display: grid;
  gap: 10px;

}

.rt-container {
  margin-top: 10px;
  width: 98%;
  height: 97%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border: #FFFFFF0D 1px solid;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
}

#patient-meta {
  width: 100%;
  justify-content: flex-start;  /* 수평 정렬: 왼쪽 */
  align-items: flex-start;      /* 수직 정렬: 위쪽 */
  padding: 30px;                /* 상단과 좌측 여백 */
  color: #FFFFFFDE;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  white-space: pre-wrap;
  max-height: 40svh;
  margin: 0;
}

.patient-meta-text-center {
  width: 100%;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  padding: 10px;
  white-space: pre-wrap;
  display: flex;
  justify-content: center;
  align-items: center;
}

.rd-container {
  position: relative;
  width: 98%;
  height: calc(100% - 20px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border: #FFFFFF0D 1px solid;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
}


.left-container {
  overflow: auto;
}

/* 웹킷 기반 브라우저에서의 스크롤바 스타일 */
::-webkit-scrollbar {
  width: 12px;
  height: 12px; /* 가로 스크롤바 높이 */
}

/* 스크롤바 트랙 스타일 (배경) */
::-webkit-scrollbar-track {
  background: #2c3e50; /* 트랙 배경색 */
  border-radius: 10px;
}

/* 스크롤바 자체 스타일 */
::-webkit-scrollbar-thumb {
  background-color: #007bff; /* 스크롤바 색상 */
  border-radius: 10px; /* 둥근 모서리 */
  border: 3px solid #2c3e50; /* 스크롤바와 트랙 사이의 간격 */
}

/* 스크롤바를 잡고 클릭했을 때의 스타일 */
::-webkit-scrollbar-thumb:active {
  background-color: #0056b3; /* 활성화 시 색상 */
}

/* 스크롤바의 각도 스타일링 (세로, 가로) */
::-webkit-scrollbar-corner {
  background: #2c3e50; /* 가로 세로 스크롤바가 만나는 모서리 부분 */
}

/* 파이어폭스에서의 스크롤바 스타일 */
html {
  scrollbar-width: thin; /* 얇은 스크롤바 */
  scrollbar-color: #007bff #2c3e50; /* 스크롤바와 트랙 색상 */
}

.center-align {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 100%;
  height: 100%;
}
</style>
