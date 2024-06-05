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
        <img alt="LeftAd1" class="img" src="src/Images/css-flexbox.png" />
        </p>
      </a>
      
   </IonCol>
  </IonGrid>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonGrid, IonRow, IonCol, } from '@ionic/vue';

export default defineComponent({
  name: 'LeftAd3Component',
  components: {
    IonGrid,
    IonRow,
    IonCol,
  },
});
</script>

<style scoped>
/* just for certaity, we have added the same atteribute for IonCol & its class */
ion-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  flex: 1;
  border: solid 1px gray;
  border-radius: 5px;
  margin: 3px 0;
  max-width: 210px;
  max-height: 350px;
}
/* Remember to add charector linit of 100 for the Ad's text */
.LeftAd1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  flex: 1;
  border: solid 1px gray;
  border-radius: 5px;
  margin: 3px 0;
  max-width: 210px;
  max-height: 350px;
}

.LeftAd1 > * {
  flex: 1;
  min-height: 0; /* Ensures that the children shrink properly */
}

/* Set max charector to display */
.p{
  text-align: center;
  color: black;
}
a {
  text-decoration: none;
}

img {
  max-width: 200px;
  max-height: 250px;
}

@media (min-width: 768px) {

}
</style>
