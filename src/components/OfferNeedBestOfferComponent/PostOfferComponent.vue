<template>
  <IonGrid></IonGrid>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonPage, IonGrid, IonRow, IonCol, IonContent, IonSegment, IonSegmentButton, IonButton } from '@ionic/vue';


export default defineComponent({
  name: 'PostOfferComponent',
  components: {
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonContent,
    IonSegment,
    IonSegmentButton,

  },
  setup() {
    const selectedTab = ref<string>('PostOffer'); // Initialize with the default tab

    return {
      selectedTab,
    };
  },
});
</script>



<style scoped>
/* Updated for new tab names and mobile responsiveness */


.CenterPositions {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
}



@media (max-width: 600px) {
  .PostOffer,
  .PostNeed,
  .PostBestOffer {
    flex: 1 1 100%; /* Make each tab content full width on small screens */
  }
}
</style>
