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
      
        <IonRow class="main-content-row">
          
          <!-- Middle Content Section -->
          <IonCol class="bordered-section SignInSignUpComponent">
            <SimpleAdvertisingComponent />
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

import SimpleAdvertisingComponent from '@/components/AdvertsComponents/SimpleAdvertisingComponent.vue';

import FooterComponent from '@/components/6TempComponents/FooterComponent.vue';


export default defineComponent({
  name: 'AdvertsPage',
  components: {
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonContent,
    MenuComponent,
    SocialMediaBarComponent,

    SimpleAdvertisingComponent,

    FooterComponent,
  },
});
</script>

<style scoped>

  /* ion-content {
    align-items: center;
    align-content: center;
    justify-content: center;
    position: center;
    max-width: 1500px;
    background-color: red;
  } */
  .bordered-section {
    border: 1px solid #000;
    padding: 0;
    margin: 0;
    z-index: 1;
    /* gap: 100px; */
  }

  @media (max-width: 768px) {
    .main-content-row ion-col {
      margin-bottom: 0; /* Reset margin for larger screens */
    }


  }
</style>
