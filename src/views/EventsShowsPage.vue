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



          <!-- EventsShows 6 tabs 1- Upcoming Events 2- Past Events 3-Events Calender 4- Exhibiting ##############################     -->
          <IonCol class="MainCol">
            <IonRow class="Tabs4UpcomingPastCalendarExhibiting">
              <IonSegment v-model="selectedTab" class="TabSegment" color="primary">
                <IonSegmentButton class="btn" value="UpcomingEvents">Upcoming Events</IonSegmentButton>
                <IonSegmentButton class="btn" value="PastEvents">Past Events</IonSegmentButton>
                <IonSegmentButton class="btn" value="EventsCalendar">Events Calendar</IonSegmentButton>
                <IonSegmentButton class="btn" value="Exhibiting">Exhibiting</IonSegmentButton>
              </IonSegment>
            </IonRow>
            <IonRow class="DisplayComponentRow">
              <IonCol v-show="selectedTab === 'UpcomingEvents'" class="UpcomingEvents">
                <!-- Component for Upcoming Events #########" -->
                <MiniEventComponent />
                <MiniEventComponent />

              </IonCol>
              <IonCol v-show="selectedTab === 'PastEvents'" class="PastEvents">
                <!-- Component for Past Events #########" -->
                <MiniEventComponent />
              </IonCol>
              <IonCol v-show="selectedTab === 'EventsCalendar'" class="EventsCalendar">
                <!-- Component for Events Calendar #########" -->
                <EventsCalendarComponent />
              </IonCol>
              <IonCol v-show="selectedTab === 'Exhibiting'" class="Exhibiting">
                <!-- Component for Exhibiting #########" -->
                <ExhibitingComponent />
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
import LeftAd1Component from '@/components/6TempComponents/LeftRightAds/LeftAd1Component.vue';
import LeftAd2Component from '@/components/6TempComponents/LeftRightAds/LeftAd2Component.vue';
import LeftAd3Component from '@/components/6TempComponents/LeftRightAds/LeftAd3Component.vue';
import LeftAd4Component from '@/components/6TempComponents/LeftRightAds/LeftAd4Component.vue';
import RightAd1Component from '@/components/6TempComponents/LeftRightAds/RightAd1Component.vue';
import RightAd2Component from '@/components/6TempComponents/LeftRightAds/RightAd2Component.vue';
import RightAd3Component from '@/components/6TempComponents/LeftRightAds/RightAd3Component.vue';
import RightAd4Component from '@/components/6TempComponents/LeftRightAds/RightAd4Component.vue';
import MiniEventComponent from '@/components/EventsShowsCopmonent/MiniEventComponent.vue';

export default defineComponent({
  name: 'EventsShowsPage',
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
    MiniEventComponent,

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

@media (max-width: 768px) {
    /* if you can try to make the advert disolaywithin componentts in mobile view */
  .RightAdvertComponent,
  .LeftAdvertComponent {
    display: none;
  }
}
</style>

