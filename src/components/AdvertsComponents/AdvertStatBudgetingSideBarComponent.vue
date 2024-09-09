<template>
  <IonGrid>
    <IonCol class="statBudgetingCol">
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
        <!-- ########### Reach/View: Section #################-->
        <IonCol class="statNoCols">
          <p id="click-trigger1"><b>Reach/View:</b>
            <ion-icon :icon="informationCircleOutline"></ion-icon>
            12K-51K
          </p>
          <IonPopover trigger="click-trigger1" trigger-action="click">
            <IonContent class="tooltipContent">
              <p>This is the number of people that we estimate you'll reach in your audience each day. This has to
                do with factors such as your bid and budget. Your actual reach may be higher or lower than this
                estimate.
              </p>
            </IonContent>
          </IonPopover>
          <IonRow class="reachViewBar"> </IonRow>
        </IonCol>
        <!-- ############   Link Clicks Section ################## -->
        <IonCol class="statNoCols">
          <p id="click-trigger2"><b>Link Clicks:</b>
            <ion-icon :icon="informationCircleOutline"></ion-icon>
            12K-51K
          </p>
          <IonPopover trigger="click-trigger2" trigger-action="click">
            <IonContent class="tooltipContent">
              <p>This is the number of link clicks that we estimate you can get each day based on your campaign
                performance and estimated daily reach. The actual number of link clicks that you get may be higher or
                lower than this estimate.
              </p>
            </IonContent>
          </IonPopover>
          <IonRow class="reachViewBar"> </IonRow>

          <!-- ################### Click View & Bid section Displayed only after: Advance targeted Advertising Clicked ############################# -->
          <IonRow class="clickViewBid">
            <IonInput class="clickViewBidInputFields" v-model="formFields.purchasedMoreThan" type="text"
              label="Set Bid Cap per Reach/View:" placeholder="Enter Here" :maxlength="5"> </IonInput>
            <IonInput class="clickViewBidInputFields" v-model="formFields.profilesVisitedMoreThan" type="text"
              label="Set Bid Cap per Link Click:" placeholder="Enter Here" :maxlength="5"></IonInput>
            We won't bid more than this amount for any individual link click. You may have trouble with spending your
            budget if this amount is too low.
          </IonRow>
          <!-- ################### Click View & Bid section Displayed only after: Advance targeted Advertising Clicked ############################# -->

        </IonCol>
        <IonCol>
          The accuracy of estimates is based on factors such as past campaign data, the budget you've entered and market
          data. Numbers are provided to give you an idea of performance for your budget, but are only estimates and
          don't guarantee results.
        </IonCol>
        <!-- ############   Budget Section ################## -->
        <IonCol class="statNoCols">
          <p id="click-trigger3"><b>Total Budget/Amount:</b>
            <ion-icon :icon="informationCircleOutline"></ion-icon>
          </p>
          <IonInput v-model="formFields.purchasedMoreThan" type="text" label="Daily Budget:" placeholder="Enter Here"
            :maxlength="5"> </IonInput>
          <IonInput v-model="formFields.profilesVisitedMoreThan" type="text" label="LifeTime Budget:"
            placeholder="Enter Here" :maxlength="5"></IonInput>

          <IonPopover trigger="click-trigger3" trigger-action="click">
            <IonContent class="tooltipContent">
              <p>Your ad set budget is the Daily or Lifetime amount that you want to spend on this ad set.<br> <br>
                A <b>Daily Budget</b> is the average that you'll spend every day. If your amount is spent, your ad will
                stop display THEN it restarts displaying the next day that have budget for. <br> <br>A <b>Lifetime
                  Budget</b> is the
                maximum that you'll spend during the lifetime of your ad set. Your amount can be spent quickly if your
                budget is low or your ad is clicked/viewed a lot.<br> <br>
                Actual amount spent per day may vary
              </p>
              <p>
                When your ads have more opportunities to get results, you may spend 20% more than your daily budget on
                some days and less on others to maintain your average daily budget.
              </p>
            </IonContent>
          </IonPopover>
        </IonCol>

        <!-- ############   Date Section ################## -->

        <IonCol class="date">ChooseDate, From:</IonCol>
        <IonRow>
          <IonDatetimeButton datetime="datetime4"></IonDatetimeButton>
          <IonModal :keep-contents-mounted="true">
            <IonDatetime id="datetime4"></IonDatetime>
          </IonModal>
        </IonRow>
        <IonCol class="date">To:</IonCol>
        <IonRow>
          <IonDatetimeButton datetime="datetime4"></IonDatetimeButton>
          <IonModal :keep-contents-mounted="true">
            <IonDatetime id="datetime4"></IonDatetime>
          </IonModal>
        </IonRow>
      </IonRow>


    </IonCol>

  </IonGrid>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { IonPopover, IonGrid, IonRow, IonCol, IonContent, IonSegment, IonSegmentButton, IonButton, IonInput, IonSelect, IonSelectOption, IonDatetime, IonDatetimeButton, IonModal, IonLabel, IonItem, IonIcon } from '@ionic/vue';
import { addCircleOutline, closeCircleOutline, informationCircleOutline } from 'ionicons/icons';

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

// Define the interface for the form fields
interface FormFields {
  exhibitedMoreThan: string;
  visitedMoreThan: string;
  paidMoreThan: string;
  purchasedMoreThan: string;
  profilesVisitedMoreThan: string;
  profilesCompletionAbove: string;
  membersConnectionsMoreThan: string;
  loggedIntoProfileMoreThan: string;
  malesAgeFrom: string;
  malesAgeTo: string;
  femalesAgeFrom: string;
  femalesAgeTo: string;
  salaryFrom: string;
  salaryTo: string;
  noOfEmployeesFrom: string;
  noOfEmployeesTo: string;
  revenueFrom: string;
  revenueTo: string;
}

export default defineComponent({
  name: 'AdvertStatBudgetingSideBarComponent',
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
  },
  setup() {
    // Create a state object to manage all checkBoxInputFields states
    const checkboxStates = ref({
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false,
      checkbox5: false,
      checkbox6: false,
      checkbox7: false,
      checkbox8: false,
      checkbox9: false,
      checkbox10: false,
      checkbox11: false,
      checkbox12: false,
      checkbox13: false,
      checkbox14: false,
      checkbox15: false,
      checkbox16: false,
      checkbox17: false,
      checkbox18: false,
      checkbox19: false,
      checkbox20: false,
      checkbox21: false,
      checkbox22: false,
      checkbox23: false,
      checkbox24: false,
      checkbox25: false,


    });
    const formFields = ref<FormFields>({
      exhibitedMoreThan: '',
      visitedMoreThan: '',
      paidMoreThan: '',
      purchasedMoreThan: '',
      profilesVisitedMoreThan: '',
      profilesCompletionAbove: '',
      membersConnectionsMoreThan: '',
      loggedIntoProfileMoreThan: '',
      malesAgeFrom: '',
      malesAgeTo: '',
      femalesAgeFrom: '',
      femalesAgeTo: '',
      salaryFrom: '',
      salaryTo: '',
      noOfEmployeesFrom: '',
      noOfEmployeesTo: '',
      revenueFrom: '',
      revenueTo: '',
    });

    const sanitizedFields = computed<FormFields>(() => {
      const sanitized: FormFields = { ...formFields.value }; // Copy the form fields object
      for (const key in sanitized) {
        if (sanitized.hasOwnProperty(key)) {
          sanitized[key as keyof FormFields] = sanitizeInput(formFields.value[key as keyof FormFields]);
        }
      }
      return sanitized;
    });

    ///////////////// toggle hide/visibility section  ////////////////////////////////
    // State to manage visibility of sections
    const sectionVisibility = ref<{ [key: string]: boolean }>({
      section1: false,
      section2: false,
      section3: false,
      section4: false,
    });


    const submitContent = () => {
      // Your code to handle the button click
      console.log('Submit button clicked');
    };

    return {
      addCircleOutline,
      closeCircleOutline,
      informationCircleOutline,
      submitContent,
      // input section
      formFields,
      sanitizedFields,
      // input section
    };
  },
});
</script>

<style scoped>
  /* * {
    border: 1px solid gray;
  } */
  ion-grid{
    /* max-width: 20%; */
    /* border: solid rgb(193, 15, 190) 2px; */
    display: flex;
    /* flex-direction: column; */

  }

  .statBudgetingCol {
    font-size: 12px;
    /* height: 100%; */
    /* max-width: 20%; */
    /* border: solid rgb(18, 216, 81)2px; */
    border-radius: 10px;
    margin-left: 2px;
    width: fit-content;
    height: 100%;
    /* display: flex; */
    /* flex-direction: column; */
    /* height: 100%; */
  }
  /* ################ Stat & Budgeting */
  .audienceSizeSection {
    margin-top: 10px;
    padding: 10px;
    border: solid rgb(160, 168, 243) 2px;
    border-radius: 4px;
  }

  .tooltipContent h6,
  p {
    margin: 15px;
  }

  .statBudgetingRow {
    padding: 5px;
  }

  .dailyResultSection {
    /* display: flex; */
    /* flex-direction: column; */
    padding: 5px;
    /* border: solid rgb(160, 168, 243) 2px; */
    border-radius: 4px;
    /* min-height: 100%; */
  }

  .reachViewBar {
    background: skyblue;
    min-width: 100%;
    height: 10px;
    border: gray solid 1px;
    border-radius: 4px;
  }
  .statNoCols {
    min-width: 100%;
    border: solid rgb(18, 216, 81)2px;
      border-radius: 10px;
  }
  .clickViewBidInputFields {
    font-size: 10px;
    color: red;
  }
  .clickViewBid{
    color: blue;
    border: solid rgb(18, 216, 81)2px;
    border-radius: 10px;
  }
  /* ion-input {
    --padding: 0;
    --margin: 0;
    --max-height: 30px;
  } */


  @media (max-width: 600px) {
    ion-grid {
      /* makes the sidebar scrolling up/down in mobile version */
      max-height: 400px;
      overflow-y: auto;
    }

  }
</style>
