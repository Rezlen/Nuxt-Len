<template>
  <IonGrid class="Grid">
    <!-- Business Profile Section -->
    <IonRow class="BusinessProfileSection">
      <IonRow class="SectionTitle">
        <IonTitle>Business Section</IonTitle>
      </IonRow>
      <IonInput v-model="businessName" label="Enter Your Business Name" label-placement="floating" :counter="true"
        :maxlength="100" :counter-formatter="customFormatter" fill="outline"></IonInput>
      <IonCol>
        <IonSelect v-model="businessCategory" placeholder="Business Main Category" fill="outline">
          <IonSelectOption value="category1">Category 1</IonSelectOption>
          <IonSelectOption value="category2">Category 2</IonSelectOption>
          <IonSelectOption value="category3">Category 3</IonSelectOption>
        </IonSelect>
      </IonCol>
      <IonCol>
        <IonSelect v-model="businessCountry" placeholder="Business Main Country" fill="outline">
          <IonSelectOption value="country1">Country 1</IonSelectOption>
          <IonSelectOption value="country2">Country 2</IonSelectOption>
          <IonSelectOption value="country3">Country 3</IonSelectOption>
        </IonSelect>
      </IonCol>
      <IonCol>
        <IonSelect v-model="businessCity" placeholder="Business Main City" fill="outline">
          <IonSelectOption value="city1">City 1</IonSelectOption>
          <IonSelectOption value="city2">City 2</IonSelectOption>
          <IonSelectOption value="city3">City 3</IonSelectOption>
        </IonSelect>
      </IonCol>
      <IonCol>
        <IonSelect class="RevenueSalary" v-model="businessRevenue" placeholder="Business Revenue Yearly" fill="outline">
          <IonSelectOption value="revenue1">Revenue 1</IonSelectOption>
          <IonSelectOption value="revenue2">Revenue 2</IonSelectOption>
          <IonSelectOption value="revenue3">Revenue 3</IonSelectOption>
        </IonSelect>
      </IonCol>
      <IonCol>
        <IonSelect v-model="businessEmployees" placeholder="Number Of Employees" fill="outline">
          <IonSelectOption value="employees1">Employees 1</IonSelectOption>
          <IonSelectOption value="employees2">Employees 2</IonSelectOption>
          <IonSelectOption value="employees3">Employees 3</IonSelectOption>
        </IonSelect>
      </IonCol>
      <IonCol>
        <IonSelect v-model="businessEstablished" placeholder="Business Established Year" fill="outline">
          <IonSelectOption value="year1">Year 1</IonSelectOption>
          <IonSelectOption value="year2">Year 2</IonSelectOption>
          <IonSelectOption value="year3">Year 3</IonSelectOption>
        </IonSelect>
      </IonCol>

      <IonItem>
        <IonLabel>Upload Business Logo</IonLabel>
        <input type="file" name="businessLogo" @change="onBusinessLogoSelected" />
      </IonItem>

      <IonCol>
        <IonInput v-model="businessTwitter" type="url" label="Business Twitter/X Profile Link"
          label-placement="floating" :counter="true" :maxlength="70" :counter-formatter="customFormatter"
          fill="outline"></IonInput>
      </IonCol>
      <IonCol>
        <IonInput v-model="businessGoogle" type="url" label="Business Google Profile Link" label-placement="floating"
          :counter="true" :maxlength="70" :counter-formatter="customFormatter" fill="outline"></IonInput>
      </IonCol>
      <IonCol>
        <IonInput v-model="businessFacebook" type="url" label="Business Facebook Profile Link"
          label-placement="floating" :counter="true" :maxlength="70" :counter-formatter="customFormatter"
          fill="outline"></IonInput>
      </IonCol>
      <IonCol>
        <IonInput v-model="businessLinkedIn" type="url" label="Business LinkedIn Profile Link"
          label-placement="floating" :counter="true" :maxlength="70" :counter-formatter="customFormatter"
          fill="outline"></IonInput>
      </IonCol>
    </IonRow>

    <!-- Personal Profile Section -->
    <IonRow class="PersonalProfileSection">
      <IonRow class="SectionTitle">
        <IonTitle>Personal Section</IonTitle>
      </IonRow>
      <IonCol>
        <IonInput v-model="firstName" label="Your First Name" label-placement="floating" :counter="true" :maxlength="40"
          :counter-formatter="customFormatter" fill="outline"></IonInput>
      </IonCol>
      <IonCol>
        <IonInput v-model="lastName" label="Your Last Name" label-placement="floating" :counter="true" :maxlength="40"
          :counter-formatter="customFormatter" fill="outline"></IonInput>
      </IonCol>
      <IonCol>
        <IonSelect v-model="jobPosition" placeholder="Your Job Position" fill="outline">
          <IonSelectOption value="position1">Position 1</IonSelectOption>
          <IonSelectOption value="position2">Position 2</IonSelectOption>
          <IonSelectOption value="position3">Position 3</IonSelectOption>
        </IonSelect>
      </IonCol>
      <IonCol>
        <IonSelect class="RevenueSalary" v-model="yearlySalary" placeholder="Your Yearly Salary" fill="outline">
          <IonSelectOption value="salary1">Salary 1</IonSelectOption>
          <IonSelectOption value="salary2">Salary 2</IonSelectOption>
          <IonSelectOption value="salary3">Salary 3</IonSelectOption>
        </IonSelect>
      </IonCol>
      <IonCol>
        <IonSelect v-model="age" placeholder="Your Age" fill="outline">
          <IonSelectOption value="age1">Age 1</IonSelectOption>
          <IonSelectOption value="age2">Age 2</IonSelectOption>
          <IonSelectOption value="age3">Age 3</IonSelectOption>
        </IonSelect>
      </IonCol>
      <IonCol>
        <IonSelect v-model="country" placeholder="Your Country" fill="outline">
          <IonSelectOption value="country1">Country 1</IonSelectOption>
          <IonSelectOption value="country2">Country 2</IonSelectOption>
          <IonSelectOption value="country3">Country 3</IonSelectOption>
        </IonSelect>
      </IonCol>
      <IonCol>
        <IonSelect v-model="city" placeholder="Your City" fill="outline">
          <IonSelectOption value="city1">City 1</IonSelectOption>
          <IonSelectOption value="city2">City 2</IonSelectOption>
          <IonSelectOption value="city3">City 3</IonSelectOption>
        </IonSelect>
      </IonCol>

      <IonItem>
        <IonLabel>Upload Face Photo</IonLabel>
        <input type="file" name="facePhoto" @change="onFacePhotoSelected" />
      </IonItem>

      <IonCol>
        <IonInput v-model="personalLinkedIn" type="url" label="Personal LinkedIn Profile Link"
          label-placement="floating" :counter="true" :maxlength="70" :counter-formatter="customFormatter"
          fill="outline"></IonInput>
      </IonCol>
      <IonCol>
        <IonInput v-model="personalGoogle" type="url" label="Personal Google Profile Link" label-placement="floating"
          :counter="true" :maxlength="70" :counter-formatter="customFormatter" fill="outline"></IonInput>
      </IonCol>
      <IonCol>
        <IonInput v-model="personalFacebook" type="url" label="Personal Facebook Profile Link"
          label-placement="floating" :counter="true" :maxlength="70" :counter-formatter="customFormatter"
          fill="outline"></IonInput>
      </IonCol>
      <IonCol>
        <IonInput v-model="personalTwitter" type="url" label="Personal Twitter/X Profile Link"
          label-placement="floating" :counter="true" :maxlength="70" :counter-formatter="customFormatter"
          fill="outline"></IonInput>
      </IonCol>

      <IonRow class="Summaries">
        <IonCol>
          <IonTextarea v-model="summaryWhoWeAreWhatWeDo" class="Summaries" label="Who We Are, What We do"
            label-placement="floating" :counter="true" :maxlength="300" :counter-formatter="customFormatter">
          </IonTextarea>
        </IonCol>
        <IonCol>
          <IonTextarea v-model="summaryWhatWeProvide" class="Summaries" label="What We Provide"
            label-placement="floating" :counter="true" :auto-grow="true" :maxlength="500"
            :counter-formatter="customFormatter"></IonTextarea>
        </IonCol>
        <IonCol>
          <IonTextarea v-model="summaryWhatWeLookingFor" class="Summaries" label="What We Are Looking For"
            label-placement="floating" :counter="true" :auto-grow="true" :maxlength="500"
            :counter-formatter="customFormatter"></IonTextarea>
        </IonCol>
      </IonRow>
    </IonRow>

    <!-- Submit Button -->
    <IonButton class="UpdateBTN" expand="block" title="SubmitBTN" @click="submitContent">Update</IonButton>
  </IonGrid>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonTextarea,
  IonInput,
} from '@ionic/vue';

// Function to sanitize input
const sanitizeInput = (input: string): string => {
  return input
    .replace(/<script.*?>.*?<\/script>/gi, '')  // Remove script tags
    .replace(/<[\/\!]*?[^<>]*?>/gi, '')       // Remove HTML tags
    .replace(/&(?:lt|gt|amp|quot|#39);/g, '') // Remove HTML entities
    .replace(/[<>\/\\'";]/g, '');              // Remove potentially harmful characters
};

// Function to validate URLs
function isValidUrl(url: string): boolean {
  const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?$/i;
  return urlPattern.test(url);
}

export default defineComponent({
  name: 'FormProfilePublicSectionComponent',
  components: {
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonButton,
    IonTextarea,
    IonInput,
  },
  setup() {
    // Business Section
    const businessName = ref<string>('');
    const businessCategory = ref<string | null>(null);
    const businessCountry = ref<string | null>(null);
    const businessCity = ref<string | null>(null);
    const businessRevenue = ref<number | null>(null);
    const businessEmployees = ref<number | null>(null);
    const businessEstablished = ref<number | null>(null);
    const businessLogo = ref<string | null>(null);
    const businessTwitter = ref<string>('');
    const businessGoogle = ref<string>('');
    const businessFacebook = ref<string>('');
    const businessLinkedIn = ref<string>('');

    // Personal Section
    const firstName = ref<string>('');
    const lastName = ref<string>('');
    const jobPosition = ref<string | null>(null);
    const yearlySalary = ref<number | null>(null);
    const age = ref<number | null>(null);
    const country = ref<string | null>(null);
    const city = ref<string | null>(null);
    const facePhoto = ref<string | null>(null);
    const personalLinkedIn = ref<string>('');
    const personalGoogle = ref<string>('');
    const personalFacebook = ref<string>('');
    const personalTwitter = ref<string>('');
    const summaryWhoWeAreWhatWeDo = ref<string>('');
    const summaryWhatWeProvide = ref<string>('');
    const summaryWhatWeLookingFor = ref<string>('');

    const customFormatter = (inputLength: number, maxLength: number) => {
      return `${maxLength - inputLength} characters remaining`;
    };

    const onBusinessLogoSelected = (event: Event) => {
      const input = event.target as HTMLInputElement;
      const file = input.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          businessLogo.value = reader.result as string;
        };
        reader.readAsDataURL(file);
      }
    };

    const onFacePhotoSelected = (event: Event) => {
      const input = event.target as HTMLInputElement;
      const file = input.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          facePhoto.value = reader.result as string;
        };
        reader.readAsDataURL(file);
      }
    };

    const submitContent = () => {
      // Sanitize all text fields
      const sanitizedData = {
        // For demonstration, email and password fields are not included here
        email: sanitizeInput(''), // Add email input handling
        password: sanitizeInput(''), // Add password input handling

        // Business Section
        businessName: sanitizeInput(businessName.value),
        businessCategory: sanitizeInput(businessCategory.value ?? ''),
        businessCountry: sanitizeInput(businessCountry.value ?? ''),
        businessCity: sanitizeInput(businessCity.value ?? ''),
        businessRevenue: businessRevenue.value, // Number fields don't need sanitization
        businessEmployees: businessEmployees.value, // Number fields don't need sanitization
        businessEstablished: businessEstablished.value, // Number fields don't need sanitization
        businessLogo: businessLogo.value, // URL fields don't need sanitization
        businessTwitter: isValidUrl(businessTwitter.value) ? businessTwitter.value : '',
        businessGoogle: isValidUrl(businessGoogle.value) ? businessGoogle.value : '',
        businessFacebook: isValidUrl(businessFacebook.value) ? businessFacebook.value : '',
        businessLinkedIn: isValidUrl(businessLinkedIn.value) ? businessLinkedIn.value : '',

        // Personal Section
        firstName: sanitizeInput(firstName.value),
        lastName: sanitizeInput(lastName.value),
        jobPosition: sanitizeInput(jobPosition.value ?? ''),
        yearlySalary: yearlySalary.value, // Number fields don't need sanitization
        age: age.value, // Number fields don't need sanitization
        country: sanitizeInput(country.value ?? ''),
        city: sanitizeInput(city.value ?? ''),
        facePhoto: facePhoto.value, // URL fields don't need sanitization
        personalLinkedIn: isValidUrl(personalLinkedIn.value) ? personalLinkedIn.value : '',
        personalGoogle: isValidUrl(personalGoogle.value) ? personalGoogle.value : '',
        personalFacebook: isValidUrl(personalFacebook.value) ? personalFacebook.value : '',
        personalTwitter: isValidUrl(personalTwitter.value) ? personalTwitter.value : '',
        summaryWhoWeAreWhatWeDo: sanitizeInput(summaryWhoWeAreWhatWeDo.value).substring(0, 10000),
        summaryWhatWeProvide: sanitizeInput(summaryWhatWeProvide.value).substring(0, 10000),
        summaryWhatWeLookingFor: sanitizeInput(summaryWhatWeLookingFor.value).substring(0, 10000),
      };

      console.log('Form Data:', sanitizedData);
      // Here you should send sanitizedData to your API endpoint
    };

    return {
      // Business Section
      businessName,
      businessCategory,
      businessCountry,
      businessCity,
      businessRevenue,
      businessEmployees,
      businessEstablished,
      businessLogo,
      businessTwitter,
      businessGoogle,
      businessFacebook,
      businessLinkedIn,

      // Personal section
      firstName,
      lastName,
      jobPosition,
      yearlySalary,
      age,
      country,
      city,
      facePhoto,
      personalLinkedIn,
      personalGoogle,
      personalFacebook,
      personalTwitter,
      summaryWhoWeAreWhatWeDo,
      summaryWhatWeProvide,
      summaryWhatWeLookingFor,
      onBusinessLogoSelected,
      onFacePhotoSelected,
      submitContent,
      customFormatter,
    };
  },
});
</script>




<style scoped>
  ion-radio {
    border: solid 1px gray;
    padding: 5px;
    border-radius: 5px;
  }
  ion-grid {
    overflow-y: auto; /* Enable vertical scrolling */
    height: 100%; /* Full height to fit the parent */
    margin-top: 20px;
  }

  ion-textarea{
    border-radius: 7px;
    border:1px gray solid;
    margin-bottom: 10px;
  }

  input[type="file"] {
    width: 100%;
  }
  .RevenueSalary {
  box-shadow: 0 4px 8px rgba(34, 139, 34, 0.8);
  /* X-offset, Y-offset, blur radius, and color */
  }

  .Summaries {
    width: 100%;
    gap: 5px;
  }

  .PersonalProfileSection,
  .BusinessProfileSection {
    margin: 10px 0;
    padding: 20px 0;
    border: 3px solid gray;
    box-shadow: 0 4px 8px rgba(75, 16, 214, 1.2); /* X-offset, Y-offset, blur radius, and color */
    border-radius: 7px;
  }
  
  .SectionTitle {
    display: flex;
    text-align: center;
    justify-content: center;
    /* align-items: center; */
    /* align-content: center; */
    font-size: 30px;
    font-weight: bold;
    width: 100%;
    padding: 20px;
  }

  .UpdateBTN {
    width: 100%;
  }

</style>
