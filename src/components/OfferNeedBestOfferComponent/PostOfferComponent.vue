<template>

  <IonGrid class="Grid">
    <p class="title">Post your OFFERs for FREE, to display to thousands of daily visitors!!</p>
    <IonTextarea  label="Enter Your Offer's Title Here" label-placement="floating"  :counter="true"  :maxlength="100" :counter-formatter="customFormatter" ></IonTextarea> 
    
    <IonRow>  
      <IonCol>
        <IonSelect v-model="selectedCategory" placeholder="Choose a Country Offer" fill="outline" >
          <IonSelectOption value="category1">Category 1</IonSelectOption>
          <IonSelectOption value="category2">Category 2</IonSelectOption>
          <IonSelectOption value="category3">Category 3</IonSelectOption>
        </IonSelect>
      </IonCol>
      <IonCol>
        <IonSelect v-model="selectedCategory" placeholder="Choose a City Offer" fill="outline" >
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
      <IonCol>
        <IonSelect v-model="selectedCategory" placeholder="Choose Duration" fill="outline" >
          <IonSelectOption value="category1">1 Week</IonSelectOption>
          <IonSelectOption value="category2">2 Weeks</IonSelectOption>
          <IonSelectOption value="category3">3 Weeks</IonSelectOption>
          <IonSelectOption value="category4">4 Weeks</IonSelectOption>
          <IonSelectOption value="category5">2 Months</IonSelectOption>
          <IonSelectOption value="category6">3 Months</IonSelectOption>
          <IonSelectOption value="category7">6 Months</IonSelectOption>
          <IonSelectOption value="category8">1 Year</IonSelectOption>
        </IonSelect>
      </IonCol>

      <IonItem>
        <IonLabel>Upload Image</IonLabel>
        <input type="file" @change="onFileSelected" />
      </IonItem>
      <IonCol>
        <IonItem>
          <IonTextarea  label="Enter Your Offer's Content here" label-placement="floating"  :counter="true" :auto-grow="true" :maxlength="1000" :counter-formatter="customFormatter" ></IonTextarea> 
        </IonItem>
      </IonCol>
    </IonRow>


    <IonRow>
      <IonCol>
        <IonButton color="success"  expand="block" @click="submitContent">Pin (Advertise) My Offer on TOP of Others</IonButton>
      </IonCol>
    </IonRow>
    <IonRow>
      <IonCol>
        <IonButton size="large" expand="block" @click="submitContent">Post My Offer</IonButton>
      </IonCol>
    </IonRow>


    
  </IonGrid>

</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonContent, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonSelect, IonSelectOption, IonButton, IonTextarea } from '@ionic/vue';

export default defineComponent({
  name: 'PostOfferComponent',
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

    };

    return {
      selectedCategory,
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
.title {
  text-align: center;
  font-weight: bold;
}
#editor-container {
  height: 300px;
  margin: 16px 0;
}

input[type="file"] {
  width: 100%;
}
</style>
