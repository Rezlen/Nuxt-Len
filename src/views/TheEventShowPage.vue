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



          <!-- EventsShows 6 tabs 1- The Events 2- Exhibitors 3- Visitors 4- One Minute Pitcher 5- Three Min Pitcher/Presenters 6- Investment Pitcher ##############################     -->
          <IonCol class="MainCol">
            <IonRow class="Tabs6TheEventExhibitorsVisitorsPitchers">
              <IonSegment v-model="selectedTab" class="TabSegment" color="primary">
                <IonSegmentButton class="btn" value="TheEvent">The Event</IonSegmentButton>
                <IonSegmentButton class="btn" value="Exhibitors">Exhibitors</IonSegmentButton>
                <IonSegmentButton class="btn" value="Visitors">Visitors</IonSegmentButton>
                <IonSegmentButton class="btn" value="OneMinutePitchers">One Minute Pitchers</IonSegmentButton>
                <IonSegmentButton class="btn" value="ThreeMinPitchers">Three Min Pitchers/Presenters</IonSegmentButton>
                <IonSegmentButton class="btn" value="InvestmentPitchers">Investment Pitchers</IonSegmentButton>
              </IonSegment>
            </IonRow>
            <IonRow class="DisplayComponentRow">
              <IonCol v-show="selectedTab === 'TheEvent'" class="TheEvent">
                <!-- Component for The Events #########" -->
                <TheEventComponent />
              </IonCol>
              <IonCol v-show="selectedTab === 'Exhibitors'" class="Exhibitors">
                <!-- Component for Exhibitors #########" -->
                <MiniProfileCardVIPComponent />
              </IonCol>
              <IonCol v-show="selectedTab === 'Visitors'" class="Visitors">
                <!-- Component for Visitors #########" -->
                <MiniProfileCardVVIPComponent />
              </IonCol>
              <IonCol v-show="selectedTab === 'OneMinutePitchers'" class="OneMinutePitchers">
                <!-- Component for One Minute Pitcher #########" -->
                <PitchingComponent />
              </IonCol>
              <IonCol v-show="selectedTab === 'ThreeMinPitchers'" class="ThreeMinPitchers">
                <!-- Component for Three Min Pitcher/Presenters #########" -->
                <PitchingComponent />
              </IonCol>
              <IonCol v-show="selectedTab === 'InvestmentPitchers'" class="InvestmentPitchers">
                <!-- Component for Investment Pitcher #########" -->
                <PitchingComponent />
              </IonCol>
            </IonRow>
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
import TheEventComponent from '@/components/EventsShowsCopmonent/TheEventComponent.vue';
import PitchingComponent from '@/components/PitchingComponents/PitchingComponent.vue';


export default defineComponent({
  name: 'TheEventShowPage',
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
    TheEventComponent,
    PitchingComponent,
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

.Tabs6TheEventExhibitorsVisitorsPitchers {
  display: flex;
  flex-wrap: wrap; /* Allow tabs to wrap to the next row */
  margin-bottom: 10px;
}

.TabSegment {
  display: flex;
  flex-wrap: wrap; /* Allow segment buttons to wrap */
  gap: 5px; /* Adjust the gap between buttons */
}

.btn {
  /* flex: 1 1 auto; */
  margin: 0;
  padding:0;
  border-radius: 4px;
  font-family: 'Roboto Condensed', sans-serif;
  letter-spacing: -0.5px; /* Amazingly reduces the spaces between the letters/charectors */
}

.DisplayComponentRow {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}



@media (max-width: 760px) {
  .TheEvent,
  .Exhibitors,
  .Visitors,
  .OneMinutePitchers,
  .ThreeMinPitchers,
  .InvestmentPitchers {
    flex: 1 1 100%; /* Make each tab content full width on small screens */
  }

     /* if you can try to make the advert disolaywithin componentts in mobile view */
  .RightAdvertComponent,
  .LeftAdvertComponent {
    display: none;
  }
}
</style>


