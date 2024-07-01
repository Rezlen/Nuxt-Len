<template>
  <IonGrid>
    <IonCol class="LeftAd1">
      <!-- this add vert must be deactivated after the timestamp is expired -->
      <!-- this advert must be specific to every page or customer ACTIVITY or Profile input -->
      <a href="https://www.londonentrepreneursnetwork.com/adverts" class="Advert">
      <!-- /* Set max charector to display fpr P */ -->    
        <p class="p">
        By clicking on Sign Up, you agree to London Entrepreneurs Network's
        By clicking on Sign Up, you 
        <img alt="LeftAd2" class="img" src="../../../Images/css-flexbox.png" />
        </p>
      </a>
      
   </IonCol>
  </IonGrid>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonGrid, IonRow, IonCol, } from '@ionic/vue';

export default defineComponent({
  name: 'LeftAd2Component',
  components: {
    IonGrid,
    IonRow,
    IonCol,
  },
});
</script>

<style scoped>
/* just for certainty, we have added the same attribute for IonCol & its class */
ion-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  flex: 1;
  border: solid 1px gray;
  border-radius: 5px;
  max-width: 210px;
  max-height: 350px;
  box-sizing: border-box; /* Ensure padding and borders are included in total width and height */
}

/* Set max character to display */
p {
  text-align: center;
  color: black;
  white-space: normal; /* Ensure normal white-space handling */
  padding: 0 5px;
  margin: 0; /* Reset margin to avoid extra spacing */
  box-sizing: border-box; /* Ensure padding is included in total width */
}
a {
  text-decoration: none;
}

img {
  max-width: 100%;
  max-height: 245px;
  display: block; /* Ensure proper layout inside the paragraph */
  margin: 0 auto; /* Center the image */
}

</style>
