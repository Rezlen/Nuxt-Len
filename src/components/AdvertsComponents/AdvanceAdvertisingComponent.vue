<template>
  <IonGrid>
    <!-- Header text -->
    <p class="Header">You can choose to show your advert to people or businesses with one or many specification listed below:</p>
      

    <!-- Section Headers with Toggle Functionality -->
    <IonRow>
      
      <IonRow class="Head">
        <div class="label" @click="toggleSection('section1')">
          Show your advert to people who NEED:
        </div>
        
        <!-- Conditional rendering based on section visibility -->
        <IonRow v-if="isSectionVisible('section1')">

          <IonCol class="threeColDivision">
            <IonCol class="advanceCol">
              <IonRow class="advanceRowsBorder">
                <IonCol class="pushColToLeft">
                  <IonSelect v-model="selectedCountry" interface="popover" label="Investment in" placeholder="Country" :multiple="true" >
                    <IonSelectOption value="Week">Week</IonSelectOption>
                    <IonSelectOption value="Month">Month</IonSelectOption>
                    <IonSelectOption value="Every 2 Months">Every 2 Months</IonSelectOption>
                  </IonSelect>
                </IonCol>
                <IonCol class="pushColToLeft">
                  <IonSelect v-model="selectedCity" interface="popover" placeholder="City" :multiple="true" >
                    <IonSelectOption value="Week">Week</IonSelectOption>
                    <IonSelectOption value="Month">Month</IonSelectOption>
                    <IonSelectOption value="Every 2 Months">Every 2 Months</IonSelectOption>
                  </IonSelect>
                </IonCol>
              </IonRow>
            </IonCol>

            <IonCol class="advanceCol">
              <IonRow class="advanceRowsBorder">
                <IonCol class="pushColToLeft">
                  <IonSelect v-model="selectedCountry" interface="popover" label="Marketing in" placeholder="Country" :multiple="true" >
                    <IonSelectOption value="Week">Week</IonSelectOption>
                    <IonSelectOption value="Month">Month</IonSelectOption>
                    <IonSelectOption value="Every 2 Months">Every 2 Months</IonSelectOption>
                  </IonSelect>
                </IonCol>
                <IonCol class="pushColToLeft">
                  <IonSelect v-model="selectedCity" interface="popover" placeholder="City" :multiple="true" >
                    <IonSelectOption value="Week">Week</IonSelectOption>
                    <IonSelectOption value="Month">Month</IonSelectOption>
                    <IonSelectOption value="Every 2 Months">Every 2 Months</IonSelectOption>
                  </IonSelect>
                </IonCol>
              </IonRow>
            </IonCol>

            <IonCol class="advanceCol">
              <IonRow class="advanceRowsBorder">
                <IonCol class="pushColToLeft">
                  <IonSelect v-model="selectedCountry" interface="popover" label="Business Advice in" placeholder="Country" :multiple="true" >
                    <IonSelectOption value="Week">Week</IonSelectOption>
                    <IonSelectOption value="Month">Month</IonSelectOption>
                    <IonSelectOption value="Every 2 Months">Every 2 Months</IonSelectOption>
                  </IonSelect>
                </IonCol>
                <IonCol class="pushColToLeft">
                  <IonSelect v-model="selectedCity" interface="popover" placeholder="City" :multiple="true" >
                    <IonSelectOption value="Week">Week</IonSelectOption>
                    <IonSelectOption value="Month">Month</IonSelectOption>
                    <IonSelectOption value="Every 2 Months">Every 2 Months</IonSelectOption>
                  </IonSelect>
                </IonCol>
              </IonRow>
            </IonCol>
          </IonCol>



          <IonCol class="threeColDivision">
            <IonCol class="advanceCol">
              <IonRow class="advanceRowsBorder">
                <IonCol class="pushColToLeft">
                  <IonSelect v-model="selectedCountry" interface="popover" label="Accounting in" placeholder="Country" :multiple="true" >
                    <IonSelectOption value="Week">Week</IonSelectOption>
                    <IonSelectOption value="Month">Month</IonSelectOption>
                    <IonSelectOption value="Every 2 Months">Every 2 Months</IonSelectOption>
                  </IonSelect>
                </IonCol>
                <IonCol class="pushColToLeft">
                  <IonSelect v-model="selectedCity" interface="popover" placeholder="City" :multiple="true" >
                    <IonSelectOption value="Week">Week</IonSelectOption>
                    <IonSelectOption value="Month">Month</IonSelectOption>
                    <IonSelectOption value="Every 2 Months">Every 2 Months</IonSelectOption>
                  </IonSelect>
                </IonCol>
              </IonRow>
            </IonCol>

            <IonCol class="advanceCol">
              <IonRow class="advanceRowsBorder">
                <IonCol class="pushColToLeft">
                  <IonSelect v-model="selectedCountry" interface="popover" label="Legal Help in" placeholder="Country" :multiple="true" >
                    <IonSelectOption value="Week">Week</IonSelectOption>
                    <IonSelectOption value="Month">Month</IonSelectOption>
                    <IonSelectOption value="Every 2 Months">Every 2 Months</IonSelectOption>
                  </IonSelect>
                </IonCol>
                <IonCol class="pushColToLeft">
                  <IonSelect v-model="selectedCity" interface="popover" placeholder="City" :multiple="true" >
                    <IonSelectOption value="Week">Week</IonSelectOption>
                    <IonSelectOption value="Month">Month</IonSelectOption>
                    <IonSelectOption value="Every 2 Months">Every 2 Months</IonSelectOption>
                  </IonSelect>
                </IonCol>
              </IonRow>
            </IonCol>

            <IonCol class="advanceCol">
              <IonRow class="advanceRowsBorder">
                <IonCol class="pushColToLeft">
                  <IonSelect v-model="selectedCountry" interface="popover" label="Development, Website, App in" placeholder="Country" :multiple="true" >
                    <IonSelectOption value="Week">Week</IonSelectOption>
                    <IonSelectOption value="Month">Month</IonSelectOption>
                    <IonSelectOption value="Every 2 Months">Every 2 Months</IonSelectOption>
                  </IonSelect>
                </IonCol>
                <IonCol class="pushColToLeft">
                  <IonSelect v-model="selectedCity" interface="popover" placeholder="City" :multiple="true" >
                    <IonSelectOption value="Week">Week</IonSelectOption>
                    <IonSelectOption value="Month">Month</IonSelectOption>
                    <IonSelectOption value="Every 2 Months">Every 2 Months</IonSelectOption>
                  </IonSelect>
                </IonCol>
              </IonRow>
            </IonCol>
          </IonCol>


          <IonCol class="threeColDivision">
            <IonCol class="advanceCol">
              <IonRow class="advanceRowsBorder">
                <IonCol class="pushColToLeft">
                  <IonSelect v-model="selectedCountry" interface="popover" label="Office Space in" placeholder="Country" :multiple="true" >
                    <IonSelectOption value="Week">Week</IonSelectOption>
                    <IonSelectOption value="Month">Month</IonSelectOption>
                    <IonSelectOption value="Every 2 Months">Every 2 Months</IonSelectOption>
                  </IonSelect>
                </IonCol>
                <IonCol class="pushColToLeft">
                  <IonSelect v-model="selectedCity" interface="popover" placeholder="City" :multiple="true" >
                    <IonSelectOption value="Week">Week</IonSelectOption>
                    <IonSelectOption value="Month">Month</IonSelectOption>
                    <IonSelectOption value="Every 2 Months">Every 2 Months</IonSelectOption>
                  </IonSelect>
                </IonCol>
              </IonRow>
            </IonCol>

            <IonCol class="advanceCol">
              <IonRow class="advanceRowsBorder">
                <IonCol class="pushColToLeft">
                  <IonSelect v-model="selectedCountry" interface="popover" label="Video Production in" placeholder="Country" :multiple="true" >
                    <IonSelectOption value="Week">Week</IonSelectOption>
                    <IonSelectOption value="Month">Month</IonSelectOption>
                    <IonSelectOption value="Every 2 Months">Every 2 Months</IonSelectOption>
                  </IonSelect>
                </IonCol>
                <IonCol class="pushColToLeft">
                  <IonSelect v-model="selectedCity" interface="popover" placeholder="City" :multiple="true" >
                    <IonSelectOption value="Week">Week</IonSelectOption>
                    <IonSelectOption value="Month">Month</IonSelectOption>
                    <IonSelectOption value="Every 2 Months">Every 2 Months</IonSelectOption>
                  </IonSelect>
                </IonCol>
              </IonRow>
            </IonCol>
          </IonCol>



        </IonRow>


      </IonRow>









      <IonRow class="Head">
        <div class="label" @click="toggleSection('section2')">
          Show your advert to people with General & Financial Activities:
        </div>
        
        <!-- Conditional rendering based on section visibility -->
        <IonRow v-if="isSectionVisible('section2')">
          <IonItem>
            <IonCheckbox slot="start" v-model="checkboxStates.checkbox23"></IonCheckbox>
            <div class="label">Business Category List</div>
            <IonCheckbox slot="end" v-model="checkboxStates.checkbox24"></IonCheckbox>
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start" v-model="checkboxStates.checkbox25"></IonCheckbox>
            <div class="label">Country List</div>
            <IonCheckbox slot="end" v-model="checkboxStates.checkbox26"></IonCheckbox>
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start" v-model="checkboxStates.checkbox27"></IonCheckbox>
            <div class="label">City List</div>
            <IonCheckbox slot="end" v-model="checkboxStates.checkbox28"></IonCheckbox>
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start" v-model="checkboxStates.checkbox29"></IonCheckbox>
            <div class="label">Job Title</div>
            <IonCheckbox slot="end" v-model="checkboxStates.checkbox30"></IonCheckbox>
          </IonItem>
        </IonRow>
      </IonRow>


      <IonRow class="Head">
        <div class="label" @click="toggleSection('section3')">
          Show your advert to people with Personal Specifications:
        </div>
        
        <!-- Conditional rendering based on section visibility -->
        <IonRow v-if="isSectionVisible('section3')">
          <IonItem>
            <IonCheckbox slot="start" v-model="checkboxStates.checkbox31"></IonCheckbox>
            <div class="label">Business Category List</div>
            <IonCheckbox slot="end" v-model="checkboxStates.checkbox32"></IonCheckbox>
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start" v-model="checkboxStates.checkbox33"></IonCheckbox>
            <div class="label">Country List</div>
            <IonCheckbox slot="end" v-model="checkboxStates.checkbox34"></IonCheckbox>
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start" v-model="checkboxStates.checkbox35"></IonCheckbox>
            <div class="label">City List</div>
            <IonCheckbox slot="end" v-model="checkboxStates.checkbox36"></IonCheckbox>
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start" v-model="checkboxStates.checkbox37"></IonCheckbox>
            <div class="label">Equity or Loan</div>
            <IonCheckbox slot="end" v-model="checkboxStates.checkbox38"></IonCheckbox>
          </IonItem>
        </IonRow>
      </IonRow>


      <IonRow class="Head">
        <div class="label" @click="toggleSection('section4')">
          Show your advert to people with Business or Company Specifications:
        </div>
        
        <!-- Conditional rendering based on section visibility -->
        <IonRow v-if="isSectionVisible('section4')">
          <IonItem>
            <IonCheckbox slot="start" v-model="checkboxStates.checkbox39"></IonCheckbox>
            <div class="label">Business Category List</div>
            <IonCheckbox slot="end" v-model="checkboxStates.checkbox40"></IonCheckbox>
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start" v-model="checkboxStates.checkbox41"></IonCheckbox>
            <div class="label">Country List</div>
            <IonCheckbox slot="end" v-model="checkboxStates.checkbox42"></IonCheckbox>
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start" v-model="checkboxStates.checkbox43"></IonCheckbox>
            <div class="label">City List</div>
            <IonCheckbox slot="end" v-model="checkboxStates.checkbox44"></IonCheckbox>
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start" v-model="checkboxStates.checkbox45"></IonCheckbox>
            <div class="label">Equity or Loan</div>
            <IonCheckbox slot="end" v-model="checkboxStates.checkbox46"></IonCheckbox>
          </IonItem>
        </IonRow>
      </IonRow>

      <IonButton class="UpdateBTN" size="large" expand="block" title="SubmitBTN" @click="submitContent">Update</IonButton>


        </IonRow>
  </IonGrid>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonItem, IonCheckbox, IonGrid, IonRow, IonCol, IonButton, IonSelectOption, IonSelect } from '@ionic/vue';

export default defineComponent({
  name: 'AdvanceAdvertisingComponent',
  components: {
    IonItem,
    IonCheckbox,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonSelectOption,
    IonSelect,
  },
  setup() {
    // Create a state object to manage all checkbox states
    const checkboxStates = ref({
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false,
      checkbox5: false,
      checkbox6: false,
      checkbox7: false,
      checkbox8: false,
      checkbox9: false,
      checkbox10: false,
      checkbox11: false,
      checkbox12: false,
      checkbox13: false,
      checkbox14: false,
      checkbox15: false,
      checkbox16: false,
      checkbox17: false,
      checkbox18: false,
      checkbox19: false,
      checkbox20: false,
      checkbox21: false,
      checkbox22: false,
      checkbox23: false,
      checkbox24: false,
      checkbox25: false,
      checkbox26: false,
      checkbox27: false,
      checkbox28: false,
      checkbox29: false,
      checkbox30: false,
      checkbox31: false,
      checkbox32: false,
      checkbox33: false,
      checkbox34: false,
      checkbox35: false,
      checkbox36: false,
      checkbox37: false,
      checkbox38: false,
      checkbox39: false,
      checkbox40: false,
      checkbox41: false,
      checkbox42: false,
      checkbox43: false,
      checkbox44: false,
      checkbox45: false,
      checkbox46: false,
      checkbox47: false,
      checkbox48: false,
      checkbox49: false,
      checkbox50: false,
      checkbox51: false,
      checkbox52: false,
      checkbox53: false,
      checkbox54: false,
      checkbox55: false,
      checkbox56: false,
      checkbox57: false,
      checkbox58: false,
      checkbox59: false,
      checkbox60: false,
      checkbox61: false,
      checkbox62: false,
      checkbox63: false,
      checkbox64: false,
      checkbox65: false,
      checkbox66: false,
      checkbox67: false,
      checkbox68: false,
      checkbox69: false,
      checkbox70: false,
      checkbox71: false,
      checkbox72: false,
      checkbox73: false,
      checkbox74: false,
      checkbox75: false,
      checkbox76: false,
      checkbox77: false,
      checkbox78: false,
      checkbox79: false,
      checkbox80: false,
      checkbox81: false,
      checkbox82: false,
      checkbox83: false,
      checkbox84: false,
      checkbox85: false,
      checkbox86: false,
      checkbox87: false,
      checkbox88: false,
      checkbox89: false,
      checkbox90: false,
      checkbox91: false,
      checkbox92: false,
      checkbox93: false,
      checkbox94: false,
      checkbox95: false,
      checkbox96: false,
      checkbox97: false,
      checkbox98: false,
      checkbox99: false,
      checkbox100: false,
      checkbox101: false,
      checkbox102: false,
      checkbox103: false,
      checkbox104: false,
      checkbox105: false,
      checkbox106: false,
      checkbox107: false,
      checkbox108: false,

    });

    const selectedCountry = ref<string | null>(null);
    const selectedCity = ref<string | null>(null);


    // State to manage visibility of sections
    const sectionVisibility = ref<{ [key: string]: boolean }>({
      section1: false,
      section2: false,
    });

    // Method to toggle section visibility
    const toggleSection = (section: string) => {
      sectionVisibility.value[section] = !sectionVisibility.value[section];
    };

    // Method to check if a section is visible
    const isSectionVisible = (section: string) => {
      return sectionVisibility.value[section];
    };
    const submitContent = () => {
      // Your code to handle the button click
      console.log('Submit button clicked');
    };
    return {
      checkboxStates,
      toggleSection,
      isSectionVisible,
      submitContent,
      selectedCountry,
      selectedCity,
    };
  },
});
</script>


<style scoped>
  .Header {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 20px;
    font-size: 20px;
  }

  ion-item {
    width: 100%;
  }

  ion-row {
    width: 100%;
  }


  .Head {
    font-weight: bold;
    cursor: pointer; /* Show cursor pointer on hover */
    padding: 10px 0;
    border: 1px lightgray solid;
    border-radius: 10px;
  }
    .Head ion-col {
      margin-top: 0;
      margin-bottom: 0;
      padding-top: 0;
      padding-bottom: 0;
    }

  .label {
    /* text-align: center; */
    flex: 1;
  }

  .Title {
    display: flex;
    justify-content: space-between; /* Distributes space evenly */
    width: 100%;
  }

  .Title-left, .Title-right {
    text-align: center;
  }

  .Title-left {
    text-align: left; /* Align text to the left */
    font-weight: bold;
  }

  .Title-right {
    text-align: right; /* Align text to the right */
    font-weight: bold;
  }
  .UpdateBTN {
    width: 100%;
  }
  .advanceCol{
    font-size: 12px;
  }
  .advanceRowsBorder {
    border: 1px lightgray solid;
    border-radius: 10px;
  }
  .pushColToLeft {
    /* justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    margin: 0;
    padding: 0; */
    max-width: fit-content;
  }



  @media (max-width: 600px) {
    .advanceCol{
      /* display: flex; */
      /* flex-direction: row; */
      min-width: 100%;
    }
  }
</style>
