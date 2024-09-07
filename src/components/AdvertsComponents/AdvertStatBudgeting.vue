<template>
  <IonGrid>
    <!-- Header text -->
    <p class="Header1">Contact Us</p>
    <p class="Header3">Fill the form & submit, we get back to you in less than 48 hours!</p>
    
    <IonRow class="fieldsAddress">

      <IonCol class="fields">
        <IonRow class="field">
          <IonInput  label="First Name" label-placement="floating"></IonInput>
        </IonRow>
        <IonRow class="field">
          <IonInput  label="Last Name" label-placement="floating"></IonInput>
        </IonRow>
        <IonRow class="field">
          <IonInput  label="Email" label-placement="floating"></IonInput>
        </IonRow>
        <IonRow class="field">
          <IonInput  label="Phone Number" label-placement="floating"></IonInput>
        </IonRow>
        <IonRow class="field">
          <IonTextarea  label="Message" label-placement="floating" :counter="true" :auto-grow="true" :maxlength="500"></IonTextarea>
        </IonRow>
      </IonCol>

      <IonCol class="address">
        <p class="london" >London Address: </p>
        <p>WeWork Moorgate,</p>
        <p>1 Fore Street, London, EC2Y 5EJ</p>
        <p>Whatsapp, Phone, Telegram, Instagram: (0044)7591020664</p>
      </IonCol>

    </IonRow>
      <IonButton class="sendBTN" size="large" expand="block" title="Submit" @click="submitContent">Send</IonButton>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1241.3711555632353!2d-0.09000072764198755!3d51.51794344526064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cabac9690cb%3A0x1beac0a868b864fe!2sWeWork%20-%20Office%20Space%20%26%20Coworking!5e0!3m2!1sen!2sus!4v1723148238968!5m2!1sen!2sus" width="100%" height="250" style="border:0;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

  </IonGrid>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonInput, IonGrid, IonRow, IonCol, IonButton, IonTextarea } from '@ionic/vue';

export default defineComponent({
  name: 'AdvertStatBudgeting',
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
      // Here you should sendBTN form data to your API endpoint
    };

    return {
      submitContent,
    };
  },
});
</script>

<style scoped>
  .Header1,
  .Header3 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: bold;
  }

  .Header1 {
    color: rgb(0, 8, 255);
    font-size: 40px;
  }
  .Header3 {
    margin-top: 80px;
    color: rgb(32, 149, 3);
  }
  .sendBTN {
    width: 100%;
    margin: 30px 0;
  }
  .london {
    font-weight: bold;
  }
  .fields {
    margin-top: 20px;
  }
  .field {
    border: 1px solid gray;
    border-radius: 8px;
  }

  @media (max-width: 600px) {
    .fieldsAddress {
      display: flex;
    }
    .address {
      display: flex;
    }
  }
</style>
