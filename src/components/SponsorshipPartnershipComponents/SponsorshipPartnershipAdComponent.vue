<template>
  <IonGrid>
  <IonCard>
      <IonRow class="image">
        <img alt="LEN Logo" height="300" width="350" src="/favicon.png" />
      </IonRow>
      <IonRow class="description">
        <p>This is the description part of sponsorship partnership. It can only be 200 characters.</p>
      </IonRow>
      <IonRow class="socialStat">
        <IonCol class="stat">List Viewed: 21 | Clicked: 33</IonCol>
        <a href="#"><IonIcon class="linkedin-icon" size="large" :icon="logoLinkedin" /></a>
        <a href="#"><IonIcon class="google-icon" size="large" :icon="logoGoogle" /></a>
        <a href="#"><IonIcon class="facebook-icon" size="large" :icon="logoFacebook" /></a>
        <a href="#"><IonIcon class="twitter-icon" size="large" :icon="logoTwitter" /></a>
        <a href="#"><IonIcon size="large" :icon="linkOutline" /></a>
      </IonRow>
    </IonCard>
  </IonGrid>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonCard, IonButton, IonCol, IonGrid, IonIcon, IonRow } from '@ionic/vue';
import { logoFacebook, logoTwitter, logoGoogle, logoLinkedin, linkOutline } from 'ionicons/icons';

export default defineComponent({
  name: 'SponsorshipPartnershipAdComponent',
  components: {
    IonCard, 
    IonButton,
    IonCol,
    IonGrid,
    IonRow,
    IonIcon,
  },
  setup() {
    return {
      logoFacebook,
      logoTwitter,
      logoGoogle,
      logoLinkedin,
      linkOutline,
    };
  },
});
</script>


<style scoped>
  /* * {
    border: 2px solid gray; 
  } */
  ion-card {
    max-width: 400px; 
    max-height: 420px; 
    margin: 0 auto;
    border-radius: 6px;
    border: 3px solid red; 
  }
  .image {
    display: flex;

    justify-content: center;
  }
  /* Social media icon colors */
  .social-media-icons {
    background-color: white;
    padding: 4px 0;
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
  .CenterPositions {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  .description {
    font-size: 17px;
    text-align: center;
  }

  @media (max-width: 600px) {

}
</style>
