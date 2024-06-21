<template>
  <IonGrid>
    <IonCol class="WholeDiv">
      <!-- Hamburger Icon, visible only on mobile -->
      <IonRow @click="toggleMenu" class="hamburger-menu">
        ☰ Sidebar
      </IonRow>

      <!-- Sidebar Menu -->
      <IonRow :class="{ 'sidebar-menu': true, 'sidebar-menu-hidden': isMenuOpen }">
        
        <IonRow class="PaddingBorder " >My Account</IonRow>
        <IonRow class="PaddingBorder MainOptions">Reward/Discount: 0%</IonRow>
        <IonRow class="PaddingBorder UpgradeVIP" >{Profile Pic}+Upgrade to VIP</IonRow>
        <IonRow class="PaddingBorder MessageRemaining">
          <IonButton size="small" >Buy More</IonButton> {11} of 20 of your monthly messages remaining
        </IonRow>
        <IonRow class="PaddingBorder " >Edit Profile</IonRow>
        <IonRow class="PaddingBorder " >My Connections</IonRow>
        <IonRow class="PaddingBorder " >Messages</IonRow>
        <IonRow class="PaddingBorder " >My Offer</IonRow>
        <IonRow class="PaddingBorder " >My Best Offers</IonRow>
        <IonRow class="PaddingBorder " >My Need</IonRow>
        <IonRow class="PaddingBorder " >My Pitches</IonRow>
        <IonRow class="PaddingBorder " >My Orders</IonRow>
        <IonRow class="PaddingBorder " >My Blogs</IonRow>
        <IonRow class="PaddingBorder " >My Comments Posts</IonRow>
        <IonRow class="PaddingBorder " >My Galery</IonRow>
        <IonRow class="PaddingBorder " >Change Password</IonRow>
        <IonRow class="PaddingBorder " >Delete Account</IonRow>
        <IonRow class="PaddingBorder " >Notification Setting</IonRow>
        <IonRow class="PaddingBorder " >My Groups</IonRow>
        <IonRow class="PaddingBorder " >Log Out</IonRow>
       


      </IonRow>
    </IonCol>
  </IonGrid>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonButton, IonGrid, IonItem} from '@ionic/vue';

export default defineComponent({
  name: 'AdminLeftSideBarComponent',
  components: {
    IonGrid,
    IonItem,
    IonButton,
  },
  setup() {
    const isMenuOpen = ref(false);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    return {
      isMenuOpen,
      toggleMenu,
    };
  },
});
</script>

<style scoped>
.hamburger-menu {
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
  font-size: 13px;;
}
ion-button{
  font-size: 12px;
  padding: 0;
  margin: 0;
}
.PaddingBorder{
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

@media (max-width: 600px) {
  .hamburger-menu {
    display: block; /* Show hamburger menu on mobile */
  }
  .sidebar-menu {
    display: none; /* Hide sidebar on mobile */
  }
  .sidebar-menu.sidebar-menu-hidden {
    display: flex; /* Show sidebar when menu is open */
  }
  .ion-item {
    white-space: normal; /* Allow text to wrap */
    word-wrap: break-word;
  }
}
</style>
