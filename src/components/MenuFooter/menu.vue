<template>
  <ion-page>
    <!-- Mobile view header -->
    <ion-header :translucent="true" v-if="isMobile">
      <ion-toolbar>
        <ion-buttons slot="start">
          <!-- Toggle button for mobile view -->
          <ion-menu-button :auto-hide="false"></ion-menu-button>
        </ion-buttons>
        <ion-title>London Entrepreneurs Network</ion-title>
        <ion-buttons slot="end">
          <router-link to="/home" routerDirection="forward">
            <img alt="LEN Logo" class="header_logo" height="40" src="/public/favicon.png" />
          </router-link>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <!-- Desktop view: horizontal menu using grid layout -->
      <ion-grid class="desktop-menu" v-if="!isMobile">
<ion-row class="MainMenuRow">
        <!-- Column for LEN Logo -->
        <ion-col class="LogoCol" >
          <router-link to="/home" routerDirection="forward">
            <img alt="LEN Logo" class="header_logo" height="40" src="/public/favicon.png" />
          </router-link>
        </ion-col>

        <ion-col class="MainMenuCol" >

          <!-- Menu items -->
          <ion-row class="MenuRow" v-for="menu in menus" :key="menu.title">
            <router-link :to="menu.path">
              <ion-title >{{ menu.title }}</ion-title>
            </router-link>
            <ion-list class="submenu" >
              <ion-item v-for="submenu in menu.submenus" :key="submenu.title" :router-link="submenu.path">
                <ion-label>{{ submenu.title }}</ion-label>
              </ion-item>
            </ion-list>
          </ion-row>
        </ion-col>
</ion-row>
      </ion-grid>

      <!-- Mobile view: side menu -->
      <ion-menu content-id="main-content" class="mobile-menu" v-if="isMobile">
        <ion-content>
          <ion-list>
            <ion-item v-for="menu in menus" :key="menu.title" @click="toggleSubmenu(menu)">
              <ion-label>{{ menu.title }}</ion-label>
              <ion-list v-if="menu.showSubmenu" class="submenu">
                <ion-item v-for="submenu in menu.submenus" :key="submenu.title" :router-link="submenu.path">
                  <ion-label>{{ submenu.title }}</ion-label>
                </ion-item>
              </ion-list>
            </ion-item>
          </ion-list>
        </ion-content>
      </ion-menu>

      <div id="main-content">
        <!-- Your main content here -->
      </div>
    </ion-content>
  </ion-page>
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

const isMobile = ref(window.innerWidth < 768); // Set initial value based on window width

// Update isMobile value on window resize
window.addEventListener('resize', () => {
  isMobile.value = window.innerWidth < 768;
});

interface Menu {
  title: string;
  path: string;
  submenus?: Array<{ title: string; path: string }>;
  showSubmenu?: boolean;
}

const menus: Menu[] = [
  {
    title: 'Home',
    path: '/home',
  },
  {
    title: 'Businesses & Offers',
    path: '',
    submenus: [
      { title: 'All Businesses Profile', path: '/AllBusinessesProfile' },
      { title: 'All Offers', path: '/AllOffers' },
      { title: 'Best Offers', path: '/BestOffers' },
      { title: 'All Needs', path: '/AllNeeds' },
      { title: 'Advertise For FREE', path: '/AdvertiseForFree' },
    ],
    showSubmenu: false, // Initially hide submenu
  },
  {
    title: 'Events & Shows',
    path: '',
    submenus: [
      { title: 'Events & Shows', path: '/EventShows' },
      { title: 'Exhibitors', path: '/Exhibitors' },
      { title: 'Visitors', path: '/Visitors' },
      { title: 'Exhibiting', path: '/Exhibiting' },
    ],
    showSubmenu: false, // Initially hide submenu
  },
  {
    title: 'FREE Pitching',
    path: '',
    submenus: [
      { title: 'FREE Pitch Reservation', path: '/FreePitchReservation' },
      { title: 'All Pitchers', path: '/AllPitchers' },
      { title: 'One Minute Pitchers', path: '/OneMinutePitchers' },
      { title: 'Three Minutes Pitchers', path: '/ThreeMinutesPitchers' },
      { title: 'Investment Pitchers', path: '/InvestmentPitchers' },
    ],
    showSubmenu: false, // Initially hide submenu
  },
  {
    title: 'Investors & Investees',
    path: '',
    submenus: [
      { title: 'Apply For Investment', path: '/ApplyForInvestment' },
      { title: 'Provide Investment', path: '/ProvideInvestment' },
      { title: 'Investors', path: '/Investors' },
      { title: 'Investees', path: '/Investees' },
    ],
    showSubmenu: false, // Initially hide submenu
  },
  {
    title: 'Feeds',
    path: '/Feeds',
  },
  {
    title: 'VIP Membership',
    path: '/VIPMembership',
  },
  {
    title: 'More Options',
    path: '',
    submenus: [
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
    showSubmenu: false, // Initially hide submenu
  },
  {
    title: 'Subscribe',
    path: '',
  },
  {
    title: 'SignIn/Up',
    path: '/SignInUp',
  },
  // Add more menu items and submenus as needed
];

function toggleSubmenu(menu: Menu) {
  menu.showSubmenu = !menu.showSubmenu;
}
</script>

<style scoped>
.desktop-menu {
  background-color: aqua;
}

.MainMenuRow {
}

.LogoCol {
  text-align: left;
}

.MainMenuCol {
  display: flex;
  justify-content: flex-end;
  padding: 0; /* Ensure no padding is added here */
}

.MenuRow {
  display: flex;
  align-items: center;
  margin: 0; /* Remove margin */
  padding: 5px; /* Remove padding */
}

.submenu {
  position: absolute;
  top: 100%;
  display: none;
  z-index: 10;
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
  margin: 0; /* Remove margin */
  padding: 0; /* Remove padding */
}
</style>

