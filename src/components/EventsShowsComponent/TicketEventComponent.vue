<template>
  <IonGrid class="IonGrid">
    <div class="table-container">
      <div class="header row-small">
        <div class="column wide-column left-align">Ticket Type</div>
        <div class="column">Available Ticket</div>
        <div class="column">Spot Number</div>
        <div class="column small-column">Price Inc VAT</div>
      </div>



      <!-- ################################################################### -->
      <div class="row row-small">
        <div class="column wide-column left-align" >
          <IonCheckbox justify="start">FREE Visitor</IonCheckbox><br/>
          <IonCheckbox justify="start">FREE Business Mentor</IonCheckbox><br/>
          <IonCheckbox justify="start">FREE Investor</IonCheckbox><br/>
          <IonCheckbox justify="start">FREE Investment Broker</IonCheckbox><br/>
        </div>
        <div class="column">Availability Numbers</div>
        <div class="column"></div>
        <div class="column small-column">FREE</div>
      </div>



      <!-- ################################################################### -->
      <div class="row">
        <div class="column wide-column left-align" >

            <IonCheckbox justify="start">Exhibition number4 Blue Square</IonCheckbox><br/>
            <IonCheckbox justify="start">Exhibitions Red Circle</IonCheckbox><br/>
            <IonCheckbox justify="start">Exhibitions Black Square</IonCheckbox><br/>
            <IonCheckbox justify="start">Exhibitions Blue Square</IonCheckbox><br/>
            <IonCheckbox justify="start">Exhibitions Red Circle</IonCheckbox><br/>
        </div>

        <div class="column">Availability Numbers</div>
        <div class="column">Spot Numbers Exhibitions</div>
        <div class="column small-column">Price</div>
      </div>



      <!-- ################################################################### -->
      <div class="row">
        <!-- Conditional Rendering of the TicketTABsPitchingUpSellingComponent -->
        <div class="column wide-column left-align " @click="toggleFormPitching" >
          <IonCheckbox justify="start" class="FREEOneMinute">FREE One Minute Pitching</IonCheckbox>
          <IonCheckbox justify="start">Three Minutes Pitching</IonCheckbox>
          <IonCheckbox justify="start">Investment Pitching; 5 Minutes</IonCheckbox>
          <IonCheckbox justify="start">Workshops Black Sqare; 30 Minutes</IonCheckbox><br/>
          <IonCheckbox justify="start">Presentation Black Square; 5 Minutes</IonCheckbox><br/>
        </div>
        <div class="column">Availability Numbers</div>
        <div class="column">Spot Numbers</div>
        <div class="column small-column">Price</div>
      </div>
      

    <!-- ################################################################### -->
    </div>

      <!-- Conditional Rendering of the TicketTABsPitchingUpSellingComponent -->
      <div v-if="showFormPitching">
        <TicketTABsPitchingUpSellingComponent />
      </div>





    <div class="footer">
      <img alt="LEN Logo" height="160" src="/public/favicon.png" />
      <!-- later stage we should create the Bonus/Discount functionalities -->
      <!-- <div>
        <ion-input label="Enter Discount Code" label-placement="floating" fill="outline"></ion-input>
      </div> -->
      <IonButton size="large">Book Now</IonButton>
    </div>

  </IonGrid>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonButton, IonGrid, IonCheckbox } from '@ionic/vue';
import TicketTABsPitchingUpSellingComponent from '@/components/PitchingComponents/TicketTABsPitchingUpSellingComponent.vue';
import MiniEventComponent from '@/components/EventsShowsComponent/MiniEventComponent.vue';
import MiniProfileCardVVIPComponent from '@/components/ProfileComponents/MiniProfileCardVVIPComponent.vue';

export default defineComponent({
  name: 'TicketEventComponent',
  components: {
    IonButton,
    IonGrid,
    IonCheckbox,
    TicketTABsPitchingUpSellingComponent,
    MiniEventComponent,
    MiniProfileCardVVIPComponent,
  },
   setup() {
    // Define refs to track the visibility of each component
    const showFormPitching = ref(false);
    const showMiniEvent = ref(false);
    const showMiniProfileCardVVIP = ref(false);

    // Function to toggle the visibility of each component
    const toggleFormPitching = () => {
      showFormPitching.value = !showFormPitching.value;
    };

    // Below two const & their RETURNS (toggleMiniEvent, toggleMiniProfileCardVVIP ) was for two other rows that need expanding. I just kept it as refrnece & learning
    const toggleMiniEvent = () => {
      showMiniEvent.value = !showMiniEvent.value;
    };
    const toggleMiniProfileCardVVIP = () => {
      showMiniProfileCardVVIP.value = !showMiniProfileCardVVIP.value;
     };
    // Below two const & their RETURNS (toggleMiniEvent, toggleMiniProfileCardVVIP ) was for two other rows that need expanding. I just kept it as refrnece & learning
    

    return {
      showFormPitching,
      showMiniEvent,
      showMiniProfileCardVVIP,
      toggleFormPitching,
      toggleMiniEvent,
      toggleMiniProfileCardVVIP,
    };
  },
});
</script>


<style scoped>

.wide-column {
  cursor: pointer;
}
.table-container {
  display: block;
  overflow-x: auto;
  white-space: nowrap;
  width: 100%;
  border: black solid 1px;
  border-radius: 10px;
}

.header, .row, .footer {
  display: flex;
  flex-wrap: nowrap;
}

.column {
  flex: 0 0 150px; /* Fixed width for each regular column */
  height: 100px; /* Default fixed height for each column */
  padding: 10px;
  text-align: center;
  border: 1px solid #ccc;
  box-sizing: border-box;
  overflow: hidden; /* Hide overflowed content */
  word-wrap: break-word; /* Allow text to wrap within the column */
  white-space: normal; /* Allow text to wrap */
}

.column.wide-column {
  flex: 0 0 400px; /* Fixed width for the wide column */
  overflow-y: auto;
  flex-direction: column;
}

.column.small-column {
  flex: 0 0 150px; /* Fixed width for the small columns */
}

.column.left-align {
  text-align: left; /* Align text to the left for specified columns */
}

.header .column, .header .wide-column {
  font-weight: bold;
  background-color: #17df10;
  font-size: 20px;
  color: white;
}

.row-small .column, .row-small .wide-column {
  height: 80px; /* Fixed height for small rows */
}
.FREEOneMinute{
  color:red;
}

.footer {
  justify-content: flex-start;
  align-items: center;
}

.footer img {
  margin: 0 20px;
}

.ScrollingDiv {
  overflow-y: auto;
}

ion-checkbox {
  border-bottom: 1px solid gray;
  margin: 2px 0;
}
@media (max-width: 768px) {
  .table-container {
    width: 350px;
  }
  .footer {
    display: flex;
    flex-direction: column;
  }

}



</style>
