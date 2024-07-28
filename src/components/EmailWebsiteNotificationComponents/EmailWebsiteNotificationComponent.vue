<template>
  <IonGrid>
    <!-- Header text -->
    <p class="Header">Choose what website notification or email you receive from LEN.</p>
    
    <!-- Title Row -->
    <IonRow class="Title">
      <IonCol class="Title-left">Website Notifications</IonCol>
      <IonCol class="Title-right">Email Notifications</IonCol>
    </IonRow>
    
    <!-- Checkbox items for website notifications -->
    <IonRow>
      <IonItem class=" Head">
        <IonCheckbox slot="start" v-model="checkboxStates.checkbox1"></IonCheckbox>
        <div class="label">1- When members send a message to me</div>
        <IonCheckbox slot="end" v-model="checkboxStates.checkbox2"></IonCheckbox>
      </IonItem>

      <IonItem class=" Head">
        <IonCheckbox slot="start" v-model="checkboxStates.checkbox3"></IonCheckbox>
        <div class="label">2- When my connection posts in the Feed page</div>
        <IonCheckbox slot="end" v-model="checkboxStates.checkbox4"></IonCheckbox>
      </IonItem>

      <IonItem class=" Head">
        <IonCheckbox slot="start" v-model="checkboxStates.checkbox5"></IonCheckbox>
        <div class="label">3- When my friends & contacts posts in the Feed page</div>
        <IonCheckbox slot="end" v-model="checkboxStates.checkbox6"></IonCheckbox>
      </IonItem>

      <IonItem class=" Head">
        <IonCheckbox slot="start" v-model="checkboxStates.checkbox7"></IonCheckbox>
        <div class="label">4- When my friends & contacts join the LEN community</div>
        <IonCheckbox slot="end" v-model="checkboxStates.checkbox8"></IonCheckbox>
      </IonItem>

      <IonItem class=" Head">
        <IonCheckbox slot="start" v-model="checkboxStates.checkbox9"></IonCheckbox>
        <div class="label">5- When my connection request is accepted by the LEN members</div>
        <IonCheckbox slot="end" v-model="checkboxStates.checkbox10"></IonCheckbox>
      </IonItem>

      <IonItem class=" Head">
        <IonCheckbox slot="start" v-model="checkboxStates.checkbox11"></IonCheckbox>
        <div class="label">6- When I receive connection request from LEN members</div>
        <IonCheckbox slot="end" v-model="checkboxStates.checkbox12"></IonCheckbox>
      </IonItem>

      <IonItem class=" Head">
        <IonCheckbox slot="start" v-model="checkboxStates.checkbox13"></IonCheckbox>
        <div class="label">7- When my posts in Feed Page commented or liked</div>
        <IonCheckbox slot="end" v-model="checkboxStates.checkbox14"></IonCheckbox>
      </IonItem>
    </IonRow>



    <!-- Section Headers with Toggle Functionality -->
    <IonRow>
      <IonRow>
        <div class="label Head" @click="toggleSection('section1')">
          8- When a '1 Minute Pitcher' registered to pitch for:
        </div>
        
        <!-- Conditional rendering based on section visibility -->
        <IonRow v-if="isSectionVisible('section1')">
          <IonItem>
            <IonCheckbox slot="start" v-model="checkboxStates.checkbox15"></IonCheckbox>
            <div class="label">Business Category List</div>
            <IonCheckbox slot="end" v-model="checkboxStates.checkbox16"></IonCheckbox>
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start" v-model="checkboxStates.checkbox17"></IonCheckbox>
            <div class="label">Country List</div>
            <IonCheckbox slot="end" v-model="checkboxStates.checkbox18"></IonCheckbox>
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start" v-model="checkboxStates.checkbox19"></IonCheckbox>
            <div class="label">City List</div>
            <IonCheckbox slot="end" v-model="checkboxStates.checkbox20"></IonCheckbox>
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start" v-model="checkboxStates.checkbox21"></IonCheckbox>
            <div class="label">Job Title</div>
            <IonCheckbox slot="end" v-model="checkboxStates.checkbox22"></IonCheckbox>
          </IonItem>
        </IonRow>
      </IonRow>


      <IonRow>
        <div class="label Head" @click="toggleSection('section2')">
          9- When a '3 Minute Pitcher' registered to pitch for:
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


      <IonRow>
        <div class="label Head" @click="toggleSection('section3')">
          10- When an 'Investment Pitcher' registered to pitch for:
        </div>
        
        <!-- Conditional rendering based on section visibility -->
        <IonRow v-if="isSectionVisible('section3')">
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
            <div class="label">Equity or Loan</div>
            <IonCheckbox slot="end" v-model="checkboxStates.checkbox30"></IonCheckbox>
          </IonItem>
        </IonRow>
      </IonRow>


      <IonRow>
        <div class="label Head" @click="toggleSection('section4')">
          11- When an 'Investment Seeker' (Investee) registered:
        </div>
        
        <!-- Conditional rendering based on section visibility -->
        <IonRow v-if="isSectionVisible('section4')">
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
            <div class="label">Equity or Loan</div>
            <IonCheckbox slot="end" v-model="checkboxStates.checkbox30"></IonCheckbox>
          </IonItem>
        </IonRow>
      </IonRow>

      <IonRow>
        <div class="label Head" @click="toggleSection('section5')">
          12- When an 'Investor' registered to pitch for:
        </div>
        
        <!-- Conditional rendering based on section visibility -->
        <IonRow v-if="isSectionVisible('section5')">
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
            <div class="label">Equity or Loan</div>
            <IonCheckbox slot="end" v-model="checkboxStates.checkbox30"></IonCheckbox>
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start" v-model="checkboxStates.checkbox29"></IonCheckbox>
            <div class="label">Product,Service,Business Category</div>
            <IonCheckbox slot="end" v-model="checkboxStates.checkbox30"></IonCheckbox>
          </IonItem>
        </IonRow>
      </IonRow>


      <IonRow>
        <div class="label Head" @click="toggleSection('section6')">
          13- When an 'Exhibitors' from below booked an exhibiting ticket:
        </div>
        
        <!-- Conditional rendering based on section visibility -->
        <IonRow v-if="isSectionVisible('section6')">
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
        </IonRow>
      </IonRow>


      <IonRow>
        <div class="label Head" @click="toggleSection('section7')">
          14- When an 'Offer' listed in:
        </div>
        
        <!-- Conditional rendering based on section visibility -->
        <IonRow v-if="isSectionVisible('section7')">
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
            <div class="label">Equity or Loan</div>
            <IonCheckbox slot="end" v-model="checkboxStates.checkbox30"></IonCheckbox>
          </IonItem>
        </IonRow>
      </IonRow>

    
      <IonRow>
        <div class="label Head" @click="toggleSection('section8')">
          15- When a 'Need' is listed in:
        </div>
        
        <!-- Conditional rendering based on section visibility -->
        <IonRow v-if="isSectionVisible('section8')">
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
            <div class="label">Equity or Loan</div>
            <IonCheckbox slot="end" v-model="checkboxStates.checkbox30"></IonCheckbox>
          </IonItem>
        </IonRow>
      </IonRow>


      <IonRow>
        <div class="label Head" @click="toggleSection('section9')">
          16- When a 'Best Offer' listed in:
        </div>
        
        <!-- Conditional rendering based on section visibility -->
        <IonRow v-if="isSectionVisible('section9')">
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
            <div class="label">Equity or Loan</div>
            <IonCheckbox slot="end" v-model="checkboxStates.checkbox30"></IonCheckbox>
          </IonItem>
        </IonRow>
      </IonRow>


      <IonRow>
        <div class="label Head" @click="toggleSection('section10')">
          17- When people/members have joined LEN from:
        </div>
        
        <!-- Conditional rendering based on section visibility -->
        <IonRow v-if="isSectionVisible('section10')">
          <IonItem>
            <IonCheckbox slot="start" v-model="checkboxStates.checkbox23"></IonCheckbox>
            <div class="label">Job Title</div>
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
        </IonRow>
      </IonRow>



      <IonRow>
        <div class="label Head" @click="toggleSection('section11')">
          18- When businesses have joined LEN from:
        </div>
        
        <!-- Conditional rendering based on section visibility -->
        <IonRow v-if="isSectionVisible('section11')">
          <IonItem>
            <IonCheckbox slot="start" v-model="checkboxStates.checkbox23"></IonCheckbox>
            <div class="label">Business Category</div>
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
        </IonRow>
      </IonRow>


      <IonRow>
        <div class="label Head" @click="toggleSection('section12')">
          19- When LEN Sponsors or Partners:
        </div>
        
        <!-- Conditional rendering based on section visibility -->
        <IonRow v-if="isSectionVisible('section12')">
          <IonItem>
            <IonCheckbox slot="start" v-model="checkboxStates.checkbox23"></IonCheckbox>
            <div class="label">Clicked on</div>
            <IonCheckbox slot="end" v-model="checkboxStates.checkbox24"></IonCheckbox>
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start" v-model="checkboxStates.checkbox25"></IonCheckbox>
            <div class="label">New Sponsorship or Partnership posted</div>
            <IonCheckbox slot="end" v-model="checkboxStates.checkbox26"></IonCheckbox>
          </IonItem>
        </IonRow>
      </IonRow>


      <IonRow>
        <div class="label Head" @click="toggleSection('section13')">
          20- When an LEN member has become VIP or VVIP member from:
        </div>
        
        <!-- Conditional rendering based on section visibility -->
        <IonRow v-if="isSectionVisible('section13')">
          <IonItem>
            <IonCheckbox slot="start" v-model="checkboxStates.checkbox23"></IonCheckbox>
            <div class="label">Business Category</div>
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
        </IonRow>
      </IonRow>


    <IonButton class="UpdateBTN" size="large" expand="block" title="SubmitBTN" @click="submitContent">Update</IonButton>


    </IonRow>
  </IonGrid>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonItem, IonCheckbox, IonGrid, IonRow, IonCol, IonButton, } from '@ionic/vue';

export default defineComponent({
  name: 'EmailWebsiteNotificationComponent',
  components: {
    IonItem,
    IonCheckbox,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
  },
  setup() {
    // Create a state object to manage all checkbox states
    const checkboxStates = ref({
      checkbox1: false,
      checkbox2: false,

    });

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

    return {
      checkboxStates,
      toggleSection,
      isSectionVisible,
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

.label {
  text-align: center;
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
</style>
