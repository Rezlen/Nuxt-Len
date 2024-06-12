
            <!-- "Tabs7_ 1-Marketing 2-Accounting 3-Investment 4-Law 5-Business Advice 6-Web Development 6-Office Space ##############################-->
            <IonCol class="Tab5BiZOfferNeedRow">
              <IonRow class="Tabs7_ 1-Marketing 2-Accounting 3-Investment 4-Law 5-Business Advice 6-Web Development 6-Office Space">
                <IonSegment v-model="selectedTab" class="TabSegment" color="primary">
                  <IonSegmentButton class="btn" value="BusinessProfiles">All Business Profiles</IonSegmentButton>
                  <IonSegmentButton class="btn" value="Offers">All Offers</IonSegmentButton>
                  <IonSegmentButton class="btn" value="Needs">All Needs</IonSegmentButton>
                  <IonSegmentButton class="btn" value="BestOffers">Best Offers</IonSegmentButton>
                  <IonSegmentButton class="btn" value="AdvertiseForFree">Advertise For FREE</IonSegmentButton>
                </IonSegment>
              </IonRow>
              <IonRow class="DisplayComponentRow">
                <IonCol v-show="selectedTab === 'BusinessProfiles'" class="AllBusinessProfiles">
                  <MiniProfileCardComponent />
                  <MiniProfileCardComponent />
                </IonCol>
                <IonCol v-show="selectedTab === 'Offers'" class="AllOffers">
                  <!-- Component for All Offers #########" -->
                  <MiniProfileCardVIPComponent />
                </IonCol>
                <IonCol v-show="selectedTab === 'Needs'" class="AllNeeds">
                  <!-- Component for All Needs #########" -->
                  <MiniProfileCardVVIPComponent />
                </IonCol>
                <IonCol v-show="selectedTab === 'BestOffers'" class="BestOffers">
                  <!-- Component for Best Offers #########" -->
                  <MiniProfileCardComponent />
                </IonCol>
                <IonCol v-show="selectedTab === 'AdvertiseForFree'" class="AdvertiseForFree">
                  <!-- Component for Advertise For FREE #########" -->
                  <MiniProfileCardComponent />
                </IonCol>
              </IonRow>
            </IonCol>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonPage, IonGrid, IonRow, IonCol, IonContent, IonSegment, IonSegmentButton } from '@ionic/vue';


export default defineComponent({
  name: 'BizOfferNeedPage',
  components: {
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    
  },
  setup() {
    const selectedTab = ref<string>('BusinessProfiles'); // Initialize with the default tab

    return {
      selectedTab,
    };
  },
});

</script>



<style scoped>
/* Updated for new tab names and mobile responsiveness */


.Tabs4AllBusinessProfilesAllOffersAllNeedsBestOffersAdvertiseForFree {
  display: flex;
  flex-wrap: wrap; /* Allow tabs to wrap to the next row */
  margin-bottom: 10px;
}

.TabSegment {
  display: flex;
  flex-wrap: wrap; /* Allow segment buttons to wrap */
  width: 100%;
}

.TabSegment .btn {
  flex: 1 1 auto; /* Ensure buttons are flexible and wrap appropriately */
  min-width: 150px; /* Minimum width for each button to ensure readability */
}

.DisplayComponentRow {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.AllBusinessProfiles,
.AllOffers,
.AllNeeds,
.BestOffers,
.AdvertiseForFree {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  flex: 1 1 calc(50% - 20px); /* Ensure columns are responsive */
  margin: 10px;
}

@media (max-width: 600px) {
  .AllBusinessProfiles,
  .AllOffers,
  .AllNeeds,
  .BestOffers,
  .AdvertiseForFree {
    flex: 1 1 100%; /* Make each tab content full width on small screens */
  }
}
</style>

