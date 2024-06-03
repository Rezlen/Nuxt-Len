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
  height: 100%;
  overflow-y: auto;
}

.MenuComponent {
  height: 100px;
  background-color: blue;
}

.section {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
}
.mainCol ion-col {
  width: 100%;
  height: 100%;
  /* background-color: aqua; */
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
