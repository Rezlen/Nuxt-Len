<template>

  <IonGrid class="Grid">


    <IonRow class="Tabs2_PitchingPresentationWorkshop-Upselling">
      <IonSegment v-model="selectedTab" class="TabSegment" color="primary">
        <IonSegmentButton class="btn" value="PitchingPresentationWorkshop">pitching, workshops, presentations</IonSegmentButton>
        <IonSegmentButton class="btn" value="UpSelling">Video Recording, Business Advice, Pitching Training</IonSegmentButton>
      </IonSegment>
    </IonRow>
    <IonRow class="DisplayComponentRow">

      
      <!-- Opens the  pitching, workshops or presentations form-->
      <IonCol v-show="selectedTab === 'PitchingPresentationWorkshop'" class="PitchingPresentationWorkshop">

        <p class="CenterPositions">People often ask blow info about your pitching/workshop/presentation. Fill below so they can contact you!</p>
        <IonTextarea  label="Enter Your Pitching Title Here" label-placement="floating"  :counter="true"  :maxlength="100" :counter-formatter="customFormatter" ></IonTextarea> 
        <IonTextarea  label="What You Are Going to Pitch,Present/Workshop for?" label-placement="floating"  :counter="true"  :maxlength="100" :counter-formatter="customFormatter" ></IonTextarea> 
        
        <IonRow>  
          <IonCol>
            <IonSelect v-model="selectedCategory" placeholder="For Which Country" fill="outline" >
              <IonSelectOption value="category1">Category 1</IonSelectOption>
              <IonSelectOption value="category2">Category 2</IonSelectOption>
              <IonSelectOption value="category3">Category 3</IonSelectOption>
            </IonSelect>
          </IonCol>
          <IonCol>
            <IonSelect v-model="selectedCategory" placeholder="For Which  City" fill="outline" >
              <IonSelectOption value="category1">Category 1</IonSelectOption>
              <IonSelectOption value="category2">Category 2</IonSelectOption>
              <IonSelectOption value="category3">Category 3</IonSelectOption>
            </IonSelect>
          </IonCol>
          <IonCol>
            <IonSelect v-model="selectedCategory" placeholder="Choose Category" fill="outline" >
              <IonSelectOption value="category1">Category 1</IonSelectOption>
              <IonSelectOption value="category2">Category 2</IonSelectOption>
              <IonSelectOption value="category3">Category 3</IonSelectOption>
            </IonSelect>
          </IonCol>


          <IonItem>
            <IonLabel>Upload PowerPoint</IonLabel>
            <input type="file" @change="onFileSelected" />
          </IonItem>
          <IonRow class="Summeries" >
            <IonTextarea class="Summeries" label="Enter You YouTube EMBEDING Link Here (If you have/wish)" label-placement="floating"  :counter="true"  :maxlength="30" :counter-formatter="customFormatter" ></IonTextarea>
            <IonTextarea  class="Summeries" label="Summerise Your Pitching/Presentation Here" label-placement="floating"  :counter="true" :auto-grow="true" :maxlength="500" :counter-formatter="customFormatter" ></IonTextarea>
            <IonTextarea  class="Summeries" label="Summerise What You Are Looking For/Need" label-placement="floating"  :counter="true" :auto-grow="true" :maxlength="500" :counter-formatter="customFormatter" ></IonTextarea> 
          </IonRow>
        </IonRow>

      </IonCol>





      <!-- TAB Opens the Upselling form ############################################################################################### -->
      <IonCol v-show="selectedTab === 'UpSelling'" class="UpSelling">
        <IonRow class="UpSellingService1 ">
          <p class="CenterPositions checkbox-text">Do You Need Presentation or Pitching Training ?</p>
          <IonCheckbox justify="end"><p class="checkbox-text">I want 1 hour presentation/pitching training, for my presentation or pitching in this event; £100 x 1 = £100</p></IonCheckbox>
        </IonRow>
        <IonRow class="UpSellingService2 ">
          <p class="CenterPositions checkbox-text">Do You Need Business/Funding/Investment Advice ?</p>
          <IonCheckbox justify="end"><p class="checkbox-text">I want 1 hour FUNDING, INVESTMENT ADVICE on how/where-from to source funding/investment for my business/idea; £75 x 1 = £75</p></IonCheckbox>
          <IonCheckbox justify="end"><p class="checkbox-text">I want 1 hour BUSINESS ADVICE about my business/idea; in-person, phone or online e.g Skype; £75 x 1 = £75</p></IonCheckbox>
        </IonRow>
        <IonRow class="UpSellingService3">
          <p class="CenterPositions checkbox-text">Do You Need FREE Business/Funding/Investment Advice ?</p>
          <IonCheckbox justify="end"><p class="checkbox-text">I want HALF an HOUR <span class="ADVICEforFREE">FUNDING, INVESTMENT ADVICE for FREE</span>, on how/where-from to source funding/investment for my business/idea.</p></IonCheckbox>
          <IonCheckbox justify="end"><p class="checkbox-text">I want HALF an HOUR <span class="ADVICEforFREE">BUSINESS ADVICE for FREE</span>, about my business/idea; in-person, phone or online e.g Skype.</p></IonCheckbox>
        </IonRow>
        <IonRow class="UpSellingService4">
          <p class="CenterPositions checkbox-text" > Tick Below if You Like to Receive a Video of Your Pitching!</p>
          <IonCheckbox justify="end"><p class="checkbox-text">My pitching be professionally filmed, receive a RAW (UN-Edited) professional footage; £20 x 1 = £20</p></IonCheckbox>
          <IonCheckbox justify="end"><p class="checkbox-text">My pitching be filmed, receive professionally EDITED 5 minutes footage; £250 x 1 = £250</p></IonCheckbox>
        </IonRow>




      </IonCol>
    </IonRow>


  </IonGrid>

</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonCheckbox, IonSegment, IonSegmentButton,IonContent, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonSelect, IonSelectOption, IonButton, IonTextarea, IonList } from '@ionic/vue';

export default defineComponent({
  name: 'FormPitchingComponent',
  components: {
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonButton,
    IonTextarea,
    IonList,
    IonSegment,
    IonSegmentButton,
    IonCheckbox,
  },
  setup() {
    const selectedTab = ref<string>(''); // Initialize with the default tab
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

    const submitContent = () => {
      console.log('Category:', selectedCategory.value);

    };

    return {
      selectedTab,
      selectedCategory,
      onFileSelected,
      submitContent,
      customFormatter
    };
  }
});
</script>



<style scoped>

ion-grid {
  overflow-y: auto; /* Enable vertical scrolling */
  height: 100%; /* Full height to fit the parent */
}

ion-textarea{
  border-radius: 7px;
  border:1px gray solid;
  margin-bottom: 10px;
}
.UpSellingService2,
.UpSellingService4 {
  margin: 10px;
  background-color: rgb(245, 229, 253);
  border-radius: 7px;
  padding: 5px;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
}
.UpSellingService1,
.UpSellingService3 {
  margin: 10px;
  background-color: rgb(177, 247, 206);
  border-radius: 7px;
  padding: 5px;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
}

.checkbox-text {
  white-space: normal;
  text-align: left;
  padding: 5px;
  font-size: 13px;
  margin: 0;
}
.ADVICEforFREE {
  /* font-weight: bold; */
  color: red;
}
ion-checkbox {
  border: solid 1px rgb(223, 223, 223);
  border-radius: 4px;
}

/* <!-- tabs style --> */
.Tabs2_PitchingPresentationWorkshop-Upselling {
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
  color: red;
  font-weight: bold;
}

.DisplayComponentRow {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.CenterPositions {
  text-align: center;
  justify-content: center;
  align-content: center;
  align-items: center;
  font-weight: bold;
}
input[type="file"] {
  width: 100%;
}

.Summeries {
  /* display: flex; */
  flex-direction: row;
  /* width: fit-content; */
  gap: 5px;
 }
 


</style>
