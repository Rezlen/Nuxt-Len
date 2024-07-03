<template>
  <IonCard>
    <IonCardHeader class=" CenterPositions TitelSubTitle">
      <IonCardTitle>Card Title Company Name</IonCardTitle>
      <IonCardSubtitle>Card Subtitle Person Name</IonCardSubTitle>
      <IonCardSubtitle>Business Category</IonCardSubTitle>
    </IonCardHeader>
    <IonRow class=" CenterPositions Star%Img" >
      <IonCol> <span class="star">★</span> VVIP</IonCol>
      <IonCol>%%%</IonCol>
      <img alt="LEN Logo" height="100" width="150" src="/public/favicon.png" />
    </IonRow>

    <!-- PositionSalaryVisitedExhibitedRow ########################## -->
    <IonRow class="PositionSalaryVisitedExhibitedRow" >
      <IonRow>Position: Comp Here</IonRow>
      <IonRow class=" SalaryRow"  >Salary: Comp Here</IonRow>
      <IonRow>Visited: Comp Here</IonRow>
      <IonRow>Exhibited: Comp Here</IonRow>
      <IonRow>Investor: Comp Here</IonRow>
      <IonRow>Investment Broker: Comp Here</IonRow>
      <IonRow>Business Mentor: Comp Here</IonRow>
    </IonRow>

    <!-- ProvideNeedRow ########################## -->
    <IonRow class="ProvideNeedRow" >
      <IonRow>Provide: Comp Here. Our objective is to help the following groups</IonRow>
      <IonRow>Need: Comp Here. At our networking events we give </IonRow>
    </IonRow>

    <!-- ColoredSection ########################## -->
    <IonCol class="ColoredSection">
      <IonRow class=" CenterPositions RevenueRow" >Revenue Comp Here</IonRow>
      <IonRow class="ColoredSectionLFont" >
        <IonCol class="ColoredSectionLeftCol">
          <IonRow>Offers: 22</IonRow>
          <IonRow>Needs: 22</IonRow>
          <IonRow>Page Visited: 22</IonRow>
        </IonCol>
        <IonCol class="ColoredSectionRightCol">
          <IonRow>Requested: 22</IonRow>
          <IonRow>Provided: 22</IonRow>
          <IonRow>Connections: 22</IonRow>
        </IonCol>
      </IonRow>
      <IonButton size="small" fill="clear" class=" CenterPositions ConnectbtnRow">ConnectBTN</IonButton>
      <IonRow class=" CenterPositions social-media-icons">
        <IonButton size="small" fill="clear" class="social-button"><IonIcon :icon="logoLinkedin" class="linkedin-icon" /></IonButton>
        <IonButton size="small" fill="clear" class="social-button"><IonIcon :icon="logoGoogle" class="google-icon" /></IonButton>
        <IonButton size="small" fill="clear" class="social-button"><IonIcon :icon="logoFacebook" class="facebook-icon" /></IonButton>
        <IonButton size="small" fill="clear" class="social-button"><IonIcon :icon="logoTwitter" class="twitter-icon" /></IonButton>
      </IonRow>
    </IonCOl>
  
  </IonCard>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonGrid, IonRow, IonCol, IonSegment, IonSegmentButton, IonButton, IonIcon, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
import { logoFacebook, logoTwitter, logoGoogle, logoLinkedin } from 'ionicons/icons';

export default defineComponent({
  name: 'MiniProfileCardVIPComponent',
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonSegment,
    IonSegmentButton,
    IonButton,
    IonIcon,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
  },
  setup() {
    
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


/* Limiting the size of the card#################### */
ion-card {
  max-width: 270px; /* Maximum width of the card */
  max-height: 700px; /* Maximum height of the card */
  width: 100%; /* Responsive width */
  height: auto; /* Responsive height */
  margin: 0 auto; /* Center the card */
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(142, 15, 226, 0.2); /* X-offset, Y-offset, blur radius, and color */
}

.star{
  color: rgb(158, 0, 197);
  font-size: 30px;
}
.CenterPositions {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}

/* This section put anything that need to be in a column in a column */
.PositionSalaryVisitedExhibitedRow,
.ProvideNeedRow,
.ColoredSection,
.ColoredSectionLeftCol,
.ColoredSectionRightCol {
 display: flex;
 flex-direction: column;
}

.PositionSalaryVisitedExhibitedRow,
.ProvideNeedRow {
  padding-left: 15px;
  font-weight: bold;
}

.ProvideNeedRow {
  margin-top: 15px;
  margin-bottom: 15px;
}

.ColoredSection {
  background: linear-gradient(135deg, #a80077 0%, #cb60b3 12%, #a80077 23%, #e815b3 32%, #a80077 49%, #db36a4 100%);
}


.RevenueRow {
  font-weight:bold;
  font-size: 20px;
  padding: 5px;
  color: red;
  background-color: white;
  border-radius: 8px;
}
.SalaryRow {
  font-weight:bold;
  font-size: 17px;
  padding-bottom: 5px;
  padding-top: 5px;
  color: red;
}

.ColoredSectionLFont {
  color: white;
  font-size: 13px;
}

.ColoredSectionRightCol {
  /* justify-content: flex-end; */
  /* align-content: flex-end; */
  align-items: flex-end;
  text-align: right;
}

.ConnectbtnRow {
  font-size: 20px;
  color: rgb(255, 255, 255);
  padding: 8px;
  text-align: center;
  font-weight:bold;
}


/* Social media icon colors */
.social-media-icons {
  background-color: white;
  padding: 4px 0;
}

.social-button {
  margin:0;
  padding:0;
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

</style>