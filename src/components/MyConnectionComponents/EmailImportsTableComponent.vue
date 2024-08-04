<template>
  <IonGrid>

    <IonRow class="ButtonRow">
      <IonButton @click="resetSorting">RESET</IonButton>
      <IonButton @click="exportTable">EXPORT</IonButton>
      <IonButton @click="printTable">PRINT</IonButton>
      <IonInput class="search" v-model="searchQuery" placeholder="Search..." @input="searchEvents"></IonInput>
      <IonButton class="arrowBackCircle" fill="clear" title="Duplicate" @click="scrollToLeft"> 
        <IonIcon slot="icon-only" size="large" :icon="arrowBackCircle"></IonIcon>
      </IonButton> 
      <IonButton class="SendEmailMessageBTN" fill="clear" @click="printTable">Send Email/Message</IonButton>
    </IonRow>

      <!-- TitleRow with sorting functionality and icons -->
    <IonRow class="ContainerRow" ref="scrollableContainer">

      <IonRow class="TitleRow"  >
        <IonCol class="EventIDCol" @click="sortEvents('eventId')">Event ID<IonIcon :icon="sortIcon('eventId')" class="sort-icon" /></IonCol>
        <IonCol class="emailImportConnectionRequestDateCol" @click="sortEvents('emailImportConnectionRequestDate')">Email Import Connection Request Date<IonIcon :icon="sortIcon('emailImportConnectionRequestDate')" class="sort-icon" /></IonCol>
        <IonCol class="joinedLENConnectionRequestAcceptedDateCol" @click="sortEvents('joinedLENConnectionRequestAcceptedDate')">Joined LEN Connection Request Accepted Date<IonIcon :icon="sortIcon('joinedLENConnectionRequestAcceptedDate')" class="sort-icon" /></IonCol>
        <IonCol class="totalEmailsSentToThisEmailCol" @click="sortEvents('totalEmailsSentToThisEmail')">Total Emails Sent To This Email<IonIcon :icon="sortIcon('totalEmailsSentToThisEmail')" class="sort-icon" /></IonCol>
        <IonCol class="lastEmailSentDateCol" @click="sortEvents('lastEmailSentDate')">Last Email Sent Date<IonIcon :icon="sortIcon('lastEmailSentDate')" class="sort-icon" /></IonCol>
        <IonCol class="BookingsCol" @click="sortEvents('bookings')">Bookings<IonIcon :icon="sortIcon('bookings')" class="sort-icon" /></IonCol>
        <IonCol class="VisitorsCol" @click="sortEvents('visitors')">Visitors<IonIcon :icon="sortIcon('visitors')" class="sort-icon" /></IonCol>
        <IonCol class="ExhibitorsCol" @click="sortEvents('exhibitors')">Exhibitors<IonIcon :icon="sortIcon('exhibitors')" class="sort-icon" /></IonCol>
        <IonCol class="spentOnLENCol" @click="sortEvents('spentOnLEN')">Spent On LEN<IonIcon :icon="sortIcon('spentOnLEN')" class="sort-icon" /></IonCol>
        <IonCol class="OneMinPitchersCol" @click="sortEvents('oneMinPitchers')">1MinPitchers<IonIcon :icon="sortIcon('oneMinPitchers')" class="sort-icon" /></IonCol>
        <IonCol class="ThreeMinPitchersCol" @click="sortEvents('threeMinPitchers')">3MinPitchers<IonIcon :icon="sortIcon('threeMinPitchers')" class="sort-icon" /></IonCol>
        <IonCol class="InvestmentPitchersCol" @click="sortEvents('investmentPitchers')">Investment Pitchers<IonIcon :icon="sortIcon('investmentPitchers')" class="sort-icon" /></IonCol>
        <IonCol class="InvestorsCol" @click="sortEvents('investors')">Investors<IonIcon :icon="sortIcon('investors')" class="sort-icon" /></IonCol>
        <IonCol class="BizMentorsCol" @click="sortEvents('bizMentors')">Biz Mentors<IonIcon :icon="sortIcon('bizMentors')" class="sort-icon" /></IonCol>
        <IonCol class="yourEarnedCommissionCol" @click="sortEvents('yourEarnedCommission')">Your Earned Commission<IonIcon :icon="sortIcon('yourEarnedCommission')" class="sort-icon" /></IonCol>
        
        <IonCol class="ActionCol">
          Select To Send Email/message
        </IonCol>
      </IonRow>

      <!-- Data rows -->
      <IonRow  v-for="event in paginatedEvents" :key="event.eventId" class="DataRow" :class="{ selected: selectedRow === event.eventId }" @click="selectRow(event.eventId)" >        
        <IonCol class="EventIDCol">{{ event.eventId }}</IonCol>
        <IonCol class="emailImportConnectionRequestDateCol">{{ event.emailImportConnectionRequestDate }}</IonCol>
        <IonCol class="joinedLENConnectionRequestAcceptedDateCol">{{ event.joinedLENConnectionRequestAcceptedDate }}</IonCol>
        <IonCol class="totalEmailsSentToThisEmailCol">{{ event.totalEmailsSentToThisEmail }}</IonCol>
        <IonCol class="lastEmailSentDateCol">{{ event.lastEmailSentDate }}</IonCol>
        <IonCol class="BookingsCol">{{ event.bookings }}</IonCol>
        <IonCol class="VisitorsCol">{{ event.visitors }}</IonCol>
        <IonCol class="ExhibitorsCol">{{ event.exhibitors }}</IonCol>
        <IonCol class="spentOnLENCol">{{ event.spentOnLEN }}</IonCol>
        <IonCol class="OneMinPitchersCol">{{ event.oneMinPitchers }}</IonCol>
        <IonCol class="ThreeMinPitchersCol">{{ event.threeMinPitchers }}</IonCol>
        <IonCol class="InvestmentPitchersCol">{{ event.investmentPitchers }}</IonCol>
        <IonCol class="InvestorsCol">{{ event.investors }}</IonCol>
        <IonCol class="BizMentorsCol">{{ event.bizMentors }}</IonCol>
        <IonCol class="yourEarnedCommissionCol">{{ event.yourEarnedCommission }}</IonCol>

        <IonCol class="ActionCol">
          <IonButton class="ActionCol" fill="clear" title="Close">
            <IonCheckbox slot="start" v-model="checkboxStates.checkbox1"></IonCheckbox>
          </IonButton>
        </IonCol>
      </IonRow>

      <!-- Total row -->
      <IonRow class="TotalRow"> 
      <IonCol class="EventIDCol">Totals:</IonCol>
      <IonCol class="emailImportConnectionRequestDateCol"></IonCol>
      <IonCol class="joinedLENConnectionRequestAcceptedDateCol"></IonCol>
      <IonCol class="totalEmailsSentToThisEmailCol"></IonCol>
      <IonCol class="lastEmailSentDateCol"></IonCol>
      <IonCol class="BookingsCol">{{ totalBookings }}</IonCol>
      <IonCol class="VisitorsCol">{{ totalVisitors }}</IonCol>
      <IonCol class="ExhibitorsCol">{{ totalExhibitors }}</IonCol>
      <IonCol class="spentOnLENCol">{{ totalspentOnLEN }}</IonCol>
      <IonCol class="OneMinPitchersCol">{{ totalOneMinPitchers }}</IonCol>
      <IonCol class="ThreeMinPitchersCol">{{ totalThreeMinPitchers }}</IonCol>
      <IonCol class="InvestmentPitchersCol">{{ totalInvestmentPitchers }}</IonCol>
      <IonCol class="InvestorsCol">{{ totalInvestors }}</IonCol>
      <IonCol class="BizMentorsCol">{{ totalBizMentors }}</IonCol>
      <IonCol class="yourEarnedCommissionCol"></IonCol>

        <IonCol class="ActionCol"></IonCol>
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
import { defineComponent, ref, computed, watch  } from 'vue';
import { IonIcon, IonGrid, IonRow, IonCol, IonButton, IonInput, IonCheckbox } from '@ionic/vue';
import { close, arrowDownOutline, arrowUpOutline, create, trash, duplicate, ban, arrowBackCircle } from 'ionicons/icons';

interface Event {
  eventId: number;
  emailImportConnectionRequestDate: string;
  joinedLENConnectionRequestAcceptedDate: string;
  totalEmailsSentToThisEmail: string;
  lastEmailSentDate: string;
  bookings: number;
  visitors: number;
  exhibitors: number;
  spentOnLEN: number;
  oneMinPitchers: number;
  threeMinPitchers: number;
  investmentPitchers: number;
  investors: number;
  bizMentors: number;
  yourEarnedCommission: number;
}

export default defineComponent({
  name: 'EmailImportsTableComponent',
  components: { IonIcon, IonGrid, IonRow, IonCol, IonButton, IonInput, IonCheckbox },
  setup() {
    const events = ref<Event[]>([
      {
        eventId: 3,
        emailImportConnectionRequestDate: '2023-01-01T12:00:00',
        joinedLENConnectionRequestAcceptedDate: 'Tech Conference',
        totalEmailsSentToThisEmail: 'Convention Center',
        lastEmailSentDate: '123 Tech Ave, Silicon Valley, CA',
        bookings: 150,
        visitors: 500,
        exhibitors: 20,
        spentOnLEN: 10000,
        oneMinPitchers: 5,
        threeMinPitchers: 10,
        investmentPitchers: 3,
        investors: 15,
        bizMentors: 8,
        yourEarnedCommission: 22,
      },
      {
        eventId: 2,
        emailImportConnectionRequestDate: '2023-01-01T12:00:00',
        joinedLENConnectionRequestAcceptedDate: 'Tech fdf Conference',
        totalEmailsSentToThisEmail: 'Convention rfd Center',
        lastEmailSentDate: '123 Tech Ave, dddds Silicon Valley, CA',
        bookings: 15066,
        visitors: 5006,
        exhibitors: 260,
        spentOnLEN: 100600,
        oneMinPitchers: 56,
        threeMinPitchers: 610,
        investmentPitchers:63,
        investors: 154,
        bizMentors: 84,
        yourEarnedCommission: 3334,
      },
      {
        eventId: 1,
        emailImportConnectionRequestDate: '2023-01-01T12:00:00',
        joinedLENConnectionRequestAcceptedDate: 'Techeee Conference',
        totalEmailsSentToThisEmail: 'e e     eee Convention Center',
        lastEmailSentDate: '123  khjkjh Tech Ave, Silicon Valley, CA',
        bookings: 1503,
        visitors: 5003,
        exhibitors: 203,
        spentOnLEN: 100030,
        oneMinPitchers: 53,
        threeMinPitchers: 310,
        investmentPitchers: 33,
        investors: 153,
        bizMentors: 83,
        yourEarnedCommission: 222,
      },
        // Add more members as necessary

        

      ]);
    const checkboxStates = ref({

      checkbox1: false,
    });

    const sortKey = ref<keyof Event | null>(null);
    const sortAsc = ref(true);
       // making the selected row distinguishable
    const selectedRow = ref<number | null>(null);
    // Search Filed
    const searchQuery = ref<string>('');
    const filteredEvents = ref(events.value);

    /**
     * Sorts the events based on the provided key. 
     * If the key is the same as the current sortKey, it toggles the sort order.
     * Otherwise, it sets the new key and sorts in ascending order.
     * 
     * @param key - The key to sort by (e.g., 'id', 'title', 'price')
     */

     // back button does not wor, fix itk
      const scrollableContainer = ref<HTMLDivElement | null>(null); // Ref for the scrollable container

   const scrollToLeft = () => {
      if (scrollableContainer.value) {
        scrollableContainer.value.scrollLeft = 0;
      }
    };

// back button does not work




      const sortIcon = (key: keyof Event) => {
        if (sortKey.value === key) {
          return sortAsc.value ? arrowUpOutline : arrowDownOutline;
        }
        return undefined;
      };


    //  * Resets the sorting to the original state (default order).
    const resetSorting = () => {
      sortKey.value = null;
      sortAsc.value = true;
    };

    //  * Computes the sorted events based on the current sortKey and sort order.
    const sortEvents = (key: keyof Event) => {
      if (sortKey.value === key) {
        sortAsc.value = !sortAsc.value;
      } else {
        sortKey.value = key;
        sortAsc.value = true;
        }
      searchEvents();
    };
      const sortedEvents = computed(() => {
        if (!sortKey.value) return filteredEvents.value;

        return [...filteredEvents.value].sort((a, b) => {
          if (a[sortKey.value!] < b[sortKey.value!]) return sortAsc.value ? -1 : 1;
          if (a[sortKey.value!] > b[sortKey.value!]) return sortAsc.value ? 1 : -1;
          return 0;
        });
      });

    const itemsPerPage = 20;
    const currentPage = ref(1);

    //  * Computes the paginated events for the current page.
      const paginatedEvents = computed(() => {
        const start = (currentPage.value - 1) * itemsPerPage;
        return sortedEvents.value.slice(start, start + itemsPerPage);
      });

    //  * Computes the total number of pages based on the number of events and items per page.
    const totalPages = computed(() => Math.ceil(filteredEvents.value.length / itemsPerPage));

    //  * Computes the total price of all events.
    const totalBookings = computed(() => filteredEvents.value.reduce((sum, event) => sum + event.bookings, 0));
    const totalVisitors = computed(() => filteredEvents.value.reduce((sum, event) => sum + event.visitors, 0));
    const totalExhibitors = computed(() => filteredEvents.value.reduce((sum, event) => sum + event.exhibitors, 0));
    const totalspentOnLEN = computed(() => filteredEvents.value.reduce((sum, event) => sum + event.spentOnLEN, 0));
    const totalOneMinPitchers = computed(() => filteredEvents.value.reduce((sum, event) => sum + event.oneMinPitchers, 0));
    const totalThreeMinPitchers = computed(() => filteredEvents.value.reduce((sum, event) => sum + event.threeMinPitchers, 0));
    const totalInvestmentPitchers = computed(() => filteredEvents.value.reduce((sum, event) => sum + event.investmentPitchers, 0));
    const totalInvestors = computed(() => filteredEvents.value.reduce((sum, event) => sum + event.investors, 0));
    const totalBizMentors = computed(() => filteredEvents.value.reduce((sum, event) => sum + event.bizMentors, 0));

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
        ['Event ID', 'emailImportConnectionRequestDate', 'joinedLENConnectionRequestAcceptedDate', 'totalEmailsSentToThisEmail', 'lastEmailSentDate', 'Bookings', 'Visitors', 'Exhibitors', 'spentOnLEN',
      '1MinPitchers', '3MinPitchers', 'Investment Pitchers', 'Investors', 'Biz Mentors', 'yourEarnedCommission'
    ],
        ...paginatedEvents.value.map(event => [
          event.eventId, event.emailImportConnectionRequestDate, event.joinedLENConnectionRequestAcceptedDate, event.totalEmailsSentToThisEmail, event.lastEmailSentDate,
      event.bookings, event.visitors, event.exhibitors, event.spentOnLEN,
      event.oneMinPitchers, event.threeMinPitchers, event.investmentPitchers, event.investors, event.bizMentors,
      event.yourEarnedCommission
        ])
      ]
        .map(e => e.join(","))
        .join("\n");

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'EventsList.csv';
        link.click();
      };

    //  * Prints the current page of the table.
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
              .even-row .joinedLENConnectionRequestAcceptedDateCol {
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
                  <th>Event ID</th>
                  <th>emailImportConnectionRequestDate</th>
                  <th>joinedLENConnectionRequestAcceptedDate</th>
                  <th>totalEmailsSentToThisEmail</th>
                  <th>lastEmailSentDate</th>
                  <th>Bookings</th>
                  <th>Visitors</th>
                  <th>Exhibitors</th>
                  <th>spentOnLEN</th>
                  <th>1MinPitchers</th>
                  <th>3MinPitchers</th>
                  <th>Investment Pitchers</th>
                  <th>Investors</th>
                  <th>Biz Mentors</th>
                  <th>yourEarnedCommission</th>
                </tr>
              </thead>
              <tbody>
                ${paginatedEvents.value.map((event, index) => `
                  <tr class="${index % 2 === 0 ? 'even-row' : 'odd-row'}">
                    <td>${event.eventId}</td>
                    <td>${event.emailImportConnectionRequestDate}</td>
                    <td>${event.joinedLENConnectionRequestAcceptedDate}</td>
                    <td>${event.totalEmailsSentToThisEmail}</td>
                    <td>${event.lastEmailSentDate}</td>
                    <td>${event.bookings}</td>
                    <td>${event.visitors}</td>
                    <td>${event.exhibitors}</td>
                    <td>${event.spentOnLEN}</td>
                    <td>${event.oneMinPitchers}</td>
                    <td>${event.threeMinPitchers}</td>
                    <td>${event.investmentPitchers}</td>
                    <td>${event.investors}</td>
                    <td>${event.bizMentors}</td>
                    <td>${event.yourEarnedCommission}</td>
                  </tr>
                `).join('')}
                  <tr class="TotalRow">
                    <td>Totals:</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>${totalBookings.value}</td>
                    <td>${totalVisitors.value}</td>
                    <td>${totalExhibitors.value}</td>
                    <td>${totalspentOnLEN.value}</td>
                    <td>${totalOneMinPitchers.value}</td>
                    <td>${totalThreeMinPitchers.value}</td>
                    <td>${totalInvestmentPitchers.value}</td>
                    <td>${totalInvestors.value}</td>
                    <td>${totalBizMentors.value}</td>
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
    const searchEvents = () => {
      if (searchQuery.value.trim() === '') {
        filteredEvents.value = events.value;
      } else {
        const query = searchQuery.value.trim().toLowerCase();
        filteredEvents.value = events.value.filter(event => 
          Object.values(event).some(val => 
            val.toString().toLowerCase().includes(query)
          )
        );
      }
    };

    watch(searchQuery, searchEvents);

    return {
      events,
      sortKey,
      sortAsc,
      close,
      paginatedEvents,
      sortEvents,
      sortIcon,
      resetSorting,
      exportTable,
      printTable,
      totalBookings,
      totalVisitors,
      totalExhibitors,
      totalspentOnLEN,
      totalOneMinPitchers,
      totalThreeMinPitchers,
      totalInvestmentPitchers,
      totalInvestors,
      totalBizMentors,

      currentPage,
      totalPages,
      prevPage,
      nextPage,
      selectedRow,
      selectRow,
      searchQuery,
      searchEvents,
      create,
      trash,
      duplicate,
      ban,
      arrowBackCircle,
      scrollToLeft,
      scrollableContainer,
      checkboxStates,

    };
  },
});
</script>



<style scoped>
  /* Adjusting the length of the table here: http://localhost:8100/adminpage */
.SendEmailMessageBTN {
  background-color: rgb(6, 144, 6);
  border-radius: 5px;
  color: white;
  font-weight: bold;
}
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
    height: 60px;
    align-items: top;
  }
  .ContainerRow {
    width: 2000px;
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: scroll;

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

  .EventIDCol {
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

  @media (max-width: 600px) {
    .ContainerRow {
      width: 4000px;
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