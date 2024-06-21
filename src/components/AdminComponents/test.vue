<template>
  <IonGrid>
    <p class="CenterPositions">Events: Create, Edit, Floorplan, Ticketing, Bookings</p>
    <IonRow class="Tabs4_Events-Creats-Edit-Floorplan-Ticketing-Bookings">
      <IonSegment v-model="selectedTab" class="TabSegment" color="primary">
        <IonSegmentButton class="btn" value="EventsList">Events List</IonSegmentButton>
        <IonSegmentButton class="btn" value="CreateEvent">Create Event</IonSegmentButton>
        <IonSegmentButton class="btn" value="Bookings">Bookings</IonSegmentButton>
      </IonSegment>
    </IonRow>
    <IonRow class="DisplayComponentRow">
      <!-- List of events here -->
      <IonCol v-show="selectedTab === 'EventsList'" class="EventsList">
        <AdminEventsListComponent/>
      </IonCol>

      <!-- Create Event Tab here -->
      <IonCol v-show="selectedTab === 'CreateEvent'" class="CreateEvent">
        <IonRow>
          <IonDatetime></IonDatetime>
          <IonCol>
            <IonRow class="BorderedSection">
              <IonCol>
                <IonTextarea :auto-grow="true" label="Event Title" label-placement="floating" :counter="true" :maxlength="100" :counter-formatter="customFormatter"></IonTextarea> 
              </IonCol>
              <IonCol>
                <IonTextarea class="Summeries" label="Event Details" label-placement="floating" :counter="true" :maxlength="1000" :counter-formatter="customFormatter"></IonTextarea>
              </IonCol>
              <IonCol><iframe width="150px">GMap</iframe></IonCol>
              <IonCol>
                <iframe width="150" height="150" src="https://www.youtube.com/embed/dNjQ_wZBA28" title="🔥Business Advice London - Advice For Entrepreneurs - Mentoring, Coaching  | London Entrepreneurs 🚀" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </IonCol>
              <IonCol>
                <IonTextarea class="Summeries" label="Address Location Name" label-placement="floating" :counter="true" :maxlength="100" :counter-formatter="customFormatter"></IonTextarea>
              </IonCol>
              <IonCol>
                <IonTextarea outline="fill" class="Summeries" label="Full Address" label-placement="floating" :counter="true" :maxlength="100" :counter-formatter="customFormatter"></IonTextarea>
              </IonCol>
            </IonRow>

            <!-- Create Floorplan Section -->
            <IonRow class="BorderedSection">
              <IonItem>
                <IonLabel>Upload Floorplan</IonLabel>
                <input type="file" @change="onFileSelected" />
              </IonItem>
              <IonButton fill="outline">See/Hide Floorplan</IonButton>
            </IonRow>
            <!-- Create Tickets Section -->
            <IonRow class="BorderedSection">
              Tickets Section
            </IonRow>          
          </IonCol>
        </IonRow>
      </IonCol>

      <!-- Booking/Reserved Tickets Tab here -->
      <IonCol v-show="selectedTab === 'Bookings'" class="Bookings">
        <AdminEventsBookingsComponent/>
      </IonCol>
    </IonRow>
  </IonGrid>
</template>
