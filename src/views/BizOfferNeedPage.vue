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
            <LeftAd1Component />
            <LeftAd2Component />
            <LeftAd3Component />
            <LeftAd4Component />
          </IonCol>



          <!-- Middle Content Section -->
          <IonCol size="12" size-md="8" class="bordered-section SignInSignUpComponent">
            
            <!-- 4Tabs 1- All Business profiles 2- All Offers 3- All Needs 4- Best offers 5- Advertise for FREE ##############################-->
            <IonCol class="Tab5BiZOfferNeedRow">
              <IonRow class="Tabs4AllBusinessProfilesAllOffersAllNeedsBestOffersAdvertiseForFree">
                <IonSegment v-model="selectedTab" class="TabSegment" color="primary">
                  <IonSegmentButton class="btn" value="BusinessProfiles">All Business Profiles</IonSegmentButton>
                  <IonSegmentButton class="btn" value="Offers">All Offers</IonSegmentButton>
                  <IonSegmentButton class="btn" value="Needs">All Needs</IonSegmentButton>
                  <IonSegmentButton class="btn" value="BestOffers">Best Offers</IonSegmentButton>
                  <IonSegmentButton class="btn" value="AdvertiseForFree">Advertise For FREE</IonSegmentButton>
                </IonSegment>
              </IonRow>
              <IonRow class="DisplayComponentRow">
                <IonCol v-show="selectedTab === 'BusinessProfiles'" class="AllBusinessProfiles">
                  <MiniProfileCardComponent />
                  <MiniProfileCardComponent />
                </IonCol>
                <IonCol v-show="selectedTab === 'Offers'" class="AllOffers">
                  <!-- Component for All Offers #########" -->
                  <OfferComponent />
                </IonCol>
                <IonCol v-show="selectedTab === 'Needs'" class="AllNeeds">
                  <!-- Component for All Needs #########" -->
                  <NeedComponent />
                </IonCol>
                <IonCol v-show="selectedTab === 'BestOffers'" class="BestOffers">
                  <!-- Carefull !!! This Component is athe 7 tabs only THEN in its tab component the BEST OFFERs are nested #########" -->
                  <BestOfferTABsComponent />
                </IonCol>
                <IonCol v-show="selectedTab === 'AdvertiseForFree'" class="AdvertiseForFree">
                  <!-- Component for Advertise For FREE #########" -->
                  <MiniProfileCardComponent />
                </IonCol>
              </IonRow>
            </IonCol>

          </IonCol>





          <!-- Right Advert Section -->
          <IonCol size="12" size-md="2" class="bordered-section RightAdvertComponent">
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
import { IonPage, IonGrid, IonRow, IonCol, IonContent, IonSegment, IonSegmentButton } from '@ionic/vue';
import MenuComponent from '@/components/6TempComponents/MenuComponent.vue';
import SocialMediaBarComponent from '@/components/6TempComponents/SocialMediaBarComponent.vue';
import FooterComponent from '@/components/6TempComponents/FooterComponent.vue';
import MiniProfileCardComponent from '@/components/ProfileComponents/MiniProfileCardComponent.vue';
import MiniProfileCardVIPComponent from '@/components/ProfileComponents/MiniProfileCardVIPComponent.vue';
import MiniProfileCardVVIPComponent from '@/components/ProfileComponents/MiniProfileCardVVIPComponent.vue';
import LeftAd1Component from '@/components/6TempComponents/LeftRightAds/LeftAd1Component.vue';
import LeftAd2Component from '@/components/6TempComponents/LeftRightAds/LeftAd2Component.vue';
import LeftAd3Component from '@/components/6TempComponents/LeftRightAds/LeftAd3Component.vue';
import LeftAd4Component from '@/components/6TempComponents/LeftRightAds/LeftAd4Component.vue';
import RightAd1Component from '@/components/6TempComponents/LeftRightAds/RightAd1Component.vue';
import RightAd2Component from '@/components/6TempComponents/LeftRightAds/RightAd2Component.vue';
import RightAd3Component from '@/components/6TempComponents/LeftRightAds/RightAd3Component.vue';
import RightAd4Component from '@/components/6TempComponents/LeftRightAds/RightAd4Component.vue';
import OfferComponent from '@/components/OfferNeedBestOfferComponent/OfferComponent.vue';
import NeedComponent from '@/components/OfferNeedBestOfferComponent/NeedComponent.vue';
import BestOfferComponent from '@/components/OfferNeedBestOfferComponent/BestOfferComponent.vue';
import BestOfferTABsComponent from '@/components/OfferNeedBestOfferComponent/BestOfferTABsComponent.vue';


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
    MiniProfileCardComponent,
    MiniProfileCardVVIPComponent,
    MiniProfileCardVIPComponent,
    BestOfferTABsComponent,
    BestOfferComponent,
    OfferComponent,
    NeedComponent,
  },
  setup() {
    const selectedTab = ref<string>('BusinessProfiles'); // Initialize with the default tab

    return {
      selectedTab,
    };
  },
});

</script>



<style scoped>
/* Updated for new tab names and mobile responsiveness */

.MiniProfilesRow {
  padding: 10px;
}

.Tabs4AllBusinessProfilesAllOffersAllNeedsBestOffersAdvertiseForFree {
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

.AllBusinessProfiles,
.AllOffers,
.AllNeeds,
.BestOffers,
.AdvertiseForFree {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  flex: 1 1 calc(50% - 20px); /* Ensure columns are responsive */
  margin: 10px;
}

@media (max-width: 600px) {
  .AllBusinessProfiles,
  .AllOffers,
  .AllNeeds,
  .BestOffers,
  .AdvertiseForFree {
    flex: 1 1 100%; /* Make each tab content full width on small screens */
  }

    /* if you can try to make the advert disolaywithin componentts in mobile view */
  .RightAdvertComponent,
  .LeftAdvertComponent {
    display: none;
  }
}
</style>

