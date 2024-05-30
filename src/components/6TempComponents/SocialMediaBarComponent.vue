<template>
  <div class="navbar-container">
    <IonGrid>
      <IonRow class="navbar-row">
        <!-- First Section -->
        <IonCol class="social-section">
          <div class="section-title">Share This Page In Your:</div>
          <div class="social-media-icons">
            <IonIcon :icon="logoFacebook" class="facebook-icon" />
            <IonIcon :icon="logoTwitter" class="twitter-icon" />
            <IonIcon :icon="logoInstagram" class="instagram-icon" />
            <IonIcon :icon="logoLinkedin" class="linkedin-icon" />
          </div>
        </IonCol>
        <!-- Second Section -->
        <IonCol class="social-section">
          <div class="section-title">Connect With Us In:</div>
          <div class="social-media-icons">
            <IonIcon :icon="logoFacebook" class="facebook-icon" />
            <IonIcon :icon="logoTwitter" class="twitter-icon" />
            <IonIcon :icon="logoInstagram" class="instagram-icon" />
            <IonIcon :icon="logoLinkedin" class="linkedin-icon" />
          </div>
        </IonCol>
        <!-- Search Box Section -->
        <IonCol class="search-section">
          <input type="text" class="custom-searchbox" placeholder="Search" />
        </IonCol>
        <!-- About Button Section -->
        <IonCol class="about-section">
          <IonButton fill="outline" class="about-button">About Page</IonButton>
        </IonCol>
        <!-- Third Section -->
        <IonCol class="social-section">
          <div class="section-title">Invite/Send A Message To Your Friends Or Contacts In:</div>
          <div class="social-media-icons">
            <IonIcon :icon="logoFacebook" class="facebook-icon" />
            <IonIcon :icon="logoTwitter" class="twitter-icon" />
            <IonIcon :icon="logoInstagram" class="instagram-icon" />
            <IonIcon :icon="logoLinkedin" class="linkedin-icon" />
          </div>
        </IonCol>
        <!-- Fourth Section -->
        <IonCol class="social-section">
          <div class="section-title">Connect With Your Friends:</div>
          <div class="social-media-icons">
            <IonIcon :icon="logoFacebook" class="facebook-icon" />
            <IonIcon :icon="logoTwitter" class="twitter-icon" />
            <IonIcon :icon="logoInstagram" class="instagram-icon" />
            <IonIcon :icon="logoLinkedin" class="linkedin-icon" />
          </div>
        </IonCol>
      </IonRow>
    </IonGrid>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonGrid, IonRow, IonCol, IonIcon, IonButton } from '@ionic/vue';
import { logoFacebook, logoTwitter, logoInstagram, logoLinkedin } from 'ionicons/icons';

export default defineComponent({
  name: 'SocialMediaNavbar',
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
      logoInstagram,
      logoLinkedin,
    };
  },
});
</script>

<style scoped>
.navbar-container {
  border-bottom: 1px solid #000;
  /* padding: 10px 0; */
}

.navbar-row {
  display: flex;
  align-items: center;
}

.social-section,
.search-section,
.about-section {
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
  margin-bottom: 5px;
}

/* Social media icon colors */
.facebook-icon {
  color: #3b5998; /* Facebook blue */
}

.twitter-icon {
  color: #1da1f2; /* Twitter blue */
}

.instagram-icon {
  color: #e4405f; /* Instagram gradient */
}

.linkedin-icon {
  color: #0077b5; /* LinkedIn blue */
}

.custom-searchbox {
  width: 80%;
  padding: 5px 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.about-button {
  --padding-start: 5px;
  --padding-end: 5px;
  font-size: 10px;
  --font-family: 'Arial, sans-serif'; /* Sleek, readable font */
}


@media (max-width: 768px) {
  .navbar-row {
    display:flex;
    /* flex-direction: row; */
    /* flex-wrap: wrap; */
    align-items: flex-start;
    text-align: center;
  }

  .column {
    width: 100%;
    max-width: 300px;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;
  }

  .about-button {
    /* width: 100%; */
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .social-media-icons ion-icon {
    font-size: 18px;
  }

  .section-title {
    font-size: 10px;
  }

  .about-button {
    font-size: 12px;
  }
}


</style>
