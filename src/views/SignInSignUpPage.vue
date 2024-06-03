<template>
  <div class="menu-container" @click.self="closeMobileMenu">
    <ion-menu side="start" menu-id="main-menu" :content-id="contentId" type="overlay">
      <ion-header>
        <ion-toolbar>
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-item-group v-for="(menu, index) in menus" :key="index">
            <ion-item button @click="toggleSubMenu(index)">
              {{ menu.title }}
            </ion-item>
            <ion-list v-if="isMobileView && menu.open || !isMobileView">
              <ion-item v-for="(submenu, subIndex) in menu.submenus" :key="subIndex">
                {{ submenu }}
              </ion-item>
            </ion-list>
          </ion-item-group>
        </ion-list>
      </ion-content>
    </ion-menu>
    <ion-button @click="toggleMobileMenu" expand="full" fill="clear" class="menu-toggle">
      ☰
    </ion-button>
    <div :id="contentId" class="menu-content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MenuComponent',
  setup() {
    const isMobileView = ref(false);
    const menus = ref([
      { title: 'Menu 1', submenus: ['Submenu 1-1', 'Submenu 1-2'], open: false },
      { title: 'Menu 2', submenus: ['Submenu 2-1', 'Submenu 2-2'], open: false },
    ]);
    const contentId = ref('main-content');

    const toggleMobileMenu = () => {
      const menu = document.querySelector('ion-menu');
      if (menu) {
        menu.isOpen().then(isOpen => {
          menu.setOpen(!isOpen);
          isMobileView.value = !isOpen;
        });
      }
    };

    const closeMobileMenu = () => {
      const menu = document.querySelector('ion-menu');
      if (menu && isMobileView.value) {
        menu.setOpen(false);
        isMobileView.value = false;
      }
    };

    const toggleSubMenu = (index: number) => {
      if (isMobileView.value) menus.value[index].open = !menus.value[index].open;
    };

    return {
      isMobileView,
      menus,
      toggleMobileMenu,
      closeMobileMenu,
      toggleSubMenu,
      contentId,
    };
  },
});
</script>

<style scoped>
.menu-container {
  position: relative;
}

.menu-toggle {
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 24px;
  cursor: pointer;
}

.menu-content {
  min-height: 100vh;
  padding: 0;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }
}
</style>
