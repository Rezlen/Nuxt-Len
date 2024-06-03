<template>
  <IonPage>
    <IonCol class="mainCol">
      <IonCol class="section MenuComponent">
        <MenuComponent />
      </IonCol >
      <IonCol class="section SignInSignUpComponent">
          <SignInSignUpComponent />
      </IonCol >
      <IonCol class="section FooterComponent">
          <FooterComponent />
      </IonCol >
    </IonCol>
  </IonPage>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonRow, IonCol } from '@ionic/vue';
import MenuComponent from '@/components/6TempComponents/MenuComponent.vue';
import SocialMediaBarComponent from '@/components/6TempComponents/SocialMediaBarComponent.vue';
import SignInSignUpComponent from '@/components/6TempComponents/SignInSignUpComponent.vue';
import FooterComponent from '@/components/6TempComponents/FooterComponent.vue';

export default defineComponent({
  name: 'TemplatePage',
  components: {
    IonPage,
    IonRow,
    IonCol,
    MenuComponent,
    SocialMediaBarComponent,
    SignInSignUpComponent,
    FooterComponent,
  },
});
</script>


<style scoped>
.mainCol {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  overflow: auto; 
  /* allows scrolling page */
    /* display: grid; */
  /* grid-template-columns: auto auto;  */
  /* Auto-sized columns */
  /* grid-template-rows: auto;  */
  /* Auto-sized rows */
  gap: 10px;
}
.SignInSignUpComponent {
  display: flex;
  align-items: flex-start; 
  /* Align items at the start */
  flex-wrap: wrap; 
  /* Allow wrapping */
}





/* @media (min-width: 768px) {
  .mainCol {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  .section {
    margin-bottom: 40px;
  }
} */
</style>