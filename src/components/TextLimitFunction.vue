<template>
  <ion-card>
    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
    <ion-card-header>
      <ion-card-title>{{ truncatedCardTitle }}</ion-card-title>
      <ion-card-subtitle>{{ truncatedCardSubtitle }}</ion-card-subtitle>
    </ion-card-header>
    <IonRow class="ProvideNeedRow">
      <IonRow>{{ truncatedProvideText }}</IonRow>
      <IonRow>{{ truncatedNeedText }}</IonRow>
    </IonRow>
  </ion-card>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { IonGrid, IonRow, IonCol, IonSegment, IonSegmentButton, IonButton, IonIcon, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
import { logoFacebook, logoTwitter, logoGoogle, logoLinkedin } from 'ionicons/icons';

function truncateText(text: string, maxLength: number): string {
  return text.length <= maxLength ? text : text.substring(0, maxLength) + '...';
}

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
    const provideText = ref<string>('Provide: Comp Here');
    const needText = ref<string>('Need: Comp Here');
    const cardTitle = ref<string>('Card Title');
    const cardSubtitle = ref<string>('Card Subtitle');

    const truncatedProvideText = computed(() => truncateText(provideText.value, 100));
    const truncatedNeedText = computed(() => truncateText(needText.value, 100));
    const truncatedCardTitle = computed(() => truncateText(cardTitle.value, 100));
    const truncatedCardSubtitle = computed(() => truncateText(cardSubtitle.value, 100));

    return {
      logoFacebook,
      logoTwitter,
      logoLinkedin,
      logoGoogle,
      truncatedProvideText,
      truncatedNeedText,
      truncatedCardTitle,
      truncatedCardSubtitle,
    };
  },
});
</script>

<style scoped>
/* General styles */

* {
  border: 1px solid black;
}

/* END gives the nice button color & shape effect to the tab */
</style>
