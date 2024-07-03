<template>
  <IonCard>
    <IonCardHeader class=" CenterPositions TitleSubTitle">
      <IonCardTitle>I am looking for</IonCardTitle>
      <IonCardSubtitle class="InvestmentAmount">Investment Amount</IonCardSubTitle>
      <IonCardSubtitle>In: Investment Category</IonCardSubTitle>
    </IonCardHeader>
    <IonRow class="LeftPadding">
      <IonRow> In: (City & Country)</IonRow>
      <IonRow> For: (Idea Business Name)</IonRow>
      <IonRow> In Return Of: (Equity % Comp)</IonRow>
    </IonRow>
    <IonRow class="LeftPadding ReturnLength">
      <IonRow> Current Revenue: (Amount Comp)</IonRow>
      <IonRow> Revenue in 3 years: (Amount Comp)</IonRow>
    </IonRow>
    <IonRow class="LeftPadding ReturnLength">
      <IonRow> Current Net Profit: (Amount Comp)</IonRow>
      <IonRow> Net Profit in 3 years: (Amount Comp)</IonRow>
    </IonRow>

    <IonRow class="LeftPadding Sector"> In: (Service OR Products Sector)</IonRow>

    <!-- Looking For ########################## -->
    <IonRow class="LeftPadding LookingFor">Looking For: Comp Here. Our objective is to help the following groupsLooking For: Comp Here. Our objective is to help the following groups</IonRow>
    

    <!-- ButtonSection ########################## -->
    <IonCol >
      <IonButton size="small" fill="clear" class=" CenterPositions MessageBTN">Message</IonButton>
    </IonCOl>
  
  </IonCard>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonGrid, IonRow, IonCol, IonSegment, IonSegmentButton, IonButton, IonIcon, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';

export default defineComponent({
  name: 'MiniInvesteesProfileComponent',
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonSegment,
    IonSegmentButton,
    IonButton,
    IonIcon,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
  },
  setup() {
    
    return {

    };
  },
});
</script>



<style scoped>
/* Limiting the size of the card#################### */
ion-card {
  max-width: 270px; /* Maximum width of the card */
  max-height: 700px; /* Maximum height of the card */
  width: 100%; /* Responsive width */
  height: auto; /* Responsive height */
  margin: 0 auto; /* Center the card */
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(142, 15, 226, 0.2);   /* X-offset, Y-offset, blur radius, and color */
  border-bottom: solid 5px gray;
  overflow: hide;
}
.TitleSubTitle {
  padding-bottom: 30px;
}

.CenterPositions {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.LeftPadding {
  padding-left: 15px;
  font-weight: bold;
}

.InvestmentAmount {
  font-weight:bold;
  font-size: 17px;
  padding-bottom: 5px;
  padding-top: 5px;
  color: red;
}

.ReturnLength {
  border-radius: 6px;
  border:1px solid gray;
  margin: 15px 0;
  padding-top: 15px;
  padding-bottom: 15px;
  box-shadow: 0 4px 8px rgba(142, 15, 226, 0.2);   /* X-offset, Y-offset, blur radius, and color */
}
.Sector {
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: solid 1px blue;
}
.LookingFor {
  padding-top:10px;
  max-height: 250px; /* Maximum height of the card */
  overflow: auto;
  font-weight: lighter;
}
.MessageBTN {
  font-size: 20px;
  color: rgb(31, 51, 165);
  padding: 8px;
  text-align: center;
  font-weight:bold;
  border-radius: 9px;
}
.MessageBTN:hover {
  background-color: aqua;
}

</style>