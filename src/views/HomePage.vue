<template>
  <IonPage>
    <IonContent>
      <IonGrid>
        <!-- Menu Section -->
        <IonRow class="#">
          <MenuComponent />
        </IonRow>
        <!-- Social Media Section -->
        <IonRow class="#">
          <SocialMediaBarComponent />
        </IonRow>



        <!-- First row; 1-LENSection 2-Investors(Angels)Section -->
        <IonRow class=" # LENSection ">
          <p class="WorldLine"> Worlds Best Businesses, Entrepreneurs, Investors and Investees are Here in London! </p>
          <IonCol class=" LENMidSection">
            <p class="FREEline"> Wanna Join for <a href="/src/views/SignInSignUpPage.vue" class="FREE-link"> FREE</a> ?
            </p>
            <p><a href="/src/views/SignInSignUpPage.vue" class="FREE-button">Click Here </a> </p>
          </IonCol>
          <iframe width="400" height="200" src="https://www.youtube.com/embed/dNjQ_wZBA28"
            title="🔥Business Advice London - Advice For Entrepreneurs - Mentoring, Coaching  | London Entrepreneurs 🚀"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </IonRow>



        <!-- 2nd row; 1-LiveMapSection 2-MembersNumberSection 3-EventsButtonSection -->
        <IonRow class=" bordered-section MapExhibitingSection ">

          <IonCol class=" # LiveEventsExhibitingMap ">
            LiveEventsExhibitingMap Component Must be placed here
            <RouterLink to="/eventsShows" routerDirection="forward">
              <img alt="LEN Logo" height="160" src="/favicon.png" />
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
          <IonCol class=" # EventsButtonSection ">
            <p><a href="/src/views/SignInSignUpPage.vue" class="Events-button">Exhibiting </a> </p>
            <p><a href="/src/views/SignInSignUpPage.vue" class="Events-button">FREE Visiting </a> </p>
            <p><a href="/src/views/SignInSignUpPage.vue" class="Events-button">More Events </a> </p>
          </IonCol>

        </IonRow>


        <!-- Middle Content Section with Left/Right Adverts and Middle Content -->
        <IonRow class=" ">
          <!-- Left Advert Section -->
          <IonCol size="12" size-md="1.5" class=" LeftAdvertComponent">
            <LeftAd1Component />
            <LeftAd2Component />
            <LeftAd3Component />
            <LeftAd4Component />
          </IonCol>


          <!-- Middle Content Section -->
          <IonCol size="12" size-md="9" class=" SignInSignUpComponent">
            <!-- 1-MiniProfilesRow- 2-Offers- 3-Investors section -->
            <IonRow class=" bordered-section ProfilesSection ">
              <IonRow>
                <p><a href="/menu" class="Events-button">MenuComp </a> </p>
                <p><a href="/socialMediaBar" class="Events-button">socialMediaBarComp </a> </p>
                <p><a href="/footer" class="Events-button">footerComp </a> </p>
                <p><a href="/signInSignUpComponent" class="Events-button">signInSignUpComponent </a> </p>
                <p><a href="/LeftAd1" class="Events-button">LeftAd1Comp </a> </p>
                <p><a href="/TemplatePage" class="Events-button">TemplatePage </a> </p>
                <p><a href="/profilePage" class="Events-button">ProfilePage </a> </p>
                <p><a href="/MiniProfileCardComponent" class="Events-button">MiniProfileCardComponent </a> </p>
                <p><a href="/ProfilePublicSectionComponent" class="Events-button">ProfilePublicSectionComponent </a>
                </p>
                <p><a href="/OfferComponent" class="Events-button">OfferComponent </a> </p>
                <p><a href="/BizOfferNeedPage" class="Events-button">BizOfferNeedPage </a> </p>
                <p><a href="/BestofferTABSComponent" class="Events-button">BestofferTABSComponent </a> </p>
                <p><a href="/PostOfferNeedBestOfferComponent" class="Events-button">PostOfferNeedBestOfferComponent </a>
                </p>
                <p><a href="/PostOfferComponent" class="Events-button">PostOfferComponent </a> </p>
                <p><a href="/EventsShowsPage" class="Events-button">EventsShowsPage </a> </p>
                <p><a href="/TheEventShowPage" class="Events-button">TheEventShowPage </a> </p>
                <p><a href="/TicketEventComponent" class="Events-button">TicketEventComponente </a> </p>
                <p><a href="/TheEventComponent" class="Events-button">TheEventComponent </a> </p>
                <p><a href="/MiniEventComponent" class="Events-button">MiniEventComponent </a> </p>
                <p><a href="/FreePitchingsPage" class="Events-button">FreePitchingsPage </a> </p>
                <p><a href="/MiniEventComponent" class="Events-button">MiniEventComponent </a> </p>
                <p><a href="/PitchingComponent" class="Events-button">PitchingComponent </a> </p>
                <p><a href="/TicketTABsPitchingUpSellingComponent"
                    class="Events-button">TicketTABsPitchingUpSellingComponent </a> </p>
                <p><a href="/FormPitchingWorkshopPresentationComponent"
                    class="Events-button">FormPitchingWorkshopPresentationComponent </a> </p>
                <p><a href="/FormUpSellingComponent" class="Events-button">FormUpSellingComponent </a> </p>

                <p><a href="/FormExhibitingWorkshopPresentComponent"
                    class="Events-button">FormExhibitingWorkshopPresentComponent </a> </p>
                <p><a href="/AboutUsPage" class="Events-button">AboutUsPage </a> </p>
                <p><a href="/ProfileLeftSideBarComponent" class="Events-button">ProfileLeftSideBarComponent </a> </p>
                <p><a href="/FilterByComponent" class="Events-button">FilterByComponent </a> </p>
                <p><a href="/AdminPage" class="Events-button">AdminPage </a> </p>
                <p><a href="/AdminCreateEventTABsComponent" class="Events-button">AdminCreateEventTABsComponent</a> </p>
                <p><a href="/AdminCreateEventComponent" class="Events-button">AdminCreateEventComponent</a> </p>
                <p><a href="/AdminEventsBookingsComponent" class="Events-button">AdminEventsBookingsComponent </a> </p>
                <p><a href="/AdminEventsListComponent" class="Events-button">AdminEventsListComponent </a> </p>
                <p><a href="/AdminLeftSideBarComponent" class="Events-button">AdminLeftSideBarComponent </a> </p>
                <p><a href="/FormProfilePublicSectionComponent " class="Events-button">FormProfilePublicSectionComponent
                  </a> </p>
                <p><a href="/PrivacyPolicyPage" class="Events-button">PrivacyPolicyPage </a> </p>
                <p><a href="/TermsConditionsPage" class="Events-button">TermsConditionsPage </a> </p>
                <p><a href="/InvestorsInvesteesPage" class="Events-button">InvestorsInvesteesPage </a> </p>
                <p><a href="/FormApplyForInvestmentComponent" class="Events-button">FormApplyForInvestmentComponent </a>
                </p>
                <p><a href="/FormProvideForInvestmentComponent" class="Events-button">FormProvideForInvestmentComponent
                  </a> </p>
                <p><a href="/MiniInvestorsProfileComponent" class="Events-button">MiniInvestorsProfileComponent </a>
                </p>
                <p><a href="/MiniInvesteesProfileComponent" class="Events-button">MiniInvesteesProfileComponent </a>
                </p>
                <p><a href="/MembersProfileDetailAdminComponent"
                    class="Events-button">MembersProfileDetailAdminComponent </a> </p>
                <p><a href="/MembersProfileDetailTABsAdminComponent"
                    class="Events-button">MembersProfileDetailTABsAdminComponent </a> </p>
                <p><a href="/MembersPitchingProfileDetailAdminComponent"
                    class="Events-button">MembersPitchingProfileDetailAdminComponent </a> </p>
                <p><a href="/InvestorsProfileDetailAdminComponent"
                    class="Events-button">InvestorsProfileDetailAdminComponent </a> </p>
                <p><a href="/MembersOfferDetailProfileDetailAdminComponent"
                    class="Events-button">MembersOfferDetailProfileDetailAdminComponent </a> </p>
                <p><a href="/MembersNeedDetailProfileDetailAdminComponent"
                    class="Events-button">MembersNeedDetailProfileDetailAdminComponent </a> </p>
                <p><a href="/MembersBestOfferDetailProfileDetailAdminComponent"
                    class="Events-button">MembersBestOfferDetailProfileDetailAdminComponent </a> </p>
                <p><a href="/InvestmentApplicationMembersProfileDetailAdminComponent "
                    class="Events-button">InvestmentApplicationMembersProfileDetailAdminComponent </a> </p>
                <p><a href="/AdminEventSpecificInvestmentApplicationMembersProfileDetailAdminComponent "
                    class="Events-button">AdminEventSpecificInvestmentApplicationMembersProfileDetailAdminComponent </a>
                </p>
                <p><a href="/EmailWebsiteNotificationComponent" class="Events-button">EmailWebsiteNotificationComponent
                  </a> </p>
                <p><a href="/MessagingComponent" class="Events-button">MessagingComponent </a> </p>
                <p><a href="/MembersMyOrderTABsComponent" class="Events-button">MembersMyOrderTABsComponent </a> </p>
                <p><a href="/MemberTicketsComponent" class="Events-button">MemberTicketsComponent </a> </p>
                <p><a href="/MemberMessagingEmailingOrderComponent"
                    class="Events-button">MemberMessagingEmailingOrderComponent </a> </p>
                <p><a href="/MemberMembershipOrderComponent" class="Events-button">MemberMembershipOrderComponent </a>
                </p>
                <p><a href="/MemberInvestmentApplicationComponent"
                    class="Events-button">MemberInvestmentApplicationComponent </a> </p>
                <p><a href="/SponsorsPartnershipPage" class="Events-button">SponsorsPartnershipPage </a> </p>
                <p><a href="/SponsorshipPartnershipForm" class="Events-button">SponsorshipPartnershipForm </a> </p>
                <p><a href="/SponsorshipPartnershipAdComponent" class="Events-button">SponsorshipPartnershipAdComponent
                  </a> </p>
                <p><a href="/MyConnectionComponent" class="Events-button">MyConnectionComponent </a> </p>
                <p><a href="/EmailImportsTableComponent" class="Events-button">EmailImportsTableComponent</a> </p>
                <p><a href="/SponsorshipPartnershipTableComponent"
                    class="Events-button">SponsorshipPartnershipTableComponent</a> </p>
                <p><a href="/CEOBusinessAdvicePage" class="Events-button">CEOBusinessAdvicePage</a> </p>
                <p><a href="/FAQPage" class="Events-button">FAQPage</a> </p>
                <p><a href="/FAQTableComponent" class="Events-button">FAQTableComponent</a> </p>
                <p><a href="/SharesTableComponent" class="Events-button">SharesTableComponent</a> </p>
                <p><a href="/SharesPage" class="Events-button">SharesPage</a> </p>
                <p><a href="/ContactUsFormComponent" class="Events-button">ContactUsFormComponent</a> </p>
                <p><a href="/ContactUsPage" class="Events-button">ContactUsPage</a> </p>
                <p><a href="/contactUsTABsAdminComponent" class="Events-button">contactUsTABsAdminComponent</a> </p>
                <p><a href="/membersContactUsMessagesTableAdminComponent"
                    class="Events-button">membersContactUsMessagesTableAdminComponent</a> </p>
                <p><a href="/RewardDiscountPage" class="Events-button">RewardDiscountPage</a> </p>
                <p><a href="/MyRewardsDiscountsUsedTableComponent"
                    class="Events-button">MyRewardsDiscountsUsedTableComponent</a> </p>
                <p><a href="/MyRewardsDiscountsEarnedTableComponent"
                    class="Events-button">MyRewardsDiscountsEarnedTableComponent</a> </p>
                <p><a href="/MyRewardsDiscountsComponent" class="Events-button">MyRewardsDiscountsComponent</a> </p>
                <p><a href="/MySharesTableComponent" class="Events-button">MySharesTableComponent</a> </p>
                <p><a href="/MyOffersActivityTableComponent" class="Events-button">MyOffersActivityTableComponent</a>
                </p>
                <p><a href="/MyBestOffersActivityTableComponent"
                    class="Events-button">MyBestOffersActivityTableComponent</a> </p>
                <p><a href="/MyNeedsActivityTableComponent" class="Events-button">MyNeedsActivityTableComponent</a> </p>
                <p><a href="/MyInvestmentAdsComponent" class="Events-button"> MyInvestmentAdsComponent </a> </p>
                <p><a href="/MyPitchingsActivityTableComponent" class="Events-button"> MyPitchingsActivityTableComponent
                  </a> </p>
                <p><a href="/MembersSponsorshipPartnershipProfileDetailAdminComponent" class="Events-button">
                    MembersSponsorshipPartnershipProfileDetailAdminComponent </a> </p>
                <p><a href="/MembersMembershipsProfileDetailAdminComponent" class="Events-button">
                    MembersMembershipsProfileDetailAdminComponent </a> </p>
                <p><a href="/MembersSharePurchaseProfileDetailAdminComponent" class="Events-button">
                    MembersSharePurchaseProfileDetailAdminComponent </a> </p>
                <p><a href="/MembersMessagingTableAdminComponent" class="Events-button">
                    membersMessagingTableAdminComponent </a> </p>
                <p><a href="/MembersRewardDiscountTableAdminComponent" class="Events-button">
                    MembersRewardDiscountTableAdminComponent </a> </p>
                <p><a href="/MembersCEOBusinessAdviceProfileDetailAdminComponent" class="Events-button">
                    MembersCEOBusinessAdviceProfileDetailAdminComponent </a> </p>
                <p><a href="/MembersBusinessAdviceProfileDetailAdminComponent" class="Events-button">
                    MembersBusinessAdviceProfileDetailAdminComponent </a> </p>
                <p><a href="/BusinessAdviceTABsComponent" class="Events-button"> BusinessAdviceTABsComponent </a> </p>
                <p><a href="/MenteesBusinessAdviceTableComponent " class="Events-button">
                    MenteesBusinessAdviceTableComponent </a> </p>
                <p><a href="/BusinessAdviceBestOffers7CategoriesFormComponents" class="Events-button">
                    BusinessAdviceBestOffers7CategoriesFormComponents </a> </p>
                <p><a href="/AccountingBestOffers7CategoriesFormComponent" class="Events-button">
                    AccountingBestOffers7CategoriesFormComponent </a> </p>
                <p><a href="/OfficeSpaceBestOffers7CategoriesFormComponent" class="Events-button">
                    OfficeSpaceBestOffers7CategoriesFormComponent </a> </p>
                <p><a href="/MyBestOfferOfficeSpaceActivityTableComponent" class="Events-button">
                    OfficeSpaceBestOffers7CategoriesFormComponent </a> </p>
                <p><a href="/MyBestOfferAccountingActivityTableComponent"
                    class="Events-button">MyBestOfferAccountingActivityTableComponent </a> </p>
                <p><a href="/MembersOfficeSpaceProfileDetailAdminComponent"
                    class="Events-button">MembersOfficeSpaceProfileDetailAdminComponent </a> </p>
                <p><a href="/SimpleAdvertisingComponent" class="Events-button">SimpleAdvertisingComponent </a> </p>
                <p><a href="/AdvanceAdvertisingComponent" class="Events-button">AdvanceAdvertisingComponent </a> </p>
                <p><a href="/AdvertStatBudgetingSideBarComponent" class="Events-button">AdvertStatBudgetingSideBarComponent </a> </p>


              </IonRow>

              <!-- MiniProfilesRow #####     membersMessagingTableAdminComponent -->
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
                    <!-- Careful !!! This Component is the 7 tabs only THEN in its tab component the BEST OFFERs are nested #########" -->
                    <BestOfferTABsComponent />
                  </IonCol>
                  <IonCol v-show="selectedTab === 'AdvertiseForFree'" class="AdvertiseForFree">
                    <!-- Component for Advertise For FREE #########" -->
                    <PostOfferNeedBestOfferComponent />
                  </IonCol>
                </IonRow>
              </IonCol>
            </IonRow>





            <!-- 4Tabs 1- All Investors 2- All Investees 3- Apply For Investment 4- Provide Investment ##############################-->
            <IonRow class=" bordered-section ">
              <IonCol>
                <IonRow class=" Tabs4InvestorsInvesteesApplyForInvestment">
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
                      <IonCol>
                        <IonRow class="TwoMiniProfile">
                          <MiniInvestorsProfileComponent />
                          <MiniProfileCardComponent />
                        </IonRow>
                      </IonCol>
                      <IonCol>
                        <IonRow class="TwoMiniProfile">
                          <MiniInvestorsProfileComponent />
                          <MiniProfileCardComponent />
                        </IonRow>
                      </IonCol>
                    </IonRow>
                  </IonCol>
                  <IonCol v-show="selectedTab === 'Investees'" class="Investees">
                    <!-- Component for Investees #########" -->
                    <IonRow>
                      <IonCol>
                        <IonRow class="TwoMiniProfile">
                          <MiniInvesteesProfileComponent />
                          <MiniProfileCardComponent />
                        </IonRow>
                      </IonCol>
                      <IonCol>
                        <IonRow class="TwoMiniProfile">
                          <MiniInvesteesProfileComponent />
                          <MiniProfileCardComponent />
                        </IonRow>
                      </IonCol>
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
            </IonRow>
          </IonCol>


          <!-- Right Advert Section -->
          <IonCol size="12" size-md="1.5" class=" RightAdvertComponent">
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
import FormApplyForInvestmentComponent from '@/components/InvestmentComponents/FormApplyForInvestmentComponent.vue';
import FormProvideInvestmentComponent from '@/components/InvestmentComponents/FormProvideInvestmentComponent.vue';
import MiniInvestorsProfileComponent from '@/components/InvestmentComponents/MiniInvestorsProfileComponent.vue';
import MiniInvesteesProfileComponent from '@/components/InvestmentComponents/MiniInvesteesProfileComponent.vue';


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
    FormApplyForInvestmentComponent,
    FormProvideInvestmentComponent,
    MiniInvestorsProfileComponent,
    MiniInvesteesProfileComponent,
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


.bordered-section {
  border: 1px solid;
  border-radius: 8px;
  padding: 0;
  margin: 0;
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
.TwoMiniProfile {
  box-shadow: 0 4px 8px rgba(75, 16, 214, 1.2); /* X-offset, Y-offset, blur radius, and color */
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
