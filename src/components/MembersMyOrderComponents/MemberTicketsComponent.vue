<template>
  <IonGrid>
    <p class="TitleP">List Of All My Booked Tickets</p>

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
            
            <IonCol class="TicketIDCol" @click="sortTickets('id')">Ticket ID <IonIcon :icon="sortIcon('id')" class="sort-icon" /></IonCol>
            <IonCol class="BookingDateCol" @click="sortTickets('bookingDate')">BookingDate <IonIcon :icon="sortIcon('bookingDate')" class="sort-icon" /></IonCol>
            <IonCol class="TicketTitleCol" @click="sortTickets('title')">Ticket Title <IonIcon :icon="sortIcon('title')" class="sort-icon" /></IonCol>
            <IonCol class="TicketPriceCol" @click="sortTickets('price')">Ticket Price <IonIcon :icon="sortIcon('price')" class="sort-icon" /></IonCol>
            <IonCol class="ExhibitionSpotNoCol" @click="sortTickets('spotNo')">Exhibition SpotNo <IonIcon :icon="sortIcon('spotNo')" class="sort-icon" /></IonCol>
            <IonCol class="ExhibitionSpotColorCol" @click="sortTickets('spotColor')">Exhibition SpotColor <IonIcon :icon="sortIcon('spotColor')" class="sort-icon" /></IonCol>
            <IonCol class="PersonPicCol" @click="sortTickets('personPic')">Picture <IonIcon :icon="sortIcon('personPic')" class="sort-icon" /></IonCol>
            <IonCol class="FirstNameCol" @click="sortTickets('firstName')">FirstName <IonIcon :icon="sortIcon('firstName')" class="sort-icon" /></IonCol>
            <IonCol class="LastNameCol" @click="sortTickets('lastName')">LastName <IonIcon :icon="sortIcon('lastName')" class="sort-icon" /></IonCol>
            <IonCol class="MembershipTypeCol" @click="sortTickets('membershipType')">Membership Type <IonIcon :icon="sortIcon('membershipType')" class="sort-icon" /></IonCol>
            <IonCol class="PitchTrainingCol" @click="sortTickets('pitchTraining')">Pitch Training <IonIcon :icon="sortIcon('pitchTraining')" class="sort-icon" /></IonCol>
            <IonCol class="BusinessFundingAdviceCol" @click="sortTickets('businessFundingAdvice')">Business Funding Advice <IonIcon :icon="sortIcon('businessFundingAdvice')" class="sort-icon" /></IonCol>
            <IonCol class="FreeBusinessFundingAdviceCol" @click="sortTickets('freeBusinessFundingAdvice')">FREE Business Funding Advice <IonIcon :icon="sortIcon('freeBusinessFundingAdvice')" class="sort-icon" /></IonCol>
            <IonCol class="VideoOfPitchingCol" @click="sortTickets('videoOfPitching')">Video Of My Pitching <IonIcon :icon="sortIcon('videoOfPitching')" class="sort-icon" /></IonCol>

            <IonCol class="BusinessNameCol" @click="sortTickets('businessName')">Business Name <IonIcon :icon="sortIcon('businessName')" class="sort-icon" /></IonCol>
            <IonCol class="BizCategoryCol" @click="sortTickets('bizCategory')">BizCategory <IonIcon :icon="sortIcon('bizCategory')" class="sort-icon" /></IonCol>
            <IonCol class="ExhibitedCol" @click="sortTickets('exhibited')">Exhibited <IonIcon :icon="sortIcon('exhibited')" class="sort-icon" /></IonCol>
            <IonCol class="VisitedCol" @click="sortTickets('visited')">Visited <IonIcon :icon="sortIcon('visited')" class="sort-icon" /></IonCol>
            <IonCol class="InvestorTicketCol" @click="sortTickets('investorTicket')">Investor Ticket <IonIcon :icon="sortIcon('investorTicket')" class="sort-icon" /></IonCol>
            <IonCol class="InvestmentBrokerCol" @click="sortTickets('investmentBroker')">Investment Broker <IonIcon :icon="sortIcon('investmentBroker')" class="sort-icon" /></IonCol>
            <IonCol class="InvestorsAdvertsCol" @click="sortTickets('investorsAdverts')">Investors Adverts <IonIcon :icon="sortIcon('investorsAdverts')" class="sort-icon" /></IonCol>
            <IonCol class="BizMentorCol" @click="sortTickets('bizMentor')">BizMentor <IonIcon :icon="sortIcon('bizMentor')" class="sort-icon" /></IonCol>
            <IonCol class="TotalSpentCol" @click="sortTickets('totalSpent')">TotalSpent <IonIcon :icon="sortIcon('totalSpent')" class="sort-icon" /></IonCol>
            <IonCol class="OneMinPitchingCol" @click="sortTickets('oneMinPitching')">1 Min Pitching <IonIcon :icon="sortIcon('oneMinPitching')" class="sort-icon" /></IonCol>
            <IonCol class="ThreeMinPitchingCol" @click="sortTickets('threeMinPitching')">3 Min Pitching <IonIcon :icon="sortIcon('threeMinPitching')" class="sort-icon" /></IonCol>
            <IonCol class="InvestmentPitchingCol" @click="sortTickets('investmentPitching')">Investment Pitching <IonIcon :icon="sortIcon('investmentPitching')" class="sort-icon" /></IonCol>
            <IonCol class="WorkshopCol" @click="sortTickets('workshop')">workshop <IonIcon :icon="sortIcon('workshop')" class="sort-icon" /></IonCol>
            <IonCol class="PresentationCol" @click="sortTickets('presentation')"> Presentation <IonIcon :icon="sortIcon('presentation')" class="sort-icon" /></IonCol>
            
            
            <IonCol class="LastLoggedInCol" @click="sortTickets('lastLoggedIn')">LastLoggedIn <IonIcon :icon="sortIcon('lastLoggedIn')" class="sort-icon" /></IonCol>
            <IonCol class="ActionCol">Actions</IonCol>
          </IonRow>

          <!-- Data rows -->
          <IonRow v-for="ticket in paginatedTickets" :key="ticket.id" class="DataRow" :class="{ selected: selectedRow === ticket.id }" @click="selectRow(ticket.id)">
            <IonCol class="TicketIDCol">{{ ticket.id }}</IonCol>
            <IonCol class="BookingDateCol">{{ ticket.bookingDate }}</IonCol>
            <IonCol class="TicketTitleCol">{{ ticket.title }}</IonCol>
            <IonCol class="TicketPriceCol">{{ ticket.price }}</IonCol>
            <IonCol class="ExhibitionSpotNoCol">{{ ticket.spotNo }}</IonCol>
            <IonCol class="ExhibitionSpotColorCol">{{ ticket.spotColor }}</IonCol>
            <IonCol class="PersonPicCol"><img :src="ticket.personPic" alt="Person Pic" class="person-pic"/></IonCol>
            <IonCol class="FirstNameCol">{{ ticket.firstName }}</IonCol>
            <IonCol class="LastNameCol">{{ ticket.lastName }}</IonCol>
            <IonCol class="MembershipTypeCol">{{ ticket.membershipType }}</IonCol>
            <IonCol class="PitchTrainingCol">{{ ticket.pitchTraining }}</IonCol>
            <IonCol class="BusinessFundingAdviceCol">{{ ticket.businessFundingAdvice }}</IonCol>
            <IonCol class="FreeBusinessFundingAdviceCol">{{ ticket.freeBusinessFundingAdvice }}</IonCol>
            <IonCol class="VideoOfPitchingCol">{{ ticket.videoOfPitching }}</IonCol>

            <IonCol class="BusinessNameCol">{{ ticket.businessName }}</IonCol>
            <IonCol class="BizCategoryCol">{{ ticket.bizCategory }}</IonCol>
            <IonCol class="ExhibitedCol">{{ ticket.exhibited }}</IonCol>
            <IonCol class="VisitedCol">{{ ticket.visited }}</IonCol>
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
            <IonCol class="TicketIDCol">Totals:</IonCol>
            <IonCol class="BookingDateCol"></IonCol>
            <IonCol class="TicketTitleCol"></IonCol>
            <IonCol class="TicketPriceCol"></IonCol>
            <IonCol class="ExhibitionSpotNoCol"></IonCol>
            <IonCol class="ExhibitionSpotColorCol"></IonCol>
            <IonCol class="PersonPicCol"></IonCol>
            <IonCol class="FirstNameCol"></IonCol>
            <IonCol class="LastNameCol"></IonCol>
            <IonCol class="MembershipTypeCol"></IonCol>
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

  interface Ticket {
    id: number;
    bookingDate: string;
    title: string;
    price: number;
    spotNo: number;
    spotColor: string;
    personPic: string;
    firstName: string;
    lastName: string;
    membershipType: string;
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
    name: 'MemberTicketsComponent',
    components: { IonIcon, IonGrid, IonRow, IonCol, IonButton, IonInput },
    setup() {
      const tickets = ref<Ticket[]>([
        {
          id: 3,
          bookingDate: '2023-01-01T12:00:00',
          title: 'Event A',
          price: 100, // Added price value
          spotNo: 30,
          spotColor: 'red',
          personPic: 'pic_url_a',
          firstName: 'John',
          lastName: 'Doe',
          membershipType: 'Gold',
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
          bookingDate: '2023-01-01T12:00:00',
          title: 'Event B',
          price: 120, // Added price value
          spotNo: 30,
          spotColor: 'red',
          personPic: 'pic_url_b',
          firstName: 'Alice',
          lastName: 'Smith',
          membershipType: 'Silver',
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
          bookingDate: '2023-01-01T12:00:00',
          title: 'Event C',
          price: 150, // Added price value
          spotNo: 30,
          spotColor: 'red',
          personPic: 'pic_url_c',
          firstName: 'Bob',
          lastName: 'Brown',
          membershipType: 'Platinum',
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
        sortKey.value = 'bookingDate';
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

      //  * Computes the total price of all tickets.
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
            'Ticket ID',  'Booking Date', 'Ticket Title', 'Ticket Price', 'Exhibition SpotNo', 'Exhibition SpotColor', 'PersonPic', 'FirstName', 'LastName', 'MembershipType', 'PitchTraining', 'BusinessFundingAdvice','FreeBusinessFundingAdvice', 'VideoOfPitching', 'BusinessName', 
            'BizCategory', 'Exhibited', 'Visited', 'InvestorTicket', 'InvestmentBroker', 'InvestorsAdverts', 'BizMentor',
            'TotalSpent', 'OneMinPitching', 'ThreeMinPitching', 'InvestmentPitching', 'Workshop', 'Presentation', 'LastLoggedIn'
          ],
          ...filteredTickets.value.map(ticket => [
            ticket.id,  ticket.bookingDate, ticket.title, ticket.price, ticket.spotNo, ticket.spotColor, ticket.personPic, ticket.firstName, ticket.lastName, ticket.membershipType, ticket.pitchTraining, ticket.businessFundingAdvice, ticket.freeBusinessFundingAdvice, ticket.videoOfPitching,
            ticket.businessName, ticket.bizCategory, ticket.exhibited, ticket.visited, ticket.investorTicket, ticket.investmentBroker,
            ticket.investorsAdverts, ticket.bizMentor, ticket.totalSpent, ticket.oneMinPitching, ticket.threeMinPitching, ticket.investmentPitching, ticket.workshop, ticket.presentation, ticket.bookingDate,  ticket.lastLoggedIn
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
                    <th>Ticket Title</th>
                    <th>Ticket Price</th>
                    <th>Exhibition SpotNo</th>
                    <th>Exhibition SpotColor</th>
                    <th>Person Pic</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Membership Type</th>
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
                  ${paginatedTickets.value.map((ticket, index) => `
                    <tr class="${index % 2 === 0 ? 'even-row' : 'odd-row'}">
                      <td>${ticket.id}</td>
                      <td>${ticket.bookingDate}</td>
                      <td>${ticket.title}</td>
                      <td>${ticket.price}</td>
                      <td>${ticket.spotNo}</td>
                      <td>${ticket.spotColor}</td>
                      <td>${ticket.personPic}</td>
                      <td>${ticket.firstName}</td>
                      <td>${ticket.lastName}</td>
                      <td>${ticket.membershipType}</td>
                      <td>${ticket.pitchTraining}</td>
                      <td>${ticket.businessFundingAdvice}</td>
                      <td>${ticket.freeBusinessFundingAdvice}</td>
                      <td>${ticket.videoOfPitching}</td>

                      <td>${ticket.businessName}</td>
                      <td>${ticket.bizCategory}</td>
                      <td>${ticket.exhibited}</td>
                      <td>${ticket.visited}</td>
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
                    <td colspan="17"></td>
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
  .TitleRow .BookingDateCol, 
  .TitleRow .TicketTitleCol,
  .TitleRow .TicketPriceCol,
  .TitleRow .ExhibitionSpotNoCol,
  .TitleRow .ExhibitionSpotColorCol {
    border-top: 3px solid red;
  }
  .BookingDateCol {
    border-left: 3px solid red;
  }
  .ExhibitionSpotColorCol {
    border-right: 3px solid red;
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

  .TicketIDCol {
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


