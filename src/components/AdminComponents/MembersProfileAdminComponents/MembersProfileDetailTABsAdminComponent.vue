<template>
  <IonGrid>
    <p class="CenterPositions">All Profiles: Edit, Delete, Export</p>
    <IonRow class="Tabs">
      <IonSegment v-model="selectedTab" class="TabSegment" color="primary">
        <IonSegmentButton class="btn" value="Profiles">Profiles</IonSegmentButton>
        <IonSegmentButton class="btn" value="PitchingsProfile">Pitchings Profile</IonSegmentButton>
        <IonSegmentButton class="btn" value="InvestmentApplications">Investment Applications</IonSegmentButton>
        <IonSegmentButton class="btn" value="InvestorsProfile">Investors Profile</IonSegmentButton>
        <IonSegmentButton class="btn" value="InvesteesProfile">Investees Profile</IonSegmentButton>
        <IonSegmentButton class="btn" value="Offers">Offers</IonSegmentButton>
        <IonSegmentButton class="btn" value="Needs">Needs</IonSegmentButton>
        <IonSegmentButton class="btn" value="BestOffers">BestOffers</IonSegmentButton>
      </IonSegment>
    </IonRow>
    <IonRow class="DisplayComponentRow">
      <!-- List of events here -->
      <IonCol v-show="selectedTab === 'Profiles'" class="Profiles">
        <AdminEventsListComponent/>
      </IonCol>
      <!-- Create Event Tab here ############################################# -->
      <IonCol v-show="selectedTab === 'PitchingsProfile'" class="PitchingsProfile">
        <AdminCreateEventComponent/>
      </IonCol>
      <!-- InvestmentApplications Tab here ####################################-->
      <IonCol v-show="selectedTab === 'InvestmentApplications'" class="InvestmentApplications">
        <AdminEventsBookingsComponent/>
      </IonCol>

      <!-- Investors Profile Tab here ####################################-->
      <IonCol v-show="selectedTab === 'InvestorsProfile'" class="InvestorsProfile">
        <AdminEventsBookingsComponent/>
      </IonCol>
      <!-- InvesteesProfile Tab here ####################################-->
      <IonCol v-show="selectedTab === 'InvesteesProfile'" class="InvesteesProfile">
        <AdminEventsBookingsComponent/>
      </IonCol>
      <!-- Offers Tab here ####################################-->
      <IonCol v-show="selectedTab === 'Offers'" class="Offers">
        <AdminEventsBookingsComponent/>
      </IonCol>
      <!-- Needs Tab here ####################################-->
      <IonCol v-show="selectedTab === 'Needs'" class="Needs">
        <AdminEventsBookingsComponent/>
      </IonCol>
      <!-- BestOffers ####################################-->
      <IonCol v-show="selectedTab === 'BestOffers'" class="BestOffers">
        <AdminEventsBookingsComponent/>
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

export default defineComponent({
  name: 'MembersProfileDetailTABsAdminComponent',
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonSegment,
    IonSegmentButton,
    AdminEventsListComponent,
    AdminEventsBookingsComponent,
    AdminCreateEventComponent,
  },
  setup() {
    const selectedTab = ref<string>('Marketing'); // Initialize with the default tab

    return {
      selectedTab,
    };
  },
});


</script>



<style scoped>

/* <!-- tabs style --> */
.TabSegment {
  display: flex;
  flex-wrap: wrap; /* Allow segment buttons to wrap */
}

.TabSegment .btn {
  flex: 1 1 auto; /* Ensure buttons are flexible and wrap appropriately */
}

.Profiles,
.PitchingsProfile,
.InvestmentApplications {
  background-color: #f9f9f9;
  width: auto;
}
/* <!--  tabs style ends --> */

ion-grid{
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
