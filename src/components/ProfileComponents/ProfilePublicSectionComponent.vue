<template>
  <IonGrid class="#">
    <!-- Profile&StatementRow -->
    <IonRow class="BorderedSection Profile&StatementRow">
      <IonRow class="BorderedSection  BusinessRow"></IonRow>
      <IonRow class="BorderedSection  PersonalRow"></IonRow>

      <IonCol class=" BorderedSection WhoWeAreWhatWeDo"></IonCol>
      <IonCol class="BorderedSection  WhatWeProvide"></IonCol>
      <IonCol class="BorderedSection  WhatWeAreLookingFor"></IonCol>
    </IonRow>
    <!-- OffersNeedsEventsRow -->
    <IonRow class=" BorderedSection  OffersNeedsEventsRow">
    Make Sure the Tab hoverinf is done in the same way as LEN website
    </IonRow>
  </IonGrid>
</template>






<script lang="ts">
import { defineComponent } from 'vue';
import { IonGrid, IonRow, IonCol, IonButton, IonIcon, IonCheckbox } from '@ionic/vue';
import { logoFacebook, logoTwitter, logoGoogle, logoLinkedin } from 'ionicons/icons';

export default defineComponent({
  name: 'ProfilePublicSectionComponent',
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

.BorderedSection {
  padding: 20px;
  border: 1px solid black
}

@media (max-width: 768px) {
  .signin-signup-row {
    flex-direction: column;
  }

  .input-field {
    min-width: 100%;
  }
  
  .OrSignInUp {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .vip-button {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .social-icons ion-icon {
    font-size: 20px;
  }

  .signin-section h2, .signup-section h2 {
    font-size: 20px;
  }
}
</style>
