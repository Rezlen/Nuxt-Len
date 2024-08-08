<template>
  <IonGrid>
    <!-- Header text -->
    <p class="Header1">A 100% completed profile entitles you to own 1 LEN share for FREE.</p>
    <p class="Header2">How & when to receive its documents will be announced in due time.</p>
    <p class="Header3">Tempted to buy more shares of the next big thing that might beat LinkedIn? No problem, send us your offer!</p>

    <IonRow class="fields">
      <IonCol>
        <IonInput class="percentage" label="Enter the %" label-placement="floating" :counter="true" :maxlength="2"></IonInput>
      </IonCol>
      <IonCol>
        <IonInput class="amount" label="Enter Your Suggested Amount" label-placement="floating" :counter="true" :maxlength="10"></IonInput>
      </IonCol>
      <IonCol>
        <IonTextarea class="description" label="Optional Description" label-placement="floating" :counter="true" :auto-grow="true" :maxlength="500"></IonTextarea>
      </IonCol>
    </IonRow>

    <p class="terms">
      By clicking on SUBMIT, you agree to London Entrepreneurs Network's
      <a href="/TermsConditionsPage" class="terms-link">TERMS & CONDITIONS</a> and
      <a href="/PrivacyPolicyPage" class="terms-link">PRIVACY POLICY</a>.
    </p>

    <IonButton class="UpdateBTN" size="large" expand="block" title="Submit" @click="submitContent">Submit</IonButton>
  </IonGrid>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonInput, IonGrid, IonRow, IonCol, IonButton, IonTextarea } from '@ionic/vue';

export default defineComponent({
  name: 'SharesTableComponent',
  components: {
    IonInput,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonTextarea,
  },
  setup() {
    const submitContent = () => {
      // Handle form submission
      console.log('Submit button clicked');
      // Here you should send form data to your API endpoint
    };

    return {
      submitContent,
    };
  },
});
</script>

<style scoped>
.Header1,
.Header2,
.Header3 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
}

.Header1 {
  color: red;
}

.Header3 {
  margin-top: 80px;
  color: rgb(32, 149, 3);
}

.UpdateBTN {
  width: 100%;
}

.fields {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
}

.percentage,
.amount,
.description {
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

@media (max-width: 600px) {
  /* Add responsive styles if needed */
}
</style>
