<template>
  <IonGrid>

    <IonRow class="ButtonRow">
      <IonButton @click="resetSorting">RESET</IonButton>
      <IonButton @click="exportTable">EXPORT</IonButton>
      <IonButton @click="printTable">PRINT</IonButton>
      <IonInput v-model="searchQuery" placeholder="Search..." @input="searchTickets"></IonInput>
    </IonRow>
    <IonRow class="ContainerRow">

      <div class="TableContainer">
        <!-- TitleRow with sorting functionality and icons -->
        <IonRow class="TitleRow">
          <IonCol class="TicketIDCol" @click="sortTickets('id')">Ticket ID <IonIcon :icon="sortIcon('id')" class="sort-icon" /></IonCol>
          <IonCol class="TicketTitleCol" @click="sortTickets('title')">Ticket Title <IonIcon :icon="sortIcon('title')" class="sort-icon" /></IonCol>
          <IonCol class="PersonPicCol" @click="sortTickets('personPic')">PersonPic <IonIcon :icon="sortIcon('personPic')" class="sort-icon" /></IonCol>
          <IonCol class="FirstNameCol" @click="sortTickets('firstName')">FirstName <IonIcon :icon="sortIcon('firstName')" class="sort-icon" /></IonCol>
          <IonCol class="LastNameCol" @click="sortTickets('lastName')">LastName <IonIcon :icon="sortIcon('lastName')" class="sort-icon" /></IonCol>
          <IonCol class="MembershipTypeCol" @click="sortTickets('membershipType')">MembershipType <IonIcon :icon="sortIcon('membershipType')" class="sort-icon" /></IonCol>
          <IonCol class="AgeCol" @click="sortTickets('age')">Age <IonIcon :icon="sortIcon('age')" class="sort-icon" /></IonCol>
          <IonCol class="GenderCol" @click="sortTickets('gender')">Gender <IonIcon :icon="sortIcon('gender')" class="sort-icon" /></IonCol>
          <IonCol class="BusinessNameCol" @click="sortTickets('businessName')">BusinessName <IonIcon :icon="sortIcon('businessName')" class="sort-icon" /></IonCol>
          <IonCol class="BizCategoryCol" @click="sortTickets('bizCategory')">BizCategory <IonIcon :icon="sortIcon('bizCategory')" class="sort-icon" /></IonCol>
          <IonCol class="ExhibitedCol" @click="sortTickets('exhibited')">Exhibited <IonIcon :icon="sortIcon('exhibited')" class="sort-icon" /></IonCol>
          <IonCol class="VisitedCol" @click="sortTickets('visited')">Visited <IonIcon :icon="sortIcon('visited')" class="sort-icon" /></IonCol>
          <IonCol class="PeopleSatisfiedNeedsCol" @click="sortTickets('peopleSatisfiedNeeds')">PeopleSatisfiedNeeds <IonIcon :icon="sortIcon('peopleSatisfiedNeeds')" class="sort-icon" /></IonCol>
          <IonCol class="PeopleRequestedOffersCol" @click="sortTickets('peopleRequestedOffers')">PeopleRequestedOffers <IonIcon :icon="sortIcon('peopleRequestedOffers')" class="sort-icon" /></IonCol>
          <IonCol class="InvestorsAdvertsCol" @click="sortTickets('investorsAdverts')">InvestorsAdverts <IonIcon :icon="sortIcon('investorsAdverts')" class="sort-icon" /></IonCol>
          <IonCol class="BizMentorCol" @click="sortTickets('bizMentor')">BizMentor <IonIcon :icon="sortIcon('bizMentor')" class="sort-icon" /></IonCol>
          <IonCol class="TotalSpentCol" @click="sortTickets('totalSpent')">TotalSpent <IonIcon :icon="sortIcon('totalSpent')" class="sort-icon" /></IonCol>
          <IonCol class="MobileNoCol" @click="sortTickets('mobileNo')">MobileNo <IonIcon :icon="sortIcon('mobileNo')" class="sort-icon" /></IonCol>
          <IonCol class="EmailCol" @click="sortTickets('email')">Email <IonIcon :icon="sortIcon('email')" class="sort-icon" /></IonCol>
          <IonCol class="BizCountryCol" @click="sortTickets('bizCountry')">BizCountry <IonIcon :icon="sortIcon('bizCountry')" class="sort-icon" /></IonCol>
          <IonCol class="BizCityCol" @click="sortTickets('bizCity')">BizCity <IonIcon :icon="sortIcon('bizCity')" class="sort-icon" /></IonCol>
          <IonCol class="JoinedCol" @click="sortTickets('joined')">Joined <IonIcon :icon="sortIcon('joined')" class="sort-icon" /></IonCol>
          <IonCol class="LastLoggedInCol" @click="sortTickets('lastLoggedIn')">LastLoggedIn <IonIcon :icon="sortIcon('lastLoggedIn')" class="sort-icon" /></IonCol>
          <IonCol class="ActionCol">Actions</IonCol>
        </IonRow>

        <!-- Data rows -->
        <IonRow v-for="ticket in paginatedTickets" :key="ticket.id" class="DataRow" :class="{ selected: selectedRow === ticket.id }" @click="selectRow(ticket.id)">
          <IonCol class="TicketIDCol">{{ ticket.id }}</IonCol>
          <IonCol class="TicketTitleCol">{{ ticket.title }}</IonCol>
          <IonCol class="PersonPicCol"><img :src="ticket.personPic" alt="Person Pic" class="person-pic"/></IonCol>
          <IonCol class="FirstNameCol">{{ ticket.firstName }}</IonCol>
          <IonCol class="LastNameCol">{{ ticket.lastName }}</IonCol>
          <IonCol class="MembershipTypeCol">{{ ticket.membershipType }}</IonCol>
          <IonCol class="AgeCol">{{ ticket.age }}</IonCol>
          <IonCol class="GenderCol">{{ ticket.gender }}</IonCol>
          <IonCol class="BusinessNameCol">{{ ticket.businessName }}</IonCol>
          <IonCol class="BizCategoryCol">{{ ticket.bizCategory }}</IonCol>
          <IonCol class="ExhibitedCol">{{ ticket.exhibited }}</IonCol>
          <IonCol class="VisitedCol">{{ ticket.visited }}</IonCol>
          <IonCol class="PeopleSatisfiedNeedsCol">{{ ticket.peopleSatisfiedNeeds }}</IonCol>
          <IonCol class="PeopleRequestedOffersCol">{{ ticket.peopleRequestedOffers }}</IonCol>
          <IonCol class="InvestorsAdvertsCol">{{ ticket.investorsAdverts }}</IonCol>
          <IonCol class="BizMentorCol">{{ ticket.bizMentor }}</IonCol>
          <IonCol class="TotalSpentCol">{{ ticket.totalSpent }}</IonCol>
          <IonCol class="MobileNoCol">{{ ticket.mobileNo }}</IonCol>
          <IonCol class="EmailCol">{{ ticket.email }}</IonCol>
          <IonCol class="BizCountryCol">{{ ticket.bizCountry }}</IonCol>
          <IonCol class="BizCityCol">{{ ticket.bizCity }}</IonCol>
          <IonCol class="JoinedCol">{{ ticket.joined }}</IonCol>
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
          <IonCol class="TicketTitleCol"></IonCol>
          <IonCol class="PersonPicCol"></IonCol>
          <IonCol class="FirstNameCol"></IonCol>
          <IonCol class="LastNameCol"></IonCol>
          <IonCol class="MembershipTypeCol"></IonCol>
          <IonCol class="AgeCol"></IonCol>
          <IonCol class="GenderCol"></IonCol>
          <IonCol class="BusinessNameCol"></IonCol>
          <IonCol class="BizCategoryCol"></IonCol>
          <IonCol class="ExhibitedCol"></IonCol>
          <IonCol class="VisitedCol"></IonCol>
          <IonCol class="PeopleSatisfiedNeedsCol"></IonCol>
          <IonCol class="PeopleRequestedOffersCol"></IonCol>
          <IonCol class="InvestorsAdvertsCol"></IonCol>
          <IonCol class="BizMentorCol"></IonCol>
          <IonCol class="TotalSpentCol">{{ total }}</IonCol>
          <IonCol class="MobileNoCol"></IonCol>
          <IonCol class="EmailCol"></IonCol>
          <IonCol class="BizCountryCol"></IonCol>
          <IonCol class="BizCityCol"></IonCol>
          <IonCol class="JoinedCol"></IonCol>
          <IonCol class="LastLoggedInCol"></IonCol>
          <IonCol class="ActionCol"></IonCol>
        </IonRow>
      </div>
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
import { close, arrowDownOutline, arrowUpOutline } from 'ionicons/icons';

interface Ticket {
  id: number;
  title: string;
  price: number; // Added price field
  personPic: string;
  firstName: string;
  lastName: string;
  membershipType: string;
  age: number;
  gender: string;
  businessName: string;
  bizCategory: string;
  exhibited: boolean;
  visited: boolean;
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
      {
        id: 3,
        title: 'Event A',
        price: 100, // Added price value
        personPic: 'pic_url_a',
        firstName: 'John',
        lastName: 'Doe',
        membershipType: 'Gold',
        age: 30,
        gender: 'Male',
        businessName: 'JohnBusiness',
        bizCategory: 'IT',
        exhibited: true,
        visited: true,
        peopleSatisfiedNeeds: 5,
        peopleRequestedOffers: 3,
        investorsAdverts: 2,
        bizMentor: 'Jane Smith',
        totalSpent: 150,
        mobileNo: '1234567890',
        email: 'john.doe@example.com',
        bizCountry: 'USA',
        bizCity: 'New York',
        joined: '2023-01-01',
        lastLoggedIn: '2023-06-01'
      },
      {
        id: 2,
        title: 'Event B',
        price: 120, // Added price value
        personPic: 'pic_url_b',
        firstName: 'Alice',
        lastName: 'Smith',
        membershipType: 'Silver',
        age: 28,
        gender: 'Female',
        businessName: 'AliceBusiness',
        bizCategory: 'Marketing',
        exhibited: false,
        visited: true,
        peopleSatisfiedNeeds: 4,
        peopleRequestedOffers: 5,
        investorsAdverts: 1,
        bizMentor: 'John Doe',
        totalSpent: 200,
        mobileNo: '9876543210',
        email: 'alice.smith@example.com',
        bizCountry: 'Canada',
        bizCity: 'Toronto',
        joined: '2023-02-01',
        lastLoggedIn: '2023-07-01'
      },
      {
        id: 1,
        title: 'Event C',
        price: 150, // Added price value
        personPic: 'pic_url_c',
        firstName: 'Bob',
        lastName: 'Brown',
        membershipType: 'Platinum',
        age: 35,
        gender: 'Male',
        businessName: 'BobBusiness',
        bizCategory: 'Finance',
        exhibited: true,
        visited: false,
        peopleSatisfiedNeeds: 6,
        peopleRequestedOffers: 4,
        investorsAdverts: 3,
        bizMentor: 'Alice Smith',
        totalSpent: 250,
        mobileNo: '1122334455',
        email: 'bob.brown@example.com',
        bizCountry: 'UK',
        bizCity: 'London',
        joined: '2023-03-01',
        lastLoggedIn: '2023-08-01'
      }
    ]);

    const sortKey = ref<keyof Ticket | null>(null);
    const sortAsc = ref(true);
    const selectedRow = ref<number | null>(null);
    const searchQuery = ref<string>('');
    const filteredTickets = ref(tickets.value);

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

    const exportTable = () => {
      const csvContent = [
        [
          'Ticket ID', 'Ticket Title', 'Ticket Price', 'PersonPic', 'FirstName', 'LastName', 'MembershipType', 'Age', 'Gender', 'BusinessName', 
          'BizCategory', 'Exhibited', 'Visited', 'PeopleSatisfiedNeeds', 'PeopleRequestedOffers', 'InvestorsAdverts', 'BizMentor',
          'TotalSpent', 'MobileNo', 'Email', 'BizCountry', 'BizCity', 'Joined', 'LastLoggedIn'
        ],
        ...filteredTickets.value.map(ticket => [
          ticket.id, ticket.title, ticket.price, ticket.personPic, ticket.firstName, ticket.lastName, ticket.membershipType, ticket.age, ticket.gender,
          ticket.businessName, ticket.bizCategory, ticket.exhibited, ticket.visited, ticket.peopleSatisfiedNeeds, ticket.peopleRequestedOffers,
          ticket.investorsAdverts, ticket.bizMentor, ticket.totalSpent, ticket.mobileNo, ticket.email, ticket.bizCountry, ticket.bizCity,
          ticket.joined, ticket.lastLoggedIn
        ])
      ]
        .map(e => e.join(","))
        .join("\n");

      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'bookings.csv';
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
                  <th>Ticket Title</th>
                  <th>Ticket Price</th>
                  <th>Person Pic</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Membership Type</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Business Name</th>
                  <th>Biz Category</th>
                  <th>Exhibited</th>
                  <th>Visited</th>
                  <th>People Satisfied Needs</th>
                  <th>People Requested Offers</th>
                  <th>Investors Adverts</th>
                  <th>Biz Mentor</th>
                  <th>Total Spent</th>
                  <th>Mobile No</th>
                  <th>Email</th>
                  <th>Biz Country</th>
                  <th>Biz City</th>
                  <th>Joined</th>
                  <th>Last Logged In</th>
                </tr>
              </thead>
              <tbody>
                ${paginatedTickets.value.map((ticket, index) => `
                  <tr class="${index % 2 === 0 ? 'even-row' : 'odd-row'}">
                    <td>${ticket.id}</td>
                    <td>${ticket.title}</td>
                    <td>${ticket.price}</td>
                    <td>${ticket.personPic}</td>
                    <td>${ticket.firstName}</td>
                    <td>${ticket.lastName}</td>
                    <td>${ticket.membershipType}</td>
                    <td>${ticket.age}</td>
                    <td>${ticket.gender}</td>
                    <td>${ticket.businessName}</td>
                    <td>${ticket.bizCategory}</td>
                    <td>${ticket.exhibited}</td>
                    <td>${ticket.visited}</td>
                    <td>${ticket.peopleSatisfiedNeeds}</td>
                    <td>${ticket.peopleRequestedOffers}</td>
                    <td>${ticket.investorsAdverts}</td>
                    <td>${ticket.bizMentor}</td>
                    <td>${ticket.totalSpent}</td>
                    <td>${ticket.mobileNo}</td>
                    <td>${ticket.email}</td>
                    <td>${ticket.bizCountry}</td>
                    <td>${ticket.bizCity}</td>
                    <td>${ticket.joined}</td>
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
      close
    };
  }
});
</script>







<style scoped>
/* Adjusting the length of the table here: http://localhost:8100/adminpage */
ion-grid {
  height: 100%;
}
.ContainerRow {
  width:3000px;
  overflow-y: auto;
  flex-direction:column;
}

.ButtonRow {
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
}

.ButtonRow ion-input {
  margin-left: 1em;
  max-width: 300px;
}

.TableContainer {
  overflow-x: auto;
}

.TitleRow {
  font-weight: bold;
  cursor: pointer;
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

.PaginationRow {
  /* justify-content: center; */
  /* align-items: center; */
  margin-top: 10px;
}

.BorderedSection, .TitleRow, .DataRow, .TotalRow, .PaginationRow {
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

.TicketTitleCol, .PersonPicCol, .FirstNameCol, .LastNameCol, .MembershipTypeCol, .AgeCol, .GenderCol, .BusinessNameCol, .BizCategoryCol, .ExhibitedCol, .VisitedCol, .PeopleSatisfiedNeedsCol, .PeopleRequestedOffersCol, .InvestorsAdvertsCol, .BizMentorCol, .TotalSpentCol, .MobileNoCol, .EmailCol, .BizCountryCol, .BizCityCol, .JoinedCol, .LastLoggedInCol, .ActionCol {
  border-right: 1px solid gray;
}

.TicketIDCol {
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
  height: 30px;
  font-size: 12px;
}

.ActionCol {
  overflow-x: visible;
}

ion-button, ion-icon {
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

.person-pic {
  width: 50px;
  height: 50px;
  border-radius: 50%;
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


