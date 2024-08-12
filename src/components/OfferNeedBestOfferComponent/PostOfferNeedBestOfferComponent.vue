<template>
  <IonRow class="bordered-section InvestorsSection">
    <!-- 3Tabs 1- Post an Offer 2- Post a Need 3- Post a Best offer ##############################-->
    <IonCol class="TabPostSection">
      <IonRow class="Tabs3PostOfferNeedBestOffer">
        <IonSegment v-model="selectedTab" class="TabSegment" color="primary">
          <IonSegmentButton class="btn" value="PostOffer">Post an Offer</IonSegmentButton>
          <IonSegmentButton class="btn" value="PostNeed">Post a Need</IonSegmentButton>
          <IonSegmentButton class="btn" value="PostBestOffer">Post a Best Offer</IonSegmentButton>
        </IonSegment>
      </IonRow>
      <IonRow class="DisplayComponentRow">
        <IonCol v-show="selectedTab === 'PostOffer'" class="PostOffer">
          <!-- Component for Post an Offer #########" -->
          <PostOfferComponent />
        </IonCol>
        <IonCol v-show="selectedTab === 'PostNeed'" class="PostNeed">
          <!-- Component for Post a Need #########" -->
          <PostNeedComponent />
        </IonCol>
        <IonCol v-show="selectedTab === 'PostBestOffer'" class="PostBestOffer">
          <!-- Component for Post a Best Offer #########" -->
          <PostBestOfferComponent />
        </IonCol>
      </IonRow>
    </IonCol>
  </IonRow>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonPage, IonGrid, IonRow, IonCol, IonContent, IonSegment, IonSegmentButton } from '@ionic/vue';
import PostOfferComponent from '@/components/OfferNeedBestOfferComponent/PostOfferComponent.vue';
import PostNeedComponent from '@/components/OfferNeedBestOfferComponent/PostNeedComponent.vue';
import PostBestOfferComponent from '@/components/OfferNeedBestOfferComponent/PostBestOfferComponent.vue';

export default defineComponent({
  name: 'PostOfferNeedBestOfferComponent',
  components: {
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonContent,
    IonSegment,
    IonSegmentButton,
    PostOfferComponent,
    PostNeedComponent,
    PostBestOfferComponent,
  },
  setup() {
    const selectedTab = ref<string>('PostOffer'); // Initialize with the default tab

    return {
      selectedTab,
    };
  },
});
</script>



<style scoped>
/* Updated for new tab names and mobile responsiveness */

.Tabs7_MarketingAccountingInvestmentLawBusinessAdviceWebDevelopmentOfficeSpace {
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
.PostOffer,
.PostNeed,
.PostBestOffer {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  flex: 1 1 calc(50% - 20px); /* Ensure columns are responsive */
  margin: 10px;
}

@media (max-width: 600px) {
  .PostOffer,
  .PostNeed,
  .PostBestOffer {
    flex: 1 1 100%; /* Make each tab content full width on small screens */
  }
}
</style>
