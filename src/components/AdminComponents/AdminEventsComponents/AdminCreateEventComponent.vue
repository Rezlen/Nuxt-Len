<template>
  <IonGrid>
    <IonRow>
      <IonCol>
        <!-- FloorPlan section details -->
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
        <img alt="LEN Logo" src="/WeworkMoorgateGroundfloor.jpg" />
      </IonCol>

        <!-- Event Details Section -->
      <IonCol>
        <IonRow class="BorderedSection">
            <P>This section is to create Title Of the event, address & details etc..</P>
          <IonCol>
            <IonTextarea class="Summaries" label="AddressLocationName" label-placement="floating" :counter="true" :maxlength="100" :counter-formatter="customFormatter"></IonTextarea>
          </IonCol>
          <IonCol>
            <IonTextarea outline="fill" class="Summaries" label="FullAddress" label-placement="floating" :counter="true" :maxlength="100" :counter-formatter="customFormatter"></IonTextarea>
          </IonCol>
          <IonCol><iframe width="150px">GMap</iframe></IonCol>
          <IonCol>
            <iframe width="150" height="150" src="https://www.youtube.com/embed/dNjQ_wZBA28" title="🔥Business Advice London - Advice For Entrepreneurs - Mentoring, Coaching | London Entrepreneurs 🚀" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </IonCol>
          <IonCol>
            <IonTextarea class="Summaries" label="EventDetails" label-placement="floating" :counter="true" :maxlength="1000" :counter-formatter="customFormatter"></IonTextarea>
          </IonCol>
          <IonCol>
            <IonTextarea :auto-grow="true" label="EventTitle" label-placement="floating" :counter="true" :maxlength="100" :counter-formatter="customFormatter"></IonTextarea>
          </IonCol>
        </IonRow>

        <!-- Create Tickets Section -->
        <IonRow class="BorderedSection">
            <P>This section is to create actual tickets for Exhibiting, Pitching, Presenting etc..</P>
          <IonCol>
            <IonSelect v-model="selectedCategory" placeholder="Ticket Type" fill="outline" class="TicketType">
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

        <!-- Create Upselling Section -->
          <IonRow class="BorderedSection ">
            <p>This section is to create Upselling tickets for Exhibitors, Pitchers, Presenters etc..</p>
            <IonCol class="UpSellingService1">
              <IonTextarea class="TicketQ" label="Type the question 1 here" label-placement="floating" :counter="true" :maxlength="100" :counter-formatter="customFormatter"></IonTextarea>
              <!-- Do You Need Presentation or Pitching Training ? -->
              <IonTextarea class="TicketA" label="Question Description Here" label-placement="floating" :counter="true" :maxlength="100" :counter-formatter="customFormatter"></IonTextarea>
              <!-- I want 1 hour presentation/pitching training, for my presentation or pitching in this event; £100 x 1 = £100 -->
            </IonCol>

            <IonCol class="UpSellingService2">
              <IonTextarea class="TicketQ" label="Type the question 2 here" label-placement="floating" :counter="true" :maxlength="100" :counter-formatter="customFormatter"></IonTextarea>
              <!-- Do You Need Business/Funding/Investment Advice ? -->
              <IonTextarea class="TicketA" label="Question Description Here" label-placement="floating" :counter="true" :maxlength="100" :counter-formatter="customFormatter"></IonTextarea>
              <!-- I want 1 hour FUNDING, INVESTMENT ADVICE on how/where-from to source funding/investment for my business/idea; £75 x 1 = £75 -->
              <IonTextarea class="TicketA" label="Question Description Here" label-placement="floating" :counter="true" :maxlength="100" :counter-formatter="customFormatter"></IonTextarea>
              <!-- I want 1 hour BUSINESS ADVICE about my business/idea; in-person, phone or online e.g Skype; £75 x 1 = £75 -->
            </IonCol>

            <IonCol class="UpSellingService3">
              <IonTextarea class="TicketQ" label="Type the question 3 here" label-placement="floating" :counter="true" :maxlength="100" :counter-formatter="customFormatter"></IonTextarea>
              <!-- Do You Need FREE Business/Funding/Investment Advice ?-->
              <IonTextarea class="TicketA" label="Question Description Here" label-placement="floating" :counter="true" :maxlength="100" :counter-formatter="customFormatter"></IonTextarea>
              <!-- I want HALF an HOUR <span class="ADVICEforFREE">FUNDING, INVESTMENT ADVICE for FREE</span>, on how/where-from to source funding/investment for my business/idea. -->
              <IonTextarea class="TicketA" label="Question Description Here" label-placement="floating" :counter="true" :maxlength="100" :counter-formatter="customFormatter"></IonTextarea>
              <!-- I want HALF an HOUR <span class="ADVICEforFREE">BUSINESS ADVICE for FREE</span>, about my business/idea; in-person, phone or online e.g Skype. -->
            </IonCol>

            <IonCol class="UpSellingService4">
              <IonTextarea class="TicketQ" label="Type the question 4 here" label-placement="floating" :counter="true" :maxlength="100" :counter-formatter="customFormatter"></IonTextarea>
              <!-- Tick Below if You Like to Receive a Video of Your Pitching!-->
              <IonTextarea class="TicketA" label="Question Description Here" label-placement="floating" :counter="true" :maxlength="100" :counter-formatter="customFormatter"></IonTextarea>
              <!-- My pitching be professionally filmed, receive a RAW (UN-Edited) professional footage; £20 x 1 = £20 -->
              <IonTextarea class="TicketA" label="Question Description Here" label-placement="floating" :counter="true" :maxlength="100" :counter-formatter="customFormatter"></IonTextarea>
              <!-- My pitching be filmed, receive professionally EDITED 5 minutes footage; £250 x 1 = £250 -->
            </IonCol>

          
          
          </IonRow>
          <IonDatetime></IonDatetime>

          <IonButton>Submit</IonButton>


        
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
    // this disables features that are only needed for FREE tickets
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
p{
  font-weight: bold;
  text-align: center;
}
.TicketType {
  border: 4px solid rgb(221, 9, 9);
  border-radius: 5px;
}
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
.UpSellingService2,
.UpSellingService4 {
  margin: 4px;
  background-color: rgb(245, 229, 253);
  border-radius: 7px;
}
.UpSellingService1,
.UpSellingService3 {
  margin: 4px;
  background-color: rgb(177, 247, 206);
  border-radius: 7px;
}
</style>



