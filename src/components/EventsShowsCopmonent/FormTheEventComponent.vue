<template>
  <IonGrid >

    <p class=" CenterPositions ">Events; Creats, Edit, Floorplan, Ticketing, Bookings</p>
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
        <IonRow class="BorderedSection">
          <IonButton>Submit</IonButton>
          <IonButton>Duplicate This Event</IonButton>
          <IonButton  fill="outline">Edit <ion-icon slot="end" :icon="create"></ion-icon></IonButton>
          <IonButton>Hide This Event</IonButton>
          <IonButton fill="outline"> Delete </IonButton>
        </IonRow>
      </IonCol>

      <IonCol v-show="selectedTab === 'CreateEvent'" class="CreateEvent">
          
        <IonRow >
          <IonDatetime></IonDatetime>
          <IonCol >
            <IonRow class="BorderedSection">
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



            <!-- Create Floorplan Section ############################# -->
            <IonRow class="BorderedSection">
              <IonItem>
                <IonLabel>Upload Floorplan</IonLabel>
                <input type="file" @change="onFileSelected" />
              </IonItem>
              <IonButton fill="outline"> See/Hide Floorplan </IonButton>
            </IonRow>
            <!-- Create Tickets Section ############################# -->
            <IonRow class="BorderedSection">
              Tickets Section
            </IonRow>          
              
          </IonCol>
          <IonCol v-show="selectedTab === 'Bookings'" class="Bookings"></IonCol>
        </IonRow>
        <!-- /*  tabs segment ends */ -->




      </IonCol>

    </IonRow>
  </IonGrid>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonIcon, IonDatetime, IonContent, IonGrid, IonRow, IonCol, IonButton,IonButtons, IonTextarea, IonCardHeader, IonCardTitle, IonCardSubtitle, IonItem, IonLabel, IonSelect, IonSegment, IonSegmentButton } from '@ionic/vue';
import { create } from 'ionicons/icons';

export default defineComponent({
  name: 'FormTheEventComponent',
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
