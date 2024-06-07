import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import SignInSignUpPage from '../views/SignInSignUpPage.vue';
import HomePage1 from '../views/HomePage1.vue';

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
HomePage1

const routes: Array<RouteRecordRaw> = [
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
    path: '/message/:id',
    component: () => import('../views/ViewMessagePage.vue')
  },
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





  // Pages start here
  {
    path: '/homePage1',
    name: 'HomePage1',
    component: HomePage1
  },
    {
    path: '/signInSignUpPage',
    name: 'SignInSignUpPage',
    component: SignInSignUpPage
  },
  // pages end here




  

  {
    path: '/signInSignUpComponent',
    name: 'SignInSignUpComponent',
    component: SignInSignUpComponent
  },
  // Left & Right Aderts starts here
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
