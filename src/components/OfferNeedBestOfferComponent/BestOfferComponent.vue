<template>
  <IonCard>
    <IonCardHeader class="CenterPositions TitelSubTitle">
      <IonCardSubtitle class="OfferSubTitle">
        Card Subtitle Person Name</IonCardSubtitle>
      <IonCardTitle class="OfferTitle">Card Title Company Name</IonCardTitle>
    </IonCardHeader>
    <IonRow class="CenterPositions ImgSocialButtonRow">
      <img alt="LEN Logo" height="100" width="150" src="/favicon.png"/>
      <IonButton>I want to Satisfy/Provide this Need</IonButton>
      <IonRow class="CenterPositions social-media-icons">
        <IonButton size="small" fill="clear" class="social-button">
          <IonIcon :icon="logoLinkedin" class="linkedin-icon"/>
        </IonButton>
        <IonButton size="small" fill="clear" class="social-button">
          <IonIcon :icon="logoGoogle" class="google-icon"/>
        </IonButton>
        <IonButton size="small" fill="clear" class="social-button">
          <IonIcon :icon="logoFacebook" class="facebook-icon" />
        </IonButton>
        <IonButton size="small" fill="clear" class="social-button">
          <IonIcon :icon="logoTwitter" class="twitter-icon"/>
        </IonButton>
        <IonButton size="small" fill="clear" class="social-button">
          <IonIcon :icon="linkOutline" class="link-outline"/>
        </IonButton>
      </IonRow>
      <p> Want to create a FREE advert like this?<a href="/home" class="Events-button"> Click HERE </a> & fill the form, simple! </p>
      <IonRow> Category: OFFICE SPACE Wanted: 1 Seen: 1370 List Viewed: 987 Renewed: 1 Like: 2987  </IonRow>
    </IonRow>
    <IonCardContent class="ContentSection">
      <p>
        Offer & needs content here. commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </p>
    </IonCardContent>
  </IonCard>
  <IonRow> <!-- This component is for after clicking on the BUTTON for members to fill the form-->
    <BusinessAdviceBestOffers7CategoriesFormComponents/>
  </IonRow>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { IonGrid, IonRow, IonCol, IonIcon, IonCard, IonButton, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonSegment, IonSegmentButton,} from "@ionic/vue";
import { logoFacebook, logoTwitter, logoGoogle, logoLinkedin, linkOutline,} from "ionicons/icons";
import BusinessAdviceBestOffers7CategoriesFormComponents from '@/components/OfferNeedBestOfferComponent/BestOffers7CategoriesFormComponents/BusinessAdviceBestOffers7CategoriesFormComponent.vue';


export default defineComponent({
  name: "BestOfferComponent",
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonCard,
    IonButton,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonSegment,
    IonSegmentButton,
    BusinessAdviceBestOffers7CategoriesFormComponents,
  },
  setup() {
    const selectedTab = ref<string>("Marketing"); // Initialize with the default tab

    return {
      logoFacebook,
      logoTwitter,
      logoLinkedin,
      logoGoogle,
      linkOutline,
      selectedTab,
    };
  },
});
</script>

<style scoped>
/* *{
  border: solid 1px black;
} */

/* tabs CSS */

.Tabs7_MarketingAccountingInvestmentLawBusinessAdviceWebDevelopmentOfficeSpace {
  display: flex;
  flex-wrap: wrap; /* Allow tabs to wrap to the next row */
  margin-bottom: 10px;
}

.TabSegment {
  display: flex;
  flex-wrap: wrap; /* Allow segment buttons to wrap */
  width: 100%;
}

.TabSegment .btn {
  flex: 1 1 auto; /* Ensure buttons are flexible and wrap appropriately */
  min-width: 150px; /* Minimum width for each button to ensure readability */
}

.DisplayComponentRow {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.Marketing,
.Accounting,
.Investment,
.Law,
.BusinessAdvice,
.WebDevelopment,
.OfficeSpace {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  flex: 1 1 calc(50% - 20px); /* Ensure columns are responsive */
  margin: 10px;
}

@media (max-width: 600px) {
  .Marketing,
  .Accounting,
  .Investment,
  .Law,
  .BusinessAdvice,
  .WebDevelopment,
  .OfficeSpace {
    flex: 1 1 100%; /* Make each tab content full width on small screens */
  }
}

/* tabs CSS end ###########################*/

.CenterPositions {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
}

.TitelSubTitle,
.ImgSocialButtonRow,
.ContentSection {
  border: solid 1px rgb(148, 138, 138);
  border-radius: 5px;
  gap: 5px;
}

/* Social media icon colors */
.social-media-icons {
  background-color: white;
  padding: 4px 0;
}

.social-button {
  margin: 0;
  padding: 0;
}

.linkedin-icon {
  color: #0077b5; /* LinkedIn blue */
}

.google-icon {
  color: #db4437; /* Google red */
}

.facebook-icon {
  color: #3b5998; /* Facebook blue */
}

.twitter-icon {
  color: #1da1f2; /* Twitter blue */
}

a {
  font-weight: bold;
}
</style>
