<template>
  <IonCard>
    <IonCardHeader class=" CenterPositions TitelSubTitle">
      <IonCardTitle>Card Title Company Name</IonCardTitle>
      <IonCardSubtitle>Card Subtitle Person Name</IonCardSubTitle>
    </IonCardHeader>
  </IonCard>
  <IonRow class=" CenterPositions Star%Img" ></IonRow>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardContent, } from '@ionic/vue';
import { logoFacebook, logoTwitter, logoGoogle, logoLinkedin } from 'ionicons/icons';

export default defineComponent({
  name: 'OfferComponent',
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardContent,
    IonCardHeader,
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


*{
  border: solid 1px black;
}
</style>
