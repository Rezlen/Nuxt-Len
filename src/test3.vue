<template>
  <div>
    <!-- Hamburger Icon, visible only on mobile -->
    <div @click="toggleMenu" class="hamburger-menu">
      ☰
    </div>

    <!-- Sidebar Menu -->
    <IonGrid :class="{ 'sidebar-menu': true, 'sidebar-menu-hidden': !isMenuOpen }">
      <IonItem>Menu1</IonItem>
      <IonItem>Menu2</IonItem>
      <IonItem>Menu3</IonItem>
      <IonItem>Menu4</IonItem>
      <IonItem>Menu5</IonItem>
    </IonGrid>
  </div>
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
  font-size: 30px;
  cursor: pointer;
  padding: 10px;
  position: fixed; /* Keep hamburger menu fixed */
  top: 10px;
  left: 10px;
  z-index: 1100; /* Ensure it stays on top of the sidebar */
}

.sidebar-menu {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 10px;
  overflow-y: auto; /* Ensure the content is scrollable */
  width: fit-content; /* Make width fit-content */
  height: fit-content; /* Make height fit-content */
  margin-top: 50px; /* Add margin to avoid overlapping with the hamburger menu */
}

.sidebar-menu-hidden {
  display: none; /* Hide sidebar by default on mobile */
}

@media (max-width: 600px) {
  .hamburger-menu {
    display: block; /* Show hamburger menu on mobile */
  }

  .sidebar-menu {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1000;
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
