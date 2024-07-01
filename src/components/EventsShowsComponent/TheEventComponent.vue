<template>
  <IonGrid class="IonGrid">
    <IonCardHeader class=" CenterPositions EventTitleRow">
      <IonCardTitle class=" EventTitle" >The Event Name</IonCardTitle>
      <IonCardSubtitle class="DateRow" >From January 26, 2022 20:00 TO January 27, 2022 00:00</IonCardSubTitle>
    </IonCardHeader>
    <IonRow class=" ContentGoMapSocialState" >
      <IonCol class="ion-content">
        <IonContent>Event's Content's Content heres. Event's Content heres. Eventt's Content heres. Event's Content heres. Eventt's Content heres. Event's Content heres. Eventt's Content heres. Event's Content heres. Eventt's Content heres. Event's Content heres. Eventt's Content heres. Event's Content heres. Eventt's Content heres. Event's Content heres. Eventt's Content heres. Event's Content heres. Eventt's Content heres. Event's Content heres. Eventt's Content heres. Event's Content heres. Eventt's Content heres. Event's Content heres. Eventt's Content heres. Event's Content heres. Eventt's Content heres. Event's Content heres. Eventt heres. Event's Content heres. Event's Content heres. EventEvent's Content heres. Event's Content heres. Event's Content heres. EventEvent's Content heres. Event's Content heres. Event's Content heres. EventEvent's Content heres. Event's Content heres. Event's Content heres. EventEvent's Content heres. Event's Content heres. Event's Content heres. EventEvent's Content heres. Event's Content heres. Event's Content heres. Event's Content heres. EventEvent's Content heres. Event's Content heres. Event's Content heres. EventEvent's Content heres. Event's Content heres. Event's Content heres. EventEvent's Content heres. Event's Content heres. Event's Content heres. EventEvent's Content heres. Event's Content heres. EventEvent's Content heres. Event's Content heres. Event's Content heres. Event's Content heres. Event's Content heres. Event's Content heres. Event's Content heres. Event's Content heres. Event's Content heres. Event's Content heres.</IonContent>
      </IonCol>
      <IonCol class="EventRightSideCol">
        <IonRow>
          <IonCol>
            <iframe width="150px">GMap</iframe>
          </IonCol>
          <IonCol>
            <iframe width="150" height="150" src="https://www.youtube.com/embed/dNjQ_wZBA28" title="🔥Business Advice London - Advice For Entrepreneurs - Mentoring, Coaching  | London Entrepreneurs 🚀" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </IonCol>
            <IonRow  class="AddressRow">
              <p class="MapP" >Event's Location Address</p>
              <p class="MapP" >Full Address</p>
              <p class="MapP">Add to The Calender</p>
              <IonRow class=" social-media-icons">
                <IonButton size="small" fill="clear" class="social-button"><IonIcon :icon="logoLinkedin" class="linkedin-icon" /></IonButton>
                <IonButton size="small" fill="clear" class="social-button"><IonIcon :icon="logoGoogle" class="google-icon" /></IonButton>
                <IonButton size="small" fill="clear" class="social-button"><IonIcon :icon="logoFacebook" class="facebook-icon" /></IonButton>
                <IonButton size="small" fill="clear" class="social-button"><IonIcon :icon="logoTwitter" class="twitter-icon" /></IonButton>
              </IonRow>
          </IonRow>   
          

        </IonRow
        >
        <IonCol class="StateRow">
          <IonRow class=" Border">
            <IonRow class="CenterPositions TotalAttendeesRevenueRow">Total Attendees Revenue</IonRow>
            <IonRow class="RevenueRow">
              <IonCol class="CenterPositions ExhibitorsNumber">ExhibitorsNumber</IonCol>
              <IonCol class="CenterPositions VisitorsNumber">VisitorsNumber</IonCol>
            </IonRow>
          </IonRow>
          <IonRow class=" Border">
            <IonRow class="CenterPositions GoingRow">Going</IonRow>
            <IonRow class="GoingRow" >
              <IonCol class="CenterPositions ExhibitorsGoing">ExhibitorsGoing</IonCol>
              <IonCol class="CenterPositions VisitorsGoing">VisitorsGoing</IonCol>
            </IonRow>
          </IonRow>
        </IonCol>
      </IonCol>
    </IonRow>

    <!-- Middle Row FloorPlan section ########################################-->
    <IonRow class=" FloorPlanRow CenterPositions">
        <IonRow class=" FloorPlanHeader ">
          Choose & Book Your Exhibition Area Right Hear On The Floorplan (Full View)
        </IonRow>
        <IonRow class=" FloorPlan ">
            FloorPlan Component Here
        </IonRow>
    </IonRow>


    <IonRow class=" Ticket5RowComponent CenterPositions">
      <TicketEventComponent />
    </IonRow>





  </IonGrid>


</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonGrid, IonRow, IonCol, IonIcon, IonCard, IonButton, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonContent } from '@ionic/vue';
import { logoFacebook, logoTwitter, logoGoogle, logoLinkedin } from 'ionicons/icons';
import TicketEventComponent from '@/components/EventsShowsComponent/TicketEventComponent.vue';

export default defineComponent({
  name: 'TheEventComponent',
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonCard,
    IonButton,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    TicketEventComponent,
  },
  setup() {
    
    return {
      logoFacebook,
      logoTwitter,
      logoLinkedin,
      logoGoogle,
    };
  },
});
</script>

<style scoped>
/* *{
  border: solid 1px black;
} */

 .ion-content {
  max-height: 800px;
  overflow-y: auto; /* Enable vertical scrolling */
  height: 100%; /* Full height to fit the parent */
 }
.CenterPositions {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
}

.MapP{
  margin: 0;
  padding:0;
}
.AddressRow {
  flex-direction: column;
}
.ContentGoMapSocialState,
.FloorPlanRow,
.TicketRow {
  border: gray 1px solid;
  border-radius: 10px;
}
ion-grid{
  overflow-y: auto; /* Enable vertical scrolling */
  height: 100%; /* Full height to fit the parent */
  box-shadow: 0 4px 8px rgba(142, 15, 226, 0.2); /* X-offset, Y-offset, blur radius, and color */
}

.Border,
.StateRow {
  display: flex;
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
.Border {
  border: rgb(62, 11, 204) 1px solid;
  border-radius: 5px;
}
.ExhibitorsNumber,
.VisitorsNumber,
.ExhibitorsGoing,
.VisitorsGoing {
  border-top: rgb(62, 11, 204) 1px solid;
}

.VisitorsNumber,
.VisitorsGoing {
  border-left:  rgb(62, 11, 204) 1px solid;
}

/* Social media icon colors */
.social-media-icons {
  background-color: white;
  padding: 4px 0;
}
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

a {
 font-weight: bold;
}


@media (max-width: 760px) {
 .ion-content {
  max-height: 500px;
  overflow-y: auto; /* Enable vertical scrolling */
  height: 100%; /* Full height to fit the parent */
 }

     /* if you can try to make the advert disolaywithin componentts in mobile view */
  .RightAdvertComponent,
  .LeftAdvertComponent {
    display: none;
  } 
  .FloorPlan {
  max-height: 900px;
  overflow-y: auto; /* Enable vertical scrolling */
  height: 100%; /* Full height to fit the parent */
 }

}


    /* <!-- Biddle Row FloorPlan sectin -->########################################## */
 .FloorPlan {
  max-height: 900px;
  overflow-y: auto; /* Enable vertical scrolling */
  height: 100%; /* Full height to fit the parent */
 }


</style>
