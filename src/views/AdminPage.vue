<template>
  <IonPage>
    <IonContent>
      <IonGrid>
        <!-- Menu Section -->  <!-- Social Media Section -->
        <IonRow class="bordered-section">
          <MenuComponent />
        </IonRow>

        <!-- /* Floating sidebar starts here ##################################################### */ -->
        <!-- There is an exportable component here as well; D:\Ionics\nuxt-len\src\components\AdminComponents\AdminEventsComponents\AdminLeftSideBarComponent.vue -->
        <IonCol class="WholeDiv">
          <!-- Hamburger Icon, visible only on mobile -->
          <IonRow @click="toggleMenu" class="hamburger-menu">
            ☰ Sidebar
          </IonRow>

          <!-- Sidebar Menu -->
          <IonRow :class="{ 'sidebar-menu': true, 'sidebar-menu-hidden': !isMenuOpen }">
            <IonRow class="PaddingBorder MainOptions"@click="showComponent('events')" >Events</IonRow>
            <IonRow class="PaddingBorder UpgradeVIP"> to VIP</IonRow>
            <IonRow class="PaddingBorder MessageRemaining">remaining</IonRow>
            <IonRow class="PaddingBorder">Edit Profile</IonRow>
            <IonRow class="PaddingBorder">My Connections</IonRow>
            <IonRow class="PaddingBorder">Messages</IonRow>
          </IonRow>
        </IonCol>

        <IonRow class="bordered-section PageMainContent">
          <component :is="currentComponent" />
        </IonRow>
        
        <!-- /* Floating sidebar ends here ##################################################### */ -->

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
import { defineComponent, ref, Ref } from 'vue';
import { IonPage, IonGrid, IonRow, IonCol, IonContent, IonButton } from '@ionic/vue';
import MenuComponent from '@/components/6TempComponents/MenuComponent.vue';
import AdminCreateEventTABsComponent from '@/components/AdminComponents/AdminEventsComponents/AdminCreateEventTABsComponent.vue';
import FooterComponent from '@/components/6TempComponents/FooterComponent.vue';

export default defineComponent({
  name: 'AdminPage',
  components: {
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonContent,
    MenuComponent,
    AdminCreateEventTABsComponent,
    FooterComponent,
  },
  setup() {
    const isMenuOpen = ref(false);
    const currentComponent: Ref<null | any> = ref(null); // To store the current component to display

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const showComponent = (componentName: string) => {
      if (componentName === 'events') {
        currentComponent.value = AdminCreateEventTABsComponent;
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
ion-grid {
  padding: 0;
  margin: 0;
}

.bordered-section {
  border: 1px solid #000;
  background-color: lightgray;
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

/* Floating SideBar end here ##################################################### */
</style>



