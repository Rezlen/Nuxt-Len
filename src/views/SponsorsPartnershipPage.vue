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
          <!-- Floating Left Sidebar -->
          <FilterByComponent class="floating-sidebar" />  <!--I placed the Left filter/menu here so it is NOT hidden in mobile view -->
          <!-- Left Advert Section -->
          <IonCol size="12" size-md="1.5" class="bordered-section LeftAdvertComponent">
            <LeftAd1Component />
            <LeftAd2Component />
            <LeftAd3Component />
            <LeftAd4Component />
          </IonCol>



          <!-- Middle Content Section -->
          <IonCol size="12" size-md="9" class="bordered-section SignInSignUpComponent">
            
            <!-- 4Tabs 1- All Business profiles 2- All PastSponsorsPartners 3- All SponsorshipPartnershipForm 4- Best PastSponsorsPartners 5- Advertise for FREE ##############################-->
            <IonCol class="Tab5BiZOfferNeedRow">
              <IonRow class="Tabs4CurrentSponsorsPartnersAllOffersAllNeedsBestOffersAdvertiseForFree">
                <IonSegment v-model="selectedTab" class="TabSegment" color="primary">
                  <IonSegmentButton class="btn" value="CurrentSponsorsPartners">Current Sponsors Partners</IonSegmentButton>
                  <IonSegmentButton class="btn" value="PastSponsorsPartners">Past Sponsors Partners</IonSegmentButton>
                  <IonSegmentButton class="btn" value="SponsorshipPartnershipForm">All Sponsorship Partnership Form</IonSegmentButton>
                </IonSegment>
              </IonRow>
              <IonRow class="DisplayComponentRow">
                <IonCol v-show="selectedTab === 'CurrentSponsorsPartners'" class="CurrentSponsorsPartners">
                  <MiniProfileCardComponent />
                  <MiniProfileCardComponent />
                </IonCol>
                <IonCol v-show="selectedTab === 'PastSponsorsPartners'" class="PastSponsorsPartners">
                  <!-- Component for All PastSponsorsPartners #########" -->
                  <OfferComponent />
                </IonCol>
                <IonCol v-show="selectedTab === 'SponsorshipPartnershipForm'" class="SponsorshipPartnershipForm">
                  <!-- Component for All SponsorshipPartnershipForm #########" -->
                  <SponsorshipPartnershipFormComponent />
                </IonCol>
              </IonRow>
            </IonCol>

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
import { IonPage, IonGrid, IonRow, IonCol, IonContent, IonSegment, IonSegmentButton, IonTitle } from '@ionic/vue';
import MenuComponent from '@/components/6TempComponents/MenuComponent.vue';
import SocialMediaBarComponent from '@/components/6TempComponents/SocialMediaBarComponent.vue';
import FooterComponent from '@/components/6TempComponents/FooterComponent.vue';
import LeftAd1Component from '@/components/6TempComponents/LeftRightAds/LeftAd1Component.vue';
import LeftAd2Component from '@/components/6TempComponents/LeftRightAds/LeftAd2Component.vue';
import LeftAd3Component from '@/components/6TempComponents/LeftRightAds/LeftAd3Component.vue';
import LeftAd4Component from '@/components/6TempComponents/LeftRightAds/LeftAd4Component.vue';
import RightAd1Component from '@/components/6TempComponents/LeftRightAds/RightAd1Component.vue';
import RightAd2Component from '@/components/6TempComponents/LeftRightAds/RightAd2Component.vue';
import RightAd3Component from '@/components/6TempComponents/LeftRightAds/RightAd3Component.vue';
import RightAd4Component from '@/components/6TempComponents/LeftRightAds/RightAd4Component.vue';

import FilterByComponent from '@/components/OfferNeedBestOfferComponent/FilterByComponent.vue';


import SponsorshipPartnershipFormComponent from '@/components/SponsorshipPartnershipComponents/SponsorshipPartnershipFormComponent.vue';


export default defineComponent({
  name: 'BizOfferNeedPage',
  components: {
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonContent,
    MenuComponent,
    SocialMediaBarComponent,
    FooterComponent,
    LeftAd1Component,
    LeftAd2Component,
    LeftAd3Component,
    LeftAd4Component,
    RightAd1Component,
    RightAd2Component,
    RightAd3Component,
    RightAd4Component,
    IonSegment,
    IonSegmentButton,

    FilterByComponent,

    SponsorshipPartnershipFormComponent,

  },
  setup() {
    const selectedTab = ref<string>('#'); // Initialize with the default tab

    return {
      selectedTab,
    };
  },
});

</script>



<style scoped>

.bordered-section {
  padding: 0;
  margin: 0;
  z-index: 1;
}

/* Updated for new tab names and mobile responsiveness */

.MiniProfilesRow {
  padding: 10px;
}

.Tabs4CurrentSponsorsPartnersAllOffersAllNeedsBestOffersAdvertiseForFree {
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
  letter-spacing: 0.5px;
}

.DisplayComponentRow {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.CurrentSponsorsPartners,
.PastSponsorsPartners,
.SponsorshipPartnershipForm {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  flex: 1 1 calc(50% - 20px); /* Ensure columns are responsive */
  margin: 10px;
}

/* This makes the sidebar floating beautifully */
.floating-sidebar {
  position: absolute;
  /* z-index: 1000; */    /* Ensure it is above other content */
}

@media (max-width: 768px) {
  .CurrentSponsorsPartners,
  .PastSponsorsPartners,
  .SponsorshipPartnershipForm {
    flex: 1 1 100%; /* Make each tab content full width on small screens */
  }

    /* if you can try to make the advert disolaywithin componentts in mobile view */
  .RightAdvertComponent,
  .LeftAdvertComponent {
    display: none;
  }
}
</style>

