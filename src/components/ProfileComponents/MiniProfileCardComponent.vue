<template>
  <ion-card>
    <ion-card-header class=" CenterPositions TitelSubTitle">
      <ion-card-title>Card Title Company Name</ion-card-title>
      <ion-card-subtitle>Card Subtitle Person Name</ion-card-subtitle>
    </ion-card-header>
    <IonRow class=" CenterPositions Star%Img" >
      <IonCol>Star Normal</IonCol>
      <IonCol>%%%</IonCol>
      <img alt="LEN Logo" height="100" width="150" src="/public/favicon.png" />
    </IonRow>

    <!-- PositionSalaryVisitedExhibitedRow ########################## -->
    <IonRow class="PositionSalaryVisitedExhibitedRow" >
      <IonRow>Position: Comp Here</IonRow>
      <IonRow>Salary: Comp Here</IonRow>
      <IonRow>Visited: Comp Here</IonRow>
      <IonRow>Exhibited: Comp Here</IonRow>
    </IonRow>

    <!-- ProvideNeedRow ########################## -->
    <IonRow class="ProvideNeedRow" >
      <IonRow>Provide Comp Here</IonRow>
      <IonRow>Need Comp Here</IonRow>
    </IonRow>

    <!-- ColoredSection ########################## -->
    <IonCOL class="ColoredSection">
      <IonRow class=" CenterPositions RevenueRow" >Revenue Comp Here</IonRow>
      <IonCol>Offers: Comp Here</IonCol>
      <IonCol>Needs: Comp Here</IonCol>
      <IonCol>Page Visited Comp Here</IonCol>
      <IonCol>Requiested: Comp Here</IonCol>
      <IonCol>Provided: Comp Here</IonCol>
      <IonCol>Connections: Comp Here</IonCol>
      <IonRow class=" CenterPositions ConnectbtnRow">ConnectBTN</IonRow>
        <IonRow class=" CenterPositions social-media-icons">
          <IonButton size="small" fill="clear" class="social-button"><IonIcon :icon="logoLinkedin" class="linkedin-icon" /></IonButton>
          <IonButton size="small" fill="clear" class="social-button"><IonIcon :icon="logoGoogle" class="google-icon" /></IonButton>
          <IonButton size="small" fill="clear" class="social-button"><IonIcon :icon="logoFacebook" class="facebook-icon" /></IonButton>
          <IonButton size="small" fill="clear" class="social-button"><IonIcon :icon="logoTwitter" class="twitter-icon" /></IonButton>
        </IonRow>
    </IonCOl>
  
  </ion-card>
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
* {
  border: 1px solid black;
}

.CenterPositions {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}




/* Social media icon colors */
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