<template>
  <IonGrid class="IonGrid">
  <div class="table-container">
    <div class="header row-small">
      <div class="column wide-column left-align">Ticket Type</div>
      <div class="column">Available Ticket</div>
      <div class="column">Spot Number</div>
      <div class="column small-column">Price Inc VAT</div>
      <div class="column small-column">Select</div>
    </div>

    <div class="row row-small">
      <div class="column wide-column left-align">Visitors Ticket</div>
      <div class="column">Availability Number Visitor</div>
      <div class="column">Empty Spot Number</div>
      <div class="column small-column">Price</div>
      <div class="column small-column">Select Tick/Box</div>
    </div>

    <div class="row">
      <div class="column wide-column left-align">Exhibitions, Workshops, Presentations</div>
      <div class="column">Availability Number Exhibitions, Workshops, Presentations</div>
      <div class="column">Spot Number Exhibitions, Workshops, Presentations</div>
      <div class="column small-column">Price</div>
      <div class="column small-column">Select Tick/Box</div>
    </div>

    <div class="row">
      <div class="column wide-column left-align">FREE One, Three, Investment PITCHINGS</div>
      <div class="column">Availability Number FREE One, Three, Investment PITCHINGS</div>
      <div class="column">Spot Number FREE One, Three, Investment PITCHINGS</div>
      <div class="column small-column">Price</div>
      <div class="column small-column">Select Tick/Box</div>
    </div>


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
import { defineComponent } from 'vue';
import { IonButton, IonGrid, IonInput } from '@ionic/vue';

export default defineComponent({
  name: 'TableComponent',
  components: {
    IonButton,
    IonInput
  }
});
</script>

<style scoped>

/* .ion-grid{ 
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  background-color: aqua;
} */
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
}

.column.small-column {
  flex: 0 0 100px; /* Fixed width for the small columns */
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

.footer {
  justify-content: flex-start;
  align-items: center;
}

.footer img {
  margin: 0 20px;
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
