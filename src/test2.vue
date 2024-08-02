<template>
  <IonGrid>
    <!-- Header text -->
    <p class="Header">Below are the opportunities which LEN (London Entrepreneurs Network) can provide you. We are open to suggestions, contact us.</p>
    
    <IonRow class="mainRow">
      <!-- Checkbox items for website notifications -->
      <IonItem class="Head">
        <IonCheckbox slot="start" v-model="checkboxStates.checkbox1"></IonCheckbox>
        <IonCol class="title label">30 Minutes Workshop Or Presentation IN LEN's Events Or Business Shows</IonCol>
        <IonCol class="DatePrice">
          <IonCol>£2000</IonCol>
          <IonCol>ChooseDate</IonCol>
          <IonCol>
            <IonDatetimeButton datetime="datetime"></IonDatetimeButton>
            <IonModal :keep-contents-mounted="true">
              <IonDatetime id="datetime"></IonDatetime>
            </IonModal>
          </IonCol>
        </IonCol>
        <IonCol class="description label">
          <li>We can ORGANISE up-to 30minutes presentation or workshop in a room within one of our shows/events exclusively for you to present, promote or sell anything you wish.</li>
          <li>You can expect about 30 relevant attendees (highly potential client for)</li>
        </IonCol>
      </IonItem>

      <IonItem class="Head">
        <IonCheckbox slot="start" v-model="checkboxStates.checkbox1"></IonCheckbox>
        <IonCol class="title label">30 Minutes Workshop Or Presentation IN LEN's Events Or Business Shows</IonCol>
        <IonCol class="DatePrice">
          <IonCol>£2000</IonCol>
          <IonCol>ChooseDate</IonCol>
          <IonCol>
            <IonDatetimeButton datetime="datetime"></IonDatetimeButton>
            <IonModal :keep-contents-mounted="true">
              <IonDatetime id="datetime"></IonDatetime>
            </IonModal>
          </IonCol>
        </IonCol>
        <IonCol class="description label">
          <li>We can ORGANISE up-to 30minutes presentation or workshop in a room within one of our shows/events exclusively for you to present, promote or sell anything you wish.</li>
          <li>You can expect about 30 relevant attendees (highly potential client for)</li>
        </IonCol>
      </IonItem>
    </IonRow>

    <IonButton class="UpdateBTN" size="large" expand="block" title="SubmitBTN" @click="submitContent">Update</IonButton>
  </IonGrid>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonItem, IonCheckbox, IonGrid, IonRow, IonCol, IonButton, IonDatetime, IonDatetimeButton, IonModal } from '@ionic/vue';

export default defineComponent({
  name: 'EmailWebsiteNotificationComponent',
  components: {
    IonItem,
    IonCheckbox,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonDatetime,
    IonDatetimeButton,
    IonModal,
  },
  setup() {
    const checkboxStates = ref({
      checkbox1: false,
    });

    const submitContent = () => {
      console.log('Submit button clicked');
    };

    return {
      checkboxStates,
      submitContent,
    };
  },
});
</script>

<style scoped>
.Header {
  text-align: center;
  margin-bottom: 20px;
  font-size: 20px;
}

.mainRow {
  display: flex;
  overflow-x: auto; /* Enable horizontal scrolling */
  white-space: nowrap; /* Prevent wrapping of child elements */
}

.Head {
  display: flex;
  align-items: flex-start; /* Align items at the start */
  flex-direction: row;
  margin-right: 10px; /* Add spacing between items */
  border: 1px lightgray solid;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
  min-width: 200px; /* Ensure a minimum width */
}

.DatePrice {
  display: flex;
  flex-direction: column;
}

.title {
  font-weight: bold;
  max-width: 25%;
  font-size: 14px;
  overflow: hidden; /* Hide overflow */
  text-overflow: ellipsis; /* Add ellipsis for overflow text */
  white-space: nowrap; /* Prevent text wrapping */
}

.description {
  max-width: 50%;
  overflow: hidden; /* Hide overflow */
  text-overflow: ellipsis; /* Add ellipsis for overflow text */
  white-space: nowrap; /* Prevent text wrapping */
}

.label {
  text-align: left;
  flex: 1;
}

.UpdateBTN {
  width: 100%;
}

@media (max-width: 600px) {
  .mainRow {
    width: 100vw; /* Full viewport width */
  }

  .Head {
    min-width: 200px; /* Adjust if necessary */
  }
}
</style>




