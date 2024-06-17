<template>
  <IonPage>
    <IonContent>
      <IonGrid>
        <!-- Menu Section -->
        <IonRow class="bordered-section">
          <MenuComponent />
        </IonRow>
        <!-- Social Media Section -->
        <IonRow class="bordered-section">
          <SocialMediaBarComponent />
        </IonRow>

        <!-- Main Content Section with Adverts and Middle Content -->
        <IonRow class="main-content-row">
          <!-- Left Advert Section -->
          <IonCol size="12" size-md="2" class="bordered-section LeftAdvertComponent">
            <LeftAd1Component />
            <LeftAd2Component />
            <LeftAd3Component />
            <LeftAd4Component />
          </IonCol>

          <IonCol size="12" size-md="8">
            <IonGrid>
              <!-- Tabs5_ 1- All Pitchers 2- One Min Pitchers 3- Three Min Pitchers 4- Investment Pitchers 5- FREE Pitching Reservation -->
              <IonRow class="Tabs5_AllPitchersOneMinPitchersThreeMinPitchersInvestmentPitchersFreePitchingReservation">
                <IonSegment v-model="selectedTab" class="TabSegment" color="primary">
                  <IonSegmentButton class="btn" value="AllPitchers">All Pitchers</IonSegmentButton>
                  <IonSegmentButton class="btn" value="OneMinPitchers">One Min Pitchers</IonSegmentButton>
                  <IonSegmentButton class="btn" value="ThreeMinPitchers">Three Min Pitchers/Presenters</IonSegmentButton>
                  <IonSegmentButton class="btn" value="InvestmentPitchers">Investment Pitchers</IonSegmentButton>
                </IonSegment>
              </IonRow>
              <IonRow class="FreePitching">
                For FREE pitching/presenting, book a ticket from the ticket section on an event's page.
                <a href="/EventsShowsPage">Click HERE</a>
              </IonRow>
              <IonRow class="DisplayComponentRow">
                <IonCol v-show="selectedTab === 'AllPitchers'" class="AllPitchers">
                  <PitchingComponent />
                </IonCol>
                <IonCol v-show="selectedTab === 'OneMinPitchers'" class="OneMinPitchers">
                  <PitchingComponent />
                </IonCol>
                <IonCol v-show="selectedTab === 'ThreeMinPitchers'" class="ThreeMinPitchers">
                  <PitchingComponent />
                </IonCol>
                <IonCol v-show="selectedTab === 'InvestmentPitchers'" class="InvestmentPitchers">
                  <PitchingComponent />
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCol>

          <!-- Right Advert Section -->
          <IonCol size="12" size-md="2" class="bordered-section RightAdvertComponent">
            <RightAd1Component />
            <RightAd2Component />
            <RightAd3Component />
            <RightAd4Component />
          </IonCol>
        </IonRow>

        <!-- Footer Section -->
        <IonRow>
          <IonCol class="bordered-section FooterComponent">
            <FooterComponent />
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonPage>
</template>
