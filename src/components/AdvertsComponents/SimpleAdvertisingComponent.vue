<template>
  <IonGrid>
    <!-- This is the row container for everything -->
    <IonRow class="MainRow">
      <!-- Section For All Middle Content of the page -->
      <IonCol class="allContentCol">

        <IonRow class="CenterPositions titleRow">
          <h2 class="CenterPositions bold">Advertise in 4 ways:</h2>
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

        <IonCol class="simpleAdvertisingCol">
          <h4 class="CenterPositions bold">Simple Advertising</h4>
          <IonRow class="overallWebsiteStat border">
            <IonCol class="border">
              <IonRow>Current Members: 100, 245</IonRow>
              <IonRow>Total Member's Revenue: £1,245,777,777</IonRow>
              <IonRow>Monthly Website's Traffic: 1,000,777</IonRow>
            </IonCol>
            <IonCol class="border">
              <IonRow>Monthly Website's Unique Visitors: 198,999</IonRow>
              <IonRow>Monthly Average Each-Page Visitors: 78,999</IonRow>
              <IonRow>Daily Website's Traffic: 193,999</IonRow>
            </IonCol>
            <IonCol class="border">
              <IonRow>Daily Website's Unique Visitors: 37,999</IonRow>
              <IonRow>Daily Average Each-Page Visitors: 32,999</IonRow>
              <IonRow>Daily Average Each-Page Visitors: 32,999</IonRow>
            </IonCol>
          </IonRow>



          <IonRow class="simpleLeftRightAdRow">
            <IonCol class="simpleLeftRightAdRowTitle">

              Simple Left & Right Advertising
              <!-- <IonButton class="addCircle" fill="outline" title="BackToLeft">  -->
              <!-- </IonButton>    -->
              <IonIcon :icon="addCircle" size="large"></IonIcon>   
              <ion-icon :icon="closeCircle" size="large"></ion-icon>
            </IonCol>

            <IonRow class="simpleLeftRightAdFields">
              <IonCol>
                <IonSelect placeholder="Choose the page you want to advertise on:" fill="outline">
                  <IonSelectOption value="category1">Category 1</IonSelectOption>
                  <IonSelectOption value="category2">Category 2</IonSelectOption>
                  <IonSelectOption value="category3">Category 3</IonSelectOption>
                </IonSelect>
              </IonCol>
              <IonCol>
                <IonSelect placeholder="Choose the location you want to advertise on:" fill="outline">
                  <IonSelectOption value="category1">Category 1</IonSelectOption>
                  <IonSelectOption value="category2">Category 2</IonSelectOption>
                  <IonSelectOption value="category3">Category 3</IonSelectOption>
                </IonSelect>
              </IonCol>
              <IonCol>
                <IonSelect placeholder="Choose the Time & Payment Amount:" fill="outline">
                  <IonSelectOption value="category1">Category 1</IonSelectOption>
                  <IonSelectOption value="category2">Category 2</IonSelectOption>
                  <IonSelectOption value="category3">Category 3</IonSelectOption>
                </IonSelect>
              </IonCol>
              <IonCol>
                <IonInput fill="outline" class="inputFields" v-model="website" :value="sanitizedWebsite" type="url" label="Enter Redirecting Link:" label-placement="floating" :counter="true" :maxlength="50" @ionBlur="validateWebsite"></IonInput>
                <p v-if="!isWebsiteValid" class="error-text">Please enter a valid URL.</p>
              </IonCol>
              <IonCol>
                <IonInput fill="outline" class="inputFields" v-model="website" :value="sanitizedWebsite" type="url" label="Enter Your Words Or Link:" label-placement="floating" :counter="true" :maxlength="50" @ionBlur="validateWebsite"></IonInput>
                <p v-if="!isWebsiteValid" class="error-text">Please enter a valid URL.</p>              
              </IonCol>
              <IonCol class="border">
                <IonLabel>Upload Image</IonLabel>
                <input type="file" name="image" />
              </IonCol>
              <IonCol class="border">
                <IonLabel>Choose Starting Date/Time:</IonLabel>
                <IonDatetimeButton  datetime="datetime4"></IonDatetimeButton>
                <IonModal :keep-contents-mounted="true">
                  <IonDatetime id="datetime4"></IonDatetime>
                </IonModal>
              </IonCol>
            </IonRow>
            

          </IonRow>

          <IonRow class="simpleLeftRightAdRow">
            <IonCol class="simpleLeftRightAdRowTitle">
              Simple Pinning Offers & Needs
              <!-- <IonButton class="addCircle" fill="outline" title="BackToLeft">  -->
              <!-- </IonButton>    -->
              <IonIcon :icon="addCircle" size="large"></IonIcon> 
              <ion-icon :icon="closeCircle" size="large"></ion-icon>

            </IonCol>

            <IonRow class="simpleLeftRightAdFields">
              <IonCol>
                <IonSelect placeholder="Choose Your Offer to Pin:" fill="outline">
                  <IonSelectOption value="category1">Category 1</IonSelectOption>
                  <IonSelectOption value="category2">Category 2</IonSelectOption>
                  <IonSelectOption value="category3">Category 3</IonSelectOption>
                </IonSelect>
              </IonCol>
              <IonCol>
                <IonSelect placeholder="Choose Your Need to Pin:" fill="outline">
                  <IonSelectOption value="category1">Category 1</IonSelectOption>
                  <IonSelectOption value="category2">Category 2</IonSelectOption>
                  <IonSelectOption value="category3">Category 3</IonSelectOption>
                </IonSelect>
              </IonCol>
              <IonCol>
                <IonSelect placeholder="Choose the Location To Pin:" fill="outline">
                  <IonSelectOption value="category1">First Location</IonSelectOption>
                  <IonSelectOption value="category2">Second Location</IonSelectOption>
                </IonSelect>
              </IonCol>
              <IonCol>
                <IonSelect placeholder="Choose the Time & Payment Amount:" fill="outline">
                  <IonSelectOption value="category1">Category 1</IonSelectOption>
                  <IonSelectOption value="category2">Category 2</IonSelectOption>
                  <IonSelectOption value="category3">Category 3</IonSelectOption>
                </IonSelect>
              </IonCol>
              <IonCol class="border">
                <IonLabel>Choose Starting Date/Time:</IonLabel>
                <IonDatetimeButton  datetime="datetime4"></IonDatetimeButton>
                <IonModal :keep-contents-mounted="true">
                  <IonDatetime id="datetime4"></IonDatetime>
                </IonModal>
              </IonCol>
            </IonRow>
            

          </IonRow>

          <IonRow class="simpleLeftRightAdRow">
            <IonCol class="simpleLeftRightAdRowTitle">
              Simple Pinning Mini Profile
              <!-- <IonButton class="addCircle" fill="outline" title="BackToLeft">  -->
              <!-- </IonButton>    -->
              <IonIcon :icon="addCircle" size="large"></IonIcon>   
              <ion-icon :icon="closeCircle" size="large"></ion-icon>
            </IonCol>

            <IonRow class="simpleLeftRightAdFields">

              <IonCol>
                <IonSelect placeholder="Choose the Location To Pin:" fill="outline">
                  <IonSelectOption value="category1">First Location</IonSelectOption>
                  <IonSelectOption value="category2">Second Location</IonSelectOption>
                  <IonSelectOption value="category1">Third Location</IonSelectOption>
                  <IonSelectOption value="category2">Forth Location</IonSelectOption>
                </IonSelect>
              </IonCol>
              <IonCol>
                <IonSelect placeholder="Choose the Time & Payment Amount:" fill="outline">
                  <IonSelectOption value="category1">Category 1</IonSelectOption>
                  <IonSelectOption value="category2">Category 2</IonSelectOption>
                  <IonSelectOption value="category3">Category 3</IonSelectOption>
                </IonSelect>
              </IonCol>
              <IonCol class="border">
                <IonLabel>Choose Starting Date/Time:</IonLabel>
                <IonDatetimeButton  datetime="datetime4"></IonDatetimeButton>
                <IonModal :keep-contents-mounted="true">
                  <IonDatetime id="datetime4"></IonDatetime>
                </IonModal>
              </IonCol>
            </IonRow>
          

          </IonRow>
            <h4>Total Payment is: £</h4>
            <p class="terms">
              By clicking on Pay, you agree to London Entrepreneurs Network's 
              <a href="/TermsConditionsPage" class="terms-link">TERMS & CONDITIONS</a> and 
              <a href="/PrivacyPolicyPage" class="terms-link">PRIVACY POLICY</a>.
            </p>
            <img src="/src/views/WebAssets/paypal.png" class="payPalImg">
            <IonButton class="PayBTN" size="large" expand="block" title="PayBTN" @click="submitContent">Pay</IonButton>
        </IonCol>


        <IonRow class="advanceAdvertising CenterPositions bold ">Advance Advertising Section for its component</IonRow>
      </IonCol>


      <!-- Section to display all stat & costings on advert section -->
       <IonCol class="statCostCol" >
        <IonRow @click="toggleMenu" class="Sidebar bold"> ☰ Stat & Costs </IonRow>
        <IonRow :class="{'sidebar-menu': true,'sidebar-menu-hidden': !isMenuOpen,}">
          <IonRow> Audience size: </IonRow>
          <IonRow> Potential reach: 43,000,000 people</IonRow>
        </IonRow>
      </IonCol>


    </IonRow>
      

      </IonGrid>

</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { IonGrid, IonRow, IonCol, IonContent, IonSegment, IonSegmentButton, IonButton, IonInput, IonSelect, IonSelectOption, IonDatetime, IonDatetimeButton, IonModal, IonLabel, IonItem, IonIcon } from '@ionic/vue';
import {addCircle, closeCircle } from 'ionicons/icons';

// Utility functions for sanitization and URL validation
const sanitizeInput = (input: string): string => {
  return input
    .replace(/<script.*?>.*?<\/script>/gi, '') // Remove script tags
    .replace(/<[\/\!]*?[^<>]*?>/gi, '')       // Remove HTML tags
    .replace(/&(?:lt|gt|amp|quot|#39);/g, '') // Remove HTML entities
    .replace(/[<>\/\\'";]/g, '');             // Remove potentially harmful characters
};

// RegEx pattern for validating URLs
const urlPattern = new RegExp(
  '^(https?:\\/\\/)?' + // Protocol
  '((([a-zA-Z\\d]([a-zA-Z\\d-]*[a-zA-Z\\d])*)\\.)+[a-zA-Z]{2,}|' + // Domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR IP (v4) address
  '(\\:\\d+)?(\\/[-a-zA-Z\\d%_.~+]*)*' + // Port and path
  '(\\?[;&a-zA-Z\\d%_.~+=-]*)?' + // Query string
  '(\\#[-a-zA-Z\\d_]*)?$' // Fragment locator
);

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
    IonInput,
    IonSelect,
    IonSelectOption,
    IonDatetime,
    IonDatetimeButton,
    IonModal,
    IonLabel,
    IonItem,
    IonIcon,
  },
  setup() {
    const selectedTab = ref<string>('Marketing'); // Initialize with the default tab
    const isMenuOpen = ref(false);
    const customerDataBase = ref<number | null>(null);
    const website = ref<string>('');
    const isWebsiteValid = ref<boolean>(true);
    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };
    const sanitizedWebsite = computed<string>(() => {
      return sanitizeInput(website.value);
    });
    const sanitizedCustomerDataBase = computed<string | number | undefined>(() => {
      return customerDataBase.value !== null ? customerDataBase.value : undefined;
    });

    // Function to validate the website URL
    const validateWebsite = () => {
      isWebsiteValid.value = urlPattern.test(sanitizedWebsite.value);
    };

    
    const submitContent = () => {
    const sanitizedData = {
      customerDataBase: sanitizedCustomerDataBase.value,
    };

    console.log('Sanitized Data:', sanitizedData);
    // Here you should send sanitizedData to your API endpoint
    };

    return {
      website,
      isWebsiteValid,
      selectedTab,
      isMenuOpen,
      toggleMenu,
      sanitizedWebsite,
      validateWebsite,
      customerDataBase,
      sanitizedCustomerDataBase,
      addCircle,
      closeCircle,
      submitContent,
    };
  },
});
</script>


<style scoped>
  /* * {
    border: 1px solid pink;
  } */
    /* Updated for new tab names and mobile responsiveness */
    ion-grid {
      width: 100%;
    }
    .allContentCol {
      border: solid rgb(193, 15, 190) 2px;
      border-radius: 10px;
    }
    .titleRow  {
      color: white;
      background-color: rgb(108, 112, 230);
    }
    .titleRow h2,
    .bold {
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
    .overallWebsiteStat {
      font-size: 13px;
    }
    .border {
      border: 1px solid lightgray;
      border-radius: 4px;
    }
    .simpleLeftRightAdRow {
      border: solid rgb(112, 124, 236) 2px;
      margin: 15px 0;
      border-radius: 4px;
      background-color: rgb(241, 251, 251);
    }
    .simpleLeftRightAdRowTitle {
      color: white;
      Background-color: rgb(122, 122, 241);
      font-weight: bold;
      text-align: center;
      /* justify-content: center;
      align-items: center;
      align-content: center; */
      min-width: 100%;
    }
    .terms {
      font-size: 11px;
    }

  /* This makes the sidebar floating beautifully */


  @media (max-width: 600px) {
    .allContentCol {
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
      width: 250px; /* Make width fit-content */
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

  };
</style>
