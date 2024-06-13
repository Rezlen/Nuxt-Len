<template>
  <IonPage>
    <IonContent>
      <IonGrid>
        <!-- Menu Section -->  
        <IonRow class="bordered-section">
          <MenuComponent />
        </IonRow>
        <!-- Social Media Section -->
        <IonRow class="bordered-section">
          <SocialMediaBarComponent />
        </IonRow>
      


        <!-- First row; 1-LENSection 2-Investors(Angels)Section -->
        <IonRow class=" bordered-section LENSection ">
          <p class="WorldLine" > Worlds Best Businesses, Entrepreneurs, Investors and Investees Are Here in London! </p>
          <IonCol class=" LENMidSection" >
            <p class="FREEline" > Wanna Join for <a href="/src/views/SignInSignUpPage.vue" class="FREE-link"> FREE</a> ? </p>
            <p><a href="/src/views/SignInSignUpPage.vue" class="FREE-button" >Click Here </a> </p>
          </IonCol>
          <iframe width="400" height="200" src="https://www.youtube.com/embed/dNjQ_wZBA28" title="🔥Business Advice London - Advice For Entrepreneurs - Mentoring, Coaching  | London Entrepreneurs 🚀" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </IonRow>



        <!-- 2nd row; 1-LiveMapSection 2-MembersNumberSection 3-EventsButtonSection -->
        <IonRow class=" bordered-section MapExhibitingSection ">

          <IonCol class=" bordered-section LiveEventsExhibitingMap ">
            LiveEventsExhibitingMap Component Must be placed here
            <RouterLink to="/eventsShows" routerDirection="forward">
              <img alt="LEN Logo" height="160" src="/public/favicon.png" />
            </RouterLink>
          </IonCol>

          <!--  2-MembersNumberSection -->
          <IonCol class=" bordered-section MembersNumberSection ">
              <IonCol class="MembersTotalIncome">
                <div class="section-title">Members Total Income</div>
                <div class="section-title">Number Component Must be here</div>
              </IonCol>
              <IonCol class="VisitorIncome">
                <div class="section-title">Visitor Income</div>
                <div class="section-title">Number Component Must be here</div>
              </IonCol>
              <IonCol class="ExhibitorRevenue">
                <div class="section-title">Exhibitor Revenue</div>
                <div class="section-title">Number Component Must be here</div>
              </IonCol>
              <IonCol class="Exhibitors">
                <div class="section-title">Exhibitors</div>
                <div class="section-title">Number Component Must be here</div>
              </IonCol>
              <IonCol class="Visitors">
                <div class="section-title">Visitors</div>
                <div class="section-title">Number Component Must be here</div>
              </IonCol>
              <IonCol class="Countries">
                <div class="section-title">Countries</div>
                <div class="section-title">Number Component Must be here</div>
              </IonCol>
          </IonCol>

          <!-- 3-EventsButtonSection -->
          <IonCol class=" bordered-section EventsButtonSection ">
            <p><a href="/src/views/SignInSignUpPage.vue" class="Events-button" >Exhibiting </a> </p>
            <p><a href="/src/views/SignInSignUpPage.vue" class="Events-button" >FREE Visiting </a> </p>
            <p><a href="/src/views/SignInSignUpPage.vue" class="Events-button" >More Events </a> </p>
          </IonCol>
          
        </IonRow>
        

        <!-- Middle Content Section with Left/Right Adverts and Middle Content -->
        <IonRow class=" ">
          <!-- Left Advert Section -->
          <IonCol size="12" size-md="1.5" class="bordered-section LeftAdvertComponent">
            <LeftAd1Component />
            <LeftAd2Component />
            <LeftAd3Component />
            <LeftAd4Component />
          </IonCol>


          <!-- Middle Content Section -->
          <IonCol size="12" size-md="9" class="bordered-section SignInSignUpComponent">
            <!-- 1-MiniProfilesRow- 2-Offers- 3-Investors section -->
            <IonRow class=" bordered-section ProfilesSection ">
              <p><a href="/menu" class="Events-button" >MenuComp </a> </p>
              <p><a href="/socialMediaBar" class="Events-button" >socialMediaBarComp </a> </p>
              <p><a href="/footer" class="Events-button" >footerComp </a> </p>
              <p><a href="/signInSignUpComponent" class="Events-button" >signInSignUpComponent </a> </p>
              <p><a href="/LeftAd1" class="Events-button" >LeftAd1Comp </a> </p>
              <p><a href="/TemplatePage" class="Events-button" >TemplatePage </a> </p>
              <p><a href="/profilePage" class="Events-button" >ProfilePage </a> </p>
              <p><a href="/MiniProfileCardComponent" class="Events-button" >MiniProfileCardComponent </a> </p>
              <p><a href="/ProfilePublicSectionComponent" class="Events-button" >ProfilePublicSectionComponent </a> </p>
              <p><a href="/OfferComponent" class="Events-button" >OfferComponent </a> </p>
              <p><a href="/BizOfferNeedPage" class="Events-button" >BizOfferNeedPage </a> </p>
              <p><a href="/BestofferTABSComponent" class="Events-button" >BestofferTABSComponent </a> </p>
              <p><a href="/PostOfferNeedBestOfferComponent" class="Events-button" >PostOfferNeedBestOfferComponent </a> </p>
              <p><a href="/PostOfferComponent" class="Events-button" >PostOfferComponent </a> </p>
              <p><a href="/EventsShowsPage" class="Events-button" >EventsShowsPage </a> </p>

              
              <!-- MiniProfilesRow ##############################     EventsShowsPage           -->
              <IonCol class="MiniProfilesRow">
                <IonRow class="Tabs4AllBusinessesAllExhibitorsAllVisitorsAdvertiseForFree">
                  <IonSegment v-model="selectedTab" class="TabSegment" color="primary">
                    <IonSegmentButton class="btn" value="Businesses">All Businesses</IonSegmentButton>
                    <IonSegmentButton class="btn" value="Exhibitors">All Exhibitors</IonSegmentButton>
                    <IonSegmentButton class="btn" value="Visitors">All Visitors</IonSegmentButton>
                    <IonSegmentButton class="btn" value="AdvertiseForFree">Advertise For FREE</IonSegmentButton>
                  </IonSegment>
                </IonRow>
                <IonRow class="DisplayComponentRow">
                  <IonCol v-show="selectedTab === 'Businesses'" class="AllBusinesses">
                    <MiniProfileCardComponent />
                  </IonCol>
                  <IonCol v-show="selectedTab === 'Exhibitors'" class="AllExhibitors">
                    <!-- Component for AllExhibitors #########" -->
                    <MiniProfileCardVIPComponent />
                  </IonCol>
                  <IonCol v-show="selectedTab === 'Visitors'" class="AllVisitors">
                    <!-- Component for AllVisitors #########" -->
                    <MiniProfileCardVVIPComponent />
                  </IonCol>
                  <IonCol v-show="selectedTab === 'AdvertiseForFree'" class="AdvertiseForFree">
                    <!-- Component for AdvertiseForFree #########" -->
                    <PostOfferNeedBestOfferComponent />
                  </IonCol>
                </IonRow>
              </IonCol>



            </IonRow>
            <IonRow class=" bordered-section OffersSection ">
            <!-- 4Tabs 1- All Offers 2- All Needs 3- Best offers 4- Advertise for FREE ##############################-->
            <IonCol class="Tab5BiZOfferNeedRow">
              <IonRow class="Tabs4AllBusinessProfilesAllOffersAllNeedsBestOffersAdvertiseForFree">
                <IonSegment v-model="selectedTab" class="TabSegment" color="primary">
                  <IonSegmentButton class="btn" value="Offers">All Offers</IonSegmentButton>
                  <IonSegmentButton class="btn" value="Needs">All Needs</IonSegmentButton>
                  <IonSegmentButton class="btn" value="BestOffers">Best Offers</IonSegmentButton>
                  <IonSegmentButton class="btn" value="AdvertiseForFree">Advertise For FREE</IonSegmentButton>
                </IonSegment>
              </IonRow>
              <IonRow class="DisplayComponentRow">
                <IonCol v-show="selectedTab === 'Offers'" class="AllOffers">
                  <!-- Component for All Offers #########" -->
                  <OfferComponent />
                </IonCol>
                <IonCol v-show="selectedTab === 'Needs'" class="AllNeeds">
                  <!-- Component for All Needs #########" -->
                  <NeedComponent />
                </IonCol>
                <IonCol v-show="selectedTab === 'BestOffers'" class="BestOffers">
                  <!-- Carefull !!! This Component is athe 7 tabs only THEN in its tab component the BEST OFFERs are nested #########" -->
                  <BestOfferTABsComponent />
                </IonCol>
                <IonCol v-show="selectedTab === 'AdvertiseForFree'" class="AdvertiseForFree">
                  <!-- Component for Advertise For FREE #########" -->
                  <PostOfferNeedBestOfferComponent />
                </IonCol>
              </IonRow>
            </IonCol>
            </IonRow>





            <IonRow class="bordered-section InvestorsSection">
              <!-- 4Tabs 1- All Investors 2- All Investees 3- Apply For Investment 4- Provide Investment ##############################-->
              <IonCol class="TabInvestorsSection">
                <IonRow class="Tabs4AllInvestorsAllInvesteesApplyForInvestmentProvideInvestment">
                  <IonSegment v-model="selectedTab" class="TabSegment" color="primary">
                    <IonSegmentButton class="btn" value="AllInvestors">All Investors</IonSegmentButton>
                    <IonSegmentButton class="btn" value="AllInvestees">All Investees</IonSegmentButton>
                    <IonSegmentButton class="btn" value="ApplyForInvestment">Apply For Investment</IonSegmentButton>
                    <IonSegmentButton class="btn" value="ProvideInvestment">Provide Investment</IonSegmentButton>
                  </IonSegment>
                </IonRow>
                <IonRow class="DisplayComponentRow">
                  <IonCol v-show="selectedTab === 'AllInvestors'" class="AllInvestors">
                    <!-- Component for All Investors #########" -->
                    <InvestorComponent />
                  </IonCol>
                  <IonCol v-show="selectedTab === 'AllInvestees'" class="AllInvestees">
                    <!-- Component for All Investees #########" -->
                    <InvesteeComponent />
                  </IonCol>
                  <IonCol v-show="selectedTab === 'ApplyForInvestment'" class="ApplyForInvestment">
                    <!-- Component for Apply For Investment #########" -->
                    <ApplyForInvestmentComponent />
                  </IonCol>
                  <IonCol v-show="selectedTab === 'ProvideInvestment'" class="ProvideInvestment">
                    <!-- Component for Provide Investment #########" -->
                    <ProvideInvestmentComponent />
                  </IonCol>
                </IonRow>
              </IonCol>
            </IonRow>
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
          <IonCol class=" bordered-section FooterComponent">
            <FooterComponent />
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonPage>
</template>

<script lang="ts">
import { defineComponent, ref  } from 'vue';
import { IonPage, IonGrid, IonRow, IonCol, IonContent,IonSegment, IonSegmentButton } from '@ionic/vue';
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
import MiniProfileCardComponent from '@/components/ProfileComponents/MiniProfileCardComponent.vue';
import MiniProfileCardVIPComponent from '@/components/ProfileComponents/MiniProfileCardVIPComponent.vue';
import MiniProfileCardVVIPComponent from '@/components/ProfileComponents/MiniProfileCardVVIPComponent.vue';
import OfferComponent from '@/components/OfferNeedBestOfferComponent/OfferComponent.vue';
import NeedComponent from '@/components/OfferNeedBestOfferComponent/NeedComponent.vue';
import BestOfferComponent from '@/components/OfferNeedBestOfferComponent/BestOfferComponent.vue';
import BestOfferTABsComponent from '@/components/OfferNeedBestOfferComponent/BestOfferTABsComponent.vue';
import PostOfferNeedBestOfferComponent from '@/components/OfferNeedBestOfferComponent/PostOfferNeedBestOfferComponent.vue';


export default defineComponent({
  name: 'HomePage',
  components: {
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonContent,
    IonSegment,
    IonSegmentButton,
    MenuComponent,
    SocialMediaBarComponent,
    MiniProfileCardComponent,
    MiniProfileCardVVIPComponent,
    MiniProfileCardVIPComponent,
    FooterComponent,
    LeftAd1Component,
    LeftAd2Component,
    LeftAd3Component,
    LeftAd4Component,
    RightAd1Component,
    RightAd2Component,
    RightAd3Component,
    RightAd4Component,
    BestOfferTABsComponent,
    BestOfferComponent,
    OfferComponent,
    NeedComponent,
    PostOfferNeedBestOfferComponent,
  },
  setup() {
    const selectedTab = ref<string>('Businesses'); // Initialize with the default tab

    return {
      selectedTab,
    };
  },
});

</script>

<style scoped>
ion-grid {
  padding: 0;
  margin: 0;
}

.bordered-section {
  border: 1px solid;
  border-radius: 8px;
}
.WorldLine{
  font-size: 30px;
  padding: 0;
  margin: 0;
}

.FREE-link {
  color: blue;
  text-decoration: none;
}

.FREE-button {
  color: white;
  text-decoration: none;
  background-color: rgb(52, 52, 184);
  padding: 12px;
  border-radius: 10px;
}
.FREE-button:hover {
  background-color: rgb(201, 12, 191);
}

.LENSection {
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  text-align: center;
}

.LENMidSection {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
}

.LENSection p{
  max-width: 500px;
}

.FREEline {
  /* padding-right: 10px; */
  font-size: 20px;
  font-weight: bold;
  color: red;
}
iframe {
  border-radius: 10px;
  margin: 10px;
}




/* MapExhibitingSection style start here*/

.MapExhibitingSection,
.LiveEventsExhibitingMap,
.MembersNumberSection,
.EventsButtonSection {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* align-content: center; */
  text-align: center;

}

.Events-button {
  color: white;
  text-decoration: none;
  background-color: rgb(52, 52, 184);
  padding: 12px;
  border-radius: 10px;
  margin-right: 5px;
  text-wrap: nowrap;
}
.Events-button:hover {
  background-color: rgb(201, 12, 191);
}



/* MapExhibitingSection style Ends here*/



@media (max-width: 768px) {
  /* if you can try to make the advert disolaywithin componentts in mobile view */
  .RightAdvertComponent,
  .LeftAdvertComponent {
    display: none;
  }

  .LENSection {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
    gap: 0;
  }
  .LENSection p{
    max-width:none;
    padding: 0 15px;
}

  .WorldLine{
    font-size: 30px;
    padding: 0;
    margin: 0;
  }

}

/* Tabs4AllBusinessesAllExhibitorsAllVisitorsAdvertiseForFree   ######## */

.MiniProfilesRow {
  padding: 10px;
}

.Tabs4AllBusinessesAllExhibitorsAllVisitorsAdvertiseForFree {
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

.AllBusinesses,
.AllExhibitors,
.AllVisitors,
.AdvertiseForFree {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  flex: 1 1 calc(50% - 20px); /* Ensure columns are responsive */
  margin: 10px;
}

@media (max-width: 600px) {
  .AllBusinesses,
  .AllExhibitors,
  .AllVisitors,
  .AdvertiseForFree {
    flex: 1 1 100%; /* Make each tab content full width on small screens */
  }
}
</style>
