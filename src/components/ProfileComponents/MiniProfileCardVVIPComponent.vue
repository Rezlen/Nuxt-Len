<template>
  <IonGrid>
  </IonGrid>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonGrid, IonRow, IonCol, IonSegment, IonSegmentButton, IonButton, IonIcon } from '@ionic/vue';
import { logoFacebook, logoTwitter, logoGoogle, logoLinkedin } from 'ionicons/icons';

export default defineComponent({
  name: 'MiniProfileCardComponent',
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonSegment,
    IonSegmentButton,
    IonButton,
    IonIcon,
  },
  setup() {
    const selectedTab = ref<string>('listedNeeds'); // Initialize with the default tab
    const selectedTabActivity = ref<string>('listedNeeds'); // Initialize with the default tab for ActivityRow

    return {
      selectedTab,
      selectedTabActivity,
      logoFacebook,
      logoTwitter,
      logoLinkedin,
      logoGoogle,
    };
  },
});
</script>



<style scoped>
/* General styles */

/* * {
    border: 1px solid black;
} */

ion-grid {
  overflow-y: auto; /* Enable vertical scrolling */
  height: 100%; /* Full height to fit the parent */
}

/* BusinessName styles */
.BusinessName {
  font-family: 'Arial Narrow Bold', sans-serif;
  font-size: 40px;
  font-weight: bold;
  background-color: yellow;
  justify-content: center;
  text-align: center;
  padding: 10px;
}

/* BusinessRow styles */
.BusinessRow {
  display: flex;
  flex-wrap: nowrap; /* Prevents wrapping */
  border: 1px solid black;
  border-radius: 10px;
}

.IMG-socialIcons {
  flex: 0 0 20%; /* Fixed 20% width */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;
  border-radius: 10px;
  
}

.BusinessDetails {
  flex: 1; /* Takes remaining space */
  display: flex;
  flex-direction: column;
}

.BusinessRevenue,
.YearlySalary {
  background-color: rgb(10, 216, 10);
  border-radius: 10px;
  padding: 15px;
  font-size: 25px;
  font-weight: bold;
  color:white;
  text-align: center;
  justify-content: center;
}

.TextStyle {
  padding: 5px;
}

.Exhibited,
.Visited,
.Connect,
.Messages,
.QRCode {
  display: flex;
  border-radius: 10px;
  /* padding: 15px; */
  font-weight: bold;
  border: 1px solid black;
  width: 150px;
  text-align: center;
  justify-content: center;
}

/* PersonalRow styles */
.PersonalRow {
  display: flex;
  flex-wrap: nowrap; /* Prevents wrapping */
  border: 1px solid black;
  border-radius: 10px;
}

.PersonalDetails {
  flex: 1; /* Takes remaining space */
  display: flex;
  flex-direction: column;
}

/* Social media icon colors */
.social-button {
  margin:0;
  padding:0;
}

.linkedin-icon {
  color: #0077b5; /* LinkedIn blue */
}

.google-icon {
  color: #db4437; /* Google red */
}

.facebook-icon {
  color: #3b5998; /* Facebook blue */
}

.twitter-icon {
  color: #1da1f2; /* Twitter blue */
}

/* Responsive styles for smaller screens */
@media (max-width: 768px) {
  .BusinessRow, .PersonalRow {
    flex-wrap: wrap; /* Allows wrapping on smaller screens */
  }

  .IMG-socialIcons, .BusinessDetails, .PersonalDetails {
    flex: 1 1 100%; /* Take full width on smaller screens */
  }
}

/* StatisticsRow styles */
.StatisticsRow {
  display: flex;
  flex-wrap: wrap;
  border: 1px solid black;
  border-radius: 10px;
}

.StatisticsColumn {
  flex: 0 0 33.3333%;
  display: flex;
  flex-direction: column;
}

.StatisticsColumn .ion-row {
  margin-bottom: 10px; /* Add spacing between rows if needed */
}

@media (max-width: 768px) {
  .StatisticsColumn {
    flex: 0 0 100%;
  }
}

/* WhoWhatSections styles */
.borderWhoWhatSections {
  border: 1px solid black;
  border-radius: 10px;
}

.TabSegment {
  width: 100%;
}

@media (max-width: 768px) {
  .WhoWhatSections ion-col {
    flex-direction: column;
    width: 100%;
  }
}

/* ActivityRow styles */
.ActivityRow {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  
}

.ActivitySegment {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  overflow-x: auto;
  border: 1px solid black;
  border-radius: 10px;
}

.ActivitySegment ion-segment-button {
  flex: 1 1 auto;
  white-space: nowrap;
  min-width: 100px;
}

.ActivityRow .ion-col {
  white-space: normal;
  word-wrap: break-word;
  word-break: break-all;
}

ion-segment-button {
  font-size: 14px; /* Adjust tab font size for mobile */
  font-weight: bold;
}

@media (max-width: 600px) {
  .ActivityRow .ion-col {
    width: 100%;
  }
}
 /*  gives the nice button colur & shape effect to the tab */
.btn {
  transition: 0.5s;
  padding: 0;
  margin: 0;
  border-radius: 20%;
  font-size: 14px; /* Adjust tab font size for mobile */
  font-weight: bold;
  border: 1px solid rgb(14, 5, 139);
}

/* Hover effect */
.btn:hover {
  background: #ffee10;
  color: black;
  box-shadow: 0 0 1rem #ffee10;
}

/* Clicked effect */
.btn-clicked {
  background: #ffee10;
  color: black;
  box-shadow: 0 0 1rem #ffee10;
}

 /*  END gives the nice button colur & shape effect to the tab */


</style>

