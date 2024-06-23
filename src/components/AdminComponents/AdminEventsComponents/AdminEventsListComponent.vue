<template>
  <IonGrid >
    <IonRow class="BorderedSection">
      <IonCol>EventTitle</IonCol>
      <IonCol>EventDate</IonCol>
      <IonCol>EventLocation</IonCol>
      <IonCol>Paid Reservations</IonCol>
      <IonCol>Free Reservations</IonCol>

      <IonCol>CreatedAt</IonCol>
      <IonCol>LastEdited</IonCol>
      <IonRow >
        <IonButton fill="clear" title="Duplicate"> <IonIcon slot="icon-only" size="small" :icon="duplicate"></IonIcon></IonButton>
        <IonButton fill="clear" title="Edit"> <IonIcon slot="icon-only" size="small" :icon="create"></IonIcon></IonButton>
        <IonButton fill="clear" title="Hide This Event" > <IonIcon slot="icon-only" size="small" :icon="ban"></IonIcon></IonButton>
        <IonButton fill="clear" title="Delete This Event" > <IonIcon slot="icon-only" size="small" :icon="trash"></IonIcon></IonButton>
      </IonRow>
    </IonRow>
    <IonRow class="TotalRow BorderedSection">
      <IonCol>TotalEventsNumber</IonCol>
      <IonCol></IonCol>
      <IonCol></IonCol>
      <IonCol>TotalAmount Here</IonCol>
      <IonCol></IonCol>
      <IonCol></IonCol>
      <IonCol></IonCol>
      <IonCol></IonCol>
    </IonRow>
      
  </IonGrid>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonIcon, IonDatetime, IonContent, IonGrid, IonRow, IonCol, IonButton,IonButtons, IonTextarea, IonCardHeader, IonCardTitle, IonCardSubtitle, IonItem, IonLabel, IonSelect, IonSegment, IonSegmentButton } from '@ionic/vue';
import { create, trash, duplicate, ban } from 'ionicons/icons';

export default defineComponent({
  name: 'AdminEventsListComponent',
  components: {
    IonIcon,
    IonDatetime,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonItem,
    IonLabel,
    IonSelect,
    IonButton,
    IonButtons,
    IonTextarea,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonSegment,
    IonSegmentButton,
  },
  setup() {
    const selectedTab = ref<string>('Marketing'); // Initialize with the default tab

    const customFormatter = (inputLength: number, maxLength: number) => {
      return `${maxLength - inputLength} characters remaining`;
    };

    const onFileSelected = (event: Event) => {
      const input = event.target as HTMLInputElement;
      const file = input.files?.[0];
      if (file) {
        console.log(file);
      }
    };

    return {
      selectedTab,
      onFileSelected,
      customFormatter,
      create,
      trash,
      duplicate,
      ban,
    };
  }
});


</script>



<style scoped>

/* <!-- tabs style --> */
.Tabs4_Events-Creats-Edit-Floorplan-Ticketing-Bookings {
  display: flex;
  flex-wrap: wrap; /* Allow tabs to wrap to the next row */
  margin-bottom: 10px;
}

.TabSegment {
  display: flex;
  flex-wrap: wrap; /* Allow segment buttons to wrap */
  width: 100%;
}

.TabSegment .btn {
  flex: 1 1 auto; /* Ensure buttons are flexible and wrap appropriately */
  min-width: 150px; /* Minimum width for each button to ensure readability */
}

.DisplayComponentRow {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.EventsList,
.CreateEvent,
.Bookings {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  flex: 1 1 calc(50% - 20px); /* Ensure columns are responsive */
  margin: 10px;
}
/* <!--  tabs style ends --> */

.BorderedSection {
  border: 1px solid gray;
  border-radius: 4px;
}
ion-grid{
  height: 100%;
  overflow-y: auto;
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
