<template>
  <IonGrid>
    <p class="TitleP">History Of Your Investment Applications</p>

    <IonRow class="ButtonRow">
      <IonButton fill="clear"  @click="resetSorting">RESET</IonButton>
      <IonButton fill="clear" @click="exportTable">EXPORT</IonButton>
      <IonButton fill="clear" @click="printTable">PRINT</IonButton>
      <IonInput class="search" v-model="searchQuery" placeholder="Search..." @input="searchTickets"></IonInput>
      <IonButton class="arrowBackCircle" fill="clear" title="BackToLeft" @click="scrollToLeft"> 
        <IonIcon slot="icon-only" size="large" :icon="arrowBackCircle"></IonIcon>
      </IonButton>
    </IonRow>

    <IonRow class="NONscrollingRow">
    
      <IonRow class="scrollingRow" ref="scrollableContainer">
          <!-- TitleRow with sorting functionality and icons -->
          <IonRow class="TitleRow">
            
            <IonCol class="OrderIDCol" @click="sortTickets('id')">Order ID <IonIcon :icon="sortIcon('id')" class="sort-icon" /></IonCol>
            <IonCol class="BookingDateCol" @click="sortTickets('BookingDate')">Application Date <IonIcon :icon="sortIcon('BookingDate')" class="sort-icon" /></IonCol>
            <IonCol class="ApplicationIdeaBusinessNameCol " @click="sortTickets('ApplicationIdeaBusinessName')">Application Idea Business Name <IonIcon :icon="sortIcon('ApplicationIdeaBusinessName')" class="sort-icon" /></IonCol>
            <IonCol class="ApplicationIdeaBizCategoryCol " @click="sortTickets('ApplicationIdeaBizCategory')">Application Idea Biz Category <IonIcon :icon="sortIcon('ApplicationIdeaBizCategory')" class="sort-icon" /></IonCol>
            <IonCol class="EquityLoanCol " @click="sortTickets('EquityLoan')">EquityLoan <IonIcon :icon="sortIcon('EquityLoan')" class="sort-icon" /></IonCol>
            <IonCol class="DisplayedInListCol Purple" @click="sortTickets('DisplayedInList')">Displayed in a Page <IonIcon :icon="sortIcon('DisplayedInList')" class="sort-icon" /></IonCol>
            <IonCol class="OpenedSeenCol Purple" @click="sortTickets('OpenedSeen')">Opened Seen <IonIcon :icon="sortIcon('OpenedSeen')" class="sort-icon" /></IonCol>
            <IonCol class="ApplicationMessagedCol Purple" @click="sortTickets('ApplicationMessaged')">Application Messaged <IonIcon :icon="sortIcon('ApplicationMessaged')" class="sort-icon" /></IonCol>
            <IonCol class="TopCategoryOpenedYourApplicationCol" @click="sortTickets('TopCategoryOpenedYourApplication')">Top Category Opened Your Application <IonIcon :icon="sortIcon('TopCategoryOpenedYourApplication')" class="sort-icon" /></IonCol>
            <IonCol class="ProductServiceCol" @click="sortTickets('ProductService')">Product Or Service <IonIcon :icon="sortIcon('ProductService')" class="sort-icon" /></IonCol>
            <IonCol class="ApplicationAmountCol Purple" @click="sortTickets('ApplicationAmount')">Application Amount <IonIcon :icon="sortIcon('ApplicationAmount')" class="sort-icon" /></IonCol>
            <IonCol class="RevenueInThreeYearsCol Purple" @click="sortTickets('RevenueInThreeYears')">Revenue In Three Years <IonIcon :icon="sortIcon('RevenueInThreeYears')" class="sort-icon" /></IonCol>
            <IonCol class="ProfitInThreeYearsCol Purple" @click="sortTickets('ProfitInThreeYears')">Profit In Three Years <IonIcon :icon="sortIcon('ProfitInThreeYears')" class="sort-icon" /></IonCol>
            <IonCol class="ExpiringDateCol" @click="sortTickets('expiringDate')">Expiring Date <IonIcon :icon="sortIcon('expiringDate')" class="sort-icon" /></IonCol>
            <IonCol class="TimeLeftTillExpiryCol" @click="sortTickets('timeLeftTillExpiry')">Time Left Till Expiry <IonIcon :icon="sortIcon('timeLeftTillExpiry')" class="sort-icon" /></IonCol>
            
            <IonCol class="PitchTrainingCol" @click="sortTickets('pitchTraining')">Pitch Training <IonIcon :icon="sortIcon('pitchTraining')" class="sort-icon" /></IonCol>
            <IonCol class="BusinessFundingAdviceCol" @click="sortTickets('businessFundingAdvice')">Business Funding Advice <IonIcon :icon="sortIcon('businessFundingAdvice')" class="sort-icon" /></IonCol>
            <IonCol class="FreeBusinessFundingAdviceCol" @click="sortTickets('freeBusinessFundingAdvice')">FREE Business Funding Advice <IonIcon :icon="sortIcon('freeBusinessFundingAdvice')" class="sort-icon" /></IonCol>
            <IonCol class="VideoOfPitchingCol" @click="sortTickets('videoOfPitching')">Video Of My Pitching <IonIcon :icon="sortIcon('videoOfPitching')" class="sort-icon" /></IonCol>
            <IonCol class="InvestorTicketCol" @click="sortTickets('investorTicket')">Investor Ticket <IonIcon :icon="sortIcon('investorTicket')" class="sort-icon" /></IonCol>
            <IonCol class="InvestmentBrokerCol" @click="sortTickets('investmentBroker')">Investment Broker <IonIcon :icon="sortIcon('investmentBroker')" class="sort-icon" /></IonCol>
            <IonCol class="InvestorsAdvertsCol " @click="sortTickets('investorsAdverts')">Investors Adverts <IonIcon :icon="sortIcon('investorsAdverts')" class="sort-icon" /></IonCol>
            <IonCol class="BizMentorCol" @click="sortTickets('bizMentor')">BizMentor <IonIcon :icon="sortIcon('bizMentor')" class="sort-icon" /></IonCol>
            <IonCol class="TotalSpentCol" @click="sortTickets('totalSpent')">TotalSpent (Remove it) <IonIcon :icon="sortIcon('totalSpent')" class="sort-icon" /></IonCol>
            <IonCol class="OneMinPitchingCol" @click="sortTickets('oneMinPitching')">1 Min Pitching <IonIcon :icon="sortIcon('oneMinPitching')" class="sort-icon" /></IonCol>
            <IonCol class="ThreeMinPitchingCol" @click="sortTickets('threeMinPitching')">3 Min Pitching <IonIcon :icon="sortIcon('threeMinPitching')" class="sort-icon" /></IonCol>
            <IonCol class="InvestmentPitchingCol" @click="sortTickets('investmentPitching')">Investment Pitching <IonIcon :icon="sortIcon('investmentPitching')" class="sort-icon" /></IonCol>
            <IonCol class="WorkshopCol " @click="sortTickets('workshop')">Workshop <IonIcon :icon="sortIcon('workshop')" class="sort-icon" /></IonCol>
            <IonCol class="PresentationCol" @click="sortTickets('presentation')"> Presentation <IonIcon :icon="sortIcon('presentation')" class="sort-icon" /></IonCol>
            
            
            <IonCol class="LastLoggedInCol" @click="sortTickets('lastLoggedIn')">LastLoggedIn <IonIcon :icon="sortIcon('lastLoggedIn')" class="sort-icon" /></IonCol>
            <IonCol class="ActionCol">Hide The Application</IonCol>
          </IonRow>

          <!-- Data rows -->
          <IonRow v-for="ticket in paginatedTickets" :key="ticket.id" class="DataRow" :class="{ selected: selectedRow === ticket.id }" @click="selectRow(ticket.id)">
            <IonCol class="OrderIDCol">{{ ticket.id }}</IonCol>
            <IonCol class="BookingDateCol">{{ ticket.BookingDate }}</IonCol>
            <IonCol class="ApplicationIdeaBusinessNameCol">{{ ticket.ApplicationIdeaBusinessName}}</IonCol>
            <IonCol class="ApplicationIdeaBizCategoryCol">{{ ticket.ApplicationIdeaBizCategory}}</IonCol>
            <IonCol class="EquityLoanCol">{{ ticket.EquityLoan }}</IonCol>
            <IonCol class="DisplayedInListCol">{{ ticket.DisplayedInList }}</IonCol>
            <IonCol class="OpenedSeenCol">{{ ticket.OpenedSeen }}</IonCol>
            <IonCol class="ApplicationMessagedCol">{{ ticket.ApplicationMessaged }}</IonCol>
            <IonCol class="TopCategoryOpenedYourApplicationCol">{{ ticket.TopCategoryOpenedYourApplication }}</IonCol>
            <IonCol class="ProductServiceCol">{{ ticket.ProductService }}</IonCol>
            <IonCol class="ApplicationAmountCol">{{ ticket.ApplicationAmount }}</IonCol>
            <IonCol class="RevenueInThreeYearsCol">{{ ticket.RevenueInThreeYears }}</IonCol>
            <IonCol class="ProfitInThreeYearsCol">{{ ticket.ProfitInThreeYears }}</IonCol>
            <IonCol class="ExpiringDateCol">{{ ticket.expiringDate }}</IonCol>
            <IonCol class="TimeLeftTillExpiryCol">{{ ticket.timeLeftTillExpiry}}</IonCol>
            
            <IonCol class="PitchTrainingCol">{{ ticket.pitchTraining }}</IonCol>
            <IonCol class="BusinessFundingAdviceCol">{{ ticket.businessFundingAdvice }}</IonCol>
            <IonCol class="FreeBusinessFundingAdviceCol">{{ ticket.freeBusinessFundingAdvice }}</IonCol>
            <IonCol class="VideoOfPitchingCol">{{ ticket.videoOfPitching }}</IonCol>

            
            <IonCol class="InvestorTicketCol">{{ ticket.investorTicket }}</IonCol>
            <IonCol class="investmentBrokerCol">{{ ticket.investmentBroker }}</IonCol>
            <IonCol class="InvestorsAdvertsCol">{{ ticket.investorsAdverts }}</IonCol>
            <IonCol class="BizMentorCol">{{ ticket.bizMentor }}</IonCol>
            <IonCol class="TotalSpentCol">{{ ticket.totalSpent }}</IonCol>
            <IonCol class="OneMinPitchingCol">{{ ticket.oneMinPitching }}</IonCol>
            <IonCol class="ThreeMinPitchingCol">{{ ticket.threeMinPitching }}</IonCol>
            <IonCol class="InvestmentPitchingCol">{{ ticket.investmentPitching }}</IonCol>
            <IonCol class="WorkshopCol">{{ ticket.workshop }}</IonCol>
            <IonCol class="PresentationCol">{{ ticket.presentation }}</IonCol>


            <IonCol class="LastLoggedInCol">{{ ticket.lastLoggedIn }}</IonCol>
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
            <IonCol class="ApplicationIdeaBusinessNameCol"></IonCol>
            <IonCol class="ApplicationIdeaBizCategoryCol"></IonCol>
            <IonCol class="EquityLoanCol"></IonCol>
            <IonCol class="DisplayedInListCol"></IonCol>
            <IonCol class="OpenedSeenCol"></IonCol>
            <IonCol class="ApplicationMessagedCol"></IonCol>
            <IonCol class="TopCategoryOpenedYourApplicationCol"></IonCol>
            <IonCol class="ProductServiceCol"></IonCol>
            <IonCol class="ApplicationAmountCol"></IonCol>
            <IonCol class="RevenueInThreeYearsCol"></IonCol>
            <IonCol class="ProfitInThreeYearsCol"></IonCol>
            <IonCol class="expiringDateCol"></IonCol>
            <IonCol class="TimeLeftTillExpiryCol"></IonCol>
            <IonCol class="PitchTrainingCol"></IonCol>
            <IonCol class="BusinessFundingAdviceCol"></IonCol>
            <IonCol class="FreeBusinessFundingAdviceCol"></IonCol>
            <IonCol class="VideoOfPitchingCol"></IonCol>
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

  interface Ticket {
    id: number;
    BookingDate: string;
    ApplicationIdeaBusinessName: string;
    ApplicationIdeaBizCategory: string;
    EquityLoan: string;
    DisplayedInList: number;
    OpenedSeen: number;
    ApplicationMessaged: number;
    TopCategoryOpenedYourApplication: string;
    ProductService: string;
    ApplicationAmount: number;
    RevenueInThreeYears: number;
    ProfitInThreeYears: number;
    expiringDate: string;
    timeLeftTillExpiry: string;
    pitchTraining: number;
    businessFundingAdvice: number;
    freeBusinessFundingAdvice: number;
    videoOfPitching: number;
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
    name: 'MyOffersActivityTableComponent',
    components: { IonIcon, IonGrid, IonRow, IonCol, IonButton, IonInput },
    setup() {
      const tickets = ref<Ticket[]>([
        {
          id: 3,
          BookingDate: '2023-01-01T12:00:00',
          ApplicationIdeaBusinessName: 'New Startup3',
          ApplicationIdeaBizCategory: 'Tech',
          EquityLoan: 'Equity',
          DisplayedInList: 22,
          OpenedSeen: 43,
          ApplicationMessaged: 30,
          TopCategoryOpenedYourApplication: 'Biz mentors', // Added TopCategoryOpenedYourApplication value
          ProductService: 'JohnBusiness',
          ApplicationAmount: 11,
          RevenueInThreeYears: 30,
          ProfitInThreeYears: 30,
          expiringDate: '2023-01-01T12:00:00',
          timeLeftTillExpiry: 'MonthsDaysHoursMinSeconds',
          pitchTraining: 30,
          businessFundingAdvice: 34,
          freeBusinessFundingAdvice: 55,
          videoOfPitching: 55,
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
          BookingDate: '2023-01-01T12:00:00',
          ApplicationIdeaBusinessName: 'New Startup',
          ApplicationIdeaBizCategory: 'Finance',
          EquityLoan: 'Loan',
          DisplayedInList: 32,
          OpenedSeen: 2,
          ApplicationMessaged: 30,
          TopCategoryOpenedYourApplication: 'Biz mentors', // Added TopCategoryOpenedYourApplication value
          ProductService: 'AliceBusiness',
          ApplicationAmount: 345,
          RevenueInThreeYears: 30,
          ProfitInThreeYears: 30,
          expiringDate: '2023-01-01T12:00:00',
          timeLeftTillExpiry: 'MonthsDaysHoursMinSeconds',
          pitchTraining: 28,
          businessFundingAdvice: 33,
          freeBusinessFundingAdvice: 33,
          videoOfPitching: 55,
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
          BookingDate: '2023-01-01T12:00:00',
          ApplicationIdeaBusinessName: 'New Startup6',
          ApplicationIdeaBizCategory: 'Tech',
          EquityLoan: 'Loan',
          DisplayedInList: 11,
          OpenedSeen: 7,
          ApplicationMessaged: 30,
          TopCategoryOpenedYourApplication: 'Biz mentors', // Added TopCategoryOpenedYourApplication value
          ProductService: 'BobBusiness',
          ApplicationAmount: 76,
          RevenueInThreeYears: 30,
          ProfitInThreeYears: 30,
          expiringDate: '2023-01-01T12:00:00',
          timeLeftTillExpiry: 'MonthsDaysHoursMinSeconds',
          pitchTraining: 35,
          businessFundingAdvice: 33,
          freeBusinessFundingAdvice: 33,
          videoOfPitching: 55,
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

      const sortKey = ref<keyof Ticket | null>(null);
      const sortAsc = ref(true);
      // making the selected row distinguishable

      const selectedRow = ref<number | null>(null);
      // Search Filed

      const searchQuery = ref<string>('');
      const filteredTickets = ref(tickets.value);

      // back button does not wor, fix itk
      const scrollableContainer = ref<HTMLDivElement | null>(null); // Ref for the scrollable container

      const scrollToLeft = () => {
          if (scrollableContainer.value) {
            scrollableContainer.value.scrollLeft = 0;
          }
        };

      // back button does not work


      const sortTickets = (key: keyof Ticket) => {
        if (sortKey.value === key) {
          sortAsc.value = !sortAsc.value;
        } else {
          sortKey.value = key;
          sortAsc.value = true;
        }
      };

      const sortIcon = (key: keyof Ticket) => {
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

      
      //  * Computes the sorted tickets based on the current sortKey and sort order.
      const sortedTickets = computed(() => {
        if (!sortKey.value) return filteredTickets.value;

        return [...filteredTickets.value].sort((a, b) => {
          if (a[sortKey.value!] < b[sortKey.value!]) return sortAsc.value ? -1 : 1;
          if (a[sortKey.value!] > b[sortKey.value!]) return sortAsc.value ? 1 : -1;
          return 0;
        });
      });

      const itemsPerPage = 20;
      const currentPage = ref(1);

      //  * Computes the paginated tickets for the current page.
      const paginatedTickets = computed(() => {
        const start = (currentPage.value - 1) * itemsPerPage;
        return sortedTickets.value.slice(start, start + itemsPerPage);
      });

      //  * Computes the total number of pages based on the number of tickets and items per page.
      const totalPages = computed(() => Math.ceil(filteredTickets.value.length / itemsPerPage));

      const total = computed(() => filteredTickets.value.reduce((sum, ticket) => sum + ticket.totalSpent, 0));

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
            'Ticket ID',  'BookingDate','ApplicationIdeaBusinessName', 'ApplicationIdeaBizCategory', 'EquityLoan',  'DisplayedInList', 'Opened Seen', 'ApplicationMessaged', 'TopCategoryOpenedYourApplication',  'ProductService', 
            'ApplicationAmount', 'RevenueInThreeYears', 'ProfitInThreeYears', 'ExpiringDate', 'TimeLeftTillExpiry', 'PitchTraining', 'BusinessFundingAdvice','FreeBusinessFundingAdvice', 'VideoOfPitching', 'InvestorTicket', 'InvestmentBroker', 'InvestorsAdverts', 'BizMentor',
            'TotalSpent', 'OneMinPitching', 'ThreeMinPitching', 'InvestmentPitching', 'Workshop', 'Presentation', 'LastLoggedIn'
          ],
          ...filteredTickets.value.map(ticket => [
            ticket.id,  ticket.BookingDate, ticket.ApplicationIdeaBusinessName, ticket.ApplicationIdeaBizCategory, ticket.EquityLoan, ticket.DisplayedInList, ticket.OpenedSeen, ticket.ApplicationMessaged, ticket.TopCategoryOpenedYourApplication,  ticket.ProductService, ticket.ApplicationAmount, ticket.RevenueInThreeYears, ticket.ProfitInThreeYears, ticket.expiringDate, ticket.timeLeftTillExpiry, ticket.pitchTraining, ticket.businessFundingAdvice, ticket.freeBusinessFundingAdvice, ticket.videoOfPitching,
            ticket.investorTicket, ticket.investmentBroker,
            ticket.investorsAdverts, ticket.bizMentor, ticket.totalSpent, ticket.oneMinPitching, ticket.threeMinPitching, ticket.investmentPitching, ticket.workshop, ticket.presentation, ticket.BookingDate,  ticket.lastLoggedIn
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
                    <th>Ticket ID</th>
                    <th>BookingDate</th>
                    <th>ApplicationIdeaBusinessName</th>
                    <th>ApplicationIdeaBizCategory</th>
                    <th>EquityLoan</th>
                    <th>DisplayedInAPage</th>
                    <th>Opened Seen</th>
                    <th>ApplicationMessaged</th>
                    <th>TopCategoryOpenedYourApplication</th>
                    <th>ProductService</th>
                    <th>ApplicationAmount</th>
                    <th>RevenueInThreeYears</th>
                    <th>ProfitInThreeYears</th>
                    <th>ExpiringDate</th>
                    <th>timeLeftTillExpiry</th>
                    <th>PitchTraining</th>
                    <th>Business Funding Advice</th>
                    <th>Free Business Funding Advice</th>
                    <th>Video Of Pitching</th>
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
                  ${paginatedTickets.value.map((ticket, index) => `
                    <tr class="${index % 2 === 0 ? 'even-row' : 'odd-row'}">
                      <td>${ticket.id}</td>
                      <td>${ticket.BookingDate}</td>
                      <td>${ticket.ApplicationIdeaBusinessName}</td>
                      <td>${ticket.ApplicationIdeaBizCategory}</td>
                      <td>${ticket.EquityLoan}</td>
                      <td>${ticket.DisplayedInList}</td>
                      <td>${ticket.OpenedSeen}</td>
                      <td>${ticket.ApplicationMessaged}</td>
                      <td>${ticket.TopCategoryOpenedYourApplication}</td>
                      <td>${ticket.ProductService}</td>
                      <td>${ticket.ApplicationAmount}</td>
                      <td>${ticket.RevenueInThreeYears}</td>
                      <td>${ticket.ProfitInThreeYears}</td>
                      <td>${ticket.expiringDate}</td>
                      <td>${ticket.timeLeftTillExpiry}</td>
                      <td>${ticket.pitchTraining}</td>
                      <td>${ticket.businessFundingAdvice}</td>
                      <td>${ticket.freeBusinessFundingAdvice}</td>
                      <td>${ticket.videoOfPitching}</td>
                      <td>${ticket.investorTicket}</td>
                      <td>${ticket.investmentBroker}</td>
                      <td>${ticket.investorsAdverts}</td>
                      <td>${ticket.bizMentor}</td>
                      <td>${ticket.totalSpent}</td>
                      <td>${ticket.oneMinPitching}</td>
                      <td>${ticket.threeMinPitching}</td>
                      <td>${ticket.investmentPitching}</td>
                      <td>${ticket.workshop}</td>
                      <td>${ticket.presentation}</td>
                      <td>${ticket.lastLoggedIn}</td>
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
      const searchTickets = () => {
        if (searchQuery.value.trim() === '') {
          filteredTickets.value = tickets.value;
        } else {
          const query = searchQuery.value.trim().toLowerCase();
          filteredTickets.value = tickets.value.filter(ticket => 
            Object.values(ticket).some(val => 
              val.toString().toLowerCase().includes(query)
            )
          );
        }
      };

      watch(searchQuery, searchTickets);

      return {
        tickets,
        sortKey,
        sortAsc,
        sortTickets,
        sortIcon,
        resetSorting,
        selectRow,
        selectedRow,
        searchQuery,
        searchTickets,
        paginatedTickets,
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
  .arrowBackCircle {
    position: fixed;
    top: 55;
    left: 90;
    right: 0;
    z-index: 1;
  }
  .TitleRow {
    font-weight: bold;
    cursor: pointer;
    height: 50px;
    align-items: top;
  }
  .Purple{
    color: rgb(206, 6, 251);
    font-weight: bold;
  }
  .NONscrollingRow {
    overflow-x: auto;
  }
  .scrollingRow {
    min-width: 3500px;
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
    .ContainerRow {
      width: 3200px;
    }
    .TitleRow, .DataRow, .TotalRow {
      display: flex;
      flex-wrap: wrap;
    }
    ion-col {
      max-width: 100px;
    }
  }
  


</style>


