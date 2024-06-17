<template>

  <IonGrid class="Grid">
    <IonList>
      <IonRadioGroup value="start">
        <IonRow class="OneThreeInvestmentChoices" >
          <IonRadio color="success" value="custom" aria-label="Custom checkbox"  justify="start">FREE One Minute Pitching</IonRadio>
          <IonRadio color="success" value="custom" aria-label="Custom checkbox"  justify="start">3Three Minutes Pitching</IonRadio>
          <IonRadio color="success" value="custom" aria-label="Custom checkbox"  justify="start">5Five Minutes Presentation</IonRadio>
        </IonRow>
      </IonRadioGroup>
    </ionList>
    <IonTextarea  label="Enter Your Pitching Title Here" label-placement="floating"  :counter="true"  :maxlength="100" :counter-formatter="customFormatter" ></IonTextarea> 
    <IonTextarea  label="What You Are Looking For?" label-placement="floating"  :counter="true"  :maxlength="100" :counter-formatter="customFormatter" ></IonTextarea> 
    
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


  </IonGrid>

</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonContent, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonSelect, IonSelectOption, IonButton, IonTextarea, IonRadio, IonRadioGroup, IonList } from '@ionic/vue';

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
    IonRadio,
    IonRadioGroup,
    IonList,
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

    const submitContent = () => {
      console.log('Category:', selectedCategory.value);

    };

    return {
      selectedCategory,
      onFileSelected,
      submitContent,
      customFormatter
    };
  }
});
</script>



<style scoped>
ion-radio {
  border: solid 1px gray;
  padding: 5px;
  border-radius: 5px;
}
ion-grid {
  overflow-y: auto; /* Enable vertical scrolling */
  height: 100%; /* Full height to fit the parent */
}

ion-textarea{
  border-radius: 7px;
  border:1px gray solid;
  margin-bottom: 10px;
}

input[type="file"] {
  width: 100%;
}

/* .OneThreeInvestmentChoices {
  overflow: wrap;
} */

 .OneThreeInvestmentChoices {
    display: flex;
    justify-content: center;
    gap: 5px;
    padding-top:20px;
 }

 .Summeries {
  /* display: flex; */
  flex-direction: row;
  /* width: fit-content; */
  gap: 5px;
 }
 

  @media (max-width: 760px) {
 .Summeries {
  /* width:100%; */
 }


}
</style>
