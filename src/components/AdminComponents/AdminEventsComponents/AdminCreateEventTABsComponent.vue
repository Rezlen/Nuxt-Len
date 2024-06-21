<template>
  <IonGrid>
    <p class="CenterPositions">Events: Create, Edit, Floorplan, Ticketing, Bookings</p>
    <IonRow class="Tabs4_Events-Creats-Edit-Floorplan-Ticketing-Bookings">
      <IonSegment v-model="selectedTab" class="TabSegment" color="primary">
        <IonSegmentButton class="btn" value="EventsList">Events List</IonSegmentButton>
        <IonSegmentButton class="btn" value="CreateEvent">Create Event</IonSegmentButton>
        <IonSegmentButton class="btn" value="Bookings">Bookings</IonSegmentButton>
      </IonSegment>
    </IonRow>
    <IonRow class="DisplayComponentRow">
      <!-- List of events here -->
      <IonCol v-show="selectedTab === 'EventsList'" class="EventsList">
        <AdminEventsListComponent/>
      </IonCol>

      <!-- Create Event Tab here ############################################# -->
      <IonCol v-show="selectedTab === 'CreateEvent'" class="CreateEvent">
        <AdminCreateEventComponent/>
      </IonCol>

      <!-- Booking/Reserved Tickets Tab here ####################################-->
      <IonCol v-show="selectedTab === 'Bookings'" class="Bookings">
        <AdminEventsBookingsComponent/>
      </IonCol>
    </IonRow>
  </IonGrid>
</template>



<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonIcon, IonDatetime, IonContent, IonGrid, IonRow, IonCol, IonButton,IonButtons, IonTextarea, IonCardHeader, IonCardTitle, IonCardSubtitle, IonItem, IonLabel, IonSelect, IonSegment, IonSegmentButton } from '@ionic/vue';
import { create } from 'ionicons/icons';
import AdminEventsListComponent from '@/components/AdminComponents/AdminEventsComponents/AdminEventsListComponent.vue';
import AdminEventsBookingsComponent from '@/components/AdminComponents/AdminEventsComponents/AdminEventsBookingsComponent.vue';
import AdminCreateEventComponent from '@/components/AdminComponents/AdminEventsComponents/AdminCreateEventComponent.vue';

export default defineComponent({
  name: 'AdminCreateTABsEventComponent',
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
    AdminEventsListComponent,
    AdminEventsBookingsComponent,
    AdminCreateEventComponent,
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
