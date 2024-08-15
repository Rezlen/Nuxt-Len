<template>
  <IonGrid>
    <!-- 5Rows 1- Business Row 2- Personal row 3- Statistics row  4-WhatWho row 5- Activities row -->
    <IonCol class="ProfileStatisticsRow">
      <IonRow class="BusinessName">
        <IonTitle
          >Business Name, Business Name, Business Name, Business</IonTitle
        >
      </IonRow>

      <IonRow class="BusinessRow">
        <IonCol class="IMG-socialIcons">
          <img alt="LEN Logo" height="100" width="150" src="/favicon.png" />
          <div class="social-media-icons">
            <IonButton size="small" fill="clear" class="social-button"
              ><IonIcon :icon="logoLinkedin" class="linkedin-icon"
            /></IonButton>
            <IonButton size="small" fill="clear" class="social-button"
              ><IonIcon :icon="logoGoogle" class="google-icon"
            /></IonButton>
            <IonButton size="small" fill="clear" class="social-button"
              ><IonIcon :icon="logoFacebook" class="facebook-icon"
            /></IonButton>
            <IonButton size="small" fill="clear" class="social-button"
              ><IonIcon :icon="logoTwitter" class="twitter-icon"
            /></IonButton>
          </div>
        </IonCol>
        <IonCol class="BusinessDetails">
          <IonRow class="BusinessRevenue"
            >Business Revenue Yearly: £20,0000</IonRow
          >
          <IonRow>
            <IonCol class="TextStyle">Business Main Category:</IonCol>
            <IonCol class="TextStyle">Business Main Country:</IonCol>
          </IonRow>
          <IonRow>
            <IonCol class="TextStyle">No. of Employees:</IonCol>
            <IonCol class="TextStyle">Business Main City:</IonCol>
          </IonRow>
          <IonRow>
            <IonCol class="TextStyle">Business Established Year:</IonCol>
            <IonCol class="TextStyle">Membership Type:</IonCol>
          </IonRow>
        </IonCol>
      </IonRow>

      <!-- Personal Row ###################-->
      <IonRow class="PersonalRow">
        <IonCol class="IMG-socialIcons">
          <img alt="LEN Logo" height="100" width="150" src="/favicon.png" />
          <div class="social-media-icons">
            <IonButton size="small" fill="clear" class="social-button"
              ><IonIcon :icon="logoLinkedin" class="linkedin-icon"
            /></IonButton>
            <IonButton size="small" fill="clear" class="social-button"
              ><IonIcon :icon="logoGoogle" class="google-icon"
            /></IonButton>
            <IonButton size="small" fill="clear" class="social-button"
              ><IonIcon :icon="logoFacebook" class="facebook-icon"
            /></IonButton>
            <IonButton size="small" fill="clear" class="social-button"
              ><IonIcon :icon="logoTwitter" class="twitter-icon"
            /></IonButton>
          </div>
        </IonCol>
        <IonCol class="PersonalDetails">
          <IonRow>
            <IonCol class="YearlySalary">Yearly Salary: £</IonCol>
          </IonRow>
          <IonRow>
            <IonCol class="TextStyle">Name:</IonCol>
            <IonCol class="TextStyle">Age:</IonCol>
            <IonCol class="TextStyle">Gender:</IonCol>
          </IonRow>
          <IonRow>
            <IonCol class="TextStyle">Job Positions:</IonCol>
            <IonCol class="TextStyle">City:</IonCol>
            <IonCol class="TextStyle">Connections:</IonCol>
          </IonRow>
        </IonCol>
      </IonRow>

      <!-- 3- Statistics row ##############################-->
      <IonRow class="StatisticsRow">
        <IonRow class="MembershipState">VVIP Member</IonRow>
        <!-- Column 1 -->
        <IonCol class="StatisticsColumn">
          <IonRow class="TextStyle ListedOffers">Listed Offers: 86</IonRow>
          <IonRow class="TextStyle ProvidedOffers">Provided Offers: 86</IonRow>
          <IonRow class="TextStyle RequestedOffers"
            >Requested Offers: 86</IonRow
          >
          <IonRow class="TextStyle MiniProfileListed"
            >Full Profile Seen: 86</IonRow
          >
        </IonCol>
        <!-- Column 2 -->
        <IonCol class="StatisticsColumn">
          <IonRow class="TextStyle ListedNeeds">Listed Needs: 86</IonRow>
          <IonRow class="TextStyle SatisfiedNeeds">Satisfied Needs: 86</IonRow>
          <IonRow class="TextStyle PeopleSatisfiedNeeds"
            >People Satisfied Needs: 86</IonRow
          >
          <IonRow class="TextStyle MiniProfileListed"
            >Mini Profile Listed: 86</IonRow
          >
        </IonCol>
        <!-- Column 3 -->
        <IonCol class="StatisticsColumn">
          <IonRow class="TextStyle Exhibited">Exhibited: 86</IonRow>
          <IonRow class="TextStyle Visited">Visited: 86</IonRow>
          <IonRow class="TextStyle Messages"><a>Messages</a></IonRow>
          <IonRow class="TextStyle Connect"><a>Connect</a></IonRow>
        </IonCol>
        <!-- Column 3 -->
        <IonCol class="StatisticsColumn">
          <IonRow class="TextStyle Investor">Investor: 86</IonRow>
          <IonRow class="TextStyle InvestmentBroker"
            >Investment Broker: 86</IonRow
          >
          <IonRow class="TextStyle BusinessMentor">Business Mentor: 86</IonRow>
          <IonRow class="TextStyle QRCode"><a>QR code</a></IonRow>
        </IonCol>
      </IonRow>

      <!-- 4- WhoWhat row ##############################-->
      <div class="borderedSections">
        <IonRow class="WhoWhatSections">
          <IonSegment v-model="selectedTab" class="TabSegment" color="primary">
            <IonSegmentButton class="btn" value="who"
              >Who We Are, What We Dooooo</IonSegmentButton
            >
            <IonSegmentButton class="btn" value="what"
              >What We Provide</IonSegmentButton
            >
            <IonSegmentButton class="btn" value="looking"
              >What We Are Looking For</IonSegmentButton
            >
          </IonSegment>
        </IonRow>
        <IonRow class="ContentRow">
          <IonCol v-show="selectedTab === 'who'" class="WhoWeAreWhatWeDo">
            <NeedComponent />
            <!-- Content for "Who We Are, What We Do" -->
          </IonCol>
          <IonCol v-show="selectedTab === 'what'" class="WhatWeProvide">
            <p>What We Provide</p>
            <NeedComponent />
            <!-- Content for "What We Provide" -->
          </IonCol>
          <IonCol
            v-show="selectedTab === 'looking'"
            class="WhatWeAreLookingFor"
          >
            <p>What We Are Looking For</p>
            <NeedComponent />
            <!-- Content for "What We Are Looking For" -->
          </IonCol>
        </IonRow>
      </div>

      <div class="borderedSections">
        <!-- 5 - ActivityRow ListedNeedsOffersVisitedEventsConnectionGallery -->
        <IonRow class="ActivityRow">
          <IonSegment v-model="selectedTab" class="ActivitySegment" scrollable>
            <IonSegmentButton class="btn" value="listedNeeds"
              >Listed Needs</IonSegmentButton
            >
            <IonSegmentButton class="btn" value="satisfiedNeeds"
              >Satisfied Needs</IonSegmentButton
            >
            <IonSegmentButton class="btn" value="peopleSatisfiedNeeds"
              >People Satisfied Needs</IonSegmentButton
            >
            <IonSegmentButton class="btn" value="listedOffers"
              >Listed Offers</IonSegmentButton
            >
            <IonSegmentButton class="btn" value="requestedOffers"
              >Requested Offers</IonSegmentButton
            >
            <IonSegmentButton class="btn" value="peopleRequestedOffers"
              >People Requested Offers</IonSegmentButton
            >
            <IonSegmentButton class="btn" value="listedBestOffer"
              >Listed Best Offer</IonSegmentButton
            >
            <IonSegmentButton class="btn" value="visitedEvents"
              >Visited Events</IonSegmentButton
            >
            <IonSegmentButton class="btn" value="exhibitedEvents"
              >Exhibited Events</IonSegmentButton
            >
            <IonSegmentButton class="btn" value="connections"
              >Connections</IonSegmentButton
            >
            <IonSegmentButton class="btn" value="galleries"
              >4 Galleries</IonSegmentButton
            >
            <IonSegmentButton class="btn" value="pitchings"
              >3 Pitchings</IonSegmentButton
            >
            <IonSegmentButton class="btn" value="investor"
              >Investor</IonSegmentButton
            >
            <IonSegmentButton class="btn" value="investees"
              >Investees</IonSegmentButton
            >
            <IonSegmentButton class="btn" value="businessMentor"
              >Business Mentor</IonSegmentButton
            >
          </IonSegment>

          <IonRow class="ContentRow">
            <!-- Tab Content -->
            <IonCol v-show="selectedTab === 'listedNeeds'" class="ListedNeeds">
              <NeedComponent />
            </IonCol>
            <IonCol
              v-show="selectedTab === 'satisfiedNeeds'"
              class="SatisfiedNeeds"
            >
              <NeedComponent />
            </IonCol>
            <IonCol
              v-show="selectedTab === 'peopleSatisfiedNeeds'"
              class="PeopleSatisfiedNeeds"
            >
              <NeedComponent />
            </IonCol>
            <IonCol
              v-show="selectedTab === 'listedOffers'"
              class="listedOffers"
            >
              <OfferComponent />
            </IonCol>
            <IonCol
              v-show="selectedTab === 'requestedOffers'"
              class="RequestedOffers"
            >
              <OfferComponent />
            </IonCol>
            <IonCol
              v-show="selectedTab === 'peopleRequestedOffers'"
              class="PeopleRequestedOffers"
            >
              <OfferComponent />
            </IonCol>
            <IonCol
              v-show="selectedTab === 'listedBestOffer'"
              class="ListedBestOffer"
            >
              <BestOfferComponent />
            </IonCol>
            <IonCol
              v-show="selectedTab === 'visitedEvents'"
              class="VisitedEvents"
            >
              <MiniEventComponent />
            </IonCol>
            <IonCol
              v-show="selectedTab === 'exhibitedEvents'"
              class="ExhibitedEvents"
            >
              <MiniEventComponent />
            </IonCol>
            <IonCol v-show="selectedTab === 'connections'" class="Connections">
              <ConnectionsComponent />
            </IonCol>
            <IonCol v-show="selectedTab === 'galleries'" class="Galleries">
              <GalleriesComponent />
            </IonCol>
            <IonCol v-show="selectedTab === 'pitchings'" class="Pitchings">
              <PitchingComponent />
            </IonCol>
            <IonCol v-show="selectedTab === 'investor'" class="Investor">
              <MiniInvestorsProfileComponent />
            </IonCol>
            <IonCol v-show="selectedTab === 'investees'" class="Investees">
              <MiniInvesteesProfileComponent />
            </IonCol>
            <IonCol
              v-show="selectedTab === 'businessMentor'"
              class="BusinessMentor"
            >
              <BusinessMentorComponent />
            </IonCol>
          </IonRow>
        </IonRow>
      </div>
    </IonCol>
  </IonGrid>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonSegment,
  IonSegmentButton,
  IonButton,
  IonIcon,
} from "@ionic/vue";
import {
  logoFacebook,
  logoTwitter,
  logoGoogle,
  logoLinkedin,
} from "ionicons/icons";
import NeedComponent from "@/components/OfferNeedBestOfferComponent/NeedComponent.vue";
import OfferComponent from "@/components/OfferNeedBestOfferComponent/OfferComponent.vue";
import BestOfferComponent from "@/components/OfferNeedBestOfferComponent/BestOfferComponent.vue";
import PitchingComponent from "@/components/PitchingComponents/PitchingComponent.vue";
import MiniInvestorsProfileComponent from "@/components/InvestmentComponents/MiniInvestorsProfileComponent.vue";
import MiniInvesteesProfileComponent from "@/components/InvestmentComponents/MiniInvesteesProfileComponent.vue";
import MiniEventComponent from "@/components/EventsShowsComponent/MiniEventComponent.vue";

export default defineComponent({
  name: "ProfilePublicSectionComponent",
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonSegment,
    IonSegmentButton,
    IonButton,
    IonIcon,
    NeedComponent,
    OfferComponent,
    BestOfferComponent,
    PitchingComponent,
    MiniInvestorsProfileComponent,
    MiniInvesteesProfileComponent,
    MiniEventComponent,
  },
  setup() {
    const selectedTab = ref<string>("#"); // Initialize with the default tab

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
/* General styles */

/* * {
    border: 1px solid black;
} */

ion-grid {
  overflow-y: auto; /* Enable vertical scrolling */
  height: 100%; /* Full height to fit the parent */
}

/* BusinessName styles */
.BusinessName {
  font-family: "Arial Narrow Bold", sans-serif;
  font-size: 40px;
  /* font-weight: bold; */
  justify-content: center;
  text-align: center;
  padding: 20px 0;
}

/* BusinessRow styles */
.BusinessRow {
  display: flex;
  flex-wrap: nowrap; /* Prevents wrapping */
  border: 1px solid black;
  border-radius: 10px;
}

.IMG-socialIcons {
  flex: 0 0 20%; /* Fixed 20% width */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;
  border-radius: 10px;
}

.BusinessDetails {
  flex: 1; /* Takes remaining space */
  display: flex;
  flex-direction: column;
}

.BusinessRevenue,
.YearlySalary {
  background-color: rgb(10, 216, 10);
  border-radius: 10px;
  padding: 15px;
  font-size: 25px;
  font-weight: bold;
  color: white;
  text-align: center;
  justify-content: center;
}

.TextStyle {
  padding: 5px;
}

.Connect,
.Messages,
.QRCode {
  display: flex;
  border-radius: 10px;
  /* padding: 15px; */
  font-weight: bold;
  border: 1px solid black;
  /* width: 250px; */
  text-align: center;
  justify-content: center;
}
.Investor,
.InvestmentBroker,
.BusinessMentor,
.Exhibited,
.Visited {
  font-weight: bold;
}

/* PersonalRow styles */
.PersonalRow {
  display: flex;
  flex-wrap: nowrap; /* Prevents wrapping */
  border: 1px solid black;
  border-radius: 10px;
}

.PersonalDetails {
  flex: 1; /* Takes remaining space */
  display: flex;
  flex-direction: column;
}

/* Social media icon colors */
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

/* Responsive styles for smaller screens */
@media (max-width: 768px) {
  .BusinessRow,
  .PersonalRow {
    flex-wrap: wrap; /* Allows wrapping on smaller screens */
  }

  .IMG-socialIcons,
  .BusinessDetails,
  .PersonalDetails {
    flex: 1 1 100%; /* Take full width on smaller screens */
  }
  .BusinessName {
    font-family: "Arial Narrow Bold", sans-serif;
    font-size: 25px;
    justify-content: center;
    text-align: center;
    padding: 10px;
  }
}

/* StatisticsRow styles */
.StatisticsRow {
  display: flex;
  flex-wrap: wrap;
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px 0;
}
.MembershipState {
  width: 100%;
  justify-content: center;
  font-weight: bold;
  font-size: 15px;
  color: white;
  background-color: rgb(213, 86, 245);
  padding: 10px 0;
  border-radius: 10px;
}
.StatisticsColumn {
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
.borderedSections {
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px 0;
}
.ContentRow {
  padding-bottom: 30px;
  margin-bottom: 30px;
  background-color: rgb(113, 245, 95);
}

.TabSegment {
  width: 100%;
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
  border-radius: 10px;
}

.ActivitySegment ion-segment-button {
  flex: 1 1 auto;
}

@media (max-width: 600px) {
  .ActivityRow .ion-col {
    width: 100%;
  }
}
/*  gives the nice button color & shape effect to the tab */
.btn {
  transition: 0.5s;
  padding: 0;
  margin: 0;
  font-size: 14px; /* Adjust tab font size for mobile */
  /* font-weight: bold; */
  letter-spacing: -0.5px; /* Amazingly reduces the spaces between the letters/characters */
}

/* Hover effect */
.btn:hover {
  background: #ffee10;
  color: black;
  box-shadow: 0 0 1rem #ffee10;
}
</style>
