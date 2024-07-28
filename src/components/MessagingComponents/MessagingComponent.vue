<template>
  <IonGrid>
    <!-- Header text -->
    <p class="Header">All Your Messaging On This Page.</p>
    
    <!-- Title Row -->
    <IonRow class="FirstRow">
      <IonCol class="LeftCol">
        <IonCol class="items3">
          <IonButton class="GroupMessages"  @click="submitContent">Group Messages</IonButton>
          <IonSearchbar></IonSearchbar>
          <IonCol class="RecentMessages">Recent Messages </IonCol>
        </IonCol>

        <IonCol class="MiniProfileCol">
          <MiniProfileCardVVIPComponent />
        </IonCol>
      </IonCol>


      <IonCol class="RightCol">
        <IonRow>
          <IonCol class="MessageStatus">
            <IonRow class="CurrentSelection">Current Selection:</IonRow>
            <IonRow class="ConnectionsStat">Connections: (342)£45k  Non-Connections: (343)£65k</IonRow>
            <IonRow class="TSpentStat">TSpent: £45k  Connections: £65k Non-Connections: £65k</IonRow>
            <IonRow class="GroupStat">Group Sent: 878 Seen: 876 Replied: 63</IonRow>
            <IonRow class="AllStat">All: 6554 Groups: 775 Seen: 543 Replied: 664</IonRow>
          </IonCol>
          <IonCol class="SelectConnectionBTNs">
              <IonRow class="SelectConnectionBTN">Select Connections & Message/Email Them at Once</IonRow>
              <IonRow class="SelectConnectionBTN">Select NON-Connections & Message/Email Them at Once</IonRow>
          </IonCol>
        </IonRow>

        <IonRow class="MessageDisplayWindow">DisplayMessages</IonRow>

        <IonRow class="MessageEditor">
        <IonCol>
          <IonTextarea class="MessageEditor" label="Type Your Message/Email Here"
            label-placement="floating" :counter="true" :auto-grow="true" :maxlength="10000"></IonTextarea>
        </IonCol>
        <IonButton class="UpdateBTN" size="large" expand="block" @click="submitContent">Send</IonButton>

        </IonRow>
      </IonCol>
    </IonRow>
  
  </IonGrid>
</template>



<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonGrid, IonRow, IonCol, IonButton,IonSearchbar, IonTextarea } from '@ionic/vue';
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
      // Logic for handling the update action
      console.log("Update button clicked");
    };


    return {
      submitContent,
    };
  },
});
</script>



<style scoped>

ion-grid {
  height: fit-content;
  /* overflow-y: auto; */
  /* overflow-x: auto; */

}

.LeftCol{
  max-width: 30%;
}
.Header {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
  font-size: 20px;
}

ion-row {
  width: 100%;
}

.RecentMessages {
  /* height: 500px; */
  /* border: 1px solid lightgray; */
  background-color: lightblue;
  overflow: auto;
}
.items3{
  display: flex;
  flex-direction: column;
  /* width: fit-content; */
  align-items: center;
  /* align-content: center; */
  /* justify-content: center; */
  background-color: rgb(231, 231, 238);
  height: 500px;
  border-radius: 10px;

}
.MessageEditor{
  border: 1px solid #ccc;
}
.CurrentSelection{
  display: flex;
  font-weight: bold;
  align-items: center;
  justify-content: center;
}
.ConnectionsStat, 
.TSpentStat,
.GroupStat,
.AllStat {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
  border-bottom: 1px solid lightgray;
}
.MessageStatus{
  border: 1px solid lightgray;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
    /* align-content: center; */
  /* justify-content: center; */
  background-color: lightblue;
  width: 80%;
}
.ConnectionsStat,
.GroupStat {
  font-weight: bold;
}
.TSpentStat{
  font-size: 13px;
}
.AllStat{
  font-size: 13px;
}
.SelectConnectionBTNs{
  max-width: 150px;
}
.SelectConnectionBTN{
  background-color: #ffffff; 
  padding: 10px;
  margin: 5px;
  border-radius: 8px; 
  box-shadow: 0 4px 8px rgba(159, 153, 246, 1.15), 0 8px 16px rgba(10, 196, 37, 1.15);
  transition: all 0.3s ease; 
  cursor: pointer;
  /* max-width: 130px; */
}
.SelectConnectionBTN:hover {
  background-color: #cdb5fa; /* Purple background on hover */
}
.MessageDisplayWindow {
  height: 300px;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow-y: auto;
}

.UpdateBTN {
  width: 100%;
}
</style>

