<template>

  <IonGrid class="Grid">


    <IonRow class="Tabs2_PitchingPresentationWorkshop-MembersCEOBusinessAdviceProfileDetailAdminComponent">
      <IonSegment v-model="selectedTab" class="TabSegment" color="primary">
        <IonSegmentButton class="btn" value="MembersBusinessAdviceProfileDetailAdminComponent">Business Advices</IonSegmentButton>
        <IonSegmentButton class="btn" value="MembersCEOBusinessAdviceProfileDetailAdminComponent">Business Advice From LEN's CEO</IonSegmentButton>
      </IonSegment>
    </IonRow>
    <IonRow class="DisplayComponentRow">

      
      <!-- Opens the  pitching, workshops or presentations form-->
      <IonCol v-show="selectedTab === 'MembersBusinessAdviceProfileDetailAdminComponent'" class="MembersBusinessAdviceProfileDetailAdminComponent">
        <MembersBusinessAdviceProfileDetailAdminComponent/>
      </IonCol>

      <!-- TAB Opens the MembersCEOBusinessAdviceProfileDetailAdminComponent form ############################################################################################### -->
      <IonCol v-show="selectedTab === 'MembersCEOBusinessAdviceProfileDetailAdminComponent'" class="MembersCEOBusinessAdviceProfileDetailAdminComponent">
        <MembersCEOBusinessAdviceProfileDetailAdminComponent />
      </IonCol>
    </IonRow>


  </IonGrid>

</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonSegment, IonSegmentButton,IonContent, IonGrid, IonRow, IonCol, IonSelect, IonSelectOption, IonButton,} from '@ionic/vue';
import MembersBusinessAdviceProfileDetailAdminComponent from '@/components/AdminComponents/AdminBusinessAdviceComponent/MembersBusinessAdviceProfileDetailAdminComponent.vue';
import MembersCEOBusinessAdviceProfileDetailAdminComponent from '@/components/AdminComponents/AdminBusinessAdviceComponent/MembersCEOBusinessAdviceProfileDetailAdminComponent.vue';

export default defineComponent({
  name: 'BusinessAdviceTABsComponent',
  components: {
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonSelect,
    IonSelectOption,
    IonButton,
    IonSegment,
    IonSegmentButton,
    MembersBusinessAdviceProfileDetailAdminComponent, 
    MembersCEOBusinessAdviceProfileDetailAdminComponent,
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

/* <!-- tabs style --> */
.Tabs2_PitchingPresentationWorkshop-MembersCEOBusinessAdviceProfileDetailAdminComponent {
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

@media (max-width: 600px) {

 }

</style>
