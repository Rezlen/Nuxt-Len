<template>
  <IonGrid>
    <p class="tableTitle">You Can Track Your LEN Share Purchase Offer Here:</p>
    <IonRow class="ButtonRow">
      <IonButton @click="resetSorting">RESET</IonButton>
      <IonButton @click="exportTable">EXPORT</IonButton>
      <IonButton @click="printTable">PRINT</IonButton>
      <IonInput class="search" v-model="searchQuery" placeholder="Search..." @input="searchEvents"></IonInput>

      <IonButton class="arrowBackCircle" fill="clear" title="BackToLeft" @click="scrollToLeft"> 
        <IonIcon slot="icon-only" size="large" :icon="arrowBackCircle"></IonIcon>
      </IonButton> 
    </IonRow>

      <!-- TitleRow with sorting functionality and icons -->
    <IonRow class="NONscrollingRow">
      
      <IonRow class="scrollingRow" ref="scrollableContainer">

        <IonRow class="TitleRow"  >
          <IonCol class="EventIDCol" @click="sortEvents('eventId')"> ID/No.<IonIcon :icon="sortIcon('eventId')" class="sort-icon" /></IonCol>
          <IonCol class="dateCol" @click="sortEvents('date')">Date<IonIcon :icon="sortIcon('date')" class="sort-icon" /></IonCol>
          <IonCol class="discountRewardPercentageCol" @click="sortEvents('sharePercentageOffer')">Share Percentage Offer<IonIcon :icon="sortIcon('sharePercentageOffer')" class="sort-icon" /></IonCol>
          <IonCol class="actionsCol" @click="sortEvents('description')">Description<IonIcon :icon="sortIcon('description')" class="sort-icon" /></IonCol>
          <IonCol class="numberOfActionsCol" @click="sortEvents('suggestedAmount')">Suggested Amount <IonIcon :icon="sortIcon('suggestedAmount')" class="sort-icon" /></IonCol>
          <IonCol class="approvedNotApprovedDateCol" @click="sortEvents('approvedNotApprovedDate')">Approved NotApproved<IonIcon :icon="sortIcon('approvedNotApprovedDate')" class="sort-icon" /></IonCol>
          
        </IonRow>

        <!-- Data rows -->
        <IonRow  v-for="event in paginatedEvents" :key="event.eventId" class="DataRow" :class="{ selected: selectedRow === event.eventId }" @click="selectRow(event.eventId)" >        
          <IonCol class="EventIDCol">{{ event.eventId }}</IonCol>
          <IonCol class="dateCol">{{ event.date }}</IonCol>
          <IonCol class="discountRewardPercentageCol">{{ event.sharePercentageOffer }}</IonCol>
          <IonCol class="actionsCol">{{ event.description }}</IonCol>
          <IonCol class="numberOfActionsCol">{{ event.suggestedAmount }}</IonCol>
          <IonCol class="approvedNotApprovedDateCol">{{ event.approvedNotApprovedDate }}</IonCol>

        </IonRow>

        <!-- Total row -->
        <IonRow class="TotalRow"> 
          <IonCol class="EventIDCol">Totals:</IonCol>
          <IonCol class="dateCol"></IonCol>
          <IonCol class="discountRewardPercentageCol"></IonCol>
          <IonCol class="actionsCol"></IonCol>
          <IonCol class="numberOfActionsCol"></IonCol>
          <IonCol class="approvedNotApprovedDateCol"></IonCol>

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
import { defineComponent, ref, computed, watch  } from 'vue';
import { IonIcon, IonGrid, IonRow, IonCol, IonButton, IonInput, IonCheckbox } from '@ionic/vue';
import { close, arrowDownOutline, arrowUpOutline, create, trash, duplicate, ban, arrowBackCircle } from 'ionicons/icons';

interface Event {
  eventId: number;
  date: string;
  sharePercentageOffer: string;
  description: string;
  suggestedAmount: number;
  approvedNotApprovedDate: number;

}

export default defineComponent({
  name: 'MySharesTableComponent',
  components: { IonIcon, IonGrid, IonRow, IonCol, IonButton, IonInput, IonCheckbox },
  setup() {
    const events = ref<Event[]>([
      {
        eventId: 3,
        date: '2023-01-01T12:00:00',
        sharePercentageOffer: 'Tech Conference',
        description: 'Convention Center',
        suggestedAmount: 150,
        approvedNotApprovedDate: 500,

      },
      {
        eventId: 2,
        date: '2023-01-01T12:00:00',
        sharePercentageOffer: 'Tech fdf Conference',
        description: 'Convention rfd Center',
        suggestedAmount: 15066,
        approvedNotApprovedDate: 5006,

      },
      {
        eventId: 1,
        date: '2023-01-01T12:00:00',
        sharePercentageOffer: 'Techeee Conference',
        description: 'e e     eee Convention Center',
        suggestedAmount: 1503,
        approvedNotApprovedDate: 5003,

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
        ['Event ID', 'date', 'sharePercentageOffer', 'description', 'suggestedAmount', 'approvedNotApprovedDate' ],
        ...paginatedEvents.value.map(event => [
          event.eventId, event.date, event.sharePercentageOffer, event.description, event.suggestedAmount, event.approvedNotApprovedDate, 
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
              .even-row .discountRewardPercentageCol {
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
                  <th>date</th>
                  <th>sharePercentageOffer</th>
                  <th>description</th>
                  <th>suggestedAmount</th>
                  <th>approvedNotApprovedDate</th>

                </tr>
              </thead>
              <tbody>
                ${paginatedEvents.value.map((event, index) => `
                  <tr class="${index % 2 === 0 ? 'even-row' : 'odd-row'}">
                    <td>${event.eventId}</td>
                    <td>${event.date}</td>
                    <td>${event.sharePercentageOffer}</td>
                    <td>${event.description}</td>
                    <td></td>
                    <td></td>

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
  .tableTitle {
    text-align: center;
    font-weight: bold;
    font-size: 35px;
  }
  .search{
    width: 100px;
  }
  .TitleRow {
    font-weight: bold;
    cursor: pointer;
    height: 60px;
    align-items: top;
  }
  .NONscrollingRow {
    overflow-x: auto;
  }
  .scrollingRow {
    /* min-width: 1150px; */
    flex-direction: column;
    width: 100%;
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
    max-width: 100px;
  }
  .dateCol {
    max-width: 150px;
  }
  .discountRewardPercentageCol {
    max-width: 100px;
  }
  .actionsCol {
    max-width: 500px;
  }
  .numberOfActionsCol {
    max-width: 150px;
  }
  .approvedNotApprovedDateCol {
    max-width: 150px;
  }

  ion-col {
    padding: 0;
    margin: 0;
    white-space: nowrap;
    overflow-x: auto;
    align-content: center;
    height: 40px;
    font-size: 13px;
    border-right: 1px solid lightgray;
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

  @media (max-width: 600px) {
    .arrowBackCircle {
      position: fixed;
      top: 55;
      left: 0;
      right: 0;
      z-index: 1;
    }
    .scrollingRow {
      min-width: 1150px;
    }
  }


</style>