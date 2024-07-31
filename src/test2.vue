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







