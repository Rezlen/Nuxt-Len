<template>
  <IonGrid>
    <!-- Header text -->
    <p class="Header">Below are the opportunities which LEN (London Entrepreneurs Network) can provide you. We are open to suggestions, contact us. </p>
    
    <IonRow class="mainRow">

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
        • We can ORGANISE up-to 30minutes presentation or workshop in a room within one of our shows/events exclusively for you to present, promote or sell anything you wish. • You can expect about 30 relevant attendees (highly potential client for • We have 30,000+ members. we can send your exclusive email to all of them for only £850 instead of £900 OR to any 10,000 of them for only £300. • Our email open rate is about 30% & conversion about 5% generally. • Currently what we know from the data base is, there are 60% startups, 
        • We have 30,000+ members; we can send your exclusive email to all of them for only £850. • This include £50 discount if you were to send 3 emails to any 10,000 of our 30,000+ members! 
        One Month Logo Display On LEN's Meetup Groups with 30,000+ members £250 We place your logo, an offer & your link on left side of all our Meetup Groups with 30,000+ members so atleast 30,000+ of members see it plus many who are not our members & check our groups on every second! Choose a date Enter your email address mobile or landline ELin k to Redirect EStra p Li n e/Tiltle Repeat the Sponsorship/Partnership Option Upload Your Logo/Image Week, Month, Week & the payment, every: 
        Please enter Description 
        I 
        Submit 


        
        
        
        -->
      <!-- Checkbox items for website notifications -->
      <IonRow>
        <IonRow class=" Head">
          <div class="checkbox">
            <IonCheckbox slot="start" v-model="checkboxStates.checkbox1"></IonCheckbox>
          </div>
          <div class="title label">30 Minutes Workshop Or Presentation IN LEN's Events Or Business Shows </div>
          <div>
            <div class="label">£1000</div>
            <div class="label">ChooseDate</div>
          </div>
          <div class="description label">
            • We can ORGANISE up-to 30minutes presentation or workshop in a room within one of our shows/events exclusively for you to present, promote or sell anything you wish.
            <span></span>
            • You can expect about 30 relevant attendees (highly potential client for) 
          </div>

        </IonRow>

        <IonItem class=" Head">

          <IonCheckbox slot="start" v-model="checkboxStates.checkbox1"></IonCheckbox>
          <div class="title label">30 Minutes Workshop Or Presentation IN LEN's Events Or Business Shows </div>
          <div>
            <div class="label">£1000</div>
            <div class="label">ChooseDate</div>
          </div>
          <div class="description label">
            • We can ORGANISE up-to 30minutes presentation or workshop in a room within one of our shows/events exclusively for you to present, promote or sell anything you wish.
            <span></span>
            • You can expect about 30 relevant attendees (highly potential client for) 
          </div>

        </IonItem>


          <IonItem class=" Head">
            <IonCheckbox slot="start" v-model="checkboxStates.checkbox2"></IonCheckbox>
            <div class="title label">2- When my connection posts in the Feed page</div>
          </IonItem>

          <IonItem class=" Head">
            <IonCheckbox slot="start" v-model="checkboxStates.checkbox3"></IonCheckbox>
            <div class="title label">3- When my friends & contacts posts in the Feed page</div>
          </IonItem>

          <IonItem class=" Head">
            <IonCheckbox slot="start" v-model="checkboxStates.checkbox4"></IonCheckbox>
            <div class="title label">4- When my friends & contacts join the LEN community</div>
          </IonItem>


      </IonRow>



      <IonButton class="UpdateBTN" size="large" expand="block" title="SubmitBTN" @click="submitContent">Update</IonButton>


    </IonRow>
  </IonGrid>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonItem, IonCheckbox, IonGrid, IonRow, IonCol, IonButton, } from '@ionic/vue';

export default defineComponent({
  name: 'EmailWebsiteNotificationComponent',
  components: {
    IonItem,
    IonCheckbox,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
  },
  setup() {
    // Create a state object to manage all checkbox states
    const checkboxStates = ref({
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false,
      

    });

    // State to manage visibility of sections
    const sectionVisibility = ref<{ [key: string]: boolean }>({
      section1: false,
      section2: false,
    });

    // Method to toggle section visibility
    const toggleSection = (section: string) => {
      sectionVisibility.value[section] = !sectionVisibility.value[section];
    };

    // Method to check if a section is visible
    const isSectionVisible = (section: string) => {
      return sectionVisibility.value[section];
    };
    const submitContent = () => {
      // Your code to handle the button click
      console.log('Submit button clicked');
    };
    return {
      checkboxStates,
      toggleSection,
      isSectionVisible,
      submitContent,
    };
  },
});
</script>


<style scoped>
.Header {
  display: flex;

  text-align: center;
  margin-bottom: 20px;
  font-size: 20px;
}
.checkbox {
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
}

ion-item {
  width: 100%;
}

ion-row {
  width: 100%;
}

.Head {
  display: flex;
  /* justify-content: center; */
  /* text-align: center; */
  align-items: center;

  flex-direction: row;
  align-items: space-between;
  align-content: space-between;
  justify-content: space-between;

  cursor: pointer; /* Show cursor pointer on hover */
  padding: 10px 0;
  border: 1px lightgray solid;
  border-radius: 10px;
}
.title  {
  font-weight: bold;
  max-width: 25%;
  font-size: 14px;
}
.description {
  max-width: 50%;

}
.label {
  text-align: left;
  flex: 1;
}

.UpdateBTN {
  width: 100%;
}
@media (max-width: 600px) {
  .mainRow {
    width: 800px;
    overflow-x: auto;
  }
}
</style>
