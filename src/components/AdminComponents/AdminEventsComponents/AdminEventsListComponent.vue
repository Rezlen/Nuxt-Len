<template>
  <IonGrid>

    <IonRow class="ButtonRow">
      <IonButton @click="resetSorting">RESET</IonButton>
      <IonButton @click="exportTable">EXPORT</IonButton>
      <IonButton @click="printTable">PRINT</IonButton>
      <IonInput class="search" v-model="searchQuery" placeholder="Search..." @input="searchTickets"></IonInput>
      <IonButton class="arrowBackCircle" fill="clear" title="Duplicate" @click="scrollToLeft"> 
        <IonIcon slot="icon-only" size="large" :icon="arrowBackCircle"></IonIcon>
      </IonButton>    
    </IonRow>

      <!-- TitleRow with sorting functionality and icons -->
    <IonRow class="ContainerRow" ref="scrollableContainer">

      <IonRow class="TitleRow"  >
        <IonCol class="TicketIDCol" @click="sortTickets('id')">
          TicketID
          <IonIcon :icon="sortIcon('id')" class="sort-icon" />
        </IonCol>
        <IonCol class="TicketTitleCol" @click="sortTickets('title')">
          TicketTitle
          <IonIcon :icon="sortIcon('title')" class="sort-icon" />
        </IonCol>
        <IonCol class="TicketPriceCol" @click="sortTickets('price')">
          Price
          <IonIcon :icon="sortIcon('price')" class="sort-icon" />
        </IonCol>
        <IonCol class="ActionCol">
          Actions
        </IonCol>
      </IonRow>

      <!-- Data rows -->
      <IonRow  v-for="ticket in paginatedTickets" :key="ticket.id" class="DataRow" :class="{ selected: selectedRow === ticket.id }" @click="selectRow(ticket.id)" >        
        <IonCol class="TicketIDCol">{{ ticket.id }}</IonCol>
        <IonCol class="TicketTitleCol">{{ ticket.title }}</IonCol>
        <IonCol class="TicketPriceCol">{{ ticket.price }}</IonCol>
        <IonCol class="ActionCol">
          <IonButton class="ActionCol" fill="clear" title="Close">
            <IonButton class="test" fill="clear" title="Duplicate"> <IonIcon slot="icon-only" size="small" :icon="duplicate"></IonIcon></IonButton>
            <IonButton class="test" fill="clear" title="Edit"> <IonIcon slot="icon-only" size="small" :icon="create"></IonIcon></IonButton>
            <IonButton class="test" fill="clear" title="Hide This Event" > <IonIcon slot="icon-only" size="small" :icon="ban"></IonIcon></IonButton>
            <IonButton class="test" fill="clear" title="Delete This Event" > <IonIcon slot="icon-only" size="small" :icon="trash"></IonIcon></IonButton>
          </IonButton>
        </IonCol>
      </IonRow>

      <!-- Total row -->
      <IonRow class="TotalRow">
        <IonCol class="TicketIDCol">Totals:</IonCol>
        <IonCol class="TicketTitleCol"></IonCol>
        <IonCol class="TicketPriceCol">{{ total }}</IonCol>
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

export default defineComponent({
  name: 'AdminEventsListComponent',
  components: {
    IonIcon,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonInput,
  },
  setup() {
    const tickets = ref([
      { id: 3, title: 'Another Title', price: 4500000000 },
      { id: 2, title: 'Example Title', price: 150 },
      { id: 1, title: 'Titles', price: 300 },
      // Add more dummy data as needed to test pagination
    ]);

    const sortKey = ref<keyof Ticket | null>(null);
    const sortAsc = ref(true);
       // making the selected row distinguishable
    const selectedRow = ref<number | null>(null);
    // Search Filed
    const searchQuery = ref<string>('');
    const filteredTickets = ref(tickets.value);

    /**
     * Sorts the tickets based on the provided key. 
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
        return null;
      };


    //  * Resets the sorting to the original state (default order).
    const resetSorting = () => {
      sortKey.value = null;
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
        ['TicketID', 'TicketTitle', 'Price'],
        ...paginatedTickets.value.map(ticket => [ticket.id, ticket.title, ticket.price]),
        ['Totals:', '', total.value]
      ].map(e => e.join(",")).join("\n");

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'bookings.csv';
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
                  <th>TicketID</th>
                  <th>TicketTitle</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                ${paginatedTickets.value.map((ticket, index) => `
                  <tr class="${index % 2 === 0 ? 'even-row' : 'odd-row'}">
                    <td>${ticket.id}</td>
                    <td>${ticket.title}</td>
                    <td>${ticket.price}</td>
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
      close,
      paginatedTickets,
      sortTickets,
      sortIcon,
      resetSorting,
      exportTable,
      printTable,
      total,
      currentPage,
      totalPages,
      prevPage,
      nextPage,
      selectedRow,
      selectRow,
      searchQuery,
      searchTickets,
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
    width: 3000px;
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

  .TicketIDCol, .TicketTitleCol, .TicketPriceCol, .ExhibitionSpotNoCol, .ExhibitionSpotColorCol, .PersonPicCol, .FirstNameCol, .LastNameCol, .MembershipTypeCol, .AgeCol, .GenderCol, .BusinessNameCol, .BizCategoryCol, .ExhibitedCol, .VisitedCol, .PeopleSatisfiedNeedsCol, .PeopleRequestedOffersCol, .InvestorsAdvertsCol, .BizMentorCol, .TotalSpentCol, .MobileNoCol, .EmailCol, .BizCountryCol, .BizCityCol, .JoinedCol, .LastLoggedInCol, .ActionCol {
    border-right: 1px solid lightgray;
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
  }

  .ActionCol {
    overflow-x: visible;
    margin:0;
    padding:0;
  }
  .test{
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

  }





</style>