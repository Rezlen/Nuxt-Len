      <!-- MiniProfilesRow ##############################-->
      <IonRow class="MiniProfilesRow">
        <IonRow class="Tabs4AllBusinessesAllExhibitorsAllVisitorsAdvertiseForFree">
          <IonSegment v-model= "selectedTab" class="TabSegment" color="primary">
            <IonSegmentButton class="btn" value="Businesses">All Businesses</IonSegmentButton>
            <IonSegmentButton class="btn" value="Exhibitors">All Exhibitors</IonSegmentButton>
            <IonSegmentButton class="btn" value="Visitors>All Visitors</IonSegmentButton>
            <IonSegmentButton class="btn" value="AdvertiseForFree>Advertise For FREE</IonSegmentButton>
          </IonSegment>
        </IonRow>
        <IonRow class="DisplayComponentRow">
          <IonCol v-show="selectedTab === 'Businesses' " class="AllBusinesses">
            <p>Who We Are, What We Do</p>
            <!-- Content for "Who We Are, What We Do" -->
          </IonCol>
          <IonCol v-show="selectedTab === 'what'" class="AllExhibitors">
            <p>What We Provide</p>
            <!-- Content for "What We Provide" -->
          </IonCol>
          <IonCol v-show="selectedTab === 'looking'" class="AllVisitors">
            <p>What We Are Looking For</p>
            <!-- Content for "What We Are Looking For" -->
          </IonCol>
        </IonRow>
      </IonRow>