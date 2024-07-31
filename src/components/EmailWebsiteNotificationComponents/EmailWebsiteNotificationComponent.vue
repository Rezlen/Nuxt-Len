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


<IonRow>
  <div class="label Head" @click="toggleSection('section4')">
    11- When an 'Investment Seeker' (Investee) registered:
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

<IonRow>
  <div class="label Head" @click="toggleSection('section5')">
    12- When an 'Investor' registered to pitch for:
  </div>
  
  <!-- Conditional rendering based on section visibility -->
  <IonRow v-if="isSectionVisible('section5')">
    <IonItem>
      <IonCheckbox slot="start" v-model="checkboxStates.checkbox47"></IonCheckbox>
      <div class="label">Business Category List</div>
      <IonCheckbox slot="end" v-model="checkboxStates.checkbox48"></IonCheckbox>
    </IonItem>
    <IonItem>
      <IonCheckbox slot="start" v-model="checkboxStates.checkbox49"></IonCheckbox>
      <div class="label">Country List</div>
      <IonCheckbox slot="end" v-model="checkboxStates.checkbox50"></IonCheckbox>
    </IonItem>
    <IonItem>
      <IonCheckbox slot="start" v-model="checkboxStates.checkbox51"></IonCheckbox>
      <div class="label">City List</div>
      <IonCheckbox slot="end" v-model="checkboxStates.checkbox52"></IonCheckbox>
    </IonItem>
    <IonItem>
      <IonCheckbox slot="start" v-model="checkboxStates.checkbox53"></IonCheckbox>
      <div class="label">Equity or Loan</div>
      <IonCheckbox slot="end" v-model="checkboxStates.checkbox54"></IonCheckbox>
    </IonItem>
    <IonItem>
      <IonCheckbox slot="start" v-model="checkboxStates.checkbox55"></IonCheckbox>
      <div class="label">Product, Service, Business Category</div>
      <IonCheckbox slot="end" v-model="checkboxStates.checkbox56"></IonCheckbox>
    </IonItem>
  </IonRow>
</IonRow>


<IonRow>
  <div class="label Head" @click="toggleSection('section6')">
    13- When an 'Exhibitor' from below booked an exhibiting ticket:
  </div>
  
  <!-- Conditional rendering based on section visibility -->
  <IonRow v-if="isSectionVisible('section6')">
    <IonItem>
      <IonCheckbox slot="start" v-model="checkboxStates.checkbox57"></IonCheckbox>
      <div class="label">Business Category List</div>
      <IonCheckbox slot="end" v-model="checkboxStates.checkbox58"></IonCheckbox>
    </IonItem>
    <IonItem>
      <IonCheckbox slot="start" v-model="checkboxStates.checkbox59"></IonCheckbox>
      <div class="label">Country List</div>
      <IonCheckbox slot="end" v-model="checkboxStates.checkbox60"></IonCheckbox>
    </IonItem>
    <IonItem>
      <IonCheckbox slot="start" v-model="checkboxStates.checkbox61"></IonCheckbox>
      <div class="label">City List</div>
      <IonCheckbox slot="end" v-model="checkboxStates.checkbox62"></IonCheckbox>
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
      <IonCheckbox slot="start" v-model="checkboxStates.checkbox63"></IonCheckbox>
      <div class="label">Business Category List</div>
      <IonCheckbox slot="end" v-model="checkboxStates.checkbox64"></IonCheckbox>
    </IonItem>
    <IonItem>
      <IonCheckbox slot="start" v-model="checkboxStates.checkbox65"></IonCheckbox>
      <div class="label">Country List</div>
      <IonCheckbox slot="end" v-model="checkboxStates.checkbox66"></IonCheckbox>
    </IonItem>
    <IonItem>
      <IonCheckbox slot="start" v-model="checkboxStates.checkbox67"></IonCheckbox>
      <div class="label">City List</div>
      <IonCheckbox slot="end" v-model="checkboxStates.checkbox68"></IonCheckbox>
    </IonItem>
    <IonItem>
      <IonCheckbox slot="start" v-model="checkboxStates.checkbox69"></IonCheckbox>
      <div class="label">Equity or Loan</div>
      <IonCheckbox slot="end" v-model="checkboxStates.checkbox70"></IonCheckbox>
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
      <IonCheckbox slot="start" v-model="checkboxStates.checkbox71"></IonCheckbox>
      <div class="label">Business Category List</div>
      <IonCheckbox slot="end" v-model="checkboxStates.checkbox72"></IonCheckbox>
    </IonItem>
    <IonItem>
      <IonCheckbox slot="start" v-model="checkboxStates.checkbox73"></IonCheckbox>
      <div class="label">Country List</div>
      <IonCheckbox slot="end" v-model="checkboxStates.checkbox74"></IonCheckbox>
    </IonItem>
    <IonItem>
      <IonCheckbox slot="start" v-model="checkboxStates.checkbox75"></IonCheckbox>
      <div class="label">City List</div>
      <IonCheckbox slot="end" v-model="checkboxStates.checkbox76"></IonCheckbox>
    </IonItem>
    <IonItem>
      <IonCheckbox slot="start" v-model="checkboxStates.checkbox77"></IonCheckbox>
      <div class="label">Equity or Loan</div>
      <IonCheckbox slot="end" v-model="checkboxStates.checkbox78"></IonCheckbox>
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
      <IonCheckbox slot="start" v-model="checkboxStates.checkbox79"></IonCheckbox>
      <div class="label">Business Category List</div>
      <IonCheckbox slot="end" v-model="checkboxStates.checkbox80"></IonCheckbox>
    </IonItem>
    <IonItem>
      <IonCheckbox slot="start" v-model="checkboxStates.checkbox81"></IonCheckbox>
      <div class="label">Country List</div>
      <IonCheckbox slot="end" v-model="checkboxStates.checkbox82"></IonCheckbox>
    </IonItem>
    <IonItem>
      <IonCheckbox slot="start" v-model="checkboxStates.checkbox83"></IonCheckbox>
      <div class="label">City List</div>
      <IonCheckbox slot="end" v-model="checkboxStates.checkbox84"></IonCheckbox>
    </IonItem>
    <IonItem>
      <IonCheckbox slot="start" v-model="checkboxStates.checkbox85"></IonCheckbox>
      <div class="label">Equity or Loan</div>
      <IonCheckbox slot="end" v-model="checkboxStates.checkbox86"></IonCheckbox>
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
      <IonCheckbox slot="start" v-model="checkboxStates.checkbox87"></IonCheckbox>
      <div class="label">Job Title</div>
      <IonCheckbox slot="end" v-model="checkboxStates.checkbox88"></IonCheckbox>
    </IonItem>
    <IonItem>
      <IonCheckbox slot="start" v-model="checkboxStates.checkbox89"></IonCheckbox>
      <div class="label">Country List</div>
      <IonCheckbox slot="end" v-model="checkboxStates.checkbox90"></IonCheckbox>
    </IonItem>
    <IonItem>
      <IonCheckbox slot="start" v-model="checkboxStates.checkbox91"></IonCheckbox>
      <div class="label">City List</div>
      <IonCheckbox slot="end" v-model="checkboxStates.checkbox92"></IonCheckbox>
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
      <IonCheckbox slot="start" v-model="checkboxStates.checkbox93"></IonCheckbox>
      <div class="label">Business Category</div>
      <IonCheckbox slot="end" v-model="checkboxStates.checkbox94"></IonCheckbox>
    </IonItem>
    <IonItem>
      <IonCheckbox slot="start" v-model="checkboxStates.checkbox95"></IonCheckbox>
      <div class="label">Country List</div>
      <IonCheckbox slot="end" v-model="checkboxStates.checkbox96"></IonCheckbox>
    </IonItem>
    <IonItem>
      <IonCheckbox slot="start" v-model="checkboxStates.checkbox97"></IonCheckbox>
      <div class="label">City List</div>
      <IonCheckbox slot="end" v-model="checkboxStates.checkbox98"></IonCheckbox>
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
      <IonCheckbox slot="start" v-model="checkboxStates.checkbox99"></IonCheckbox>
      <div class="label">Clicked on</div>
      <IonCheckbox slot="end" v-model="checkboxStates.checkbox100"></IonCheckbox>
    </IonItem>
    <IonItem>
      <IonCheckbox slot="start" v-model="checkboxStates.checkbox101"></IonCheckbox>
      <div class="label">New Sponsorship or Partnership posted</div>
      <IonCheckbox slot="end" v-model="checkboxStates.checkbox102"></IonCheckbox>
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
      <IonCheckbox slot="start" v-model="checkboxStates.checkbox103"></IonCheckbox>
      <div class="label">Business Category</div>
      <IonCheckbox slot="end" v-model="checkboxStates.checkbox104"></IonCheckbox>
    </IonItem>
    <IonItem>
      <IonCheckbox slot="start" v-model="checkboxStates.checkbox105"></IonCheckbox>
      <div class="label">Country List</div>
      <IonCheckbox slot="end" v-model="checkboxStates.checkbox106"></IonCheckbox>
    </IonItem>
    <IonItem>
      <IonCheckbox slot="start" v-model="checkboxStates.checkbox107"></IonCheckbox>
      <div class="label">City List</div>
      <IonCheckbox slot="end" v-model="checkboxStates.checkbox108"></IonCheckbox>
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
