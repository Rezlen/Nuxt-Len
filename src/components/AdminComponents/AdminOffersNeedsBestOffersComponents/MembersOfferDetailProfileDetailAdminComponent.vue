<template>
  <IonGrid>
    <p class="TitleP">List of all OFFERS and members details </p>
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
          <IonCol class="PersonPicCol" @click="sortMembers('personPic')">PersonPic <IonIcon :icon="sortIcon('personPic')" class="sort-icon" /></IonCol>
          <IonCol class="FirstNameCol" @click="sortMembers('firstName')">FirstName <IonIcon :icon="sortIcon('firstName')" class="sort-icon" /></IonCol>
          <IonCol class="LastNameCol" @click="sortMembers('lastName')">LastName <IonIcon :icon="sortIcon('lastName')" class="sort-icon" /></IonCol>
          <IonCol class="MembershipTypeCol" @click="sortMembers('membershipType')">Membership Type <IonIcon :icon="sortIcon('membershipType')" class="sort-icon" /></IonCol>
          <IonCol class="TotalMembershipSpentCol" @click="sortMembers('totalMembershipSpent')">Total Membership Spent<IonIcon :icon="sortIcon('totalMembershipSpent')" class="sort-icon" /></IonCol>
          <IonCol class="TotalSpentCol" @click="sortMembers('totalSpent')">Total Spent<IonIcon :icon="sortIcon('totalSpent')" class="sort-icon" /></IonCol>

          <!-- Offers Data -->
          <IonCol class="OfferImageCol topBorder" @click="sortMembers('offerImage')">OfferImage <IonIcon :icon="sortIcon('offerImage')" class="sort-icon" /></IonCol>
          <IonCol class="OfferWantedCol topBorder" @click="sortMembers('offerWanted')">OfferWanted<IonIcon :icon="sortIcon('offerWanted')" class="sort-icon" /></IonCol>
          <IonCol class="OfferSeenCol topBorder" @click="sortMembers('offerSeen')">OfferSeen <IonIcon :icon="sortIcon('offerSeen')" class="sort-icon" /></IonCol>
          <IonCol class="OfferListViewCol topBorder" @click="sortMembers('offerListView')">OfferListView <IonIcon :icon="sortIcon('offerListView')" class="sort-icon" /></IonCol>
          <IonCol class="OfferRenewedCol topBorder" @click="sortMembers('offerRenewed')">OfferRenewed <IonIcon :icon="sortIcon('offerRenewed')" class="sort-icon" /></IonCol>
          <IonCol class="LikedCol topBorder" @click="sortMembers('liked')">Liked <IonIcon :icon="sortIcon('liked')" class="sort-icon" /></IonCol>
          <IonCol class="OfferLinkCol topBorder" @click="sortMembers('offerLink')">OfferLink <IonIcon :icon="sortIcon('offerLink')" class="sort-icon" /></IonCol>
          <IonCol class="OfferTitleCol topBorder" @click="sortMembers('offerTitle')">OfferTitle <IonIcon :icon="sortIcon('offerTitle')" class="sort-icon" /></IonCol>
          <IonCol class="OfferCategoryCol topBorder" @click="sortMembers('offerCategory')">OfferCategory <IonIcon :icon="sortIcon('offerCategory')" class="sort-icon" /></IonCol>
          <IonCol class="OfferCountryCol topBorder" @click="sortMembers('offerCountry')">OfferCountry <IonIcon :icon="sortIcon('offerCountry')" class="sort-icon" /></IonCol>
          <IonCol class="OfferCityCol topBorder" @click="sortMembers('offerCity')">OfferCity <IonIcon :icon="sortIcon('offerCity')" class="sort-icon" /></IonCol>
          <IonCol class="OfferDurationCol topBorder" @click="sortMembers('offerDuration')">OfferDuration <IonIcon :icon="sortIcon('offerDuration')" class="sort-icon" /></IonCol>
          <IonCol class="OfferContentCol topBorder" @click="sortMembers('offerContent')">OfferContent <IonIcon :icon="sortIcon('offerContent')" class="sort-icon" /></IonCol>
          <!-- Offers Data -->
          <!-- Offer Provider Section -->
          <IonCol class="offerProviderPicCol topBorder" @click="sortMembers('offerProviderPic')">Offer Provider Pic <IonIcon :icon="sortIcon('offerProviderPic')" class="sort-icon" /></IonCol>
          <IonCol class="offerProviderFirstNameCol topBorder" @click="sortMembers('offerProviderFirstName')">Offer Provider First Name <IonIcon :icon="sortIcon('offerProviderFirstName')" class="sort-icon" /></IonCol>
          <IonCol class="offerProviderBizNameCol topBorder" @click="sortMembers('offerProviderBizName')">Offer Provider Business Name <IonIcon :icon="sortIcon('offerProviderBizName')" class="sort-icon" /></IonCol>
          <IonCol class="offerProviderMembershipTypeCol topBorder" @click="sortMembers('offerProviderMembershipType')">Offer Provider Membership Type  <IonIcon :icon="sortIcon('offerProviderMembershipType')" class="sort-icon" /></IonCol>
          <IonCol class="offerProviderBizRevenueCol topBorder" @click="sortMembers('offerProviderBizRevenue')">Offer Provider Business Revenue<IonIcon :icon="sortIcon('offerProviderBizRevenue')" class="sort-icon" /></IonCol>
          <IonCol class="offerProviderAllSpentCol topBorder" @click="sortMembers('offerProviderAllSpent')">Offer Provider All Spent<IonIcon :icon="sortIcon('offerProviderAllSpent')" class="sort-icon" /></IonCol>
          <!-- Offer Provider Section -->
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
          <IonCol class="AdvertSpentCol" @click="sortMembers('advertSpent')">Advert Spent <IonIcon :icon="sortIcon('advertSpent')" class="sort-icon" /></IonCol>

          <IonCol class="PeopleSatisfiedNeedsCol" @click="sortMembers('peopleSatisfiedNeeds')">People SatisfiedNeeds <IonIcon :icon="sortIcon('peopleSatisfiedNeeds')" class="sort-icon" /></IonCol>
          <IonCol class="PeopleRequestedOffersCol" @click="sortMembers('peopleRequestedOffers')">People RequestedOffers <IonIcon :icon="sortIcon('peopleRequestedOffers')" class="sort-icon" /></IonCol>
          <IonCol class="InvestorsAdvertsCol" @click="sortMembers('investorsAdverts')">Investors Adverts <IonIcon :icon="sortIcon('investorsAdverts')" class="sort-icon" /></IonCol>
          <IonCol class="PitchingsCol" @click="sortMembers('pitchings')">Pitchings <IonIcon :icon="sortIcon('pitchings')" class="sort-icon" /></IonCol>

          <IonCol class="BizMentorCol" @click="sortMembers('bizMentor')">BizMentor <IonIcon :icon="sortIcon('bizMentor')" class="sort-icon" /></IonCol>
          <IonCol class="BizMentorSpentCol" @click="sortMembers('bizMentorSpent')">BizMentor Spent <IonIcon :icon="sortIcon('bizMentorSpent')" class="sort-icon" /></IonCol>
          <IonCol class="MobileNoCol" @click="sortMembers('mobileNo')">MobileNo <IonIcon :icon="sortIcon('mobileNo')" class="sort-icon" /></IonCol>
          <IonCol class="EmailCol" @click="sortMembers('email')">Email <IonIcon :icon="sortIcon('email')" class="sort-icon" /></IonCol>
          <IonCol class="BizCountryCol" @click="sortMembers('bizCountry')">BizCountry <IonIcon :icon="sortIcon('bizCountry')" class="sort-icon" /></IonCol>
          <IonCol class="BizCityCol" @click="sortMembers('bizCity')">BizCity <IonIcon :icon="sortIcon('bizCity')" class="sort-icon" /></IonCol>
          <IonCol class="ConnectionsCol" @click="sortMembers('connections')">Connections <IonIcon :icon="sortIcon('connections')" class="sort-icon" /></IonCol>
          <IonCol class="NoEmployeesCol" @click="sortMembers('noEmployees')">No.Employees <IonIcon :icon="sortIcon('noEmployees')" class="sort-icon" /></IonCol>

          <IonCol class="BookingDateCol" @click="sortMembers('bookingDate')">BookingDate <IonIcon :icon="sortIcon('bookingDate')" class="sort-icon" /></IonCol>

          <IonCol class="JoinedCol" @click="sortMembers('joined')">Joined <IonIcon :icon="sortIcon('joined')" class="sort-icon" /></IonCol>
          <IonCol class="LastLoggedInCol" @click="sortMembers('lastLoggedIn')">LastLoggedIn <IonIcon :icon="sortIcon('lastLoggedIn')" class="sort-icon" /></IonCol>
          <IonCol class="NoLoggedInCol" @click="sortMembers('noLoggedIn')">NoOf LoggedIn <IonIcon :icon="sortIcon('noLoggedIn')" class="sort-icon" /></IonCol>
          <IonCol class="FullProfileSeenCol" @click="sortMembers('fullProfileSeen')">FullProfile Seen <IonIcon :icon="sortIcon('fullProfileSeen')" class="sort-icon" /></IonCol>

          <IonCol class="ActionCol">Actions</IonCol>
        </IonRow>

        <!-- Data rows -->
        <IonRow v-for="member in paginatedMembers" :key="member.id" class="DataRow" :class="{ selected: selectedRow === member.id }" @click="selectRow(member.id)">
          <IonCol class="MemberIDCol">{{ member.id }}</IonCol>
          <IonCol class="PersonPicCol"><img :src="member.personPic" alt="Person Pic" class="person-pic"/></IonCol>
          <IonCol class="FirstNameCol">{{ member.firstName }}</IonCol>
          <IonCol class="LastNameCol">{{ member.lastName }}</IonCol>
          <IonCol class="MembershipTypeCol">{{ member.membershipType }}</IonCol>
          <IonCol class="TotalMembershipSpentCol">{{ member.totalMembershipSpent }}</IonCol>
          <IonCol class="TotalSpentCol">{{ member.totalSpent }}</IonCol>

          <!-- Offers &  Profile Data -->
          <IonCol class="OfferImageCol">{{ member.offerImage }}</IonCol>
          <IonCol class="OfferWantedCol">{{ member.offerWanted }}</IonCol>
          <IonCol class="OfferSeenCol">{{ member.offerSeen }}</IonCol>
          <IonCol class="OfferListViewCol">{{ member.offerListView }}</IonCol>
          <IonCol class="OfferRenewedCol">{{ member.offerRenewed }}</IonCol>
          <IonCol class="LikedCol">{{ member.liked }}</IonCol>
          <IonCol class="OfferLinkCol">{{ member.offerLink }}</IonCol>
          <IonCol class="OfferTitleCol">{{ member.offerTitle }}</IonCol>
          <IonCol class="OfferCategoryCol">{{ member.offerCategory }}</IonCol>
          <IonCol class="OfferCountryCol">{{ member.offerCountry }}</IonCol>
          <IonCol class="OfferCityCol">{{ member.offerCity }}</IonCol>
          <IonCol class="OfferDurationCol">{{ member.offerDuration }}</IonCol>
          <IonCol class="OfferContentCol">{{ member.offerContent }}</IonCol>
          <!-- Offers &  Profile Data -->
          <!-- Offer Provider Section -->
          <IonCol class="offerProviderPicCol"><img :src="member.offerProviderPic" alt="offerProviderPic" class="offerProviderPic"/></IonCol>
          <IonCol class="offerProviderFirstNameCol">{{ member.offerProviderFirstName }}</IonCol>
          <IonCol class="offerProviderBizNameCol">{{ member.offerProviderBizName }}</IonCol>
          <IonCol class="offerProviderMembershipTypeCol">{{ member.offerProviderMembershipType }}</IonCol>
          <IonCol class="offerProviderBizRevenueCol">{{ member.offerProviderBizRevenue }}</IonCol>
          <IonCol class="offerProviderAllSpentCol">{{ member.offerProviderAllSpent }}</IonCol>
          <!-- Offer Provider Section -->

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
          <IonCol class="AdvertSpentCol">{{ member.advertSpent }}</IonCol>

          <IonCol class="PeopleSatisfiedNeedsCol">{{ member.peopleSatisfiedNeeds }}</IonCol>
          <IonCol class="PeopleRequestedOffersCol">{{ member.peopleRequestedOffers }}</IonCol>
          <IonCol class="InvestorsAdvertsCol">{{ member.investorsAdverts }}</IonCol>
          <IonCol class="PitchingsCol">{{ member.pitchings }}</IonCol>

          <IonCol class="BizMentorCol">{{ member.bizMentor }}</IonCol>
          <IonCol class="BizMentorSpentCol">{{ member.bizMentorSpent }}</IonCol>
          <IonCol class="MobileNoCol">{{ member.mobileNo }}</IonCol>
          <IonCol class="EmailCol">{{ member.email }}</IonCol>
          <IonCol class="BizCountryCol">{{ member.bizCountry }}</IonCol>
          <IonCol class="BizCityCol">{{ member.bizCity }}</IonCol>
          <IonCol class="ConnectionsCol">{{ member.connections }}</IonCol>
          <IonCol class="NoEmployeesCol">{{ member.noEmployees }}</IonCol>

          <IonCol class="BookingDateCol">{{ member.bookingDate }}</IonCol>

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
          <IonCol class="PersonPicCol"></IonCol>
          <IonCol class="FirstNameCol"></IonCol>
          <IonCol class="LastNameCol"></IonCol>
          <IonCol class="MembershipTypeCol"></IonCol>
          <IonCol class="TotalMembershipSpentCol">{{ totalMembershipSpent }}</IonCol>
          <IonCol class="TotalSpentCol">{{ totalSpent }}</IonCol>

          <!-- Offers &  Profile Data -->
          <IonCol class="OfferImageCol"></IonCol>
          <IonCol class="OfferWantedCol">{{ totalOfferWanted }}</IonCol>
          <IonCol class="OfferSeenCol">{{ totalOfferSeen }}</IonCol>
          <IonCol class="OfferListViewCol">{{ totalOfferListView }}</IonCol>
          <IonCol class="OfferRenewedCol">{{ totalOfferRenewed }}</IonCol>
          <IonCol class="LikedCol">{{ totalLiked }}</IonCol>
          <IonCol class="OfferLinkCol"></IonCol>
          <IonCol class="OfferTitleCol"></IonCol>
          <IonCol class="OfferCategoryCol"></IonCol>
          <IonCol class="OfferCountryCol"></IonCol>
          <IonCol class="OfferCityCol"></IonCol>
          <IonCol class="OfferDurationCol"></IonCol>
          <IonCol class="OfferContentCol"></IonCol>
          <!-- Offer Provider Section -->
          <IonCol class="offerProviderPicCol"></IonCol>
          <IonCol class="offerProviderFirstNameCol"></IonCol>
          <IonCol class="offerProviderBizNameCol"></IonCol>
          <IonCol class="offerProviderMembershipTypeCol"></IonCol>
          <IonCol class="offerProviderBizRevenueCol">{{ offerProviderBizRevenue }}</IonCol>
          <IonCol class="offerProviderAllSpentCol">{{ offerProviderAllSpent }}</IonCol>
          <!-- Offer Provider Section -->


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
          <IonCol class="AdvertSpentCol">{{ totalAdvertSpent }}</IonCol>

          <IonCol class="PeopleSatisfiedNeedsCol"></IonCol>
          <IonCol class="PeopleRequestedOffersCol"></IonCol>
          <IonCol class="InvestorsAdvertsCol"></IonCol>
          <IonCol class="PitchingsCol"></IonCol>

          <IonCol class="BizMentorCol"></IonCol>
          <IonCol class="BizMentorSpentCol">{{ bizMentorSpent }}</IonCol>
          <IonCol class="MobileNoCol"></IonCol>
          <IonCol class="EmailCol"></IonCol>
          <IonCol class="BizCountryCol"></IonCol>
          <IonCol class="BizCityCol"></IonCol>
          <IonCol class="ConnectionsCol"></IonCol>
          <IonCol class="NoEmployeesCol">{{ totalEmployees }}</IonCol>

          <IonCol class="BookingDateCol"></IonCol>

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
      <PostOfferComponent />
      <IonButton @click="closeModal">Close</IonButton>
    </IonModal>

  </IonGrid>
</template>







<script lang="ts">
  import { defineComponent, ref, computed, watch } from 'vue';
  import { IonIcon, IonGrid, IonRow, IonCol, IonButton, IonInput, IonModal } from '@ionic/vue';
  import { create, trash, ban, arrowDownOutline, arrowUpOutline, arrowBackCircle } from 'ionicons/icons';
  import PostOfferComponent from '@/components/OfferNeedBestOfferComponent/PostOfferComponent.vue';

  interface Member {
    id: number;
    personPic: string;
    firstName: string;
    lastName: string;
    membershipType: string;
    totalMembershipSpent: number;
    totalSpent: number;

    // OfferDetails section
    offerImage: string; // URL or path to the image
    offerWanted: number;
    offerSeen: number;
    offerListView: number;
    offerRenewed: number;
    liked: number;
    offerLink: string;
    offerTitle: string;
    offerCategory: string;
    offerCountry: string;
    offerCity: string;
    offerDuration: string;
    offerContent: string;
    // Offer Provider Section 
    offerProviderPic: string;
    offerProviderFirstName: string;
    offerProviderBizName: string;
    offerProviderMembershipType: string;
    offerProviderBizRevenue: number;
    offerProviderAllSpent: number;
    // Offer Provider Section 

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
    advertSpent: number;
    peopleSatisfiedNeeds: number;
    peopleRequestedOffers: number;
    investorsAdverts: number;
    pitchings: number;
    bizMentor: number;
    bizMentorSpent: number;
    mobileNo: string;
    email: string;
    bizCountry: string;
    bizCity: string;
    connections: number;
    noEmployees: number;
    bookingDate: string;
    joined: string;
    lastLoggedIn: string;
    noLoggedIn: number;
    fullProfileSeen: number;
  }

  export default defineComponent({
    name: 'MembersOfferDetailProfileDetailAdminComponent',
    components: { IonModal, IonIcon, IonGrid, IonRow, IonCol, IonButton, IonInput, PostOfferComponent, },
    setup() {
      const members = ref<Member[]>([
        {
          id: 3,
          personPic: 'pic_url_a',
          firstName: 'Johneee',
          lastName: 'Doe',
          membershipType: 'Gold',
          totalMembershipSpent: 500,
          totalSpent: 450,

          // OfferDetails section
          offerImage: 'https://example.com/image.jpg',
          offerWanted: 100,
          offerSeen: 200,
          offerListView: 300,
          offerRenewed: 400,
          liked: 500,
          offerLink: 'https://example.com/offer',
          offerTitle: 'Amazing Offer',
          offerCategory: 'Real Estate',
          offerCountry: 'USA',
          offerCity: 'New York',
          offerDuration: '1 Year',
          offerContent: 'This is a great offer that you do not want to miss.',
          // Offer Provider Section 
          offerProviderPic: 'pic_url_a',
          offerProviderFirstName: 'Johneee',
          offerProviderBizName: 'Doe',
          offerProviderMembershipType: 'Gold',
          offerProviderBizRevenue: 500,
          offerProviderAllSpent: 150,
          // Offer Provider Section 
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
          advertSpent: 500,
          peopleSatisfiedNeeds: 5,
          peopleRequestedOffers: 3,
          investorsAdverts: 2,
          pitchings: 5,
          bizMentor: 30,
          bizMentorSpent: 150,
          mobileNo: '1234567890',
          email: 'john.doe@example.com',
          bizCountry: 'USA',
          bizCity: 'New York',
          connections: 100,
          noEmployees: 50,
          bookingDate: '2023-01-01',
          joined: '2023-01-01',
          lastLoggedIn: '2023-06-01',
          noLoggedIn: 20,
          fullProfileSeen: 100
        },
        {
          id: 2,
          personPic: 'pic_url_a',
          firstName: 'res',
          lastName: 'Doe',
          membershipType: 'Gold',
          totalMembershipSpent: 500,
          totalSpent: 350,


          // OfferDetails section
          offerImage: 'https://example.com/image1.jpg',
          offerWanted: 150,
          offerSeen: 250,
          offerListView: 350,
          offerRenewed: 450,
          liked: 550,
          offerLink: 'https://example.com/offer1',
          offerTitle: 'Exclusive Offer',
          offerCategory: 'Technology',
          offerCountry: 'Canada',
          offerCity: 'Toronto',
          offerDuration: '6 Months',
          offerContent: 'An exclusive offer for tech enthusiasts looking to invest in cutting-edge startups.',
          // Offer Provider Section 
          offerProviderPic: 'pic_url_a',
          offerProviderFirstName: 'res',
          offerProviderBizName: 'Doe',
          offerProviderMembershipType: 'Gold',
          offerProviderBizRevenue: 500,
          offerProviderAllSpent: 150,
          // Offer Provider Section 

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
          advertSpent: 500,
          peopleSatisfiedNeeds: 5,
          peopleRequestedOffers: 3,
          investorsAdverts: 2,
          pitchings: 5,
          bizMentor: 30,
          bizMentorSpent: 150,
          mobileNo: '1234567890',
          email: 'john.doe@example.com',
          bizCountry: 'USA',
          bizCity: 'New York',
          connections: 100,
          noEmployees: 50,
          bookingDate: '2023-01-01T12:00:00',
          joined: '2023-01-01',
          lastLoggedIn: '2023-06-01',
          noLoggedIn: 20,
          fullProfileSeen: 100
        },
        {
          id: 1,
          personPic: 'pic_url_a',
          firstName: 'John',
          lastName: 'Doe',
          membershipType: 'Gold',
          totalMembershipSpent: 500,
          totalSpent: 150,


          // OfferDetails section
          offerImage: 'https://example.com/image2.jpg',
          offerWanted: 200,
          offerSeen: 300,
          offerListView: 400,
          offerRenewed: 500,
          liked: 600,
          offerLink: 'https://example.com/offer2',
          offerTitle: 'Premium Offer',
          offerCategory: 'Healthcare',
          offerCountry: 'UK',
          offerCity: 'London',
          offerDuration: '2 Years',
          offerContent: 'A premium offer in the healthcare sector, perfect for investors looking to support innovative health solutions.',
          // Offer Provider Section 
          offerProviderPic: 'pic_url_a',
          offerProviderFirstName: 'John',
          offerProviderBizName: 'Doe',
          offerProviderMembershipType: 'Gold',
          offerProviderBizRevenue: 500,
          offerProviderAllSpent: 150,
          // Offer Provider Section 

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
          advertSpent: 500,
          peopleSatisfiedNeeds: 5,
          peopleRequestedOffers: 3,
          investorsAdverts: 2,
          pitchings: 5,
          bizMentor: 30,
          bizMentorSpent: 150,
          mobileNo: '1234567890',
          email: 'john.doe@example.com',
          bizCountry: 'USA',
          bizCity: 'New York',
          connections: 100,
          noEmployees: 50,
          bookingDate: '2023-01-01T12:00:00',
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


      //  * Computes the sorted members based on the current sortKey and sort order.      const sortMembers = (key: keyof Member) => {
      const sortMembers = (key: keyof Member) => {
      if (sortKey.value === key) {
        sortAsc.value = !sortAsc.value;
      } else {
        sortKey.value = key;
        sortAsc.value = true;
      }
      searchMembers();
    };

    const sortedMembers = computed(() => {
      return [...filteredMembers.value].sort((a, b) => {
        if (sortKey.value) {
          if (a[sortKey.value] < b[sortKey.value]) return sortAsc.value ? -1 : 1;
          if (a[sortKey.value] > b[sortKey.value]) return sortAsc.value ? 1 : -1;
        }
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
      const totalMembershipSpent = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.totalMembershipSpent, 0));
      const totalSpent = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.totalSpent, 0));
      // Offer Provider Section 
      const offerProviderBizRevenue = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.offerProviderBizRevenue, 0));
      const offerProviderAllSpent = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.offerProviderAllSpent, 0));
      // Biz Mentor Section
      // offer Totals
      const totalOfferWanted = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.offerWanted, 0));
      const totalOfferSeen = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.offerSeen, 0));
      const totalOfferListView = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.offerListView, 0));
      const totalOfferRenewed = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.offerRenewed, 0));
      const totalLiked = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.liked, 0));

      const totalBusinessRevenue = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.businessRevenue, 0));
      const totalSalary = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.salary, 0));
      const totalEventSpent = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.eventSpent, 0));
      const totalAdvertSpent = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.advertSpent, 0));
      const bizMentorSpent = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.bizMentorSpent, 0));
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
            'Member ID', 'PersonPic', 'FirstName', 'LastName', 'MembershipType', 'TotalMembershipSpent', 'TotalSpent',
            // offer section
            'OfferImage', 'OfferWanted', 'OfferSeen', 'OfferListView', 'OfferRenewed', 'Liked', 'OfferLink', 'OfferTitle', 'OfferCategory', 'OfferCountry', 'OfferCity', 'OfferDuration', 'OfferContent',
            // offer section
            // Offer Provider Section 
            'offerProviderPic', 'offerProviderFirstName', 'offerProviderBizName', 'offerProviderMembershipType', 'offerProviderBizRevenue', 'offerProviderAllSpent',
            // Offer Provider Section 
            'Age', 'Gender', 'BusinessName', 'BusinessRevenue', 'JobPosition', 'Salary', 'BizCategory', 'Exhibited', 'EventSpent', 'Visited', 'ListedNeeds', 'ListedOffers',
            'AdvertSpent', 'PeopleSatisfiedNeeds', 'PeopleRequestedOffers', 'InvestorsAdverts', 'Pitchings', 'BizMentor', 'BizMentorSpent',
            'MobileNo', 'Email', 'BizCountry', 'BizCity', 'Connections', 'NoEmployees', 'Booking Date', 'Joined', 'LastLoggedIn', 'NoLoggedIn', 'FullProfileSeen'
          ],
          ...filteredMembers.value.map(member => [
            member.id, member.personPic, member.firstName, member.lastName, member.membershipType, member.totalMembershipSpent, member.totalSpent,
            // offer section
            member.offerImage, member.offerWanted, member.offerSeen, member.offerListView, member.offerRenewed, member.liked, member.offerLink, member.offerTitle, member.offerCategory, member.offerCountry, member.offerCity, member.offerDuration, member.offerContent,
            // offer section
            // Offer Provider Section 
            member.offerProviderPic, member.offerProviderFirstName, member.offerProviderBizName, member.offerProviderMembershipType, member.offerProviderBizRevenue,  member.offerProviderAllSpent, 
            // Offer Provider Section
            member.age, member.gender, member.businessName, member.businessRevenue, member.jobPosition, member.salary, member.bizCategory, member.exhibited, member.eventSpent,
            member.visited, member.listedNeeds, member.listedOffers, member.advertSpent, member.peopleSatisfiedNeeds, member.peopleRequestedOffers,
            member.investorsAdverts, member.pitchings, member.bizMentor, member.bizMentorSpent, member.mobileNo, member.email, member.bizCountry, member.bizCity,
            member.connections, member.noEmployees, member.bookingDate, member.joined, member.lastLoggedIn, member.noLoggedIn, member.fullProfileSeen
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
                    <th>Person Pic</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Membership Type</th>
                    <th>Total Membership Spent</th>
                    <th>Total Spent</th>
                    
                    // Offer section

                    <th>Offer Image</th>
                    <th>Offer Wanted</th>
                    <th>Offer Seen</th>
                    <th>Offer ListView</th>
                    <th>Offer Renewed</th>
                    <th>Liked</th>
                    <th>Offer Link</th>
                    <th>Offer Title</th>
                    <th>Offer Category</th>
                    <th>Offer Country</th>
                    <th>Offer City</th>
                    <th>Offer Duration</th>
                    <th>Offer Content</th>
                    // Offer Provider Section 
                    <th>Person Pic</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Membership Type</th>
                    <th>Total Membership Spent</th>
                    <th>Total Spent</th>
                    // Offer Provider Section

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
                    <th>Advert Spent</th>
                    <th>People Satisfied Needs</th>
                    <th>People Requested Offers</th>
                    <th>Investors Adverts</th>
                    <th>Pitchings</th>
                    <th>Biz Mentor</th>
                    <th>BizMentor Spent</th>
                    <th>Mobile No</th>
                    <th>Email</th>
                    <th>Biz Country</th>
                    <th>Biz City</th>
                    <th>Connections</th>
                    <th>No Employees</th>
                    <th>BookingDate</th>
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
                      <td>${member.personPic}</td>
                      <td>${member.firstName}</td>
                      <td>${member.lastName}</td>
                      <td>${member.membershipType}</td>
                      <td>${member.totalMembershipSpent}</td>
                      <td>${member.totalSpent}</td>

                      // Offer Section
                      <td>${member.offerImage}</td>
                      <td>${member.offerWanted}</td>
                      <td>${member.offerSeen}</td>
                      <td>${member.offerListView}</td>
                      <td>${member.offerRenewed}</td>
                      <td>${member.liked}</td>
                      <td>${member.offerLink}</td>
                      <td>${member.offerTitle}</td>
                      <td>${member.offerCategory}</td>
                      <td>${member.offerCountry}</td>
                      <td>${member.offerCity}</td>
                      <td>${member.offerDuration}</td>
                      <td>${member.offerContent}</td>
                      // Offer Provider Section 
                      <td>${member.offerProviderPic}</td>
                      <td>${member.offerProviderFirstName}</td>
                      <td>${member.offerProviderBizName}</td>
                      <td>${member.offerProviderMembershipType}</td>
                      <td>${member.offerProviderBizRevenue}</td>
                      <td>${member.offerProviderAllSpent}</td>
                      // Offer Provider Section 

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
                      <td>${member.advertSpent}</td>
                      <td>${member.peopleSatisfiedNeeds}</td>
                      <td>${member.peopleRequestedOffers}</td>
                      <td>${member.investorsAdverts}</td>
                      <td>${member.pitchings}</td>
                      <td>${member.bizMentor}</td>
                      <td>${member.bizMentorSpent}</td>
                      <td>${member.mobileNo}</td>
                      <td>${member.email}</td>
                      <td>${member.bizCountry}</td>
                      <td>${member.bizCity}</td>
                      <td>${member.connections}</td>
                      <td>${member.noEmployees}</td>
                      <td>${member.bookingDate}</td>
                      <td>${member.joined}</td>
                      <td>${member.lastLoggedIn}</td>
                      <td>${member.noLoggedIn}</td>
                      <td>${member.fullProfileSeen}</td>
                    </tr>
                  `).join('')}
                  <tr class="TotalRow">
                    <td colspan="5">Totals</td>
                    <td>${totalMembershipSpent.value}</td>
                    <td>${totalSpent.value}</td>

                    // Offer section
                    <td></td>
                    <td>${totalOfferWanted.value}</td>
                    <td>${totalOfferSeen.value}</td>
                    <td>${totalOfferListView.value}</td>
                    <td>${totalOfferRenewed.value}</td>
                    <td>${totalLiked.value}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    // Offer Provider Section 
                    <td>${offerProviderBizRevenue.value}</td>
                    <td>${offerProviderAllSpent.value}</td>
                    // Offer Provider Section 

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
                    <td>${totalAdvertSpent.value}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>${bizMentorSpent.value}</td>
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
        totalMembershipSpent,
        totalSpent,
        // Offer Provider Section
        offerProviderBizRevenue,
        offerProviderAllSpent,
        // Offer Provider Section
        // Offer section
        totalOfferWanted,
        totalOfferSeen,
        totalOfferListView,
        totalOfferRenewed,
        totalLiked,

        totalBusinessRevenue,
        totalSalary,
        totalEventSpent,
        totalAdvertSpent,
        bizMentorSpent,
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
.TitleP{
  display: center;
  text-align: center;
  font-weight: bold;
} 
/* Adjusting the length of the table here: http://localhost:8100/adminpage */
.search {
  width: 100px;
}
.OfferImageCol,
.offerProviderPicCol {
  Border-left: 2px red solid;
}
.OfferContentCol,
.offerProviderAllSpentCol {
  Border-right: 2px red solid;
}

.topBorder {
  border-top: 3px solid red;
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
  text-align: top;
}
.NONscrollingRow {
  overflow-x: auto;
  /* border: 4px solid rgb(26, 185, 18); */
}
.scrollingRow {
  min-width: 6000px;
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


