<template>
  <IonToolbar>
    <IonGrid>
      <!-- Main Content Section  -->
      <IonRow>
        <!-- Share This Page In Your Pages (Post in your social media timeline)-->
        <IonCol class="bordered-section">

        </IonCol>

        <!-- Invite/Send A Message To Your Friends Or Contacts In: (Individual messages that you can send to your Twitter connection, FB friends and so on)-->
        <IonCol class="bordered-section">

        </IonCol>

        <!-- Search Box (Displaying searche results from this page THEN search results forund on other pages)-->
        <IonCol class="bordered-section">

        </IonCol>

        <!-- About This Page Button (Description about every individual page)-->
        <IonCol class="bordered-section">

        </IonCol>

        <!-- Connect With Your Social Friends (Displaying your social media who are in our website too)-->
        <IonCol class="bordered-section">

        </IonCol>

        <!-- Connect With Us In: (connect/join our social media) -->
        <IonCol class="bordered-section">

        </IonCol>
      </IonRow>

    </IonGrid>
  </IonToolbar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent, IonGrid, IonRow, IonCol } from '@ionic/vue';


export default defineComponent({
  name: 'SocialMediaBarComponent',
  components: {
    IonPage,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
  },
});
</script>

<style scoped>
.bordered-section {
  border: 1px solid #000;
  background-color: lightgray;
  padding: 10px;
  box-sizing: border-box;
  z-index: 1;
  display: flex; /* Explicitly setting display */
}

@media (min-width: 768px) {
  .main-content-row ion-col {
    margin-bottom: 0; /* Reset margin for larger screens */
  }
}
</style>
