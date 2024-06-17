<template>
  <IonGrid>
    <IonCardHeader class=" CenterPositions TitelSubTitle">
      <IonCardTitle class=" OfferTitle" >Pitching Title</IonCardTitle>
      <IonCardSubtitle class=" OfferSubTitle" >Looking For(We Need)</IonCardSubTitle>
    </IonCardHeader>

    <!--  Pitching Component (Video, PowerPoint, WeProvide WeNeed, Like Comment) with Mini Profile,  -->
    <IonRow class="#">
     <MiniProfileCardComponent/>
      <IonCol class="RightSideCol" >
        <IonRow class="VideoPowerPoint">
          <iframe width="250" height="250" src="https://www.youtube.com/embed/dNjQ_wZBA28" title="🔥Business Advice London - Advice For Entrepreneurs - Mentoring, Coaching  | London Entrepreneurs 🚀" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <iframe width="250" height="250" src="https://www.youtube.com/embed/dNjQ_wZBA28" title="🔥Business Advice London - Advice For Entrepreneurs - Mentoring, Coaching  | London Entrepreneurs 🚀" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </IonRow>
        <IonRow class="WeProvide" >We Provide</IonRow>
        <IonRow class="WeNeed" >We Need</IonRow>
        <IonRow class="LikeCatSeenSocial">
          <IonCol class="ColFitContent">Like 86</IonCol>
          <IonCol class="ColFitContent" >Category: OFFICE SPACE</IonCol>
          <IonCol class="ColFitContent" >Seen: 1370</IonCol>
          
          <IonCol>
              <IonRow class=" ColFitContent social-media-icons">
                <IonButton size="small" fill="clear" class="social-button"><IonIcon :icon="logoLinkedin" class="linkedin-icon" /></IonButton>
                <IonButton size="small" fill="clear" class="social-button"><IonIcon :icon="logoGoogle" class="google-icon" /></IonButton>
                <IonButton size="small" fill="clear" class="social-button"><IonIcon :icon="logoFacebook" class="facebook-icon" /></IonButton>
                <IonButton size="small" fill="clear" class="social-button"><IonIcon :icon="logoTwitter" class="twitter-icon" /></IonButton>
              </IonRow>
          </IonCol>
        </IonRow>
        <IonRow class="Comments" >Comments </IonRow>
      </IonCol>

    </IonRow>
  </IonGrid>
</template>




<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonPage, IonGrid, IonRow, IonIcon, IonCol, IonContent, IonSegment, IonSegmentButton, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
import { logoFacebook, logoTwitter, logoGoogle, logoLinkedin } from 'ionicons/icons';
import MiniProfileCardComponent from '@/components/ProfileComponents/MiniProfileCardComponent.vue';

export default defineComponent({
  name: 'PitchingComponent',
  components: {
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonContent,
    IonSegment,
    IonSegmentButton,
    MiniProfileCardComponent,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
  },
  setup() {
    const selectedTab = ref<string>('AllPitchers'); // Initialize with the default tab

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
/* *{
  border: 1px solid #070505;
} */
ion-grid {
  box-shadow: 0 4px 8px rgba(142, 15, 226, 0.2); /* X-offset, Y-offset, blur radius, and color */
}

.CenterPositions {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
}

.TitelSubTitle {
  border: solid 1px rgb(148, 138, 138);
  border-radius: 5px;
  gap: 5px;
}
.VideoPowerPoint {
  border: 1px solid #070505;
  justify-content: space-between;
  border-radius: 10px;
}
.RightSideCol {
  padding-left: 15px;
}
.WeProvide, 
.WeNeed,
.Comments {
  border: 1px solid #070505;
  border-radius: 10px;
}

.WeProvide, 
.WeNeed,
.Like,
.Comments {
  padding-left: 10px;
  padding-top: 10px;
}
.ColFitContent {
  width: fit-content;
  text-wrap: nowrap;
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


@media (max-width: 600px) {
  .AllPitchers,
  .OneMinPitchers,
  .ThreeMinPitchers,
  .InvestmentPitchers,
  .FreePitchingReservation {
    flex: 1 1 100%; /* Make each tab content full width on small screens */
  }
}
</style>
