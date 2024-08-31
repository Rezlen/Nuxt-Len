<template>
  <IonPage>
    <IonContent>
      <IonGrid>
        <!-- Menu Section -->
        <!-- Social Media Section -->
        <IonRow class="bordered-section">
          <MenuComponent />
        </IonRow>
        <IonRow class="bordered-section">
          <SocialMediaBarComponent />
        </IonRow>

        <!-- /* Floating sidebar starts here ##################################################### */ -->
        <!-- There is an exportable component here as well; D:\Ionics\nuxt-len\src\components\AdminComponents\AdminEventsComponents\AdminLeftSideBarComponent.vue -->
        <IonCol class="WholeDiv">
          <!-- Hamburger Icon, visible only on mobile -->
          <IonRow @click="toggleMenu" class="Sidebar"> ☰ Sidebar </IonRow>

          <!-- Sidebar Menu -->
          <IonRow :class="{'sidebar-menu': true,'sidebar-menu-hidden': !isMenuOpen,}">
            <IonRow class="PaddingBorder bold" @click="showComponent('ProfilePublicSectionComponent')">My Account</IonRow>
            <IonRow class="PaddingBorder bold" @click="showComponent('MyRewardsDiscountsComponent')">Reward/Discount: 0%</IonRow>
            <IonRow class="PaddingBorder bold"
              >{Profile Pic}+Upgrade to VIP</IonRow
            >
            <IonRow class="PaddingBorder bold">
              <IonButton fill="solid" class="buyMore bold" size="small"
                >Buy More</IonButton
              >
              <a class="remainingMessageNo">{11} of your 20 </a>monthly messages
              remaining
            </IonRow>
            <IonRow
              class="PaddingBorder bold"
              @click="showComponent('FormProfilePublicSectionComponent')"
              >Edit Profile</IonRow
            >
            <IonRow
              class="PaddingBorder bold"
              @click="showComponent('MyConnectionComponent')"
              >My Connections</IonRow
            >
            <IonRow
              class="PaddingBorder bold"
              @click="showComponent('MessagingComponent')"
              >Messages</IonRow
            >
            <IonRow
              class="PaddingBorder bold"
              @click="showComponent('MyOffersActivityTableComponent')"
              >My Offer</IonRow
            >
            <IonRow
              class="PaddingBorder bold"
              @click="showComponent('MyBestOfferTABsComponent')"
              >My Best Offers</IonRow
            >
            <IonRow
              class="PaddingBorder bold"
              @click="showComponent('MyNeedsActivityTableComponent')"
              >My Need</IonRow
            >
            <IonRow
              class="PaddingBorder bold"
              @click="showComponent('MyPitchingsActivityTableComponent')"
              >My Pitches</IonRow
            >
            <IonRow
              class="PaddingBorder bold"
              @click="showComponent('MyInvestmentApplicationComponent')"
              >My Investment Applications</IonRow
            >
            <IonRow
              class="PaddingBorder bold"
              @click="showComponent('MyInvestmentAdsComponent')"
              >My Investments</IonRow
            >
            <IonRow
              class="PaddingBorder bold"
              @click="showComponent('MembersMyOrderTABsComponent')"
              >My Orders</IonRow
            >
            <IonRow class="PaddingBorder">My Blogs</IonRow>
            <IonRow class="PaddingBorder">My Comments Posts</IonRow>
            <IonRow class="PaddingBorder">My Gallery</IonRow>
            <IonRow class="PaddingBorder">Change Password</IonRow>
            <IonRow class="PaddingBorder">Delete Account</IonRow>
            <IonRow
              class="PaddingBorder bold"
              @click="showComponent('EmailWebsiteNotificationComponent')"
              >Notification Setting</IonRow
            >
            <IonRow class="PaddingBorder">My Groups</IonRow>
            <IonRow class="PaddingBorder">Log Out</IonRow>
          </IonRow>
        </IonCol>

        <!-- <IonRow class="bordered-section PageMainContent">
          <component :is="currentComponent" />
        </IonRow> -->

        <!-- Main Content Section with Adverts and Middle Content -->
        <IonRow class="main-content-row">
          <!-- Left Advert Section -->
          <IonCol size="12" size-md="1.5"  class="bordered-section LeftAdvertComponent">
            <LeftAd1Component />
            <LeftAd2Component />
            <LeftAd3Component />
            <LeftAd4Component />
          </IonCol>

          <!-- Middle Content Section -->
          <IonCol
            size="12"
            size-md="9"
            class="bordered-section SignInSignUpComponent"
          >
            <IonRow class="bordered-section PageMainContent">
              <component :is="currentComponent" />
            </IonRow>
          </IonCol>

          <!-- Right Advert Section -->
          <IonCol
            size="12"
            size-md="1.5"
            class="bordered-section RightAdvertComponent"
          >
            <RightAd1Component />
            <RightAd2Component />
            <RightAd3Component />
            <RightAd4Component />
          </IonCol>
        </IonRow>

        <!-- /* Floating sidebar ends here    @click="showComponent('profiles')"   ##################################################### */ -->

        <!-- Footer Section -->
        <IonRow>
          <IonCol class="bordered-section FooterComponent">
            <FooterComponent />
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonPage>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import { IonPage,IonGrid, IonRow, IonCol, IonContent, IonButton,} from "@ionic/vue";
import MenuComponent from "@/components/6TempComponents/MenuComponent.vue";
import SocialMediaBarComponent from "@/components/6TempComponents/SocialMediaBarComponent.vue";
import LeftAd1Component from "@/components/6TempComponents/LeftRightAds/LeftAd1Component.vue";
import LeftAd2Component from "@/components/6TempComponents/LeftRightAds/LeftAd2Component.vue";
import LeftAd3Component from "@/components/6TempComponents/LeftRightAds/LeftAd3Component.vue";
import LeftAd4Component from "@/components/6TempComponents/LeftRightAds/LeftAd4Component.vue";
import RightAd1Component from "@/components/6TempComponents/LeftRightAds/RightAd1Component.vue";
import RightAd2Component from "@/components/6TempComponents/LeftRightAds/RightAd2Component.vue";
import RightAd3Component from "@/components/6TempComponents/LeftRightAds/RightAd3Component.vue";
import RightAd4Component from "@/components/6TempComponents/LeftRightAds/RightAd4Component.vue";

import ProfilePublicSectionComponent from "@/components/ProfileComponents/ProfilePublicSectionComponent.vue";
import MyRewardsDiscountsComponent from "@/components/MembersMyOrderComponents/MyRewardsDiscountsComponents/MyRewardsDiscountsComponent.vue";
import FormProfilePublicSectionComponent from "@/components/ProfileComponents/FormProfilePublicSectionComponent.vue";
import MessagingComponent from "@/components/MessagingComponents/MessagingComponent.vue";
import MembersMyOrderTABsComponent from "@/components/MembersMyOrderComponents/MembersMyOrderTABsComponent.vue";
import EmailWebsiteNotificationComponent from "@/components/EmailWebsiteNotificationComponents/EmailWebsiteNotificationComponent.vue";
import MyConnectionComponent from "@/components/MyConnectionComponents/MyConnectionComponent.vue";
import MyOffersActivityTableComponent from "@/components/MyOffersNeedsBestOffersComponents/MyOffersActivityTableComponent.vue";
import MyBestOfferTABsComponent from '@/components/MyOffersNeedsBestOffersComponents/MyBestOffersActivityTablesComponents/MyBestOfferTABsComponent.vue';
import MyNeedsActivityTableComponent from "@/components/MyOffersNeedsBestOffersComponents/MyNeedsActivityTableComponent.vue";
import MyInvestmentApplicationComponent from "@/components/MyInvestmentComponents/MyInvestmentApplicationComponent.vue";
import MyInvestmentAdsComponent from "@/components/MyInvestmentComponents/MyInvestmentAdsComponent.vue";
import MyPitchingsActivityTableComponent from "@/components/MyPitchingsComponents/MyPitchingsActivityTableComponent.vue";

import FooterComponent from "@/components/6TempComponents/FooterComponent.vue";

export default defineComponent({
  name: "ProfilePage",
  components: {
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonContent,
    IonButton,
    MenuComponent,
    SocialMediaBarComponent,
    LeftAd1Component,
    LeftAd2Component,
    LeftAd3Component,
    LeftAd4Component,
    RightAd1Component,
    RightAd2Component,
    RightAd3Component,
    RightAd4Component,
    ProfilePublicSectionComponent,
    MyRewardsDiscountsComponent,
    FormProfilePublicSectionComponent,
    MessagingComponent,
    MembersMyOrderTABsComponent,
    EmailWebsiteNotificationComponent,
    MyConnectionComponent,
    MyOffersActivityTableComponent,
    MyNeedsActivityTableComponent,
    MyBestOfferTABsComponent,
    MyInvestmentApplicationComponent,
    MyInvestmentAdsComponent,
    MyPitchingsActivityTableComponent,

    FooterComponent,
  },
  setup() {
    const isMenuOpen = ref(false);
    const currentComponent: Ref<null | any> = ref(null); // To store the current component to display

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const showComponent = (componentName: string) => {
      if (componentName === "ProfilePublicSectionComponent") {
        currentComponent.value = ProfilePublicSectionComponent;
      }
      if (componentName === "MyRewardsDiscountsComponent") {
        currentComponent.value = MyRewardsDiscountsComponent;
      }
      if (componentName === "FormProfilePublicSectionComponent") {
        currentComponent.value = FormProfilePublicSectionComponent;
      }
      if (componentName === "MyConnectionComponent") {
        currentComponent.value = MyConnectionComponent;
      }
      if (componentName === "MessagingComponent") {
        currentComponent.value = MessagingComponent;
      }
      if (componentName === "EmailWebsiteNotificationComponent") {
        currentComponent.value = EmailWebsiteNotificationComponent;
      }
      if (componentName === "MembersMyOrderTABsComponent") {
        currentComponent.value = MembersMyOrderTABsComponent;
      }
      if (componentName === "MyOffersActivityTableComponent") {
        currentComponent.value = MyOffersActivityTableComponent;
      }
      if (componentName === "MyNeedsActivityTableComponent") {
        currentComponent.value = MyNeedsActivityTableComponent;
      }
      if (componentName === "MyInvestmentApplicationComponent") {
        currentComponent.value = MyInvestmentApplicationComponent;
      }
      if (componentName === "MyInvestmentAdsComponent") {
        currentComponent.value = MyInvestmentAdsComponent;
      }
      if (componentName === "MyBestOfferTABsComponent") {
        currentComponent.value = MyBestOfferTABsComponent;
      }
      if (componentName === "MyPitchingsActivityTableComponent") {
        currentComponent.value = MyPitchingsActivityTableComponent;
      }

      // Add other cases as needed for other menu items
    };

    return {
      isMenuOpen,
      toggleMenu,
      currentComponent,
      showComponent,
    };
  },
});
</script>

<style scoped>
.bordered-section {
  padding: 0;
  margin: 0;
  z-index: 1;
  /* gap: 100px; */
}

@media (min-width: 768px) {
  .main-content-row ion-col {
    margin-bottom: 0; /* Reset margin for larger screens */
  }
}

/* Floating sidebar starts here ##################################################### */

.Sidebar {
  font-size: 20px;
  cursor: pointer;
  padding: 10px;
  position: fixed; /* Keep hamburger menu fixed floating */
  z-index: 1100; /* Ensure it stays on top of the sidebar */
  background-color: yellow;
  top: 10px; /* Adjust positioning as needed */
  left: 10px; /* Adjust positioning as needed */
  margin-top: 40px;
}

.MainOptions,
.UpgradeVIP {
  font-weight: bold;
  /* padding: 5px; */
}
.MessageRemaining {
  font-size: 13px;
}
.buyMore {
  --background: #7cdd06;
}
.remainingMessageNo {
  color: red;
  font-weight: bold;
}
.PaddingBorder {
  border-bottom: 1px gray solid;
  padding: 3px 0;
  cursor: pointer;
}

.sidebar-menu {
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow-y: auto; /* Ensure the content is scrollable */
  width: 180px; /* Make width fit-content */
  height: fit-content; /* Make height fit-content */
  position: fixed;
  z-index: 1099; /* Ensure it stays below the hamburger menu */
  background-color: white;
  top: 60px; /* Adjust top position to be below the hamburger menu */
  left: 10px;
  margin-top: 40px;
  box-shadow: 0 4px 8px rgba(142, 15, 226, 1.2); /* X-offset, Y-offset, blur radius, and color */
  font-size: 14px;
}

.sidebar-menu-hidden {
  display: none; /* Hide sidebar by default on mobile */
}
/* This makes the sidebar floating beautifully */
.floating-sidebar {
  position: absolute;
  /* z-index: 1000; */ /* Ensure it is above other content */
}
.bold {
  font-weight: bold;
}
@media (max-width: 600px) {
  .Sidebar {
    display: flex; /* Show hamburger menu on mobile */
  }
  .RightAdvertComponent,
  .LeftAdvertComponent {
    display: none;
  }
  .sidebar-menu.sidebar-menu-hidden {
    display: none; /* Show sidebar when menu is open */
  }
  .ion-item {
    white-space: normal; /* Allow text to wrap */
    word-wrap: break-word;
  }
}

/* Floating SideBar end here ##################################################### */
</style>
