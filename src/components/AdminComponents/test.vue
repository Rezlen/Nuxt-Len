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
              <IonSelectOption value="category1">Home Page</IonSelectOption>
              <IonSelectOption value="category2">Exhibiting Tab in EventsShowsPage</IonSelectOption>
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
          <IonCol>
            <IonSelect v-model="selectedCategory" placeholder="Ticket Type" fill="outline">
              <IonSelectOption value="category1">FREE Visitor</IonSelectOption>
              <IonSelectOption value="category2">FREE Business Mentor</IonSelectOption>
              <IonSelectOption value="category3">FREE Investor</IonSelectOption>
              <IonSelectOption value="category4">FREE 1 Minute Pitching</IonSelectOption>
              <IonSelectOption value="category5">3 Min Pitching</IonSelectOption>
              <IonSelectOption value="category6">5 Min Investment Pitching</IonSelectOption>
              <IonSelectOption value="category7">5 Min Presentation</IonSelectOption>
              <IonSelectOption value="category8">30 Min Workshop</IonSelectOption>
              <IonSelectOption value="category9">Exhibition Spot Tickets</IonSelectOption>
            </IonSelect>
          </IonCol>
          <IonCol>
            <IonSelect v-model="selectedCategory" placeholder="Exhibition Spot Color" fill="outline">
              <IonSelectOption value="color1">Blue</IonSelectOption>
              <IonSelectOption value="color2">Yellow</IonSelectOption>
              <IonSelectOption value="color3">Red</IonSelectOption>
            </IonSelect>
          </IonCol>
          <IonCol>
            <IonSelect v-model="selectedCategory" placeholder="Exhibition Spot Shape" fill="outline">
              <IonSelectOption value="shape1">Square</IonSelectOption>
              <IonSelectOption value="shape2">Circle</IonSelectOption>
              <IonSelectOption value="shape3">Rectangle</IonSelectOption>
            </IonSelect>
          </IonCol>
          <IonCol>
            <IonSelect v-model="selectedCategory" placeholder="Display Exhibition Quantity" fill="outline">
              <IonSelectOption value="display1">Yes</IonSelectOption>
              <IonSelectOption value="display2">No</IonSelectOption>
            </IonSelect>
          </IonCol>
          <IonCol>
            <IonSelect v-model="selectedCategory" placeholder="Display Visitors Quantity" fill="outline">
              <IonSelectOption value="display1">Yes</IonSelectOption>
              <IonSelectOption value="display2">No</IonSelectOption>
            </IonSelect>
          </IonCol>
          <IonCol>
            <IonInput :auto-grow="true" type="number" label="Price" label-placement="floating" :counter="true" :maxlength="5" :counter-formatter="customFormatter" fill="outline" :disabled="isFree"></IonInput>
          </IonCol>
          <IonCol>
            <IonInput :auto-grow="true" type="number" label="Ticket Quantity" label-placement="floating" :counter="true" :maxlength="10" :counter-formatter="customFormatter" fill="outline" :disabled="isFree"></IonInput>
          </IonCol>
          <IonCol>
            <IonTextarea :auto-grow="true" type="text" label="Ticket Title" label-placement="floating" :counter="true" :maxlength="100" :counter-formatter="customFormatter" :disabled="isFree"></IonTextarea>
          </IonCol>
          <IonCol>
            <IonTextarea :auto-grow="true" type="text" label="Ticket Description" label-placement="floating" :counter="true" :maxlength="100" :counter-formatter="customFormatter" :disabled="isFree"></IonTextarea>
          </IonCol>
          <IonCol>
            <IonInput :auto-grow="true" type="number" label="Discount Code" label-placement="floating" :counter="true" :maxlength="70" :counter-formatter="customFormatter" fill="outline" :disabled="isFree"></IonInput>
          </IonCol>
          <IonCol>
            <IonInput :auto-grow="true" type="number" label="Discount % of Tickets Price" label-placement="floating" :counter="true" :maxlength="70" :counter-formatter="customFormatter" fill="outline" :disabled="isFree"></IonInput>
          </IonCol>
          <IonCol>
            <IonInput :auto-grow="true" type="number" label="Display Green Notification HOURS Before Event" label-placement="floating" :counter="true" :maxlength="70" :counter-formatter="customFormatter" fill="outline" :disabled="isFree"></IonInput>
          </IonCol>
          <IonCol>
            <IonInput :auto-grow="true" type="number" label="Display Blue Notification HOURS Before Event" label-placement="floating" :counter="true" :maxlength="70" :counter-formatter="customFormatter" fill="outline" :disabled="isFree"></IonInput>
          </IonCol>
          <IonCol>
            <IonButton fill="outline">Submit</IonButton>
            <IonButton :disabled="true" fill="outline">Reset</IonButton>
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

    const isFree = computed(() => {
      return selectedCategory.value?.startsWith('category');
    });

    return {
      selectedCategory,
      onFileSelected,
      customFormatter,
      isFree,
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

.CenterPositions {
  text-align: center;
  justify-content: center;
  font-weight: bold;
}

ion-textarea {
  border-radius: 7px;
  border: 1px green solid;
}
</style>




