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

// Define the interface for the form fields
interface FormFields {
  exhibitedMoreThan: string;
  visitedMoreThan: string;
  bidCapPerReachView: string;
  bidCapPerLinkClick: string;
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
  props: {
    // Prop to control the visibility of the row from the parent component
    isBidViewVisibleProp: {
      type: Boolean,
      required: true
    }
  },
  setup(props, { emit }) {
    const formFields = ref<FormFields>({
      exhibitedMoreThan: '',
      visitedMoreThan: '',
      bidCapPerReachView: '',
      bidCapPerLinkClick: '',
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

    // Emit an event to the parent to toggle the visibility
    const toggleBidView = () => {
      emit('toggle-bid-view'); // Emit event to parent
    };

    const submitContent = () => {
      console.log('Submit button clicked');
    };

    return {
      addCircleOutline,
      closeCircleOutline,
      informationCircleOutline,
      submitContent,
      formFields,
      sanitizedFields,
      toggleBidView
    };
  }
});
</script>

<template>
  <IonRow v-if="isBidViewVisibleProp" class="clickViewBid">
    <IonInput class="clickViewBidInputFields" v-model="formFields.bidCapPerReachView" type="text"
      label="Set Bid Cap per Reach/View:" placeholder="Enter Here" :maxlength="5"> </IonInput>
    <IonInput class="clickViewBidInputFields" v-model="formFields.bidCapPerLinkClick" type="text"
      label="Set Bid Cap per Link Click:" placeholder="Enter Here" :maxlength="5"></IonInput>
    We won't bid more than this amount for any individual link click. You may have trouble with spending your budget if
    this amount is too low.
  </IonRow>
</template>
