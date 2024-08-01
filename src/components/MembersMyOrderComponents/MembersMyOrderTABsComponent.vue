<template>
  <IonGrid>
    <p class="CenterPositions">All Your Order History Here</p>
    <IonRow class="Tabs">
      <IonSegment v-model="selectedTab" class="TabSegment" color="primary">
        <IonSegmentButton class="btn" value="MemberTicketsComponent">Tickets</IonSegmentButton>
        <IonSegmentButton class="btn" value="MemberMessagingEmailingOrderComponent">Messaging Emailing</IonSegmentButton>
        <IonSegmentButton class="btn" value="Adverts">Adverts</IonSegmentButton>
        <IonSegmentButton class="btn" value="Membership">Membership</IonSegmentButton>
        <IonSegmentButton class="btn" value="MemberInvestmentApplicationComponent">Investment Application</IonSegmentButton>
        <IonSegmentButton class="btn" value="SponsorshipPartnership">Sponsorship Partnership</IonSegmentButton>
        <IonSegmentButton class="btn" value="ServiceProductExchange">Service Product Exchange</IonSegmentButton>
        <IonSegmentButton class="btn" value="BusinessAdvice">Business Advice</IonSegmentButton>
        <IonSegmentButton class="btn" value="Shares">Shares</IonSegmentButton>

      </IonSegment>
    </IonRow>
    <IonRow class="DisplayComponentRow">
      <!-- Tickets Tab here ####################################-->
      <IonCol v-show="selectedTab === 'MemberTicketsComponent'" class="#">
        <MemberTicketsComponent />
      </IonCol>
      <!-- List of events here -->
      <IonCol v-show="selectedTab === 'MemberMessagingEmailingOrderComponent'" class="#">
        <MemberMessagingEmailingOrderComponent />
      </IonCol>
      <!-- Create Event Tab here ############################################# -->
      <IonCol v-show="selectedTab === 'Adverts'" class="Adverts">
      </IonCol>
      <!-- Membership Tab here ####################################-->
      <IonCol v-show="selectedTab === 'Membership'" class="Membership">
        <MemberMembershipOrderComponent/>
      </IonCol>
      <!-- IInvestment Application  Tab here ####################################-->
      <IonCol v-show="selectedTab === 'MemberInvestmentApplicationComponent'" class="MemberMemberInvestmentApplicationComponentComponent">
        <MemberInvestmentApplicationComponent/>
      </IonCol>
      <!-- SponsorshipPartnership Tab here ####################################-->
      <IonCol v-show="selectedTab === 'SponsorshipPartnership'" class="SponsorshipPartnership">
      </IonCol>
      <!-- BusinessAdvice ####################################-->
      <IonCol v-show="selectedTab === 'BusinessAdvice'" class="ServiceProductExchange">
      </IonCol>
      <!-- BusinessAdvice ####################################-->
      <IonCol v-show="selectedTab === 'BusinessAdvice'" class="BusinessAdvice">
      </IonCol>
      <IonCol v-show="selectedTab === 'Shares'" class="Shares">
      </IonCol>
    </IonRow>
  </IonGrid>
</template>



<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonGrid, IonRow, IonCol, IonSegment, IonSegmentButton } from '@ionic/vue';
import MemberTicketsComponent from '@/components/MembersMyOrderComponents/MemberTicketsComponent.vue';
import MemberMessagingEmailingOrderComponent from '@/components/MembersMyOrderComponents/MemberMessagingEmailingOrderComponent.vue';
import MemberMembershipOrderComponent from '@/components/MembersMyOrderComponents/MemberMembershipOrderComponent.vue';
import MemberInvestmentApplicationComponent from '@/components/MembersMyOrderComponents/MemberInvestmentApplicationComponent.vue';


// MemberMembershipOrderComponent
export default defineComponent({
  name: 'MembersMyOrderTABsComponent',
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonSegment,
    IonSegmentButton,
    MemberTicketsComponent,
    MemberMessagingEmailingOrderComponent,
    MemberMembershipOrderComponent,
    MemberInvestmentApplicationComponent,
    


  },
  setup() {
    const selectedTab = ref<string>(''); // MembersOfferDetailProfileDetailAdminComponent

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
  .btn {
    width: 50px;
    overflow: visible; /* Ensure the content is fully visible */
    word-wrap: break-word; /* Break long words */
    white-space: normal; /* Allow text to wrap */
    text-align: center;
    font-size: 12px;
    border: 1px solid lightcyan;
    border-radius: 5px;
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
