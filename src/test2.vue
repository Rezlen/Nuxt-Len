<template>
  <IonGrid>
    <IonRow class="importPaste">
      <IonCol class="importFrom">
        <p>Imports your emails from:</p>
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" alt="Excel" viewBox="0 0 48 48">
            <!-- SVG content here -->
          </svg>
        </a>
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" name="Outlook" viewBox="0 0 48 48">
            <!-- SVG content here -->
          </svg>
        </a>
        <a href="#"><IonIcon class="linkedin-icon" size="large" :icon="logoLinkedin" /></a>
        <a href="#"><IonIcon class="google-icon" size="large" :icon="logoGoogle" /></a>
        <a href="#"><IonIcon class="facebook-icon" size="large" :icon="logoFacebook" /></a>
        <a href="#"><IonIcon class="twitter-icon" size="large" :icon="logoTwitter" /></a>
        <a href="#"><IonIcon class="yahoo-icon" size="large" :icon="logoYahoo" /></a>
      </IonCol>

      <IonCol>
        <IonTextarea class="pasteEmailsHere" v-model="pasteEmailsHere" label="OR; copy then 'Paste' your emails here" label-placement="floating" :counter="true" :auto-grow="true" :maxlength="500" />
      </IonCol>
    </IonRow>

    <IonRow class="displays">
      <IonCol>
        <IonSelect v-model="displayImportedFrom" placeholder="Display Imported Emails From" fill="outline">
          <IonSelectOption value="Gmail">Gmail</IonSelectOption>
          <IonSelectOption value="Yahoo">Yahoo</IonSelectOption>
          <IonSelectOption value="Outlook">Outlook</IonSelectOption>
          <IonSelectOption value="Excel">Excel</IonSelectOption>
          <IonSelectOption value="Facebook">Facebook</IonSelectOption>
          <IonSelectOption value="LinkedIn">LinkedIn</IonSelectOption>
        </IonSelect>
      </IonCol>

      <IonCol>
        <IonSelect v-model="displayMyConnections" placeholder="Display My Connections" fill="outline">
          <IonSelectOption value="Gmail">My Connections</IonSelectOption>
          <IonSelectOption value="Yahoo">Pending Connection Request To Me</IonSelectOption>
          <IonSelectOption value="Outlook">Pending Connection Request To Others</IonSelectOption>
        </IonSelect>
      </IonCol>
      <IonRow class="displayConnectionAndEmails"></IonRow>
    </IonRow>
  </IonGrid>
</template>





<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonCard, IonButton, IonCol, IonGrid, IonIcon, IonRow, IonTextarea, IonSelect, IonSelectOption } from '@ionic/vue';
import { logoFacebook, logoTwitter, logoGoogle, logoLinkedin, logoYahoo } from 'ionicons/icons';

// Function to sanitize input
const sanitizeInput = (input: string): string => {
  return input
    .replace(/<script.*?>.*?<\/script>/gi, '')  // Remove script tags
    .replace(/<[\/\!]*?[^<>]*?>/gi, '')       // Remove HTML tags
    .replace(/&(?:lt|gt|amp|quot|#39);/g, '') // Remove HTML entities
    .replace(/[<>\/\\'";]/g, '');              // Remove potentially harmful characters
};

export default defineComponent({
  name: 'MyConnectionComponent',
  components: {
    IonCard, 
    IonButton,
    IonCol,
    IonGrid,
    IonRow,
    IonIcon,
    IonTextarea,
    IonSelect,
    IonSelectOption,
  },
  setup() {
    const pasteEmailsHere = ref<string>('');
    const displayImportedFrom = ref<string | null>(null);
    const displayMyConnections = ref<string | null>(null);

    const submitContent = () => {
      // Sanitize all text fields
      const sanitizedData = {
        displayImportedFrom: sanitizeInput(displayImportedFrom.value ?? ''),
        pasteEmailsHere: sanitizeInput(pasteEmailsHere.value).substring(0, 10000),
      };
      console.log('Form Data:', sanitizedData);
      // Here you should send sanitizedData to your API endpoint
    };

    return {
      pasteEmailsHere,
      displayImportedFrom,
      displayMyConnections,
      logoFacebook,
      logoTwitter,
      logoGoogle,
      logoLinkedin,
      logoYahoo,
      submitContent,
    };
  },
});
</script>




<style scoped>
  ion-grid {
    overflow-y: auto; /* Enable vertical scrolling */
    height: 100%; /* Full height to fit the parent */
    margin-top: 20px;
  }

  .image {
    display: flex;
    justify-content: center;
  }

  /* Social media icon colors */
  .linkedin-icon {
    color: #0077b5; /* LinkedIn blue */
  }

  .google-icon {
    color: #db4437; /* Google red */
  }

  .facebook-icon {
    color: #3b5998; /* Facebook blue */
  }

  .twitter-icon {
    color: #1da1f2; /* Twitter blue */
  }

  .yahoo-icon {
    color: #720e9e; /* Yahoo purple */
  }

  .pasteEmailsHere,
  .importFrom {
    width: 100%;
    height: 100px; /* Adjust as needed */
    border: solid 1px gray;
    border-radius: 7px;
  }
  .displayConnectionAndEmails {
    height: 200px;
    border: 3px solid rgb(202, 9, 9);
  }

  @media (max-width: 600px) {
    ion-grid {
      /* display: flex; */
      /* flex-direction: column; */
      background-color: red;

    }

    .importPaste,
    .displays {
      /* flex-direction: column; */
      background-color: red;

      
    }

    .importFrom {
      /* display: flex; */
      /* flex-direction: column; */
      background-color: red;

      
    }

    .pasteEmailsHere {
      /* margin-top: 15px; */
      background-color: red;

    }
  }
</style>




