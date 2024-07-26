<template>
  <IonGrid class="Grid">
    <p>Choose whether or not to see a website notification or receive email notification</p>
    <IonRow>
      <IonCol>
        <IonSelect v-model="selectedCountry" label="Choose a Country Need" interface="action-sheet" fill="outline" :multiple="true">
          <IonSelectOption value="category1">Category 1</IonSelectOption>
          <IonSelectOption value="category2">Category 2</IonSelectOption>
          <IonSelectOption value="category3">Category 3</IonSelectOption>
        </IonSelect>
      </IonCol>
      <IonCol>
        <IonSelect v-model="selectedCity" placeholder="Choose a City Need" fill="outline">
          <IonSelectOption value="city1">City 1</IonSelectOption>
          <IonSelectOption value="city2">City 2</IonSelectOption>
          <IonSelectOption value="city3">City 3</IonSelectOption>
        </IonSelect>
      </IonCol>
      <IonCol>
        <IonSelect v-model="selectedCategory" placeholder="Choose Category" fill="outline">
          <IonSelectOption value="category1">Category 1</IonSelectOption>
          <IonSelectOption value="category2">Category 2</IonSelectOption>
          <IonSelectOption value="category3">Category 3</IonSelectOption>
        </IonSelect>
      </IonCol>
      <IonCol>
        <IonSelect v-model="selectedDuration" placeholder="Choose Duration" fill="outline">
          <IonSelectOption value="1_week">1 Week</IonSelectOption>
          <IonSelectOption value="2_weeks">2 Weeks</IonSelectOption>
          <IonSelectOption value="3_weeks">3 Weeks</IonSelectOption>
          <IonSelectOption value="4_weeks">4 Weeks</IonSelectOption>
          <IonSelectOption value="2_months">2 Months</IonSelectOption>
          <IonSelectOption value="3_months">3 Months</IonSelectOption>
          <IonSelectOption value="6_months">6 Months</IonSelectOption>
          <IonSelectOption value="1_year">1 Year</IonSelectOption>
        </IonSelect>
      </IonCol>





    </IonRow>

    <IonRow>
      <IonCol>
        <IonButton size="large" expand="block" @click="submitContent">List My Need</IonButton>
      </IonCol>
    </IonRow>
  </IonGrid>
</template>



<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonGrid, IonRow, IonCol, IonSelect, IonSelectOption, IonButton } from '@ionic/vue';

export default defineComponent({
  name: 'WebsiteNotification',
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonSelect,
    IonSelectOption,
    IonButton,
  },
  setup() {
    const selectedCountry = ref<string | null>(null);
    const selectedCity = ref<string | null>(null);
    const selectedCategory = ref<string | null>(null);
    const selectedDuration = ref<string | null>(null);

    const submitContent = () => {
      console.log('Selected Country Need:', selectedCountry.value);
      console.log('Selected City Need:', selectedCity.value);
      console.log('Selected Category:', selectedCategory.value);
      console.log('Selected Duration:', selectedDuration.value);
    };

    return {
      selectedCountry,
      selectedCity,
      selectedCategory,
      selectedDuration,
      submitContent,
    };
  }
});
</script>



<style scoped>
ion-grid {
  overflow-y: auto; /* Enable vertical scrolling */
  height: 100%; /* Full height to fit the parent */
}

p {
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
