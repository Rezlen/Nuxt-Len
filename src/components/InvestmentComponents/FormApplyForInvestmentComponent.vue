<template>
  <IonGrid class="Grid">

    <IonRow>

        <IonRow >
          <IonRow class="SectionTitle">
            <IonTitle>Apply For Investment</IonTitle>
          </IonRow>
          <p>
            The more information you provide the more likely you receive investment. We send your application to our investment brokers & will find you an interested investor so you can have your conversation and receive the investment hopefully. To receive an investment, fill below form as much as possible. Where you do not have a required information; either fill a same info or put 0 or N/A. 
            There is no cost or fee for assessing you application or for finding an investment for you. There will be just an average 6% Success Fee & that is ONLY IF you receive the investment. Again if you do not receive the investment there is no fee, cost or charge for you. The actual amount of Success Fee is what you agree with the broker which will contact you. Success Fee is the percentage which the Broker will take from your investment which you will receive from an investor. If still anything is unclear, feel free to Contact Us.
          </p>
        </IonRow>


      <IonRow class="PersonalSection">
        <IonRow class="SectionTitle">
          <IonTitle>Enter Personal Details</IonTitle>
        </IonRow>

        <IonCol>

          <IonCol>
            <IonInput type="text" label="Your First Name" label-placement="floating"  :counter="true"  :maxlength="40" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
          </IonCol>
          <IonCol>
            <IonInput type="text" label="Your Last Name" label-placement="floating"  :counter="true"  :maxlength="40" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
          </IonCol>
          <IonCol>
            <IonInput type="email" label="E-Mail" label-placement="floating"  :counter="true"  :maxlength="40" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
          </IonCol>
          
          <IonCol>
            <IonSelect v-model="selectedCategory" placeholder="Gender" fill="outline" >
              <IonSelectOption value="category1">Male</IonSelectOption>
              <IonSelectOption value="category2">Female</IonSelectOption>
            </IonSelect>
          </IonCol>
          <IonCol>
            <IonSelect class="Age" v-model="selectedCategory" placeholder="Age" fill="outline" >
              <IonSelectOption value="category1">Category 1</IonSelectOption>
              <IonSelectOption value="category2">Category 2</IonSelectOption>
              <IonSelectOption value="category3">Category 3</IonSelectOption>
            </IonSelect>
            <IonCol>
            <IonInput type="number" label="Your Salary" label-placement="floating"  :counter="true"  :maxlength="40" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
          </IonCol>
          </IonCol>
          
        </IonCol>

        <IonCol>
          <IonCol>
            <IonSelect v-model="selectedCategory" placeholder="Residential Statue" fill="outline" >
              <IonSelectOption value="category1">Private Renting</IonSelectOption>
              <IonSelectOption value="category2">GOV Support Renting</IonSelectOption>
              <IonSelectOption value="category3">Owning With Mortgage</IonSelectOption>
              <IonSelectOption value="category3">Fully Owned With No Mortgage/debt</IonSelectOption>
              <IonSelectOption value="category3">Living With Parents/Friends</IonSelectOption>
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
          <IonCol>
            <IonInput type="text" label="Address" label-placement="floating"  :counter="true"  :maxlength="40" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
          </IonCol>
          <IonCol>
            <IonInput  label="Postcode" label-placement="floating"  :counter="true"  :maxlength="40" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
          </IonCol>
          <IonCol>
            <IonInput type="number" label="Personal Mobile Number" label-placement="floating"  :counter="true"  :maxlength="40" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
          </IonCol>
        </IonCol>


        <IonCol>
          <IonCol>
            <IonInput type="url" label="Personal Website Link" label-placement="floating"  :counter="true"  :maxlength="70" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
          </IonCol>
          <IonCol>
            <IonInput type="url" label="Personal Twitter/X Link" label-placement="floating"  :counter="true"  :maxlength="70" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
          </IonCol>
          <IonCol>
            <IonInput type="url" label="Personal Google Link" label-placement="floating"  :counter="true"  :maxlength="70" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
          </IonCol>
          <IonCol>
            <IonInput type="url" label="Personal Facebook Link" label-placement="floating"  :counter="true"  :maxlength="70" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
          </IonCol>
          <IonCol>
            <IonInput type="url" label="Personal LinkedIn Link" label-placement="floating"  :counter="true"  :maxlength="70" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
          </IonCol>
        </IonCol>

      </IonRow>


      <IonRow class="IdeaBusinessSection" > 
        <IonRow class="SectionTitle">
          <IonTitle>Enter Idea or Business Details</IonTitle>
        </IonRow>
        <IonInput type="text" label="Enter Your Idea/Business Name" label-placement="floating"  :counter="true"  :maxlength="100" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
        
        <IonCol>
          <IonCol>
            <IonInput type="number" label="Investment Amount?" label-placement="floating"  :counter="true"  :maxlength="40" :counter-formatter="customFormatter" fill="outline" title="How much investment are you looking for ?"></IonInput> 
          </IonCol>
          <IonCol>
            <IonInput  type="number" label="Equity % Offering in Return of the Investment" label-placement="floating"  :counter="true"  :maxlength="3" :counter-formatter="customFormatter" fill="outline" title="What percentage of the Idea/Business do you actually own?"></IonInput> 
          </IonCol>
          <IonCol>
            <IonInput  type="number" label="Your Current OwnerShip Size % of the Idea/Business" label-placement="floating"  :counter="true"  :maxlength="3" :counter-formatter="customFormatter" fill="outline" title="What percentage of the Idea/Business do you actually own?"></IonInput> 
          </IonCol>
          <IonCol>
            <IonInput type="number" label="Estimated Revenue Return in 3 Years?" label-placement="floating"  :counter="true"  :maxlength="40" :counter-formatter="customFormatter" fill="outline" title="How much do you think will be the revenue of your idea/business by the end of year 3, after receiving the investment ?"></IonInput> 
          </IonCol>
          <IonCol>
            <IonInput type="number" label="Net Profit If Idea/Business Running" label-placement="floating"  :counter="true"  :maxlength="40" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
          </IonCol>
          <IonCol>
            <IonInput type="text" label="Job Position in the Idea/Business" label-placement="floating"  :counter="true"  :maxlength="40" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
          </IonCol>
          <IonCol>
            <IonSelect v-model="selectedCategory" placeholder="Products or Service?" fill="outline" title="Your Idea/Business is a Physical product Or A Service?">
              <IonSelectOption value="categoryProduct">Product</IonSelectOption>
              <IonSelectOption value="categoryService">Service</IonSelectOption>
            </IonSelect>
          </IonCol>
          <IonCol>
            <IonSelect v-model="selectedCategory" placeholder="Business Main Category" fill="outline" >
              <IonSelectOption value="category1">Category 1</IonSelectOption>
              <IonSelectOption value="category2">Category 2</IonSelectOption>
              <IonSelectOption value="category3">Category 3</IonSelectOption>
            </IonSelect>
          </IonCol>
          
          <IonCol>
            <IonSelect v-model="selectedCategory" placeholder="Business Revenue Yearly" fill="outline" >
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
          <IonCol>
            <IonSelect v-model="selectedCategory" placeholder="Idea/Business Established Year" fill="outline" >
              <IonSelectOption value="category1">Category 1</IonSelectOption>
              <IonSelectOption value="category2">Category 2</IonSelectOption>
              <IonSelectOption value="category3">Category 3</IonSelectOption>
            </IonSelect>
          </IonCol>
        </IonCol>

        <IonCol>
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
            <IonInput type="text" label="Idea/Business Address" label-placement="floating"  :counter="true"  :maxlength="40" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
          </IonCol>
          <IonCol>
            <IonInput  label="Idea/Business Postcode" label-placement="floating"  :counter="true"  :maxlength="40" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
          </IonCol>
          <IonCol>
            <IonInput type="number" label="Business Phone/Mobile Number" label-placement="floating"  :counter="true"  :maxlength="40" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
          </IonCol>
          <IonCol>
            <IonInput type="email" label="Business E-Mail" label-placement="floating"  :counter="true"  :maxlength="40" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
          </IonCol>
          <IonRow class="Buttons">
            <IonLabel> Upload Idea/Business Plan</IonLabel>
            <input type="file" @change="onFileSelected" />
          </IonRow>
          <IonRow class="Buttons">
            <IonLabel>Upload the last 3 years of your business trading bank statement</IonLabel>
            <input type="file" @change="onFileSelected" />
          </IonRow>
          <IonRow class="Buttons">
            <IonLabel>Upload last 6 months of your personal bank statement</IonLabel>
            <input type="file" @change="onFileSelected" />
          </IonRow>
          <IonRow class="Buttons">
            <IonLabel>Upload Your Pitch/Presentation Slides</IonLabel>
            <input type="file" @change="onFileSelected" />
          </IonRow>
          <IonRow class="Buttons">
            <IonLabel>Upload Your Face Photo</IonLabel>
            <input type="file" @change="onFileSelected" />
          </IonRow>
          <IonRow class="Buttons">
            <IonLabel>Upload Your Schedule Of Assets</IonLabel>
            <input type="file" @change="onFileSelected" />
          </IonRow>
          <IonRow class="Buttons" title="Upload the STATEMENT OF ASSETS, LIABILITIES, INCOME and EXPENDITURE">
            <IonLabel>Upload SALIE</IonLabel>
            <input type="file" @change="onFileSelected" />
          </IonRow>
          
        </IonCol>

        <IonCol>
          <IonCol>
            <IonInput type="url" label="Business YouTube VideoClip Link" label-placement="floating"  :counter="true"  :maxlength="70" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
          </IonCol>
            <IonCol>
            <IonInput type="url" label="Business YouTube/Channel Link" label-placement="floating"  :counter="true"  :maxlength="70" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
          </IonCol>
          <IonCol>
            <IonInput type="url" label="Business Website Link" label-placement="floating"  :counter="true"  :maxlength="70" :counter-formatter="customFormatter" fill="outline" ></IonInput> 
          </IonCol>
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
            <IonCol>
              <IonTextarea class="Summaries" label="What We Are Looking For" label-placement="floating"  :counter="true" :auto-grow="true" :maxlength="500" :counter-formatter="customFormatter" ></IonTextarea> 
            </IonCol>
        </IonCol>  
        <IonRow class="CheckBoxes">
          <div>
            <ion-checkbox slot="start"></ion-checkbox>
            <label>  I agree to pay 5% Success fee IF and WHEN I receive the investment.</label>
          </div>
        </IonRow>
        <IonRow class="CheckBoxes">
          <div>
            <IonCheckbox slot="start"></IonCheckbox>
            <label> I agree with the TERMS & CONDITIONS and PRIVACY POLICY.</label>
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
  name: 'FormApplyForInvestmentComponent',
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
  align-items: center;
  padding: 10px;
}
.button{
  width: 98%;
  justify-content: center;
  font-weight: bold;
}

</style>
