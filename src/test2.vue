            <IonRow class=" bordered-section InvestorsSection ">
            <!-- 3Tabs 1- Post an Offer 2- Post a Need 3- Post a Best offer ##############################-->
            <IonCol class="Tab5BiZOfferNeedRow">
              <IonRow class="Tabs4AllBusinessProfilesAllOffersAllNeedsBestOffersAdvertiseForFree">
                <IonSegment v-model="selectedTab" class="TabSegment" color="primary">
                  <IonSegmentButton class="btn" value="Offers">All Offers</IonSegmentButton>
                  <IonSegmentButton class="btn" value="Needs">All Needs</IonSegmentButton>
                  <IonSegmentButton class="btn" value="BestOffers">Best Offers</IonSegmentButton>
                  <IonSegmentButton class="btn" value="AdvertiseForFree">Advertise For FREE</IonSegmentButton>
                </IonSegment>
              </IonRow>
              <IonRow class="DisplayComponentRow">
                <IonCol v-show="selectedTab === 'Offers'" class="AllOffers">
                  <!-- Component for All Offers #########" -->
                  <OfferComponent />
                </IonCol>
                <IonCol v-show="selectedTab === 'Needs'" class="AllNeeds">
                  <!-- Component for All Needs #########" -->
                  <NeedComponent />
                </IonCol>
                <IonCol v-show="selectedTab === 'BestOffers'" class="BestOffers">
                  <!-- Carefull !!! This Component is athe 7 tabs only THEN in its tab component the BEST OFFERs are nested #########" -->
                  <BestOfferTABsComponent />
                </IonCol>
                <IonCol v-show="selectedTab === 'AdvertiseForFree'" class="AdvertiseForFree">
                  <!-- Component for Advertise For FREE #########" -->
                  <MiniProfileCardComponent />
                </IonCol>
              </IonRow>
            </IonCol>
            </IonRow>