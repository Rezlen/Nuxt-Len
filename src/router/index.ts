

import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import SignInSignUpPage from '../views/SignInSignUpPage.vue';
import TemplatePage from '../views/TemplatePage.vue';
import ProfilePage from '../views/ProfilePage.vue';
import BizOfferNeedPage from '../views/BizOfferNeedPage.vue';
import EventsShowsPage from '../views/EventsShowsPage.vue';
import TheEventShowPage from '../views/TheEventShowPage.vue';
import FreePitchingsPage from '../views/FreePitchingsPage.vue';
import AboutUsPage from '../views/AboutUsPage.vue';
import AdminPage from '../views/AdminPage.vue';
import PrivacyPolicyPage from '../views/PrivacyPolicyPage.vue';
import TermsConditionsPage from '../views/TermsConditionsPage.vue';
import InvestorsInvesteesPage from '../views/InvestorsInvesteesPage.vue';
import SponsorsPartnershipPage from '../views/SponsorsPartnershipPage.vue';
import CEOBusinessAdvicePage from '../views/CEOBusinessAdvicePage.vue';
import FAQPage from '../views/FAQPage.vue';
import SharesPage from '../views/SharesPage.vue';
import ContactUsPage from '../views/ContactUsPage.vue';
import RewardDiscountPage from '../views/RewardDiscountPage.vue';




// Comp Stats here
import MenuComponent from '@/components/6TempComponents/MenuComponent.vue';
import SocialMediaBarComponent from '@/components/6TempComponents/SocialMediaBarComponent.vue';
import SignInSignUpComponent from '@/components/6TempComponents/SignInSignUpComponent.vue';
import FooterComponent from '@/components/6TempComponents/FooterComponent.vue';
import LeftAd1Component from '@/components/6TempComponents/LeftRightAds/LeftAd1Component.vue';
import LeftAd2Component from '@/components/6TempComponents/LeftRightAds/LeftAd2Component.vue';
import LeftAd3Component from '@/components/6TempComponents/LeftRightAds/LeftAd3Component.vue';
import LeftAd4Component from '@/components/6TempComponents/LeftRightAds/LeftAd4Component.vue';
import RightAd1Component from '@/components/6TempComponents/LeftRightAds/RightAd1Component.vue';
import RightAd2Component from '@/components/6TempComponents/LeftRightAds/RightAd2Component.vue';
import RightAd3Component from '@/components/6TempComponents/LeftRightAds/RightAd3Component.vue';
import RightAd4Component from '@/components/6TempComponents/LeftRightAds/RightAd4Component.vue';
// Profile comp
import ProfilePublicSectionComponent from '@/components/ProfileComponents/ProfilePublicSectionComponent.vue';
import FormProfilePublicSectionComponent from '@/components/ProfileComponents/FormProfilePublicSectionComponent.vue';
import MiniProfileCardComponent from '@/components/ProfileComponents/MiniProfileCardComponent.vue';
import MiniProfileCardVIPComponent from '@/components/ProfileComponents/MiniProfileCardVIPComponent.vue';
import MiniProfileCardVVIPComponent from '@/components/ProfileComponents/MiniProfileCardVVIPComponent.vue';
import FilterByComponent from '@/components/OfferNeedBestOfferComponent/FilterByComponent.vue';
// Offer comp
import OfferComponent from '@/components/OfferNeedBestOfferComponent/OfferComponent.vue';
import NeedComponent from '@/components/OfferNeedBestOfferComponent/NeedComponent.vue';
import BestOfferComponent from '@/components/OfferNeedBestOfferComponent/BestOfferComponent.vue';
import BestOfferTABsComponent from '@/components/OfferNeedBestOfferComponent/BestOfferTABsComponent.vue';
import PostOfferComponent from '@/components/OfferNeedBestOfferComponent/PostOfferComponent.vue';
import PostNeedComponent from '@/components/OfferNeedBestOfferComponent/PostNeedComponent.vue';
import PostBestOfferComponent from '@/components/OfferNeedBestOfferComponent/PostBestOfferComponent.vue';
import PostOfferNeedBestOfferComponent from '@/components/OfferNeedBestOfferComponent/PostOfferNeedBestOfferComponent.vue';
// BestOffers7CategoriesFormComponents
import BusinessAdviceBestOffers7CategoriesFormComponents from '@/components/OfferNeedBestOfferComponent/BestOffers7CategoriesFormComponents/BusinessAdviceBestOffers7CategoriesFormComponent.vue';
import AccountingBestOffers7CategoriesFormComponent from '@/components/OfferNeedBestOfferComponent/BestOffers7CategoriesFormComponents/AccountingBestOffers7CategoriesFormComponent.vue';
import OfficeSpaceBestOffers7CategoriesFormComponent from '@/components/OfferNeedBestOfferComponent/BestOffers7CategoriesFormComponents/OfficeSpaceBestOffers7CategoriesFormComponent.vue';


// Events comp BusinessAdviceBestOffers7CategoriesFormComponents
import TheEventComponent from '@/components/EventsShowsComponent/TheEventComponent.vue';
import TicketEventComponent from '@/components/EventsShowsComponent/TicketEventComponent.vue';
import MiniEventComponent from '@/components/EventsShowsComponent/MiniEventComponent.vue';
import PitchingComponent from '@/components/PitchingComponents/PitchingComponent.vue';
import TicketTABsPitchingUpSellingComponent from '@/components/PitchingComponents/TicketTABsPitchingUpSellingComponent.vue';
import FormPitchingWorkshopPresentationComponent from '@/components/PitchingComponents/FormPitchingWorkshopPresentationComponent.vue';
import FormUpSellingComponent from '@/components/PitchingComponents/FormUpSellingComponent.vue';

// Admin events comp
import AdminLeftSideBarComponent from '@/components/AdminComponents/AdminEventsComponents/AdminLeftSideBarComponent.vue';
import AdminCreateEventTABsComponent from '@/components/AdminComponents/AdminEventsComponents/AdminCreateEventTABsComponent.vue';
import AdminEventsListComponent from '@/components/AdminComponents/AdminEventsComponents/AdminEventsListComponent.vue';
import AdminCreateEventComponent from '@/components/AdminComponents/AdminEventsComponents/AdminCreateEventComponent.vue';
import AdminEventsBookingsComponent from '@/components/AdminComponents/AdminEventsComponents/AdminEventsBookingsComponent.vue';
import AdminEventSpecificMembersPitchingProfileDetailAdminComponent from '@/components/AdminComponents/AdminEventsComponents/AdminEventSpecificMembersPitchingProfileDetailAdminComponent.vue';
import AdminEventSpecificInvestorsProfileDetailAdminComponent from '@/components/AdminComponents/AdminEventsComponents/AdminEventSpecificInvestorsProfileDetailAdminComponent.vue';
import AdminEventSpecificInvestmentApplicationMembersProfileDetailAdminComponent from '@/components/AdminComponents/AdminEventsComponents/AdminEventSpecificInvestmentApplicationMembersProfileDetailAdminComponent.vue';

// Investment comp
import FormApplyForInvestmentComponent from '@/components/InvestmentComponents/FormApplyForInvestmentComponent.vue';
import FormProvideInvestmentComponent from '@/components/InvestmentComponents/FormProvideInvestmentComponent.vue';
import MiniInvestorsProfileComponent from '@/components/InvestmentComponents/MiniInvestorsProfileComponent.vue';
import MiniInvesteesProfileComponent from '@/components/InvestmentComponents/MiniInvesteesProfileComponent.vue';
// Admin Profile comp
import MembersProfileDetailAdminComponent from '@/components/AdminComponents/MembersProfileAdminComponents/MembersProfileDetailAdminComponent.vue';
import MembersProfileDetailTABsAdminComponent from '@/components/AdminComponents/MembersProfileAdminComponents/MembersProfileDetailTABsAdminComponent.vue';
import MembersPitchingProfileDetailAdminComponent from '@/components/AdminComponents/MembersProfileAdminComponents/MembersPitchingProfileDetailAdminComponent.vue';
import InvestorsProfileDetailAdminComponent from '@/components/AdminComponents/MembersProfileAdminComponents/InvestorsProfileDetailAdminComponent.vue';
import InvestmentApplicationMembersProfileDetailAdminComponent from '@/components/AdminComponents/MembersProfileAdminComponents/InvestmentApplicationMembersProfileDetailAdminComponent.vue';
import contactUsTABsAdminComponent from '@/components/AdminComponents/contactUsAdminComponents/contactUsTABsAdminComponent.vue';
import membersContactUsMessagesTableAdminComponent from '@/components/AdminComponents/contactUsAdminComponents/membersContactUsMessagesTableAdminComponent.vue';
// Admin Offers Needs bestOffers
import AdminBestOfferTABsComponent from '@/components/AdminComponents/AdminOffersNeedsBestOffersComponents/AdminBestOffersComponents/AdminBestOfferTABsComponent.vue';
import MembersOfferDetailProfileDetailAdminComponent from '@/components/AdminComponents/AdminOffersNeedsBestOffersComponents/MembersOfferDetailProfileDetailAdminComponent.vue';
import MembersNeedDetailProfileDetailAdminComponent from '@/components/AdminComponents/AdminOffersNeedsBestOffersComponents/MembersNeedDetailProfileDetailAdminComponent.vue';
// Admin Best Offers
import MembersBestOfferDetailProfileDetailAdminComponent from '@/components/AdminComponents/AdminOffersNeedsBestOffersComponents/AdminBestOffersComponents/MembersBestOfferDetailProfileDetailAdminComponent.vue';
import MembersAccountingActivityProfileDetailAdminComponent from '@/components/AdminComponents/AdminOffersNeedsBestOffersComponents/AdminBestOffersComponents/AdminBestOffersAccountingActivityTablesComponents/MembersAccountingActivityProfileDetailAdminComponent.vue';
import MembersBusinessAdviceProfileDetailAdminComponent from '@/components/AdminComponents/AdminOffersNeedsBestOffersComponents/AdminBestOffersComponents/AdminBestOffersBusinessAdviceActivityTablesComponents/MembersBusinessAdviceProfileDetailAdminComponent.vue';
import MembersOfficeSpaceProfileDetailAdminComponent from '@/components/AdminComponents/AdminOffersNeedsBestOffersComponents/AdminBestOffersComponents/AdminBestOffersOfficeSpaceActivityTablesComponents/MembersOfficeSpaceProfileDetailAdminComponent.vue';

//  Admin Sponsorship Partnership comps MembersSponsorshipPartnershipProfileDetailAdminComponent
import MembersSponsorshipPartnershipProfileDetailAdminComponent from '@/components/AdminComponents/AdminSponsorshipPartnershipComponents/MembersSponsorshipPartnershipProfileDetailAdminComponent.vue';
// Admin membership components
import MembersMembershipsProfileDetailAdminComponent from '@/components/AdminComponents/AdminMembershipsComponents/MembersMembershipsProfileDetailAdminComponent.vue';
// Admin Members Share Purchase components
import MembersSharePurchaseProfileDetailAdminComponent from '@/components/AdminComponents/contactUsAdminComponents/MembersSharePurchaseProfileDetailAdminComponent.vue';
// Admin Members Messaging components
import MembersMessagingTableAdminComponent from '@/components/AdminComponents/contactUsAdminComponents/MembersMessagingTableAdminComponent.vue';
// Admin Members Reward Discount Purchase components
import MembersRewardDiscountTableAdminComponent from '@/components/AdminComponents/contactUsAdminComponents/MembersRewardDiscountTableAdminComponent.vue';
// Admin Members Business Advice Profile Detail AdminComponent
import MembersCEOBusinessAdviceProfileDetailAdminComponent from '@/components/AdminComponents/AdminBusinessAdviceComponent/MembersCEOBusinessAdviceProfileDetailAdminComponent.vue';

// User/Member Account Section Comps  MembersRewardDiscountTableAdminComponent
import EmailWebsiteNotificationComponent from '@/components/EmailWebsiteNotificationComponents/EmailWebsiteNotificationComponent.vue';
import MessagingComponent from '@/components/MessagingComponents/MessagingComponent.vue';
import MembersMyOrderTABsComponent from '@/components/MembersMyOrderComponents/MembersMyOrderTABsComponent.vue';
import MemberTicketsComponent from '@/components/MembersMyOrderComponents/MemberTicketsComponent.vue';
import MemberMessagingEmailingOrderComponent from '@/components/MembersMyOrderComponents/MemberMessagingEmailingOrderComponent.vue';
import MemberMembershipOrderComponent from '@/components/MembersMyOrderComponents/MemberMembershipOrderComponent.vue';
import MySharesTableComponent from '@/components/MembersMyOrderComponents/MySharesTableComponent.vue';
//  MyOffersNeedsBestOffersComponents/MyBestOffersActivityTablesComponents/MyBestOffersBusinessAdviceActivityTablesComponents
// My Rewards Discounts
import MyRewardsDiscountsComponent from '@/components/MembersMyOrderComponents/MyRewardsDiscountsComponents/MyRewardsDiscountsComponent.vue';
import MyRewardsDiscountsEarnedTableComponent from '@/components/MembersMyOrderComponents/MyRewardsDiscountsComponents/MyRewardsDiscountsEarnedTableComponent.vue';
import MyRewardsDiscountsUsedTableComponent from '@/components/MembersMyOrderComponents/MyRewardsDiscountsComponents/MyRewardsDiscountsUsedTableComponent.vue';

// My Connection Components
import MyConnectionComponent from '@/components/MyConnectionComponents/MyConnectionComponent.vue';
import EmailImportsTableComponent from '@/components/MyConnectionComponents/EmailImportsTableComponent.vue';
// SponsorshipPartnershipTableComponent
import SponsorshipPartnershipTableComponent from '@/components/MembersMyOrderComponents/SponsorshipPartnershipTableComponent.vue';

// Sponsorship Partnership  SponsorshipPartnershipForm
import SponsorshipPartnershipFormComponent from '@/components/SponsorshipPartnershipComponents/SponsorshipPartnershipFormComponent.vue';
import SponsorshipPartnershipAdComponent from '@/components/SponsorshipPartnershipComponents/SponsorshipPartnershipAdComponent.vue';
//  CEOBusinessAdviceFormComponent
import CEOBusinessAdviceFormComponent from '@/components/CEOBusinessAdviceComponents/CEOBusinessAdviceFormComponent.vue';
// /FAQTableComponent
import FAQTableComponent from '@/components/FAQComponents/FAQTableComponent.vue';
// Share Components
import SharesTableComponent from '@/components/SharesComponents/SharesTableComponent.vue';
// Contact Us
import ContactUsFormComponent from '@/components/ContactUsComponents/ContactUsFormComponent.vue';
// My Offers, Need BestOffers ActivityTableComponent
import MyBestOfferTABsComponent from '@/components/MyOffersNeedsBestOffersComponents/MyBestOffersActivityTablesComponents/MyBestOfferTABsComponent.vue';

import MyOffersActivityTableComponent from '@/components/MyOffersNeedsBestOffersComponents/MyOffersActivityTableComponent.vue';
import MyBestOffersActivityTableComponent from '@/components/MyOffersNeedsBestOffersComponents/MyBestOffersActivityTablesComponents/MyBestOffersActivityTableComponent.vue';
import MyNeedsActivityTableComponent from '@/components/MyOffersNeedsBestOffersComponents/MyNeedsActivityTableComponent.vue';
import MyBestOfferMentorsMenteesBusinessAdviceActivityTableComponent from '@/components/MyOffersNeedsBestOffersComponents/MyBestOffersActivityTablesComponents/MyBestOffersBusinessAdviceActivityTablesComponents/MyBestOfferMentorsMenteesBusinessAdviceActivityTableComponent.vue';

import MyBestOfferOfficeSpaceActivityTableComponent from '@/components/MyOffersNeedsBestOffersComponents/MyBestOffersActivityTablesComponents/MyBestOffersOfficeSpaceActivityTablesComponents/MyBestOfferOfficeSpaceActivityTableComponent.vue';
// MyBestOffersAccountingActivityTablesComponents
import MyBestOfferAccountingActivityTableComponent from '@/components/MyOffersNeedsBestOffersComponents/MyBestOffersActivityTablesComponents/MyBestOffersAccountingActivityTablesComponents/MyBestOfferAccountingActivityTableComponent.vue';

// MyInvestmentApplicationComponent 
import MyInvestmentApplicationComponent from '@/components/MyInvestmentComponents/MyInvestmentApplicationComponent.vue';
import MyInvestmentAdsComponent from '@/components/MyInvestmentComponents/MyInvestmentAdsComponent.vue';
// my pitchings
import MyPitchingsActivityTableComponent from '@/components/MyPitchingsComponents/MyPitchingsActivityTableComponent.vue';



// MemberMembershipOrderComponent
const routes: Array<RouteRecordRaw> = [  
  // Pages start here FormTheEventComponent
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/signInSignUpPage',
    name: 'SignInSignUpPage',
    component: SignInSignUpPage
  },
  {
    path: '/bizOfferNeedPage',
    name: 'BizOfferNeedPage',
    component: BizOfferNeedPage
  },
  {
    path: '/eventsShowsPage',
    name: 'EventsShowsPage',
    component: EventsShowsPage
  },
  {
    path: '/theEventShowPage',
    name: 'TheEventShowPage',
    component: TheEventShowPage
  },
  {
    path: '/profilePage',
    name: 'ProfilePage',
    component: ProfilePage
  },

  {
    path: '/freePitchingsPage',
    name: 'FreePitchingsPage',
    component: FreePitchingsPage
  },
  {
    path: '/aboutUsPage',
    name: 'AboutUsPage',
    component: AboutUsPage
  },
  {
    path: '/adminPage',
    name: 'AdminPage',
    component: AdminPage
  },
  {
    path: '/templatePage',
    name: 'TemplatePage',
    component: TemplatePage
  },
  {
    path: '/privacyPolicyPage',
    name: 'PrivacyPolicyPage',
    component: PrivacyPolicyPage
  },
  {
    path: '/termsConditionsPage',
    name: 'TermsConditionsPage',
    component: TermsConditionsPage
  },
  {
    path: '/investorsInvesteesPage',
    name: 'InvestorsInvesteesPage',
    component: InvestorsInvesteesPage
  },
  {
    path: '/sponsorsPartnershipPage',
    name: 'SponsorsPartnershipPage',
    component: SponsorsPartnershipPage
  },
  {
    path: '/CEOBusinessAdvicePage',
    name: 'CEOBusinessAdvicePage',
    component: CEOBusinessAdvicePage
  },
  {
    path: '/fAQPage',
    name: 'FAQPage',
    component: FAQPage
  },
  {
    path: '/sharesPage',
    name: 'SharesPage',
    component: SharesPage
  },
  {
    path: '/contactUsPage',
    name: 'ContactUsPage',
    component: ContactUsPage
  },
  {
    path: '/rewardDiscountPage',
    name: 'RewardDiscountPage',
    component: RewardDiscountPage
  },
  
  // pages end here SponsorsPartnersPage





  //Components end here

  {
    path: '/menu',
    name: 'MenuComponent',
    component: MenuComponent
  },
  {
    path: '/socialMediaBar',
    name: 'SocialMediaBarComponent',
    component: SocialMediaBarComponent
  },
  {
    path: '/footer',
    name: 'FooterComponent',
    component: FooterComponent
  },
  {
    path: '/signInSignUpComponent',
    name: 'SignInSignUpComponent',
    component: SignInSignUpComponent
  },
  {
    path: '/profilePublicSectionComponent',
    name: 'ProfilePublicSectionComponent',
    component: ProfilePublicSectionComponent
  },
  {
    path: '/formProfilePublicSectionComponent',
    name: 'FormProfilePublicSectionComponent',
    component: FormProfilePublicSectionComponent
  },
  {
    path: '/miniProfileCardComponent',
    name: 'MiniProfileCardComponent',
    component: MiniProfileCardComponent
  },
  {
    path: '/miniProfileCardVIPComponent',
    name: 'MiniProfileCardVIPComponent',
    component: MiniProfileCardVIPComponent
  },
  {
    path: '/miniProfileCardVVIPComponent',
    name: 'MiniProfileCardVVIPComponent',
    component: MiniProfileCardVVIPComponent
  },
  // Offer Need BestOffer section
  {
    path: '/offerComponent',
    name: 'OfferComponent',
    component: OfferComponent
  },
  {
    path: '/needComponent',
    name: 'NeedComponent',
    component: NeedComponent
  },
  {
    path: '/bestOfferComponent',
    name: 'BestOfferComponent',
    component: BestOfferComponent
  },
  {
    path: '/bestOfferTABsComponent',
    name: 'BestOfferTABsComponent',
    component: BestOfferTABsComponent
  },
  {
    path: '/postOfferNeedBestOfferComponent',
    name: 'PostOfferNeedBestOfferComponent',
    component: PostOfferNeedBestOfferComponent
  },
  {
    path: '/postOfferComponent',
    name: 'PostOfferComponent',
    component: PostOfferComponent
  },
  {
    path: '/postNeedComponent',
    name: 'PostNeedComponent',
    component: PostNeedComponent
  },
  {
    path: '/postBestOfferComponent',
    name: 'PostBestOfferComponent',
    component: PostBestOfferComponent
  },
  {
    path: '/filterByComponent',
    name: 'FilterByComponent',
    component: FilterByComponent
  },
  // BestOffers7CategoriesFormComponents
  {
    path: '/businessAdviceBestOffers7CategoriesFormComponents',
    name: 'BusinessAdviceBestOffers7CategoriesFormComponents',
    component: BusinessAdviceBestOffers7CategoriesFormComponents
  },
  {
    path: '/accountingBestOffers7CategoriesFormComponent',
    name: 'AccountingBestOffers7CategoriesFormComponent',
    component: AccountingBestOffers7CategoriesFormComponent
  },
  {
    path: '/officeSpaceBestOffers7CategoriesFormComponent',
    name: 'OfficeSpaceBestOffers7CategoriesFormComponent',
    component: OfficeSpaceBestOffers7CategoriesFormComponent
  },

  // Event, Ticket, Pitching section AccountingBestOffers7CategoriesFormComponent

  {
    path: '/theEventComponent',
    name: 'TheEventComponent',
    component: TheEventComponent
  },

  {
    path: '/ticketEventComponent',
    name: 'TicketEventComponent',
    component: TicketEventComponent
  },
  {
    path: '/miniEventComponent',
    name: 'MiniEventComponent',
    component: MiniEventComponent
  },
  {
    path: '/pitchingComponent',
    name: 'PitchingComponent',
    component: PitchingComponent
  },
  {
    path: '/ticketTABsPitchingUpSellingComponent',
    name: 'TicketTABsPitchingUpSellingComponent',
    component: TicketTABsPitchingUpSellingComponent
  },
  {
    path: '/formPitchingWorkshopPresentationComponent',
    name: 'FormPitchingWorkshopPresentationComponent',
    component: FormPitchingWorkshopPresentationComponent
  },
  {
    path: '/formUpSellingComponent',
    name: 'FormUpSellingComponent',
    component: FormUpSellingComponent
  },

  // Investment comp
  {
    path: '/formApplyForInvestmentComponent',
    name: 'FormApplyForInvestmentComponent',
    component: FormApplyForInvestmentComponent
  },
  {
    path: '/formProvideInvestmentComponent',
    name: 'FormProvideInvestmentComponent',
    component: FormProvideInvestmentComponent
  },
  {
    path: '/miniInvestorsProfileComponent',
    name: 'MiniInvestorsProfileComponent',
    component: MiniInvestorsProfileComponent
  },
  {
    path: '/miniInvesteesProfileComponent',
    name: 'MiniInvesteesProfileComponent',
    component: MiniInvesteesProfileComponent
  },
  // Admin EVENTs Components 
  {
    path: '/adminLeftSideBarComponent',
    name: 'AdminLeftSideBarComponent',
    component: AdminLeftSideBarComponent
  },
  {
    path: '/adminCreateEventTABsComponent',
    name: 'AdminCreateEventTABsComponent',
    component: AdminCreateEventTABsComponent
  },
  {
    path: '/adminCreateEventComponent',
    name: 'AdminCreateEventComponent',
    component: AdminCreateEventComponent
  },
  {
    path: '/adminEventsListComponent',
    name: 'AdminEventsListComponent',
    component: AdminEventsListComponent
  },
  {
    path: '/adminEventsBookingsComponent',
    name: 'AdminEventsBookingsComponent',
    component: AdminEventsBookingsComponent
  },
  {
    path: '/adminEventSpecificMembersPitchingProfileDetailAdminComponent',
    name: 'AdminEventSpecificMembersPitchingProfileDetailAdminComponent',
    component: AdminEventSpecificMembersPitchingProfileDetailAdminComponent
  },
  {
    path: '/adminEventSpecificInvestorsProfileDetailAdminComponent',
    name: 'AdminEventSpecificInvestorsProfileDetailAdminComponent',
    component: AdminEventSpecificInvestorsProfileDetailAdminComponent
  },
  {
    path: '/adminEventSpecificInvestmentApplicationMembersProfileDetailAdminComponent',
    name: 'AdminEventSpecificInvestmentApplicationMembersProfileDetailAdminComponent',
    component: AdminEventSpecificInvestmentApplicationMembersProfileDetailAdminComponent
  },


   // Admin Profiles Components     AdminEventSpecificMembersPitchingProfileDetailAdminComponent
  {
    path: '/membersProfileDetailAdminComponent',
    name: 'MembersProfileDetailAdminComponent',
    component: MembersProfileDetailAdminComponent
  },
  {
    path: '/membersProfileDetailTABsAdminComponent',
    name: 'MembersProfileDetailTABsAdminComponent',
    component: MembersProfileDetailTABsAdminComponent
  },
  {
    path: '/membersPitchingProfileDetailAdminComponent',
    name: 'MembersPitchingProfileDetailAdminComponent',
    component: MembersPitchingProfileDetailAdminComponent
  },
  {
    path: '/investorsProfileDetailAdminComponent',
    name: 'InvestorsProfileDetailAdminComponent',
    component: InvestorsProfileDetailAdminComponent
  },
  {
    path: '/investmentApplicationMembersProfileDetailAdminComponent',
    name: 'InvestmentApplicationMembersProfileDetailAdminComponent',
    component: InvestmentApplicationMembersProfileDetailAdminComponent
  },
  {
    path: '/adminBestOfferTABsComponent',
    name: 'AdminBestOfferTABsComponent',
    component: AdminBestOfferTABsComponent
  },
  {
    path: '/membersOfferDetailProfileDetailAdminComponent',
    name: 'MembersOfferDetailProfileDetailAdminComponent',
    component: MembersOfferDetailProfileDetailAdminComponent
  },
  {
    path: '/membersNeedDetailProfileDetailAdminComponent',
    name: 'MembersNeedDetailProfileDetailAdminComponent',
    component: MembersNeedDetailProfileDetailAdminComponent
  },
    {
    path: '/membersBestOfferDetailProfileDetailAdminComponent',
    name: 'MembersBestOfferDetailProfileDetailAdminComponent',
    component: MembersBestOfferDetailProfileDetailAdminComponent
  },
  // Admin Contact Us 
  {
    path: '/contactUsTABsAdminComponent',
    name: 'contactUsTABsAdminComponent',
    component: contactUsTABsAdminComponent
  },
  {
    path: '/membersContactUsMessagesTableAdminComponent',
    name: 'membersContactUsMessagesTableAdminComponent',
    component: membersContactUsMessagesTableAdminComponent
  },
//  Admin Sponsorship Partnership comps MembersSponsorshipPartnershipProfileDetailAdminComponent
  {
    path: '/membersSponsorshipPartnershipProfileDetailAdminComponent',
    name: 'MembersSponsorshipPartnershipProfileDetailAdminComponent',
    component: MembersSponsorshipPartnershipProfileDetailAdminComponent
  },
  // Admin Membership comp
  {
    path: '/membersMembershipsProfileDetailAdminComponent',
    name: 'MembersMembershipsProfileDetailAdminComponent',
    component: MembersMembershipsProfileDetailAdminComponent
  },
  //  MembersSharePurchaseProfileDetailAdminComponent
  {
    path: '/membersSharePurchaseProfileDetailAdminComponent',
    name: 'MembersSharePurchaseProfileDetailAdminComponent',
    component: MembersSharePurchaseProfileDetailAdminComponent
  },
  {
    path: '/membersMessagingTableAdminComponent',
    name: 'MembersMessagingTableAdminComponent',
    component: MembersMessagingTableAdminComponent
  },
  {
    path: '/membersRewardDiscountTableAdminComponent',
    name: 'MembersRewardDiscountTableAdminComponent',
    component: MembersRewardDiscountTableAdminComponent
  },
  // Biz advice
  {
    path: '/membersCEOBusinessAdviceProfileDetailAdminComponent',
    name: 'MembersCEOBusinessAdviceProfileDetailAdminComponent',
    component: MembersCEOBusinessAdviceProfileDetailAdminComponent
  },
  // Best Offers Admin MembersOfficeSpaceProfileDetailAdminComponent
  {
    path: '/membersAccountingActivityProfileDetailAdminComponent',
    name: 'MembersAccountingActivityProfileDetailAdminComponent',
    component: MembersAccountingActivityProfileDetailAdminComponent
  },
  {
    path: '/membersBusinessAdviceProfileDetailAdminComponent',
    name: 'MembersBusinessAdviceProfileDetailAdminComponent',
    component: MembersBusinessAdviceProfileDetailAdminComponent
  },
  {
    path: '/membersOfficeSpaceProfileDetailAdminComponent',
    name: 'MembersOfficeSpaceProfileDetailAdminComponent',
    component: MembersOfficeSpaceProfileDetailAdminComponent
  },
  // User Account section MembersRewardDiscountTableAdminComponent 

{
    path: '/emailWebsiteNotificationComponent',
    name: 'EmailWebsiteNotificationComponent',
    component: EmailWebsiteNotificationComponent
  },
  {
    path: '/messagingComponent',
    name: 'MessagingComponent',
    component: MessagingComponent
  },
  {
    path: '/membersMyOrderTABsComponent',
    name: 'MembersMyOrderTABsComponent',
    component: MembersMyOrderTABsComponent
  },
  {
    path: '/memberTicketsComponent',
    name: 'MemberTicketsComponent',
    component: MemberTicketsComponent
  },
  {
    path: '/memberMessagingEmailingOrderComponent',
    name: 'MemberMessagingEmailingOrderComponent',
    component: MemberMessagingEmailingOrderComponent
  },
  {
    path: '/memberMembershipOrderComponent',
    name: 'MemberMembershipOrderComponent',
    component: MemberMembershipOrderComponent
  },
  {
    path: '/mySharesTableComponent',
    name: 'MySharesTableComponent',
    component: MySharesTableComponent
  },
  {
    path: '/sponsorshipPartnershipTableComponent',
    name: 'SponsorshipPartnershipTableComponent',
    component: SponsorshipPartnershipTableComponent
  },
  // MyBestOfferMentorsMenteesBusinessAdviceActivityTableComponent
  {
    path: '/myBestOfferMentorsMenteesBusinessAdviceActivityTableComponent',
    name: 'MyBestOfferMentorsMenteesBusinessAdviceActivityTableComponent',
    component: MyBestOfferMentorsMenteesBusinessAdviceActivityTableComponent
  },
  {
    path: '/myBestOfferOfficeSpaceActivityTableComponent',
    name: 'MyBestOfferOfficeSpaceActivityTableComponent',
    component: MyBestOfferOfficeSpaceActivityTableComponent
  },
  {
    path: '/myBestOfferAccountingActivityTableComponent',
    name: 'MyBestOfferAccountingActivityTableComponent',
    component: MyBestOfferAccountingActivityTableComponent
  },

  // MyRewardsDiscountsComponents 
  {
    path: '/myRewardsDiscountsComponent',
    name: 'MyRewardsDiscountsComponent',
    component: MyRewardsDiscountsComponent
  },
  {
    path: '/myRewardsDiscountsEarnedTableComponent',
    name: 'MyRewardsDiscountsEarnedTableComponent',
    component: MyRewardsDiscountsEarnedTableComponent
  },
  {
    path: '/myRewardsDiscountsUsedTableComponent',
    name: 'MyRewardsDiscountsUsedTableComponent',
    component: MyRewardsDiscountsUsedTableComponent
  },


// Sponsorship Partnership  
  {
    path: '/sponsorshipPartnershipFormComponent ',
    name: 'SponsorshipPartnershipFormComponent ',
    component: SponsorshipPartnershipFormComponent 
  },
  {
    path: '/sponsorshipPartnershipAdComponent',
    name: 'SponsorshipPartnershipAdComponent',
    component: SponsorshipPartnershipAdComponent 
  },
  // My Connection Components
  {
    path: '/myConnectionComponent',
    name: 'MyConnectionComponent',
    component: MyConnectionComponent 
  },
  {
    path: '/emailImportsTableComponent',
    name: 'EmailImportsTableComponent',
    component: EmailImportsTableComponent 
  },
  // CEOBusinessAdviceComponents
  {
    path: '/CEOBusinessAdviceFormComponent',
    name: 'CEOBusinessAdviceFormComponent',
    component: CEOBusinessAdviceFormComponent 
  },
  // FAQComponents
  {
    path: '/fAQTableComponent',
    name: 'FAQTableComponent',
    component: FAQTableComponent
  },
  // FAQComponents
  {
    path: '/sharesTableComponent',
    name: 'SharesTableComponent',
    component: SharesTableComponent
  },
  // ContactUsFormComponent
  {
    path: '/contactUsFormComponent',
    name: 'ContactUsFormComponent',
    component: ContactUsFormComponent
  },

  // My Offers Best Offers, Needs components
  {
    path: '/myOffersActivityTableComponent',
    name: 'MyOffersActivityTableComponent',
    component: MyOffersActivityTableComponent
  },
  {
    path: '/myBestOfferTABsComponent',
    name: 'MyBestOfferTABsComponent',
    component: MyBestOfferTABsComponent
  },
  {
    path: '/myNeedsActivityTableComponent',
    name: 'MyNeedsActivityTableComponent',
    component: MyNeedsActivityTableComponent
  },
  {
    path: '/myBestOffersActivityTableComponent',
    name: 'MyBestOffersActivityTableComponent',
    component: MyBestOffersActivityTableComponent
  },
  // MyInvestmentApplicationComponent  
  {
    path: '/myInvestmentApplicationComponent',
    name: 'MyInvestmentApplicationComponent',
    component: MyInvestmentApplicationComponent
  },
  {
    path: '/myInvestmentAdsComponent',
    name: 'MyInvestmentAdsComponent',
    component: MyInvestmentAdsComponent
  },
  //  My Pitching components
  {
    path: '/myPitchingsActivityTableComponent',
    name: 'MyPitchingsActivityTableComponent',
    component: MyPitchingsActivityTableComponent
  },

// Left & Right Adverts starts here  MemberInvestmentApplicationComponent
{
  path: '/LeftAd1',
  name: 'LeftAd1Component',
  component: LeftAd1Component
},
{
  path: '/LeftAd2',
  name: 'LeftAd2Component',
  component: LeftAd2Component
},
{
  path: '/LeftAd3',
  name: 'LeftAd3Component',
  component: LeftAd3Component
},
{
  path: '/LeftAd4',
  name: 'LeftAd4Component',
  component: LeftAd4Component
},
{
  path: '/RightAd1',
  name: 'RightAd1Component',
  component: RightAd1Component
},
{
  path: '/RightAd2',
  name: 'RightAd2Component',
  component: RightAd2Component
},
{
  path: '/RightAd3',
  name: 'RightAd3Component',
  component: RightAd3Component
},
{
  path: '/RightAd4',
  name: 'RightAd4Component',
  component: RightAd4Component
}, 


 
  // Backend BusinessProfile.ts





];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
