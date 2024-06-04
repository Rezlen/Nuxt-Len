<template>
  <IonPage>
    <IonContent>
      <IonGrid>
        <!-- Menu Section -->  <!-- Social Media Section -->
        <IonRow class="bordered-section">
            <MenuComponent />
        </IonRow>
      

        <IonRow class="bordered-section">
          <SocialMediaBarComponent />
        </IonRow>
      
        <!-- Main Content Section with Adverts and Middle Content -->
        <IonRow class="main-content-row ">
          <!-- Left Advert Section -->
          <IonCol size="12" size-md="2" class="bordered-section LeftAdvertComponent">
            <LeftAdvertComponent />
          </IonCol>

          <!-- Middle Content Section -->
          <IonCol size="12" size-md="8" class="bordered-section SignInSignUpComponent">
            <SignInSignUpComponent />
          </IonCol>

          <!-- Right Advert Section -->
          <IonCol size="12" size-md="2" class="bordered-section RightAdvertComponent">
            <RightAdvertComponent />
          </IonCol>
        </IonRow>

        <!-- Footer Section -->
        <IonRow>
          <IonCol class="bordered-section FooterComponent">
            <FooterComponent />
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonPage>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonGrid, IonRow, IonCol, IonContent } from '@ionic/vue';
import MenuComponent from '@/components/6TempComponents/MenuComponent.vue';
import SocialMediaBarComponent from '@/components/6TempComponents/SocialMediaBarComponent.vue';
import SignInSignUpComponent from '@/components/6TempComponents/SignInSignUpComponent.vue';
import FooterComponent from '@/components/6TempComponents/FooterComponent.vue';

export default defineComponent({
  name: 'SignInSignUpPage',
  components: {
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonContent,
    MenuComponent,
    SocialMediaBarComponent,
    SignInSignUpComponent,
    FooterComponent,
  },
});
</script>

<style scoped>
ion-grid {
    padding: 0;
  margin: 0;
}

.bordered-section {
  border: 1px solid #000;
  background-color: lightgray;
  padding: 0;
  margin: 0;
  z-index: 1;
  /* gap: 100px; */
}
/* .MenuComponent {
  background-color: blue;
  display: flex;
} */

.TopRow {
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
  /* align-content: center; */
  /* justify-content: center; */
  /* gap: 100px; */
}

@media (min-width: 768px) {
  .main-content-row ion-col {
    margin-bottom: 0; /* Reset margin for larger screens */
  }

}
</style>
