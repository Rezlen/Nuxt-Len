<template>
  <IonGrid>
    <p class="TitleP">History Of Your Investment Adverts, Clicks, Messages and Edit</p>

    <IonRow class="ButtonRow">
      <IonButton fill="clear"  @click="resetSorting">RESET</IonButton>
      <IonButton fill="clear" @click="exportTable">EXPORT</IonButton>
      <IonButton fill="clear" @click="printTable">PRINT</IonButton>
      <IonInput class="search" v-model="searchQuery" placeholder="Search..." @input="searchMembers"></IonInput>
      <IonButton class="arrowBackCircle" fill="clear" title="BackToLeft" @click="scrollToLeft"> 
        <IonIcon slot="icon-only" size="large" :icon="arrowBackCircle"></IonIcon>
      </IonButton>
    </IonRow>

    <IonRow class="NONscrollingRow">
    
      <IonRow class="scrollingRow" ref="scrollableContainer">
          <!-- TitleRow with sorting functionality and icons -->
          <IonRow class="TitleRow">
            
            <IonCol class="OrderIDCol" @click="sortMembers('id')">Order ID <IonIcon :icon="sortIcon('id')" class="sort-icon" /></IonCol>
            <IonCol class="BookingDateCol topBorder" @click="sortMembers('BookingDate')">Advert Date <IonIcon :icon="sortIcon('BookingDate')" class="sort-icon" /></IonCol>
            <!-- Investors Profile Data -->
            <IonCol class="InvestmentAmountCol topBorder" @click="sortMembers('investmentAmount')">Investment Amount<IonIcon :icon="sortIcon('investmentAmount')" class="sort-icon" /></IonCol>
            <IonCol class="EquityLoanCol topBorder" @click="sortMembers('equityLoan')">EquityLoan <IonIcon :icon="sortIcon('equityLoan')" class="sort-icon" /></IonCol>
            <IonCol class="InvestingCountryCol topBorder" @click="sortMembers('investingCountry')">Investing Country <IonIcon :icon="sortIcon('investingCountry')" class="sort-icon" /></IonCol>
            <IonCol class="InvestingCityCol topBorder" @click="sortMembers('investingCity')">Investing City <IonIcon :icon="sortIcon('investingCity')" class="sort-icon" /></IonCol>
            <IonCol class="InvestingLengthCol topBorder" @click="sortMembers('investingLength')">Investing Length <IonIcon :icon="sortIcon('investingLength')" class="sort-icon" /></IonCol>
            <IonCol class="WantedROICol topBorder" @click="sortMembers('wantedROI')">Wanted ROI <IonIcon :icon="sortIcon('wantedROI')" class="sort-icon" /></IonCol>
            <IonCol class="RequiredEquityInterestCol topBorder" @click="sortMembers('requiredEquityInterest')">Required EquityInterest <IonIcon :icon="sortIcon('requiredEquityInterest')" class="sort-icon" /></IonCol>
            <IonCol class="ProductServiceCol topBorder" @click="sortMembers('productService')">Product/Service <IonIcon :icon="sortIcon('productService')" class="sort-icon" /></IonCol>
            <IonCol class="InvestingCategoryCol topBorder" @click="sortMembers('investingCategory')">Investing Category <IonIcon :icon="sortIcon('investingCategory')" class="sort-icon" /></IonCol>
            <IonCol class="LookingForSummeryCol topBorder" @click="sortMembers('lookingForSummery')">LookingFor Summery <IonIcon :icon="sortIcon('lookingForSummery')" class="sort-icon" /></IonCol>
            <!-- Investors Profile Data -->
            <IonCol class="DisplayedInListCol Purple topBorder" @click="sortMembers('DisplayedInList')">Displayed in a Page <IonIcon :icon="sortIcon('DisplayedInList')" class="sort-icon" /></IonCol>
            <IonCol class="openedSeenAllCol Purple topBorder" @click="sortMembers('openedSeenAll')">Opened Seen All <IonIcon :icon="sortIcon('openedSeenAll')" class="sort-icon" /></IonCol>
            <IonCol class="applicationMessagedAllCol Purple topBorder" @click="sortMembers('applicationMessagedAll')">Application Messaged All <IonIcon :icon="sortIcon('applicationMessagedAll')" class="sort-icon" /></IonCol>
            <IonCol class="TopCategoryOpenedYourApplicationCol topBorder" @click="sortMembers('TopCategoryOpenedYourApplication')">Top Category Opened Your Application <IonIcon :icon="sortIcon('TopCategoryOpenedYourApplication')" class="sort-icon" /></IonCol>
            <IonCol class="ProductServiceCol topBorder" @click="sortMembers('ProductService')">Product Or Service <IonIcon :icon="sortIcon('ProductService')" class="sort-icon" /></IonCol>
            <IonCol class="ExpiringDateCol topBorder" @click="sortMembers('expiringDate')">Expiring Date <IonIcon :icon="sortIcon('expiringDate')" class="sort-icon" /></IonCol>
            <IonCol class="TimeLeftTillExpiryCol topBorder" @click="sortMembers('timeLeftTillExpiry')">Time Left Till Expiry <IonIcon :icon="sortIcon('timeLeftTillExpiry')" class="sort-icon" /></IonCol>
            <IonCol class="successFeeCommissionPaidCol topBorder" @click="sortMembers('successFeeCommissionPaid')">Investee Paid SuccessFee Commission<IonIcon :icon="sortIcon('successFeeCommissionPaid')" class="sort-icon" /></IonCol>

            <IonCol class="PersonPicCol" @click="sortMembers('personPic')">PersonPic <IonIcon :icon="sortIcon('personPic')" class="sort-icon" /></IonCol>
            <IonCol class="FirstNameCol" @click="sortMembers('firstName')">FirstName <IonIcon :icon="sortIcon('firstName')" class="sort-icon" /></IonCol>
            <IonCol class="LastNameCol" @click="sortMembers('lastName')">LastName <IonIcon :icon="sortIcon('lastName')" class="sort-icon" /></IonCol>
            <IonCol class="EmailCol" @click="sortMembers('email')">Email <IonIcon :icon="sortIcon('email')" class="sort-icon" /></IonCol>
            <IonCol class="openedSeenCol Purple topBorder" @click="sortMembers('openedSeen')">Opened Seen <IonIcon :icon="sortIcon('openedSeen')" class="sort-icon" /></IonCol>
            <IonCol class="applicationMessagedCol Purple topBorder" @click="sortMembers('applicationMessaged')">Messaged <IonIcon :icon="sortIcon('applicationMessaged')" class="sort-icon" /></IonCol>
            <IonCol class="MembershipTypeCol" @click="sortMembers('membershipType')">Membership Type <IonIcon :icon="sortIcon('membershipType')" class="sort-icon" /></IonCol>
            <IonCol class="VIPMembershipCol" @click="sortMembers('VIPMembership')">VIP Membership <IonIcon :icon="sortIcon('VIPMembership')" class="sort-icon" /></IonCol>
            <IonCol class="VVIPMembershipCol" @click="sortMembers('VVIPMembership')">VVIP Membership <IonIcon :icon="sortIcon('VVIPMembership')" class="sort-icon" /></IonCol>

            <IonCol class="ResponseToYourNeedsCol purple" @click="sortMembers('responseToYourNeeds')">Response To His/Her Needs <IonIcon :icon="sortIcon('responseToYourNeeds')" class="sort-icon" /></IonCol>
            <IonCol class="ResponseToYourOffersCol purple" @click="sortMembers('responseToYourOffers')">Response To His/Her Offers <IonIcon :icon="sortIcon('responseToYourOffers')" class="sort-icon" /></IonCol>
            <IonCol class="ResponseToYourBestOffersCol purple" @click="sortMembers('responseToYourBestOffers')">Response To His/Her Best Offers <IonIcon :icon="sortIcon('responseToYourBestOffers')" class="sort-icon" /></IonCol>
            <IonCol class="PitchTrainingCol" @click="sortMembers('pitchTraining')">Pitch Training <IonIcon :icon="sortIcon('pitchTraining')" class="sort-icon" /></IonCol>
            <IonCol class="BusinessFundingAdviceCol" @click="sortMembers('businessFundingAdvice')">Business Funding Advice <IonIcon :icon="sortIcon('businessFundingAdvice')" class="sort-icon" /></IonCol>
            <IonCol class="FreeBusinessFundingAdviceCol" @click="sortMembers('freeBusinessFundingAdvice')">FREE Business Funding Advice <IonIcon :icon="sortIcon('freeBusinessFundingAdvice')" class="sort-icon" /></IonCol>
            <IonCol class="VideoOfPitchingCol" @click="sortMembers('videoOfPitching')">Video Of Pitching <IonIcon :icon="sortIcon('videoOfPitching')" class="sort-icon" /></IonCol>
            
            <IonCol class="BusinessRevenueCol" @click="sortMembers('businessRevenue')">Business Revenue <IonIcon :icon="sortIcon('businessRevenue')" class="sort-icon" /></IonCol>
            <IonCol class="JobPositionCol" @click="sortMembers('jobPosition')">Job Position<IonIcon :icon="sortIcon('jobPosition')" class="sort-icon" /></IonCol>
            <IonCol class="SalaryCol purple" @click="sortMembers('salary')">Salary<IonIcon :icon="sortIcon('salary')" class="sort-icon" /></IonCol>
            <IonCol class="BusinessNameCol purple" @click="sortMembers('businessName')">Business Name <IonIcon :icon="sortIcon('businessName')" class="sort-icon" /></IonCol>
            <IonCol class="BizCategoryCol" @click="sortMembers('bizCategory')">BizCategory <IonIcon :icon="sortIcon('bizCategory')" class="sort-icon" /></IonCol>
            <IonCol class="ExhibitedCol purple" @click="sortMembers('exhibited')">Exhibited <IonIcon :icon="sortIcon('exhibited')" class="sort-icon" /></IonCol>
            <IonCol class="VisitedCol purple" @click="sortMembers('visited')">Visited <IonIcon :icon="sortIcon('visited')" class="sort-icon" /></IonCol>
            <IonCol class="InvestorMemberCol" @click="sortMembers('investorMember')">Investor Member <IonIcon :icon="sortIcon('investorMember')" class="sort-icon" /></IonCol>
            <IonCol class="InvestmentBrokerCol" @click="sortMembers('investmentBroker')">Investment Broker <IonIcon :icon="sortIcon('investmentBroker')" class="sort-icon" /></IonCol>
            <IonCol class="InvestorsAdvertsCol  purple" @click="sortMembers('investorsAdverts')">Investors Adverts <IonIcon :icon="sortIcon('investorsAdverts')" class="sort-icon" /></IonCol>
            <IonCol class="BizMentorCol" @click="sortMembers('bizMentor')">BizMentor <IonIcon :icon="sortIcon('bizMentor')" class="sort-icon" /></IonCol>
            <IonCol class="TotalSpentCol" @click="sortMembers('totalSpent')">TotalSpent (Remove it) <IonIcon :icon="sortIcon('totalSpent')" class="sort-icon" /></IonCol>
            <IonCol class="OneMinPitchingCol" @click="sortMembers('oneMinPitching')">1 Min Pitching <IonIcon :icon="sortIcon('oneMinPitching')" class="sort-icon" /></IonCol>
            <IonCol class="ThreeMinPitchingCol" @click="sortMembers('threeMinPitching')">3 Min Pitching <IonIcon :icon="sortIcon('threeMinPitching')" class="sort-icon" /></IonCol>
            <IonCol class="InvestmentPitchingCol purple" @click="sortMembers('investmentPitching')">Investment Pitching <IonIcon :icon="sortIcon('investmentPitching')" class="sort-icon" /></IonCol>
            <IonCol class="WorkshopCol purple" @click="sortMembers('workshop')">workshop <IonIcon :icon="sortIcon('workshop')" class="sort-icon" /></IonCol>
            <IonCol class="PresentationCol purple" @click="sortMembers('presentation')"> Presentation <IonIcon :icon="sortIcon('presentation')" class="sort-icon" /></IonCol>
            
            
            <IonCol class="LastLoggedInCol" @click="sortMembers('lastLoggedIn')">LastLoggedIn <IonIcon :icon="sortIcon('lastLoggedIn')" class="sort-icon" /></IonCol>
            <IonCol class="ActionCol">Hide The Application</IonCol>
          </IonRow>

          <!-- Data rows -->
          <IonRow v-for="member in paginatedMembers" :key="member.id" class="DataRow" :class="{ selected: selectedRow === member.id }" @click="selectRow(member.id)">
            <IonCol class="OrderIDCol">{{ member.id }}</IonCol>
            <IonCol class="BookingDateCol">{{ member.BookingDate }}</IonCol>
            <!-- Investors Profile Data -->
            <IonCol class="InvestmentAmountCol">{{ member.investmentAmount }}</IonCol>
            <IonCol class="EquityLoanCol">{{ member.equityLoan }}</IonCol>
            <IonCol class="InvestingCountryCol">{{ member.investingCountry }}</IonCol>
            <IonCol class="InvestingCityCol">{{ member.investingCity }}</IonCol>
            <IonCol class="InvestingLengthCol">{{ member.investingLength }}</IonCol>
            <IonCol class="WantedROICol">{{ member.wantedROI }}</IonCol>
            <IonCol class="RequiredEquityInterestCol">{{ member.requiredEquityInterest }}</IonCol>
            <IonCol class="ProductServiceCol">{{ member.productService }}</IonCol>
            <IonCol class="InvestingCategoryCol">{{ member.investingCategory }}</IonCol>
            <IonCol class="LookingForSummeryCol">{{ member.lookingForSummery }}</IonCol>
            <!-- Investors Profile Data -->
            <IonCol class="DisplayedInListCol">{{ member.DisplayedInList }}</IonCol>
            <IonCol class="openedSeenAllCol">{{ member.openedSeenAll }}</IonCol>
            <IonCol class="applicationMessagedAllCol">{{ member.applicationMessagedAll }}</IonCol>
            <IonCol class="TopCategoryOpenedYourApplicationCol">{{ member.TopCategoryOpenedYourApplication }}</IonCol>
            <IonCol class="ProductServiceCol">{{ member.ProductService }}</IonCol>
            <IonCol class="ExpiringDateCol">{{ member.expiringDate }}</IonCol>
            <IonCol class="TimeLeftTillExpiryCol">{{ member.timeLeftTillExpiry}}</IonCol>
            
            <IonCol class="successFeeCommissionPaidCol">{{ member.successFeeCommissionPaid }}</IonCol>
            <IonCol class="PersonPicCol"><img :src="member.personPic" alt="Person Pic" class="person-pic"/></IonCol>
            <IonCol class="FirstNameCol">{{ member.firstName }}</IonCol>
            <IonCol class="LastNameCol">{{ member.lastName }}</IonCol>
            <IonCol class="EmailCol">{{ member.email }}</IonCol>
            <IonCol class="openedSeenCol">{{ member.openedSeen }}</IonCol>
            <IonCol class="applicationMessagedCol">{{ member.applicationMessaged }}</IonCol>
            <IonCol class="MembershipTypeCol">{{ member.membershipType }}</IonCol>
            <IonCol class="VIPMembershipCol">{{ member.VIPMembership }}</IonCol>
            <IonCol class="VVIPMembershipCol">{{ member.VVIPMembership }}</IonCol>

            <IonCol class="ResponseToYourNeedsCol">{{ member.responseToYourNeeds}}</IonCol>
            <IonCol class="ResponseToYourOffersCol">{{ member.responseToYourOffers}}</IonCol>
            <IonCol class="ResponseToYourBestOffersCol">{{ member.responseToYourBestOffers }}</IonCol>
            <IonCol class="PitchTrainingCol">{{ member.pitchTraining }}</IonCol>
            <IonCol class="BusinessFundingAdviceCol">{{ member.businessFundingAdvice }}</IonCol>
            <IonCol class="FreeBusinessFundingAdviceCol">{{ member.freeBusinessFundingAdvice }}</IonCol>
            <IonCol class="VideoOfPitchingCol">{{ member.videoOfPitching }}</IonCol>
            
            <IonCol class="BusinessRevenueCol">{{ member.businessRevenue }}</IonCol>
            <IonCol class="JobPositionCol">{{ member.jobPosition }}</IonCol>
            <IonCol class="SalaryCol">{{ member.salary }}</IonCol>
            <IonCol class="BusinessNameCol">{{ member.businessName }}</IonCol>
            <IonCol class="BizCategoryCol">{{ member.bizCategory }}</IonCol>
            <IonCol class="ExhibitedCol">{{ member.exhibited }}</IonCol>
            <IonCol class="VisitedCol">{{ member.visited }}</IonCol>
            <IonCol class="InvestorMemberCol">{{ member.investorMember }}</IonCol>
            <IonCol class="investmentBrokerCol">{{ member.investmentBroker }}</IonCol>
            <IonCol class="InvestorsAdvertsCol">{{ member.investorsAdverts }}</IonCol>
            <IonCol class="BizMentorCol">{{ member.bizMentor }}</IonCol>
            <IonCol class="TotalSpentCol">{{ member.totalSpent }}</IonCol>
            <IonCol class="OneMinPitchingCol">{{ member.oneMinPitching }}</IonCol>
            <IonCol class="ThreeMinPitchingCol">{{ member.threeMinPitching }}</IonCol>
            <IonCol class="InvestmentPitchingCol">{{ member.investmentPitching }}</IonCol>
            <IonCol class="WorkshopCol">{{ member.workshop }}</IonCol>
            <IonCol class="PresentationCol">{{ member.presentation }}</IonCol>


            <IonCol class="LastLoggedInCol">{{ member.lastLoggedIn }}</IonCol>
            <IonCol class="ActionCol">
              <IonButton class="ActionCol" fill="clear" title="Close">
                <IonIcon slot="icon-only" size="small" :icon="close"></IonIcon>
              </IonButton>
            </IonCol>
          </IonRow>

          <!-- Total row -->
          <IonRow class="TotalRow">
            <IonCol class="OrderIDCol">Totals:</IonCol>
            <IonCol class="BookingDateCol"></IonCol>
            <!-- Investor section -->
            <IonCol class="InvestmentAmountCol">{{ totalInvestmentAmount }}</IonCol>
            <IonCol class="EquityLoanCol"></IonCol>
            <IonCol class="InvestingCountryCol"></IonCol>
            <IonCol class="InvestingCityCol"></IonCol>
            <IonCol class="InvestingLengthCol"></IonCol>
            <IonCol class="WantedROICol"></IonCol>
            <IonCol class="RequiredEquityCol"></IonCol>
            <IonCol class="ProductServiceCol"></IonCol>
            <IonCol class="InvestingCategoryCol"></IonCol>
            <IonCol class="LookingForSummeryCol"></IonCol>
            <!-- Investor section -->
            <IonCol class="DisplayedInListCol"></IonCol>
            <IonCol class="openedSeenAllCol"></IonCol>
            <IonCol class="applicationMessagedAllCol"></IonCol>
            <IonCol class="TopCategoryOpenedYourApplicationCol"></IonCol>
            <IonCol class="ProductServiceCol"></IonCol>
            <IonCol class="expiringDateCol"></IonCol>
            <IonCol class="TimeLeftTillExpiryCol"></IonCol>
            <IonCol class="successFeeCommissionPaidCol"></IonCol>
            <IonCol class="PersonPicCol"></IonCol>
            <IonCol class="FirstNameCol"></IonCol>
            <IonCol class="LastNameCol"></IonCol>
            <IonCol class="EmailCol"></IonCol>
            <IonCol class="openedSeenCol"></IonCol>
            <IonCol class="applicationMessagedCol"></IonCol>
            <IonCol class="MembershipTypeCol"></IonCol>
            <IonCol class="VIPMembershipCol"></IonCol>
            <IonCol class="VVIPMembershipCol"></IonCol>
            
            <IonCol class="ResponseToYourNeedsCol"></IonCol>
            <IonCol class="ResponseToYourOffersCol"></IonCol>
            <IonCol class="ResponseToYourBestOffersCol"></IonCol>
            <IonCol class="PitchTrainingCol"></IonCol>
            <IonCol class="BusinessFundingAdviceCol"></IonCol>
            <IonCol class="FreeBusinessFundingAdviceCol"></IonCol>
            <IonCol class="VideoOfPitchingCol"></IonCol>

            <IonCol class="BusinessRevenueCol">{{ totalBusinessRevenue }}</IonCol>
            <IonCol class="JobPositionCol"></IonCol>
            <IonCol class="SalaryCol">{{ totalSalary }}</IonCol>
            <IonCol class="BusinessNameCol"></IonCol>
            <IonCol class="BizCategoryCol"></IonCol>
            <IonCol class="ExhibitedCol"></IonCol>
            <IonCol class="VisitedCol"></IonCol>
            <IonCol class="InvestorMemberCol"></IonCol>
            <IonCol class="InvestmentBrokerCol"></IonCol>
            <IonCol class="InvestorsAdvertsCol"></IonCol>
            <IonCol class="BizMentorCol"></IonCol>
            <IonCol class="TotalSpentCol">{{ total }}</IonCol>
            <IonCol class="OneMinPitchingCol"></IonCol>
            <IonCol class="threeMinPitchingCol"></IonCol>
            <IonCol class="InvestmentPitchingCol"></IonCol>
            <IonCol class="WorkshopCol"></IonCol>
            <IonCol class="PresentationCol"></IonCol>

            
            <IonCol class="LastLoggedInCol"></IonCol>
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
    <IonRow class="editingRow">
      <FormProvideInvestmentComponent/>
    </IonRow>    

  </IonGrid>
</template>






<script lang="ts">
  import { defineComponent, ref, computed, watch } from 'vue';
  import { IonIcon, IonGrid, IonRow, IonCol, IonButton, IonInput } from '@ionic/vue';
  import { close, arrowDownOutline, arrowUpOutline, arrowBackCircle } from 'ionicons/icons';
  import FormProvideInvestmentComponent from '@/components/InvestmentComponents/FormProvideInvestmentComponent.vue';

  interface Member {
    id: number;
    BookingDate: string;
    // Investor section 
    investmentAmount: number;
    equityLoan: 'Equity' | 'Loan';
    investingCountry: string;
    investingCity: string;
    investingLength: string;
    wantedROI: number;
    requiredEquityInterest: number;
    productService: string;
    investingCategory: string;
    lookingForSummery: string;
    // Investor section 

    DisplayedInList: number;
    openedSeenAll: number;
    applicationMessagedAll: number;
    TopCategoryOpenedYourApplication: string;
    ProductService: string;
    expiringDate: string;
    timeLeftTillExpiry: string;
    successFeeCommissionPaid: number;
    personPic: string;
    firstName: string;
    lastName: string;
    email: string;
    openedSeen: number;
    applicationMessaged: number;
    membershipType: string;
    VIPMembership: number;
    VVIPMembership: number;
    
    responseToYourNeeds: number;
    responseToYourOffers: number;
    responseToYourBestOffers: number;
    pitchTraining: number;
    businessFundingAdvice: number;
    freeBusinessFundingAdvice: number;
    videoOfPitching: number;

    businessRevenue: number;
    jobPosition: string;
    salary: number;
    businessName: string;
    bizCategory: string;
    exhibited: number;
    visited: number;
    investorMember: number;
    investmentBroker: number;
    investorsAdverts: number;
    bizMentor: number;
    totalSpent: number;
    oneMinPitching: number;
    threeMinPitching: number;
    investmentPitching: number;
    workshop: number;
    presentation: number;

    lastLoggedIn: string;
  }

  export default defineComponent({
    name: 'MemberInvestmentApplicationComponent',
    components: { IonIcon, IonGrid, IonRow, IonCol, IonButton, IonInput, FormProvideInvestmentComponent },
    setup() {
      const members = ref<Member[]>([
        {
          id: 3,
          BookingDate: '2023-01-01T12:00:00',
          // Investor section 
          investmentAmount: 100,
          equityLoan: 'Equity',
          investingCountry: 'USA',
          investingCity: 'New York',
          investingLength: '5 years',
          wantedROI: 15,
          requiredEquityInterest: 20,
          productService: 'Tech Solutions',
          investingCategory: 'Technology',
          lookingForSummery: 'Looking for investment in tech startups',
          // Investor section 

          DisplayedInList: 22,
          openedSeenAll: 43,
          applicationMessagedAll: 30,
          TopCategoryOpenedYourApplication: 'Biz mentors', // Added TopCategoryOpenedYourApplication value
          ProductService: 'JohnBusiness',
          expiringDate: '2023-01-01T12:00:00',
          timeLeftTillExpiry: 'MonthsDaysHoursMinSeconds',
          successFeeCommissionPaid: 30,

          personPic: 'pic_url_a',
          firstName: 'Johneee',
          lastName: 'Doe',
          email: 'john.doe@example.com',
          openedSeen: 43,
          applicationMessaged: 30,
          membershipType: 'Gold',
          VIPMembership: 43,
          VVIPMembership: 30,
          responseToYourNeeds: 54,
          responseToYourOffers: 4,
          responseToYourBestOffers: 44,
          pitchTraining: 30,
          businessFundingAdvice: 34,
          freeBusinessFundingAdvice: 55,
          videoOfPitching: 55,

          businessRevenue: 1000000,
          jobPosition: 'CEO',
          salary: 200000,
          businessName: 'JohnBusiness',
          bizCategory: 'IT',
          exhibited: 30,
          visited: 30,
          investorMember: 5,
          investmentBroker: 3,
          investorsAdverts: 2,
          bizMentor: 30,
          totalSpent: 150,
          oneMinPitching: 344,
          threeMinPitching: 44,
          investmentPitching: 32,
          workshop: 22,
          presentation: 22,
          lastLoggedIn: '2023-06-01'
        },
        {
          id: 2,
          BookingDate: '2023-01-01T12:00:00',
          // Investor section 
          investmentAmount: 2000,
          equityLoan: 'Equity',
          investingCountry: 'USA',
          investingCity: 'New York',
          investingLength: '5 years',
          wantedROI: 15,
          requiredEquityInterest: 20,
          productService: 'Tech Solutions',
          investingCategory: 'Technology',
          lookingForSummery: 'Looking for investment in tech startups',
          // Investor section 

          DisplayedInList: 32,
          openedSeenAll: 2,
          applicationMessagedAll: 30,
          TopCategoryOpenedYourApplication: 'Biz mentors', // Added TopCategoryOpenedYourApplication value
          ProductService: 'AliceBusiness',
          expiringDate: '2023-01-01T12:00:00',
          timeLeftTillExpiry: 'MonthsDaysHoursMinSeconds',
          successFeeCommissionPaid: 28,

          personPic: 'pic_url_a',
          firstName: 'res',
          lastName: 'Doe',
          email: 'alice.smith@example.com',
          openedSeen: 2,
          applicationMessaged: 30,
          membershipType: 'Silver',
          VIPMembership: 2,
          VVIPMembership: 30,

          responseToYourNeeds: 22,
          responseToYourOffers: 2,
          responseToYourBestOffers: 222,
          pitchTraining: 28,
          businessFundingAdvice: 33,
          freeBusinessFundingAdvice: 33,
          videoOfPitching: 55,

          businessRevenue: 1000000,
          jobPosition: 'CEO',
          salary: 200000,
          businessName: 'AliceBusiness',
          bizCategory: 'Marketing',
          exhibited: 30,
          visited: 30,
          investorMember: 4,
          investmentBroker: 5,
          investorsAdverts: 1,
          bizMentor: 30,
          totalSpent: 200,
          oneMinPitching: 344,
          threeMinPitching: 44,
          investmentPitching: 32,
          workshop: 22,
          presentation: 22,
          lastLoggedIn: '2023-07-01'
        },
        {
          id: 1,
          BookingDate: '2023-01-01T12:00:00',
          // Investor section 
          investmentAmount: 300,
          equityLoan: 'Equity',
          investingCountry: 'USA',
          investingCity: 'New York',
          investingLength: '5 years',
          wantedROI: 15,
          requiredEquityInterest: 20,
          productService: 'Tech Solutions',
          investingCategory: 'Technology',
          lookingForSummery: 'Looking for investment in tech startups',
          // Investor section 

          DisplayedInList: 22,
          openedSeenAll: 43,
          applicationMessagedAll: 30,
          TopCategoryOpenedYourApplication: 'Biz mentors', // Added TopCategoryOpenedYourApplication value
          ProductService: 'JohnBusiness',
          expiringDate: '2023-01-01T12:00:00',
          timeLeftTillExpiry: 'MonthsDaysHoursMinSeconds',
          successFeeCommissionPaid: 30,

          personPic: 'pic_url_a',
          firstName: 'Johneee',
          lastName: 'Doe',
          email: 'john.doe@example.com',
          openedSeen: 43,
          applicationMessaged: 30,
          membershipType: 'Gold',
          VIPMembership: 43,
          VVIPMembership: 30,
          responseToYourNeeds: 54,
          responseToYourOffers: 4,
          responseToYourBestOffers: 44,
          pitchTraining: 30,
          businessFundingAdvice: 34,
          freeBusinessFundingAdvice: 55,
          videoOfPitching: 55,

          businessRevenue: 1000000,
          jobPosition: 'CEO',
          salary: 200000,
          businessName: 'JohnBusiness',
          bizCategory: 'IT',
          exhibited: 30,
          visited: 30,
          investorMember: 5,
          investmentBroker: 3,
          investorsAdverts: 2,
          bizMentor: 30,
          totalSpent: 150,
          oneMinPitching: 344,
          threeMinPitching: 44,
          investmentPitching: 32,
          workshop: 22,
          presentation: 22,
          lastLoggedIn: '2023-06-01'
        }
      ]);

      const sortKey = ref<keyof Member | null>(null);
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
        sortKey.value = 'BookingDate';
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

      const itemsPerPage = 20;
      const currentPage = ref(1);

      //  * Computes the paginated members for the current page.
      const paginatedMembers = computed(() => {
        const start = (currentPage.value - 1) * itemsPerPage;
        return sortedMembers.value.slice(start, start + itemsPerPage);
      });

      //  * Computes the total number of pages based on the number of members and items per page.
      const totalPages = computed(() => Math.ceil(filteredMembers.value.length / itemsPerPage));
      const totalInvestmentAmount = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.investmentAmount, 0));

      const total = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.totalSpent, 0));
      const totalBusinessRevenue = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.businessRevenue, 0));
      const totalSalary = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.salary, 0));
      //  * Navigates to the previous page, if possible.
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
            'Member ID', 'BookingDate',
            // Investment data
            'Investment Amount', 'Equity Loan', 'Investing Country', 'Investing City', 'Investing Length', 'Wanted ROI', 'Required Equity', 'Product Service', 'Investing Category', 'LookingFor Summery',
            // <!-- Investment Data

            'DisplayedInList', 'openedSeenAll', 'applicationMessagedAll', 'TopCategoryOpenedYourApplication',  'ProductService', 
            'ExpiringDate', 'TimeLeftTillExpiry', 'successFeeCommissionPaid', 'PersonPic', 'FirstName', 'LastName', 'Email', 'openedSeen', 'applicationMessaged', 'MembershipType', 'VIP Membership', 'VVIPMembership',    'Response To Your Needs', 'Response To Your Offers', 'ResponseToYourBestOffers', 'PitchTraining', 'BusinessFundingAdvice','FreeBusinessFundingAdvice', 'VideoOfPitching', 'BusinessName', 'BusinessRevenue', 'JobPosition', 'BusinessName', 
            'BizCategory', 'Exhibited', 'Visited', 'InvestorMember', 'InvestmentBroker', 'InvestorsAdverts', 'BizMentor',
            'TotalSpent', 'OneMinPitching', 'ThreeMinPitching', 'InvestmentPitching', 'Workshop', 'Presentation', 'LastLoggedIn'
          ],
          ...filteredMembers.value.map(member => [
            member.id,  member.BookingDate,

            //  Investment Data
            member.investmentAmount, member.equityLoan, member.investingCountry, member.investingCity, member.investingLength, member.wantedROI, member.requiredEquityInterest, member.productService, member.investingCategory, member.lookingForSummery,
            //  Investment Data
            
            member.DisplayedInList, member.openedSeenAll, member.applicationMessagedAll, member.TopCategoryOpenedYourApplication,  member.ProductService, member.expiringDate, member.timeLeftTillExpiry, member.successFeeCommissionPaid, member.personPic, member.firstName, member.lastName, member.email, member.openedSeen, member.applicationMessaged, member.membershipType, member.VIPMembership, member.VVIPMembership,  member.responseToYourNeeds, member.responseToYourOffers, member.responseToYourBestOffers, member.pitchTraining, member.businessFundingAdvice, member.freeBusinessFundingAdvice, member.videoOfPitching,member.businessRevenue, member.jobPosition, member.salary,

            member.businessName, member.bizCategory, member.exhibited, member.visited, member.investorMember, member.investmentBroker,
            member.investorsAdverts, member.bizMentor, member.totalSpent, member.oneMinPitching, member.threeMinPitching, member.investmentPitching, member.workshop,   member.lastLoggedIn
          ])
        ]
          .map(e => e.join(","))
          .join("\n");

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'LENeventBookings.csv';
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
                    <th>BookingDate</th>

                    // Investor section 
                    <th>Investment Amount</th>
                    <th>Equity Loan</th>
                    <th>Investing Country</th>
                    <th>Investing City</th>
                    <th>Investing Length</th>
                    <th>Wanted ROI</th>
                    <th>Mob No</th>
                    <th>Required Equity</th>
                    <th>Product Service</th>
                    <th>Investing Category</th>
                    <th>LookingFor Summery</th>
                    // Investor section
                    
                    <th>DisplayedInAPage</th>
                    <th>openedSeenAll</th>
                    <th>applicationMessagedAll</th>
                    <th>TopCategoryOpenedYourApplication</th>
                    <th>ProductService</th>
                    <th>ExpiringDate</th>
                    <th>timeLeftTillExpiry</th>
                    <th>successFeeCommissionPaid</th>
                    <th>Person Pic</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>openedSeen</th>
                    <th>applicationMessaged</th>
                    <th>Membership Type</th>
                    <th>VIP Membership</th>
                    <th>VVIPMembership</th>
                    <th>Response To Your Needs</th>
                    <th>Response To Your Offers</th>
                    <th>Response To Your Best Offers</th>
                    <th>PitchTraining</th>
                    <th>Business Funding Advice</th>
                    <th>Free Business Funding Advice</th>
                    <th>Video Of Pitching</th>

                    <th>Business Revenue</th>
                    <th>Job Position</th>
                    <th>Salary</th>
                    <th>Business Name</th>
                    <th>Biz Category</th>
                    <th>Exhibited</th>
                    <th>Visited</th>
                    <th>Investor Member</th>
                    <th>Investment Broker</th>
                    <th>Investors Adverts</th>
                    <th>Biz Mentor</th>
                    <th>Total Spent</th>
                    <th>OneMin Pitching</th>
                    <th>ThreeMin Pitching</th>
                    <th>Investment Pitching</th>
                    <th>Workshop</th>
                    <th>Presentation</th>
                    <th>Last Logged In</th>
                  </tr>
                </thead>
                <tbody>
                  ${paginatedMembers.value.map((member, index) => `
                    <tr class="${index % 2 === 0 ? 'even-row' : 'odd-row'}">
                      <td>${member.id}</td>
                      <td>${member.BookingDate}</td>

                      // Investor section 
                      <td>${member.investmentAmount}</td>
                      <td>${member.equityLoan}</td>
                      <td>${member.investingCountry}</td>
                      <td>${member.investingCity}</td>
                      <td>${member.investingLength}</td>
                      <td>${member.wantedROI}</td>
                      <td>${member.requiredEquityInterest}</td>
                      <td>${member.productService}</td>
                      <td>${member.investingCategory}</td>
                      <td>${member.lookingForSummery}</td>
                      // Investor section 

                      <td>${member.DisplayedInList}</td>
                      <td>${member.openedSeenAll}</td>
                      <td>${member.applicationMessagedAll}</td>
                      <td>${member.TopCategoryOpenedYourApplication}</td>
                      <td>${member.ProductService}</td>
                      <td>${member.expiringDate}</td>
                      <td>${member.timeLeftTillExpiry}</td>
                      <td>${member.successFeeCommissionPaid}</td>
                      <td>${member.personPic}</td>
                      <td>${member.firstName}</td>
                      <td>${member.lastName}</td>
                      <td>${member.email}</td>
                      <td>${member.openedSeen}</td>
                      <td>${member.applicationMessaged}</td>
                      <td>${member.membershipType}</td>
                      <td>${member.VIPMembership}</td>
                      <td>${member.VVIPMembership}</td>
                      <td>${member.responseToYourNeeds}</td>
                      <td>${member.responseToYourOffers}</td>
                      <td>${member.responseToYourBestOffers}</td>
                      <td>${member.pitchTraining}</td>
                      <td>${member.businessFundingAdvice}</td>
                      <td>${member.freeBusinessFundingAdvice}</td>
                      <td>${member.videoOfPitching}</td>

                      <td>${member.businessRevenue}</td>
                      <td>${member.jobPosition}</td>
                      <td>${member.salary}</td>                      
                      <td>${member.businessName}</td>
                      <td>${member.bizCategory}</td>
                      <td>${member.exhibited}</td>
                      <td>${member.visited}</td>
                      <td>${member.investorMember}</td>
                      <td>${member.investmentBroker}</td>
                      <td>${member.investorsAdverts}</td>
                      <td>${member.bizMentor}</td>
                      <td>${member.totalSpent}</td>
                      <td>${member.oneMinPitching}</td>
                      <td>${member.threeMinPitching}</td>
                      <td>${member.investmentPitching}</td>
                      <td>${member.workshop}</td>
                      <td>${member.presentation}</td>
                      <td>${member.lastLoggedIn}</td>
                    </tr>
                  `).join('')}
                  <tr class="TotalRow">
                    <td>Totals:</td>
                    <td"></td>
                    <td"></td>
                    // Investor section 
                    <td>${totalInvestmentAmount.value}</td>
                    <td colspan="33"></td>
                    <td>${totalBusinessRevenue.value}</td>
                    <td></td>
                    <td>${totalSalary.value}</td> 
                    <td colspan="8"></td>
                    <td>${total.value}</td>
                    <td colspan="6"></td>
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
        total,
        totalInvestmentAmount,
        totalBusinessRevenue,
        totalSalary,
        close,
        arrowBackCircle,
        scrollToLeft,
        scrollableContainer,
      };
    }
  });
</script>







<style scoped>
  /* Adjusting the length of the table here: http://localhost:8100/adminpage */
  ion-grid {
    width: 100%;
  }
  .search{
    width: 100px;
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
  }
  .topBorder {
    border-top: 3px solid red;
  }
  .successFeeCommissionPaidCol {
    border-right: 3px solid red;
  }
  .Purple{
    color: rgb(206, 6, 251);
    font-weight: bold;
  }
  .NONscrollingRow {
    overflow-x: auto;
  }
  .scrollingRow {
    min-width: 5700px;
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

  .TitleRow, .DataRow, .TotalRow {
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

  .OrderIDCol {
    /* width: 50px; */
    background-color: red;
  }

  ion-col {
    max-width: 100px;
    padding: 0;
    margin: 0;
    white-space: nowrap;
    overflow-x: auto;
    align-content: center;
    height: 40px;
    font-size: 12px;
    border-right: 1px solid lightgray;
  }
  .ActionCol{
    overflow-x: visible;
    color: red;
  }
  .ActionCol ion-button  {
    margin:0;
    padding:0;
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
  .TitleP {
    text-align: center;
    font-weight: bold;
  }

  @media (max-width: 600px) {
    .TitleRow, .DataRow, .TotalRow {
      display: flex;
      flex-wrap: wrap;
    }
    ion-col {
      max-width: 100px;
    }
  }
  


</style>


