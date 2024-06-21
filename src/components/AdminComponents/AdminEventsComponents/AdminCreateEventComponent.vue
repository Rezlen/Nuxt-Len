<template>
  <IonGrid>

    <IonRow>
      <IonCol>
          <!-- Create Floorplan Section -->
        <IonRow class=" BorderedSection">
          <IonCol >
            <IonLabel>Upload Floorplan</IonLabel>
            <input type="file" @change="onFileSelected" />
          </IonCol >
          <IonCol >
            <IonSelect v-model="selectedCategory" placeholder="Display Floorplan on" fill="outline" >
              <IonSelectOption value="category1">Home Page</IonSelectOption>
              <IonSelectOption value="category2">Exhibiting Tab in EventsShowsPage</IonSelectOption>
            </IonSelect>
          </IonCol>
          <IonCol>
            <IonButton  fill="outline">Hide Floorplan</IonButton>
          </IonCol>
        </IonRow>
        <img alt="LEN Logo" src="/public/WeworkMoorgateGroundfloor.jpg" />
      </IonCol>


      <IonCol>

        <IonRow class="BorderedSection">
          
          <IonCol>
            <IonTextarea class="Summeries" label="AddressLocationName" label-placement="floating" :counter="true" :maxlength="100" :counter-formatter="customFormatter"></IonTextarea>
          </IonCol>
          <IonCol>
            <IonTextarea outline="fill" class="Summeries" label="FullAddress" label-placement="floating" :counter="true" :maxlength="100" :counter-formatter="customFormatter"></IonTextarea>
          </IonCol>
          <IonCol><iframe width="150px">GMap</iframe></IonCol>
          <IonCol>
            <iframe width="150" height="150" src="https://www.youtube.com/embed/dNjQ_wZBA28" title="🔥Business Advice London - Advice For Entrepreneurs - Mentoring, Coaching  | London Entrepreneurs 🚀" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </IonCol>
          <IonCol>
            <IonTextarea class="Summeries" label="EventDetails" label-placement="floating" :counter="true" :maxlength="1000" :counter-formatter="customFormatter"></IonTextarea>
          </IonCol>
          <IonCol>
            <IonTextarea :auto-grow="true" label="EventTitle" label-placement="floating" :counter="true" :maxlength="100" :counter-formatter="customFormatter"></IonTextarea> 
          </IonCol>
          
        </IonRow>


        <!-- Create Tickets Section -->
        <IonRow class="BorderedSection">
          <IonCol >
            <IonSelect v-model="selectedCategory" placeholder="Ticket Type" fill="outline" >
              <IonSelectOption value="category1">FREE Visitor</IonSelectOption>
              <IonSelectOption value="category2">FREE Business Mentor</IonSelectOption>
              <IonSelectOption value="category3">FREE Investor</IonSelectOption>
              <IonSelectOption value="category3">FREE 1 Minute Pitching</IonSelectOption>
              <IonSelectOption value="category3">3 Min Pitching</IonSelectOption>
              <IonSelectOption value="category3">5 Min Investment Pitching</IonSelectOption>
              <IonSelectOption value="category3">5 Min Presentation</IonSelectOption>
              <IonSelectOption value="category3">30 Min Workshop</IonSelectOption>
              <IonSelectOption value="category3">Exhibition Spot Tickets</IonSelectOption>

            </IonSelect>
          </IonCol>
          <IonCol >
            <IonSelect v-model="selectedCategory" placeholder="Exhibition Spot Color" fill="outline" >
              <IonSelectOption value="category1">Blue</IonSelectOption>
              <IonSelectOption value="category2">Yellow</IonSelectOption>
              <IonSelectOption value="category3">Red</IonSelectOption>
            </IonSelect>
          </IonCol>
          <IonCol >
            <IonSelect v-model="selectedCategory" placeholder="Exhibition Spot Shape" fill="outline" >
              <IonSelectOption value="category1">Square</IonSelectOption>
              <IonSelectOption value="category2">Circle</IonSelectOption>
              <IonSelectOption value="category3">Rectangle</IonSelectOption>
            </IonSelect>
          </IonCol>
          <IonCol >
            <IonSelect v-model="selectedCategory" placeholder="Display Exhibition Quantity" fill="outline" >
              <IonSelectOption value="category1">Yes</IonSelectOption>
              <IonSelectOption value="category2">No</IonSelectOption>
            </IonSelect>
          </IonCol>
          <IonCol >
            <IonSelect v-model="selectedCategory" placeholder="Display Visitors Quantity " fill="outline" >
              <IonSelectOption value="category1">Yes</IonSelectOption>
              <IonSelectOption value="category2">No</IonSelectOption>
            </IonSelect>
          </IonCol>
          <IonCol>
            <IonInput :auto-grow="true" type="number" label="Price" label-placement="floating"  :counter="true"  :maxlength="5" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
          </IonCol>
          <IonCol>
            <IonInput :auto-grow="true" type="number" label="Ticket Quantity" label-placement="floating"  :counter="true"  :maxlength="10" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
          </IonCol>
          <IonCol>
            <IonTextarea :auto-grow="true" type="text" label="Ticket Title" label-placement="floating" :counter="true" :maxlength="100" :counter-formatter="customFormatter"></IonTextarea> 
          </IonCol>
          <IonCol>
            <IonTextarea :auto-grow="true" type="text" label="Ticket Description" label-placement="floating" :counter="true" :maxlength="100" :counter-formatter="customFormatter"></IonTextarea> 
          </IonCol>
          <IonCol>
            <IonInput :auto-grow="true" type="number" label="Discount Code" label-placement="floating"  :counter="true"  :maxlength="70" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
          </IonCol>
          <IonCol>
            <IonInput :auto-grow="true" type="number" label="Discount % of Tickets Price" label-placement="floating"  :counter="true"  :maxlength="70" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
          </IonCol>
          <IonCol>
            <IonInput :auto-grow="true" type="number" label="Display Green Notification HOURS Before Event" label-placement="floating"  :counter="true"  :maxlength="70" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
          </IonCol>
          <IonCol>
            <IonInput :auto-grow="true" type="number" label="Display Blue Notification HOURS Before Event" label-placement="floating"  :counter="true"  :maxlength="70" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
          </IonCol>
          <IonCol>
            <IonButton  fill="outline">Submit</IonButton>
            <IonButton :disabled="true" fill="outline">Reset</IonButton>
            <!-- :disabled="true" -->
          </IonCol>
        </IonRow> 


        <IonDatetime></IonDatetime>

      </IonCol>
    </IonRow>

  </IonGrid>
</template>



<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonSelectOption, IonInput, IonIcon, IonDatetime, IonContent, IonGrid, IonRow, IonCol, IonButton,IonButtons, IonTextarea, IonCardHeader, IonCardTitle, IonCardSubtitle, IonItem, IonLabel, IonSelect, IonSegment, IonSegmentButton } from '@ionic/vue';
import { create } from 'ionicons/icons';
import AdminEventsListComponent from '@/components/AdminComponents/AdminEventsComponents/AdminEventsListComponent.vue';
import AdminEventsBookingsComponent from '@/components/AdminComponents/AdminEventsComponents/AdminEventsBookingsComponent.vue';

export default defineComponent({
  name: 'AdminCreateEventComponent',
  components: {
    IonIcon,
    IonSelectOption,
    IonInput,
    IonDatetime,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonItem,
    IonLabel,
    IonSelect,
    IonButton,
    IonButtons,
    IonTextarea,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonSegment,
    IonSegmentButton,
    AdminEventsListComponent,
    AdminEventsBookingsComponent,
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
      customFormatter,
      create,
    };
  }
});


</script>



<style scoped>

.BorderedSection {
  border: 4px solid rgb(21, 223, 14);
  border-radius: 5px;
}
ion-grid{
  height: 100%;
  overflow-y: auto;
}

.CenterPositions {
  text-align: center;
  justify-content: center;
  font-weight: bold;
}
ion-textarea{
  border-radius: 7px;
  border:1px green solid;
}


</style>
