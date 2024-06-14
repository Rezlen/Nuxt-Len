<template>
  <div class="page-container">
    <div class="table-container">
      <div class="header row-small">
        <div class="column wide-column left-align">Ticket Type</div>
        <div class="column">Available Ticket</div>
        <div class="column">Spot Number</div>
        <div class="column small-column">Price Including VAT</div>
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

      <div class="footer">
        <div class="footer-content">
          <img alt="LEN Logo" height="160" src="/public/favicon.png" />
          <div>
            <ion-input label="Enter Discount Code" label-placement="floating" fill="outline"></ion-input>
          </div>
          <IonButton>Book Now</IonButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButton, IonInput } from '@ionic/vue';

export default defineComponent({
  name: 'TableComponent',
  components: {
    IonButton,
    IonInput
  }
});
</script>

<style scoped>
.page-container {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  height: 100vh; /* Full viewport height */
}

.table-container {
  display: block;
  overflow-x: auto;
  white-space: nowrap;
  width: 100%;
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
  background-color: #f2f2f2;
}

.row-small .column, .row-small .wide-column {
  height: 50px; /* Fixed height for small rows */
}

.footer {
  display: flex;
  justify-content: center; /* Center-align items horizontally */
  align-items: center; /* Center-align items vertically */
  padding: 10px;
  background-color: #f2f2f2;
}

.footer-content {
  display: flex;
  align-items: center;
  max-width: 100%; /* Ensure footer content doesn't exceed container width */
}

.footer img {
  margin-right: 20px;
}

@media (max-width: 768px) {
  .column, .wide-column {
    word-wrap: break-word; /* Ensure text wrapping within columns */
  }
}
</style>
