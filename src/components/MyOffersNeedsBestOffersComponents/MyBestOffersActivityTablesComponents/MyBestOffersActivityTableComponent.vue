<template>
  <IonGrid>
    <p class="TitleP">Track your bestOffer, activities, click, views, reaction and edits</p>

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
          <IonCol class="bestOfferWantedCol purple" @click="sortMembers('bestOfferWanted')">Best Offer Wanted<IonIcon :icon="sortIcon('bestOfferWanted')" class="sort-icon" /></IonCol>
          <IonCol class="bestOfferSeenCol purple" @click="sortMembers('bestOfferSeen')">Best Offer Seen<IonIcon :icon="sortIcon('bestOfferSeen')" class="sort-icon" /></IonCol>
          <IonCol class="likedCol purple" @click="sortMembers('liked')">Best Offer Liked<IonIcon :icon="sortIcon('liked')" class="sort-icon" /></IonCol>

          <IonCol class="MembershipTypeCol" @click="sortMembers('membershipType')">Membership Type <IonIcon :icon="sortIcon('membershipType')" class="sort-icon" /></IonCol>
          <IonCol class="VIPMembershipCol" @click="sortMembers('VIPMembership')">VIP Membership <IonIcon :icon="sortIcon('VIPMembership')" class="sort-icon" /></IonCol>
          <IonCol class="VVIPMembershipCol" @click="sortMembers('VVIPMembership')">VVIP Membership <IonIcon :icon="sortIcon('VVIPMembership')" class="sort-icon" /></IonCol>

          <IonCol class="responseToYourNeedsCol purple" @click="sortMembers('responseToYourNeeds')">Response To His/Her Needs <IonIcon :icon="sortIcon('responseToYourNeeds')" class="sort-icon" /></IonCol>
          <IonCol class="responseToYourOffersCol purple" @click="sortMembers('responseToYourOffers')">Response To His/Her Offers <IonIcon :icon="sortIcon('responseToYourOffers')" class="sort-icon" /></IonCol>
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
          <!-- bestOffer Data -->
          <IonCol class="bestOfferImageCol" @click="sortMembers('bestOfferImage')">bestOfferImage <IonIcon :icon="sortIcon('bestOfferImage')" class="sort-icon" /></IonCol>
          <IonCol class="bestOfferWantedAllCol" @click="sortMembers('bestOfferWantedAll')">bestOffer Wanted All<IonIcon :icon="sortIcon('bestOfferWantedAll')" class="sort-icon" /></IonCol>
          <IonCol class="bestOfferSeenAllCol" @click="sortMembers('bestOfferSeenAll')">bestOffer Seen All <IonIcon :icon="sortIcon('bestOfferSeenAll')" class="sort-icon" /></IonCol>
          <IonCol class="bestOfferListViewCol" @click="sortMembers('bestOfferListView')">bestOfferListView <IonIcon :icon="sortIcon('bestOfferListView')" class="sort-icon" /></IonCol>
          <IonCol class="bestOfferRenewedCol" @click="sortMembers('bestOfferRenewed')">bestOfferRenewed <IonIcon :icon="sortIcon('bestOfferRenewed')" class="sort-icon" /></IonCol>
          <IonCol class="likedAllCol" @click="sortMembers('likedAll')">Liked All <IonIcon :icon="sortIcon('likedAll')" class="sort-icon" /></IonCol>
          <IonCol class="bestOfferLinkCol" @click="sortMembers('bestOfferLink')">bestOfferLink <IonIcon :icon="sortIcon('bestOfferLink')" class="sort-icon" /></IonCol>
          <IonCol class="bestOfferTitleCol" @click="sortMembers('bestOfferTitle')">bestOfferTitle <IonIcon :icon="sortIcon('bestOfferTitle')" class="sort-icon" /></IonCol>
          <IonCol class="bestOfferCategoryCol" @click="sortMembers('bestOfferCategory')">bestOfferCategory <IonIcon :icon="sortIcon('bestOfferCategory')" class="sort-icon" /></IonCol>
          <IonCol class="bestOfferCountryCol" @click="sortMembers('bestOfferCountry')">bestOfferCountry <IonIcon :icon="sortIcon('bestOfferCountry')" class="sort-icon" /></IonCol>
          <IonCol class="bestOfferCityCol" @click="sortMembers('bestOfferCity')">bestOfferCity <IonIcon :icon="sortIcon('bestOfferCity')" class="sort-icon" /></IonCol>
          <IonCol class="bestOfferDurationCol" @click="sortMembers('bestOfferDuration')">bestOfferDuration <IonIcon :icon="sortIcon('bestOfferDuration')" class="sort-icon" /></IonCol>
          <IonCol class="bestOfferContentCol" @click="sortMembers('bestOfferContent')">bestOfferContent <IonIcon :icon="sortIcon('bestOfferContent')" class="sort-icon" /></IonCol>
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
          <IonCol class="bestOfferWantedCol">{{ member.bestOfferWanted }}</IonCol>
          <IonCol class="bestOfferSeenCol">{{ member.bestOfferSeen }}</IonCol>
          <IonCol class="likedCol">{{ member.liked }}</IonCol>

          <IonCol class="MembershipTypeCol">{{ member.membershipType }}</IonCol>
          <IonCol class="VIPMembershipCol">{{ member.VIPMembership }}</IonCol>
          <IonCol class="VVIPMembershipCol">{{ member.VVIPMembership }}</IonCol>

          <IonCol class="responseToYourNeedsCol">{{ member.responseToYourNeeds}}</IonCol>
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
          <!-- bestOffer Data -->
          <IonCol class="bestOfferImageCol">{{ member.bestOfferImage }}</IonCol>
          <IonCol class="bestOfferWantedAllCol">{{ member.bestOfferWantedAll }}</IonCol>
          <IonCol class="bestOfferSeenAllCol">{{ member.bestOfferSeenAll }}</IonCol>
          <IonCol class="bestOfferListViewCol">{{ member.bestOfferListView }}</IonCol>
          <IonCol class="bestOfferRenewedCol">{{ member.bestOfferRenewed }}</IonCol>
          <IonCol class="likedAllCol">{{ member.likedAll }}</IonCol>
          <IonCol class="bestOfferLinkCol">{{ member.bestOfferLink }}</IonCol>
          <IonCol class="bestOfferTitleCol">{{ member.bestOfferTitle }}</IonCol>
          <IonCol class="bestOfferCategoryCol">{{ member.bestOfferCategory }}</IonCol>
          <IonCol class="bestOfferCountryCol">{{ member.bestOfferCountry }}</IonCol>
          <IonCol class="bestOfferCityCol">{{ member.bestOfferCity }}</IonCol>
          <IonCol class="bestOfferDurationCol">{{ member.bestOfferDuration }}</IonCol>
          <IonCol class="bestOfferContentCol">{{ member.bestOfferContent }}</IonCol>
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

          <IonCol class="bestOfferWantedCol">{{ totalbestOfferWanted }}</IonCol>
          <IonCol class="bestOfferSeenCol">{{ totalbestOfferSeen }}</IonCol>
          <IonCol class="likedCol">{{ totalliked }}</IonCol>
          <IonCol class="MembershipTypeCol"></IonCol>
          <IonCol class="VIPMembershipCol"></IonCol>
          <IonCol class="VVIPMembershipCol"></IonCol>
          
          <IonCol class="responseToYourNeedsCol"></IonCol>
          <IonCol class="responseToYourOffersCol"></IonCol>
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
          <!-- bestOffer Data -->
          <IonCol class="bestOfferImageCol"></IonCol>
          <IonCol class="bestOfferWantedAllCol">{{ totalbestOfferWantedAll }}</IonCol>
          <IonCol class="bestOfferSeenAllCol">{{ totalbestOfferSeenAll }}</IonCol>
          <IonCol class="bestOfferListViewCol">{{ totalbestOfferListView }}</IonCol>
          <IonCol class="bestOfferRenewedCol">{{ totalbestOfferRenewed }}</IonCol>
          <IonCol class="likedAllCol">{{ totallikedAll }}</IonCol>
          <IonCol class="bestOfferLinkCol"></IonCol>
          <IonCol class="bestOfferTitleCol"></IonCol>
          <IonCol class="bestOfferCategoryCol"></IonCol>
          <IonCol class="bestOfferCountryCol"></IonCol>
          <IonCol class="bestOfferCityCol"></IonCol>
          <IonCol class="bestOfferDurationCol"></IonCol>
          <IonCol class="bestOfferContentCol"></IonCol>
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
    </IonRow>

  </IonGrid>
</template>






<script lang="ts">
  import { defineComponent, ref, computed, watch } from 'vue';
  import { IonIcon, IonGrid, IonRow, IonCol, IonButton, IonInput } from '@ionic/vue';
  import { create, close, arrowDownOutline, arrowUpOutline, arrowBackCircle } from 'ionicons/icons';

  interface Member {
    id: number;
    bookingDate: string;
    expiringDate: string;
    timeLeftTillExpiry: string;
    personPic: string;
    firstName: string;
    lastName: string;
    email: string;
    bestOfferWanted: number;
    bestOfferSeen: number;
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
    // bestOfferDetails section
    bestOfferImage: string; // URL or path to the image
    bestOfferWantedAll: number;
    bestOfferSeenAll: number;
    bestOfferListView: number;
    bestOfferRenewed: number;
    likedAll: number;
    bestOfferLink: string;
    bestOfferTitle: string;
    bestOfferCategory: string;
    bestOfferCountry: string;
    bestOfferCity: string;
    bestOfferDuration: string;
    bestOfferContent: string;

  }

  export default defineComponent({
    name: 'MyBestOffersActivityTableComponent',
    components: { IonIcon, IonGrid, IonRow, IonCol, IonButton, IonInput },
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
          bestOfferWanted: 100,
          bestOfferSeen: 200,
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
          // bestOfferDetails section
          bestOfferImage: 'https://example.com/image.jpg',
          bestOfferWantedAll: 100,
          bestOfferSeenAll: 200,
          bestOfferListView: 300,
          bestOfferRenewed: 400,
          likedAll: 500,
          bestOfferLink: 'https://example.com/bestOffer',
          bestOfferTitle: 'Amazing bestOffer',
          bestOfferCategory: 'Real Estate',
          bestOfferCountry: 'USA',
          bestOfferCity: 'New York',
          bestOfferDuration: '1 Year',
          bestOfferContent: 'This is a great bestOffer that you do not want to miss.',
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
          bestOfferWanted: 150,
          bestOfferSeen: 250,
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
          // bestOfferDetails section
          bestOfferImage: 'https://example.com/image1.jpg',
          bestOfferWantedAll: 150,
          bestOfferSeenAll: 250,
          bestOfferListView: 350,
          bestOfferRenewed: 450,
          likedAll: 550,
          bestOfferLink: 'https://example.com/bestOffer1',
          bestOfferTitle: 'Exclusive bestOffer',
          bestOfferCategory: 'Technology',
          bestOfferCountry: 'Canada',
          bestOfferCity: 'Toronto',
          bestOfferDuration: '6 Months',
          bestOfferContent: 'An exclusive bestOffer for tech enthusiasts looking to invest in cutting-edge startups.',

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
          bestOfferWanted: 200,
          bestOfferSeen: 300,
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
          // bestOfferDetails section
          bestOfferImage: 'https://example.com/image2.jpg',
          bestOfferWantedAll: 200,
          bestOfferSeenAll: 300,
          bestOfferListView: 400,
          bestOfferRenewed: 500,
          likedAll: 600,
          bestOfferLink: 'https://example.com/bestOffer2',
          bestOfferTitle: 'Premium bestOffer',
          bestOfferCategory: 'Healthcare',
          bestOfferCountry: 'UK',
          bestOfferCity: 'London',
          bestOfferDuration: '2 Years',
          bestOfferContent: 'A premium bestOffer in the healthcare sector, perfect for investors looking to support innovative health solutions.',

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

      // bestOffer Totals
      const totalbestOfferWanted = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.bestOfferWanted, 0));
      const totalbestOfferSeen = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.bestOfferSeen, 0));
      const totalliked = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.liked, 0));

      const totalbestOfferWantedAll = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.bestOfferWantedAll, 0));
      const totalbestOfferSeenAll = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.bestOfferSeenAll, 0));
      const totalbestOfferListView = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.bestOfferListView, 0));
      const totalbestOfferRenewed = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.bestOfferRenewed, 0));
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
            'Member ID',  'Booking Date','ExpiringDate', 'TimeLeftTillExpiry','PersonPic', 'FirstName', 'LastName', 'Email', 'bestOfferWanted', 'bestOfferSeen', 'liked',  'MembershipType', 'VIP Membership', 'VVIPMembership',    'responseToYourNeeds', 'responseToYourOffers', 'responseToYourBestOffers', 'PitchTraining', 'BusinessFundingAdvice','FreeBusinessFundingAdvice', 'VideoOfPitching', 'BusinessName', 'BusinessRevenue', 'JobPosition', 'BusinessName', 
            'BizCategory', 'Exhibited', 'Visited', 'InvestorMember', 'InvestmentBroker', 'InvestorsAdverts', 'BizMentor',
            'TotalSpent', 'OneMinPitching', 'ThreeMinPitching', 'InvestmentPitching', 'Workshop', 'Presentation', 'LastLoggedIn',
            // bestOffer section
            'bestOfferImage', 'bestOfferWantedAll', 'bestOfferSeenAll', 'bestOfferListView', 'bestOfferRenewed', 'likedAll', 'bestOfferLink', 'bestOfferTitle', 'bestOfferCategory', 'bestOfferCountry', 'bestOfferCity', 'bestOfferDuration', 'bestOfferContent',
            // bestOffer section
          ],
          ...filteredMembers.value.map(member => [
            member.id,  member.bookingDate, member.expiringDate, member.timeLeftTillExpiry, member.personPic, member.firstName, member.lastName, member.email, member.bestOfferWanted, member.bestOfferSeen, member.liked, member.membershipType, member.VIPMembership, member.VVIPMembership,  member.responseToYourNeeds, member.responseToYourOffers, member.responseToYourBestOffers, member.pitchTraining, member.businessFundingAdvice, member.freeBusinessFundingAdvice, member.videoOfPitching,member.businessRevenue, member.jobPosition, member.salary,
            member.businessName, member.bizCategory, member.exhibited, member.visited, member.investorMember, member.investmentBroker,
            member.investorsAdverts, member.bizMentor, member.totalSpent, member.oneMinPitching, member.threeMinPitching, member.investmentPitching, member.workshop, member.presentation, member.bookingDate,  member.lastLoggedIn,
            // bestOffer section
            member.bestOfferImage, member.bestOfferWantedAll, member.bestOfferSeenAll, member.bestOfferListView, member.bestOfferRenewed, member.likedAll, member.bestOfferLink, member.bestOfferTitle, member.bestOfferCategory, member.bestOfferCountry, member.bestOfferCity, member.bestOfferDuration, member.bestOfferContent,
            // bestOffer section
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
                    <th>bestOfferWanted</th>
                    <th>bestOfferSeen</th>
                    <th>liked</th>
                    <th>Membership Type</th>
                    <th>VIP Membership</th>
                    <th>VVIPMembership</th>
                    <th>Response To Your bestOffers</th>
                    <th>Response To Your bestOffers</th>
                    <th>Response To Your Best bestOffers</th>
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

                    // bestOffer section

                    <th>bestOffer Image</th>
                    <th>bestOfferWantedAll</th>
                    <th>bestOfferSeenAll</th>
                    <th>bestOffer ListView</th>
                    <th>bestOffer Renewed</th>
                    <th>likedAll</th>
                    <th>bestOffer Link</th>
                    <th>bestOffer Title</th>
                    <th>bestOffer Category</th>
                    <th>bestOffer Country</th>
                    <th>bestOffer City</th>
                    <th>bestOffer Duration</th>
                    <th>bestOffer Content</th>
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
                      <td>${member.bestOfferWanted}</td>
                      <td>${member.bestOfferSeen}</td>
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

                      // bestOffer Section
                      <td>${member.bestOfferImage}</td>
                      <td>${member.bestOfferWantedAll}</td>
                      <td>${member.bestOfferSeenAll}</td>
                      <td>${member.bestOfferListView}</td>
                      <td>${member.bestOfferRenewed}</td>
                      <td>${member.likedAll}</td>
                      <td>${member.bestOfferLink}</td>
                      <td>${member.bestOfferTitle}</td>
                      <td>${member.bestOfferCategory}</td>
                      <td>${member.bestOfferCountry}</td>
                      <td>${member.bestOfferCity}</td>
                      <td>${member.bestOfferDuration}</td>
                      <td>${member.bestOfferContent}</td>
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
                    <td>${totalbestOfferWanted.value}</td>
                    <td>${totalbestOfferSeen.value}</td>
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
                    // bestOffer section
                    <td>${totalbestOfferWantedAll.value}</td>
                    <td>${totalbestOfferSeenAll.value}</td>
                    <td>${totalbestOfferListView.value}</td>
                    <td>${totalbestOfferRenewed.value}</td>
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

        // bestOffer section
        totalbestOfferWanted,
        totalbestOfferSeen,
        totalliked,

        totalbestOfferWantedAll,
        totalbestOfferSeenAll,
        totalbestOfferListView,
        totalbestOfferRenewed,
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
  .bestOfferImageCol {
  Border-left: 2px red solid;
}
.bestOfferContentCol {
  Border-right: 2px red solid;
}
.TitleRow .bestOfferImageCol,
.TitleRow .bestOfferWantedAllCol,
.TitleRow .bestOfferSeenAllCol,
.TitleRow .bestOfferListViewCol,
.TitleRow .bestOfferRenewedCol,
.TitleRow .likedAllCol,
.TitleRow .bestOfferLinkCol,
.TitleRow .bestOfferTitleCol,
.TitleRow .bestOfferCategoryCol,
.TitleRow .bestOfferCountryCol,
.TitleRow .bestOfferCityCol,
.TitleRow .bestOfferDurationCol,
.TitleRow .bestOfferContentCol {
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
    min-width: 5500px;
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


