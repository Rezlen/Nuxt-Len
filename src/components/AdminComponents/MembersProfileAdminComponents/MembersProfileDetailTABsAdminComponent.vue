<template>
  <IonGrid>
    <p class="CenterPositions">All Profiles: Edit, Delete, Export</p>
    <IonRow class="Tabs">
      <IonSegment v-model="selectedTab" class="TabSegment" color="primary">
        <IonSegmentButton class="btn" value="Profiles">Profiles</IonSegmentButton>
        <IonSegmentButton class="btn" value="Pitchings">Pitchings</IonSegmentButton>
        <IonSegmentButton class="btn" value="InvestorsProfile">Investors Profile</IonSegmentButton>
        <IonSegmentButton class="btn" value="Offers">Offers</IonSegmentButton>
        <IonSegmentButton class="btn" value="Needs">Needs</IonSegmentButton>
        <IonSegmentButton class="btn" value="BestOffers">BestOffers</IonSegmentButton>
      </IonSegment>
    </IonRow>
    <IonRow class="DisplayComponentRow">
      <!-- List of events here -->
      <IonCol v-show="selectedTab === 'Profiles'" class="Profiles">
        <MembersProfileDetailAdminComponent />
      </IonCol>
      <!-- Create Event Tab here ############################################# -->
      <IonCol v-show="selectedTab === 'Pitchings'" class="Pitchings">
        <MembersPitchingProfileDetailAdminComponent />
      </IonCol>
      <!-- InvestorsProfile Tab here ####################################-->
      <IonCol v-show="selectedTab === 'InvestorsProfile'" class="InvestorsProfile">
        <MembersProfileDetailAdminComponent />
      </IonCol>
      <!-- Offers Tab here ####################################-->
      <IonCol v-show="selectedTab === 'Offers'" class="Offers">
        <MembersProfileDetailAdminComponent />
      </IonCol>
      <!-- Needs Tab here ####################################-->
      <IonCol v-show="selectedTab === 'Needs'" class="Needs">
        <MembersProfileDetailAdminComponent />
      </IonCol>
      <!-- BestOffers ####################################-->
      <IonCol v-show="selectedTab === 'BestOffers'" class="BestOffers">
        <MembersProfileDetailAdminComponent />
      </IonCol>
    </IonRow>
  </IonGrid>
</template>



<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonGrid, IonRow, IonCol, IonSegment, IonSegmentButton } from '@ionic/vue';
import MembersProfileDetailAdminComponent from '@/components/AdminComponents/MembersProfileAdminComponents/MembersProfileDetailAdminComponent.vue';
import MembersPitchingProfileDetailAdminComponent from '@/components/AdminComponents/MembersProfileAdminComponents/MembersPitchingProfileDetailAdminComponent.vue';

export default defineComponent({
  name: 'MembersProfileDetailTABsAdminComponent',
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonSegment,
    IonSegmentButton,
    MembersProfileDetailAdminComponent,
    MembersPitchingProfileDetailAdminComponent,

  },
  setup() {
    const selectedTab = ref<string>(''); // Initialize with the default tab

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
.Pitchings,
.InvestorsProfile,
.Offers,
.Needs,
.BestOffers {
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
