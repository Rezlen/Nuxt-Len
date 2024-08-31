<template>
  <IonGrid>
    <!-- This is the row container for everything -->
    <IonRow class="MainRow">
      <!-- Section For All Middle Content of the page -->
      <IonCol class="allContentCol">

        <IonRow class="CenterPositions titleRow">
          <h2 class="CenterPositions titleRow">Advertise in 4 ways:</h2>
          <h6 class="CenterPositions titleRow">1. Advertise in 'Left' or 'Right' of each page 2. Pin your 'Offers' 3. Pin your 'Needs' 4. Pin your 'Mini Profiles'</h6>
        </IonRow>



        <IonRow class="imagesRow">
          <IonCol class="adImages leftRightImage">
            <img src="/src/views/WebAssets/leftRightAdverts.png" height="400px" alt="leftRight Advert Image">
            <h6>Advertise in 'Left' or 'Right' of pages.</h6>
            <h7>You choose any of the 8 locations for your advert and this is where your 'Adverts' will be shown to people.</h7>
            <IonButton expand="block">Choose</IonButton>
          </IonCol>
          <IonCol class="adImages OfferNeedPinImage">
            <img src="/src/views/WebAssets/offreNeedPin.png" height="400px" alt="leftRight Advert Image">
            <h6>Pin your 'Offers' or 'Needs'</h6>
            <h7>You choose any of the 2 locations for your 'Offers' or 'Needs' and this is where your 'Adverts' will be shown to people.</h7>
            <IonButton expand="block">Choose</IonButton>
          </IonCol>
          <IonCol class="adImages miniProfileImage">
            <img src="/src/views/WebAssets/miniProfilePin.png" height="400px" alt="leftRight Advert Image">
            <h6>Pin your 'Mini-Profiles'</h6>
            <h9>You choose any of the 4 locations for your 'Mini-profiles' and this is where your 'Adverts' will be shown to people.</h9>
            <IonButton expand="block">Choose</IonButton>
          </IonCol>
        </IonRow>




        <IonRow class="advanceAdvertising">test</IonRow>
      </IonCol>


      <!-- Section to display all stat & costings on advert section -->
       <IonCol class="statCostCol" >
        <IonRow @click="toggleMenu" class="Sidebar"> ☰ Sidebar </IonRow>
        <IonRow :class="{'sidebar-menu': true,'sidebar-menu-hidden': !isMenuOpen,}">
          test
        </IonRow>
      </IonCol>


    </IonRow>
      

      </IonGrid>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonGrid, IonRow, IonCol, IonContent, IonSegment, IonSegmentButton, IonButton } from '@ionic/vue';

export default defineComponent({
  name: 'SimpleAdvertisingComponent',
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonContent,
    IonSegment,
    IonSegmentButton,
    IonButton,

  },
  setup() {
    const selectedTab = ref<string>('Marketing'); // Initialize with the default tab
    const isMenuOpen = ref(false);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    return {
      selectedTab,
      isMenuOpen,
      toggleMenu,
    };
  },
});
</script>


<style scoped>
  * {
    border: 1px solid pink;
  }
    /* Updated for new tab names and mobile responsiveness */
    ion-grid {
      width: 100%;
    }
    .titleRow  {
      color: white;
      background-color: rgb(108, 112, 230);

    }
    .titleRow h2 {
      font-weight:  bold;
    }

    .adImages {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      /* align-content: center; */
      text-align: center;
    }
    .adImages h6 {
      font-weight: bold;
    }

    .CenterPositions {
      display: flex;
      justify-content: center;
      align-items: center;
      /* align-content: center; */
      text-align: center;
      flex-direction: column;
    }
    .statCostCol {
      max-width: 20%;
    }


  /* This makes the sidebar floating beautifully */


  @media (max-width: 600px) {
    .allContentCol {
      /* display: flex; */
      /* flex-direction: column; */
      min-width: 100%;
    }
    .adImages{
    min-width: 100%;
    }
    .Sidebar {
      display: flex; /* Show hamburger menu on mobile */
    }
    .sidebar-menu.sidebar-menu-hidden {
      display: none; /* Show sidebar when menu is open */
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
  }
</style>
