<template>
  <IonGrid>
    <IonRow class="ButtonRow">
      <IonButton @click="resetSorting">RESET</IonButton>
      <IonButton @click="exportTable">EXPORT</IonButton>
      <IonButton @click="printTable">PRINT</IonButton>
      <IonInput v-model="searchQuery" placeholder="Search..." @input="searchTickets"></IonInput>
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
      <IonRow
        v-for="ticket in paginatedTickets"
        :key="ticket.id"
        class="DataRow"
        :class="{ selected: selectedRow === ticket.id }"
        @click="selectRow(ticket.id)"
      >
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
import { defineComponent, ref, computed, watch } from 'vue';
import { IonIcon, IonGrid, IonRow, IonCol, IonButton, IonInput } from '@ionic/vue';
import { close, arrowDownOutline, arrowUpOutline } from 'ionicons/icons';

export default defineComponent({
  name: 'AdminEventsBookingsComponent',
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
    ]);

    const sortKey = ref<string | null>(null);
    const sortAsc = ref(true);
    const selectedRow = ref<number | null>(null);
    const searchQuery = ref<string>('');
    const filteredTickets = ref(tickets.value);

    const sortTickets = (key: string) => {
      if (sortKey.value === key) {
        sortAsc.value = !sortAsc.value;
      } else {
        sortKey.value = key;
        sortAsc.value = true;
      }
    };

    const sortIcon = (key: string) => {
      if (sortKey.value !== key) return arrowDownOutline;
      return sortAsc.value ? arrowUpOutline : arrowDownOutline;
    };

    const resetSorting = () => {
      sortKey.value = null;
      sortAsc.value = true;
    };

    const sortedTickets = computed(() => {
      if (!sortKey.value) return filteredTickets.value;
      return [...filteredTickets.value].sort((a, b) => {
        if (a[sortKey.value as keyof typeof a] < b[sortKey.value as keyof typeof a]) return sortAsc.value ? -1 : 1;
        if (a[sortKey.value as keyof typeof a] > b[sortKey.value as keyof typeof a]) return sortAsc.value ? 1 : -1;
        return 0;
      });
    });

    const itemsPerPage = 20;
    const currentPage = ref(1);

    const paginatedTickets = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return sortedTickets.value.slice(start, end);
    });

    const totalPages = computed(() => {
      return Math.ceil(sortedTickets.value.length / itemsPerPage);
    });

    const total = computed(() => {
      return tickets.value.reduce((sum, ticket) => sum + ticket.price, 0);
    });

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    };

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

    const printTable = () => {
      const printContent = `
        <table>
          <thead>
            <tr>
              <th>TicketID</th>
              <th>TicketTitle</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            ${paginatedTickets.value.map(ticket => `
              <tr>
                <td>${ticket.id}</td>
                <td>${ticket.title}</td>
                <td>${ticket.price}</td>
              </tr>
            `).join('')}
            <tr>
              <td>Totals:</td>
              <td></td>
              <td>${total.value}</td>
            </tr>
          </tbody>
        </table>
      `;
      const printWindow = window.open('', '', 'height=600,width=800');
      if (printWindow) {
        printWindow.document.write(printContent);
        printWindow.document.close();
        printWindow.print();
      }
    };

    const selectRow = (id: number) => {
      selectedRow.value = id;
    };

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
    };
  },
});
</script>












<style scoped>
.ButtonRow {
  margin-bottom: 1em;
}

.ButtonRow IonInput {
  margin-left: 1em;
  max-width: 200px;
}

.TableContainer {
  overflow-x: auto;
}

.TitleRow,
.DataRow,
.TotalRow,
.PaginationRow {
  align-items: center;
}

.DataRow {
  cursor: pointer;
}

.DataRow.selected {
  background-color: #e0f7fa; /* Highlight color */
}

.sort-icon {
  margin-left: 0.5em;
}

.PageInfo {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
