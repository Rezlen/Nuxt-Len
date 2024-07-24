<template>
  <IonGrid class="Grid">
    <!-- Existing code for profile form -->

    <!-- Submit Button -->
    <IonButton class="UpdateBTN" expand="block" title="SubmitBTN" @click="handleSubmit">Update</IonButton>

    <!-- Form Submission Modal -->
    <FormSubmissionModal :isOpen="isModalOpen" :title="modalTitle" :message="modalMessage"
      @close="isModalOpen = false" />
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
import FormSubmissionModal from './FormSubmissionModal.vue'; // Import the new modal component

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
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
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
    FormSubmissionModal
  },
  setup() {
    // Form data
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

    const isModalOpen = ref<boolean>(false);
    const modalTitle = ref<string>('');
    const modalMessage = ref<string>('');

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

    const handleSubmit = () => {
      // Validate and sanitize inputs
      const sanitizedData = {
        // For demonstration, email and password fields are not included here
        email: sanitizeInput(''), // Add email input handling
        password: sanitizeInput(''), // Add password input handling

        // Business Section
        businessName: sanitizeInput(businessName.value),
        businessCategory: sanitizeInput(businessCategory.value ?? ''),
        businessCountry: sanitizeInput(businessCountry.value ?? ''),
        businessCity: sanitizeInput(businessCity.value ?? ''),
        businessRevenue: businessRevenue.value,
        businessEmployees: businessEmployees.value,
        businessEstablished: businessEstablished.value,
        businessLogo: businessLogo.value,
        businessTwitter: isValidUrl(businessTwitter.value) ? businessTwitter.value : '',
        businessGoogle: isValidUrl(businessGoogle.value) ? businessGoogle.value : '',
        businessFacebook: isValidUrl(businessFacebook.value) ? businessFacebook.value : '',
        businessLinkedIn: isValidUrl(businessLinkedIn.value) ? businessLinkedIn.value : '',

        // Personal Section
        firstName: sanitizeInput(firstName.value),
        lastName: sanitizeInput(lastName.value),
        jobPosition: sanitizeInput(jobPosition.value ?? ''),
        yearlySalary: yearlySalary.value,
        age: age.value,
        country: sanitizeInput(country.value ?? ''),
        city: sanitizeInput(city.value ?? ''),
        facePhoto: facePhoto.value,
        personalLinkedIn: isValidUrl(personalLinkedIn.value) ? personalLinkedIn.value : '',
        personalGoogle: isValidUrl(personalGoogle.value) ? personalGoogle.value : '',
        personalFacebook: isValidUrl(personalFacebook.value) ? personalFacebook.value : '',
        personalTwitter: isValidUrl(personalTwitter.value) ? personalTwitter.value : '',
        summaryWhoWeAreWhatWeDo: sanitizeInput(summaryWhoWeAreWhatWeDo.value).substring(0, 10000),
        summaryWhatWeProvide: sanitizeInput(summaryWhatWeProvide.value).substring(0, 10000),
        summaryWhatWeLookingFor: sanitizeInput(summaryWhatWeLookingFor.value).substring(0, 10000),
      };

      // Show the modal with submission result
      modalTitle.value = 'Submission Status';
      modalMessage.value = 'Your form has been submitted successfully!';
      isModalOpen.value = true;

      console.log('Form Data:', sanitizedData);
      // Send sanitizedData to your API endpoint
    };

    return {
      // Form data
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
      summaryWhoWeAreWhatWeDo,
      summaryWhatWeProvide,
      summaryWhatWeLookingFor,
      onBusinessLogoSelected,
      onFacePhotoSelected,
      handleSubmit,
      customFormatter,
      isModalOpen,
      modalTitle,
      modalMessage,
    };
  },
});
</script>

<style scoped>
/* Add any specific styles for your component here */
</style>
