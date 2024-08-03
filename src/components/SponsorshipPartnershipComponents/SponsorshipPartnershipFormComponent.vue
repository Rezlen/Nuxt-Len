<template>
  <IonGrid>
    <!-- Header text -->
    <p class="Header">Below are the opportunities which LEN (London Entrepreneurs Network) can provide you. We are open to suggestions, contact us.</p>

    <IonRow class="mainRow">
      <!-- Checkbox items for website notifications -->
      <IonItem class="Head">
        <IonCheckbox slot="start" v-model="checkboxStates.checkbox1"></IonCheckbox>
        <IonCol class="title label">30 Minutes Workshop Or Presentation IN LEN's Events Or Business Shows</IonCol>
        <IonCol class="DatePrice">
          <IonCol class="price">£1000</IonCol>
          <IonCol class="date">ChooseDate</IonCol>
          <IonCol>
            <IonDatetimeButton datetime="datetime1"></IonDatetimeButton>
            <IonModal :keep-contents-mounted="true">
              <IonDatetime id="datetime1"></IonDatetime>
            </IonModal>
          </IonCol>
        </IonCol>
        <IonCol class="description label">
          <li>We can ORGANISE up-to 30 minutes presentation or workshop in a room within one of our shows/events exclusively for you to present, promote, or sell anything you wish.</li>
          <li>You can expect about 30 relevant attendees (highly potential clients for)</li>
        </IonCol>
      </IonItem>

      <IonItem class="Head">
        <IonCheckbox slot="start" v-model="checkboxStates.checkbox2"></IonCheckbox>
        <IonCol class="title label">Email to a 10,000 of our members</IonCol>
        <IonCol class="DatePrice">
          <IonCol class="price">£300</IonCol>
          <IonCol class="date">ChooseDate</IonCol>
          <IonCol>
            <IonDatetimeButton datetime="datetime2"></IonDatetimeButton>
            <IonModal :keep-contents-mounted="true">
              <IonDatetime id="datetime2"></IonDatetime>
            </IonModal>
          </IonCol>
        </IonCol>
        <IonCol class="description label">
          <li>We have 30,000+ members. We can send your exclusive email to all of them for only £850 instead of £900 OR to any 10,000 of them for only £300.</li>
          <li>Our email open rate is about 30% and conversion about 5% generally.</li>
          <li>Currently, our database shows 60% startups.</li>
        </IonCol>
      </IonItem>

      <IonItem class="Head">
        <IonCheckbox slot="start" v-model="checkboxStates.checkbox3"></IonCheckbox>
        <IonCol class="title label">Email to 30,000+ of our members</IonCol>
        <IonCol class="DatePrice">
          <IonCol class="price">£850</IonCol>
          <IonCol class="date">ChooseDate</IonCol>
          <IonCol>
            <IonDatetimeButton datetime="datetime3"></IonDatetimeButton>
            <IonModal :keep-contents-mounted="true">
              <IonDatetime id="datetime3"></IonDatetime>
            </IonModal>
          </IonCol>
        </IonCol>
        <IonCol class="description label">
          <li>We have 30,000+ members; we can send your exclusive email to all of them for only £850.</li>
          <li>This includes a £50 discount if you were to send 3 emails to any 10,000 of our 30,000+ members!</li>
        </IonCol>
      </IonItem>

      <IonItem class="Head">
        <IonCheckbox slot="start" v-model="checkboxStates.checkbox4"></IonCheckbox>
        <IonCol class="title label">One Month Logo Display On LEN's Meetup Groups with 30,000+ members</IonCol>
        <IonCol class="DatePrice">
          <IonCol class="price">£250</IonCol>
          <IonCol class="date">ChooseDate</IonCol>
          <IonCol>
            <IonDatetimeButton datetime="datetime4"></IonDatetimeButton>
            <IonModal :keep-contents-mounted="true">
              <IonDatetime id="datetime4"></IonDatetime>
            </IonModal>
          </IonCol>
        </IonCol>
        <IonCol class="description label">
          <li>We place your logo, an offer & your link on the left side of all our Meetup Groups with 30,000+ members so at least 30,000+ members see it, plus many who are not our members & check our groups regularly!</li>
        </IonCol>
      </IonItem>
    </IonRow>

    <IonRow class="fields">
      <IonItem>
        <IonInput class="inputFields" label="Enter Your Mobile/LandLine Number" label-placement="floating" :counter="true" :maxlength="100"></IonInput>
      </IonItem>
      <IonItem>
        <IonInput class="inputFields" label="Enter Link To Redirect" label-placement="floating" :counter="true" :maxlength="100"></IonInput>
      </IonItem>
      <IonItem>
        <IonInput class="inputFields" v-model="businessTwitter" type="url" label="Business Twitter/X Profile Link" label-placement="floating" :counter="true" :maxlength="70" ></IonInput>
      </IonItem>
      <IonItem>
        <IonInput class="inputFields" v-model="businessGoogle" type="url" label="Business Google Profile Link" label-placement="floating" :counter="true" :maxlength="70" ></IonInput>
      </IonItem>
      <IonItem>
        <IonInput class="inputFields" v-model="businessFacebook" type="url" label="Business Facebook Profile Link" label-placement="floating" :counter="true" :maxlength="70" ></IonInput>
      </IonItem>
      <IonItem>
        <IonInput class="inputFields" v-model="businessLinkedIn" type="url" label="Business LinkedIn Profile Link" label-placement="floating" :counter="true" :maxlength="70" ></IonInput>
      </IonItem>
      <IonItem>
        <IonSelect v-model="selectedCategory" placeholder="Repeat Sponsorship Partnership & Billing Every" fill="outline">
          <IonSelectOption value="Week">Week</IonSelectOption>
          <IonSelectOption value="Month">Month</IonSelectOption>
          <IonSelectOption value="Every 2 Months">Every 2 Months</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonItem>
        <IonLabel>Upload Image</IonLabel>
        <input type="file" @change="onFileSelected" />
      </IonItem>
      <IonItem>
        <IonTextarea class="inputFields" label="Enter Your Description" label-placement="floating" :counter="true" :auto-grow="true" :maxlength="1000"></IonTextarea>
      </IonItem>
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
import { defineComponent, ref } from 'vue';
import { IonInput, IonItem, IonLabel, IonSelect, IonSelectOption, IonTextarea, IonCheckbox, IonGrid, IonRow, IonCol, IonButton, IonDatetime, IonDatetimeButton, IonModal } from '@ionic/vue';

// Function to sanitize input
const sanitizeInput = (input: string): string => {
  return input
    .replace(/<script.*?>.*?<\/script>/gi, '')  // Remove script tags
    .replace(/<[\/\!]*?[^<>]*?>/gi, '')       // Remove HTML tags
    .replace(/&(?:lt|gt|amp|quot|#39);/g, '') // Remove HTML entities
    .replace(/[<>\/\\'";]/g, '');              // Remove potentially harmful characters
};

// Function to validate URLs
const isValidUrl = (url: string): boolean => {
  const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?$/i;
  return urlPattern.test(url);
};

export default defineComponent({
  name: 'SponsorshipPartnershipFormComponent',
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
      checkbox3: false,
      checkbox4: false,
    });

    const selectedCategory = ref<string | null>(null);

    const businessTwitter = ref<string>('');
    const businessGoogle = ref<string>('');
    const businessFacebook = ref<string>('');
    const businessLinkedIn = ref<string>('');

    const customFormatter = (inputLength: number, maxLength: number) => {
      return `${maxLength - inputLength} characters remaining`;
    };

    const onFileSelected = (event: Event) => {
      const input = event.target as HTMLInputElement;
      const file = input.files?.[0];
      if (file) {
        console.log(file);
      }
    };

    const submitContent = () => {
      // Sanitize all text fields
      const sanitizedData = {
        checkboxStates: {
          checkbox1: checkboxStates.value.checkbox1,
          checkbox2: checkboxStates.value.checkbox2,
          checkbox3: checkboxStates.value.checkbox3,
          checkbox4: checkboxStates.value.checkbox4,
        },
        selectedCategory: sanitizeInput(selectedCategory.value || ''),
        businessTwitter: isValidUrl(businessTwitter.value) ? businessTwitter.value : '',
        businessGoogle: isValidUrl(businessGoogle.value) ? businessGoogle.value : '',
        businessFacebook: isValidUrl(businessFacebook.value) ? businessFacebook.value : '',
        businessLinkedIn: isValidUrl(businessLinkedIn.value) ? businessLinkedIn.value : '',
      };

      console.log('Sanitized Data:', sanitizedData);
      // Here you should send sanitizedData to your API endpoint
    };

    return {
      checkboxStates,
      selectedCategory,
      customFormatter,
      onFileSelected,
      submitContent,
      businessTwitter,
      businessGoogle,
      businessFacebook,
      businessLinkedIn,
    };
  },
});
</script>


<style scoped>

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
    white-space: wrap; 
    /* Prevent text wrapping #important */
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
  .fields{
    margin-top: 20px;
  }
  .inputFields{
    border: 1px solid gray;
    border-radius: 8px;
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
    .fields{
      display: flex;
      flex-direction: column;
    }
}
</style>
