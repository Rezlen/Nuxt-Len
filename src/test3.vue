<template>
  <IonGrid>
    <p class="TitleP">History of my membership purchase and my activities during that period.</p>

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
          <!-- Membership Purchase Section -->
            <IonCol class="BookingDateCol topBorder" @click="sortMembers('bookingDate')">BookingDate <IonIcon :icon="sortIcon('bookingDate')" class="sort-icon" /></IonCol>
            <IonCol class="MembershipTypeCol topBorder" @click="sortMembers('membershipType')">Membership Type <IonIcon :icon="sortIcon('membershipType')" class="sort-icon" /></IonCol>
            <IonCol class="VIPMembershipCol topBorder" @click="sortMembers('VIPMembership')">VIP Membership <IonIcon :icon="sortIcon('VIPMembership')" class="sort-icon" /></IonCol>
            <IonCol class="VVIPMembershipCol topBorder" @click="sortMembers('VVIPMembership')">VVIP Membership <IonIcon :icon="sortIcon('VVIPMembership')" class="sort-icon" /></IonCol>
            <IonCol class="CostCol topBorder" @click="sortMembers('cost')">Cost <IonIcon :icon="sortIcon('cost')" class="sort-icon" /></IonCol>
            <IonCol class="ExpiringDateCol topBorder" @click="sortMembers('expiringDate')">Expiring Date <IonIcon :icon="sortIcon('expiringDate')" class="sort-icon" /></IonCol>
            <IonCol class="TimeLeftTillExpiryCol topBorder" @click="sortMembers('timeLeftTillExpiry')">Time Left Till Expiry <IonIcon :icon="sortIcon('timeLeftTillExpiry')" class="sort-icon" /></IonCol>
          <!-- Membership Purchase Section -->
            <IonCol class="ResponseToYourNeedsCol green" @click="sortMembers('responseToYourNeeds')">Response To Your Needs <IonIcon :icon="sortIcon('responseToYourNeeds')" class="sort-icon" /></IonCol>
            <IonCol class="ResponseToYourOffersCol green" @click="sortMembers('responseToYourOffers')">Response To Your Offers <IonIcon :icon="sortIcon('responseToYourOffers')" class="sort-icon" /></IonCol>
            <IonCol class="ResponseToYourBestOffersCol green" @click="sortMembers('responseToYourBestOffers')">Response To Your Best Offers <IonIcon :icon="sortIcon('responseToYourBestOffers')" class="sort-icon" /></IonCol>
            <IonCol class="PitchTrainingCol" @click="sortMembers('pitchTraining')">Pitch Training <IonIcon :icon="sortIcon('pitchTraining')" class="sort-icon" /></IonCol>
            <IonCol class="BusinessFundingAdviceCol" @click="sortMembers('businessFundingAdvice')">Business Funding Advice <IonIcon :icon="sortIcon('businessFundingAdvice')" class="sort-icon" /></IonCol>
            <IonCol class="FreeBusinessFundingAdviceCol" @click="sortMembers('freeBusinessFundingAdvice')">FREE Business Funding Advice <IonIcon :icon="sortIcon('freeBusinessFundingAdvice')" class="sort-icon" /></IonCol>
            <IonCol class="VideoOfPitchingCol" @click="sortMembers('videoOfPitching')">Video Of My Pitching <IonIcon :icon="sortIcon('videoOfPitching')" class="sort-icon" /></IonCol>

            <IonCol class="BusinessNameCol" @click="sortMembers('businessName')">Business Name <IonIcon :icon="sortIcon('businessName')" class="sort-icon" /></IonCol>
            <IonCol class="BizCategoryCol" @click="sortMembers('bizCategory')">BizCategory <IonIcon :icon="sortIcon('bizCategory')" class="sort-icon" /></IonCol>
            <IonCol class="ExhibitedCol green" @click="sortMembers('exhibited')">Exhibited <IonIcon :icon="sortIcon('exhibited')" class="sort-icon" /></IonCol>
            <IonCol class="VisitedCol green" @click="sortMembers('visited')">Visited <IonIcon :icon="sortIcon('visited')" class="sort-icon" /></IonCol>
            <IonCol class="InvestorTicketCol" @click="sortMembers('investorTicket')">Investor Ticket <IonIcon :icon="sortIcon('investorTicket')" class="sort-icon" /></IonCol>
            <IonCol class="InvestmentBrokerCol" @click="sortMembers('investmentBroker')">Investment Broker <IonIcon :icon="sortIcon('investmentBroker')" class="sort-icon" /></IonCol>
            <IonCol class="InvestorsAdvertsCol  green" @click="sortMembers('investorsAdverts')">Investors Adverts <IonIcon :icon="sortIcon('investorsAdverts')" class="sort-icon" /></IonCol>
            <IonCol class="BizMentorCol" @click="sortMembers('bizMentor')">BizMentor <IonIcon :icon="sortIcon('bizMentor')" class="sort-icon" /></IonCol>
            <IonCol class="TotalSpentCol" @click="sortMembers('totalSpent')">TotalSpent (Remove it) <IonIcon :icon="sortIcon('totalSpent')" class="sort-icon" /></IonCol>
            <IonCol class="OneMinPitchingCol" @click="sortMembers('oneMinPitching')">1 Min Pitching <IonIcon :icon="sortIcon('oneMinPitching')" class="sort-icon" /></IonCol>
            <IonCol class="ThreeMinPitchingCol" @click="sortMembers('threeMinPitching')">3 Min Pitching <IonIcon :icon="sortIcon('threeMinPitching')" class="sort-icon" /></IonCol>
            <IonCol class="InvestmentPitchingCol green" @click="sortMembers('investmentPitching')">Investment Pitching <IonIcon :icon="sortIcon('investmentPitching')" class="sort-icon" /></IonCol>
            <IonCol class="WorkshopCol green" @click="sortMembers('workshop')">workshop <IonIcon :icon="sortIcon('workshop')" class="sort-icon" /></IonCol>
            <IonCol class="PresentationCol green" @click="sortMembers('presentation')"> Presentation <IonIcon :icon="sortIcon('presentation')" class="sort-icon" /></IonCol>
            
            
            <IonCol class="LastLoggedInCol" @click="sortMembers('lastLoggedIn')">LastLoggedIn <IonIcon :icon="sortIcon('lastLoggedIn')" class="sort-icon" /></IonCol>
            <IonCol class="ActionCol">Stop next Membership Billing</IonCol>
          </IonRow>

        
        <!-- Data rows -->
        <IonRow v-for="member in paginatedMembers" :key="member.id" class="DataRow" :class="{ selected: selectedRow === member.id }" @click="selectRow(member.id)">
          <IonCol class="OrderIDCol">{{ member.id }}</IonCol>
          <IonCol class="BookingDateCol">{{ member.bookingDate }}</IonCol>
          <!-- Membership Purchase Section -->
          <IonCol class="MembershipTypeCol">{{ member.membershipType }}</IonCol>
          <IonCol class="VIPMembershipCol">{{ member.VIPMembership }}</IonCol>
          <IonCol class="VVIPMembershipCol">{{ member.VVIPMembership }}</IonCol>
          <IonCol class="CostCol">{{ member.cost }}</IonCol>
          <IonCol class="ExpiringDateCol">{{ member.expiringDate }}</IonCol>
          <IonCol class="TimeLeftTillExpiryCol">{{ member.timeLeftTillExpiry}}</IonCol>
          <!-- Membership Purchase Section -->
          <IonCol class="ResponseToYourNeedsCol">{{ member.responseToYourNeeds}}</IonCol>
          <IonCol class="ResponseToYourOffersCol">{{ member.responseToYourOffers}}</IonCol>
          <IonCol class="ResponseToYourBestOffersCol">{{ member.responseToYourBestOffers }}</IonCol>
          <IonCol class="PitchTrainingCol">{{ member.pitchTraining }}</IonCol>
          <IonCol class="BusinessFundingAdviceCol">{{ member.businessFundingAdvice }}</IonCol>
          <IonCol class="FreeBusinessFundingAdviceCol">{{ member.freeBusinessFundingAdvice }}</IonCol>
          <IonCol class="VideoOfPitchingCol">{{ member.videoOfPitching }}</IonCol>

          <IonCol class="BusinessNameCol">{{ member.businessName }}</IonCol>
          <IonCol class="BizCategoryCol">{{ member.bizCategory }}</IonCol>
          <IonCol class="ExhibitedCol">{{ member.exhibited }}</IonCol>
          <IonCol class="VisitedCol">{{ member.visited }}</IonCol>
          <IonCol class="InvestorTicketCol">{{ member.investorTicket }}</IonCol>
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
          <!-- Membership Purchase Section -->
          <IonCol class="BookingDateCol"></IonCol>
          <IonCol class="MembershipTypeCol"></IonCol>
          <IonCol class="VIPMembershipCol"></IonCol>
          <IonCol class="VVIPMembershipCol"></IonCol>
          <IonCol class="costCol"></IonCol>
          <IonCol class="expiringDateCol"></IonCol>
          <IonCol class="TimeLeftTillExpiryCol"></IonCol>
          <!-- Membership Purchase Section -->
          <IonCol class="ResponseToYourNeedsCol"></IonCol>
          <IonCol class="ResponseToYourOffersCol"></IonCol>
          <IonCol class="ResponseToYourBestOffersCol"></IonCol>
          <IonCol class="PitchTrainingCol"></IonCol>
          <IonCol class="BusinessFundingAdviceCol"></IonCol>
          <IonCol class="FreeBusinessFundingAdviceCol"></IonCol>
          <IonCol class="VideoOfPitchingCol"></IonCol>

          <IonCol class="BusinessNameCol"></IonCol>
          <IonCol class="BizCategoryCol"></IonCol>
          <IonCol class="ExhibitedCol"></IonCol>
          <IonCol class="VisitedCol"></IonCol>
          <IonCol class="InvestorTicketCol"></IonCol>
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

  </IonGrid>
</template>






<script lang="ts">
  import { defineComponent, ref, computed, watch } from 'vue';
  import { IonIcon, IonGrid, IonRow, IonCol, IonButton, IonInput } from '@ionic/vue';
  import { close, arrowDownOutline, arrowUpOutline, arrowBackCircle } from 'ionicons/icons';

  interface Member {
    id: number;
    // Membership Purchase Section -->
    bookingDate: string;
    membershipType: string;
    VIPMembership: number;
    VVIPMembership: number;
    cost: number;
    expiringDate: string;
    timeLeftTillExpiry: string;
    // Membership Purchase Section -->

    responseToYourNeeds: number;
    responseToYourOffers: number;
    responseToYourBestOffers: number;
    pitchTraining: number;
    businessFundingAdvice: number;
    freeBusinessFundingAdvice: number;
    videoOfPitching: number;
    businessName: string;
    bizCategory: string;
    exhibited: number;
    visited: number;
    investorTicket: number;
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
    name: 'MemberMembershipOrderComponent',
    components: { IonIcon, IonGrid, IonRow, IonCol, IonButton, IonInput },
    setup() {
      const members = ref<Member[]>([
        {
          id: 3,
          // Membership Purchase Section -->
          bookingDate: '2023-01-01T12:00:00',
          membershipType: 'Gold',
          VIPMembership: 43,
          VVIPMembership: 30,
          cost: 100, // Added cost value
          expiringDate: '2023-01-01T12:00:00',
          timeLeftTillExpiry: 'MonthsDaysHoursMinSeconds',
          // Membership Purchase Section -->
          responseToYourNeeds: 54,
          responseToYourOffers: 4,
          responseToYourBestOffers: 44,
          pitchTraining: 30,
          businessFundingAdvice: 34,
          freeBusinessFundingAdvice: 55,
          videoOfPitching: 55,
          businessName: 'JohnBusiness',
          bizCategory: 'IT',
          exhibited: 30,
          visited: 30,
          investorTicket: 5,
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
          // Membership Purchase Section -->
          bookingDate: '2023-01-01T12:00:00',
          membershipType: 'Silver',
          VIPMembership: 2,
          VVIPMembership: 30,
          cost: 120, // Added cost value
          expiringDate: '2023-01-01T12:00:00',
          timeLeftTillExpiry: 'MonthsDaysHoursMinSeconds',
          // Membership Purchase Section -->
          responseToYourNeeds: 22,
          responseToYourOffers: 2,
          responseToYourBestOffers: 222,
          pitchTraining: 28,
          businessFundingAdvice: 33,
          freeBusinessFundingAdvice: 33,
          videoOfPitching: 55,
          businessName: 'AliceBusiness',
          bizCategory: 'Marketing',
          exhibited: 30,
          visited: 30,
          investorTicket: 4,
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
          // Membership Purchase Section -->
          bookingDate: '2023-01-01T12:00:00',
          membershipType: 'Platinum',
          VIPMembership: 7,
          VVIPMembership: 30,
          cost: 150, // Added cost value
          expiringDate: '2023-01-01T12:00:00',
          timeLeftTillExpiry: 'MonthsDaysHoursMinSeconds',
          // Membership Purchase Section -->
          responseToYourNeeds: 77,
          responseToYourOffers: 7,
          responseToYourBestOffers: 777,
          pitchTraining: 35,
          businessFundingAdvice: 33,
          freeBusinessFundingAdvice: 33,
          videoOfPitching: 55,
          businessName: 'BobBusiness',
          bizCategory: 'Finance',
          exhibited: 30,
          visited: 30,
          investorTicket: 6,
          investmentBroker: 4,
          investorsAdverts: 3,
          bizMentor: 30,
          totalSpent: 250,
          oneMinPitching: 344,
          threeMinPitching: 44,
          investmentPitching: 32,
          workshop: 22,
          presentation: 22,
          lastLoggedIn: '2023-08-01'
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

      //  * Computes the paginated members for the current page.
      const paginatedMembers = computed(() => {
        const start = (currentPage.value - 1) * itemsPerPage;
        return sortedMembers.value.slice(start, start + itemsPerPage);
      });

      //  * Computes the total number of pages based on the number of members and items per page.
      const totalPages = computed(() => Math.ceil(filteredMembers.value.length / itemsPerPage));

      //  * Computes the total cost of all members.
      const total = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.totalSpent, 0));

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
            'Member ID', 
            // Membership Section
            'Booking Date', 'MembershipType', 'VIP Membership', 'VVIPMembership', 'Cost', 'ExpiringDate', 'TimeLeftTillExpiry',
            // Membership Section
            
            'Response To Your Needs', 'Response To Your Offers', 'ResponseToYourBestOffers', 'PitchTraining', 'BusinessFundingAdvice', 'FreeBusinessFundingAdvice', 'VideoOfPitching', 'BusinessName', 
            'BizCategory', 'Exhibited', 'Visited', 'InvestorTicket', 'InvestmentBroker', 'InvestorsAdverts', 'BizMentor',
            'TotalSpent', 'OneMinPitching', 'ThreeMinPitching', 'InvestmentPitching', 'Workshop', 'Presentation', 'LastLoggedIn'
          ],
          ...filteredMembers.value.map(member => [
            member.id,  
            // Membership Section
            member.bookingDate, member.membershipType, member.VIPMembership, member.VVIPMembership, member.cost,  member.expiringDate, member.timeLeftTillExpiry,
            // Membership Section
            member.responseToYourNeeds, member.responseToYourOffers, member.responseToYourBestOffers, member.pitchTraining, member.businessFundingAdvice, member.freeBusinessFundingAdvice, member.videoOfPitching,
            member.businessName, member.bizCategory, member.exhibited, member.visited, member.investorTicket, member.investmentBroker,
            member.investorsAdverts, member.bizMentor, member.totalSpent, member.oneMinPitching, member.threeMinPitching, member.investmentPitching, member.workshop, member.presentation, member.bookingDate,  member.lastLoggedIn
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
                .even-row .TicketTitleCol {
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

                    <!-- Membership Section -->
                    <th>BookingDate</th>
                    <th>Membership Type</th>
                    <th>VIP Membership</th>
                    <th>VVIPMembership</th>
                    <th>Cost</th>
                    <th>ExpiringDate</th>
                    <th>timeLeftTillExpiry</th>
                    <!-- Membership Section -->

                    <th>Response To Your Needs</th>
                    <th>Response To Your Offers</th>
                    <th>Response To Your Best Offers</th>
                    <th>PitchTraining</th>
                    <th>Business Funding Advice</th>
                    <th>Free Business Funding Advice</th>
                    <th>Video Of Pitching</th>

                    <th>Business Name</th>
                    <th>Biz Category</th>
                    <th>Exhibited</th>
                    <th>Visited</th>
                    <th>Investor Ticket</th>
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

                      // Membership Section
                      <td>${member.bookingDate}</td>
                      <td>${member.membershipType}</td>
                      <td>${member.VIPMembership}</td>
                      <td>${member.VVIPMembership}</td>
                      <td>${member.cost}</td>
                      <td>${member.expiringDate}</td>
                      <td>${member.timeLeftTillExpiry}</td>
                      // Membership Section

                      <td>${member.responseToYourNeeds}</td>
                      <td>${member.responseToYourOffers}</td>
                      <td>${member.responseToYourBestOffers}</td>
                      <td>${member.pitchTraining}</td>
                      <td>${member.businessFundingAdvice}</td>
                      <td>${member.freeBusinessFundingAdvice}</td>
                      <td>${member.videoOfPitching}</td>

                      <td>${member.businessName}</td>
                      <td>${member.bizCategory}</td>
                      <td>${member.exhibited}</td>
                      <td>${member.visited}</td>
                      <td>${member.investorTicket}</td>
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
                    <td colspan="23"></td>
                    <td>${total.value}</td>
                    <td colspan="7"></td>
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
  .search{
    width: 100px;
  }
  .TitleRow {
    font-weight: bold;
    cursor: pointer;
    height: 50px;
    align-items: top;
  }
  
  .BookingDateCol {
    border-left: 3px solid red;
  }
  .TimeLeftTillExpiryCol {
    border-right: 3px solid red;
  }
  .topBorder {
    border-top: 3px solid red;
  }
  .NONscrollingRow {
    overflow-x: auto;
    /* border: 4px solid rgb(26, 185, 18); */
  }
  .scrollingRow {
    min-width: 3500px;
    /* border: 1px solid red; */
    flex-direction: column;
  }
  .green{
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


