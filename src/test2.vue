<template>
  <IonGrid>

    <IonRow class="ButtonRow">
      <IonButton @click="resetSorting">RESET</IonButton>
      <IonButton @click="exportTable">EXPORT</IonButton>
      <IonButton @click="printTable">PRINT</IonButton>
      <IonInput class="search" v-model="searchQuery" placeholder="Search..." @input="searchTickets"></IonInput>
      <IonButton class="arrowBackCircle" fill="clear" title="Scroll to left" @click="scrollToLeft"> 
        <IonIcon slot="icon-only" size="large" :icon="arrowBackCircle"></IonIcon>
      </IonButton>
    </IonRow>

    <IonRow class="ContainerRow" ref="scrollableContainer">
      <!-- TitleRow with sorting functionality and icons -->
      <IonRow class="TitleRow">
        <!-- Columns with sorting functionality -->
        <IonCol class="TicketIDCol" @click="sortTickets('id')">Ticket ID <IonIcon :icon="sortIcon('id')" class="sort-icon" /></IonCol>
        <!-- Add more columns here as needed -->
        <IonCol class="ActionCol">Actions</IonCol>
      </IonRow>

      <!-- Data rows -->
      <IonRow v-for="ticket in paginatedTickets" :key="ticket.id" class="DataRow" :class="{ selected: selectedRow === ticket.id }" @click="selectRow(ticket.id)">
        <IonCol class="TicketIDCol">{{ ticket.id }}</IonCol>
        <!-- Add more data columns here as needed -->
        <IonCol class="ActionCol">
          <IonButton class="ActionCol" fill="clear" title="Close">
            <IonIcon slot="icon-only" size="small" :icon="close"></IonIcon>
          </IonButton>
        </IonCol>
      </IonRow>

      <!-- Total row -->
      <IonRow class="TotalRow">
        <IonCol class="TicketIDCol">Totals:</IonCol>
        <!-- Add more total columns here as needed -->
        <IonCol class="TotalSpentCol">{{ total }}</IonCol>
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
  title: string;
  price: number;
  spotNo: number;
  spotColor: string;
  personPic: string;
  firstName: string;
  lastName: string;
  membershipType: string;
  age: number;
  gender: string;
  businessName: string;
  bizCategory: string;
  exhibited: number;
  visited: number;
  peopleSatisfiedNeeds: number;
  peopleRequestedOffers: number;
  investorsAdverts: number;
  bizMentor: string;
  totalSpent: number;
  mobileNo: string;
  email: string;
  bizCountry: string;
  bizCity: string;
  joined: string;
  lastLoggedIn: string;
}

export default defineComponent({
  name: 'AdminEventsBookingsComponent',
  components: { IonIcon, IonGrid, IonRow, IonCol, IonButton, IonInput },
  setup() {
    const tickets = ref<Ticket[]>([
      // Add ticket data here
    ]);

    const sortKey = ref<keyof Ticket | null>(null);
    const sortAsc = ref(true);
    const selectedRow = ref<number | null>(null);
    const searchQuery = ref<string>('');
    const filteredTickets = ref(tickets.value);
    const scrollableContainer = ref<HTMLDivElement | null>(null);

    const scrollToLeft = () => {
      if (scrollableContainer.value) {
        scrollableContainer.value.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      }
    };

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

    const resetSorting = () => {
      sortKey.value = null;
      sortAsc.value = true;
    };

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

    const paginatedTickets = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      return sortedTickets.value.slice(start, start + itemsPerPage);
    });

    const totalPages = computed(() => Math.ceil(filteredTickets.value.length / itemsPerPage));

    const total = computed(() => filteredTickets.value.reduce((sum, ticket) => sum + ticket.totalSpent, 0));

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value -= 1;
      }
    };

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value += 1;
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
      total,
      close,
      arrowBackCircle,
      scrollToLeft,
      scrollableContainer,
    };
  }
});
</script>
