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

    <!-- Mobile view menu -->
    <ion-menu side="start" menu-id="main-menu" content-id="main-content" v-if="isMobile">
      <ion-content>
        <ion-list>
          <ion-item v-for="(menu, index) in menus" :key="index">
            <ion-label @click="toggleSubMenu(index)">{{ menu.title }}</ion-label>
            <ion-list v-show="menu.showSubMenu">
              <ion-item v-for="(sub, subIndex) in menu.subMenus" :key="subIndex">
                <ion-label>{{ sub }}</ion-label>
              </ion-item>
            </ion-list>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>

    <ion-content id="main-content">
      <!-- Desktop view: horizontal menu using grid layout -->
      <ion-grid class="desktop-menu-grid" v-if="!isMobile">
        <ion-row class="MenuRowMain" justify-content-center>
          <!-- Column for LEN Logo -->
          <ion-col class="LogoCol1" size="auto">
            <router-link to="/home" routerDirection="forward">
              <img alt="LEN Logo" class="header_logo" height="40" src="/public/favicon.png" />
            </router-link>
          </ion-col>
          <ion-col class="AllMenuColForBackgroundColor ">
            <ion-col class="MainMenu ColHome2">Home</ion-col>
            <ion-col class="MainMenu ColBusinessesOffers3">Businesses & Offers V
              <ion-row class="SubMenu SubMenuColBusinessesOffers3">All Businesses Profile</ion-row>
              <ion-row class="SubMenu SubMenuColBusinessesOffers3">All Offers</ion-row>
              <ion-row class="SubMenu SubMenuColBusinessesOffers3">Best Offers</ion-row>
              <ion-row class="SubMenu SubMenuColBusinessesOffers3">All Needs</ion-row>
              <ion-row class="SubMenu SubMenuColBusinessesOffers3">Advertise For FREE</ion-row>
            </ion-col>
            <ion-col class="MainMenu ColEventShows4">Events & Shows V
              <ion-row class="SubMenu">Events & Shows</ion-row>
              <ion-row class="SubMenu">Exhibitors</ion-row>
              <ion-row class="SubMenu">Visitors</ion-row>
              <ion-row class="SubMenu">Exhibiting</ion-row>
            </ion-col>
            <ion-col class="MainMenu ColFreePitching5">FREE Pitching V
              <ion-row class="SubMenu">FREE Pitch Reservation</ion-row>
              <ion-row class="SubMenu">All Pitchers</ion-row>
              <ion-row class="SubMenu">One Minute Pitchers</ion-row>
              <ion-row class="SubMenu">Three Minutes Pitchers</ion-row>
              <ion-row class="SubMenu">Investment Pitchers</ion-row>
            </ion-col>
            <ion-col class="MainMenu ColInvestorsInvestees6">Investors & Investees V
              <ion-row class="SubMenu">Apply For Investment</ion-row>
              <ion-row class="SubMenu">Provide Investment</ion-row>
              <ion-row class="SubMenu">Investors</ion-row>
              <ion-row class="SubMenu">Investees</ion-row>
            </ion-col>
            <ion-col class="MainMenu ColFeeds7">Feeds</ion-col>
            <ion-col class="MainMenu ColVIPMembership8">VIP Membership</ion-col>
            <ion-col class="MainMenu ColMoreOptions9">More Options V
              <ion-row class="SubMenu">Rewards & Discounts</ion-row>
              <ion-row class="SubMenu">Adverts</ion-row>
              <ion-row class="SubMenu">Shares</ion-row>
              <ion-row class="SubMenu">Sponsorship/Partnership Options</ion-row>
              <ion-row class="SubMenu">Sponsors/Partners</ion-row>
              <ion-row class="SubMenu">Services/Products Exchange</ion-row>
              <ion-row class="SubMenu">About Us</ion-row>
              <ion-row class="SubMenu">Gallery</ion-row>
              <ion-row class="SubMenu">Business Advice</ion-row>
              <ion-row class="SubMenu">Contact Us</ion-row>
              <ion-row class="SubMenu">Blogs</ion-row>
              <ion-row class="SubMenu">Groups</ion-row>
            </ion-col>
            <ion-col class="MainMenu ColSubscribe10">Subscribe</ion-col>
            <ion-col class="MainMenu ColSignIn/Up11">SignIn/Up</ion-col>
          </ion-col>
        </ion-row>
      </ion-grid>

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
const menus = ref([
  {
    title: 'Home',
    subMenus: [],
    showSubMenu: false,
  },
  {
    title: 'Businesses & Offers V',
    subMenus: ['All Businesses Profile', 'All Offers', 'Best Offers', 'All Needs', 'Advertise For FREE'],
    showSubMenu: false,
  },
  {
    title: 'Events & Shows V',
    subMenus: ['Events & Shows', 'Exhibitors', 'Visitors', 'Exhibiting'],
    showSubMenu: false,
  },
  {
    title: 'FREE Pitching V',
    subMenus: ['FREE Pitch Reservation', 'All Pitchers', 'One Minute Pitchers', 'Three Minutes Pitchers', 'Investment Pitchers'],
    showSubMenu: false,
  },
  {
    title: 'Investors & Investees V',
    subMenus: ['Apply For Investment', 'Provide Investment', 'Investors', 'Investees'],
    showSubMenu: false,
  },
  {
    title: 'Feeds',
    subMenus: [],
    showSubMenu: false,
  },
  {
    title: 'VIP Membership',
    subMenus: [],
    showSubMenu: false,
  },
  {
    title: 'More Options V',
    subMenus: ['Rewards & Discounts', 'Adverts', 'Shares', 'Sponsorship/Partnership Options', 'Sponsors/Partners', 'Services/Products Exchange', 'About Us', 'Gallery', 'Business Advice', 'Contact Us', 'Blogs', 'Groups'],
    showSubMenu: false,
  },
  {
    title: 'Subscribe',
    subMenus: [],
    showSubMenu: false,
  },
  {
    title: 'SignIn/Up',
    subMenus: [],
    showSubMenu: false,
  },
]);

const toggleSubMenu = (index: number) => {
  menus.value[index].showSubMenu = !menus.value[index].showSubMenu;
};

// Update isMobile value on window resize
window.addEventListener('resize', () => {
  isMobile.value = window.innerWidth < 768;
});
</script>

<style scoped>
.MainMenu {
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  padding: 7px 10px;
}

.SubMenu {
  display: none;
  background-color: #e75b5b; /* Background color for submenus */
  padding: 10px 5px;
  margin: 0;
}

.MainMenu:hover {
  display: block; /* Show submenus on hover */
  background-color: #e75b5b;
  border: #0f0f0c solid 1px;
}

.MainMenu:hover .SubMenu {
  display: block; /* Show submenus on hover */
}

.AllMenuColForBackgroundColor {
  display: flex;
  justify-content: end;
}

.AllMenuColForBackgroundColor .MainMenu {
  width: fit-content;
  flex: 0 0 auto; /* Default flex behavior */
  flex-shrink: 0; /* Prevent shrinking */
}

/* Responsive styles */
@media (min-width: 768px) {
  .desktop-menu {
    display: block;
  }

  .mobile-menu {
    display: none;
  }
}
</style>
