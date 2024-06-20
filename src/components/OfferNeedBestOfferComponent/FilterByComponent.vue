<template>
  <IonGrid>
    <IonCol class="WholeDiv">
      <!-- Hamburger Icon, visible only on mobile -->
      <IonRow @click="toggleMenu" class="hamburger-menu">
        ☰ FilterBy
      </IonRow>

      <!-- Sidebar Menu -->
      <IonRow :class="{ 'sidebar-menu': true, 'sidebar-menu-hidden': isMenuOpen }">
        
        
        <IonSelect  aria-label="Fruit" interface="popover" placeholder="Business Revenue(33B)">
          <IonSelectOption value="apples">Highest</IonSelectOption>
          <IonSelectOption value="oranges">Lowest</IonSelectOption>
        </IonSelect>
        <IonSelect  aria-label="Fruit" interface="popover" placeholder="Salary(33M)">
          <IonSelectOption value="apples">Highest</IonSelectOption>
          <IonSelectOption value="oranges">Lowest</IonSelectOption>
        </IonSelect>
        <IonSelect  aria-label="Fruit" interface="popover" placeholder="Business Category(12K)">
          <IonSelectOption value="apples">Highest</IonSelectOption>
          <IonSelectOption value="oranges">Lowest</IonSelectOption>
        </IonSelect>
        <IonSelect  aria-label="Fruit" interface="popover" placeholder="Cities">
          <IonSelectOption value="apples">Highest</IonSelectOption>
          <IonSelectOption value="oranges">Lowest</IonSelectOption>
        </IonSelect>
        <IonSelect  aria-label="Fruit" interface="popover" placeholder="Countries">
          <IonSelectOption value="apples">Highest</IonSelectOption>
          <IonSelectOption value="oranges">Lowest</IonSelectOption>
        </IonSelect>
        <IonSelect  aria-label="Fruit" interface="popover" placeholder="Job Position">
          <IonSelectOption value="apples">Highest</IonSelectOption>
          <IonSelectOption value="oranges">Lowest</IonSelectOption>
        </IonSelect>
        <IonSelect  aria-label="Fruit" interface="popover" placeholder="Membership Type">
          <IonSelectOption value="apples">Highest</IonSelectOption>
          <IonSelectOption value="oranges">Lowest</IonSelectOption>
        </IonSelect>        
        <IonSelect  aria-label="Fruit" interface="popover" placeholder="Needs">
          <IonSelectOption value="apples">Most Popular Needs</IonSelectOption>
          <IonSelectOption value="oranges">Least Popular Needs</IonSelectOption>
          <IonSelectOption value="apples">Most Seen Needs</IonSelectOption>
          <IonSelectOption value="oranges">Least Seen Needs</IonSelectOption>
          <IonSelectOption value="apples">Most ReNewed Needs</IonSelectOption>
          <IonSelectOption value="oranges">Least ReNewed Needs</IonSelectOption>
          <IonSelectOption value="apples">Whom Provided Most Needs</IonSelectOption>
          <IonSelectOption value="oranges">Whom Provided Least Needs</IonSelectOption>
          <IonSelectOption value="apples">Whom Requested Most Needs</IonSelectOption>
          <IonSelectOption value="oranges">Whom Requested Least Needs</IonSelectOption>
        </IonSelect>
        <IonSelect  aria-label="Fruit" interface="popover" placeholder="Offers">
          <IonSelectOption value="apples">Most Popular Offers</IonSelectOption>
          <IonSelectOption value="oranges">Least Popular Offers</IonSelectOption>
          <IonSelectOption value="apples">Most Seen Offers</IonSelectOption>
          <IonSelectOption value="oranges">Least Seen Offers</IonSelectOption>
          <IonSelectOption value="apples">Most ReNewed Offers</IonSelectOption>
          <IonSelectOption value="oranges">Least ReNewed Offers</IonSelectOption>
          <IonSelectOption value="apples">Whom Provided Most Offers</IonSelectOption>
          <IonSelectOption value="oranges">Whom Provided Least Offers</IonSelectOption>
          <IonSelectOption value="apples">Whom Requested Most Offers</IonSelectOption>
          <IonSelectOption value="oranges">Whom Requested Least Offers</IonSelectOption>
        </IonSelect>
        <IonSelect  aria-label="Fruit" interface="popover" placeholder="Exhibits In Business Shows">
          <IonSelectOption value="apples">Highest</IonSelectOption>
          <IonSelectOption value="oranges">Lowest</IonSelectOption>
        </IonSelect>
        <IonSelect  aria-label="Fruit" interface="popover" placeholder="Visits In Business Shows">
          <IonSelectOption value="apples">Highest</IonSelectOption>
          <IonSelectOption value="oranges">Lowest</IonSelectOption>
        </IonSelect>
        <IonSelect  aria-label="Fruit" interface="popover" placeholder="Profile Visites">
          <IonSelectOption value="apples">Highest</IonSelectOption>
          <IonSelectOption value="oranges">Lowest</IonSelectOption>
        </IonSelect>
        <IonSelect  aria-label="Fruit" interface="popover" placeholder="Age">
          <IonSelectOption value="apples">Highest</IonSelectOption>
          <IonSelectOption value="oranges">Lowest</IonSelectOption>
        </IonSelect>
        <IonSelect  aria-label="Fruit" interface="popover" placeholder="Gender">
          <IonSelectOption value="apples">Highest</IonSelectOption>
          <IonSelectOption value="oranges">Lowest</IonSelectOption>
        </IonSelect>
        <IonSelect  aria-label="Fruit" interface="popover" placeholder="Business Age">
          <IonSelectOption value="apples">Highest</IonSelectOption>
          <IonSelectOption value="oranges">Lowest</IonSelectOption>
        </IonSelect>
        <IonSelect  aria-label="Fruit" interface="popover" placeholder="Joining Date">
          <IonSelectOption value="apples">Highest</IonSelectOption>
          <IonSelectOption value="oranges">Lowest</IonSelectOption>
        </IonSelect>
        <IonSelect  aria-label="Fruit" interface="popover" placeholder="Connections">
          <IonSelectOption value="apples">Highest</IonSelectOption>
          <IonSelectOption value="oranges">Lowest</IonSelectOption>
        </IonSelect>
        <IonSelect  aria-label="Fruit" interface="popover" placeholder="No. of Employees">
          <IonSelectOption value="apples">Highest</IonSelectOption>
          <IonSelectOption value="oranges">Lowest</IonSelectOption>
        </IonSelect>
        <!-- <IonRow class="PaddingBorder " >Log Out</IonRow> -->
       


      </IonRow>
    </IonCol>
  </IonGrid>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonButton, IonGrid, IonItem, IonSelect, IonSelectOption} from '@ionic/vue';

export default defineComponent({
  name: 'FilterByComponent',
  components: {
    IonGrid,
    IonItem,
    IonButton,
    IonSelect,
    IonSelectOption,
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
  width: 180px; /* Make width suitable fro most screens */
  height: 600px; /* Make height fit-screen */
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
    height: 400px; /* Make height visible in shorter screens */

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
