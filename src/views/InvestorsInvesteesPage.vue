<template>
  <IonPage>
    <IonContent>
      <IonGrid>
        <!-- Menu Section -->  <!-- Social Media Section -->
        <IonRow class="bordered-section">
            <MenuComponent />
        </IonRow>
        <IonRow class="bordered-section">
          <SocialMediaBarComponent />
        </IonRow>
      
        <!-- Main Content Section with Adverts and Middle Content -->
        <IonRow class="main-content-row ">
          <!-- Left Advert Section -->
          <IonCol size="12" size-md="1.5" class="bordered-section LeftAdvertComponent">
            <LeftAd1Component />
            <LeftAd2Component />
            <LeftAd3Component />
            <LeftAd4Component />
          </IonCol>


          <IonCol size="12" size-md="9" class="bordered-section">

              <!-- 4Tabs 1- All Investors 2- All Investees 3- Apply For Investment 4- Provide Investment ##############################-->
            <IonCol class="MainCol">
              <IonRow class="Tabs4InvestorsInvesteesApplyForInvestment">
                <IonSegment v-model="selectedTab" class="TabSegment" color="primary">
                  <IonSegmentButton class="btn" value="Investors">Investors</IonSegmentButton>
                  <IonSegmentButton class="btn" value="Investees">Investees</IonSegmentButton>
                  <IonSegmentButton class="btn" value="ApplyForInvestment">Apply For Investment</IonSegmentButton>
                  <IonSegmentButton class="btn" value="ProvideInvestment">Provide Investment</IonSegmentButton>
                </IonSegment>
              </IonRow>
              <IonRow class="DisplayComponentRow">
                <IonCol v-show="selectedTab === 'Investors'" class="Investors">
                  <!-- Component for Investees #########" -->
                  <IonRow>
                  <!-- Putting in Column then in Row attaches two mini profile together #########" -->
                    <IonCol ><IonRow class="TwoMiniProfile"><MiniInvestorsProfileComponent /><MiniProfileCardComponent /></IonRow></IonCol>
                    <IonCol ><IonRow class="TwoMiniProfile"><MiniInvestorsProfileComponent /><MiniProfileCardComponent /></IonRow></IonCol>
                  </IonRow>
                </IonCol>
                <IonCol v-show="selectedTab === 'Investees'" class="Investees">
                  <!-- Component for Investees #########" -->
                  <IonRow>
                    <IonCol ><IonRow class="TwoMiniProfile"><MiniInvesteesProfileComponent /><MiniProfileCardComponent /></IonRow></IonCol>
                    <IonCol ><IonRow class="TwoMiniProfile"><MiniInvesteesProfileComponent /><MiniProfileCardComponent /></IonRow></IonCol>
                  </IonRow>
                </IonCol>
                <IonCol v-show="selectedTab === 'ApplyForInvestment'" class="ApplyForInvestment">
                  <!-- Component for Investment Seekers #########" -->
                  <FormApplyForInvestmentComponent />

                </IonCol>
                <IonCol v-show="selectedTab === 'ProvideInvestment'" class="ProvideInvestment">
                  <!-- Component for Investment Providers #########" -->
                  <FormProvideInvestmentComponent />
                </IonCol>
              </IonRow>
            </IonCol>
          </IonCol>



          <!-- Right Advert Section -->
          <IonCol size="12" size-md="1.5" class="bordered-section RightAdvertComponent">
            <RightAd1Component />
            <RightAd2Component />
            <RightAd3Component />
            <RightAd4Component />
          </IonCol>
        </IonRow>

        <!-- Footer Section -->
        <IonRow>
          <IonCol class="bordered-section FooterComponent">
            <FooterComponent />
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonPage>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonPage, IonGrid, IonRow, IonCol, IonContent, IonSegment, IonSegmentButton } from '@ionic/vue';
import MenuComponent from '@/components/6TempComponents/MenuComponent.vue';
import SocialMediaBarComponent from '@/components/6TempComponents/SocialMediaBarComponent.vue';
import FooterComponent from '@/components/6TempComponents/FooterComponent.vue';
import LeftAd1Component from '@/components/6TempComponents/LeftRightAds/LeftAd1Component.vue';
import LeftAd2Component from '@/components/6TempComponents/LeftRightAds/LeftAd2Component.vue';
import LeftAd3Component from '@/components/6TempComponents/LeftRightAds/LeftAd3Component.vue';
import LeftAd4Component from '@/components/6TempComponents/LeftRightAds/LeftAd4Component.vue';
import RightAd1Component from '@/components/6TempComponents/LeftRightAds/RightAd1Component.vue';
import RightAd2Component from '@/components/6TempComponents/LeftRightAds/RightAd2Component.vue';
import RightAd3Component from '@/components/6TempComponents/LeftRightAds/RightAd3Component.vue';
import RightAd4Component from '@/components/6TempComponents/LeftRightAds/RightAd4Component.vue';
import FormApplyForInvestmentComponent from '@/components/InvestmentComponents/FormApplyForInvestmentComponent.vue';
import FormProvideInvestmentComponent from '@/components/InvestmentComponents/FormProvideInvestmentComponent.vue';
import MiniProfileCardComponent from '@/components/ProfileComponents/MiniProfileCardComponent.vue';
import MiniInvestorsProfileComponent from '@/components/InvestmentComponents/MiniInvestorsProfileComponent.vue';
import MiniInvesteesProfileComponent from '@/components/InvestmentComponents/MiniInvesteesProfileComponent.vue';

export default defineComponent({
  name: 'InvestorsInvesteesPage',
  components: {
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonContent,
    MenuComponent,
    SocialMediaBarComponent,
    FooterComponent,
    LeftAd1Component,
    LeftAd2Component,
    LeftAd3Component,
    LeftAd4Component,
    RightAd1Component,
    RightAd2Component,
    RightAd3Component,
    RightAd4Component,
    IonSegment,
    IonSegmentButton,
    FormApplyForInvestmentComponent,
    FormProvideInvestmentComponent,
    MiniProfileCardComponent,
    MiniInvestorsProfileComponent,
    MiniInvesteesProfileComponent,

  },
  setup() {
    const selectedTab = ref<string>('BusinessProfiles'); // Initialize with the default tab

    return {
      selectedTab,
    };
  },
});

</script>



<style scoped>

.bordered-section {
  padding: 0;
  margin: 0;
  z-index: 1;
  /* gap: 100px; */
}

/* Updated for new tab names and mobile responsiveness */
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
.TwoMiniProfile {
  box-shadow: 0 4px 8px rgba(75, 16, 214, 1.2); /* X-offset, Y-offset, blur radius, and color */
}

@media (max-width: 768px) {
    /* if you can try to make the advert display within components in mobile view */
  .RightAdvertComponent,
  .LeftAdvertComponent {
    display: none;
  }
}
</style>

