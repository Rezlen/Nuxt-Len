<template>
  <IonGrid>
    <!-- 5Rows 1- Business Row 2- Personal row 3- Statistics row  4-WhatWho row 5- Activities row -->
    <IonCol class="ProfileStatisticsRow">
      <IonRow class="BusinessName">
        <IonTitle>Business Name, Business Name, Business Name, Business</IonTitle>
      </IonRow>

      <IonRow class="BusinessRow">
        <IonCol class="IMG-socialIcons">
          <img alt="LEN Logo" height="100" width="150" src="/public/favicon.png" />
          <div class="social-media-icons">
            <IonButton size="small" fill="clear" class="social-button"><IonIcon :icon="logoLinkedin" class="linkedin-icon" /></IonButton>
            <IonButton size="small" fill="clear" class="social-button"><IonIcon :icon="logoGoogle" class="google-icon" /></IonButton>
            <IonButton size="small" fill="clear" class="social-button"><IonIcon :icon="logoFacebook" class="facebook-icon" /></IonButton>
            <IonButton size="small" fill="clear" class="social-button"><IonIcon :icon="logoTwitter" class="twitter-icon" /></IonButton>
          </div>
        </IonCol>
        <IonCol class="BusinessDetails">
          <IonRow class="BusinessRevenue">Business Revenue: £200000</IonRow>
          <IonRow>Business Category:</IonRow>
          <IonRow>
            <IonCol>No. of Employees:</IonCol>
            <IonCol>Business City:</IonCol>
          </IonRow>
        </IonCol>
      </IonRow>

      <!-- Personal Row ###################-->
      <IonRow class="PersonalRow">
        <IonCol class="IMG-socialIcons">
          <img alt="LEN Logo" height="100" width="150" src="/public/favicon.png" />
          <div class="social-media-icons">
            <IonButton size="small" fill="clear" class="social-button"><IonIcon :icon="logoLinkedin" class="linkedin-icon" /></IonButton>
            <IonButton size="small" fill="clear" class="social-button"><IonIcon :icon="logoGoogle" class="google-icon" /></IonButton>
            <IonButton size="small" fill="clear" class="social-button"><IonIcon :icon="logoFacebook" class="facebook-icon" /></IonButton>
            <IonButton size="small" fill="clear" class="social-button"><IonIcon :icon="logoTwitter" class="twitter-icon" /></IonButton>
          </div>
        </IonCol>
        <IonCol class="PersonalDetails">
          <IonRow>
            <IonCol class="YearlySalary">Yearly Salary: £</IonCol>
          </IonRow>
          <IonRow>
            <IonCol>Name:</IonCol>
            <IonCol>Age:</IonCol>
            <IonCol>Gender:</IonCol>
          </IonRow>
          <IonRow>
            <IonCol>Job Positions:</IonCol>
            <IonCol>City:</IonCol>
            <IonCol>Connections:</IonCol>
          </IonRow>
        </IonCol>
      </IonRow>

      <!-- 3- Statistics row ##############################-->
      <IonRow class="StatisticsRow">
        <!-- Column 1 -->
        <IonCol class="StatisticsColumn">
          <IonRow class="PostedOffers">Posted Offers: 86</IonRow>
          <IonRow class="ProvidedOffers">Provided Offers: 86</IonRow>
          <IonRow class="RequestedOffers">Requested Offers: 86</IonRow>
          <IonRow class="Exhibited">Exhibited: 86</IonRow>
        </IonCol>
        <!-- Column 2 -->
        <IonCol class="StatisticsColumn">
          <IonRow class="PostedNeeds">Posted Needs: 86</IonRow>
          <IonRow class="SatisfiedNeeds">Satisfied Needs: 86</IonRow>
          <IonRow class="PeopleSatisfiedNeeds">People Satisfied Needs: 86</IonRow>
          <IonRow class="Visited">Visited: 86</IonRow>
        </IonCol>
        <!-- Column 3 -->
        <IonCol class="StatisticsColumn">
          <IonRow class="MiniProfileListed">Mini Profile Listed: 86</IonRow>
          <IonRow class="Messages">Messages</IonRow>
          <IonRow class="Connect">Connect</IonRow>
          <IonRow class="QRCode">QR code</IonRow>
        </IonCol>
      </IonRow>

      <!-- 4- WhoWhat row ##############################-->
    <IonRow class="ActivityRow">
      <IonRow class="WhoWhatSections">
        <IonSegment v-model= "selectedTab" class="TabSegment" color="primary">
          <IonSegmentButton class="btn" value="who">Who We Are, What We Dooooo</IonSegmentButton>
          <IonSegmentButton class="btn" value="what">What We Provide</IonSegmentButton>
          <IonSegmentButton class="btn" value="looking">What We Are Looking For</IonSegmentButton>
        </IonSegment>
      </IonRow>
      <IonRow class="ContentRow">
        <IonCol v-show="selectedTab === 'who'" class="WhoWeAreWhatWeDo">
          <p>Who We Are, What We Do</p>
          <!-- Content for "Who We Are, What We Do" -->
        </IonCol>
        <IonCol v-show="selectedTab === 'what'" class="WhatWeProvide">
          <p>What We Provide</p>
          <!-- Content for "What We Provide" -->
        </IonCol>
        <IonCol v-show="selectedTab === 'looking'" class="WhatWeAreLookingFor">
          <p>What We Are Looking For</p>
          <!-- Content for "What We Are Looking For" -->
        </IonCol>
      </IonRow>
      
      
    <!-- 5 - ActivityRow ListedNeedsOffersVisitedEventsConnectionGallery -->
      <IonSegment v-model="selectedTab" class="ActivitySegment" scrollable>
        <IonSegmentButton class="btn" value="listedNeeds">Listed Needs</IonSegmentButton>
        <IonSegmentButton class="btn" value="satisfiedNeeds">Satisfied Needs</IonSegmentButton>
        <IonSegmentButton class="btn" value="peopleSatisfiedNeeds">People Satisfied Needs</IonSegmentButton>
        <IonSegmentButton class="btn" value="providedOffers">Provided Offers</IonSegmentButton>
        <IonSegmentButton class="btn" value="requestedOffers">Requested Offers</IonSegmentButton>
        <IonSegmentButton class="btn" value="peopleRequestedOffers">People Requested Offers</IonSegmentButton>
        <IonSegmentButton class="btn" value="listedBestOffer">Listed Best Offer</IonSegmentButton>
        <IonSegmentButton class="btn" value="visitedEvents">Visited Events</IonSegmentButton>
        <IonSegmentButton class="btn" value="exhibitedEvents">Exhibited Events</IonSegmentButton>
        <IonSegmentButton class="btn" value="connections">Connections</IonSegmentButton>
        <IonSegmentButton class="btn" value="galleries">4 Galleries</IonSegmentButton>
        <IonSegmentButton class="btn" value="pitchingVideos">3 Pitching Videos</IonSegmentButton>
      </IonSegment>

      <!-- Tab Content -->
      <IonCol v-if="selectedTab === 'listedNeeds'">
        <ListedNeedsComponent />
      </IonCol>
      <IonCol v-if="selectedTab === 'satisfiedNeeds'">
        <SatisfiedNeedsComponent />
      </IonCol>
      <IonCol v-if="selectedTab === 'peopleSatisfiedNeeds'">
        <PeopleSatisfiedNeedsComponent />
      </IonCol>
      <IonCol v-if="selectedTab === 'providedOffers'">
        <ProvidedOffersComponent />
      </IonCol>
      <IonCol v-if="selectedTab === 'requestedOffers'">
        <RequestedOffersComponent />
      </IonCol>
      <IonCol v-if="selectedTab === 'peopleRequestedOffers'">
        <PeopleRequestedOffersComponent />
      </IonCol>
      <IonCol v-if="selectedTab === 'listedBestOffer'">
        <ListedBestOfferComponent />
      </IonCol>
      <IonCol v-if="selectedTab === 'visitedEvents'">
        <VisitedEventsComponent />
      </IonCol>
      <IonCol v-if="selectedTab === 'exhibitedEvents'">
        <ExhibitedEventsComponent />
      </IonCol>
      <IonCol v-if="selectedTab === 'connections'">
        <ConnectionsComponent />
      </IonCol>
      <IonCol v-if="selectedTab === 'galleries'">
        <GalleriesComponent />
      </IonCol>
      <IonCol v-if="selectedTab === 'pitchingVideos'">
        <PitchingVideosComponent />
      </IonCol>
    </IonRow>
    </IonCol>
  </IonGrid>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonGrid, IonRow, IonCol, IonSegment, IonSegmentButton, IonButton, IonIcon } from '@ionic/vue';
import { logoFacebook, logoTwitter, logoGoogle, logoLinkedin } from 'ionicons/icons';
// import ListedNeedsComponent from '@/components/ListedNeedsComponent.vue';
// import SatisfiedNeedsComponent from '@/components/SatisfiedNeedsComponent.vue';
// import PeopleSatisfiedNeedsComponent from '@/components/PeopleSatisfiedNeedsComponent.vue';
// import ProvidedOffersComponent from '@/components/ProvidedOffersComponent.vue';
// import RequestedOffersComponent from '@/components/RequestedOffersComponent.vue';
// import PeopleRequestedOffersComponent from '@/components/PeopleRequestedOffersComponent.vue';
// import ListedBestOfferComponent from '@/components/ListedBestOfferComponent.vue';
// import VisitedEventsComponent from '@/components/VisitedEventsComponent.vue';
// import ExhibitedEventsComponent from '@/components/ExhibitedEventsComponent.vue';
// import ConnectionsComponent from '@/components/ConnectionsComponent.vue';
// import GalleriesComponent from '@/components/GalleriesComponent.vue';
// import PitchingVideosComponent from '@/components/PitchingVideosComponent.vue';

export default defineComponent({
  name: 'ProfilePublicSectionComponent',
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonSegment,
    IonSegmentButton,
    IonButton,
    IonIcon,
        // ListedNeedsComponent,
    // SatisfiedNeedsComponent,
    // PeopleSatisfiedNeedsComponent,
    // ProvidedOffersComponent,
    // RequestedOffersComponent,
    // PeopleRequestedOffersComponent,
    // ListedBestOfferComponent,
    // VisitedEventsComponent,
    // ExhibitedEventsComponent,
    // ConnectionsComponent,
    // GalleriesComponent,
    // PitchingVideosComponent,
  },
  setup() {
    const selectedTab = ref<string>('listedNeeds'); // Initialize with the default tab
    const selectedTabActivity = ref<string>('listedNeeds'); // Initialize with the default tab for ActivityRow

    return {
      selectedTab,
      selectedTabActivity,
      logoFacebook,
      logoTwitter,
      logoLinkedin,
      logoGoogle,
    };
  },
});
</script>



<style scoped>
/* General styles */
* {
  border: 1px solid black;
}

ion-grid {
  overflow-y: auto; /* Enable vertical scrolling */
  height: 100%; /* Full height to fit the parent */
}

/* BusinessName styles */
.BusinessName {
  font-family: 'Arial Narrow Bold', sans-serif;
  font-size: 40px;
  font-weight: bold;
  background-color: yellow;
  justify-content: center;
  text-align: center;
}

/* BusinessRow styles */
.BusinessRow {
  display: flex;
  flex-wrap: nowrap; /* Prevents wrapping */
}

.IMG-socialIcons {
  flex: 0 0 20%; /* Fixed 20% width */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.BusinessDetails {
  flex: 1; /* Takes remaining space */
  display: flex;
  flex-direction: column;
}

.social-media-icons {
  display: flex;
}

/* PersonalRow styles */
.PersonalRow {
  display: flex;
  flex-wrap: nowrap; /* Prevents wrapping */
}

.PersonalDetails {
  flex: 1; /* Takes remaining space */
  display: flex;
  flex-direction: column;
}

/* Social media icon colors */
.social-media-icons {
  display: flex;
  gap: 8px;
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

/* Responsive styles for smaller screens */
@media (max-width: 768px) {
  .BusinessRow, .PersonalRow {
    flex-wrap: wrap; /* Allows wrapping on smaller screens */
  }

  .IMG-socialIcons, .BusinessDetails, .PersonalDetails {
    flex: 1 1 100%; /* Take full width on smaller screens */
  }
}

/* StatisticsRow styles */
.StatisticsRow {
  display: flex;
  flex-wrap: wrap;
}

.StatisticsColumn {
  flex: 0 0 33.3333%;
  display: flex;
  flex-direction: column;
}

.StatisticsColumn .ion-row {
  margin-bottom: 10px; /* Add spacing between rows if needed */
}

@media (max-width: 768px) {
  .StatisticsColumn {
    flex: 0 0 100%;
  }
}

/* WhoWhatSections styles */
.WhoWhatSections {
  margin-top: 20px;
  margin-bottom: 20px;
}

.TabSegment {
  width: 100%;
}

.ContentRow {
  padding-top: 20px;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .WhoWhatSections ion-col {
    flex-direction: column;
    width: 100%;
  }
}

/* ActivityRow styles */
.ActivityRow {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.ActivitySegment {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  overflow-x: auto;
}

.ActivitySegment ion-segment-button {
  flex: 1 1 auto;
  white-space: nowrap;
  min-width: 100px;
}

.ActivityRow .ion-col {
  white-space: normal;
  word-wrap: break-word;
  word-break: break-all;
}

ion-segment-button {
  font-size: 14px; /* Adjust tab font size for mobile */
  font-weight: bold;
}

@media (max-width: 600px) {
  .ActivityRow .ion-col {
    width: 100%;
  }
}
 /*  gives the nice button colur & shape effect to the tab */
.btn {
  transition: 0.5s;
  padding: 0;
  margin: 0;
  border-radius: 20%;
  font-size: 14px; /* Adjust tab font size for mobile */
  font-weight: bold;
    border: 1px solid black;
}

/* Hover effect */
.btn:hover {
  background: #ffee10;
  color: black;
  box-shadow: 0 0 1rem #ffee10;
}

/* Clicked effect */
.btn-clicked {
  background: #ffee10;
  color: black;
  box-shadow: 0 0 1rem #ffee10;
}

 /*  END gives the nice button colur & shape effect to the tab */


</style>

