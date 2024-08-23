<template>
  <IonCard>
    <IonCardHeader class="CenterPositions TitleSubTitle">
      <IonCardSubtitle class="OfferSubTitle">Card Subtitle Person Name</IonCardSubtitle>
      <IonCardTitle class="OfferTitle">Card Title Company Name</IonCardTitle>
    </IonCardHeader>
    <IonRow class="CenterPositions ImgSocialButtonRow">
      <img alt="LEN Logo" height="100" width="150" src="/favicon.png" />
      <IonButton class="iWantBTN" @click="toggleFormComponent">I want to Satisfy/Provide this Need</IonButton>
      <IonRow class="CenterPositions social-media-icons">
        <IonButton size="small" fill="clear" class="social-button">
          <IonIcon :icon="logoLinkedin" class="linkedin-icon" />
        </IonButton>
        <IonButton size="small" fill="clear" class="social-button">
          <IonIcon :icon="logoGoogle" class="google-icon" />
        </IonButton>
        <IonButton size="small" fill="clear" class="social-button">
          <IonIcon :icon="logoFacebook" class="facebook-icon" />
        </IonButton>
        <IonButton size="small" fill="clear" class="social-button">
          <IonIcon :icon="logoTwitter" class="twitter-icon" />
        </IonButton>
        <IonButton size="small" fill="clear" class="social-button">
          <IonIcon :icon="linkOutline" class="link-outline" />
        </IonButton>
      </IonRow>
      <p>
        Want to create a FREE advert like this?
        <a href="/home" class="Events-button">Click HERE</a> & fill the form, simple!
      </p>
      <IonRow>
        Category: OFFICE SPACE Wanted: 1 Seen: 1370 List Viewed: 987 Renewed: 1 Like: 2987
      </IonRow>
    </IonRow>
    <IonCardContent class="ContentSection">
      <p>
        Offer & needs content here. commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </IonCardContent>
    
  </IonCard>
  <!-- This component is displayed only after clicking the button -->
  <IonRow v-if="showFormComponent"  class="bizForm">
    <BusinessAdviceBestOffers7CategoriesFormComponents />
  </IonRow>

</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { IonCard, IonRow, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonIcon} from "@ionic/vue";
import { logoFacebook, logoTwitter, logoGoogle, logoLinkedin, linkOutline} from "ionicons/icons";
import BusinessAdviceBestOffers7CategoriesFormComponents from "@/components/OfferNeedBestOfferComponent/BestOffers7CategoriesFormComponents/BusinessAdviceBestOffers7CategoriesFormComponent.vue";

export default defineComponent({
  name: "BestOfferComponent",
  components: { IonCard, IonRow, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonIcon, BusinessAdviceBestOffers7CategoriesFormComponents },  setup() {
    const showFormComponent = ref(false); // State to control form component visibility

    const toggleFormComponent = () => {
      showFormComponent.value = !showFormComponent.value; // Toggle form component visibility
    };

    return {
      logoFacebook,
      logoTwitter,
      logoGoogle,
      logoLinkedin,
      linkOutline,
      showFormComponent,
      toggleFormComponent
    };
  }
});
</script>

  <style scoped>
  .CenterPositions {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .TitleSubTitle,
  .ImgSocialButtonRow,
  .ContentSection {
    border: solid 1px rgb(148, 138, 138);
    border-radius: 5px;
    gap: 5px;
  }

  .social-media-icons {
    background-color: white;
    padding: 4px 0;
  }

  .social-button {
    margin: 0;
    padding: 0;
  }

  .linkedin-icon {
    color: #0077b5;
  }

  .google-icon {
    color: #db4437;
  }

  .facebook-icon {
    color: #3b5998;
  }

  .twitter-icon {
    color: #1da1f2;
  }

  a {
    font-weight: bold;
  }
  @media (max-width: 600px) {

  }
</style>
