<template>
  <IonGrid>
    <p class="TitleP">Track your Need, activities, click, views, reaction and edits</p>

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
          
          <IonCol class="OrderIDCol" @click="sortMembers('id')">ID <IonIcon :icon="sortIcon('id')" class="sort-icon" /></IonCol>
          <IonCol class="BookingDateCol" @click="sortMembers('bookingDate')">CreateDate <IonIcon :icon="sortIcon('bookingDate')" class="sort-icon" /></IonCol>
          <IonCol class="ExpiringDateCol" @click="sortMembers('expiringDate')">Expiring Date<IonIcon :icon="sortIcon('expiringDate')" class="sort-icon" /></IonCol>
          <IonCol class="TimeLeftTillExpiryCol" @click="sortMembers('timeLeftTillExpiry')">Time Left Till Expiry <IonIcon :icon="sortIcon('timeLeftTillExpiry')" class="sort-icon" /></IonCol>
          <IonCol class="PersonPicCol" @click="sortMembers('personPic')">PersonPic <IonIcon :icon="sortIcon('personPic')" class="sort-icon" /></IonCol>
          <IonCol class="FirstNameCol" @click="sortMembers('firstName')">FirstName <IonIcon :icon="sortIcon('firstName')" class="sort-icon" /></IonCol>
          <IonCol class="LastNameCol" @click="sortMembers('lastName')">LastName <IonIcon :icon="sortIcon('lastName')" class="sort-icon" /></IonCol>
          <IonCol class="EmailCol" @click="sortMembers('email')">Email <IonIcon :icon="sortIcon('email')" class="sort-icon" /></IonCol>
          <IonCol class="needWantedCol purple" @click="sortMembers('needWanted')">Need Wanted<IonIcon :icon="sortIcon('needWanted')" class="sort-icon" /></IonCol>
          <IonCol class="needSeenCol purple" @click="sortMembers('needSeen')">Need Seen<IonIcon :icon="sortIcon('needSeen')" class="sort-icon" /></IonCol>
          <IonCol class="likedCol purple" @click="sortMembers('liked')">Liked<IonIcon :icon="sortIcon('liked')" class="sort-icon" /></IonCol>

          <IonCol class="MembershipTypeCol" @click="sortMembers('membershipType')">Membership Type <IonIcon :icon="sortIcon('membershipType')" class="sort-icon" /></IonCol>
          <IonCol class="VIPMembershipCol" @click="sortMembers('VIPMembership')">VIP Membership <IonIcon :icon="sortIcon('VIPMembership')" class="sort-icon" /></IonCol>
          <IonCol class="VVIPMembershipCol" @click="sortMembers('VVIPMembership')">VVIP Membership <IonIcon :icon="sortIcon('VVIPMembership')" class="sort-icon" /></IonCol>

          <IonCol class="ResponseToYourNeedsCol purple" @click="sortMembers('responseToYourNeeds')">Response To His/Her Needs <IonIcon :icon="sortIcon('responseToYourNeeds')" class="sort-icon" /></IonCol>
          <IonCol class="ResponseToYourOffersCol purple" @click="sortMembers('responseToYourOffers')">Response To His/Her Offers <IonIcon :icon="sortIcon('responseToYourOffers')" class="sort-icon" /></IonCol>
          <IonCol class="responseToYourBestOffersCol purple" @click="sortMembers('responseToYourBestOffers')">Response To His/Her Best Offers <IonIcon :icon="sortIcon('responseToYourBestOffers')" class="sort-icon" /></IonCol>
          <IonCol class="PitchTrainingCol" @click="sortMembers('pitchTraining')">Pitch Training <IonIcon :icon="sortIcon('pitchTraining')" class="sort-icon" /></IonCol>
          <IonCol class="BusinessFundingAdviceCol" @click="sortMembers('businessFundingAdvice')">Business Funding Advice <IonIcon :icon="sortIcon('businessFundingAdvice')" class="sort-icon" /></IonCol>
          <IonCol class="FreeBusinessFundingAdviceCol" @click="sortMembers('freeBusinessFundingAdvice')">FREE Business Funding Advice <IonIcon :icon="sortIcon('freeBusinessFundingAdvice')" class="sort-icon" /></IonCol>
          <IonCol class="VideoOfPitchingCol" @click="sortMembers('videoOfPitching')">Video Of Pitching <IonIcon :icon="sortIcon('videoOfPitching')" class="sort-icon" /></IonCol>
          
          <IonCol class="BusinessRevenueCol purple" @click="sortMembers('businessRevenue')">Business Revenue <IonIcon :icon="sortIcon('businessRevenue')" class="sort-icon" /></IonCol>
          <IonCol class="JobPositionCol" @click="sortMembers('jobPosition')">Job Position<IonIcon :icon="sortIcon('jobPosition')" class="sort-icon" /></IonCol>
          <IonCol class="SalaryCol purple" @click="sortMembers('salary')">Salary<IonIcon :icon="sortIcon('salary')" class="sort-icon" /></IonCol>
          <IonCol class="BusinessNameCol" @click="sortMembers('businessName')">Business Name <IonIcon :icon="sortIcon('businessName')" class="sort-icon" /></IonCol>
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
          <!-- need Provider Section -->
          <IonCol class="needProviderPicCol topBorder" @click="sortMembers('needProviderPic')">need Provider Pic <IonIcon :icon="sortIcon('needProviderPic')" class="sort-icon" /></IonCol>
          <IonCol class="needProviderFirstNameCol topBorder" @click="sortMembers('needProviderFirstName')">need Provider First Name <IonIcon :icon="sortIcon('needProviderFirstName')" class="sort-icon" /></IonCol>
          <IonCol class="needProviderBizNameCol topBorder" @click="sortMembers('needProviderBizName')">need Provider Business Name <IonIcon :icon="sortIcon('needProviderBizName')" class="sort-icon" /></IonCol>
          <IonCol class="needProviderMembershipTypeCol topBorder" @click="sortMembers('needProviderMembershipType')">need Provider Membership Type  <IonIcon :icon="sortIcon('needProviderMembershipType')" class="sort-icon" /></IonCol>
          <IonCol class="needProviderBizRevenueCol topBorder" @click="sortMembers('needProviderBizRevenue')">need Provider Business Revenue<IonIcon :icon="sortIcon('needProviderBizRevenue')" class="sort-icon" /></IonCol>
          <IonCol class="needProviderAllSpentCol topBorder" @click="sortMembers('needProviderAllSpent')">need Provider All Spent<IonIcon :icon="sortIcon('needProviderAllSpent')" class="sort-icon" /></IonCol>
          <!-- need Provider Section -->
          <!-- Need Data -->
          <IonCol class="NeedImageCol topBorder" @click="sortMembers('needImage')">NeedImage <IonIcon :icon="sortIcon('needImage')" class="sort-icon" /></IonCol>
          <IonCol class="needWantedAllCol topBorder" @click="sortMembers('needWantedAll')">Need Wanted All<IonIcon :icon="sortIcon('needWantedAll')" class="sort-icon" /></IonCol>
          <IonCol class="needSeenAllCol topBorder" @click="sortMembers('needSeenAll')">Need Seen All <IonIcon :icon="sortIcon('needSeenAll')" class="sort-icon" /></IonCol>
          <IonCol class="NeedListViewCol topBorder" @click="sortMembers('needListView')">NeedListView <IonIcon :icon="sortIcon('needListView')" class="sort-icon" /></IonCol>
          <IonCol class="NeedRenewedCol topBorder" @click="sortMembers('needRenewed')">NeedRenewed <IonIcon :icon="sortIcon('needRenewed')" class="sort-icon" /></IonCol>
          <IonCol class="likedAllCol topBorder" @click="sortMembers('likedAll')">Liked All <IonIcon :icon="sortIcon('likedAll')" class="sort-icon" /></IonCol>
          <IonCol class="NeedLinkCol topBorder" @click="sortMembers('needLink')">NeedLink <IonIcon :icon="sortIcon('needLink')" class="sort-icon" /></IonCol>
          <IonCol class="NeedTitleCol topBorder" @click="sortMembers('needTitle')">NeedTitle <IonIcon :icon="sortIcon('needTitle')" class="sort-icon" /></IonCol>
          <IonCol class="NeedCategoryCol topBorder" @click="sortMembers('needCategory')">NeedCategory <IonIcon :icon="sortIcon('needCategory')" class="sort-icon" /></IonCol>
          <IonCol class="NeedCountryCol topBorder" @click="sortMembers('needCountry')">NeedCountry <IonIcon :icon="sortIcon('needCountry')" class="sort-icon" /></IonCol>
          <IonCol class="NeedCityCol topBorder" @click="sortMembers('needCity')">NeedCity <IonIcon :icon="sortIcon('needCity')" class="sort-icon" /></IonCol>
          <IonCol class="NeedDurationCol topBorder" @click="sortMembers('needDuration')">NeedDuration <IonIcon :icon="sortIcon('needDuration')" class="sort-icon" /></IonCol>
          <IonCol class="NeedContentCol topBorder" @click="sortMembers('needContent')">NeedContent <IonIcon :icon="sortIcon('needContent')" class="sort-icon" /></IonCol>
          <IonCol class="ActionCol">Hide, Edit</IonCol>
        </IonRow>
          
        
        <!-- Data rows -->
        <IonRow v-for="member in paginatedMembers" :key="member.id" class="DataRow" :class="{ selected: selectedRow === member.id }" @click="selectRow(member.id)">
          <IonCol class="OrderIDCol">{{ member.id }}</IonCol>
          <IonCol class="BookingDateCol">{{ member.bookingDate }}</IonCol>
          <IonCol class="ExpiringDateCol">{{ member.expiringDate }}</IonCol>
          <IonCol class="TimeLeftTillExpiryCol">{{ member.timeLeftTillExpiry}}</IonCol>
          <IonCol class="PersonPicCol"><img :src="member.personPic" alt="Person Pic" class="person-pic"/></IonCol>
          <IonCol class="FirstNameCol">{{ member.firstName }}</IonCol>
          <IonCol class="LastNameCol">{{ member.lastName }}</IonCol>
          <IonCol class="EmailCol">{{ member.email }}</IonCol>
          <IonCol class="needWantedCol">{{ member.needWanted }}</IonCol>
          <IonCol class="needSeenCol">{{ member.needSeen }}</IonCol>
          <IonCol class="likedCol">{{ member.liked }}</IonCol>

          <IonCol class="MembershipTypeCol">{{ member.membershipType }}</IonCol>
          <IonCol class="VIPMembershipCol">{{ member.VIPMembership }}</IonCol>
          <IonCol class="VVIPMembershipCol">{{ member.VVIPMembership }}</IonCol>

          <IonCol class="ResponseToYourNeedsCol">{{ member.responseToYourNeeds}}</IonCol>
          <IonCol class="responseToYourOffersCol">{{ member.responseToYourOffers}}</IonCol>
          <IonCol class="responseToYourBestOffersCol">{{ member.responseToYourBestOffers }}</IonCol>
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
          <!-- need Provider Section -->
          <IonCol class="needProviderPicCol"><img :src="member.needProviderPic" alt="needProviderPic" class="needProviderPic"/></IonCol>
          <IonCol class="needProviderFirstNameCol">{{ member.needProviderFirstName }}</IonCol>
          <IonCol class="needProviderBizNameCol">{{ member.needProviderBizName }}</IonCol>
          <IonCol class="needProviderMembershipTypeCol">{{ member.needProviderMembershipType }}</IonCol>
          <IonCol class="needProviderBizRevenueCol">{{ member.needProviderBizRevenue }}</IonCol>
          <IonCol class="needProviderAllSpentCol">{{ member.needProviderAllSpent }}</IonCol>
          <!-- need Provider Section -->
          <!-- Need Data -->
          <IonCol class="NeedImageCol">{{ member.needImage }}</IonCol>
          <IonCol class="needWantedAllCol">{{ member.needWantedAll }}</IonCol>
          <IonCol class="needSeenAllCol">{{ member.needSeenAll }}</IonCol>
          <IonCol class="NeedListViewCol">{{ member.needListView }}</IonCol>
          <IonCol class="NeedRenewedCol">{{ member.needRenewed }}</IonCol>
          <IonCol class="likedAllCol">{{ member.likedAll }}</IonCol>
          <IonCol class="NeedLinkCol">{{ member.needLink }}</IonCol>
          <IonCol class="NeedTitleCol">{{ member.needTitle }}</IonCol>
          <IonCol class="NeedCategoryCol">{{ member.needCategory }}</IonCol>
          <IonCol class="NeedCountryCol">{{ member.needCountry }}</IonCol>
          <IonCol class="NeedCityCol">{{ member.needCity }}</IonCol>
          <IonCol class="NeedDurationCol">{{ member.needDuration }}</IonCol>
          <IonCol class="NeedContentCol">{{ member.needContent }}</IonCol>
          <IonCol class="ActionCol">
            <IonButton class="ActionCol" fill="clear" title="Close">
              <IonIcon slot="icon-only" size="small" :icon="close"></IonIcon>
              <IonIcon slot="icon-only" size="small" :icon="create"></IonIcon>

            </IonButton>
          </IonCol>
        </IonRow>

        <!-- Total row -->
        <IonRow class="TotalRow">
          <IonCol class="OrderIDCol">Totals:</IonCol>
          <IonCol class="BookingDateCol"></IonCol>
          <IonCol class="expiringDateCol"></IonCol>
          <IonCol class="TimeLeftTillExpiryCol"></IonCol>
          <IonCol class="PersonPicCol"></IonCol>
          <IonCol class="FirstNameCol"></IonCol>
          <IonCol class="LastNameCol"></IonCol>
          <IonCol class="EmailCol"> </IonCol>

          <IonCol class="needWantedCol">{{ totalneedWanted }}</IonCol>
          <IonCol class="needSeenCol">{{ totalneedSeen }}</IonCol>
          <IonCol class="likedCol">{{ totalliked }}</IonCol>
          <IonCol class="MembershipTypeCol"></IonCol>
          <IonCol class="VIPMembershipCol"></IonCol>
          <IonCol class="VVIPMembershipCol"></IonCol>
          
          <IonCol class="ResponseToYourNeedsCol"></IonCol>
          <IonCol class="ResponseToYourOffersCol"></IonCol>
          <IonCol class="responseToYourBestOffersCol"></IonCol>
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
          <!-- need Provider Section -->
          <IonCol class="needProviderPicCol"></IonCol>
          <IonCol class="needProviderFirstNameCol"></IonCol>
          <IonCol class="needProviderBizNameCol"></IonCol>
          <IonCol class="needProviderMembershipTypeCol"></IonCol>
          <IonCol class="needProviderBizRevenueCol">{{ needProviderBizRevenue }}</IonCol>
          <IonCol class="needProviderAllSpentCol">{{ needProviderAllSpent }}</IonCol>
          <!-- need Provider Section -->
          <!-- Need Data -->
          <IonCol class="NeedImageCol"></IonCol>
          <IonCol class="needWantedAllCol">{{ totalneedWantedAll }}</IonCol>
          <IonCol class="needSeenAllCol">{{ totalneedSeenAll }}</IonCol>
          <IonCol class="NeedListViewCol">{{ totalNeedListView }}</IonCol>
          <IonCol class="NeedRenewedCol">{{ totalNeedRenewed }}</IonCol>
          <IonCol class="likedAllCol">{{ totallikedAll }}</IonCol>
          <IonCol class="NeedLinkCol"></IonCol>
          <IonCol class="NeedTitleCol"></IonCol>
          <IonCol class="NeedCategoryCol"></IonCol>
          <IonCol class="NeedCountryCol"></IonCol>
          <IonCol class="NeedCityCol"></IonCol>
          <IonCol class="NeedDurationCol"></IonCol>
          <IonCol class="NeedContentCol"></IonCol>
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
      <NeedComponent/>
    </IonRow>

  </IonGrid>
</template>






<script lang="ts">
  import { defineComponent, ref, computed, watch } from 'vue';
  import { IonIcon, IonGrid, IonRow, IonCol, IonButton, IonInput } from '@ionic/vue';
  import { create, close, arrowDownOutline, arrowUpOutline, arrowBackCircle } from 'ionicons/icons';
  import NeedComponent from '@/components/OfferNeedBestOfferComponent/NeedComponent.vue';

  interface Member {
    id: number;
    bookingDate: string;
    expiringDate: string;
    timeLeftTillExpiry: string;
    personPic: string;
    firstName: string;
    lastName: string;
    email: string;
    needWanted: number;
    needSeen: number;
    liked: number;
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
    // need Provider Section 
    needProviderPic: string;
    needProviderFirstName: string;
    needProviderBizName: string;
    needProviderMembershipType: string;
    needProviderBizRevenue: number;
    needProviderAllSpent: number;
    // need Provider Section 
    // NeedDetails section
    needImage: string; // URL or path to the image
    needWantedAll: number;
    needSeenAll: number;
    needListView: number;
    needRenewed: number;
    likedAll: number;
    needLink: string;
    needTitle: string;
    needCategory: string;
    needCountry: string;
    needCity: string;
    needDuration: string;
    needContent: string;

  }

  export default defineComponent({
    name: 'MyNeedsActivityTableComponent',
    components: { IonIcon, IonGrid, IonRow, IonCol, IonButton, IonInput, NeedComponent, },
    setup() {
      const members = ref<Member[]>([
        {
          id: 3,
          bookingDate: '2023-01-01T12:00:00',
          expiringDate: '2023-01-01T12:00:00',
          timeLeftTillExpiry: 'MonthsDaysHoursMinSeconds',
          personPic: 'pic_url_a',
          firstName: 'Johneee',
          lastName: 'Doe',
          email: 'john.doe@example.com',
          needWanted: 100,
          needSeen: 200,
          liked: 500,
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
          lastLoggedIn: '2023-06-01',
          // need Provider Section 
          needProviderPic: 'pic_url_a',
          needProviderFirstName: 'Johneee',
          needProviderBizName: 'Doe',
          needProviderMembershipType: 'Gold',
          needProviderBizRevenue: 500,
          needProviderAllSpent: 150,
          // need Provider Section 
          // NeedDetails section
          needImage: 'https://example.com/image.jpg',
          needWantedAll: 100,
          needSeenAll: 200,
          needListView: 300,
          needRenewed: 400,
          likedAll: 500,
          needLink: 'https://example.com/need',
          needTitle: 'Amazing Need',
          needCategory: 'Real Estate',
          needCountry: 'USA',
          needCity: 'New York',
          needDuration: '1 Year',
          needContent: 'This is a great need that you do not want to miss.',
        },
        {
          id: 2,
          bookingDate: '2023-01-01T12:00:00',
          expiringDate: '2023-01-01T12:00:00',
          timeLeftTillExpiry: 'MonthsDaysHoursMinSeconds',
          personPic: 'pic_url_a',
          firstName: 'res',
          lastName: 'Doe',
          email: 'alice.smith@example.com',
          needWanted: 150,
          needSeen: 250,
          liked: 550,
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
          lastLoggedIn: '2023-07-01',
          // need Provider Section 
          needProviderPic: 'pic_url_a',
          needProviderFirstName: 'res',
          needProviderBizName: 'Doe',
          needProviderMembershipType: 'Gold',
          needProviderBizRevenue: 500,
          needProviderAllSpent: 150,
          // need Provider Section 
          // NeedDetails section
          needImage: 'https://example.com/image1.jpg',
          needWantedAll: 150,
          needSeenAll: 250,
          needListView: 350,
          needRenewed: 450,
          likedAll: 550,
          needLink: 'https://example.com/need1',
          needTitle: 'Exclusive Need',
          needCategory: 'Technology',
          needCountry: 'Canada',
          needCity: 'Toronto',
          needDuration: '6 Months',
          needContent: 'An exclusive need for tech enthusiasts looking to invest in cutting-edge startups.',

        },
        {
          id: 1,
          bookingDate: '2023-01-01T12:00:00',
          expiringDate: '2023-01-01T12:00:00',
          timeLeftTillExpiry: 'MonthsDaysHoursMinSeconds',
          personPic: 'pic_url_a',
          firstName: 'John',
          lastName: 'Doe',
          email: 'bob.brown@example.com',
          needWanted: 200,
          needSeen: 300,
          liked: 600,
          membershipType: 'Platinum',
          VIPMembership: 7,
          VVIPMembership: 30,
          responseToYourNeeds: 77,
          responseToYourOffers: 7,
          responseToYourBestOffers: 777,
          pitchTraining: 35,
          businessFundingAdvice: 33,
          freeBusinessFundingAdvice: 33,
          videoOfPitching: 55,

          businessRevenue: 1000000,
          jobPosition: 'CEO',
          salary: 200000,
          businessName: 'BobBusiness',
          bizCategory: 'Finance',
          exhibited: 30,
          visited: 30,
          investorMember: 6,
          investmentBroker: 4,
          investorsAdverts: 3,
          bizMentor: 30,
          totalSpent: 250,
          oneMinPitching: 344,
          threeMinPitching: 44,
          investmentPitching: 32,
          workshop: 22,
          presentation: 22,
          lastLoggedIn: '2023-08-01',
          // need Provider Section 
          needProviderPic: 'pic_url_a',
          needProviderFirstName: 'John',
          needProviderBizName: 'Doe',
          needProviderMembershipType: 'Gold',
          needProviderBizRevenue: 500,
          needProviderAllSpent: 150,
          // need Provider Section 
          // NeedDetails section
          needImage: 'https://example.com/image2.jpg',
          needWantedAll: 200,
          needSeenAll: 300,
          needListView: 400,
          needRenewed: 500,
          likedAll: 600,
          needLink: 'https://example.com/need2',
          needTitle: 'Premium Need',
          needCategory: 'Healthcare',
          needCountry: 'UK',
          needCity: 'London',
          needDuration: '2 Years',
          needContent: 'A premium need in the healthcare sector, perfect for investors looking to support innovative health solutions.',

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

      const itemsPerPage = 20;
      const currentPage = ref(1);

      //  * Computes the paginated Members for the current page.
      const paginatedMembers = computed(() => {
        const start = (currentPage.value - 1) * itemsPerPage;
        return sortedMembers.value.slice(start, start + itemsPerPage);
      });

      //  * Computes the total number of pages based on the number of members and items per page.
      const totalPages = computed(() => Math.ceil(filteredMembers.value.length / itemsPerPage));

      //  * Computes the total cost of all members.
      const total = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.totalSpent, 0));


      const totalBusinessRevenue = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.businessRevenue, 0));
      const totalSalary = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.salary, 0));
      // need Provider Section 
      const needProviderBizRevenue = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.needProviderBizRevenue, 0));
      const needProviderAllSpent = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.needProviderAllSpent, 0));
      // Biz Mentor Section
      // Need Totals
      const totalneedWanted = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.needWanted, 0));
      const totalneedSeen = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.needSeen, 0));
      const totalliked = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.liked, 0));

      const totalneedWantedAll = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.needWantedAll, 0));
      const totalneedSeenAll = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.needSeenAll, 0));
      const totalNeedListView = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.needListView, 0));
      const totalNeedRenewed = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.needRenewed, 0));
      const totallikedAll = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.likedAll, 0));


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
            'Member ID',  'Booking Date','ExpiringDate', 'TimeLeftTillExpiry','PersonPic', 'FirstName', 'LastName', 'Email', 'needWanted', 'needSeen', 'liked',  'MembershipType', 'VIP Membership', 'VVIPMembership',    'Response To Your Needs', 'Response To Your Needs', 'responseToYourBestOffers', 'PitchTraining', 'BusinessFundingAdvice','FreeBusinessFundingAdvice', 'VideoOfPitching', 'BusinessName', 'BusinessRevenue', 'JobPosition', 'BusinessName', 
            'BizCategory', 'Exhibited', 'Visited', 'InvestorMember', 'InvestmentBroker', 'InvestorsAdverts', 'BizMentor',
            'TotalSpent', 'OneMinPitching', 'ThreeMinPitching', 'InvestmentPitching', 'Workshop', 'Presentation', 'LastLoggedIn',
            // need Provider Section 
            'needProviderPic', 'needProviderFirstName', 'needProviderBizName', 'needProviderMembershipType', 'needProviderBizRevenue', 'needProviderAllSpent',
            // need Provider Section 
            // Need section
            'NeedImage', 'needWantedAll', 'needSeenAll', 'NeedListView', 'NeedRenewed', 'likedAll', 'NeedLink', 'NeedTitle', 'NeedCategory', 'NeedCountry', 'NeedCity', 'NeedDuration', 'NeedContent',
            // Need section
          ],
          ...filteredMembers.value.map(member => [
            member.id,  member.bookingDate, member.expiringDate, member.timeLeftTillExpiry, member.personPic, member.firstName, member.lastName, member.email, member.needWanted, member.needSeen, member.liked, member.membershipType, member.VIPMembership, member.VVIPMembership,  member.responseToYourNeeds, member.responseToYourOffers, member.responseToYourBestOffers, member.pitchTraining, member.businessFundingAdvice, member.freeBusinessFundingAdvice, member.videoOfPitching,member.businessRevenue, member.jobPosition, member.salary,
            member.businessName, member.bizCategory, member.exhibited, member.visited, member.investorMember, member.investmentBroker,
            member.investorsAdverts, member.bizMentor, member.totalSpent, member.oneMinPitching, member.threeMinPitching, member.investmentPitching, member.workshop, member.presentation, member.bookingDate,  member.lastLoggedIn,
            // need Provider Section 
            member.needProviderPic, member.needProviderFirstName, member.needProviderBizName, member.needProviderMembershipType, member.needProviderBizRevenue,  member.needProviderAllSpent, 
            // need Provider Section 
            // Need section
            member.needImage, member.needWantedAll, member.needSeenAll, member.needListView, member.needRenewed, member.likedAll, member.needLink, member.needTitle, member.needCategory, member.needCountry, member.needCity, member.needDuration, member.needContent,
            // Need section
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
                    <th>ExpiringDate</th>
                    <th>timeLeftTillExpiry</th>
                    <th>Person Pic</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>needWanted</th>
                    <th>needSeen</th>
                    <th>liked</th>
                    <th>Membership Type</th>
                    <th>VIP Membership</th>
                    <th>VVIPMembership</th>
                    <th>Response To Your Needs</th>
                    <th>Response To Your Needs</th>
                    <th>Response To Your Best Needs</th>
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

                    // need Provider Section 
                    <th>Person Pic</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Membership Type</th>
                    <th>Total Membership Spent</th>
                    <th>Total Spent</th>
                    // need Provider Section
                    // Need section

                    <th>Need Image</th>
                    <th>needWantedAll</th>
                    <th>needSeenAll</th>
                    <th>Need ListView</th>
                    <th>Need Renewed</th>
                    <th>likedAll</th>
                    <th>Need Link</th>
                    <th>Need Title</th>
                    <th>Need Category</th>
                    <th>Need Country</th>
                    <th>Need City</th>
                    <th>Need Duration</th>
                    <th>Need Content</th>
                  </tr>
                </thead>
                <tbody>
                  ${paginatedMembers.value.map((member, index) => `
                    <tr class="${index % 2 === 0 ? 'even-row' : 'odd-row'}">
                      <td>${member.id}</td>
                      <td>${member.bookingDate}</td>
                      <td>${member.expiringDate}</td>
                      <td>${member.timeLeftTillExpiry}</td>
                      <td>${member.personPic}</td>
                      <td>${member.firstName}</td>
                      <td>${member.lastName}</td>
                      <td>${member.email}</td>
                      <td>${member.needWanted}</td>
                      <td>${member.needSeen}</td>
                      <td>${member.liked}</td>
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


                      // need Provider Section 
                      <td>${member.needProviderPic}</td>
                      <td>${member.needProviderFirstName}</td>
                      <td>${member.needProviderBizName}</td>
                      <td>${member.needProviderMembershipType}</td>
                      <td>${member.needProviderBizRevenue}</td>
                      <td>${member.needProviderAllSpent}</td>
                      // need Provider Section 
                      // Need Section
                      <td>${member.needImage}</td>
                      <td>${member.needWantedAll}</td>
                      <td>${member.needSeenAll}</td>
                      <td>${member.needListView}</td>
                      <td>${member.needRenewed}</td>
                      <td>${member.likedAll}</td>
                      <td>${member.needLink}</td>
                      <td>${member.needTitle}</td>
                      <td>${member.needCategory}</td>
                      <td>${member.needCountry}</td>
                      <td>${member.needCity}</td>
                      <td>${member.needDuration}</td>
                      <td>${member.needContent}</td>
                    </tr>
                  `).join('')}
                  <tr class="TotalRow">
                    <td>Totals:</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>${totalneedWanted.value}</td>
                    <td>${totalneedSeen.value}</td>
                    <td>${totalliked.value}</td>
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
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>                   
                    <td>${total.value}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>

                    // need Provider Section 
                    <td colspan="4"></td>
                    <td>${needProviderBizRevenue.value}</td>
                    <td>${needProviderAllSpent.value}</td>
                    // need Provider Section 
                    // Need section
                    <td>${totalneedWantedAll.value}</td>
                    <td>${totalneedSeenAll.value}</td>
                    <td>${totalNeedListView.value}</td>
                    <td>${totalNeedRenewed.value}</td>
                    <td>${totallikedAll.value}</td>
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
        totalBusinessRevenue,
        totalSalary,

        // need Provider Section
        needProviderBizRevenue,
        needProviderAllSpent,
        // need Provider Section

        // Need section
        totalneedWanted,
        totalneedSeen,
        totalliked,

        totalneedWantedAll,
        totalneedSeenAll,
        totalNeedListView,
        totalNeedRenewed,
        totallikedAll,


        close,
        create,
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
  .NeedImageCol,
  .needProviderPicCol {
  Border-left: 2px red solid;
  }
  .NeedContentCol {
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
    align-items: top;
    text-align: top;
  }
  .TitleRow .BookingDateCol,
  .TitleRow .ExpiringDateCol,
  .TitleRow .TimeLeftTillExpiryCol {
    border-top: 3px solid red;
  }
  .BookingDateCol {
    border-left: 3px solid red; 
  }
  .TimeLeftTillExpiryCol {
    border-right: 3px solid red; 
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
  .purple{
    color: rgb(206, 6, 251);
    font-weight: bold;
  }
  .DataRow {
    cursor: pointer;
  }
  .DataRow.selected {
    border-top: 3px solid red;
    border-bottom: 3px solid red;
  }
  .sponsorshipPartnershipTitleCol {
    Border-left: 3px rgb(24, 30, 203) solid;
  }
  .TitleRow .sponsorshipPartnershipTitleCol,
  .TitleRow .sponsorshipPartnershipSeenCol,
  .TitleRow .sponsorshipPartnershipListViewCol,
  .TitleRow .CostCol {
    border-top: 3px rgb(24, 30, 203) solid;
  }
  .CostCol {
  Border-right: 3px rgb(24, 30, 203) solid;
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
    height: 30px;
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

  }
  


</style>


