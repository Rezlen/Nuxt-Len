<template>
  <div class="table-container">
    <div class="header">
      <div class="column">Ticket Type</div>
      <div class="column">Available Ticket</div>
      <div class="column">Spot Number</div>
      <div class="column">Price Including VAT</div>
      <div class="column">Select</div>
    </div>

    <div class="row">
      <div class="column">Visitors Ticket</div>
      <div class="column">Availability Number Visitor</div>
      <div class="column">Empty Spot Number</div>
      <div class="column">Price</div>
      <div class="column">Select Tick/Box</div>
    </div>

    <div class="row">
      <div class="column">Exhibitions, Workshops, Presentations</div>
      <div class="column">Availability Number Exhibitions, Workshops, Presentations</div>
      <div class="column">Spot Number Exhibitions, Workshops, Presentations</div>
      <div class="column">Price</div>
      <div class="column">Select Tick/Box</div>
    </div>

    <div class="row">
      <div class="column">FREE One, Three, Investment PITCHINGS</div>
      <div class="column">Availability Number FREE One, Three, Investment PITCHINGS</div>
      <div class="column">Spot Number FREE One, Three, Investment PITCHINGS</div>
      <div class="column">Price</div>
      <div class="column">Select Tick/Box</div>
    </div>

    <div class="footer">
      <img alt="LEN Logo" height="160" src="/public/favicon.png" />
      <div>
        <ion-input label="Enter Discount Code" label-placement="floating" fill="outline"></ion-input>
      </div>
      <IonButton>Book Now</IonButton>
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
  flex: 0 0 300px; /* Fixed width for each column */
  height: 100px; /* Fixed height for each column */
  padding: 10px;
  text-align: center;
  border: 1px solid #ccc;
  box-sizing: border-box;
  overflow: hidden; /* Hide overflowed content */
  word-wrap: break-word; /* Allow text to wrap within the column */
  white-space: normal; /* Allow text to wrap */
}

.header .column {
  font-weight: bold;
  background-color: #f2f2f2;
}

.footer {
  justify-content: center;
  align-items: center;
}

.footer img {
  margin-right: 20px;
}

@media (max-width: 768px) {
  .header, .row, .footer {
    flex-direction: row;
  }

  .column {
    flex: 0 0 300px; /* Fixed width for each column */
  }

  .footer img {
    margin-right: 10px;
  }
}
</style>
