<template>

  <IonGrid class="Grid">
    <IonTextarea  label="Enter Your Offer's Content here" label-placement="floating"  :counter="true"  :maxlength="100" :counter-formatter="customFormatter" ></IonTextarea> 
    
    <IonRow>  
      <IonCol>
        <IonDatetime v-model="selectedDate" display-format="MM/DD/YYYY" placeholder="Select Date"></IonDatetime>
      </IonCol>
      <IonCol>
        <IonSelect v-model="selectedCategory" placeholder="Choose a Country Offer" fill="outline" >
          <IonSelectOption value="category1">Category 1</IonSelectOption>
          <IonSelectOption value="category2">Category 2</IonSelectOption>
          <IonSelectOption value="category3">Category 3</IonSelectOption>
        </IonSelect>
        <IonSelect v-model="selectedCategory" placeholder="Choose a City Offer" fill="outline" >
          <IonSelectOption value="category1">Category 1</IonSelectOption>
          <IonSelectOption value="category2">Category 2</IonSelectOption>
          <IonSelectOption value="category3">Category 3</IonSelectOption>
        </IonSelect>
        <IonSelect v-model="selectedCategory" placeholder="Choose a City Category" fill="outline" >
          <IonSelectOption value="category1">Category 1</IonSelectOption>
          <IonSelectOption value="category2">Category 2</IonSelectOption>
          <IonSelectOption value="category3">Category 3</IonSelectOption>
        </IonSelect>
        <IonItem>
          <IonLabel>Upload Image</IonLabel>
          <input type="file" @change="onFileSelected" />
        </IonItem>
      </IonCol>
      <IonCol>
        <IonItem>
          <IonTextarea  label="Enter Your Offer's Content here" label-placement="floating"  :counter="true"  :maxlength="1000" :counter-formatter="customFormatter" ></IonTextarea> 
        </IonItem>
      </IonCol>
    </IonRow>


    <IonRow>
      <IonCol>
        <IonButton expand="block" @click="submitContent">Submit</IonButton>
      </IonCol>
    </IonRow>
    
  </IonGrid>

</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonContent, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonSelect, IonSelectOption, IonDatetime, IonButton, IonTextarea } from '@ionic/vue';

export default defineComponent({
  name: 'FormPage',
  components: {
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonDatetime,
    IonButton,
    IonTextarea,
  },
  setup() {
    const selectedCategory = ref<string | null>(null);
    const selectedDate = ref<string | null>(null);
    const editorContainer = ref<HTMLDivElement | null>(null);

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
      console.log('Date:', selectedDate.value);
    };

    return {
      selectedCategory,
      selectedDate,
      editorContainer,
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
  border:1px green solid;
}
#editor-container {
  height: 300px;
  margin: 16px 0;
}

input[type="file"] {
  width: 100%;
}
</style>
