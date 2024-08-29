<template>
  <IonGrid>
    <p class="CenterPositions">
      Members Contacted Admin, Members Messaging, Rewards, Shares
    </p>
    <IonRow class="Tabs">
      <IonSegment v-model="selectedTab" class="TabSegment" color="primary">
        <IonSegmentButton
          class="btn"
          value="membersContactUsMessagesTableAdminComponent"
          >ContactedUs</IonSegmentButton
        >
        <IonSegmentButton
          class="btn"
          value="MembersSharePurchaseProfileDetailAdminComponent"
          >Shares Purchase Offer</IonSegmentButton
        >

        <IonSegmentButton
          class="btn"
          value="MembersMessagingTableAdminComponent"
          >Members Messaging</IonSegmentButton
        >
        <IonSegmentButton
          class="btn"
          value="MembersRewardDiscountTableAdminComponent"
          >Members Rewards</IonSegmentButton
        >
      </IonSegment>
    </IonRow>
    <IonRow class="DisplayComponentRow">
      <!-- Create Event Tab here ############################################# -->
      <IonCol
        v-show="selectedTab === 'membersContactUsMessagesTableAdminComponent'"
        class="membersContactUsMessagesTableAdminComponent"
      >
        <membersContactUsMessagesTableAdminComponent />
      </IonCol>
      <!-- InvestorsProfile Tab here ####################################-->
      <IonCol
        v-show="
          selectedTab === 'MembersSharePurchaseProfileDetailAdminComponent'
        "
        class="MembersSharePurchaseProfileDetailAdminComponent"
      >
        <MembersSharePurchaseProfileDetailAdminComponent />
      </IonCol>

      <!-- IInvestment Application  Tab here ####################################-->
      <IonCol
        v-show="selectedTab === 'MembersMessagingTableAdminComponent'"
        class="MembersMessagingTableAdminComponent"
      >
        <MembersMessagingTableAdminComponent />
      </IonCol>

      <!-- Offers Tab here ####################################-->
      <IonCol
        v-show="selectedTab === 'MembersRewardDiscountTableAdminComponent'"
        class="MembersRewardDiscountTableAdminComponent"
      >
        <MembersRewardDiscountTableAdminComponent />
      </IonCol>

    </IonRow>
  </IonGrid>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonSegment,
  IonSegmentButton,
} from "@ionic/vue";
import membersContactUsMessagesTableAdminComponent from "@/components/AdminComponents/contactUsAdminComponents/membersContactUsMessagesTableAdminComponent.vue";
import InvestorsProfileDetailAdminComponent from "@/components/AdminComponents/MembersProfileAdminComponents/InvestorsProfileDetailAdminComponent.vue";
import InvestmentApplicationMembersProfileDetailAdminComponent from "@/components/AdminComponents/MembersProfileAdminComponents/InvestmentApplicationMembersProfileDetailAdminComponent.vue";
import MembersOfferDetailProfileDetailAdminComponent from "@/components/AdminComponents/AdminOffersNeedsBestOffersComponents/MembersOfferDetailProfileDetailAdminComponent.vue";
import MembersNeedDetailProfileDetailAdminComponent from "@/components/AdminComponents/AdminOffersNeedsBestOffersComponents/MembersNeedDetailProfileDetailAdminComponent.vue";
import MembersBestOfferDetailProfileDetailAdminComponent from "@/components/AdminComponents/AdminOffersNeedsBestOffersComponents/AdminBestOffersComponents/MembersBestOfferDetailProfileDetailAdminComponent.vue";
import MembersSharePurchaseProfileDetailAdminComponent from "@/components/AdminComponents/contactUsAdminComponents/MembersSharePurchaseProfileDetailAdminComponent.vue";
import MembersMessagingTableAdminComponent from "@/components/AdminComponents/contactUsAdminComponents/MembersMessagingTableAdminComponent.vue";
import MembersRewardDiscountTableAdminComponent from "@/components/AdminComponents/contactUsAdminComponents/MembersRewardDiscountTableAdminComponent.vue";

export default defineComponent({
  name: "contactUsTABsAdminComponent",
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonSegment,
    IonSegmentButton,
    membersContactUsMessagesTableAdminComponent,
    InvestorsProfileDetailAdminComponent,
    InvestmentApplicationMembersProfileDetailAdminComponent,
    MembersOfferDetailProfileDetailAdminComponent,
    MembersNeedDetailProfileDetailAdminComponent,
    MembersBestOfferDetailProfileDetailAdminComponent,
    MembersSharePurchaseProfileDetailAdminComponent,
    MembersMessagingTableAdminComponent,
    MembersRewardDiscountTableAdminComponent,
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
/* <!-- tabs style --> */
.TabSegment {
  display: flex;
  flex-wrap: wrap; /* Allow segment buttons to wrap */
}

.TabSegment .btn {
  flex: 1 1 auto; /* Ensure buttons are flexible and wrap appropriately */
}

.MembersMessagingTableAdminComponent,
.MembersSharePurchaseProfileDetailAdminComponent,
.membersContactedUsMessagesTableAdminComponent,
.InvestorsProfile,
.Offers,
.Needs,
.BestOffers {
  background-color: #f9f9f9;
  width: auto;
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
