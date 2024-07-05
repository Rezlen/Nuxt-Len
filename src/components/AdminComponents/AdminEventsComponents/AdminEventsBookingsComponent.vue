<template>
  <IonGrid>
    <IonRow class="ButtonRow">
      <IonButton @click="resetSorting">RESET</IonButton>
      <IonButton @click="exportTable">EXPORT</IonButton>
      <IonButton @click="printTable">PRINT</IonButton>
    </IonRow>

    <div class="TableContainer">
      <!-- TitleRow with sorting functionality and icons -->
      <IonRow class="TitleRow">
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
            <IonIcon slot="icon-only" size="small" :icon="close"></IonIcon>
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
    </div>

    <!-- Pagination -->
    <IonRow class="PaginationRow">
      <IonButton @click="prevPage" :disabled="currentPage === 1">Previous</IonButton>
      <IonCol class="PageInfo">Page {{ currentPage }} of {{ totalPages }}</IonCol>
      <IonButton @click="nextPage" :disabled="currentPage === totalPages">Next</IonButton>
    </IonRow>
  </IonGrid>
</template>



<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { IonIcon, IonGrid, IonRow, IonCol, IonButton } from '@ionic/vue';
import { close, arrowDownOutline, arrowUpOutline } from 'ionicons/icons';

export default defineComponent({
  name: 'AdminEventsBookingsComponent',
  components: {
    IonIcon,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
  },
  setup() {
    const tickets = ref([
      { id: 3, title: 'Another Title', price: 4500000000 },
      { id: 2, title: 'Example Title', price: 150 },
      { id: 1, title: 'Titles', price: 300 },
      // Add more dummy data as needed to test pagination
    ]);

    const sortKey = ref<string | null>(null);
    const sortAsc = ref(true);
       // making the selected row distinguishable
    const selectedRow = ref<number | null>(null);

    /**
     * Sorts the tickets based on the provided key. 
     * If the key is the same as the current sortKey, it toggles the sort order.
     * Otherwise, it sets the new key and sorts in ascending order.
     * 
     * @param key - The key to sort by (e.g., 'id', 'title', 'price')
     */
    const sortTickets = (key: string) => {
      if (sortKey.value === key) {
        sortAsc.value = !sortAsc.value;
      } else {
        sortKey.value = key;
        sortAsc.value = true;
      }
    };

    /**
     * Returns the appropriate sorting icon based on the current sortKey and sort order.
     * 
     * @param key - The key to check against the current sortKey
     * @returns The icon to display (up or down arrow)
     */
    const sortIcon = (key: string) => {
      if (sortKey.value !== key) return arrowDownOutline;
      return sortAsc.value ? arrowUpOutline : arrowDownOutline;
    };

    /**
     * Resets the sorting to the original state (default order).
     */
    const resetSorting = () => {
      sortKey.value = null;
      sortAsc.value = true;
    };

    /**
     * Computes the sorted tickets based on the current sortKey and sort order.
     */
    const sortedTickets = computed(() => {
      if (!sortKey.value) return tickets.value;
      return [...tickets.value].sort((a, b) => {
        if (a[sortKey.value as keyof typeof a] < b[sortKey.value as keyof typeof a]) return sortAsc.value ? -1 : 1;
        if (a[sortKey.value as keyof typeof a] > b[sortKey.value as keyof typeof a]) return sortAsc.value ? 1 : -1;
        return 0;
      });
    });

    const itemsPerPage = 20;
    const currentPage = ref(1);

    /**
     * Computes the paginated tickets for the current page.
     */
    const paginatedTickets = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return sortedTickets.value.slice(start, end);
    });

    /**
     * Computes the total number of pages based on the number of tickets and items per page.
     */
    const totalPages = computed(() => {
      return Math.ceil(sortedTickets.value.length / itemsPerPage);
    });

    /**
     * Computes the total price of all tickets.
     */
    const total = computed(() => {
      return tickets.value.reduce((sum, ticket) => sum + ticket.price, 0);
    });

    /**
     * Navigates to the previous page, if possible.
     */
    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };

    /**
     * Navigates to the next page, if possible.
     */
    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    };

    /**
     * Exports the table data to a CSV file.
     */
    const exportTable = () => {
      const csvContent = [
        ['TicketID', 'TicketTitle', 'Price'],
        ...paginatedTickets.value.map(ticket => [ticket.id, ticket.title, ticket.price]),
        ['Totals:', '', total.value]
      ].map(e => e.join(",")).join("\n");

      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", "tickets.csv");
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    /**
     * Prints the current page of the table.
     */
    const printTable = () => {
      const printContent = `
        <html>
          <head>
            <style>
              table {
                width: 100%;
                border-collapse: collapse;
              }
              th, td {
                border: 1px solid gray;
                padding: 10px;
                text-align: left;
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
                  <td></td>
                  <td>${total.value}</td>
                </tr>
              </tbody>
            </table>
            <div>Page ${currentPage.value} of ${totalPages.value}</div>
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

    return {
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
    };
  },
});
</script>



<style scoped>
ion-grid {
  height: 100%;
  overflow-y: auto;
  white-space: nowrap;
}

.ButtonRow {
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
}

.TableContainer {
  overflow-x: auto;
}

.TitleRow {
  font-weight: bold;
  cursor: pointer;
}

 /* making the selected row distinguishable */
.DataRow {
  cursor: pointer;
}
.DataRow.selected {
  border-top: 3px solid red;
  border-bottom: 3px solid red;
}

/* General alternating background colors for DataRow */
.DataRow:nth-child(odd) ion-col {
  background-color: #f5efef;
}

.DataRow:nth-child(even) ion-col {
  background-color: #bceea5;
}

.TotalRow {
  font-weight: bold;
}

.PaginationRow {
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.BorderedSection,
.TitleRow,
.DataRow,
.TotalRow,
.PaginationRow {
  border: 1px solid gray;
}
.TitleRow,
.DataRow,
.TotalRow {
  white-space: nowrap;
}
/* .TicketIDCol,
.TicketTitleCol,
.TicketPriceCol,
.ActionCol {

  
} */

.TicketTitleCol {
  border-right: 1px solid gray;
  background-color: aquamarine;
}
.TicketIDCol{
  width: 50px;
  background-color: red;
}
ion-col {
  max-width: 100px;
  padding: 0;
  margin: 0;
  white-space: nowrap;
  overflow-x: auto;
  align-content: center;
  height:30px;
  font-size:12px;
}
.ActionCol{
  overflow-x:visible;
}

ion-button,
ion-icon {
  padding: 0;
  margin: 0;
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
  .ButtonRow {
    flex-direction: row;
    align-items: flex-start;
  }

  .TableContainer {
    overflow-x: auto;
  }
  .TableContainer {
    width: 800px;
  }
}
</style>
