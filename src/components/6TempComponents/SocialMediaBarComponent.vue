<template >
    <IonGrid >
      <IonRow class="navbar-row" >
        <!-- Left Column -->
        <IonCol class="right-column" >
          <IonRow class="social-section" >
            <div class="social-section-inner" >
              <div class="section-title">Connect With Your Friends:</div>
              <div class="social-media-icons" >
                <IonButton size="small" fill="clear" class="social-button"><IonIcon :icon="logoLinkedin" class="linkedin-icon" /></IonButton>
                <IonButton size="small"fill="clear" class="social-button"><IonIcon :icon="logoGoogle" class="google-icon" /></IonButton>
                <IonButton size="small" fill="clear" class="social-button"><IonIcon :icon="logoFacebook" class="facebook-icon" /></IonButton>
                <IonButton size="small" fill="clear" class="social-button"><IonIcon :icon="logoTwitter" class="twitter-icon" /></IonButton>
              </div>
            </div>
          </IonRow>
          <IonRow class="social-section">
            <div class="social-section-inner">
              <div class="section-title">Invite/Send A Message To Your Friends Or Contacts In:</div>
              <div class="social-media-icons">
                <IonButton size="small" fill="clear" class="social-button"><IonIcon :icon="logoLinkedin" class="linkedin-icon" /></IonButton>
                <IonButton size="small"fill="clear" class="social-button"><IonIcon :icon="logoGoogle" class="google-icon" /></IonButton>
                <IonButton size="small" fill="clear" class="social-button"><IonIcon :icon="logoFacebook" class="facebook-icon" /></IonButton>
                <IonButton size="small" fill="clear" class="social-button"><IonIcon :icon="logoTwitter" class="twitter-icon" /></IonButton>
              </div>
            </div>
          </IonRow>
        </IonCol>

        <!-- Middle Column -->
        <IonCol class="middle-column">
          <div class="middle-content">
            <input type="text" class="custom-searchbox" placeholder="Search" />
            <IonButton fill="outline" class="about-button">About Page</IonButton>
          </div>
        </IonCol>

        <!-- Right Column -->
        <IonCol class="left-column">
          <IonRow class="social-section">
            <div class="social-section-inner">
              <div class="section-title">Share This Page In Your:</div>
              <div class="social-media-icons">
                <IonButton size="small" fill="clear" class="social-button"><IonIcon :icon="logoLinkedin" class="linkedin-icon" /></IonButton>
                <IonButton size="small"fill="clear" class="social-button"><IonIcon :icon="logoGoogle" class="google-icon" /></IonButton>
                <IonButton size="small" fill="clear" class="social-button"><IonIcon :icon="logoFacebook" class="facebook-icon" /></IonButton>
                <IonButton size="small" fill="clear" class="social-button"><IonIcon :icon="logoTwitter" class="twitter-icon" /></IonButton>
              </div>
            </div>
          </IonRow>
          <IonRow class="social-section">
            <div class="social-section-inner">
              <div class="section-title">Connect With Us In:</div>
              <div class="social-media-icons">
                <IonButton size="small" fill="clear" class="social-button"><IonIcon :icon="logoLinkedin" class="linkedin-icon" /></IonButton>
                <IonButton size="small"fill="clear" class="social-button"><IonIcon :icon="logoGoogle" class="google-icon" /></IonButton>
                <IonButton size="small" fill="clear" class="social-button"><IonIcon :icon="logoFacebook" class="facebook-icon" /></IonButton>
                <IonButton size="small" fill="clear" class="social-button"><IonIcon :icon="logoTwitter" class="twitter-icon" /></IonButton>
              </div>
            </div>
          </IonRow>
        </IonCol>
      </IonRow>
    </IonGrid>
</template>






<script lang="ts">
import { defineComponent } from 'vue';
import { IonGrid, IonRow, IonCol, IonIcon, IonButton } from '@ionic/vue';
import { logoFacebook, logoTwitter, logoLinkedin, logoGoogle } from 'ionicons/icons';

export default defineComponent({
  name: 'SignInSignUpComponent',
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

.navbar-container {
  border: 1px solid #000;
}

.navbar-row, 
.left-column,
.middle-column,
.right-column,
.social-section,
.social-section-inner,
.section-title, 
.social-media-icons,
.social-button,
.middle-content {
  margin: 0; /* Remove all margin */
  padding: 0; /* Remove all padding */
}

.navbar-row {
  /* display: flex; */
  align-items: center;
  align-content: space-evenly;
  justify-content: space-evenly;
}

.left-column,
.middle-column,
.right-column {
  display: flex;
  flex-direction: row;
  align-items: center; 
  align-content: center;
  justify-content: space-around;
  padding: 3px;

}

.middle-content {
  display: flex;
  gap: 3px;  
}

.social-section,
.search-section,
.about-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align titles to the left */
}

.social-section-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.social-media-icons {
  display: flex;
  gap: 3px;

}

.social-media-icons ion-icon {
  font-size: 19.2px; /* 20% reduction from 24px */
  
}

.section-title {
  font-size: 11px;
  font-family: 'Arial, sans-serif'; /* Sleek, readable font */
  margin-bottom: 0; /* Remove bottom margin */
  
}

/* Social media icon colors */
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

.custom-searchbox {
  width: 80%;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.about-button {
  font-size: 10px;
  --font-family: 'Arial, sans-serif'; /* Sleek, readable font */
}

.social-button {
  --padding-start: 0;
  --padding-end: 0;
  --padding-top: 0;
  --padding-bottom: 0;  
}

@media (max-width: 768px) {
  .social-section-inner {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

.left-column,
.middle-column,
.right-column {
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  padding: 3px;
}
  
  ion-button {
    margin: 0px;
    padding:0px;
  }
  
  .middle-content {
    flex-direction: column;
    align-items: center;
  }

   .section-title {
    font-size: 10px;
  }

  .social-media-icons ion-icon {
    font-size: 18px;
  }

  .about-button {
    font-size: 12px;
  }
}
</style>
