<template>
  <IonToolbar class="navbar-toolbar">
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
          <div class="section-title">Invite/Send A Message To Your Friends Or Contacts In:</div>
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
          <IonButton class="about-button">About Page</IonButton>
        </IonCol>
        <!-- Third Section -->
        <IonCol class="social-section">
          <div class="section-title">Connect With Your Friends:</div>
          <div class="social-media-icons">
            <IonIcon :icon="logoFacebook" class="facebook-icon" />
            <IonIcon :icon="logoTwitter" class="twitter-icon" />
            <IonIcon :icon="logoInstagram" class="instagram-icon" />
            <IonIcon :icon="logoLinkedin" class="linkedin-icon" />
          </div>
        </IonCol>
        <!-- Fourth Section -->
        <IonCol class="social-section">
          <div class="section-title">Connect With Us In:</div>
          <div class="social-media-icons">
            <IonIcon :icon="logoFacebook" class="facebook-icon" />
            <IonIcon :icon="logoTwitter" class="twitter-icon" />
            <IonIcon :icon="logoInstagram" class="instagram-icon" />
            <IonIcon :icon="logoLinkedin" class="linkedin-icon" />
          </div>
        </IonCol>
      </IonRow>
    </IonGrid>
  </IonToolbar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonToolbar, IonGrid, IonRow, IonCol, IonIcon, IonButton } from '@ionic/vue';
import { logoFacebook, logoTwitter, logoInstagram, logoLinkedin } from 'ionicons/icons';

export default defineComponent({
  name: 'SocialMediaNavbar',
  components: {
    IonToolbar,
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
.navbar-toolbar {
  border-bottom: 1px solid #000;
}

.navbar-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px; /* Space between sections */
  padding: 10px;
}

.social-section,
.search-section,
.about-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px; /* Equal spacing on left and right */
}

.social-media-icons {
  display: flex;
  gap: 10px;
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
  width: 50%; /* Reduce width by 50% */
  padding: 5px 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.about-section {
  margin-left: 20px;
}

.about-button {
  --padding-start: 5px;
  --padding-end: 5px;
}
</style>
