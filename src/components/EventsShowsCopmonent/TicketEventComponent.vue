<template>
  <IonGrid >

    <!-- Bottom Row TicketRow section ##################################-->
    <IonRow class=" Ticket5Rows CenterPositions">

      <IonRow class=" TicketTitleRow CenterPositions">
        <IonCol class="" >Ticket Type</IonCol>
        <IonCol class="" >AVAILABLE TICKET</IonCol>
        <IonCol class="" >SPOT NUMBER</IonCol>
        <IonCol class="" >PRICE INCLUDING VAT</IonCol>
        <IonCol class="" >SELECT</IonCol>
      </IonRow>

      <IonRow class=" FreeVisitorTicketRow ">
        <IonCol class="" >Visitors Ticket</IonCol>
        <IonCol class="" >Availablity Number Visitor</IonCol>
        <IonCol class="" >Empty Spot Number</IonCol>
        <IonCol class="" >Price</IonCol>
        <IonCol class="" >Select Tick/Box</IonCol>
        
      </IonRow>
      <IonRow class=" ExhibitionsWorkshopsPresentationsTicketRow ">
        Exhibitions, Workshops, Presentations
        <IonCol class="" >Ticket List</IonCol>
        <IonCol class="" >Availablity Number</IonCol>
        <IonCol class="" >Spot Number</IonCol>
        <IonCol class="" >Price</IonCol>
        <IonCol class="" >Select Tick/Box</IonCol>
      </IonRow>
      <IonRow class=" FREEOneThreeInvestmentPITCHINGSTicketRow ">
        FREE One, Three, Investment PITCHINGS.
        <IonCol class="" >Ticket List</IonCol>
        <IonCol class="" >Availablity Number</IonCol>
        <IonCol class="" >Spot Number</IonCol>
        <IonCol class="" >Price</IonCol>
        <IonCol class="" >Select Tick/Box</IonCol>
      </IonRow>
      <IonRow class=" ButtonCouponPaypalRow CenterPositions">
        <img alt="LEN Logo" height="160" src="/public/favicon.png" />
        <IonCol>
          <ion-input label="Enter Discount Code" label-placement="floating" fill="outline" ></ion-input>
        </IonCol>
        <IonButton>Book Now</IonButton>

      </IonRow>


    </IonRow>






  </IonGrid>


</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonGrid, IonRow, IonCol, IonIcon, IonInput, IonButton } from '@ionic/vue';

export default defineComponent({
  name: 'TicketEventComponent',
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonButton,
    IonInput,

  },
  setup() {
    
    return {

    };
  },
});
</script>

<style scoped>
/* *{
  border: solid 1px black;
} */
 ion-grid {
  max-height: 800px;
  overflow-y: auto; /* Enable vertical scrolling */
  height: 100%; /* Full height to fit the parent */
  border: 1px solid black;
  border-radius: 10px;
 }
.CenterPositions {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
}



@media (max-width: 760px) {
 .FloorPlan {
  max-height: 900px;
  overflow-y: auto; /* Enable vertical scrolling */
  height: 100%; /* Full height to fit the parent */
 }
}


</style>
