<template>
  <IonGrid>
    <p class="TitleP">List of all my Accountants/Accounting Service providers</p>
    <IonRow class="ButtonRow">
      <IonButton @click="resetSorting">RESET</IonButton>
      <IonButton @click="exportTable">EXPORT</IonButton>
      <IonButton @click="printTable">PRINT</IonButton>
      <IonInput class="search" v-model="searchQuery" placeholder="Search..." @input="searchMembers"></IonInput>
      <IonButton class="arrowBackCircle" fill="clear" title="Duplicate" @click="scrollToLeft"> 
        <IonIcon slot="icon-only" size="large" :icon="arrowBackCircle"></IonIcon>
      </IonButton>
    </IonRow>
    
    <IonRow class="NONscrollingRow">

      <IonRow class="scrollingRow" ref="scrollableContainer">
        <!-- TitleRow with sorting functionality and icons -->
        <IonRow class="TitleRow">
          <IonCol class="MemberIDCol" @click="sortMembers('id')">Member ID <IonIcon :icon="sortIcon('id')" class="sort-icon" /></IonCol>
          <IonCol class="accountantPicCol" @click="sortMembers('accountantPic')">Accountant Pic <IonIcon :icon="sortIcon('accountantPic')" class="sort-icon" /></IonCol>
          <IonCol class="accountantFirstNameCol" @click="sortMembers('accountantFirstName')">Accountant First Name <IonIcon :icon="sortIcon('accountantFirstName')" class="sort-icon" /></IonCol>
          <IonCol class="accountantLastNameCol" @click="sortMembers('accountantLastName')">Accountant Last Name <IonIcon :icon="sortIcon('accountantLastName')" class="sort-icon" /></IonCol>
          <IonCol class="accountantMembershipTypeCol" @click="sortMembers('accountantMembershipType')">Accountant Membership Type <IonIcon :icon="sortIcon('accountantMembershipType')" class="sort-icon" /></IonCol>
          <IonCol class="accountantAllSpentCol" @click="sortMembers('accountantAllSpent')">Accountant Total Spent<IonIcon :icon="sortIcon('accountantAllSpent')" class="sort-icon" /></IonCol>

          <!-- Office Space Section -->
          <IonCol class="sessionTitleCol topBorder" @click="sortMembers('sessionTitle')"> Session Title <IonIcon :icon="sortIcon('sessionTitle')" class="sort-icon" /></IonCol>
          <IonCol class="sessionDateTimeCol topBorder" @click="sortMembers('sessionDateTime')"> Session Date Time <IonIcon :icon="sortIcon('sessionDateTime')" class="sort-icon" /></IonCol>
          <IonCol class="sessionDescriptionCol topBorder" @click="sortMembers('sessionDescription')">Session Description<IonIcon :icon="sortIcon('sessionDescription')" class="sort-icon" /></IonCol>
          <IonCol class="CostCol topBorder" @click="sortMembers('cost')"> cost <IonIcon :icon="sortIcon('cost')" class="sort-icon" /></IonCol>
          <IonCol class="ExpiringDateCol topBorder" @click="sortMembers('expiringDate')"> Expiring Date<IonIcon :icon="sortIcon('expiringDate')" class="sort-icon" /></IonCol>
          <IonCol class="TimeLeftTillExpiryCol topBorder" @click="sortMembers('timeLeftTillExpiry')">Time Left Till Expiry <IonIcon :icon="sortIcon('timeLeftTillExpiry')" class="sort-icon" /></IonCol>
          <IonCol class="BookingDateCol topBorder" @click="sortMembers('bookingDate')"> BookingDate <IonIcon :icon="sortIcon('bookingDate')" class="sort-icon" /></IonCol>

          <IonCol class="businessCategoryCol topBorder" @click="sortMembers('businessCategory')">Business Category <IonIcon :icon="sortIcon('businessCategory')" class="sort-icon" /></IonCol>
          <IonCol class="companyHouseRegNumberCol topBorder" @click="sortMembers('companyHouseRegNumber')">company House RegNumber<IonIcon :icon="sortIcon('companyHouseRegNumber')" class="sort-icon" /></IonCol>
          <IonCol class="bizWebsiteLinkCol topBorder" @click="sortMembers('bizWebsiteLink')">Business Website Link<IonIcon :icon="sortIcon('bizWebsiteLink')" class="sort-icon" /></IonCol>
          <IonCol class="positionInBusinessCol topBorder" @click="sortMembers('positionInBusiness')">Position InBusiness <IonIcon :icon="sortIcon('positionInBusiness')" class="sort-icon" /></IonCol>
          <IonCol class="BizAgeCol topBorder" @click="sortMembers('BizAge')">Business Age <IonIcon :icon="sortIcon('BizAge')" class="sort-icon" /></IonCol>
          <IonCol class="numberOfEmployeesCol topBorder" @click="sortMembers('numberOfEmployees')">Number Of Employees <IonIcon :icon="sortIcon('numberOfEmployees')" class="sort-icon" /></IonCol>
          <IonCol class="fullOfficeServiceNeededCol topBorder" @click="sortMembers('fullOfficeServiceNeeded')">Full Office Service Needed <IonIcon :icon="sortIcon('fullOfficeServiceNeeded')" class="sort-icon" /></IonCol>
          <!-- Office Space Section -->

          <IonCol class="AgeCol" @click="sortMembers('age')">Age <IonIcon :icon="sortIcon('age')" class="sort-icon" /></IonCol>
          <IonCol class="GenderCol" @click="sortMembers('gender')">Gender <IonIcon :icon="sortIcon('gender')" class="sort-icon" /></IonCol>
          <IonCol class="BusinessNameCol" @click="sortMembers('businessName')">Business Name <IonIcon :icon="sortIcon('businessName')" class="sort-icon" /></IonCol>
          <IonCol class="BusinessRevenueCol" @click="sortMembers('businessRevenue')">Business Revenue <IonIcon :icon="sortIcon('businessRevenue')" class="sort-icon" /></IonCol>
          <IonCol class="JobPositionCol" @click="sortMembers('jobPosition')">Job Position<IonIcon :icon="sortIcon('jobPosition')" class="sort-icon" /></IonCol>
          <IonCol class="SalaryCol" @click="sortMembers('salary')">Salary<IonIcon :icon="sortIcon('salary')" class="sort-icon" /></IonCol>
          <IonCol class="BizCategoryCol" @click="sortMembers('bizCategory')">BizCategory <IonIcon :icon="sortIcon('bizCategory')" class="sort-icon" /></IonCol>
          <IonCol class="ExhibitedCol" @click="sortMembers('exhibited')">Exhibited <IonIcon :icon="sortIcon('exhibited')" class="sort-icon" /></IonCol>
          <IonCol class="EventSpentCol" @click="sortMembers('eventSpent')">Event Spent <IonIcon :icon="sortIcon('eventSpent')" class="sort-icon" /></IonCol>
          <IonCol class="VisitedCol" @click="sortMembers('visited')">Visited <IonIcon :icon="sortIcon('visited')" class="sort-icon" /></IonCol>
          <IonCol class="ListedNeedsCol" @click="sortMembers('listedNeeds')">Listed Needs <IonIcon :icon="sortIcon('listedNeeds')" class="sort-icon" /></IonCol>
          <IonCol class="ListedOffersCol" @click="sortMembers('listedOffers')">Listed Offers <IonIcon :icon="sortIcon('listedOffers')" class="sort-icon" /></IonCol>
          <IonCol class="PeopleSatisfiedNeedsCol" @click="sortMembers('peopleSatisfiedNeeds')">People SatisfiedNeeds <IonIcon :icon="sortIcon('peopleSatisfiedNeeds')" class="sort-icon" /></IonCol>
          <IonCol class="PeopleRequestedOffersCol" @click="sortMembers('peopleRequestedOffers')">People RequestedOffers <IonIcon :icon="sortIcon('peopleRequestedOffers')" class="sort-icon" /></IonCol>
          <IonCol class="InvestorsAdvertsCol" @click="sortMembers('investorsAdverts')">Investors Adverts <IonIcon :icon="sortIcon('investorsAdverts')" class="sort-icon" /></IonCol>
          <IonCol class="PitchingsCol" @click="sortMembers('pitchings')">Pitchings <IonIcon :icon="sortIcon('pitchings')" class="sort-icon" /></IonCol>
          <IonCol class="BizMentorCol" @click="sortMembers('bizMentor')">BizMentor <IonIcon :icon="sortIcon('bizMentor')" class="sort-icon" /></IonCol>
          <IonCol class="BizCountryCol" @click="sortMembers('bizCountry')">BizCountry <IonIcon :icon="sortIcon('bizCountry')" class="sort-icon" /></IonCol>
          <IonCol class="BizCityCol" @click="sortMembers('bizCity')">BizCity <IonIcon :icon="sortIcon('bizCity')" class="sort-icon" /></IonCol>
          <IonCol class="ConnectionsCol" @click="sortMembers('connections')">Connections <IonIcon :icon="sortIcon('connections')" class="sort-icon" /></IonCol>
          <IonCol class="NoEmployeesCol" @click="sortMembers('noEmployees')">No.Employees <IonIcon :icon="sortIcon('noEmployees')" class="sort-icon" /></IonCol>
          <IonCol class="JoinedCol" @click="sortMembers('joined')">Joined <IonIcon :icon="sortIcon('joined')" class="sort-icon" /></IonCol>
          <IonCol class="LastLoggedInCol" @click="sortMembers('lastLoggedIn')">LastLoggedIn <IonIcon :icon="sortIcon('lastLoggedIn')" class="sort-icon" /></IonCol>
          <IonCol class="NoLoggedInCol" @click="sortMembers('noLoggedIn')">No. Of LoggedIn <IonIcon :icon="sortIcon('noLoggedIn')" class="sort-icon" /></IonCol>
          <IonCol class="FullProfileSeenCol" @click="sortMembers('fullProfileSeen')">FullProfile Seen <IonIcon :icon="sortIcon('fullProfileSeen')" class="sort-icon" /></IonCol>

          <IonCol class="ActionCol">Actions</IonCol>
        </IonRow>

        <!-- Data rows -->
        <IonRow v-for="member in paginatedMembers" :key="member.id" class="DataRow" :class="{ selected: selectedRow === member.id }" @click="selectRow(member.id)">
          <IonCol class="MemberIDCol">{{ member.id }}</IonCol>
          <IonCol class="accountantPicCol"><img :src="member.accountantPic" alt="Person Pic" class="person-pic"/></IonCol>
          <IonCol class="accountantFirstNameCol">{{ member.accountantFirstName }}</IonCol>
          <IonCol class="accountantLastNameCol">{{ member.accountantLastName }}</IonCol>
          <IonCol class="accountantMembershipTypeCol">{{ member.accountantMembershipType }}</IonCol>
          <IonCol class="accountantAllSpentCol">{{ member.accountantAllSpent }}</IonCol>

          <!-- Office Space Section -->
          <IonCol class="sessionTitleCol">{{ member.sessionTitle }}</IonCol>
          <IonCol class="sessionDateTimeCol">{{ member.sessionDateTime }}</IonCol>
          <IonCol class="sessionDescriptionCol">{{ member.sessionDescription }}</IonCol>
          <IonCol class="CostCol">{{ member.cost }}</IonCol>
          <IonCol class="ExpiringDateCol">{{ member.expiringDate }}</IonCol>
          <IonCol class="TimeLeftTillExpiryCol">{{ member.timeLeftTillExpiry }}</IonCol>
          <IonCol class="BookingDateCol">{{ member.bookingDate }}</IonCol>

          <IonCol class="businessCategoryCol">{{ member.businessCategory }}</IonCol>
          <IonCol class="companyHouseRegNumberCol">{{ member.companyHouseRegNumber }}</IonCol>
          <IonCol class="bizWebsiteLinkCol">{{ member.bizWebsiteLink }}</IonCol>
          <IonCol class="positionInBusinessCol">{{ member.positionInBusiness }}</IonCol>
          <IonCol class="BizAgeCol">{{ member.BizAge }}</IonCol>
          <IonCol class="numberOfEmployeesCol">{{ member.numberOfEmployees }}</IonCol>
          <IonCol class="fullOfficeServiceNeededCol">{{ member.fullOfficeServiceNeeded }}</IonCol>
          <!-- Office Space Section -->


          <IonCol class="AgeCol">{{ member.age }}</IonCol>
          <IonCol class="GenderCol">{{ member.gender }}</IonCol>
          <IonCol class="BusinessNameCol">{{ member.businessName }}</IonCol>
          <IonCol class="BusinessRevenueCol">{{ member.businessRevenue }}</IonCol>
          <IonCol class="JobPositionCol">{{ member.jobPosition }}</IonCol>
          <IonCol class="SalaryCol">{{ member.salary }}</IonCol>
          <IonCol class="BizCategoryCol">{{ member.bizCategory }}</IonCol>
          <IonCol class="ExhibitedCol">{{ member.exhibited }}</IonCol>
          <IonCol class="EventSpentCol">{{ member.eventSpent }}</IonCol>
          <IonCol class="VisitedCol">{{ member.visited }}</IonCol>
          <IonCol class="ListedNeedsCol">{{ member.listedNeeds }}</IonCol>
          <IonCol class="ListedOffersCol">{{ member.listedOffers }}</IonCol>
          <IonCol class="PeopleSatisfiedNeedsCol">{{ member.peopleSatisfiedNeeds }}</IonCol>
          <IonCol class="PeopleRequestedOffersCol">{{ member.peopleRequestedOffers }}</IonCol>
          <IonCol class="InvestorsAdvertsCol">{{ member.investorsAdverts }}</IonCol>
          <IonCol class="PitchingsCol">{{ member.pitchings }}</IonCol>
          <IonCol class="BizMentorCol">{{ member.bizMentor }}</IonCol>
          <IonCol class="BizCountryCol">{{ member.bizCountry }}</IonCol>
          <IonCol class="BizCityCol">{{ member.bizCity }}</IonCol>
          <IonCol class="ConnectionsCol">{{ member.connections }}</IonCol>
          <IonCol class="NoEmployeesCol">{{ member.noEmployees }}</IonCol>
          <IonCol class="JoinedCol">{{ member.joined }}</IonCol>
          <IonCol class="LastLoggedInCol">{{ member.lastLoggedIn }}</IonCol>
          <IonCol class="NoLoggedInCol">{{ member.noLoggedIn }}</IonCol>
          <IonCol class="FullProfileSeenCol">{{ member.fullProfileSeen }}</IonCol>
          <IonCol class="ActionCol">
            <IonButton class="ActionCol" fill="clear" title="Close">
              <IonButton @click="openModal(member.id)" class="test" fill="clear" title="Edit This Profile"> <IonIcon slot="icon-only" size="small" :icon="create"></IonIcon></IonButton>
              <IonButton class="test" fill="clear" title="Deactivate/Hide This Offer From Public" > <IonIcon slot="icon-only" size="small" :icon="ban"></IonIcon></IonButton>
              <IonButton class="test" fill="clear" title="Delete This Offer After 5 Years, From Data Base" > <IonIcon slot="icon-only" size="small" :icon="trash"></IonIcon></IonButton>
            </IonButton>
          </IonCol>
        </IonRow>

        <!-- Total row -->
        <IonRow class="TotalRow">
          <IonCol class="MemberIDCol">Totals:</IonCol>
          <IonCol class="accountantPicCol"></IonCol>
          <IonCol class="accountantFirstNameCol"></IonCol>
          <IonCol class="accountantLastNameCol"></IonCol>
          <IonCol class="accountantMembershipTypeCol"></IonCol>
          <IonCol class="accountantAllSpentCol">{{ accountantAllSpent }}</IonCol>

          <!-- Office Space Section -->
          <IonCol class="sessionTitleCol"></IonCol>
          <IonCol class="sessionDateTimeCol"></IonCol>
          <IonCol class="sessionDescriptionCol"></IonCol>
          <IonCol class="costCol"></IonCol>
          <IonCol class="expiringDateCol"></IonCol>
          <IonCol class="TimeLeftTillExpiryCol"></IonCol>
          <IonCol class="BookingDateCol"></IonCol>

          <IonCol class="businessCategoryCol"></IonCol>
          <IonCol class="companyHouseRegNumberCol"></IonCol>
          <IonCol class="bizWebsiteLinkCol"></IonCol>
          <IonCol class="positionInBusinessCol"></IonCol>
          <IonCol class="BizAgeCol"></IonCol>
          <IonCol class="numberOfEmployeesCol"></IonCol>
          <IonCol class="fullOfficeServiceNeededCol"></IonCol>
          <!-- Office Space Section -->

          <IonCol class="AgeCol"></IonCol>
          <IonCol class="GenderCol"></IonCol>
          <IonCol class="BusinessNameCol"></IonCol>
          <IonCol class="BusinessRevenueCol">{{ totalBusinessRevenue }}</IonCol>
          <IonCol class="JobPositionCol"></IonCol>
          <IonCol class="SalaryCol">{{ totalSalary }}</IonCol>
          <IonCol class="BizCategoryCol"></IonCol>
          <IonCol class="ExhibitedCol"></IonCol>
          <IonCol class="EventSpentCol">{{ totalEventSpent }}</IonCol>
          <IonCol class="VisitedCol"></IonCol>
          <IonCol class="ListedNeedsCol"></IonCol>
          <IonCol class="ListedOffersCol"></IonCol>
          <IonCol class="PeopleSatisfiedNeedsCol"></IonCol>
          <IonCol class="PeopleRequestedOffersCol"></IonCol>
          <IonCol class="InvestorsAdvertsCol"></IonCol>
          <IonCol class="PitchingsCol"></IonCol>
          <IonCol class="BizMentorCol"></IonCol>
          <IonCol class="BizCountryCol"></IonCol>
          <IonCol class="BizCityCol"></IonCol>
          <IonCol class="ConnectionsCol"></IonCol>
          <IonCol class="NoEmployeesCol">{{ totalEmployees }}</IonCol>
          <IonCol class="JoinedCol"></IonCol>
          <IonCol class="LastLoggedInCol"></IonCol>
          <IonCol class="NoLoggedInCol"></IonCol>
          <IonCol class="FullProfileSeenCol"></IonCol>
          <IonCol class="ActionCol"></IonCol>
        </IonRow>
      </IonRow>

    </IonRow>

    <!-- Pagination -->
    <IonRow class="PaginationRow">
      <IonButton @click="prevPage">Prev</IonButton>
      <div class="PageInfo">{{ currentPage }} / {{ totalPages }}</div>
      <IonButton @click="nextPage">Next</IonButton>
    </IonRow>

    <!-- Modal for displaying component in a popup -->
    <IonModal :is-open="isModalOpen" @didDismiss="closeModal">
      <TicketTABsPitchingUpSellingComponent />
      <IonButton @click="closeModal">Close</IonButton>
    </IonModal>

  </IonGrid>
</template>







<script lang="ts">
  import { defineComponent, ref, computed, watch } from 'vue';
  import { IonIcon, IonGrid, IonRow, IonCol, IonButton, IonInput, IonModal } from '@ionic/vue';
  import { create, trash, ban, arrowDownOutline, arrowUpOutline, arrowBackCircle } from 'ionicons/icons';
  import TicketTABsPitchingUpSellingComponent from '@/components/PitchingComponents/TicketTABsPitchingUpSellingComponent.vue';

  interface Member {
    id: number;
    accountantPic: string;
    accountantFirstName: string;
    accountantLastName: string;
    accountantMembershipType: string;
    accountantAllSpent: number;

    // Office Space Section -->
    sessionTitle: string;
    sessionDateTime: number;
    sessionDescription: number;
    cost: number;
    expiringDate: string;
    timeLeftTillExpiry: string;
    bookingDate: string;

    businessCategory: string; // URL or path to the image
    companyHouseRegNumber: number;
    bizWebsiteLink: number;
    positionInBusiness: number;
    BizAge: number;
    numberOfEmployees: number;
    fullOfficeServiceNeeded: number;
    // Office Space Section -->

    age: number;
    gender: string;
    businessName: string;
    businessRevenue: number;
    jobPosition: string;
    salary: number;
    bizCategory: string;
    exhibited: number;
    eventSpent: number;
    visited: number;
    listedNeeds: number;
    listedOffers: number;
    peopleSatisfiedNeeds: number;
    peopleRequestedOffers: number;
    investorsAdverts: number;
    pitchings: number;
    bizMentor: number;
    bizCountry: string;
    bizCity: string;
    connections: number;
    noEmployees: number;
    joined: string;
    lastLoggedIn: string;
    noLoggedIn: number;
    fullProfileSeen: number;
  }

  export default defineComponent({
    name: 'MyBestOfferAccountingActivityTableComponent',
    components: {IonModal, IonIcon, IonGrid, IonRow, IonCol, IonButton, IonInput, TicketTABsPitchingUpSellingComponent, },
    setup() {
      const members = ref<Member[]>([
        {
          id: 3,
          accountantPic: 'pic_url_a',
          accountantFirstName: 'Johneee',
          accountantLastName: 'Doe',
          accountantMembershipType: 'Gold',
          accountantAllSpent: 150,

          // Office Space Section
          sessionTitle: 'Amazing sponsorship Partnership',
          sessionDateTime: 200,
          sessionDescription: 300,
          cost: 100, // Added cost value
          expiringDate: '2023-01-01T12:00:00',
          timeLeftTillExpiry: 'MonthsDaysHoursMinSeconds',          
          bookingDate: '2023-01-01T12:00:00',

          businessCategory: 'https://example.com/image.jpg',
          companyHouseRegNumber: 100,
          bizWebsiteLink: 100,
          positionInBusiness: 200,
          BizAge: 300,
          numberOfEmployees: 400,
          fullOfficeServiceNeeded: 500,
          // Office Space Section

          age: 30,
          gender: 'Male',
          businessName: 'JohnBusiness',
          businessRevenue: 1000000,
          jobPosition: 'CEO',
          salary: 200000,
          bizCategory: 'IT',
          exhibited: 30,
          eventSpent: 1000,
          visited: 30,
          listedNeeds: 5,
          listedOffers: 3,
          peopleSatisfiedNeeds: 5,
          peopleRequestedOffers: 3,
          investorsAdverts: 2,
          pitchings: 5,
          bizMentor: 30,
          bizCountry: 'USA',
          bizCity: 'New York',
          connections: 100,
          noEmployees: 50,
          joined: '2023-01-01',
          lastLoggedIn: '2023-06-01',
          noLoggedIn: 20,
          fullProfileSeen: 100
        },
        {
          id: 2,
          accountantPic: 'pic_url_a',
          accountantFirstName: 'res',
          accountantLastName: 'Doe',
          accountantMembershipType: 'Gold',
          accountantAllSpent: 150,

          // Office Space Section
          sessionTitle: 'Exclusive sponsorship and Partnership',
          sessionDateTime: 250,
          sessionDescription: 350,
          cost: 120, // Added cost value
          expiringDate: '2023-01-01T12:00:00',
          timeLeftTillExpiry: 'MonthsDaysHoursMinSeconds',
          bookingDate: '2023-01-01T12:00:00',

          businessCategory: 'https://example.com/image1.jpg',
          companyHouseRegNumber: 150,
          bizWebsiteLink: 100,
          positionInBusiness: 250,
          BizAge: 350,
          numberOfEmployees: 450,
          fullOfficeServiceNeeded: 550,
          // Office Space Section

          age: 30,
          gender: 'Male',
          businessName: 'JohnBusiness',
          businessRevenue: 1000000,
          jobPosition: 'CEO',
          salary: 200000,
          bizCategory: 'IT',
          exhibited: 30,
          eventSpent: 1000,
          visited: 30,
          listedNeeds: 5,
          listedOffers: 3,
          peopleSatisfiedNeeds: 5,
          peopleRequestedOffers: 3,
          investorsAdverts: 2,
          pitchings: 5,
          bizMentor: 30,
          bizCountry: 'USA',
          bizCity: 'New York',
          connections: 100,
          noEmployees: 50,
          joined: '2023-01-01',
          lastLoggedIn: '2023-06-01',
          noLoggedIn: 20,
          fullProfileSeen: 100
        },
        {
          id: 1,
          accountantPic: 'pic_url_a',
          accountantFirstName: 'John',
          accountantLastName: 'Doe',
          accountantMembershipType: 'Gold',
          accountantAllSpent: 150,

          // Office Space Section
          sessionTitle: 'Premium sponsorship so Partnership',
          sessionDateTime: 300,
          sessionDescription: 400,
          cost: 150, // Added cost value
          expiringDate: '2023-01-01T12:00:00',
          timeLeftTillExpiry: 'MonthsDaysHoursMinSeconds',
          bookingDate: '2023-01-01T12:00:00',

          businessCategory: 'https://example.com/image2.jpg',
          companyHouseRegNumber: 200,
          bizWebsiteLink: 600,
          positionInBusiness: 300,
          BizAge: 400,
          numberOfEmployees: 500,
          fullOfficeServiceNeeded: 600,
          // Office Space Section

          age: 30,
          gender: 'Male',
          businessName: 'JohnBusiness',
          businessRevenue: 1000000,
          jobPosition: 'CEO',
          salary: 200000,
          bizCategory: 'IT',
          exhibited: 30,
          eventSpent: 1000,
          visited: 30,
          listedNeeds: 5,
          listedOffers: 3,
          peopleSatisfiedNeeds: 5,
          peopleRequestedOffers: 3,
          investorsAdverts: 2,
          pitchings: 5,
          bizMentor: 30,
          bizCountry: 'USA',
          bizCity: 'New York',
          connections: 100,
          noEmployees: 50,
          joined: '2023-01-01',
          lastLoggedIn: '2023-06-01',
          noLoggedIn: 20,
          fullProfileSeen: 100
        },
        // Add more members as necessary
        

      ]);

      const sortKey = ref<keyof Member | null>('bookingDate');

      const sortAsc = ref(true);
      // making the selected row distinguishable

      const selectedRow = ref<number | null>(null);
      // Search Filed

      const searchQuery = ref<string>('');
      const filteredMembers = ref(members.value);

// back button does not wor, fix itk
      const scrollableContainer = ref<HTMLDivElement | null>(null); // Ref for the scrollable container

      const scrollToLeft = () => {
        if (scrollableContainer.value) {
          scrollableContainer.value.scrollLeft = 0;
        }
      };

      // back button does not work


      const sortMembers = (key: keyof Member) => {
        if (sortKey.value === key) {
          sortAsc.value = !sortAsc.value;
        } else {
          sortKey.value = key;
          sortAsc.value = true;
        }
      };


      const sortIcon = (key: keyof Member) => {
        if (sortKey.value === key) {
          return sortAsc.value ? arrowUpOutline : arrowDownOutline;
        }
        return undefined;
      };
      

    //  * Resets the sorting to the original state (default order).
      const resetSorting = () => {
        sortKey.value = 'bookingDate';
        sortAsc.value = true;
      };


    //  * Computes the sorted members based on the current sortKey and sort order.
      const sortedMembers = computed(() => {
        if (!sortKey.value) return filteredMembers.value;

        return [...filteredMembers.value].sort((a, b) => {
          if (a[sortKey.value!] < b[sortKey.value!]) return sortAsc.value ? -1 : 1;
          if (a[sortKey.value!] > b[sortKey.value!]) return sortAsc.value ? 1 : -1;
          return 0;
        });
      });


    // Set default sorting by bookingDate
      resetSorting();

      const itemsPerPage = 20;
      const currentPage = ref(1);

    //  Computes the paginated members for the current page.
      const paginatedMembers = computed(() => {
        const start = (currentPage.value - 1) * itemsPerPage;
        return sortedMembers.value.slice(start, start + itemsPerPage);
      });

    //  * Computes the total number of pages based on the number of members and items per page.
      const totalPages = computed(() => Math.ceil(filteredMembers.value.length / itemsPerPage));

    //  * Computes the total price of all members.
      const accountantAllSpent = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.accountantAllSpent, 0));

      const totalBusinessRevenue = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.businessRevenue, 0));
      const totalSalary = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.salary, 0));
      const totalEventSpent = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.eventSpent, 0));
      const totalEmployees = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.noEmployees, 0));

      const prevPage = () => {
        if (currentPage.value > 1) {
          currentPage.value -= 1;
        }
      };

    //  * Navigates to the next page, if possible.
      const nextPage = () => {
        if (currentPage.value < totalPages.value) {
          currentPage.value += 1;
        }
      };

    //  * Exports the table data to a CSV file.
      const exportTable = () => {
        const csvContent = [
          [
            'Member ID', 'accountantPic', 'accountantFirstName', 'accountantLastName', 'accountantMembershipType', 'accountantAllSpent',
            //  Office Space Section
            'sessionTitle', 'SessionDateTime', 'sessionDescription', 'Cost','ExpiringDate', 'TimeLeftTillExpiry','Booking Date',
            'Business Category', 'companyHouseRegNumber', 'bizWebsiteLink', 'positionInBusiness', 'BizAge', 'numberOfEmployees', 'fullOfficeServiceNeeded',
            //  Office Space Section
            'Age', 'Gender', 'BusinessName', 'BusinessRevenue', 'JobPosition', 'Salary', 'BizCategory', 'Exhibited', 'EventSpent', 'Visited', 'ListedNeeds', 'ListedOffers',
            'PeopleSatisfiedNeeds', 'PeopleRequestedOffers', 'InvestorsAdverts', 'Pitchings', 'BizMentor', 
           'BizCountry', 'BizCity', 'Connections', 'NoEmployees', 'Joined', 'LastLoggedIn', 'NoLoggedIn', 'FullProfileSeen',
            
          ],
          ...filteredMembers.value.map(member => [
            member.id, member.accountantPic, member.accountantFirstName, member.accountantLastName, member.accountantMembershipType,  member.accountantAllSpent, 
            //  Office Space Section
            member.sessionTitle, member.sessionDateTime, member.sessionDescription, member.cost, member.expiringDate, member.timeLeftTillExpiry, member.bookingDate,
            member.businessCategory, member.companyHouseRegNumber, member.bizWebsiteLink, member.positionInBusiness, member.BizAge, member.numberOfEmployees, member.fullOfficeServiceNeeded,
            //  Office Space Section

            member.age, member.gender, member.businessName, member.businessRevenue, member.jobPosition, member.salary, member.bizCategory, member.exhibited, member.eventSpent, 
            member.investorsAdverts, member.pitchings, member.bizMentor, member.bizCountry, member.bizCity,
            member.connections, member.noEmployees, member.joined, member.lastLoggedIn, member.noLoggedIn, member.fullProfileSeen
          ])
        ]
          .map(e => e.join(","))
          .join("\n");

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'LENmembersProfile.csv';
        link.click();
      };

      const printTable = () => {
        const printContent = `
          <html>
            <head>
              <style>
                @page {
                  size: landscape;
                  margin: 1cm;
                }
                table {
                  width: 100%;
                  border-collapse: collapse;
                  table-layout: fixed;
                }
                th, td {
                  border: 1px solid gray;
                  padding: 5px;
                  text-align: left;
                  font-size: 8px;
                }
                th {
                  background-color: #f1f1f1;
                  font-weight: bold;
                }
                .odd-row {
                  background-color: #f5efef;
                }
                .even-row {
                  background-color: #bceea5;
                }
                .even-row .MemberTitleCol {
                  background-color: aquamarine;
                }
                .TotalRow {
                  font-weight: bold;
                }
              </style>
            </head>
            <body>
              <table>
                <thead>
                  <tr>
                    <th>Member ID</th>
                    <th>accountantPic</th>
                    <th>First Name</th>
                    <th>accountantLastName</th>
                    <th>Membership Type</th>
                    <th>Mentor Total Spent</th>

                    <!-- Office Space Section -->
                    <th>Office Space Title</th>
                    <th>Session Date Time</th>
                    <th>Office Space Description</th>
                    <th>Cost</th>
                    <th>Expiring Date</th>
                    <th>Time Left Till Expiry</th>
                    <th>Booking Date</th>

                    <th>Business Category</th>
                    <th>Company House Reg Number</th>
                    <th>Business Website Link</th>
                    <th>Position In Business</th>
                    <th>Business Age</th>
                    <th>Number Of Employees</th>
                    <th>Full Office Service Needed</th>
                    <!-- Office Space Section -->



                    <th>Age</th>
                    <th>Gender</th>
                    <th>Business Name</th>
                    <th>Business Revenue</th>
                    <th>Job Position</th>
                    <th>Salary</th>
                    <th>Biz Category</th>
                    <th>Exhibited</th>
                    <th>Event Spent</th>
                    <th>Visited</th>
                    <th>Listed Needs</th>
                    <th>Listed Offers</th>
                    <th>People Satisfied Needs</th>
                    <th>People Requested Offers</th>
                    <th>Investors Adverts</th>
                    <th>Pitchings</th>
                    <th>Biz Mentor</th>
                    <th>BizMentor Spent</th>
                    <th>Biz Country</th>
                    <th>Biz City</th>
                    <th>Connections</th>
                    <th>No Employees</th>
                    <th>Joined</th>
                    <th>Last Logged In</th>
                    <th>No Logged In</th>
                    <th>Full Profile Seen</th>
                  </tr>
                </thead>
                <tbody>
                  ${paginatedMembers.value.map((member, index) => `
                    <tr class="${index % 2 === 0 ? 'even-row' : 'odd-row'}">
                      <td>${member.id}</td>
                      <td>${member.accountantPic}</td>
                      <td>${member.accountantFirstName}</td>
                      <td>${member.accountantLastName}</td>
                      <td>${member.accountantMembershipType}</td>
                      <td>${member.accountantAllSpent}</td>

                      // Office Space Section
                      <td>${member.sessionTitle}</td>
                      <td>${member.sessionDateTime}</td>
                      <td>${member.sessionDescription}</td>
                      <td>${member.cost}</td>
                      <td>${member.expiringDate}</td>
                      <td>${member.timeLeftTillExpiry}</td>
                      <td>${member.bookingDate}</td>

                      <td>${member.businessCategory}</td>
                      <td>${member.companyHouseRegNumber}</td>
                      <td>${member.bizWebsiteLink}</td>
                      <td>${member.positionInBusiness}</td>
                      <td>${member.BizAge}</td>
                      <td>${member.numberOfEmployees}</td>
                      <td>${member.fullOfficeServiceNeeded}</td>
                      // Office Space Section
                      
                      <td>${member.age}</td>
                      <td>${member.gender}</td>
                      <td>${member.businessName}</td>
                      <td>${member.businessRevenue}</td>
                      <td>${member.jobPosition}</td>
                      <td>${member.salary}</td>
                      <td>${member.bizCategory}</td>
                      <td>${member.exhibited}</td>
                      <td>${member.eventSpent}</td>
                      <td>${member.visited}</td>
                      <td>${member.listedNeeds}</td>
                      <td>${member.listedOffers}</td>
                      <td>${member.peopleSatisfiedNeeds}</td>
                      <td>${member.peopleRequestedOffers}</td>
                      <td>${member.investorsAdverts}</td>
                      <td>${member.pitchings}</td>
                      <td>${member.bizMentor}</td>
                      <td>${member.bizCountry}</td>
                      <td>${member.bizCity}</td>
                      <td>${member.connections}</td>
                      <td>${member.noEmployees}</td>
                      <td>${member.joined}</td>
                      <td>${member.lastLoggedIn}</td>
                      <td>${member.noLoggedIn}</td>
                      <td>${member.fullProfileSeen}</td>
                    </tr>
                  `).join('')}
                  <tr class="TotalRow">
                    <td colspan="5">Totals</td>
                    <td>${accountantAllSpent.value}</td>
                      // Office Space Section
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    


                    <td></td>
                    <td></td>
                    <td></td>
                    <td>${totalBusinessRevenue.value}</td>
                    <td></td>
                    <td>${totalSalary.value}</td>
                    <td></td>
                    <td></td>
                    <td>${totalEventSpent.value}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>${totalEmployees.value}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              <div style="font-size: 8px;">Page ${currentPage.value} of ${totalPages.value}</div>
            </body>
          </html>
        `;
        const printWindow = window.open('', '', 'height=600,width=800');
        if (printWindow) {
          printWindow.document.write(printContent);
          printWindow.document.close();
          printWindow.print();
        }
      };

        // making the selected row distinguishable
      const selectRow = (id: number) => {
        selectedRow.value = id;
      };

        // Search Function
      const searchMembers = () => {
        if (searchQuery.value.trim() === '') {
          filteredMembers.value = members.value;
        } else {
          const query = searchQuery.value.trim().toLowerCase();
          filteredMembers.value = members.value.filter(member => 
            Object.values(member).some(val => 
              val.toString().toLowerCase().includes(query)
            )
          );
        }
      };

      watch(searchQuery, searchMembers);
      
      // Clicking popup function here
      const showMiniEvent = ref<boolean>(false);
      const activeMemberId = ref<number | null>(null);
      const isModalOpen = ref<boolean>(false);
      const openModal = (memberId: number) => {
          activeMemberId.value = memberId;
        isModalOpen.value = true;
      };
      const closeModal = () => {
        isModalOpen.value = false;
      };

      return {
        members,
        sortKey,
        sortAsc,
        sortMembers,
        sortIcon,
        resetSorting,
        selectRow,
        selectedRow,
        searchQuery,
        searchMembers,
        paginatedMembers,
        currentPage,
        totalPages,
        prevPage,
        nextPage,
        exportTable,
        printTable,
        accountantAllSpent,
        totalBusinessRevenue,
        totalSalary,
        totalEventSpent,
        totalEmployees,
        create, trash, ban,
        arrowBackCircle,
        scrollToLeft,
        scrollableContainer,
        showMiniEvent,
        activeMemberId,
        isModalOpen,
        openModal,
        closeModal,
      };
    }
  });
</script>







<style scoped>
  ion-grid {
    width: 100%;
    height: fit-content;
  }
  .TitleP{
    display: center;
    text-align: center;
    font-weight: bold;
  } 
  /* Adjusting the length of the table here: http://localhost:8100/adminpage */
  .search {
    width: 100px;
  }
  .sessionTitleCol {
    Border-left: 2px red solid;
  }
  .fullOfficeServiceNeededCol {
    Border-right: 2px red solid;
  }
  .topBorder {
    border-top: 2px solid red;
  }
  /* .arrowBackCircle {
    position: fixed;
    top: 55;
    left: 90;
    right: 0;
    z-index: 1;
  } */

  .TitleRow {
    font-weight: bold;
    cursor: pointer;
    height: 50px;
    align-items: top;
    text-align: top;
    }
    .NONscrollingRow {
      overflow-x: auto;
      /* border: 4px solid rgb(26, 185, 18); */
    }
    .scrollingRow {
      min-width: 5500px;
      /* border: 1px solid red; */
      flex-direction: column;
    }

  .DataRow {
    cursor: pointer;
  }

  .DataRow.selected {
    border-top: 3px solid red;
    border-bottom: 3px solid red;
  }

  .DataRow:nth-child(odd) ion-col {
    background-color: #f5efef;
  }

  .DataRow:nth-child(even) ion-col {
    background-color: #bceea5;
  }

  .TotalRow {
    font-weight: bold;
  }

  .ButtonRow, .TitleRow, .DataRow, .TotalRow, .PaginationRow {
    border: 1px solid gray;
  }

  .DataRow, .TotalRow {
    white-space: nowrap;
  }

  .TitleRow ion-col {
    overflow: visible; /* Ensure the content is fully visible */
    word-wrap: break-word; /* Break long words */
    white-space: normal; /* Allow text to wrap */
    text-align: center; /* Center align for better presentation */
  }

  .MemberIDCol {
    background-color: red;
  }

  ion-col {
    max-width: 100px; /* Increase the max width for better visibility */
    padding: 0;
    margin: 0;
    white-space: nowrap;
    overflow-x: auto;
    align-content: center;
    height: 30px;
    font-size: 12px;
    border-right: 1px solid lightgray;
  }
  /* popup section */
    ion-modal {
    --width: 90%; /* Adjust width as needed */
    --height: 90%; /* Adjust height as needed */
    --max-width: 90vw; /* Adjust max-width as needed */
    --max-height: 90vh; /* Adjust max-height as needed */
  }
    .ActionCol {
      overflow-x: visible;
    }
    .ActionCol ion-button {
      margin: 0;
      padding: 0;
    }
  .PageInfo {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    margin: 0 10px;
  }

  .sort-icon {
    margin-left: 5px;
  }

  .person-pic {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  @media (max-width: 600px) {

  }
</style>


