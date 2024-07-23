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
    </IonRow>

      <!-- TitleRow with sorting functionality and icons -->
    <IonRow class="ContainerRow" ref="scrollableContainer">

      <IonRow class="TitleRow"  >
        <IonCol class="EventIDCol" @click="sortEvents('eventId')">Event ID<IonIcon :icon="sortIcon('eventId')" class="sort-icon" /></IonCol>
        <IonCol class="EventDateCol" @click="sortEvents('eventDate')">Event Date<IonIcon :icon="sortIcon('eventDate')" class="sort-icon" /></IonCol>
        <IonCol class="EventTitleCol" @click="sortEvents('eventTitle')">Event Title<IonIcon :icon="sortIcon('eventTitle')" class="sort-icon" /></IonCol>
        <IonCol class="LocationNameCol" @click="sortEvents('locationName')">Location Name<IonIcon :icon="sortIcon('locationName')" class="sort-icon" /></IonCol>
        <IonCol class="FullAddressCol" @click="sortEvents('fullAddress')">Full Address<IonIcon :icon="sortIcon('fullAddress')" class="sort-icon" /></IonCol>
        <IonCol class="BookingsCol" @click="sortEvents('bookings')">Bookings<IonIcon :icon="sortIcon('bookings')" class="sort-icon" /></IonCol>
        <IonCol class="VisitorsCol" @click="sortEvents('visitors')">Visitors<IonIcon :icon="sortIcon('visitors')" class="sort-icon" /></IonCol>
        <IonCol class="ExhibitorsCol" @click="sortEvents('exhibitors')">Exhibitors<IonIcon :icon="sortIcon('exhibitors')" class="sort-icon" /></IonCol>
        <IonCol class="AllIncomeCol" @click="sortEvents('allIncome')">All Income<IonIcon :icon="sortIcon('allIncome')" class="sort-icon" /></IonCol>
        <IonCol class="OneMinPitchersCol" @click="sortEvents('oneMinPitchers')">1MinPitchers<IonIcon :icon="sortIcon('oneMinPitchers')" class="sort-icon" /></IonCol>
        <IonCol class="ThreeMinPitchersCol" @click="sortEvents('threeMinPitchers')">3MinPitchers<IonIcon :icon="sortIcon('threeMinPitchers')" class="sort-icon" /></IonCol>
        <IonCol class="InvestmentPitchersCol" @click="sortEvents('investmentPitchers')">Investment Pitchers<IonIcon :icon="sortIcon('investmentPitchers')" class="sort-icon" /></IonCol>
        <IonCol class="InvestorsCol" @click="sortEvents('investors')">Investors<IonIcon :icon="sortIcon('investors')" class="sort-icon" /></IonCol>
        <IonCol class="BizMentorsCol" @click="sortEvents('bizMentors')">Biz Mentors<IonIcon :icon="sortIcon('bizMentors')" class="sort-icon" /></IonCol>
        <IonCol class="CreatedDateCol" @click="sortEvents('createdDate')">CreatedDate<IonIcon :icon="sortIcon('createdDate')" class="sort-icon" /></IonCol>
        
        <IonCol class="ActionCol">
          Actions
        </IonCol>
      </IonRow>

      <!-- Data rows -->
      <IonRow  v-for="event in paginatedEvents" :key="event.eventId" class="DataRow" :class="{ selected: selectedRow === event.eventId }" @click="selectRow(event.eventId)" >        
        <IonCol class="EventIDCol">{{ event.eventId }}</IonCol>
        <IonCol class="EventDateCol">{{ event.eventDate }}</IonCol>
        <IonCol class="EventTitleCol">{{ event.eventTitle }}</IonCol>
        <IonCol class="LocationNameCol">{{ event.locationName }}</IonCol>
        <IonCol class="FullAddressCol">{{ event.fullAddress }}</IonCol>
        <IonCol class="BookingsCol">{{ event.bookings }}</IonCol>
        <IonCol class="VisitorsCol">{{ event.visitors }}</IonCol>
        <IonCol class="ExhibitorsCol">{{ event.exhibitors }}</IonCol>
        <IonCol class="AllIncomeCol">{{ event.allIncome }}</IonCol>
        <IonCol class="OneMinPitchersCol">{{ event.oneMinPitchers }}</IonCol>
        <IonCol class="ThreeMinPitchersCol">{{ event.threeMinPitchers }}</IonCol>
        <IonCol class="InvestmentPitchersCol">{{ event.investmentPitchers }}</IonCol>
        <IonCol class="InvestorsCol">{{ event.investors }}</IonCol>
        <IonCol class="BizMentorsCol">{{ event.bizMentors }}</IonCol>
        <IonCol class="CreatedDateCol">{{ event.createdDate }}</IonCol>

        <IonCol class="ActionCol">
          <IonButton class="ActionCol" fill="clear" title="Close">
            <IonButton class="icons" fill="clear" title="Duplicate"> <IonIcon slot="icon-only" size="small" :icon="duplicate"></IonIcon></IonButton>
            <IonButton class="icons" fill="clear" title="Edit"> <IonIcon slot="icon-only" size="small" :icon="create"></IonIcon></IonButton>
            <IonButton class="icons" fill="clear" title="Hide This Event" > <IonIcon slot="icon-only" size="small" :icon="ban"></IonIcon></IonButton>
            <IonButton class="icons" fill="clear" title="Delete This Event" > <IonIcon slot="icon-only" size="small" :icon="trash"></IonIcon></IonButton>
          </IonButton>
        </IonCol>
      </IonRow>

      <!-- Total row -->
      <IonRow class="TotalRow">
      <IonCol class="EventIDCol">Totals:</IonCol>
      <IonCol class="EventDateCol"></IonCol>
      <IonCol class="EventTitleCol"></IonCol>
      <IonCol class="LocationNameCol"></IonCol>
      <IonCol class="FullAddressCol"></IonCol>
      <IonCol class="BookingsCol">{{ totalBookings }}</IonCol>
      <IonCol class="VisitorsCol">{{ totalVisitors }}</IonCol>
      <IonCol class="ExhibitorsCol">{{ totalExhibitors }}</IonCol>
      <IonCol class="AllIncomeCol">{{ totalAllIncome }}</IonCol>
      <IonCol class="OneMinPitchersCol">{{ totalOneMinPitchers }}</IonCol>
      <IonCol class="ThreeMinPitchersCol">{{ totalThreeMinPitchers }}</IonCol>
      <IonCol class="InvestmentPitchersCol">{{ totalInvestmentPitchers }}</IonCol>
      <IonCol class="InvestorsCol">{{ totalInvestors }}</IonCol>
      <IonCol class="BizMentorsCol">{{ totalBizMentors }}</IonCol>
      <IonCol class="CreatedDateCol"></IonCol>

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
import { IonIcon, IonGrid, IonRow, IonCol, IonButton, IonInput } from '@ionic/vue';
import { close, arrowDownOutline, arrowUpOutline, create, trash, duplicate, ban, arrowBackCircle } from 'ionicons/icons';

interface Event {
  eventId: number;
  eventDate: string;
  eventTitle: string;
  locationName: string;
  fullAddress: string;
  bookings: number;
  visitors: number;
  exhibitors: number;
  allIncome: number;
  oneMinPitchers: number;
  threeMinPitchers: number;
  investmentPitchers: number;
  investors: number;
  bizMentors: number;
  createdDate: string;
}

export default defineComponent({
  name: 'AdminEventsListComponent',
  components: { IonIcon, IonGrid, IonRow, IonCol, IonButton, IonInput, },
  setup() {
    const events = ref<Event[]>([
      {
        eventId: 3,
        eventDate: '2023-01-01T12:00:00',
        eventTitle: 'Tech Conference',
        locationName: 'Convention Center',
        fullAddress: '123 Tech Ave, Silicon Valley, CA',
        bookings: 150,
        visitors: 500,
        exhibitors: 20,
        allIncome: 10000,
        oneMinPitchers: 5,
        threeMinPitchers: 10,
        investmentPitchers: 3,
        investors: 15,
        bizMentors: 8,
        createdDate: '2023-01-01T12:00:00',
      },
      {
        eventId: 2,
        eventDate: '2023-01-01T12:00:00',
        eventTitle: 'Tech fdf Conference',
        locationName: 'Convention rfd Center',
        fullAddress: '123 Tech Ave, dddds Silicon Valley, CA',
        bookings: 15066,
        visitors: 5006,
        exhibitors: 260,
        allIncome: 100600,
        oneMinPitchers: 56,
        threeMinPitchers: 610,
        investmentPitchers:63,
        investors: 154,
        bizMentors: 84,
        createdDate: '2023-01-01T12:00:00',
      },
      {
        eventId: 1,
        eventDate: '2023-01-01T12:00:00',
        eventTitle: 'Techeee Conference',
        locationName: 'e e     eee Convention Center',
        fullAddress: '123  khjkjh Tech Ave, Silicon Valley, CA',
        bookings: 1503,
        visitors: 5003,
        exhibitors: 203,
        allIncome: 100030,
        oneMinPitchers: 53,
        threeMinPitchers: 310,
        investmentPitchers: 33,
        investors: 153,
        bizMentors: 83,
        createdDate: '2023-01-01T12:00:00',
      },
        // Add more members as necessary
        

      ]);

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
        return null;
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
    const totalAllIncome = computed(() => filteredEvents.value.reduce((sum, event) => sum + event.allIncome, 0));
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
        ['Event ID', 'Event Date', 'Event Title', 'Location Name', 'Full Address', 'Bookings', 'Visitors', 'Exhibitors', 'All Income',
      '1MinPitchers', '3MinPitchers', 'Investment Pitchers', 'Investors', 'Biz Mentors', 'Created Date'
    ],
        ...paginatedEvents.value.map(event => [
          event.eventId, event.eventDate, event.eventTitle, event.locationName, event.fullAddress,
      event.bookings, event.visitors, event.exhibitors, event.allIncome,
      event.oneMinPitchers, event.threeMinPitchers, event.investmentPitchers, event.investors, event.bizMentors,
      event.createdDate
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
              .even-row .EventTitleCol {
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
                  <th>Event Date</th>
                  <th>Event Title</th>
                  <th>Location Name</th>
                  <th>Full Address</th>
                  <th>Bookings</th>
                  <th>Visitors</th>
                  <th>Exhibitors</th>
                  <th>All Income</th>
                  <th>1MinPitchers</th>
                  <th>3MinPitchers</th>
                  <th>Investment Pitchers</th>
                  <th>Investors</th>
                  <th>Biz Mentors</th>
                  <th>Created Date</th>
                </tr>
              </thead>
              <tbody>
                ${paginatedEvents.value.map((event, index) => `
                  <tr class="${index % 2 === 0 ? 'even-row' : 'odd-row'}">
                    <td>${event.eventId}</td>
                    <td>${event.eventDate}</td>
                    <td>${event.eventTitle}</td>
                    <td>${event.locationName}</td>
                    <td>${event.fullAddress}</td>
                    <td>${event.bookings}</td>
                    <td>${event.visitors}</td>
                    <td>${event.exhibitors}</td>
                    <td>${event.allIncome}</td>
                    <td>${event.oneMinPitchers}</td>
                    <td>${event.threeMinPitchers}</td>
                    <td>${event.investmentPitchers}</td>
                    <td>${event.investors}</td>
                    <td>${event.bizMentors}</td>
                    <td>${event.createdDate}</td>
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
                    <td>${totalAllIncome.value}</td>
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
      totalAllIncome,
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
    };
  },
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
    align-items: center;
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