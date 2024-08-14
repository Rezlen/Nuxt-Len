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

        <FormPitchingWorkshopPresentationComponent/>

      </IonCol>





      <!-- TAB Opens the Upselling form ############################################################################################### -->
      <IonCol v-show="selectedTab === 'UpSelling'" class="UpSelling">

        <FormUpSellingComponent />


      </IonCol>
    </IonRow>


  </IonGrid>

</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonCheckbox, IonSegment, IonSegmentButton,IonContent, IonInput, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonSelect, IonSelectOption, IonButton, IonTextarea, IonList } from '@ionic/vue';
import FormPitchingWorkshopPresentationComponent from '@/components/PitchingComponents/FormPitchingWorkshopPresentationComponent.vue';
import FormUpSellingComponent from '@/components/PitchingComponents/FormUpSellingComponent.vue';

export default defineComponent({
  name: 'TicketTABsPitchingUpSellingComponent',
  components: {
    IonContent,
    IonInput,
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
    FormPitchingWorkshopPresentationComponent, 
    FormUpSellingComponent,
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
  display: flex;
  /* flex-direction: row; */
  align-items: center;

}
.numberInput {
  max-width: 40px;
  max-height: 1px;
  border: solid 1px rgb(12, 42, 211);
  margin: 0 5px;
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

.btn {
  /* flex: 1; */
  white-space: normal; /* Allows text to wrap */
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

.Summaries {
  width: 100%; /*ensures does not exit the mobile frame for long Label*/
  gap: 5px;
  white-space: normal; /* Allows text to wrap */
 }
@media (max-width: 600px) {
  .test {
    flex-direction: row;
    width: 100%;
    display: flex;
  }
  .redWords{
    display: block;
  }

 }

</style>
