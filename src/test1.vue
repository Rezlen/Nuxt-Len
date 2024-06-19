<template>
<IonGrid>
  <IonCol class="WholeDiv">
    <!-- Hamburger Icon, visible only on mobile -->
    <IonRow @click="toggleMenu" class="hamburger-menu">
      ☰ SideMenu
    </IonRow>

    <!-- Sidebar Menu -->
    <IonRow :class="{ 'sidebar-menu': true, 'sidebar-menu-hidden': !isMenuOpen }">
      <IonItem>Menu1</IonItem>
      <IonItem>Menu2</IonItem>
      <IonItem>Menu3</IonItem>
      <IonItem>Menu4</IonItem>
      <IonItem>Menu5</IonItem>
    </IonRow>
  </IonCol>
</IonGrid>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonGrid, IonItem } from '@ionic/vue';

export default defineComponent({
  name: 'ProfileLeftSideBarComponent',
  components: {
    IonGrid,
    IonItem,
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
}

.sidebar-menu {
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow-y: auto; /* Ensure the content is scrollable */
  width: fit-content; /* Make width fit-content */
  height: fit-content; /* Make height fit-content */
  position: fixed; 
  z-index: 1099; /* Ensure it stays below the hamburger menu */
  background-color: red;
  top: 60px; /* Adjust top position to be below the hamburger menu */
  left: 10px;
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
