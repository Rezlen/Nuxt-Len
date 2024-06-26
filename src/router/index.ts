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
import ProfilePublicSectionComponent from '@/components/ProfileComponents/ProfilePublicSectionComponent.vue';
import MiniProfileCardComponent from '@/components/ProfileComponents/MiniProfileCardComponent.vue';
import MiniProfileCardVIPComponent from '@/components/ProfileComponents/MiniProfileCardVIPComponent.vue';
import MiniProfileCardVVIPComponent from '@/components/ProfileComponents/MiniProfileCardVVIPComponent.vue';
import OfferComponent from '@/components/OfferNeedBestOfferComponent/OfferComponent.vue';
import NeedComponent from '@/components/OfferNeedBestOfferComponent/NeedComponent.vue';
import BestOfferComponent from '@/components/OfferNeedBestOfferComponent/BestOfferComponent.vue';
import BestOfferTABsComponent from '@/components/OfferNeedBestOfferComponent/BestOfferTABsComponent.vue';
import PostOfferComponent from '@/components/OfferNeedBestOfferComponent/PostOfferComponent.vue';
import PostNeedComponent from '@/components/OfferNeedBestOfferComponent/PostNeedComponent.vue';
import PostBestOfferComponent from '@/components/OfferNeedBestOfferComponent/PostBestOfferComponent.vue';
import PostOfferNeedBestOfferComponent from '@/components/OfferNeedBestOfferComponent/PostOfferNeedBestOfferComponent.vue';
import TheEventComponent from '@/components/EventsShowsComponent/TheEventComponent.vue';
import TicketEventComponent from '@/components/EventsShowsComponent/TicketEventComponent.vue';
import MiniEventComponent from '@/components/EventsShowsComponent/MiniEventComponent.vue';
import PitchingComponent from '@/components/PitchingComponents/PitchingComponent.vue';
import FormPitchingComponent from '@/components/PitchingComponents/FormPitchingComponent.vue';
import FormProfilePublicSectionComponent from '@/components/ProfileComponents/FormProfilePublicSectionComponent.vue';
import ProfileLeftSideBarComponent from '@/components/ProfileComponents/ProfileLeftSideBarComponent.vue';
import FilterByComponent from '@/components/OfferNeedBestOfferComponent/FilterByComponent.vue';
// Admin events comp
import AdminCreateEventTABsComponent from '@/components/AdminComponents/AdminEventsComponents/AdminCreateEventTABsComponent.vue';
import AdminCreateEventComponent from '@/components/AdminComponents/AdminEventsComponents/AdminCreateEventComponent.vue';
import AdminEventsBookingsComponent from '@/components/AdminComponents/AdminEventsComponents/AdminEventsBookingsComponent.vue';
import AdminEventsListComponent from '@/components/AdminComponents/AdminEventsComponents/AdminEventsListComponent.vue';
import AdminLeftSideBarComponent from '@/components/AdminComponents/AdminEventsComponents/AdminLeftSideBarComponent.vue';
// Investment comp
import FormApplyForInvestmentComponent from '@/components/InvestmentComponents/FormApplyForInvestmentComponent.vue';


// /FormApplyForInvestmentComponent
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

  
  // pages end here InvestorsInvesteesPage





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
    path: '/profileLeftSideBarComponent',
    name: 'ProfileLeftSideBarComponent',
    component: ProfileLeftSideBarComponent
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
  // Event, Ticket, Pitching section

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
    path: '/formPitchingComponent',
    name: 'FormPitchingComponent',
    component: FormPitchingComponent
  },
  // Admin EVENTs Components AdminCreateEventTABsComponent
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
    path: '/adminEventsBookingsComponent',
    name: 'AdminEventsBookingsComponent',
    component: AdminEventsBookingsComponent
  },
  {
    path: '/adminEventsListComponent',
    name: 'AdminEventsListComponent',
    component: AdminEventsListComponent
  },
  {
    path: '/adminLeftSideBarComponent',
    name: 'AdminLeftSideBarComponent',
    component: AdminLeftSideBarComponent
  },
  {
    path: '/formApplyForInvestmentComponent',
    name: 'FormApplyForInvestmentComponent',
    component: FormApplyForInvestmentComponent
  },

  // Investment comp
 
  // Left & Right Aderts starts here  FormExhibitingWorkshopPresentComponent
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
  // Left & Right Aderts ENDs here





];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
