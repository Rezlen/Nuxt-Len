<template>
  <IonGrid>
    <!-- This is the row container for everything -->
    <IonRow class="MainRow">
      <!-- Section For All Middle Content of the page -->
      <IonCol class="allContentCol">

        <IonRow class="CenterPositions titleRow">
          <h2 class="CenterPositions bold">Advertise in 4 ways:</h2>
          <h6 class="CenterPositions titleRow">1- Advertise in 'Left' or 'Right' of each page | 2- Pin your 'Offers' 3.
            Pin your 'Needs' | 4- Pin your 'Mini Profiles'</h6>
        </IonRow>



        <IonRow class="imagesRow">
          <IonCol class="adImages leftRightImage">
            <img src="/src/views/WebAssets/leftRightAdverts.png" height="400px" alt="leftRight Advert Image">
            <h6>Advertise in 'Left' or 'Right' of pages.</h6>
            <h7>You choose any of the 8 locations for your advert and this is where your 'Adverts' will be shown to
              people.</h7>
            <IonButton expand="block" @click="toggleSection('section1')">Choose</IonButton>
          </IonCol>
          <IonCol class=" adImages OfferNeedPinImage">
            <img src="/src/views/WebAssets/offreNeedPin.png" height="400px" alt="leftRight Advert Image">
            <h6>Pin your 'Offers' or 'Needs'</h6>
            <h7>You choose any of the 2 locations for your 'Offers' or 'Needs' and this is where your 'Adverts' will
              be shown to people.</h7>
            <IonButton expand="block" @click="toggleSection('section2')">Choose</IonButton>
          </IonCol>
          <IonCol class="adImages miniProfileImage">
            <img src="/src/views/WebAssets/miniProfilePin.png" height="400px" alt="leftRight Advert Image">
            <h6>Pin your 'Mini-Profiles'</h6>
            <h9>You choose any of the 4 locations for your 'Mini-profiles' and this is where your 'Adverts' will be
              shown to people.</h9>
            <IonButton expand="block" @click="toggleSection('section3')">Choose</IonButton>
          </IonCol>
        </IonRow>

        <IonCol class="simpleAdvertisingCol">
          <h4 class="CenterPositions bold">Simple Advertising</h4>
          <IonRow class="overallWebsiteStat">
            <IonCol class="border fullMobWidth">
              <IonRow>Current Members: 100, 245</IonRow>
              <IonRow>Total Member's Revenue: £1,245,777,777</IonRow>
              <IonRow>Monthly Website's Traffic: 1,000,777</IonRow>
            </IonCol>
            <IonCol class="border fullMobWidth">
              <IonRow>Monthly Website's Unique Visitors: 198,999</IonRow>
              <IonRow>Monthly Average Each-Page Visitors: 78,999</IonRow>
              <IonRow>Daily Website's Traffic: 193,999</IonRow>
            </IonCol>
            <IonCol class="border fullMobWidth">
              <IonRow>Daily Website's Unique Visitors: 37,999</IonRow>
              <IonRow>Daily Average Each-Page Visitors: 32,999</IonRow>
              <IonRow>Daily Average Each-Page Visitors: 32,999</IonRow>
            </IonCol>
          </IonRow>


          <!-- ////////////////////////// Left & Right Advertising /////////////////////// -->
          <IonRow class="simpleLeftRightAdRow">
            <IonCol class="simpleLeftRightAdRowTitle" @click="toggleSection('section1')">
              Simple Left & Right Advertising
              <!-- <IonButton class="addCircleOutline" fill="outline" title="BackToLeft">  -->
              <!-- </IonButton>    -->
              <IonIcon :icon="addCircleOutline"></IonIcon>
              <ion-icon :icon="closeCircleOutline"></ion-icon>
            </IonCol>

            <IonRow class="simpleLeftRightAdFields" v-if="isSectionVisible('section1')">
              <IonCol class="threeColDivision">
                <IonRow>
                  <IonSelect label="Choose the page you want to advertise on:" fill="outline">
                    <IonSelectOption value="category1">Category 1</IonSelectOption>
                    <IonSelectOption value="category2">Category 2</IonSelectOption>
                    <IonSelectOption value="category3">Category 3</IonSelectOption>
                  </IonSelect>
                </IonRow>
                <IonRow>
                  <IonSelect label="Choose the location you want to advertise on:" fill="outline">
                    <IonSelectOption value="category1">Category 1</IonSelectOption>
                    <IonSelectOption value="category2">Category 2</IonSelectOption>
                    <IonSelectOption value="category3">Category 3</IonSelectOption>
                  </IonSelect>
                </IonRow>
                <IonRow>
                  <IonSelect label="Choose the Time & Payment Amount:" fill="outline">
                    <IonSelectOption value="category1">Category 1</IonSelectOption>
                    <IonSelectOption value="category2">Category 2</IonSelectOption>
                    <IonSelectOption value="category3">Category 3</IonSelectOption>
                  </IonSelect>
                </IonRow>
              </IonCol>

              <IonCol class="threeColDivision">
                <IonRow>
                  <IonInput fill="outline" class="inputFields" v-model="website" :value="sanitizedWebsite" type="url"
                    label="Enter Redirecting Link:" label-placement="floating" :counter="true" :maxlength="50"
                    @ionBlur="validateWebsite"></IonInput>
                  <p v-if="!isWebsiteValid" class="error-text">Please enter a valid URL.</p>
                </IonRow>
                <IonRow class="border">
                  <IonLabel>Upload Image</IonLabel>
                  <input type="file" name="image" />
                </IonRow>

              </IonCol>


              <IonCol class="threeColDivision">
                <IonRow>
                  <IonInput fill="outline" class="inputFields" v-model="website" :value="sanitizedWebsite" type="url"
                    label="Enter Your Words Or Link:" label-placement="floating" :counter="true" :maxlength="50"
                    @ionBlur="validateWebsite"></IonInput>
                  <p v-if="!isWebsiteValid" class="error-text">Please enter a valid URL.</p>
                </IonRow>
                <IonRow class="border">
                  <IonLabel>Choose Starting Date/Time:</IonLabel>
                  <IonDatetimeButton datetime="datetime4"></IonDatetimeButton>
                  <IonModal :keep-contents-mounted="true">
                    <IonDatetime id="datetime4"></IonDatetime>
                  </IonModal>
                </IonRow>
              </IonCol>

            </IonRow>

          </IonRow>



          <!-- ////////////////////////// Pinning Offers & Needs /////////////////////// -->
          <IonRow class="simpleLeftRightAdRow">
            <IonCol class="simpleLeftRightAdRowTitle" @click="toggleSection('section2')">
              Simple Pinning Offers & Needs
              <!-- <IonButton class="addCircleOutline" fill="outline" title="BackToLeft">  -->
              <!-- </IonButton>    -->
              <IonIcon :icon="addCircleOutline"></IonIcon>
              <ion-icon :icon="closeCircleOutline"></ion-icon>

            </IonCol>

            <IonRow class="simpleLeftRightAdFields" v-if="isSectionVisible('section2')">
              <IonCol>
                <IonSelect label="Choose Your Offer to Pin:" fill="outline">
                  <IonSelectOption value="category1">Category 1</IonSelectOption>
                  <IonSelectOption value="category2">Category 2</IonSelectOption>
                  <IonSelectOption value="category3">Category 3</IonSelectOption>
                </IonSelect>
              </IonCol>
              <IonCol>
                <IonSelect label="Choose Your Need to Pin:" fill="outline">
                  <IonSelectOption value="category1">Category 1</IonSelectOption>
                  <IonSelectOption value="category2">Category 2</IonSelectOption>
                  <IonSelectOption value="category3">Category 3</IonSelectOption>
                </IonSelect>
              </IonCol>
              <IonCol>
                <IonSelect label="Choose the Location To Pin:" fill="outline">
                  <IonSelectOption value="category1">First Location</IonSelectOption>
                  <IonSelectOption value="category2">Second Location</IonSelectOption>
                </IonSelect>
              </IonCol>
              <IonCol>
                <IonSelect label="Choose the Time & Payment Amount:" fill="outline">
                  <IonSelectOption value="category1">Category 1</IonSelectOption>
                  <IonSelectOption value="category2">Category 2</IonSelectOption>
                  <IonSelectOption value="category3">Category 3</IonSelectOption>
                </IonSelect>
              </IonCol>
              <IonCol class="border">
                <IonLabel>Choose Starting Date/Time:</IonLabel>
                <IonDatetimeButton datetime="datetime4"></IonDatetimeButton>
                <IonModal :keep-contents-mounted="true">
                  <IonDatetime id="datetime4"></IonDatetime>
                </IonModal>
              </IonCol>
            </IonRow>

          </IonRow>




          <!-- ////////////////////////// Pinning Mini Profile /////////////////////// -->
          <IonRow class="simpleLeftRightAdRow">
            <IonCol class="simpleLeftRightAdRowTitle" @click="toggleSection('section3')">
              Simple Pinning Mini Profile
              <!-- <IonButton class="addCircleOutline" fill="outline" title="BackToLeft">  -->
              <!-- </IonButton>    -->
              <IonIcon :icon="addCircleOutline"></IonIcon>
              <ion-icon :icon="closeCircleOutline"></ion-icon>
            </IonCol>

            <IonRow class="simpleLeftRightAdFields" v-if="isSectionVisible('section3')">

              <IonCol>
                <IonSelect label="Choose the Location To Pin:" fill="outline">
                  <IonSelectOption value="category1">First Location</IonSelectOption>
                  <IonSelectOption value="category2">Second Location</IonSelectOption>
                  <IonSelectOption value="category1">Third Location</IonSelectOption>
                  <IonSelectOption value="category2">Forth Location</IonSelectOption>
                </IonSelect>
              </IonCol>

              <IonCol>
                <IonSelect label="Choose the Time & Payment Amount:" fill="outline">
                  <IonSelectOption value="category1">Category 1</IonSelectOption>
                  <IonSelectOption value="category2">Category 2</IonSelectOption>
                  <IonSelectOption value="category3">Category 3</IonSelectOption>
                </IonSelect>
              </IonCol>
              <IonCol class="border">
                <IonLabel>Choose Starting Date/Time:</IonLabel>
                <IonDatetimeButton datetime="datetime4"></IonDatetimeButton>
                <IonModal :keep-contents-mounted="true">
                  <IonDatetime id="datetime4"></IonDatetime>
                </IonModal>
              </IonCol>
            </IonRow>


          </IonRow>

          <IonButton class="expandAdvanceAdvertisingBTN" expand="block" color="warning"
            title="expandAdvanceAdvertisingBTN" @click="toggleAdvanceAdvertising"> Or Choose Advance Targeted
            Advertising</IonButton>
          <!-- Conditionally render the AdvanceAdvertisingComponent -->
          <AdvanceAdvertisingComponent v-if="showAdvanceAdvertising" />


          <h4>Total Payment is: £</h4>
          <IonRow class="termBTN">
            <p class="terms">
              By clicking on Pay, you agree to London Entrepreneurs Network's
              <a href="/TermsConditionsPage" class="terms-link">TERMS & CONDITIONS</a> and
              <a href="/PrivacyPolicyPage" class="terms-link">PRIVACY POLICY</a>.
            </p>
            <img src="/src/views/WebAssets/paypal.png" class="payPalImg">
            <IonButton class="PayBTN" expand="block" title="PayBTN" @click="submitContent">Pay</IonButton>
            <!-- expand="block" -->
          </IonRow>
        </IonCol>


      </IonCol>



      <!-- ##################################    Stat & Budgeting sidebar    ################################# -->
      <!-- ##################################    Stat & Budgeting sidebar    ################################# -->
      <!-- ##################################    Stat & Budgeting sidebar    ################################# -->
      <!-- ##################################    Stat & Budgeting sidebar    ################################# -->
      <!-- ##################################    Stat & Budgeting sidebar    ################################# -->



      <!-- Section to display all stat & costings on advert section -->
      <IonCol class="statBudgetingCol">
        <IonRow @click="toggleMenu" class="statBudgetingRow Sidebar bold"> ☰ Stat & Budgeting </IonRow>
        <IonRow :class="{'sidebar-menu': true,'sidebar-menu-hidden': !isMenuOpen,}">
          <IonRow class="audienceSizeSection" id="click-trigger">Audience size/Potential reach:
            <span style="font-family:arial; font-weight:bold"> 43,000,000 </span>people

            <!-- Info Icon for Tooltip -->
            <ion-icon :icon="informationCircleOutline"></ion-icon>
            <IonPopover trigger="click-trigger" trigger-action="click">
              <IonContent class="tooltipContent">
                <h6><b>How this number is estimated</b></h6>
                <p>This is an estimate of the size of the audience that's eligible to see your ad. it's based on your
                  targeting criteria, ad placements and how many people</p>
                <h6><b>Have visited LEN website in past 30 days.</b></h6>
                <p>This is not an estimate of how many people will actually see your ad, and the number may change over
                  time. it isn't designed to match population or census estimates.</p>

              </IonContent>
            </IonPopover>
            <!-- Info Icon for Tooltip -->

          </IonRow>
          <IonRow class="dailyResultSection">
            <IonCol><b>Estimated daily results</b></IonCol>
            <IonCol>
              <p id="click-trigger1">Reach/View:
                <ion-icon :icon="informationCircleOutline"></ion-icon>
              </p>
              <IonPopover trigger="click-trigger1" trigger-action="click">
                <IonContent class="tooltipContent">
                  <p>This is the number of people that we estimate you'll reach in your audience each day. This has to
                    do with factors such as your bid and budget. Your actual reach may be higher or lower than this estimate.
                  </p>
                </IonContent>
              </IonPopover>
            </IonCol>
            <IonCol class="reachViewBar"> </IonCol>
          </IonRow>

      </IonRow>
    </IonCol>


    </IonRow>


  </IonGrid>

</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { IonPopover, IonGrid, IonRow, IonCol, IonContent, IonSegment, IonSegmentButton, IonButton, IonInput, IonSelect, IonSelectOption, IonDatetime, IonDatetimeButton, IonModal, IonLabel, IonItem, IonIcon } from '@ionic/vue';
import { addCircleOutline, closeCircleOutline, informationCircleOutline } from 'ionicons/icons';
import AdvanceAdvertisingComponent from '@/components/AdvertsComponents/AdvanceAdvertisingComponent.vue';

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
    IonPopover,
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
    AdvanceAdvertisingComponent,
  },
  setup() {
    const selectedTab = ref<string>('Marketing'); // Initialize with the default tab
    const isMenuOpen = ref(false);
    const customerDataBase = ref<number | null>(null);
    const website = ref<string>('');
    const isWebsiteValid = ref<boolean>(true);
    const showAdvanceAdvertising = ref<boolean>(false); // Track visibility of AdvanceAdvertisingComponent
    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };
    const toggleAdvanceAdvertising = () => {
      showAdvanceAdvertising.value = !showAdvanceAdvertising.value;
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

    ///////////////// toggle hide/visibility section  ////////////////////////////////
    // State to manage visibility of sections
    const sectionVisibility = ref<{ [key: string]: boolean }>({
      section1: false,
      section2: false,
      section3: false,
      section4: false,
    });

    // Method to toggle section visibility
    const toggleSection = (section: string) => {
      sectionVisibility.value[section] = !sectionVisibility.value[section];
    };

    // Method to check if a section is visible
    const isSectionVisible = (section: string) => {
      return sectionVisibility.value[section];
    };
    ///////////////// toggle hide/visibility section  ////////////////////////////////
    
    const submitContent = () => {
    const sanitizedData = {
      customerDataBase: sanitizedCustomerDataBase.value,
    };

    console.log('Sanitized Data:', sanitizedData);
    // Here you should send sanitizedData to your API endpoint
    };

    return {
      website,
      selectedTab,
      sanitizedWebsite,
      validateWebsite,
      customerDataBase,
      sanitizedCustomerDataBase,
      addCircleOutline,
      closeCircleOutline,
      informationCircleOutline,
      submitContent,
      isWebsiteValid,
      // toggle visibility/hide section
      toggleSection,
      isSectionVisible,
      // toggle visibility/hide section

      isMenuOpen,
      toggleMenu,
      showAdvanceAdvertising, // Return to be used in the template
      toggleAdvanceAdvertising, // Return to be used in the template
    };
  },
});
</script>


<style scoped>

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
  .statBudgetingCol {
    max-width: 20%;
    border: solid rgb(193, 15, 190) 2px;
    border-radius: 10px;
    margin-left: 2px;  
  }
  .overallWebsiteStat {
    font-size: 13px;
  }
  .border {
    border: 1px solid lightgray;
    border-radius: 4px;
    /* min-height: fit-content; */
    /* display: flex; */
  }
  .simpleLeftRightAdRow {
    border: solid rgb(160, 168, 243) 2px;
    margin: 15px 0;
    border-radius: 4px;
    background-color: rgb(225, 240, 225);
    
  }
  .simpleLeftRightAdRowTitle {
    cursor: pointer; /* Show cursor pointer on hover */
    Background-color: rgb(217, 217, 247);
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
  .PayBTN {
    width: 100%;
  }
  .termBTN {
    justify-content: center;
    align-items: center;
  }

  .expandAdvanceAdvertisingBTN {
    color: black;
  }
  /* ################ Stat & Budgeting */
  .audienceSizeSection {
    margin-top: 10px;
    padding: 10px;
    border: solid rgb(160, 168, 243) 2px;
    border-radius: 4px;
  }
  .tooltipContent h6, p {
    margin: 15px;
  }
  .statBudgetingRow {
    padding: 5px;
  }
  .dailyResultSection{
    /* display: flex; */
    flex-direction: column;
    padding: 5px;
    border: solid rgb(160, 168, 243) 2px;
    border-radius: 4px;
    min-height:100%;
  }
  .reachViewBar {
    background: skyblue;
    min-width: 100%;
    height: 10px;
    border: gray solid 1px;
    border-radius: 4px;
  }

  @media (max-width: 600px) {
    .fullMobWidth {
      min-width: 100%;
    }
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
    .simpleLeftRightAdFields {
      width: 100%;
    }

  };
</style>
