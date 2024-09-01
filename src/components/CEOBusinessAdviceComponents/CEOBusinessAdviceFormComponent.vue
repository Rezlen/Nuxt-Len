<template>
  <IonGrid>
    <!-- Header text -->
    <p class="Header">
      Business Advice from CEO of LEN (London Entrepreneurs Network)
    </p>

    <IonRow class="mainRow">
      <!-- Checkbox items for website notifications -->

      <IonItem class="Head">
        <IonCheckbox slot="start" v-model="checkboxStates.checkbox1"></IonCheckbox>
        <IonCol class="title label">
          Strategic Business Advice, Mentoring or Coaching Session
        </IonCol>
        <IonCol class="DatePrice">
          <IonCol class="price">£2000</IonCol>
          <IonCol class="date">ChooseDate</IonCol>
          <IonCol>
            <IonDatetimeButton datetime="datetime4"></IonDatetimeButton>
            <IonModal :keep-contents-mounted="true">
              <IonDatetime id="datetime4"></IonDatetime>
            </IonModal>
          </IonCol>
        </IonCol>
        <IonCol class="description label">
          <li>
            Strategic Business Advice, Mentoring or Coaching Session, with LEN founder Reza Soheily (Serial Successful Entrepreneur).
          </li>
          <li>
            This is the price for each hour of STRATEGIC business advice session or any conversation with LEN founder Reza Soheily (Serial Successful Entrepreneurs).
          </li>
          <li>
            This is a STRATEGIC session and it means, Reza will use all his networks, all database, all platforms and all his personal connections for your needs e.g. for starting or expanding your business or solving any business problems you might have.
          </li>
          <li>
            He guarantees your success and achieving your goal; if he decides to take your case up & if he sees he can achieve your goal. So please get in touch in advance or explain your need in the comment section below.
          </li>
          <li>
            The STRATEGIC sessions can be conducted either in person in our offices, via Skype or other means. If you need the advice or conversation conducted in your chosen location, either transport must be provided or transport cost will need to be added on top of the advice fee separately. For sessions frequently, location, transport or concept please get in touch in advance.
          </li>
        </IonCol>
      </IonItem>

      <IonItem class="Head">
        <IonCheckbox slot="start" v-model="checkboxStates.checkbox2"></IonCheckbox>
        <IonCol class="title label">An Hour Business Advice Session</IonCol>
        <IonCol class="DatePrice">
          <IonCol class="price">£70</IonCol>
          <IonCol class="date">ChooseDate</IonCol>
          <IonCol>
            <IonDatetimeButton datetime="datetime1"></IonDatetimeButton>
            <IonModal :keep-contents-mounted="true">
              <IonDatetime id="datetime1"></IonDatetime>
            </IonModal>
          </IonCol>
        </IonCol>
        <IonCol class="description label">
          <li>
            An Hour Business Advice Session, with LEN founder Reza Soheily (Serial Successful Entrepreneur).
            This is the price for each hour of business advice session or any conversation with LEN founder Reza Soheily (Serial Successful Entrepreneurs).
            It can be conducted either in person in our offices, via skype or other means. If you need the advice or conversation conducted in your chosen location, either a transport must be provided or transport cost will need to be added on top of the advice fee separately.
            For sessions frequently, location, transport or concept pls get in touch in advance.
          </li>
        </IonCol>
      </IonItem>
    </IonRow>

    <p class="Header">
      For the best advice & saving your time, you can provide the following information, otherwise Business Advisers will ask the same in the Business Advice Sessions;
    </p>

    <IonRow class="fields">

      <IonCol class="col">
        <IonItem>
          <IonSelect v-model="selectedCategory" placeholder="What is your Business Category?" fill="outline">
            <IonSelectOption value="Week">Week</IonSelectOption>
            <IonSelectOption value="Month">Month</IonSelectOption>
            <IonSelectOption value="Every 2 Months">Every 2 Months</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem>
          <IonInput class="inputFields" label="If your business is registered in Company's House, enter its reg-number:" label-placement="floating" :counter="true" :maxlength="10"></IonInput>
        </IonItem>
        <IonItem>
        <IonInput class="inputFields" v-model="website" :value="sanitizedWebsite" type="url" label="If your business has a website, enter it here:" label-placement="floating" :counter="true" :maxlength="50" @ionBlur="validateWebsite"></IonInput>
        <p v-if="!isWebsiteValid" class="error-text">Please enter a valid URL.</p>
        </IonItem>

        <IonItem>
          <IonSelect v-model="selectedPosition" placeholder="Your position in the business/company" fill="outline">
            <IonSelectOption value="Owner">Owner</IonSelectOption>
            <IonSelectOption value="Manager">Manager</IonSelectOption>
            <IonSelectOption value="Employee">Employee</IonSelectOption>
          </IonSelect>
        </IonItem>
        
        <IonItem>
          <IonInput class="inputFields" v-model="sanitizedBusinessYears" type="number" label="How many years has your business been running?" label-placement="floating" :counter="true" :maxlength="3"></IonInput>
        </IonItem>
        <IonItem>
          <IonInput class="inputFields" v-model="sanitizedGrossRevenue" type="number" label="If has Gross Revenue, how much per year?" label-placement="floating" :counter="true" :maxlength="15"></IonInput>
        </IonItem>
      </IonCol>

      <IonCol class="col">
        <IonItem>
          <IonInput class="inputFields" v-model="sanitizedGrossCost" type="number" label="If has Gross Cost, how much per year?" label-placement="floating" :counter="true" :maxlength="15"></IonInput>
        </IonItem>
        <IonItem>
          <IonInput class="inputFields" v-model="sanitizedGrossProfit" type="number" label="If has Gross Profit, how much per year?" label-placement="floating" :counter="true" :maxlength="15"></IonInput>
        </IonItem>
        <IonItem>
          <IonInput class="inputFields" v-model="sanitizedPaidAdvertising" type="text" label="If you have done paid advertising, where/what?" label-placement="floating" :counter="true" :maxlength="10"></IonInput>
        </IonItem>
        <IonItem>
          <IonInput class="inputFields" v-model="sanitizedCustomerDataBase" type="number" label="If your business has a Customer DataBase, how many?" label-placement="floating" :counter="true" :maxlength="15"></IonInput>
        </IonItem>
        <IonItem>
          <IonInput class="inputFields" v-model="sanitizedIndemnityInsurance" type="text" label="If your business has 'Professional Indemnity Insurance,' enter the policy number:" label-placement="floating" :counter="true" :maxlength="70"></IonInput>
        </IonItem>
      </IonCol>

    </IonRow>
    <p class="terms">
      By clicking on SUBMIT, you agree to London Entrepreneurs Network's 
      <a href="/TermsConditionsPage" class="terms-link">TERMS & CONDITIONS</a> and 
      <a href="/PrivacyPolicypage" class="terms-link">PRIVACY POLICY</a>.
    </p>
    <IonButton class="UpdateBTN" size="large" expand="block" title="SubmitBTN" @click="submitContent">Submit</IonButton>
  </IonGrid>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { IonInput, IonItem, IonLabel, IonSelect, IonSelectOption, IonTextarea, IonCheckbox, IonGrid, IonRow, IonCol, IonButton, IonDatetime, IonDatetimeButton, IonModal } from '@ionic/vue';

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
  name: 'CEOBusinessAdviceFormComponent',
  components: {
    IonInput,
    IonItem,
    IonCheckbox,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonDatetime,
    IonDatetimeButton,
    IonModal,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonTextarea,
  },
  setup() {
    const checkboxStates = ref({
      checkbox1: false,
      checkbox2: false,
    });
    const website = ref<string>('');
    const isWebsiteValid = ref<boolean>(true);

    const businessYears = ref<number | null>(null);
    const grossRevenue = ref<number | null>(null);
    const grossCost = ref<number | null>(null);
    const grossProfit = ref<number | null>(null);
    const paidAdvertising = ref<string>('');
    const customerDataBase = ref<number | null>(null);
    const indemnityInsurance = ref<string>('');

    const selectedCategory = ref<string | null>(null);
    const selectedPosition = ref<string | null>(null);

    // Computed properties for sanitized inputs
    const sanitizedWebsite = computed<string>(() => {
      return sanitizeInput(website.value);
    });

    const sanitizedBusinessYears = computed<string | number | undefined>(() => {
      return businessYears.value !== null ? businessYears.value : undefined;
    });

    const sanitizedGrossRevenue = computed<string | number | undefined>(() => {
      return grossRevenue.value !== null ? grossRevenue.value : undefined;
    });

    const sanitizedGrossCost = computed<string | number | undefined>(() => {
      return grossCost.value !== null ? grossCost.value : undefined;
    });

    const sanitizedGrossProfit = computed<string | number | undefined>(() => {
      return grossProfit.value !== null ? grossProfit.value : undefined;
    });

    const sanitizedPaidAdvertising = computed<string>(() => {
      return sanitizeInput(paidAdvertising.value);
    });

    const sanitizedCustomerDataBase = computed<string | number | undefined>(() => {
      return customerDataBase.value !== null ? customerDataBase.value : undefined;
    });

    const sanitizedIndemnityInsurance = computed<string>(() => {
      return sanitizeInput(indemnityInsurance.value);
    });

    // Function to validate the website URL
    const validateWebsite = () => {
      isWebsiteValid.value = urlPattern.test(sanitizedWebsite.value);
    };

    const submitContent = () => {
      const sanitizedData = {
          checkboxStates: {
          checkbox1: checkboxStates.value.checkbox1,
          checkbox2: checkboxStates.value.checkbox2,
        },
        businessYears: sanitizedBusinessYears.value,
        grossRevenue: sanitizedGrossRevenue.value,
        grossCost: sanitizedGrossCost.value,
        grossProfit: sanitizedGrossProfit.value,
        paidAdvertising: sanitizedPaidAdvertising.value,
        customerDataBase: sanitizedCustomerDataBase.value,
        indemnityInsurance: sanitizedIndemnityInsurance.value,
      };

      console.log('Sanitized Data:', sanitizedData);
      // Here you should send sanitizedData to your API endpoint
    };

    return {
      checkboxStates,
      website,
      isWebsiteValid,
      sanitizedWebsite,
      validateWebsite,
      businessYears,
      grossRevenue,
      grossCost,
      grossProfit,
      paidAdvertising,
      customerDataBase,
      indemnityInsurance,
      sanitizedBusinessYears,
      sanitizedGrossRevenue,
      sanitizedGrossCost,
      sanitizedGrossProfit,
      sanitizedPaidAdvertising,
      sanitizedCustomerDataBase,
      sanitizedIndemnityInsurance,
      selectedCategory,
      selectedPosition,
      submitContent,
    };
  },
});
</script>

<style scoped>
ion-grid {
  width: 100%;
  height: 100%;
}
.Header {
  text-align: center;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
}

.mainRow {
  display: flex;
  overflow-x: auto; /* Enable horizontal scrolling */
}

.Head {
  display: flex;
  align-items: center; /* Align items at the start */
  flex-direction: row;
  padding: 10px 10px;
}

.DatePrice {
  max-width: 200px;
}

.price,
.date {
  font-weight: bold;
  color: purple;
}

.title {
  font-weight: bold;
  min-width: 200px;
  max-width: 200px;
  font-size: 14px;
  white-space: wrap; /* Prevent text wrapping #important */
}

.description {
  width: 100%;
}

.label {
  text-align: left;
}

.UpdateBTN {
  width: 100%;
}

.fields {
  margin-top: 20px;
  /* display: flex; */
  /* flex-direction: row; */
    /* width: 100%; */
  /* height: 100%; */
}


.inputFields {
  border: 1px solid gray;
  border-radius: 8px;
  display: flex;
}

.terms {
  text-align: center;
  font-size: 14px;
  margin-top: 10px;
}

.terms-link {
  color: blue;
  text-decoration: none;
}

.terms-link:hover {
  text-decoration: underline;
}

.error-text {
  color: red;
  font-size: 12px;
  margin-top: 5px;
  padding-left: 10px;
}

@media (max-width: 600px) {
  .mainRow {
    border: 2px solid rgb(148, 9, 141);
    border-radius: 8px;
  }
  
  .Head {
    flex: 0 0 auto;
    width: 200vw; /* Full viewport width */
    overflow-x: auto; /* Ensure horizontal scrolling */
  }
  
  /* .fields {
    display: flex;
    flex-direction: column;
  } */
}
</style>
