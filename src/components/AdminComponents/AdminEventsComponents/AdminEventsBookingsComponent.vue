<template>
  <IonGrid >
    <IonRow class="BorderedSection">
      <IonCol>TicketID</IonCol>
      <IonCol>TicketTitle</IonCol>
      <IonCol>Price</IonCol>
      <IonCol>TotalSameTicket Spent</IonCol>
      <IonCol>Total Spent</IonCol>
      <IonCol>Salary</IonCol>
      <IonCol>Company Revenue</IonCol>
      <IonCol title="GPS Was TurnedOn Total">GPS on-time</IonCol>
      <IonCol>BizName</IonCol>
      <IonCol>FullName</IonCol>
      <IonCol>SpotNo</IonCol>
      <IonCol>Color</IonCol>

      <IonCol>Barcode CheckedIn</IonCol>
      <IonCol>CreatedAt</IonCol>
      <IonRow >
        <IonButton fill="clear" title="Refund This Ticket" > <IonIcon slot="icon-only" size="large" :icon="close"></IonIcon></IonButton>
      </IonRow>
    </IonRow>

    <IonRow class="TotalRow BorderedSection">
      <IonCol>TotalTicketNumber</IonCol>
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
import { create, close } from 'ionicons/icons';

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
      close,
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
