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
          <IonCol size="12" size-md="1.5" class="bordered-section LeftAdvertComponent">
            <LeftAd1Component />
            <LeftAd2Component />
            <LeftAd3Component />
            <LeftAd4Component />
          </IonCol>

          <IonCol size="12" size-md="9" class="bordered-section FreePitchingsPage">

            <IonGrid>
              <!-- Tabs5_ 1- All Pitchers 2- One Min Pitchers 3- Three Min Pitchers/Presenters 4- Investment Pitchers 5- FREE Pitching Reservation -->
              <IonRow class="Tabs5_AllPitchersOneMinPitchersThreeMinPitchersInvestmentPitchersFreePitchingReservation">
                <IonSegment v-model="selectedTab" class="TabSegment" color="primary">
                  <IonSegmentButton class="btn" value="AllPitchers">All Pitchers</IonSegmentButton>
                  <IonSegmentButton class="btn" value="OneMinPitchers">One Min Pitchers</IonSegmentButton>
                  <IonSegmentButton class="btn" value="ThreeMinPitchers">Three Min Pitchers/Presenters</IonSegmentButton>
                  <IonSegmentButton class="btn" value="InvestmentPitchers">Investment Pitchers</IonSegmentButton>
                </IonSegment>
                <IonRow class="FreePitching" >For FREE pitching/presenting, book a ticket from the ticket section in an event's page. <a href="/EventsShowsPage" >Click HERE</a></IonRow>

              </IonRow>
              <IonRow class="DisplayComponentRow">
                <IonCol v-show="selectedTab === 'AllPitchers'" class="AllPitchers">
                  <PitchingComponent />
                </IonCol>
                <IonCol v-show="selectedTab === 'OneMinPitchers'" class="OneMinPitchers">
                  <PitchingComponent />
                </IonCol>
                <IonCol v-show="selectedTab === 'ThreeMinPitchers'" class="ThreeMinPitchers">
                  <PitchingComponent />
                </IonCol>
                <IonCol v-show="selectedTab === 'InvestmentPitchers'" class="InvestmentPitchers">
                  <PitchingComponent />
                </IonCol>
              </IonRow>
            </IonGrid>

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
import { IonPage, IonGrid, IonRow, IonCol, IonContent, IonSegment, IonSegmentButton } from '@ionic/vue';
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
import PitchingComponent from '@/components/PitchingComponents/PitchingComponent.vue';

export default defineComponent({
  name: 'FreePitchingsPage',
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
/* Updated for new tab names and mobile responsiveness */
.FreePitching {
  padding-top: 5px;
  color: gray;
  font-size: 14px;
  text-align: center;
  justify-content: center;
  width: 100%;
}
.TabSegment {
  display: flex;
  flex-wrap: wrap; /* Allow segment buttons to wrap */
  width: 100%;
}
.btn {
    letter-spacing: 0.5px;
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

@media (max-width: 768px) {
    /* if you can try to make the advert disolaywithin componentts in mobile view */
  .RightAdvertComponent,
  .LeftAdvertComponent {
    display: none;
  }
}
</style>

