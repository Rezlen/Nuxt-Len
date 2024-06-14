<template>
  <IonGrid class="IonGrid">
    <IonCardHeader class="CenterPositions EventTitleRow">
      <IonCardTitle class="EventTitle"><a href="/TheEventShowPage" class="Events-button" >The Event Name</a></IonCardTitle>
      <IonCardSubtitle class="DateRow">From January 26, 2022 20:00 TO January 27, 2022 00:00</IonCardSubtitle>
    </IonCardHeader>

    <IonRow class="ContentGoMapSocialState">
      <IonCol class="AttendeesProfilePic">
        <IonRow class="ProfilePicRow">
          <IonCol class="ProfilePicCol"><img alt="LEN Logo" width="80px" height="80px" src="/public/favicon.png" /></IonCol>
          <IonCol class="ProfilePicCol"><img alt="LEN Logo" width="80px" height="80px" src="/public/favicon.png" /></IonCol>
        </IonRow>
        <IonRow class="ProfilePicRow">
          <IonCol class="ProfilePicCol"><img alt="LEN Logo" width="80px" height="80px" src="/public/favicon.png" /></IonCol>
          <IonCol class="ProfilePicCol"><img alt="LEN Logo" width="80px" height="80px" src="/public/favicon.png" /></IonCol>
        </IonRow>
      </IonCol>
      <IonCol class="EventMapCol">
        <iframe width="100px" height="100px">GMap</iframe>
      </IonCol>
      <IonCol class="EventRightSideCol">
        <p>Event's Location Address</p>
        <p>Full Address</p>
        <p>Add to The Calendar</p>
        <IonRow class="social-media-icons">
          <IonButton size="small" fill="clear" class="social-button"><IonIcon :icon="logoLinkedin" class="linkedin-icon" /></IonButton>
          <IonButton size="small" fill="clear" class="social-button"><IonIcon :icon="logoGoogle" class="google-icon" /></IonButton>
          <IonButton size="small" fill="clear" class="social-button"><IonIcon :icon="logoFacebook" class="facebook-icon" /></IonButton>
          <IonButton size="small" fill="clear" class="social-button"><IonIcon :icon="logoTwitter" class="twitter-icon" /></IonButton>
        </IonRow>
      </IonCol>
      <IonCol class="StateRow">
        <IonButton href="/TheEventShowPage" color="success">Reservation</IonButton>
        <IonRow class="Border">
          <IonRow class="CenterPositions TotalAttendeesRevenueRow">Total Attendees Revenue</IonRow>
          <IonRow class="RevenueRow">
            <IonCol class="CenterPositions ExhibitorsNumber">Exhibitors Number</IonCol>
            <IonCol class="CenterPositions VisitorsNumber">Visitors Number</IonCol>
          </IonRow>
        </IonRow>
        <IonRow class="Border">
          <IonRow class="CenterPositions GoingRow">Going</IonRow>
          <IonRow class="GoingRow">
            <IonCol class="CenterPositions ExhibitorsGoing">Exhibitors Going</IonCol>
            <IonCol class="CenterPositions VisitorsGoing">Visitors Going</IonCol>
          </IonRow>
        </IonRow>
      </IonCol>
    </IonRow>
  </IonGrid>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonGrid, IonRow, IonCol, IonIcon, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton } from '@ionic/vue';
import { logoFacebook, logoTwitter, logoGoogle, logoLinkedin } from 'ionicons/icons';

export default defineComponent({
  name: 'TheEventComponent',
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonButton
  },
  setup() {
    return {
      logoFacebook,
      logoTwitter,
      logoLinkedin,
      logoGoogle
    };
  }
});
</script>

<style scoped>
.IonGrid {
  overflow-y: hidden; /* Disable vertical scrolling */
  height: 100%; /* Full height to fit the parent */
  border: 1px solid gray;
  border-radius: 5px;
  margin-bottom: 5px;
  box-shadow: 0 4px 8px rgba(142, 15, 226, 0.2); /* X-offset, Y-offset, blur radius, and color */
}

a {
  text-decoration: none;
}

.ContentGoMapSocialState,
.Border,
.StateRow {
  display: flex;
  flex-wrap: nowrap;
}

.AttendeesProfilePic {
  display: flex;
  flex-direction: column;
}

.ProfilePicRow {
  display: flex;
}

.ProfilePicCol {
  flex: 1;
  display: flex;
  justify-content: center;
}

.EventTitleRow,
.EventTitle,
.DateRow,
.EventRightSideCol,
.social-media-icons {
  margin: 0;
  padding: 0;
}

.CenterPositions {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.EventTitleRow {
  flex-direction: column;
  text-align: center;
}

.Border {
  flex-direction: column;
  border: 1px solid rgb(62, 11, 204);
  border-radius: 5px;
}

.StateRow {
  flex-direction: column;
}

.ExhibitorsNumber,
.VisitorsNumber,
.ExhibitorsGoing,
.VisitorsGoing,
.TotalAttendeesRevenueRow,
.GoingRow {
  padding-top: 5px;
  margin-top: 5px;
}

.TotalAttendeesRevenueRow {
  font-weight: bold;
  color: red;
}

.ExhibitorsNumber,
.VisitorsNumber,
.ExhibitorsGoing,
.VisitorsGoing {
  border-top: 1px solid rgb(62, 11, 204);
}

.VisitorsNumber,
.VisitorsGoing {
  border-left: 1px solid rgb(62, 11, 204);
}
ion-button {
  font-size: large;
  font-weight: bold;
}
/* Social media icon colors */
.social-media-icons {
  background-color: white;
  padding: 4px 0;
}

.social-button {
  margin: 0;
  padding: 0;
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

.left-align {
  text-align: left;
}

.wide-column {
  flex: 1 1 auto; /* Allow the column to take up remaining space */
}

.column {
  flex: 0 1 auto; /* Allow columns to adjust width based on content */
}

.small-column {
  flex: 0 1 100px;
}

.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

@media (max-width: 760px) {
  .ContentGoMapSocialState {
    flex-direction: column; /* Stack columns vertically */
  }

  .ContentGoMapSocialState > * {
    width: 100%; /* Full width for each column */
    margin-bottom: 10px; /* Add some space between columns */
  }

  .AttendeesProfilePic img {
    width: 100%; /* Full width for images */
    height: auto; /* Maintain aspect ratio */
  }
 
  .ContentGoMapSocialState {
    display: block;
    /* height: 100%; */
  }
}
</style>
