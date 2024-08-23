<template>
  <IonCard>
    <IonCardHeader class="CenterPositions TitleSubTitle">
      <IonCardTitle class="OfferTitle">Card Title Company Name</IonCardTitle>
      <IonCardSubtitle class="OfferSubTitle">Card Subtitle Person Name</IonCardSubtitle>
    </IonCardHeader>
    <IonRow class="CenterPositions ImgSocialButtonRow">
      <img alt="LEN Logo" height="100" width="150" src="/favicon.png" />
      <IonButton>I want to Satisfy/Provide this Need</IonButton>
      <IonRow class="CenterPositions social-media-icons">
        <IonButton size="small" fill="clear" class="social-button">
          <IonIcon :icon="logoLinkedin" class="linkedin-icon"/>
        </IonButton>
        <IonButton size="small" fill="clear" class="social-button">
          <IonIcon :icon="logoGoogle" class="google-icon"/>
        </IonButton>
        <IonButton size="small" fill="clear" class="social-button">
          <IonIcon :icon="logoFacebook" class="facebook-icon"/>
        </IonButton>
        <IonButton size="small" fill="clear" class="social-button">
          <IonIcon :icon="logoTwitter" class="twitter-icon"/>
        </IonButton>
        <IonButton size="small" fill="clear" class="social-button">
          <IonIcon :icon="linkOutline" class="link-outline"/>
        </IonButton>
      </IonRow>
      <p>
        Want to create a FREE advert like this?
        <a href="/home" class="Events-button"> Click HERE </a> & fill the form,
        simple!
      </p>
      <IonRow>
        Category: OFFICE SPACE Wanted: 1 Seen: 1370 List Viewed: 987 Renewed: 1
        Like: 2987
      </IonRow>
    </IonRow>
    <IonCardContent class="ContentSection">
      <p>
        Offer & needs content here. commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </p>
    </IonCardContent>

    <IonRow class="ButtonsSection">
      <IonButton>Duplicate This Need</IonButton>
      <IonButton fill="outline"
        >Edit <ion-icon slot="end" :icon="create"></ion-icon
      ></IonButton>
      <IonButton>Hide This Need</IonButton>
      <IonButton fill="outline"> Delete </IonButton>
      <IonButton>Renew This Need</IonButton>
    </IonRow>
  </IonCard>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonCard,
  IonButton,
  IonCardHeader,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/vue";
import {
  logoFacebook,
  logoTwitter,
  logoGoogle,
  logoLinkedin,
  linkOutline,
} from "ionicons/icons";
import { create } from "ionicons/icons";

export default defineComponent({
  name: "NeedComponent",
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonCard,
    IonButton,
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
      linkOutline,
      create,
    };
  },
});
</script>

<style scoped>
/* *{
  border: solid 1px black;
} */
ion-card {
  height: 100%;
  overflow-y: auto;
}
.CenterPositions {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
}

.TitleSubTitle,
.ImgSocialButtonRow,
.ContentSection {
  border: solid 1px rgb(148, 138, 138);
  border-radius: 5px;
  gap: 5px;
}

/* Social media icon colors */
.social-media-icons {
  background-color: white;
  padding: 4px 0;
}

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

a {
  font-weight: bold;
}
</style>
