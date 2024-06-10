<template>
  <IonGrid>
    <!-- 5Rows 1- Business Row 2- Personal row 3- Statistcs row  4-WhatWho row 5- Activities row -->
    <IonCol class=" ProfileStatisticsRow ">
      <IonRow class=" BusinessName ">
        <IonTitle>Business Name, Business Name, Business Name, Business </IonTitle>
      </IonRow>

      <IonRow class=" BusinessRow ">
        <IonCol class="IMG-socialIcons">
          <img alt="LEN Logo" height="100" width="150" src="/public/favicon.png" />
          <div class="social-media-icons">
            <IonButton size="small" fill="clear" class="social-button"><IonIcon :icon="logoLinkedin" class="linkedin-icon" /></IonButton>
            <IonButton size="small"fill="clear" class="social-button"><IonIcon :icon="logoGoogle" class="google-icon" /></IonButton>
            <IonButton size="small" fill="clear" class="social-button"><IonIcon :icon="logoFacebook" class="facebook-icon" /></IonButton>
            <IonButton size="small" fill="clear" class="social-button"><IonIcon :icon="logoTwitter" class="twitter-icon" /></IonButton>
          </div>
        </IonCol>
        <IonCol class=" BusinessDetails ">
          <IonRow class="BusinessRevenue">Business Revenue: £200000</IonRow>
          <IonRow>Business Category:</IonRow>
          <IonRow>
            <IonCol class="" >No. of Employees:</IonCol>
            <IonCol>Business City:</IonCol>
          </IonRow>
        </IonCol>

      </IonRow>


      <!-- Personal Row ###################-->
      <IonRow class=" PersonalRow ">
        <IonCol class="IMG-socialIcons">
          <img alt="LEN Logo" height="100" width="150" src="/public/favicon.png" />
          <div class="social-media-icons">
            <IonButton size="small" fill="clear" class="social-button"><IonIcon :icon="logoLinkedin" class="linkedin-icon" /></IonButton>
            <IonButton size="small"fill="clear" class="social-button"><IonIcon :icon="logoGoogle" class="google-icon" /></IonButton>
            <IonButton size="small" fill="clear" class="social-button"><IonIcon :icon="logoFacebook" class="facebook-icon" /></IonButton>
            <IonButton size="small" fill="clear" class="social-button"><IonIcon :icon="logoTwitter" class="twitter-icon" /></IonButton>
          </div>
        </IonCol>
        <ion-col class="PersonalDetails">
          <ion-row>
            <ion-col class="YearlySalary">Yearly Salary: £</ion-col>
          </ion-row>
          <ion-row>
            <ion-col>Name:</ion-col>
            <ion-col>Age:</ion-col>
            <ion-col>Gender:</ion-col>
          </ion-row>
          <ion-row>
            <ion-col>Job Positions:</ion-col>
            <ion-col>City:</ion-col>
            <ion-col>Connections:</ion-col>
          </ion-row>
        </ion-col>
      </IonRow>

      <!-- 3- Statistcs row ##############################-->
      <ion-row class="StatisticsRow">
        <!-- Column 1 -->
        <ion-col class="StatisticsColumn">
          <ion-row class="PostedOffers">Posted Offers: 86</ion-row>
          <ion-row class="ProvidedOffers">Provided Offers: 86</ion-row>
          <ion-row class="RequestedOffers">Requested Offers: 86</ion-row>
          <ion-row class="Exhibited">Exhibited: 86</ion-row>
        </ion-col>
        <!-- Column 2 -->
        <ion-col class="StatisticsColumn">
          <ion-row class="PostedNeeds">Posted Needs: 86</ion-row>
          <ion-row class="SatisfiedNeeds">Satisfied Needs: 86</ion-row>
          <ion-row class="PeopleSatisfiedNeeds">People Satisfied Needs: 86</ion-row>
          <ion-row class="Visited">Visited: 86</ion-row>
        </ion-col>
        <!-- Column 3 -->
        <ion-col class="StatisticsColumn">
          <ion-row class="MiniProfileListed">Mini Profile Listed: 86</ion-row>
          <ion-row class="Messages">Messages</ion-row>
          <ion-row class="Connect">Connect</ion-row>
          <ion-row class="QRCode">QR code</ion-row>
        </ion-col>
      </ion-row>


      <!-- 4- WhoWhat row ##############################-->
      <IonRow class="WhoWhatSections">
        <ion-segment v-model="selectedTab" class="TabSegment" color="primary">
          <ion-segment-button value="who">Who We Are, What We Dooooo</ion-segment-button>
          <ion-segment-button value="what">What We Provide</ion-segment-button>
          <ion-segment-button value="looking">What We Are Looking For</ion-segment-button>
        </ion-segment>
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
      
      
      <!-- 5 - ActivityRow ListedNeedsOffersVisitedEventsConnectionGalery -->
      <IonRow class=" ActivityRow " >
        <IonCol class=" ListedNeeds " >Listed Needs</IonCol>
        <IonCol class=" SatisfiedNeeds " >Satisfied Needs</IonCol>
        <IonCol class=" PeopleSatisfiedNeeds " >People Satisfied Needs</IonCol>
        <IonCol class=" ProvidedOffers " >Provided Offers</IonCol>
        <IonCol class=" RequestedOffers " >Requested Offers</IonCol>
        <IonCol class=" PeopleRequestedOffers " >People Requested Offers</IonCol>
        <IonCol class=" ListedBestOffer " >Listed Best Offer</IonCol>
        <IonCol class=" VisitedEvents " >Visited Events</IonCol>
        <IonCol class=" ExhibitedEvents " >Exhibited Events</IonCol>
        <IonCol class=" Connections " >Connections</IonCol>
        <IonCol class=" 4Galleries " >4Galleries</IonCol>
        <IonCol class=" 3PitchingVideos " >3Pitching Videos</IonCol>
      </IonRow>


    </IonCol>

  </IonGrid>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonGrid, IonRow, IonCol, IonButton, IonIcon, IonSegment, IonSegmentButton } from '@ionic/vue';
import { logoFacebook, logoTwitter, logoGoogle, logoLinkedin } from 'ionicons/icons';

export default defineComponent({
  name: 'ProfilePublicSectionComponent',
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonButton,
    IonSegment,
    IonSegmentButton,
  },
  setup() {
    const selectedTab = ref<string>('who'); // Initialize with the default tab

    return {
      selectedTab,
      logoFacebook,
      logoTwitter,
      logoLinkedin,
      logoGoogle,
    };
  },
});
</script>



<style scoped>
*{
  border: 1px solid black;
}
ion-grid{
  overflow-y: auto;   /* Enable vertical scrolling */
    height: 100%;     /* Full height to fit the parent */


}

.BusinessName {
  font-family:'Arial Narrow Bold', sans-serif;
  font-size: 40px;
  font-weight: bold;
  background-color: yellow;
  justify-content: center;
  text-align: center;
}


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
  /* gap: 8px; */
}

@media (max-width: 768px) {
  .BusinessRow {
    flex-wrap: wrap;  /* Allows wrapping on smaller screens */
  }

  .IMG-socialIcons, .BusinessDetails {
    flex: 1 1 100%; /* Take full width on smaller screens */
  }
}


      /* <!-- Personal Row ###################--> */

.PersonalRow {
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

.PersonalDetails {
  flex: 1; /* Takes remaining space */
  display: flex;
  flex-direction: column;
}

.social-media-icons {
  display: flex;
  gap: 8px;
}

@media (max-width: 768px) {
  .PersonalRow {
    flex-wrap: wrap; /* Allows wrapping on smaller screens */
  }

  .IMG-socialIcons, .PersonalDetails {
    flex: 1 1 100%; /* Take full width on smaller screens */
  }
}


/* <!-- 3-  Statistcs row ##############################--> */

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


      /* <!-- 4- WhoWhat row ##############################--> */
@media (max-width: 768px) {
  .WhoWhatSections ion-col {
    /* display: flex; */
    flex-direction: column;
    width: 100%; /* Each column takes 100% width on mobile */
  }
}

.TabSegment {
  width: 100%;
}

.ContentRow {
  padding-top: 20px;
}

/* Adjust styles for each tab's content if needed */
.WhoWeAreWhatWeDo,
.WhatWeProvide,
.WhatWeAreLookingFor {
  display: none;
}

@media (min-width: 768px) {
  .WhoWeAreWhatWeDo,
  .WhatWeProvide,
  .WhatWeAreLookingFor {
    display: block;
  }
  ion-segment-button {
  white-space: normal;
  text-wrap: wrap;
  }
}



</style>
