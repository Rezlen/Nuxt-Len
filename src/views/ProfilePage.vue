<template>
  <IonPage>
    <IonContent>
      <IonGrid>
        <!-- Menu Section -->  <!-- Social Media Section -->
        <IonRow class="bordered-section MenuComponent">
          <MenuComponent />
        </IonRow>
        <IonRow class="bordered-section">
          <SocialMediaBarComponent />
        </IonRow>
      


        <!-- Main Content Section with Adverts and Middle Content -->
        <IonRow class="main-content-row ">
          <ProfileLeftSideBarComponent />  <!--I placed the Left SideBar/menu here so it is NOT hidden in mobile view -->
          <!-- Left Advert Section -->
          <IonCol size="12" size-md="1.5" class="bordered-section LeftAdvertComponent">
            <LeftAd1Component />
            <LeftAd2Component />
            <LeftAd3Component />
            <LeftAd4Component />
          </IonCol>

          <!-- Middle Content Section -->
          <IonCol size="12" size-md="9" class="bordered-section SignInSignUpComponent">
            <IonButton @click="toggleMiniEvent">FormProfilePublicSectionComponent</IonButton>
            <!-- Conditional Rendering of the FormPitchingComponent -->
            <div v-if="showMiniEvent">
              <FormProfilePublicSectionComponent/>
            </div>

            <ProfilePublicSectionComponent />
          </IonCol>

          <!-- Right Advert Section -->
          <IonCol size="12" size-md="1.5" class="bordered-section RightAdvertComponent">
            <RightAd1Component />
            <RightAd2Component />
            <RightAd3Component />
            <RightAd4Component />
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
import { defineComponent, ref } from 'vue';
import { IonPage, IonGrid, IonRow, IonCol, IonContent, IonButton } from '@ionic/vue';
import MenuComponent from '@/components/6TempComponents/MenuComponent.vue';
import SocialMediaBarComponent from '@/components/6TempComponents/SocialMediaBarComponent.vue';
import SignInSignUpComponent from '@/components/6TempComponents/SignInSignUpComponent.vue';
import FooterComponent from '@/components/6TempComponents/FooterComponent.vue';
import LeftAd1Component from '@/components/6TempComponents/LeftRightAds/LeftAd1Component.vue';
import LeftAd2Component from '@/components/6TempComponents/LeftRightAds/LeftAd2Component.vue';
import LeftAd3Component from '@/components/6TempComponents/LeftRightAds/LeftAd3Component.vue';
import LeftAd4Component from '@/components/6TempComponents/LeftRightAds/LeftAd4Component.vue';
import RightAd1Component from '@/components/6TempComponents/LeftRightAds/RightAd1Component.vue';
import RightAd2Component from '@/components/6TempComponents/LeftRightAds/RightAd2Component.vue';
import RightAd3Component from '@/components/6TempComponents/LeftRightAds/RightAd3Component.vue';
import RightAd4Component from '@/components/6TempComponents/LeftRightAds/RightAd4Component.vue';
import ProfilePublicSectionComponent from '/Ionics/nuxt-len/src/components/ProfileComponents/ProfilePublicSectionComponent.vue';
import FormProfilePublicSectionComponent from '@/components/ProfileComponents/FormProfilePublicSectionComponent.vue';
import ProfileLeftSideBarComponent from '@/components/ProfileComponents/ProfileLeftSideBarComponent.vue';



export default defineComponent({
  name: 'ProfilePage',
  components: {
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonContent,
    IonButton,
    MenuComponent,
    SocialMediaBarComponent,
    SignInSignUpComponent,
    FooterComponent,
    LeftAd1Component,
    LeftAd2Component,
    LeftAd3Component,
    LeftAd4Component,
    RightAd1Component,
    RightAd2Component,
    RightAd3Component,
    RightAd4Component,
    ProfilePublicSectionComponent,
    FormProfilePublicSectionComponent,
    ProfileLeftSideBarComponent,
  },
  setup() { 
    const showMiniEvent = ref(false);

    const toggleMiniEvent = () => {
      showMiniEvent.value = !showMiniEvent.value;
    };
    return {
    showMiniEvent,
    toggleMiniEvent,

    };
  }
});
</script>

<style scoped>
ion-grid {
  padding: 0;
  margin: 0;
}

.bordered-section {
  padding: 0;
  margin: 0;
  z-index: 1;
  /* gap: 100px; */
}

@media (max-width: 768px) {
  /* if you can try to make the advert disolaywithin componentts in mobile view */
  .RightAdvertComponent,
  .LeftAdvertComponent {
    display: none;
  }

}
</style>

