<template>
  <IonPage>

    
    <!-- Content including the SocialMediaNavbar component -->
    <IonRow>
      <MenuComponent /><!-- the <SocialMediaBarComponent /> is embeded ine 62-66-->     
    </IonRow>
        <!-- Main Content Section with Adverts and Middle Content -->
        <IonRow>
          <!-- Left Advert Section -->
          <IonCol size="12" size-md="2" class="bordered-section">
            <LeftAdvertComponent />
          </IonCol>

          <!-- Middle Content Section -->
          <IonCol size="12" size-md="8" class="bordered-section">
            <MiddleContentComponent />
          </IonCol>

          <!-- Right Advert Section -->
          <IonCol size="12" size-md="2" class="bordered-section">
            <RightAdvertComponent />
          </IonCol>
        </IonRow>

        <!-- Footer Section -->
        <IonFooter >
          <FooterComponent />
        </IonFooter>
      
  </IonPage>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonFooter } from '@ionic/vue';
import MenuComponent from '@/components/6TempComponents/MenuComponent.vue';
import SocialMediaBarComponent from '@/components/6TempComponents/SocialMediaBarComponent.vue';
import FooterComponent from '@/components/6TempComponents/FooterComponent.vue';



export default defineComponent({
  name: 'TemplatePage',
  components: {
    IonPage,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    MenuComponent,
    SocialMediaBarComponent,
    FooterComponent,
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
  display: flex; 
}

@media (min-width: 768px) {
  .main-content-row ion-col {
    margin-bottom: 0; 
  }
}
</style>
