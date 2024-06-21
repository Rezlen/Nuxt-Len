<template>
  <IonGrid>
    <IonRow>
      <IonCol>
        <!-- Create Floorplan Section -->
        <IonRow class="BorderedSection">
          <IonCol>
            <IonLabel>Upload Floorplan</IonLabel>
            <input type="file" @change="onFileSelected" />
          </IonCol>
          <IonCol>
            <IonSelect v-model="selectedCategory" placeholder="Display Floorplan on" fill="outline">
              <IonSelectOption value="homePage">Home Page</IonSelectOption>
              <IonSelectOption value="exhibitingTab">Exhibiting Tab in EventsShowsPage</IonSelectOption>
            </IonSelect>
          </IonCol>
          <IonCol>
            <IonButton fill="outline">Hide Floorplan</IonButton>
          </IonCol>
        </IonRow>
        <img alt="LEN Logo" src="/public/WeworkMoorgateGroundfloor.jpg" />
      </IonCol>

      <IonCol>
        <IonRow class="BorderedSection">
          <IonCol>
            <IonTextarea class="Summeries" label="AddressLocationName" label-placement="floating" :counter="true" :maxlength="100" :counter-formatter="customFormatter"></IonTextarea>
          </IonCol>
          <IonCol>
            <IonTextarea outline="fill" class="Summeries" label="FullAddress" label-placement="floating" :counter="true" :maxlength="100" :counter-formatter="customFormatter"></IonTextarea>
          </IonCol>
          <IonCol><iframe width="150px">GMap</iframe></IonCol>
          <IonCol>
            <iframe width="150" height="150" src="https://www.youtube.com/embed/dNjQ_wZBA28" title="🔥Business Advice London - Advice For Entrepreneurs - Mentoring, Coaching | London Entrepreneurs 🚀" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </IonCol>
          <IonCol>
            <IonTextarea class="Summeries" label="EventDetails" label-placement="floating" :counter="true" :maxlength="1000" :counter-formatter="customFormatter"></IonTextarea>
          </IonCol>
          <IonCol>
            <IonTextarea :auto-grow="true" label="EventTitle" label-placement="floating" :counter="true" :maxlength="100" :counter-formatter="customFormatter"></IonTextarea>
          </IonCol>
        </IonRow>

        <!-- Create Tickets Section -->
        <IonRow class="BorderedSection">
          <IonCol>
            <IonSelect v-model="selectedCategory" placeholder="Ticket Type" fill="outline">
              <IonSelectOption value="freeVisitor">FREE Visitor</IonSelectOption>
              <IonSelectOption value="freeBusinessMentor">FREE Business Mentor</IonSelectOption>
              <IonSelectOption value="freeInvestor">FREE Investor</IonSelectOption>
              <IonSelectOption value="free1MinutePitching">FREE 1 Minute Pitching</IonSelectOption>
              <IonSelectOption value="threeMinPitching">3 Min Pitching</IonSelectOption>
              <IonSelectOption value="fiveMinInvestmentPitching">5 Min Investment Pitching</IonSelectOption>
              <IonSelectOption value="fiveMinPresentation">5 Min Presentation</IonSelectOption>
              <IonSelectOption value="thirtyMinWorkshop">30 Min Workshop</IonSelectOption>
              <IonSelectOption value="exhibitionSpotTickets">Exhibition Spot Tickets</IonSelectOption>
            </IonSelect>
          </IonCol>
          <IonCol>
            <IonSelect :disabled="isFreeTicket" v-model="selectedCategory" placeholder="Exhibition Spot Color" fill="outline">
              <IonSelectOption value="blue">Blue</IonSelectOption>
              <IonSelectOption value="yellow">Yellow</IonSelectOption>
              <IonSelectOption value="red">Red</IonSelectOption>
            </IonSelect>
          </IonCol>
          <IonCol>
            <IonSelect :disabled="isFreeTicket" v-model="selectedCategory" placeholder="Exhibition Spot Shape" fill="outline">
              <IonSelectOption value="square">Square</IonSelectOption>
              <IonSelectOption value="circle">Circle</IonSelectOption>
              <IonSelectOption value="rectangle">Rectangle</IonSelectOption>
            </IonSelect>
          </IonCol>
          <IonCol>
            <IonSelect :disabled="isFreeTicket" v-model="selectedCategory" placeholder="Display Exhibition Quantity" fill="outline">
              <IonSelectOption value="yes">Yes</IonSelectOption>
              <IonSelectOption value="no">No</IonSelectOption>
            </IonSelect>
          </IonCol>
          <IonCol>
            <IonSelect v-model="selectedCategory" placeholder="Display Visitors Quantity" fill="outline">
              <IonSelectOption value="yes">Yes</IonSelectOption>
              <IonSelectOption value="no">No</IonSelectOption>
            </IonSelect>
          </IonCol>
          <IonCol>
            <IonInput :disabled="isFreeTicket" :auto-grow="true" type="number" label="Price" label-placement="floating" :counter="true" :maxlength="5" :counter-formatter="customFormatter" fill="outline"></IonInput>
          </IonCol>
          <IonCol>
            <IonInput :auto-grow="true" type="number" label="Ticket Quantity" label-placement="floating" :counter="true" :maxlength="10" :counter-formatter="customFormatter" fill="outline"></IonInput>
          </IonCol>
          <IonCol>
            <IonTextarea :auto-grow="true" type="text" label="Ticket Title" label-placement="floating" :counter="true" :maxlength="100" :counter-formatter="customFormatter"></IonTextarea>
          </IonCol>
          <IonCol>
            <IonTextarea :auto-grow="true" type="text" label="Ticket Description" label-placement="floating" :counter="true" :maxlength="100" :counter-formatter="customFormatter"></IonTextarea>
          </IonCol>
          <IonCol>
            <IonInput :disabled="isFreeTicket" :auto-grow="true" type="number" label="Discount Code" label-placement="floating" :counter="true" :maxlength="70" :counter-formatter="customFormatter" fill="outline"></IonInput>
          </IonCol>
          <IonCol>
            <IonInput :disabled="isFreeTicket" :auto-grow="true" type="number" label="Discount % of Tickets Price" label-placement="floating" :counter="true" :maxlength="70" :counter-formatter="customFormatter" fill="outline"></IonInput>
          </IonCol>
          <IonCol>
            <IonInput :auto-grow="true" type="number" label="Display Green Notification HOURS Before Event" label-placement="floating" :counter="true" :maxlength="70" :counter-formatter="customFormatter" fill="outline"></IonInput>
          </IonCol>
          <IonCol>
            <IonInput :auto-grow="true" type="number" label="Display Blue Notification HOURS Before Event" label-placement="floating" :counter="true" :maxlength="70" :counter-formatter="customFormatter" fill="outline"></IonInput>
          </IonCol>
          <IonCol>
            <IonButton fill="outline">Submit</IonButton>
            <IonButton fill="outline">Reset</IonButton>
          </IonCol>
        </IonRow>

        <IonDatetime></IonDatetime>
      </IonCol>
    </IonRow>
  </IonGrid>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { IonSelectOption, IonInput, IonIcon, IonDatetime, IonGrid, IonRow, IonCol, IonButton, IonTextarea, IonLabel, IonSelect } from '@ionic/vue';

export default defineComponent({
  name: 'AdminCreateEventComponent',
  components: {
    IonSelectOption,
    IonInput,
    IonDatetime,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonTextarea,
    IonLabel,
    IonSelect,
  },
  setup() {
    const selectedCategory = ref<string | null>(null);

    const customFormatter = (inputLength: number, maxLength: number) => {
      return `${maxLength - inputLength} characters remaining`;
    };

    const onFileSelected = (event: Event) => {
      const input = event.target as HTMLInputElement;
      const file = input.files?.[0];
      if (file) {
        console.log(file);
      }
    };

    const isFreeTicket = computed(() => {
      return selectedCategory.value === 'freeVisitor' || selectedCategory.value === 'freeBusinessMentor' || selectedCategory.value === 'freeInvestor' || selectedCategory.value === 'free1MinutePitching';
    });

    return {
      selectedCategory,
      onFileSelected,
      customFormatter,
      isFreeTicket,
    };
  }
});
</script>


<style scoped>
.BorderedSection {
  border: 4px solid rgb(21, 223, 14);
  border-radius: 5px;
}

ion-grid {
  height: 100%;
  overflow-y: auto;
}

ion-textarea {
  border-radius: 7px;
  border: 1px green solid;
}
</style>



