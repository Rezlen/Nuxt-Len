<template>
  <IonGrid class="#">
    <!-- 5Rows 1- Business Row 2- Personal row 3- Statistcs row  4-WhatWho row 5- Activities row -->
    <IonRow class=" Profile&StatisticsRow BorderedSection">
      <IonRow class=" BusinessName BorderedSection">
        <IonTitle>Business Name</IonTitle>
      </IonRow>

      <IonRow class=" BusinessRow BorderedSection">
        <img/>
        <IonRow class="BusinessRevenue BorderedSection">Business Revenue: £</IonRow>
        <IonRow>Business Category:</IonRow>
        <IonCol class=" BorderedSection" >No. of Employees:</IonCol>
        <IonCol>Business City:</IonCol>
        <div class="social-icons">
          <IonIcon :icon="logoGoogle" class="google-icon" />
          <IonIcon :icon="logoFacebook" class="facebook-icon" />
          <IonIcon :icon="logoTwitter" class="twitter-icon" />
          <IonIcon :icon="logoLinkedin" class="linkedin-icon" />
        </div>
      </IonRow>
      <!-- Personal Row ###################-->
      <IonRow class=" PersonalRow BorderedSection">
        <IonCol><img/></IonCol>
        <IonCol class=" BorderedSection" >Name:</IonCol>
        <IonCol>Age:</IonCol>
        <IonCol>Gender:</IonCol>
        <IonCol class=" BorderedSection" >Job Positions:</IonCol>
        <IonCol>City:</IonCol>
        <IonCol>Connections:</IonCol>
        <IonCol class="social-icons">
          <IonIcon :icon="logoGoogle" class="google-icon" />
          <IonIcon :icon="logoFacebook" class="facebook-icon" />
          <IonIcon :icon="logoTwitter" class="twitter-icon" />
          <IonIcon :icon="logoLinkedin" class="linkedin-icon" />
        </IonCol>
        <IonRow class="Yearly Salary">Yearly Salary: £</IonRow>
      </IonRow>

      <!-- 3- Statistcs row ##############################-->
      <IonRow class=" Statistcs Row BorderedSection">
        <IonCol class=" PostedOffers BorderedSection">Posted Offers</IonCol>
        <IonCol class=" ProvidedOffers BorderedSection">Provided Offers</IonCol>
        <IonCol class=" RequestedOffers BorderedSection">Requested Offers</IonCol>
        <IonCol class=" PostedNeeds BorderedSection">Posted Needs</IonCol>
        <IonCol class=" SatisfiedNeeds BorderedSection">Satisfied Needs</IonCol>
        <IonCol class=" PeopleSatisfiedNeeds BorderedSection">People Satisfied Needs</IonCol>
        <IonCol class=" MiniProfileListed BorderedSection">Mini Profile Listed:</IonCol>
        <IonCol class=" Exhibited  BorderedSection">Exhibited:</IonCol>
        <IonCol class=" Visited BorderedSection">Visited:</IonCol>
        <IonCol class=" Messages BorderedSection">Messages</IonCol>
        <IonCol class=" Connect BorderedSection">Connect</IonCol>
        <IonCol class=" QRCode BorderedSection">QR code</IonCol>
      </IonRow>

      <!-- 4- WhoWhat row ##############################-->
      <IonRow class=" WhoWhatSections BorderedSection" >
        <IonCol class=" WhoWeAreWhatWeDo BorderedSection">
            <p>Who We Are, What We Do</p>
            OUtPUTHERE
        </IonCol>
        <IonCol class=" WhatWeProvide BorderedSection">
          <p>What We Provide</p>
            OUtPUTHERE
        </IonCol>
        <IonCol class=" WhatWeAreLookingFor BorderedSection">
          <p>What We Are Looking For</p>
            OUtPUTHERE
        </IonCol>
      </IonRow>
      
      
      <!-- 5 - ActivityRow ListedNeedsOffersVisitedEventsConnectionGalery -->
      <IonRow class=" ActivityRow BorderedSection" >
        <IonCol class=" ListedNeeds BorderedSection" ></IonCol>
        <IonCol class=" SatisfiedNeeds BorderedSection" ></IonCol>
        <IonCol class=" PeopleSatisfiedNeeds BorderedSection" ></IonCol>
        <IonCol class=" ProvidedOffers BorderedSection" ></IonCol>
        <IonCol class=" RequestedOffers BorderedSection" ></IonCol>
        <IonCol class=" PeopleRequestedOffers BorderedSection" ></IonCol>
        <IonCol class=" ListedBestOffer BorderedSection" ></IonCol>
        <IonCol class=" VisitedEvents BorderedSection" ></IonCol>
        <IonCol class=" ExhibitedEvents BorderedSection" ></IonCol>
        <IonCol class=" Connections BorderedSection" ></IonCol>
        <IonCol class=" 4Galleries BorderedSection" ></IonCol>
        <IonCol class=" 3PitchingVideos BorderedSection" ></IonCol>
      </IonRow>


    </IonRow>

  </IonGrid>
</template>






<script lang="ts">
import { defineComponent } from 'vue';
import { IonGrid, IonRow, IonCol, IonButton, IonIcon, IonCheckbox } from '@ionic/vue';
import { logoFacebook, logoTwitter, logoGoogle, logoLinkedin } from 'ionicons/icons';

export default defineComponent({
  name: 'ProfilePublicSectionComponent',
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonButton,
  },
  data() {
    return {
      logoFacebook,
      logoTwitter,
      logoLinkedin,
      logoGoogle,
    };
  },
});
</script>



<style scoped>

.BorderedSection {
  padding: 20px;
  border: 1px solid black
}

@media (max-width: 768px) {
  .signin-signup-row {
    flex-direction: column;
  }

  .input-field {
    min-width: 100%;
  }
  
  .OrSignInUp {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .vip-button {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .social-icons ion-icon {
    font-size: 20px;
  }

  .signin-section h2, .signup-section h2 {
    font-size: 20px;
  }
}
</style>
