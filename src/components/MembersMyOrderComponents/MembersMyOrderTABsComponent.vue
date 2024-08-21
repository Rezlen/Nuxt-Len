<template>
  <IonGrid>
    <p class="CenterPositions">All Your Order History Here</p>
    <IonRow class="Tabs">
      <IonSegment v-model="selectedTab" class="TabSegment" color="primary">
        <IonSegmentButton class="btn" value="MemberTicketsComponent">Tickets</IonSegmentButton>
        <IonSegmentButton class="btn" value="MemberMessagingEmailingOrderComponent">Messaging Emailing</IonSegmentButton>
        <IonSegmentButton class="btn" value="Adverts">Adverts</IonSegmentButton>
        <IonSegmentButton class="btn" value="Membership">Membership</IonSegmentButton>
        <IonSegmentButton class="btn" value="SponsorshipPartnershipTableComponent">Sponsorship Partnership</IonSegmentButton>
        <IonSegmentButton class="btn" value="ServiceProductExchange">Service Product Exchange</IonSegmentButton>
        <IonSegmentButton class="btn" value="MembersBusinessAdviceTableComponent">Business Advice</IonSegmentButton>
        <IonSegmentButton class="btn" value="mySharesTableComponent">My Shares</IonSegmentButton>
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
      <IonCol v-show="selectedTab === 'Adverts'" class="Adverts"> </IonCol>
      <!-- Membership Tab here ####################################-->
      <IonCol v-show="selectedTab === 'Membership'" class="Membership">
        <MemberMembershipOrderComponent />
      </IonCol>
      <!-- SponsorshipPartnership Tab here ####################################-->
      <IonCol v-show="selectedTab === 'SponsorshipPartnershipTableComponent'" class="SponsorshipPartnershipTableComponent">
        <SponsorshipPartnershipTableComponent />
      </IonCol>
      <!-- ServiceProductExchange####################################-->
      <IonCol v-show="selectedTab === 'ServiceProductExchange'" class="ServiceProductExchange">
      </IonCol>
      <!-- MembersBusinessAdviceTableComponent ####################################-->
      <IonCol v-show="selectedTab === 'MembersBusinessAdviceTableComponent'" class="MembersBusinessAdviceTableComponent">
        <MembersBusinessAdviceTableComponent />
        <MenteesBusinessAdviceTableComponent/> <!-- List of all Mentees of a Business advisor -->
      </IonCol>
      <IonCol v-show="selectedTab === 'mySharesTableComponent'" class="mySharesTableComponent">
        <MySharesTableComponent />
      </IonCol>
    </IonRow>
  </IonGrid>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { IonGrid, IonRow, IonCol, IonSegment, IonSegmentButton,} from "@ionic/vue";
import MemberTicketsComponent from "@/components/MembersMyOrderComponents/MemberTicketsComponent.vue";
import MemberMessagingEmailingOrderComponent from "@/components/MembersMyOrderComponents/MemberMessagingEmailingOrderComponent.vue";
import MemberMembershipOrderComponent from "@/components/MembersMyOrderComponents/MemberMembershipOrderComponent.vue";
import SponsorshipPartnershipTableComponent from "@/components/MembersMyOrderComponents/SponsorshipPartnershipTableComponent.vue";
import MySharesTableComponent from "@/components/MembersMyOrderComponents/MySharesTableComponent.vue";
import MembersBusinessAdviceTableComponent from '@/components/MembersMyOrderComponents/MembersBusinessAdvices/MembersBusinessAdviceTableComponent.vue';
import MenteesBusinessAdviceTableComponent from '@/components/MembersMyOrderComponents/MembersBusinessAdvices/MenteesBusinessAdviceTableComponent.vue';

// MemberMembershipOrderComponent
export default defineComponent({
  name: "MembersMyOrderTABsComponent",
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonSegment,
    IonSegmentButton,
    MemberTicketsComponent,
    MemberMessagingEmailingOrderComponent,
    MemberMembershipOrderComponent,
    SponsorshipPartnershipTableComponent,
    MySharesTableComponent,
    MembersBusinessAdviceTableComponent,
    MenteesBusinessAdviceTableComponent,
  },
  setup() {
    const selectedTab = ref<string>(""); // MembersOfferDetailProfileDetailAdminComponent

    return {
      selectedTab,
    };
  },
});
</script>

<style scoped>
  .MembersBusinessAdviceTableComponent{
    height: fit-content;
  }

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
