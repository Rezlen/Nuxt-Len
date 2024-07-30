<template>
  <IonGrid>
    <!-- Header text -->
    <p class="Header">All Your Messaging On This Page.</p>
    
    <!-- Title Row -->
    <IonRow class="FirstRow">
      <IonCol class="LeftCol">
        <IonButton class="GroupMessages" @click="submitContent">Group Messages</IonButton>
        <IonSearchbar class="custom-searchbox"></IonSearchbar>
        <div class="RecentMessages">Recent Messages</div>
        <MiniProfileCardVVIPComponent class="MiniProfileCol" />
      </IonCol>
    </IonRow>

    <IonRow class="SecondRow">
      <IonCol class="RightCol">
        <div class="MessageStatus">
          <IonRow class="CurrentSelection">Current Selection:</IonRow>
          <IonRow class="ConnectionsStat">Connections: 34k(£4k) | Non-Connections: 34k(£4k)</IonRow>
          <IonRow class="TSpentStat">TSpent: 34k(£45k) | Connections: 34k(£65k) | Non-Connections: 34k(£5k)</IonRow>
          <IonRow class="GroupStat">GroupSent: 878(£3k) | Seen: 876 | Replied: 63</IonRow>
          <IonRow class="AllStat">All: 6554(£33k) | Groups: 775 | Seen: 543 | Replied: 664</IonRow>
        </div>
        
        <div class="SelectConnectionBTNs">
          <div class="SelectConnectionBTN">Select Connections & Message/Email Them at Once</div>
          <div class="SelectConnectionBTN">Select NON-Connections & Message/Email Them at Once</div>
        </div>

        <div class="MessageDisplayWindow">DisplayMessages</div>

        <div class="MessageEditor">
          <IonTextarea
            label="Type Your Message/Email Here"
            label-placement="floating"
            :counter="true"
            :auto-grow="true"
            :maxlength="10000"
          ></IonTextarea>
          <IonButton class="UpdateBTN" size="large" expand="block" @click="submitContent">Send</IonButton>
        </div>
      </IonCol>
    </IonRow>



    <IonRow>
      <IonCol></IonCol>
      <IonCol></IonCol>
    </IonRow>

</IonGrid>
</template>






<script lang="ts">
import { defineComponent } from 'vue';
import { IonGrid, IonRow, IonCol, IonButton, IonSearchbar, IonTextarea } from '@ionic/vue';
import MiniProfileCardVVIPComponent from '@/components/ProfileComponents/MiniProfileCardVVIPComponent.vue';

export default defineComponent({
  name: 'MessagingComponent',
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonSearchbar,
    IonTextarea,
    MiniProfileCardVVIPComponent,
  },
  setup() {
    // Define the submitContent method
    const submitContent = () => {
      console.log("Update button clicked");
    };

    return {
      submitContent,
    };
  },
});
</script>




<style scoped>
.Header {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
  font-size: 20px;
}

.FirstRow, .SecondRow {
  width: 100%;
}

.LeftCol {
  padding: 10px;
  background-color: rgb(231, 231, 238);
  height: 500px;
  border-radius: 10px;
  border: 1px solid lightgray;
  box-sizing: border-box; /* Include padding in width calculation */
}

.RightCol {
  padding: 10px;
  box-sizing: border-box;
}

.RecentMessages {
  overflow: auto;
  height: 100%;
}

.MessageEditor {
  margin-top: 20px;
}

.UpdateBTN {
  width: 100%;
}

/* Responsive Design */
@media (max-width: 760px) {
  .LeftCol, .RightCol {
    width: 100%; /* Full width for both columns on small screens */
    display: block; /* Stack columns vertically */
    margin-bottom: 20px; /* Space between stacked columns */
  }
}
</style>




