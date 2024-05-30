import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import Login from '../views/Login.vue';
import Profile from '../views/Profile.vue';
import MenuComponent from '@/components/6TempComponents/MenuComponent.vue';
import TemplatePage from '../views/TemplatePage.vue';
import SocialMediaBarComponent from '@/components/6TempComponents/SocialMediaBarComponent.vue';
import FooterComponent from '@/components/6TempComponents/FooterComponent.vue';


 




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
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/menu',
    name: 'MenuComponent',
    component: MenuComponent
  },
  {
    path: '/socialMediaBarComponent',
    name: 'SocialMediaBarComponent',
    component: SocialMediaBarComponent
  },
  {
    path: '/footerComponent',
    name: 'FooterComponent',
    component: FooterComponent
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/templatePage',
    name: 'TemplatePage',
    component: TemplatePage
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
