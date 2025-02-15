<template>
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
  <IonGrid id="main-content">
    <!-- Mobile view header -->
    <IonRow v-if="isMobile">
      <IonCol>
        <IonHeader :translucent="true">
          <IonToolbar>
            <IonButtons slot="start">
              <!-- Toggle button for mobile view -->
              <IonMenuButton :auto-hide="false"></IonMenuButton>
            </IonButtons>
            <IonTitle>London Entrepreneurs Network</IonTitle>
            <IonButtons slot="end">
              <RouterLink to="/home" routerDirection="forward">
                <img alt="LEN Logo" height="40" src="/favicon.png" />
              </RouterLink>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
      </IonCol>
    </IonRow>

    <!-- Desktop view: horizontal menu using grid layout -->
    <IonRow v-if="!isMobile">
      <IonCol>
        <IonGrid class="desktop-menu">
          <IonRow class="MainMenuRow">
            <!-- Column for LEN Logo -->
            <IonCol class="LogoCol">
              <RouterLink to="/home" routerDirection="forward">
                <img alt="LEN Logo" height="60" src="/favicon.png" />
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
      </IonCol>
    </IonRow>
  </IonGrid>
</template>

<script setup lang="ts">
import {
  IonGrid,
  IonRow,
  IonCol,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonItem,
  IonLabel,
  IonMenu,
  IonMenuButton,
  IonContent,
  IonButtons
} from '@ionic/vue';
import { ref, watch, onMounted, onUnmounted } from 'vue';
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
    title: 'Businesses & Offers⌄',
    path: '/BizOfferNeedPage',
    subMenus: [
      { title: 'All Businesses Profile', path: '/BizOfferNeedPage' },
      { title: 'All Offers', path: '/BizOfferNeedPage' },
      { title: 'Best Offers', path: '/BizOfferNeedPage' },
      { title: 'All Needs', path: '/BizOfferNeedPage' },
      { title: 'Advertise For FREE', path: '/BizOfferNeedPage' },
    ],
    showSubMenus: false, // Initially hide submenu
  },
  {
    title: 'Events & Shows⌄',
    path: '/EventsShowsPage',
    subMenus: [
      { title: 'Events & Shows', path: '/EventsShowsPage' },
      { title: 'Exhibitors', path: '/EventsShowsPage' },
      { title: 'Visitors', path: '/EventsShowsPage' },
      { title: 'Exhibiting', path: '/EventsShowsPage' },
    ],
    showSubMenus: false, // Initially hide submenu
  },
  {
    title: 'FREE Pitching⌄',
    path: '/FreePitchingsPage',
    subMenus: [
      { title: 'FREE Pitch Reservation', path: '/FreePitchingsPage' },
      { title: 'All Pitchers', path:'/FreePitchingsPage'},
      { title: 'One Minute Pitchers', path: '/FreePitchingsPage' },
      { title: 'Three Minutes Pitchers', path: '/FreePitchingsPage' },
      { title: 'Investment Pitchers', path: '/FreePitchingsPage' },
    ],
    showSubMenus: false, // Initially hide submenu
  },
  {
    title: 'Investors & Investees⌄',
    path: 'InvestorsInvesteesPage',
    subMenus: [
      { title: 'Apply For Investment', path: '/InvestorsInvesteesPage' },
      { title: 'Provide Investment', path: '/InvestorsInvesteesPage' },
      { title: 'Investors', path: '/InvestorsInvesteesPage' },
      { title: 'Investees', path: '/InvestorsInvesteesPage' },
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
    title: 'More Options⌄',
    path: '',
    subMenus: [
      { title: 'Rewards & Discounts', path: '/RewardDiscountPage' },
      { title: 'Adverts', path: '/AdvertsPage' },
      { title: 'Shares', path: '/SharesPage' },
      { title: 'Sponsorship/Partnership Options', path: '/SponsorsPartnershipPage' },
      { title: 'Sponsors/Partners', path: '/SponsorsPartnershipPage' },
      { title: 'Services/Products Exchange', path: '/ServicesProductsExchange' },
      { title: 'About Us', path: '/AboutUsPage' },
      { title: 'Gallery', path: '/Gallery' },
      { title: 'Business Advice', path: '/CEOBusinessAdvicePage' },
      { title: 'Contact Us', path: '/ContactUsPage' },
      { title: 'Blogs', path: '/Blogs' },
      { title: 'Groups', path: '/Groups' },
      { title: 'FAQ', path: '/FAQPage' },

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
    path: '/SignInSignUpPage',
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
const updateIsMobile = () => {
  isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
  window.addEventListener('resize', updateIsMobile);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateIsMobile);
});



</script>

<style scoped>
ion-grid {
  margin: 0;
  padding: 0;
}

.desktop-menu {
  /* background-color: aqua; */
  margin: 0;
  padding: 0;
}

.MainMenuRow,
.LogoCol,
.MainMenuCol,
.MenuRow,
.submenu,
.MenuRow ion-title {
  margin: 0;
  padding: 0;
}

.MainMenuCol {
  display: flex;
  flex-direction: row;
}

.MenuRow {
  display: flex;
  align-items: center;
  padding: 5px;
}

.MenuRow a {
  text-decoration: none;
}

.submenu {
  position: absolute;
  top: 100%;
  display: none;
  z-index: 1000;
  cursor: pointer;
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
  border: 1px solid #ddd;
}

.MenuRow ion-title {
  font-family: sans-serif;
  font-size: 16px;
  color: rgb(5, 2, 2);
  text-decoration: none;
}
</style>
