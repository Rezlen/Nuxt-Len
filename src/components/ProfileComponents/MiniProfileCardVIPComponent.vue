<template>
  <ion-card>
    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
    <ion-card-header>
      <ion-card-title>Card Title</ion-card-title>
      <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
    </ion-card-header>
    <!-- ProvideNeedRow ########################## -->
    <IonRow class="ProvideNeedRow" >
      <IonRow>Provide Comp Here</IonRow>
      <IonRow>Need Comp Here</IonRow>
    </IonRow>

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
    const selectedTab = ref<string>('listedNeeds'); // Initialize with the default tab
    const selectedTabActivity = ref<string>('listedNeeds'); // Initialize with the default tab for ActivityRow

    return {
      selectedTab,
      selectedTabActivity,
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

* {
  border: 1px solid black;
}

 /*  END gives the nice button colur & shape effect to the tab */


</style>

