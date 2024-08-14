<template>
  <IonGrid class="Grid">
    <!-- Opens the pitching, workshops or presentations form -->
    <IonCol class="PitchingPresentationWorkshop">
      <p class="CenterPositions">People often ask below info about your pitching/workshop/presentation. Fill below so they can contact you!</p>
      <IonTextarea 
        label="Enter Your Pitching Title Here" 
        label-placement="floating"  
        :counter="true"  
        :maxlength="100" 
        :counter-formatter="customFormatter">
      </IonTextarea> 
      <IonTextarea 
        label="What You Are Going to Pitch, Present/Workshop For?" 
        label-placement="floating"  
        :counter="true"  
        :maxlength="100" 
        :counter-formatter="customFormatter">
      </IonTextarea> 
      
      <IonRow>  
        <IonCol>
          <IonSelect v-model="selectedCategory" placeholder="For Which Country" fill="outline">
            <IonSelectOption value="category1">Category 1</IonSelectOption>
            <IonSelectOption value="category2">Category 2</IonSelectOption>
            <IonSelectOption value="category3">Category 3</IonSelectOption>
          </IonSelect>
        </IonCol>
        <IonCol>
          <IonSelect v-model="selectedCategory" placeholder="For Which City" fill="outline">
            <IonSelectOption value="category1">Category 1</IonSelectOption>
            <IonSelectOption value="category2">Category 2</IonSelectOption>
            <IonSelectOption value="category3">Category 3</IonSelectOption>
          </IonSelect>
        </IonCol>
        <IonCol>
          <IonSelect v-model="selectedCategory" placeholder="Choose Category" fill="outline">
            <IonSelectOption value="category1">Category 1</IonSelectOption>
            <IonSelectOption value="category2">Category 2</IonSelectOption>
            <IonSelectOption value="category3">Category 3</IonSelectOption>
          </IonSelect>
        </IonCol>
        <IonItem>
          <IonLabel>Upload PowerPoint</IonLabel>
          <input type="file" @change="onFileSelected" />
        </IonItem>
        <IonRow class="Summaries">
          <IonTextarea 
            class="Summaries" 
            label="Enter Your YouTube EMBEDDING Link Here (If you have/wish)" 
            label-placement="floating"  
            :counter="true"  
            :maxlength="30" 
            :counter-formatter="customFormatter">
          </IonTextarea>
          <IonTextarea 
            class="Summaries" 
            label="Summarize Your Pitching/Presentation Here" 
            label-placement="floating"  
            :counter="true" 
            :auto-grow="true" 
            :maxlength="500" 
            :counter-formatter="customFormatter">
          </IonTextarea>
          <IonTextarea 
            class="Summaries" 
            label="Summarize What You Are Looking For/Need" 
            label-placement="floating"  
            :counter="true" 
            :auto-grow="true" 
            :maxlength="500" 
            :counter-formatter="customFormatter">
          </IonTextarea> 
        </IonRow>
      </IonRow>
    </IonCol>
  </IonGrid>
</template>



<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonSelect, IonSelectOption, IonTextarea, IonGrid, IonRow, IonCol, IonItem, IonLabel } from '@ionic/vue';

export default defineComponent({
  name: 'FormPitchingWorkshopPresentationComponent',
  components: {
    IonSelect,
    IonSelectOption,
    IonTextarea,
    IonGrid,
    IonRow,
    IonCol,
    IonItem,
    IonLabel,
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

    return {
      selectedCategory,
      onFileSelected,
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

ion-textarea {
  border-radius: 7px;
  border: 1px gray solid;
  margin-bottom: 10px;
}

.CenterPositions {
  text-align: center;
  justify-content: center;
  align-content: center;
  align-items: center;
  font-weight: bold;
}

.Summaries {
  width: 100%; /* Ensures text does not exit the mobile frame */
  gap: 5px;
  white-space: normal; /* Allows text to wrap */
}

input[type="file"] {
  width: 100%;
}
</style>

