<template>
  <IonPage>
    <!-- Mobile view header -->
    <IonHeader :translucent="true" v-if="isMobile">
      <IonToolbar>
        <IonButtons slot="start">
          <!-- Toggle button for mobile view -->
          <IonMenuButton :auto-hide="false"></IonMenuButton>
        </IonButtons>
        <IonTitle>London Entrepreneurs Network</IonTitle>
        <IonButtons slot="end">
          <RouterLink to="/home" routerDirection="forward">
            <img alt="LEN Logo" class="header_logo" height="40" src="/public/favicon.png" />
          </RouterLink>
        </IonButtons>
      </IonToolbar>
    </IonHeader>

    <IonContent>
      <!-- Desktop view: horizontal menu using grid layout -->
      <IonGrid class="desktop-menu" v-if="!isMobile">
        <IonRow class="MainMenuRow">
          <!-- Column for LEN Logo -->
          <IonCol class="LogoCol">
            <RouterLink to="/home" routerDirection="forward">
              <img alt="LEN Logo" class="header_logo" height="40" src="/public/favicon.png" />
            </RouterLink>
          </IonCol>

          <IonCol class="MainMenuCol">
            <!-- Menu items -->
            <IonRow class="MenuRow" v-for="menu in menus" :key="menu.title">
              <RouterLink :to="menu.path">
                <IonTitle>{{ menu.title }}</IonTitle>
              </RouterLink>
              <IonList class="submenu">
                <IonItem v-for="submenu in menu.subMenus" :key="submenu.title" :router-link="submenu.path">
                  <IonLabel>{{ submenu.title }}</IonLabel>
                </IonItem>
              </IonList>
            </IonRow>
          </IonCol>
        </IonRow>
      </IonGrid>

      <!-- Mobile view: side menu -->
      <IonMenu content-id="main-content" class="mobile-menu" v-if="isMobile">
        <IonContent>
          <IonList>
            <IonItem v-for="(menu, index) in menus" :key="index">
              <IonLabel @click="toggleSubMenu(index)">{{ menu.title }}</IonLabel>
              <IonList v-if="menu.showSubMenus">
                <IonItem v-for="(submenu, subIndex) in menu.subMenus" :key="subIndex" :router-link="submenu.path">
                  <IonLabel>{{ submenu.title }}</IonLabel>
                </IonItem>
              </IonList>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>

      <div id="main-content">
        <!-- Your main content here -->
      </div>
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonMenu,
  IonButtons,
  IonMenuButton,
} from '@ionic/vue';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

// Reactive data
const isMobile = ref(window.innerWidth < 768);

const menus = ref([
  {
    title: 'Home',
    path: '/home',
    subMenus: [],
    showSubMenus: false,
  },
  {
    title: 'Businesses & Offers V',
    path: '',
    subMenus: [
      { title: 'All Businesses Profile', path: '/AllBusinessesProfile' },
      { title: 'All Offers', path: '/AllOffers' },
      { title: 'Best Offers', path: '/BestOffers' },
      { title: 'All Needs', path: '/AllNeeds' },
      { title: 'Advertise For FREE', path: '/AdvertiseForFree' },
    ],
    showSubMenus: false, // Initially hide submenu
  },
  {
    title: 'Events & Shows V',
    path: '',
    subMenus: [
      { title: 'Events & Shows', path: '/EventShows' },
      { title: 'Exhibitors', path: '/Exhibitors' },
      { title: 'Visitors', path: '/Visitors' },
      { title: 'Exhibiting', path: '/Exhibiting' },
    ],
    showSubMenus: false, // Initially hide submenu
  },
  {
    title: 'FREE Pitching V',
    path: '',
    subMenus: [
      { title: 'FREE Pitch Reservation', path: '/FreePitchReservation' },
      { title: 'All Pitchers', path: '/AllPitchers' },
      { title: 'One Minute Pitchers', path: '/OneMinutePitchers' },
      { title: 'Three Minutes Pitchers', path: '/ThreeMinutesPitchers' },
      { title: 'Investment Pitchers', path: '/InvestmentPitchers' },
    ],
    showSubMenus: false, // Initially hide submenu
  },
  {
    title: 'Investors & Investees V',
    path: '',
    subMenus: [
      { title: 'Apply For Investment', path: '/ApplyForInvestment' },
      { title: 'Provide Investment', path: '/ProvideInvestment' },
      { title: 'Investors', path: '/Investors' },
      { title: 'Investees', path: '/Investees' },
    ],
    showSubMenus: false, // Initially hide submenu
  },
  {
    title: 'Feeds',
    path: '/Feeds',
    subMenus: [],
    showSubMenus: false,
  },
  {
    title: 'VIP Membership',
    path: '/VIPMembership',
    subMenus: [],
    showSubMenus: false,
  },
  {
    title: 'More Options V',
    path: '',
    subMenus: [
      { title: 'Rewards & Discounts', path: '/RewardsDiscounts' },
      { title: 'Adverts', path: '/Adverts' },
      { title: 'Shares', path: '/Shares' },
      { title: 'Sponsorship/Partnership Options', path: '/SponsorshipPartnershipOptions' },
      { title: 'Sponsors/Partners', path: '/SponsorsPartners' },
      { title: 'Services/Products Exchange', path: '/ServicesProductsExchange' },
      { title: 'About Us', path: '/AboutUs' },
      { title: 'Gallery', path: '/Gallery' },
      { title: 'Business Advice', path: '/BusinessAdvice' },
      { title: 'Contact Us', path: '/ContactUs' },
      { title: 'Blogs', path: '/Blogs' },
      { title: 'Groups', path: '/Groups' },
    ],
    showSubMenus: false, // Initially hide submenu
  },
  {
    title: 'Subscribe',
    path: '',
    subMenus: [],
    showSubMenus: false,
  },
  {
    title: 'SignIn/Up',
    path: '/SignInUp',
    subMenus: [],
    showSubMenus: false,
  },
    // More menu items...
]);

// Method to toggle submenu visibility
const toggleSubMenu = (index: number) => {
  menus.value[index].showSubMenus = !menus.value[index].showSubMenus;
};

// Update isMobile value on window resize
window.addEventListener('resize', () => {
  isMobile.value = window.innerWidth < 768;
});
</script>

<style scoped>
.desktop-menu {
  background-color: aqua;
}

.MainMenuCol {
  display: flex;
}

.MenuRow {
  display: flex;
  align-items: center;
  margin: 0; /* Remove margin */ 
  padding: 5px; /*  Remove padding */
}
.MenuRow a { /* Targets router-link undeline elements within elements- to remove the underline  */
  text-decoration: none;
}

.submenu {
  position: absolute;
  top: 100%;
  display: none;
  z-index: 1000; /* High z-index to ensure it appears on top */
}

.submenu ion-label {
  font-size: 14px;
  color: rgb(0, 0, 0);
}

@media (min-width: 768px) {
  .desktop-menu {
    display: block;
  }

  .mobile-menu {
    display: none;
  }
}

.MainMenuCol:hover .submenu {
  display: block;
  background-color: rgb(15, 18, 226);
  border: 1px solid #ddd;
}

.MenuRow ion-title {
  font-family: sans-serif;
  font-size: 13px;
  color: rgb(5, 2, 2);
  text-decoration: none; /* Corrected syntax from "none" to none */
  margin: 0; /* Remove margin from the columns */
  padding: 0; /* Remove padding  from the columns */
}
</style>
