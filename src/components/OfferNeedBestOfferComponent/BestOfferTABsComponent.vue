<template>
  <IonGrid>
    <p class=" CenterPositions ">"We have selected the Best Offers in the sectors below to ensure you benefit the most."</p>
        <IonRow class="Tabs7_MarketingAccountingInvestmentLawBusinessAdviceWebDevelopmentOfficeSpace">
          <IonSegment v-model="selectedTab" class="TabSegment" color="primary">
            <IonSegmentButton class="btn" value="Marketing">Marketing</IonSegmentButton>
            <IonSegmentButton class="btn" value="Accounting">Accounting</IonSegmentButton>
            <IonSegmentButton class="btn" value="Investment">Investment</IonSegmentButton>
            <IonSegmentButton class="btn" value="Law">Law</IonSegmentButton>
            <IonSegmentButton class="btn" value="BusinessAdvice">Business Advice</IonSegmentButton>
            <IonSegmentButton class="btn" value="WebDevelopment">Web Development</IonSegmentButton>
            <IonSegmentButton class="btn" value="OfficeSpace">Office Space</IonSegmentButton>
          </IonSegment>
        </IonRow>
        <IonRow class="DisplayComponentRow">
          <IonCol v-show="selectedTab === 'Marketing'" class="Marketing">
            <BestOfferComponent />
          </IonCol>
          <IonCol v-show="selectedTab === 'Accounting'" class="Accounting">
            <BestOfferComponent />
            <AccountingBestOffers7CategoriesFormComponent />
          </IonCol>
          <IonCol v-show="selectedTab === 'Investment'" class="Investment">
            <BestOfferComponent />
          </IonCol>
          <IonCol v-show="selectedTab === 'Law'" class="Law">
            <BestOfferComponent />
          </IonCol>
          <IonCol v-show="selectedTab === 'BusinessAdvice'" class="BusinessAdvice">
            <BestOfferComponent />
            <BusinessAdviceBestOffers7CategoriesFormComponents />
          </IonCol>
          <IonCol v-show="selectedTab === 'WebDevelopment'" class="WebDevelopment">
            <BestOfferComponent />
          </IonCol>
          <IonCol v-show="selectedTab === 'OfficeSpace'" class="OfficeSpace">
            <BestOfferComponent />
            <OfficeSpaceBestOffers7CategoriesFormComponent/>
          </IonCol>
        </IonRow>
      </IonGrid>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonPage, IonGrid, IonRow, IonCol, IonContent, IonSegment, IonSegmentButton } from '@ionic/vue';
import BestOfferComponent from '@/components/OfferNeedBestOfferComponent/BestOfferComponent.vue';
import BusinessAdviceBestOffers7CategoriesFormComponents from '@/components/OfferNeedBestOfferComponent/BestOffers7CategoriesFormComponents/BusinessAdviceBestOffers7CategoriesFormComponent.vue';
import AccountingBestOffers7CategoriesFormComponent from '@/components/OfferNeedBestOfferComponent/BestOffers7CategoriesFormComponents/AccountingBestOffers7CategoriesFormComponent.vue';
import OfficeSpaceBestOffers7CategoriesFormComponent from '@/components/OfferNeedBestOfferComponent/BestOffers7CategoriesFormComponents/OfficeSpaceBestOffers7CategoriesFormComponent.vue';

export default defineComponent({
  name: 'BizOfferNeedPage',
  components: {
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonContent,
    IonSegment,
    IonSegmentButton,
    BestOfferComponent,
    BusinessAdviceBestOffers7CategoriesFormComponents,
    AccountingBestOffers7CategoriesFormComponent,
    OfficeSpaceBestOffers7CategoriesFormComponent,
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
  /* Updated for new tab names and mobile responsiveness */
  ion-grid {
    width: 100%
  }
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
    /* min-width: 150px;  */
    /* Minimum width for each button to ensure readability */
  }

  .DisplayComponentRow {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }

  .Marketing,
  .Accounting,
  .Investment,
  .Law,
  .BusinessAdvice,
  .WebDevelopment,
  .OfficeSpace {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f9f9f9;
    flex: 1 1 calc(50% - 20px); /* Ensure columns are responsive */
    margin: 10px;
  }

  .CenterPositions {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center;
  }

  @media (max-width: 600px) {

  }
</style>
