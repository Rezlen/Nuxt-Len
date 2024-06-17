<template>

  <IonGrid class="Grid">

    <IonTextarea  label="Enter Your Best Offer's Title Here" label-placement="floating"  :counter="true"  :maxlength="100" :counter-formatter="customFormatter" ></IonTextarea> 
    
    <IonRow>  
      <IonCol>
        <IonSelect v-model="selectedCategory" placeholder="Choose a Country Best Offer" fill="outline" >
          <IonSelectOption value="category1">Category 1</IonSelectOption>
          <IonSelectOption value="category2">Category 2</IonSelectOption>
          <IonSelectOption value="category3">Category 3</IonSelectOption>
        </IonSelect>
      </IonCol>
      <IonCol>
        <IonSelect v-model="selectedCategory" placeholder="Choose a City Best Offer" fill="outline" >
          <IonSelectOption value="category1">Category 1</IonSelectOption>
          <IonSelectOption value="category2">Category 2</IonSelectOption>
          <IonSelectOption value="category3">Category 3</IonSelectOption>
        </IonSelect>
      </IonCol>
      <IonCol>
        <IonSelect v-model="selectedCategory" placeholder="Choose Category" fill="outline" >
          <IonSelectOption value="category1">Marketing</IonSelectOption>
          <IonSelectOption value="category2">Accounting</IonSelectOption>
          <IonSelectOption value="category3">Investment</IonSelectOption>
          <IonSelectOption value="category4">Law</IonSelectOption>
          <IonSelectOption value="category5">Business Advice</IonSelectOption>
          <IonSelectOption value="category6">Web Development</IonSelectOption>
          <IonSelectOption value="category7">Office Space</IonSelectOption>
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

      <IonRow>
        <p> To feature your offer on our BEST OFFERS page and promote it to our members, a commission percentage will be deducted from your selling price if selected. Please specify the commission percentage you are willing to offer.</p>
        <IonSelect v-model="selectedCategory" placeholder="Commission %" fill="outline" >
          <IonSelectOption value="5">5%</IonSelectOption>
          <IonSelectOption value="10">10%</IonSelectOption>
          <IonSelectOption value="15">15%</IonSelectOption>
          <IonSelectOption value="20">20%</IonSelectOption>
          <IonSelectOption value="25">25%</IonSelectOption>
          <IonSelectOption value="30">30%</IonSelectOption>
          <IonSelectOption value="35">35%</IonSelectOption>
          <IonSelectOption value="40">40%</IonSelectOption>
          <IonSelectOption value="45">45%</IonSelectOption>
          <IonSelectOption value="50">50%</IonSelectOption>
          <IonSelectOption value="55">55%</IonSelectOption>
          <IonSelectOption value="60">60%</IonSelectOption>
          <IonSelectOption value="65">65%</IonSelectOption>
          <IonSelectOption value="70">70%</IonSelectOption>
          <IonSelectOption value="75">75%</IonSelectOption>
          <IonSelectOption value="80">80%</IonSelectOption>
          <IonSelectOption value="85">85%</IonSelectOption>
          <IonSelectOption value="90">90%</IonSelectOption>
          <IonSelectOption value="95">95%</IonSelectOption>
          <IonSelectOption value="100">100%</IonSelectOption>
        </IonSelect>
      </IonRow>

      <IonItem>
        <IonLabel>Upload Image</IonLabel>
        <input type="file" @change="onFileSelected" />
      </IonItem>
      <IonCol>
        <IonItem>
          <IonTextarea  label="Enter Your Best Offer's Content here" label-placement="floating"  :counter="true" :auto-grow="true" :maxlength="1000" :counter-formatter="customFormatter" ></IonTextarea> 
        </IonItem>
      </IonCol>
    </IonRow>

    <IonRow>
      <IonCol>
        <IonButton size="large" expand="block" @click="submitContent">Submit My Best Offer Proposal to the Admin</IonButton>
      </IonCol>
    </IonRow>

  </IonGrid>

</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonContent, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonSelect, IonSelectOption, IonButton, IonTextarea } from '@ionic/vue';

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
#editor-container {
  height: 300px;
  margin: 16px 0;
}

input[type="file"] {
  width: 100%;
}
</style>
