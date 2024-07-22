<template>
  <IonGrid>
    <p class="CenterPositions">
      Here all bookings or profiles are specific to their events only.
      <br />
      For a list of all pitching, investors, investments or pitchers, check
      the SideBar & click on "Profiles"
    </p>
    <IonRow class="Tabs4_Events-Creats-Edit-Floorplan-Ticketing-Bookings">
      <IonSegment v-model="selectedTab" class="TabSegment" color="primary">
        <IonSegmentButton class="btn" value="EventsList">Events List</IonSegmentButton>
        <IonSegmentButton class="btn" value="CreateEvent">Create Event</IonSegmentButton>
        <IonSegmentButton class="btn" value="Bookings">Bookings</IonSegmentButton>
        <IonSegmentButton class="btn" value="PitchingsProfile">Pitchings Profile</IonSegmentButton>
        <IonSegmentButton class="btn" value="InvestmentApplications">Investment Applications</IonSegmentButton>
        <IonSegmentButton class="btn" value="InvestorsProfile">Investors Profile</IonSegmentButton>
      </IonSegment>
    </IonRow>
    <IonRow class="DisplayComponentRow">
      <!-- List of events here -->
      <IonCol v-show="selectedTab === 'EventsList'" class="EventsList">
        <AdminEventsListComponent />
      </IonCol>
      <!-- Create Event Tab here -->
      <IonCol v-show="selectedTab === 'CreateEvent'" class="CreateEvent">
        <AdminCreateEventComponent />
      </IonCol>
      <!-- Booking/Reserved Tickets Tab here -->
      <IonCol v-show="selectedTab === 'Bookings'" class="Bookings">
        <AdminEventsBookingsComponent />
      </IonCol>
      <!-- Pitchings Profile Tab here -->
      <IonCol v-show="selectedTab === 'PitchingsProfile'" class="PitchingsProfile">
        <AdminEventSpecificMembersPitchingProfileDetailAdminComponent />
      </IonCol>
      <!-- Investment Applications Tab here -->
      <IonCol v-show="selectedTab === 'InvestmentApplications'" class="InvestmentApplications">
        <AdminEventsBookingsComponent />
      </IonCol>
      <!-- Investors Profile Tab here -->
      <IonCol v-show="selectedTab === 'InvestorsProfile'" class="InvestorsProfile">
        <AdminEventSpecificInvestorsProfileDetailAdminComponent />
      </IonCol>
    </IonRow>
  </IonGrid>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonGrid, IonRow, IonCol, IonSegment, IonSegmentButton } from '@ionic/vue';
import AdminEventsListComponent from '@/components/AdminComponents/AdminEventsComponents/AdminEventsListComponent.vue';
import AdminEventsBookingsComponent from '@/components/AdminComponents/AdminEventsComponents/AdminEventsBookingsComponent.vue';
import AdminCreateEventComponent from '@/components/AdminComponents/AdminEventsComponents/AdminCreateEventComponent.vue';
import AdminEventSpecificMembersPitchingProfileDetailAdminComponent from '@/components/AdminComponents/AdminEventsComponents/AdminEventSpecificMembersPitchingProfileDetailAdminComponent.vue';
import AdminEventSpecificInvestorsProfileDetailAdminComponent from '@/components/AdminComponents/AdminEventsComponents/AdminEventSpecificInvestorsProfileDetailAdminComponent.vue';

export default defineComponent({
  name: 'AdminCreateTABsEventComponent',
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonSegment,
    IonSegmentButton,
    AdminEventsListComponent,
    AdminEventsBookingsComponent,
    AdminCreateEventComponent,
    AdminEventSpecificMembersPitchingProfileDetailAdminComponent,
    AdminEventSpecificInvestorsProfileDetailAdminComponent,
  },
  setup() {
    const selectedTab = ref<string>('EventsList'); // Initialize with the default tab
    return {
      selectedTab,
    };
  },
});
</script>

<style scoped>
/* Tabs style */
.TabSegment {
  display: flex;
  flex-wrap: wrap; /* Allow segment buttons to wrap */
}

.TabSegment .btn {
  flex: 1 1 auto; /* Ensure buttons are flexible and wrap appropriately */
}

.EventsList,
.CreateEvent,
.Bookings {
  background-color: #f9f9f9;
  width: auto;
}

/* Tabs style ends */
ion-grid {
  height: 100%;
  overflow-y: auto;
  width: 100%;
}

.CenterPositions {
  text-align: center;
  justify-content: center;
  font-weight: bold;
}
</style>
