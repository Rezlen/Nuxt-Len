<template>
  <IonGrid class="Grid">

    <IonRow>
      <IonRow class="BusinessProfileSection" > 
        <IonRow class="SectionTitle">
          <IonTitle>Business  Section</IonTitle>
        </IonRow>
        <IonInput  label="Enter Your Business Name" label-placement="floating"  :counter="true"  :maxlength="100" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
        <IonCol>
          <IonSelect v-model="selectedCategory" placeholder="Business Main Category" fill="outline" >
            <IonSelectOption value="category1">Category 1</IonSelectOption>
            <IonSelectOption value="category2">Category 2</IonSelectOption>
            <IonSelectOption value="category3">Category 3</IonSelectOption>
          </IonSelect>
        </IonCol>
        <IonCol>
          <IonSelect v-model="selectedCategory" placeholder="Business Main Country" fill="outline" >
            <IonSelectOption value="category1">Category 1</IonSelectOption>
            <IonSelectOption value="category2">Category 2</IonSelectOption>
            <IonSelectOption value="category3">Category 3</IonSelectOption>
          </IonSelect>
        </IonCol>
        <IonCol>
          <IonSelect v-model="selectedCategory" placeholder="Business Main City" fill="outline" >
            <IonSelectOption value="category1">Category 1</IonSelectOption>
            <IonSelectOption value="category2">Category 2</IonSelectOption>
            <IonSelectOption value="category3">Category 3</IonSelectOption>
          </IonSelect>
        </IonCol>
        <IonCol>
          <IonSelect class="RevenueSalary" v-model="selectedCategory" placeholder="Your Business Revenue" fill="outline" >
            <IonSelectOption value="category1">Category 1</IonSelectOption>
            <IonSelectOption value="category2">Category 2</IonSelectOption>
            <IonSelectOption value="category3">Category 3</IonSelectOption>
          </IonSelect>
        </IonCol>
        <IonCol>
          <IonSelect v-model="selectedCategory" placeholder="Number Of Employees" fill="outline" >
            <IonSelectOption value="category1">Category 1</IonSelectOption>
            <IonSelectOption value="category2">Category 2</IonSelectOption>
            <IonSelectOption value="category3">Category 3</IonSelectOption>
          </IonSelect>
        </IonCol>
        
        <IonItem>
          <IonLabel>Upload Business Logo</IonLabel>
          <input type="file" @change="onFileSelected" />
        </IonItem>

        <IonCol>
          <IonInput type="url" label="Business Twitter/X Profile Link" label-placement="floating"  :counter="true"  :maxlength="70" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
        </IonCol>
        <IonCol>
          <IonInput type="url" label="Business Google Profile Link" label-placement="floating"  :counter="true"  :maxlength="70" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
        </IonCol>
        <IonCol>
          <IonInput type="url" label="Business Facebook Profile Link" label-placement="floating"  :counter="true"  :maxlength="70" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
        </IonCol>
        <IonCol>
          <IonInput type="url" label="Business LinkedIn Profile Link" label-placement="floating"  :counter="true"  :maxlength="70" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
        </IonCol>
      </IonRow> 



      <IonRow class="PersonalProfileSection">
        <IonRow class="SectionTitle">
          <IonTitle>Personal Section</IonTitle>
        </IonRow>
        <IonCol>
          <IonInput  label="Your First Name" label-placement="floating"  :counter="true"  :maxlength="40" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
        </IonCol>
        <IonCol>
          <IonInput  label="Your Last Name" label-placement="floating"  :counter="true"  :maxlength="40" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
        </IonCol>
        <IonCol>
          <IonSelect v-model="selectedCategory" placeholder="Your Job Position" fill="outline" >
            <IonSelectOption value="category1">Category 1</IonSelectOption>
            <IonSelectOption value="category2">Category 2</IonSelectOption>
            <IonSelectOption value="category3">Category 3</IonSelectOption>
          </IonSelect>
        </IonCol>
        <IonCol>
          <IonSelect class="RevenueSalary" v-model="selectedCategory" placeholder="Your Yearly Salary" fill="outline" >
            <IonSelectOption value="category1">Category 1</IonSelectOption>
            <IonSelectOption value="category2">Category 2</IonSelectOption>
            <IonSelectOption value="category3">Category 3</IonSelectOption>
          </IonSelect>
        </IonCol>
        <IonCol>
          <IonSelect v-model="selectedCategory" placeholder="Your Age" fill="outline" >
            <IonSelectOption value="category1">Category 1</IonSelectOption>
            <IonSelectOption value="category2">Category 2</IonSelectOption>
            <IonSelectOption value="category3">Category 3</IonSelectOption>
          </IonSelect>
        </IonCol>
        <IonCol>
          <IonSelect v-model="selectedCategory" placeholder="Your Country" fill="outline" >
            <IonSelectOption value="category1">Category 1</IonSelectOption>
            <IonSelectOption value="category2">Category 2</IonSelectOption>
            <IonSelectOption value="category3">Category 3</IonSelectOption>
          </IonSelect>
        </IonCol>
        <IonCol>
          <IonSelect v-model="selectedCategory" placeholder="Your City" fill="outline" >
            <IonSelectOption value="category1">Category 1</IonSelectOption>
            <IonSelectOption value="category2">Category 2</IonSelectOption>
            <IonSelectOption value="category3">Category 3</IonSelectOption>
          </IonSelect>
        </IonCol>

        <IonItem> 
          <IonLabel>Upload Face Photo</IonLabel>
          <input type="file" @change="onFileSelected" />
        </IonItem>

        <IonCol>
          <IonInput type="url" label="Personal LinkedIn Profile Link" label-placement="floating"  :counter="true"  :maxlength="70" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
        </IonCol>
        <IonCol>
          <IonInput type="url" label="Personal Google Profile Link" label-placement="floating"  :counter="true"  :maxlength="70" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
        </IonCol>
        <IonCol>
          <IonInput type="url" label="Personal Facebook Profile Link" label-placement="floating"  :counter="true"  :maxlength="70" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
        </IonCol>
        <IonCol>
          <IonInput type="url" label="Personal Twitter/X Profile Link" label-placement="floating"  :counter="true"  :maxlength="70" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
        </IonCol>

        <IonRow class="Summeries" >
          <IonCol>
            <IonTextarea class="Summeries" label="Who We Are, What We do" label-placement="floating"  :counter="true"  :maxlength="30" :counter-formatter="customFormatter" ></IonTextarea>
          </IonCol>
          <IonCol>
            <IonTextarea class="Summeries" label="What We Provide" label-placement="floating"  :counter="true" :auto-grow="true" :maxlength="500" :counter-formatter="customFormatter" ></IonTextarea>
          </IonCol>
          <IonCol>
            <IonTextarea class="Summeries" label="What We Are Looking For" label-placement="floating"  :counter="true" :auto-grow="true" :maxlength="500" :counter-formatter="customFormatter" ></IonTextarea> 
          </IonCol>
        </IonRow>
      </IonRow>


    </IonRow>
  </IonGrid>

</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonContent, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonSelect, IonSelectOption, IonButton, IonTextarea, IonRadio, IonRadioGroup, IonList, IonInput, } from '@ionic/vue';

export default defineComponent({
  name: 'FormProfilePublicSectionComponent',
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
    IonInput,
  
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
  margin-top: 20px;
}

ion-textarea{
  border-radius: 7px;
  border:1px gray solid;
  margin-bottom: 10px;
}

input[type="file"] {
  width: 100%;
}
.RevenueSalary {
box-shadow: 0 4px 8px rgba(34, 139, 34, 0.8);
 /* X-offset, Y-offset, blur radius, and color */
}

.Summeries {
  width: 100%;
  gap: 5px;
}

.PersonalProfileSection,
.BusinessProfileSection {
  margin: 10px 0;
  padding: 20px 0;
  border: 3px solid gray;
  box-shadow: 0 4px 8px rgba(75, 16, 214, 1.2); /* X-offset, Y-offset, blur radius, and color */
  border-radius: 7px;
}
 
.SectionTitle {
  display: flex;
  text-align: center;
  justify-content: center;
  /* align-items: center; */
  /* align-content: center; */
  font-size: 30px;
  font-weight: bold;
  width: 100%;
  padding: 20px;
}

</style>
