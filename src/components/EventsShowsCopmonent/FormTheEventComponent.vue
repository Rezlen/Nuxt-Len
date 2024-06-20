<template>
  <IonGrid class="Grid">
    <IonCard>

      <IonCardHeader class=" CenterPositions ">
        <IonCardTitle class=" CenterPositions" >Create Events</IonCardTitle>
      </IonCardHeader>
      <IonRow>
        <IonCol><IonDatetime ></IonDatetime></IonCol>
        <IonCol>
          <IonTextarea :auto-grow="true"  label="Event Title" label-placement="floating"  :counter="true"  :maxlength="100" :counter-formatter="customFormatter" ></IonTextarea> 
        </IonCol>
        <IonCol>
          <IonTextarea class="Summeries" label="Event Details" label-placement="floating"  :counter="true"  :maxlength="1000" :counter-formatter="customFormatter" ></IonTextarea>
        </IonCol>
        <IonCol><iframe width="150px">GMap</iframe></IonCol>
        <IonCol>
          <iframe width="150" height="150" src="https://www.youtube.com/embed/dNjQ_wZBA28" title="🔥Business Advice London - Advice For Entrepreneurs - Mentoring, Coaching  | London Entrepreneurs 🚀" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </IonCol>
        <IonCol>
          <IonTextarea class="Summeries" label="Address Location Name" label-placement="floating"  :counter="true"  :maxlength="100" :counter-formatter="customFormatter" ></IonTextarea>
        </IonCol>
        <IonCol>
          <IonTextarea outline="fill" class="Summeries" label="Full Address" label-placement="floating"  :counter="true"  :maxlength="100" :counter-formatter="customFormatter" ></IonTextarea>
        </IonCol>
      </IonRow>
      <IonButton>Submit</IonButton>


      <!-- Create Tickets Section ############################# -->





    </IonCard>
  </IonGrid>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonDatetime, IonContent, IonGrid, IonRow, IonCol, IonButton, IonTextarea, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/vue';

export default defineComponent({
  name: 'FormTheEventComponent',
  components: {
    IonDatetime,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonTextarea,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
  },
  setup() {
    const selectedCategory = ref<string | null>(null);

    const customFormatter = (inputLength: number, maxLength: number) => {
      return `${maxLength - inputLength} characters remaining`;
    };

    return {
      selectedCategory,
      customFormatter
    };
  }
});
</script>



<style scoped>

ion-grid{
  overflow-y:auto;
  height: 100%;
}
.CenterPositions {
  text-align: center;
  justify-content: center;
  font-weight: bold;
}
ion-textarea{
  border-radius: 7px;
  border:1px green solid;
}


</style>
