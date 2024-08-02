
<!-- 
       
        Below are the opportunities which LEN (London Entrepreneurs Network) can provide you. We are open to suggestions, contact us. 
        LEN promoting you via 
        Fee 
        Service Benefits 
        30 Minutes Workshop Or Presentation IN LEN's Events Or Business Shows 
        Email to a 10,000 of our members Email to 30,000+ of our members 
        £1000 
        Choose a date 
        £300 
        Choose a date 
        £850 
        Choose a date 
        • We can ORGANISE up-to 30minutes presentation or workshop in a room within one of our shows/events exclusively for you to present, promote or sell anything you wish.
        • You can expect about 30 relevant attendees (highly potential client for 
        • We have 30,000+ members. we can send your exclusive email to all of them for only £850 instead of £900 OR to any 10,000 of them for only £300. 
        • Our email open rate is about 30% & conversion about 5% generally. 
        • Currently what we know from the data base is, there are 60% startups, 
        • We have 30,000+ members; we can send your exclusive email to all of them for only £850. 
        • This include £50 discount if you were to send 3 emails to any 10,000 of our 30,000+ members! 
        One Month Logo Display On LEN's Meetup Groups with 30,000+ members £250 
        We place your logo, an offer & your link on left side of all our Meetup Groups with 30,000+ members so atleast 30,000+ of members see it plus many who are not our members & check our groups on every second!
        
        Choose a date Enter your email address mobile or landline ELin k to Redirect EStra p Li n e/Tiltle Repeat the Sponsorship/Partnership Option Upload Your Logo/Image Week, Month, Week & the payment, every: 
        Please enter Description 
        I 
        Submit 

         -->
        
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
              <IonDatetimeButton datetime="datetime"></IonDatetimeButton>
              <IonModal :keep-contents-mounted="true">
                <IonDatetime id="datetime"></IonDatetime>
              </IonModal>
            </IonCol>
        </IonCol>
        <IonCol class="description label">
          <li>We can ORGANISE up-to 30minutes presentation or workshop in a room within one of our shows/events exclusively for you to present, promote or sell anything you wish.</li>
          <li>You can expect about 30 relevant attendees (highly potential client for)</li>
        </IonCol>
      </IonItem>

      <IonItem class="Head">
        <IonCheckbox slot="start" v-model="checkboxStates.checkbox2"></IonCheckbox>
        <IonCol class="title label">Email to a 10,000 of our members. </IonCol>
        <IonCol class="DatePrice">
          <IonCol class="price">£300</IonCol>
          <IonCol class="date">ChooseDate</IonCol>
            <IonCol>
              <IonDatetimeButton datetime="datetime"></IonDatetimeButton>
              <IonModal :keep-contents-mounted="true">
                <IonDatetime id="datetime"></IonDatetime>
              </IonModal>
            </IonCol>
        </IonCol>
        <IonCol class="description label">
          <li>We have 30,000+ members. we can send your exclusive email to all of them for only £850 instead of £900 OR to any 10,000 of them for only £300.</li>
          <li>Our email open rate is about 30% & conversion about 5% generally.</li>
          <li>Currently what we know from the data base is, there are 60% startups,</li>
        </IonCol>
      </IonItem>

      <IonItem class="Head">
        <IonCheckbox slot="start" v-model="checkboxStates.checkbox3"></IonCheckbox>
        <IonCol class="title label"> Email to 30,000+ of our members</IonCol>
        <IonCol class="DatePrice">
          <IonCol class="price">£850</IonCol>
          <IonCol class="date">ChooseDate</IonCol>
            <IonCol>
              <IonDatetimeButton datetime="datetime"></IonDatetimeButton>
              <IonModal :keep-contents-mounted="true">
                <IonDatetime id="datetime"></IonDatetime>
              </IonModal>
            </IonCol>
        </IonCol>
        <IonCol class="description label">
          <li>We have 30,000+ members; we can send your exclusive email to all of them for only £850.</li>
          <li>This include £50 discount if you were to send 3 emails to any 10,000 of our 30,000+ members!</li>
        </IonCol>
      </IonItem>

      <IonItem class="Head">
        <IonCheckbox slot="start" v-model="checkboxStates.checkbox4"></IonCheckbox>
        <IonCol class="title label">One Month Logo Display On LEN's Meetup Groups with 30,000+ members</IonCol>
        <IonCol class="DatePrice">
          <IonCol class="price">£250</IonCol>
          <IonCol class="date">ChooseDate</IonCol>
            <IonCol>
              <IonDatetimeButton datetime="datetime"></IonDatetimeButton>
              <IonModal :keep-contents-mounted="true">
                <IonDatetime id="datetime"></IonDatetime>
              </IonModal>
            </IonCol>
        </IonCol>
        <IonCol class="description label">
          <li>We place your logo, an offer & your link on left side of all our Meetup Groups with 30,000+ members so atleast 30,000+ of members see it plus many who are not our members & check our groups on every second!</li>
        </IonCol>
      </IonItem>

    </IonRow>

      <IonButton class="UpdateBTN" size="large" expand="block" title="SubmitBTN" @click="submitContent">Update</IonButton>
  </IonGrid>
</template>




<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonItem, IonCheckbox, IonGrid, IonRow, IonCol, IonButton, IonDatetime, IonDatetimeButton, IonModal } from '@ionic/vue';

export default defineComponent({
  name: 'EmailWebsiteNotificationComponent',
  components: {
    IonItem,
    IonCheckbox,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonDatetime,
    IonDatetimeButton,
    IonModal,
  },
  setup() {
    const checkboxStates = ref({
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false,

    });

    const submitContent = () => {
      console.log('Submit button clicked');
    };

    return {
      checkboxStates,
      submitContent,
    };
  },
});
</script>

<style scoped>
  .Header {
    text-align: center;
    margin-bottom: 20px;
    font-size: 20px;
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
    border: 1px lightgray solid;
    border-radius: 10px;
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
  @media (max-width: 600px) {
    .Head {
      flex: 0 0 auto;
      width: 200vw; /* Full viewport width */
      overflow-x: auto; /* Ensure horizontal scrolling */
    }

}
</style>
