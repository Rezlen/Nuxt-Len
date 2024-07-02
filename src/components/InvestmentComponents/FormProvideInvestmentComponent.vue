<template>
  <IonGrid class="Grid">

    <IonRow>

      <IonRow >
        <IonRow class="SectionTitle">
          <IonTitle>Provide Investment</IonTitle>
        </IonRow>


        <p>
          <h4>Opportunities for Investors:</h4>

          We invite you to provide investment opportunities to promising ventures through our platform. By partnering with us, you can connect with potential projects and entrepreneurs that align with your investment goals. Here’s how it works:

          <h1>How It Works for Investors:</h1>
          
          <h4>1- Submit Your Information:</h4>

          <li>Provide detailed information about your investment criteria and preferences.</li>
          <li>This information helps us match you with suitable investment opportunities.</li>
          
          <h4>2- No Upfront Costs:</h4>

          <li>There are no costs or fees for investors.</li>
          <li>There is a Success Fee, typically around 6%, is applied to investees only when they receive an investment.</li>
          
          <h4>3- Connecting with Opportunities:</h4>

          <li>Your information will be shared with our network and introduce you to potential investment opportunities.</li>
          <li>Engage in conversations with entrepreneurs and evaluate their proposals to find the best fit for your investment strategy.</li>
          <br/>
          
          If you have any questions or need further clarification, please feel free to contact us. We are here to support you in finding the right investment opportunities and ensuring a smooth investment process.
        </p>
      </IonRow>




      <IonRow class="IdeaBusinessSection" > 
        <IonRow class="SectionTitle">
          <IonTitle>Enter Idea or Business Details</IonTitle>
        </IonRow>
        <IonInput type="number" label="Total Investment Amount You Want to provide" label-placement="floating"  :counter="true"  :maxlength="8" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
        
        <IonCol>
          <IonCol>
            <IonInput  type="number" label="Length of Investing Years?" label-placement="floating"  :counter="true"  :maxlength="1" :counter-formatter="customFormatter" fill="outline" title="For how many years do you want to invest in an idea/business roughly?"></IonInput> 
          </IonCol>
          <IonCol>
            <IonInput type="number" label="What % ROI Do You Want Roughly? " title="What percentage of return on your investment are you looking for?" label-placement="floating"  :counter="true"  :maxlength="2" :counter-formatter="customFormatter" fill="outline"></IonInput> 
          </IonCol>
          
          <IonCol>
            <IonInput  type="number" label="Required Equity %" label-placement="floating"  :counter="true"  :maxlength="2" :counter-formatter="customFormatter" fill="outline" title="What percentage of equity would you like to receive in return for your investment?"></IonInput> 
          </IonCol>

          <IonCol>
            <IonSelect v-model="selectedCategory" placeholder="Investing in Products or Services?" fill="outline" title="Would you like to invest in a physical product sector OR in a service sector ?">
              <IonSelectOption value="categoryProduct">Products</IonSelectOption>
              <IonSelectOption value="categoryService">Services</IonSelectOption>
            </IonSelect>
          </IonCol>
          <IonCol>
            <IonSelect v-model="selectedCategory" placeholder="Investing in Main Category" title="In which main business category would you like to invest ?" fill="outline" >
              <IonSelectOption value="category1">Category 1</IonSelectOption>
              <IonSelectOption value="category2">Category 2</IonSelectOption>
              <IonSelectOption value="category3">Category 3</IonSelectOption>
            </IonSelect>
          </IonCol>
          
        </IonCol>

        <IonCol>
          <IonCol>
            <IonSelect v-model="selectedCategory" placeholder="Investing in Main Country" fill="outline" >
              <IonSelectOption value="category1">Category 1</IonSelectOption>
              <IonSelectOption value="category2">Category 2</IonSelectOption>
              <IonSelectOption value="category3">Category 3</IonSelectOption>
            </IonSelect>
          </IonCol>
          <IonCol>
            <IonSelect v-model="selectedCategory" placeholder="Investing in Main City" fill="outline" >
              <IonSelectOption value="category1">Category 1</IonSelectOption>
              <IonSelectOption value="category2">Category 2</IonSelectOption>
              <IonSelectOption value="category3">Category 3</IonSelectOption>
            </IonSelect>
          </IonCol>
          <IonCol>
            <IonInput type="number" label="Phone/Mobile Number" label-placement="floating"  :counter="true"  :maxlength="40" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
          </IonCol>
          <IonCol>
            <IonInput type="email" label="E-Mail" label-placement="floating"  :counter="true"  :maxlength="40" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
          </IonCol>

          <IonRow class="Buttons">
            <IonLabel>Upload Your Pitch/Presentation Slides</IonLabel>
            <input type="file" @change="onFileSelected" />
          </IonRow>
          
        </IonCol>

        <IonCol>
          <IonCol>
            <IonInput type="url" label="Website Link" label-placement="floating"  :counter="true"  :maxlength="70" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
          </IonCol>
          <IonCol>
            <IonInput type="url" label="YouTube VideoClip Link" label-placement="floating"  :counter="true"  :maxlength="70" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
          </IonCol>
            <IonCol>
            <IonInput type="url" label="YouTube/Channel Link" label-placement="floating"  :counter="true"  :maxlength="70" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
          </IonCol>
          <IonCol>
            <IonInput type="url" label="Twitter/X Profile Link" label-placement="floating"  :counter="true"  :maxlength="70" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
          </IonCol>
          <IonCol>
            <IonInput type="url" label="Facebook Profile Link" label-placement="floating"  :counter="true"  :maxlength="70" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
          </IonCol>
          <IonCol>
            <IonInput type="url" label="LinkedIn Profile Link" label-placement="floating"  :counter="true"  :maxlength="70" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
          </IonCol>
            <IonCol>
              <IonTextarea class="Summaries" label="What I Am Looking For" label-placement="floating"  :counter="true" :auto-grow="true" :maxlength="500" :counter-formatter="customFormatter" ></IonTextarea> 
            </IonCol>
        </IonCol>  

        <IonRow class="CheckBoxes">
          <div>
            <IonCheckbox slot="start"></IonCheckbox>
            <label> I agree with the <a href="/TermsConditionsPage" class="terms-link">TERMS & CONDITIONS</a> and <a href="/PrivacyPolicypage" class="terms-link">PRIVACY POLICY</a>.</label>
          </div>
        </IonRow>
        <IonRow class="button">
          <ion-button size="large" color="success" expand="block">Submit</ion-button>
        </IonRow>
      </IonRow> 

    </IonRow>
  </IonGrid>

</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonContent, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonSelect, IonSelectOption, IonButton, IonTextarea, IonRadio, IonRadioGroup, IonList, IonInput, IonCheckbox } from '@ionic/vue';

export default defineComponent({
  name: 'FormProvideForInvestmentComponent',
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
    IonCheckbox,
  
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
p{
  margin: 0 10px;
}
.Buttons {
  margin: 10px 0;
  padding: 5px 0;
  border: 1px solid gray;
  border-radius: 7px;
}
input[type="file"] {
  width: 100%;
}
.RevenueSalary {
box-shadow: 0 4px 8px rgba(34, 139, 34, 0.8);
 /* X-offset, Y-offset, blur radius, and color */
}

.Summaries {
  width: 100%;
  gap: 5px;
}

.PersonalSection,
.IdeaBusinessSection {
  width: 100%;
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
.CheckBoxes {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;
}
.button{
  width: 98%;
  justify-content: center;
  font-weight: bold;
}
.terms-link {
  color: blue;
  text-decoration: none;
}
.terms-link:hover {
  text-decoration: underline;
}

</style>
