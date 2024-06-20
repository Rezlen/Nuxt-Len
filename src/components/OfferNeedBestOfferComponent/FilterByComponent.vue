<template>
  <IonGrid>
    
    <IonCol class="WholeDiv">
      <!-- Hamburger Icon, visible only on mobile -->
      <IonRow @click="toggleMenu" class="hamburger-menu">
        ☰ FilterBy
      </IonRow>

      <!-- Sidebar Menu -->
      <IonRow :class="{ 'sidebar-menu': true, 'sidebar-menu-hidden': isMenuOpen }">
        <IonSelect class="Filter"  aria-label="Filter" interface="popover" placeholder="Business Revenue Yearly(33B)">
          <IonSelectOption value="Highest">Highest</IonSelectOption>
          <IonSelectOption value="Lowest">Lowest</IonSelectOption>
          <IonSelectOption value="Highest">£1-£10,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£10,001-£20,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£20,001-£30,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£30,001-£40,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£40,001-£50,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£50,001-£60,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£60,001-£70,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£70,001-£80,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£80,001-£90,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£90,001-£100,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£100,001-£150,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£150,001-£200,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£200,001-£250,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£250,001-£300,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£300,001-£350,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£350,001-£400,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£400,001-£450,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£450,001-£500,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£500,001-£550,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£550,001-£600,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£600,001-£650,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£650,001-£700,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£700,001-£750,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£750,001-£800,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£800,001-£850,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£850,001-£900,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£900,001-£950,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£950,001-£1,000,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£1,000,001-£2,000,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£2,000,001-£3,000,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£3,000,001-£4,000,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£4,000,001-£5,000,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£5,000,001-£6,000,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£6,000,001-£7,000,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£7,000,001-£8,000,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£8,000,001-£9,000,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£9,000,001-£10,000,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£10,000,001-£20,000,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£20,000,001-£30,000,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£30,000,001-£40,000,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£40,000,001-£50,000,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£50,000,001-£60,000,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£60,000,001-£70,000,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£70,000,001-£80,000,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£80,000,001-£90,000,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£90,000,001-£100,000,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£100,000,001-£200,000,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£200,000,001-£300,000,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£300,000,001-£400,000,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£400,000,001-£500,000,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£500,000,001-£600,000,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£600,000,001-£700,000,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£700,000,001-£800,000,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£800,000,001-£900,000,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£900,000,001-£1,000,000,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£1,000,000,000+ (3)</IonSelectOption>

        </IonSelect>
        <IonSelect class="Filter"  aria-label="Filter" interface="popover" placeholder="Salary Yearly(33M)">
          <IonSelectOption value="Highest">Highest</IonSelectOption>
          <IonSelectOption value="Lowest">Lowest</IonSelectOption>
          <IonSelectOption value="Highest">£1-£1,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£1,001-£2,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£2,001-£3,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£3,001-£4,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£4,001-£5,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£5,001-£6,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£6,001-£7,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£7,001-£8,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£8,001-£9,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£9,001-£10,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£10,001-£20,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£20,001-£30,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£30,001-£40,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£40,001-£50,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£50,001-£60,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£60,001-£70,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£70,001-£80,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£80,001-£90,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£90,001-£100,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£100,001-£150,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£150,001-£200,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£200,001-£250,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£250,001-£300,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£300,001-£350,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£350,001-£400,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£400,001-£450,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£450,001-£500,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£500,001-£550,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£550,001-£600,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£600,001-£650,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£650,001-£700,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£700,001-£750,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£750,001-£800,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£800,001-£850,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£850,001-£900,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£900,001-£950,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£950,001-£1,000,000 (3)</IonSelectOption>
          <IonSelectOption value="Lowest">£1,000,000+ (3)</IonSelectOption>
        </IonSelect>
        <IonSelect class="Filter"  aria-label="Filter" interface="popover" placeholder="Business Category(12K)">
          <IonSelectOption value="Highest">Category list</IonSelectOption>
        </IonSelect>
        <IonSelect class="Filter"  aria-label="Filter" interface="popover" placeholder="Cities(12K)">
          <IonSelectOption value="Highest">List Of Cities</IonSelectOption>
        </IonSelect>
        <IonSelect class="Filter"  aria-label="Filter" interface="popover" placeholder="Countries(72)">
          <IonSelectOption value="Highest">List Of Countries</IonSelectOption>
        </IonSelect>
        <IonSelect class="Filter"  aria-label="Filter" interface="popover" placeholder="Job Position(14K)">
          <IonSelectOption value="Highest">Positions List</IonSelectOption>
        </IonSelect>
        <IonSelect class="Filter"  aria-label="Filter" interface="popover" placeholder="Membership Type(33)">
          <IonSelectOption value="Highest">Normal (33)</IonSelectOption>
          <IonSelectOption value="Lowest">VIP (33)</IonSelectOption>
          <IonSelectOption value="Lowest">VVIP (33)</IonSelectOption>
        </IonSelect>        
        <IonSelect class="Filter" aria-label="Filter" interface="popover" placeholder="Needs(33)">
          <IonSelectOption class="Filter"  value="Highest">Most Popular Needs</IonSelectOption>
          <IonSelectOption class="Filter"  value="Lowest">Least Popular Needs</IonSelectOption>
          <IonSelectOption class="Filter"  value="Highest">Most Seen Needs</IonSelectOption>
          <IonSelectOption class="Filter"  value="Lowest">Least Seen Needs</IonSelectOption>
          <IonSelectOption class="Filter"  value="Highest">Most ReNewed Needs</IonSelectOption>
          <IonSelectOption class="Filter"  value="Lowest">Least ReNewed Needs</IonSelectOption>
          <IonSelectOption class="Filter"  value="Highest">Whom Provided Most Needs</IonSelectOption>
          <IonSelectOption class="Filter"  value="Lowest">Whom Provided Least Needs</IonSelectOption>
          <IonSelectOption class="Filter"  value="Highest">Whom Requested Most Needs</IonSelectOption>
          <IonSelectOption class="Filter"  value="Lowest">Whom Requested Least Needs</IonSelectOption>
        </IonSelect>
        <IonSelect class="Filter"  aria-label="Filter" interface="popover" placeholder="Offers(33)">
          <IonSelectOption value="Highest">Most Popular Offers</IonSelectOption>
          <IonSelectOption value="Lowest">Least Popular Offers</IonSelectOption>
          <IonSelectOption value="Highest">Most Seen Offers</IonSelectOption>
          <IonSelectOption value="Lowest">Least Seen Offers</IonSelectOption>
          <IonSelectOption value="Highest">Most ReNewed Offers</IonSelectOption>
          <IonSelectOption value="Lowest">Least ReNewed Offers</IonSelectOption>
          <IonSelectOption value="Highest">Whom Provided Most Offers</IonSelectOption>
          <IonSelectOption value="Lowest">Whom Provided Least Offers</IonSelectOption>
          <IonSelectOption value="Highest">Whom Requested Most Offers</IonSelectOption>
          <IonSelectOption value="Lowest">Whom Requested Least Offers</IonSelectOption>
        </IonSelect>
        <IonSelect class="Filter" aria-label="Filter" interface="popover" placeholder="Exhibits In Business Shows(33)">
          <IonSelectOption value="Highest">Highest</IonSelectOption>
          <IonSelectOption value="Lowest">Lowest</IonSelectOption>
        </IonSelect>
        <IonSelect class="Filter"  aria-label="Filter" interface="popover" placeholder="Visits In Business Shows(33)">
          <IonSelectOption value="Highest">Highest</IonSelectOption>
          <IonSelectOption value="Lowest">Lowest</IonSelectOption>
        </IonSelect>
        <IonSelect class="Filter"  aria-label="Filter" interface="popover" placeholder="Profile Visits(33)">
          <IonSelectOption value="Highest">Highest</IonSelectOption>
          <IonSelectOption value="Lowest">Lowest</IonSelectOption>
        </IonSelect>
        <IonSelect class="Filter"  aria-label="Filter" interface="popover" placeholder="Age(33)">
          <IonSelectOption value="Highest">Highest</IonSelectOption>
          <IonSelectOption value="Lowest">Lowest</IonSelectOption>
        </IonSelect>
        <IonSelect class="Filter"  aria-label="Filter" interface="popover" placeholder="Gender(33)">
          <IonSelectOption value="Highest">Male(33)</IonSelectOption>
          <IonSelectOption value="Lowest">Female(33)</IonSelectOption>
        </IonSelect>
        <IonSelect class="Filter"  aria-label="Filter" interface="popover" placeholder="Business Age(33)">
          <IonSelectOption value="Highest">Highest</IonSelectOption>
          <IonSelectOption value="Lowest">Lowest</IonSelectOption>
        </IonSelect>
        <IonSelect class="Filter"  aria-label="Filter" interface="popover" placeholder="Joining Date(33)">
          <IonSelectOption value="Highest">Newest</IonSelectOption>
          <IonSelectOption value="Lowest">Oldest</IonSelectOption>
        </IonSelect>
        <IonSelect class="Filter"  aria-label="Filter" interface="popover" placeholder="Connections(33)">
          <IonSelectOption value="Highest">Highest</IonSelectOption>
          <IonSelectOption value="Lowest">Lowest</IonSelectOption>
        </IonSelect>
        <IonSelect class="Filter"  aria-label="Filter" interface="popover" placeholder="No. of Employees(33)">
          <IonSelectOption value="Highest">Highest</IonSelectOption>
          <IonSelectOption value="Lowest">Lowest</IonSelectOption>
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
  width: 250px; /* Make width suitable fro most screens */
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

.sidebar-menu-hidden  {
  display: none; /* Hide sidebar by default on mobile */
}

@media (max-width: 600px) {
  .hamburger-menu {
    display: block; /* Show hamburger menu on mobile */
  }
  .sidebar-menu {
    display: none; /* Hide sidebar on mobile */
    height: 400px; /* Make height visible in shorter screens */
    width: 180px; /* Make width suitable fro most screens */
  }
  .sidebar-menu.sidebar-menu-hidden {
    display: flex; /* Show sidebar when menu is open */
  }
  .Filter {
    white-space: normal; /* Allow text to wrap */
    word-wrap: break-word;
  }
}
</style>
