<template>
  <IonGrid class="Grid">
    <!-- Business Profile Section -->
    <IonRow class="BusinessProfileSection">
      <IonRow class="SectionTitle">
        <IonTitle>Business Section</IonTitle>
      </IonRow>
      <IonInput v-model="businessName" label="Enter Your Business Name" label-placement="floating" :counter="true" :maxlength="100" :counter-formatter="customFormatter" fill="outline"></IonInput>
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
        <IonSelect v-model="businessRevenue" placeholder="Business Revenue Yearly" fill="outline">
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
        <input type="file" @change="onFileSelected" />
      </IonItem>

      <IonCol>
        <IonInput v-model="businessTwitter" type="url" label="Business Twitter/X Profile Link" label-placement="floating" :counter="true" :maxlength="70" :counter-formatter="customFormatter" fill="outline"></IonInput>
      </IonCol>
      <IonCol>
        <IonInput v-model="businessGoogle" type="url" label="Business Google Profile Link" label-placement="floating" :counter="true" :maxlength="70" :counter-formatter="customFormatter" fill="outline"></IonInput>
      </IonCol>
      <IonCol>
        <IonInput v-model="businessFacebook" type="url" label="Business Facebook Profile Link" label-placement="floating" :counter="true" :maxlength="70" :counter-formatter="customFormatter" fill="outline"></IonInput>
      </IonCol>
      <IonCol>
        <IonInput v-model="businessLinkedIn" type="url" label="Business LinkedIn Profile Link" label-placement="floating" :counter="true" :maxlength="70" :counter-formatter="customFormatter" fill="outline"></IonInput>
      </IonCol>
    </IonRow>

    <!-- Personal Profile Section -->
    <IonRow class="PersonalProfileSection">
      <IonRow class="SectionTitle">
        <IonTitle>Personal Section</IonTitle>
      </IonRow>
      <IonCol>
        <IonInput v-model="firstName" label="Your First Name" label-placement="floating" :counter="true" :maxlength="40" :counter-formatter="customFormatter" fill="outline"></IonInput>
      </IonCol>
      <IonCol>
        <IonInput v-model="lastName" label="Your Last Name" label-placement="floating" :counter="true" :maxlength="40" :counter-formatter="customFormatter" fill="outline"></IonInput>
      </IonCol>
      <IonCol>
        <IonSelect v-model="jobPosition" placeholder="Your Job Position" fill="outline">
          <IonSelectOption value="position1">Position 1</IonSelectOption>
          <IonSelectOption value="position2">Position 2</IonSelectOption>
          <IonSelectOption value="position3">Position 3</IonSelectOption>
        </IonSelect>
      </IonCol>
      <IonCol>
        <IonSelect v-model="yearlySalary" placeholder="Your Yearly Salary" fill="outline">
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
        <input type="file" @change="onFileSelected" />
      </IonItem>

      <IonCol>
        <IonInput v-model="personalLinkedIn" type="url" label="Personal LinkedIn Profile Link" label-placement="floating" :counter="true" :maxlength="70" :counter-formatter="customFormatter" fill="outline"></IonInput>
      </IonCol>
      <IonCol>
        <IonInput v-model="personalGoogle" type="url" label="Personal Google Profile Link" label-placement="floating" :counter="true" :maxlength="70" :counter-formatter="customFormatter" fill="outline"></IonInput>
      </IonCol>
      <IonCol>
        <IonInput v-model="personalFacebook" type="url" label="Personal Facebook Profile Link" label-placement="floating" :counter="true" :maxlength="70" :counter-formatter="customFormatter" fill="outline"></IonInput>
      </IonCol>
      <IonCol>
        <IonInput v-model="personalTwitter" type="url" label="Personal Twitter/X Profile Link" label-placement="floating" :counter="true" :maxlength="70" :counter-formatter="customFormatter" fill="outline"></IonInput>
      </IonCol>

      <IonRow class="Summaries">
        <IonCol>
          <IonTextarea v-model="summaryWhoWeAre" class="Summaries" label="Who We Are, What We do" label-placement="floating" :counter="true" :maxlength="300" :counter-formatter="customFormatter"></IonTextarea>
        </IonCol>
        <IonCol>
          <IonTextarea v-model="summaryWhatWeProvide" class="Summaries" label="What We Provide" label-placement="floating" :counter="true" :auto-grow="true" :maxlength="500" :counter-formatter="customFormatter"></IonTextarea>
        </IonCol>
        <IonCol>
          <IonTextarea v-model="summaryWhatWeLookingFor" class="Summaries" label="What We Are Looking For" label-placement="floating" :counter="true" :auto-grow="true" :maxlength="500" :counter-formatter="customFormatter"></IonTextarea>
        </IonCol>
      </IonRow>
    </IonRow>
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
  IonRadio,
  IonRadioGroup,
  IonList,
  IonInput,
} from '@ionic/vue';

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
    IonRadio,
    IonRadioGroup,
    IonList,
    IonInput,
  },
  setup() {
    const businessName = ref<string>('');
    const businessCategory = ref<string | null>(null);
    const businessCountry = ref<string | null>(null);
    const businessCity = ref<string | null>(null);
    const businessRevenue = ref<string | null>(null);
    const businessEmployees = ref<string | null>(null);
    const businessEstablished = ref<string | null>(null);
    const businessLogo = ref<string | null>(null);
    const businessTwitter = ref<string>('');
    const businessGoogle = ref<string>('');
    const businessFacebook = ref<string>('');
    const businessLinkedIn = ref<string>('');
    const firstName = ref<string>('');
    const lastName = ref<string>('');
    const jobPosition = ref<string | null>(null);
    const yearlySalary = ref<string | null>(null);
    const age = ref<string | null>(null);
    const country = ref<string | null>(null);
    const city = ref<string | null>(null);
    const facePhoto = ref<string | null>(null);
    const personalLinkedIn = ref<string>('');
    const personalGoogle = ref<string>('');
    const personalFacebook = ref<string>('');
    const personalTwitter = ref<string>('');
    const summaryWhoWeAre = ref<string>('');
    const summaryWhatWeProvide = ref<string>('');
    const summaryWhatWeLookingFor = ref<string>('');

    const customFormatter = (inputLength: number, maxLength: number) => {
      return `${maxLength - inputLength} characters remaining`;
    };

    const onFileSelected = (event: Event) => {
      const input = event.target as HTMLInputElement;
      const file = input.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          if (input.name === 'businessLogo') {
            businessLogo.value = reader.result as string;
          } else if (input.name === 'facePhoto') {
            facePhoto.value = reader.result as string;
          }
        };
      }
    };

    const submitContent = () => {
      const formData = {
        email: '', // You should add email input handling here
        password: '', // You should add password input handling here
        businessName: businessName.value,
        businessCategory: businessCategory.value,
        businessCountry: businessCountry.value,
        businessCity: businessCity.value,
        businessRevenue: businessRevenue.value,
        businessEmployees: businessEmployees.value,
        businessEstablished: businessEstablished.value,
        businessLogo: businessLogo.value,
        businessTwitter: businessTwitter.value,
        businessGoogle: businessGoogle.value,
        businessFacebook: businessFacebook.value,
        businessLinkedIn: businessLinkedIn.value,
        firstName: firstName.value,
        lastName: lastName.value,
        jobPosition: jobPosition.value,
        yearlySalary: yearlySalary.value,
        age: age.value,
        country: country.value,
        city: city.value,
        facePhoto: facePhoto.value,
        personalLinkedIn: personalLinkedIn.value,
        personalGoogle: personalGoogle.value,
        personalFacebook: personalFacebook.value,
        personalTwitter: personalTwitter.value,
        summaryWhoWeAre: summaryWhoWeAre.value,
        summaryWhatWeProvide: summaryWhatWeProvide.value,
        summaryWhatWeLookingFor: summaryWhatWeLookingFor.value,
      };

      console.log('Form Data:', formData);
      // Here you should send formData to your API endpoint
    };

    return {
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
      summaryWhoWeAre,
      summaryWhatWeProvide,
      summaryWhatWeLookingFor,
      onFileSelected,
      submitContent,
      customFormatter,
    };
  },
});
</script>
