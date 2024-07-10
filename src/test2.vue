<template>
  <IonGrid>
    <IonRow class="ButtonRow">
      <IonButton @click="resetSorting">RESET</IonButton>
      <IonButton @click="exportTable">EXPORT</IonButton>
      <IonButton @click="printTable">PRINT</IonButton>
      <IonInput v-model="searchQuery" placeholder="Search..." @input="searchMembers"></IonInput>
    </IonRow>
    <IonRow class="ContainerRow">
      <div class="TableContainer">
        <!-- TitleRow with sorting functionality and icons -->
        <IonRow class="TitleRow">
          <IonCol class="MemberIDCol" @click="sortMembers('id')">Member ID <IonIcon :icon="sortIcon('id')" class="sort-icon" /></IonCol>
          <IonCol class="MemberTitleCol" @click="sortMembers('title')">Member Title <IonIcon :icon="sortIcon('title')" class="sort-icon" /></IonCol>
          <IonCol class="MemberPriceCol" @click="sortMembers('price')">Member Price <IonIcon :icon="sortIcon('price')" class="sort-icon" /></IonCol>
          <IonCol class="PersonPicCol" @click="sortMembers('personPic')">PersonPic <IonIcon :icon="sortIcon('personPic')" class="sort-icon" /></IonCol>
          <IonCol class="FirstNameCol" @click="sortMembers('firstName')">FirstName <IonIcon :icon="sortIcon('firstName')" class="sort-icon" /></IonCol>
          <IonCol class="LastNameCol" @click="sortMembers('lastName')">LastName <IonIcon :icon="sortIcon('lastName')" class="sort-icon" /></IonCol>
          <IonCol class="MembershipTypeCol" @click="sortMembers('membershipType')">MembershipType <IonIcon :icon="sortIcon('membershipType')" class="sort-icon" /></IonCol>
          <IonCol class="AgeCol" @click="sortMembers('age')">Age <IonIcon :icon="sortIcon('age')" class="sort-icon" /></IonCol>
          <IonCol class="GenderCol" @click="sortMembers('gender')">Gender <IonIcon :icon="sortIcon('gender')" class="sort-icon" /></IonCol>
          <IonCol class="BusinessNameCol" @click="sortMembers('businessName')">BusinessName <IonIcon :icon="sortIcon('businessName')" class="sort-icon" /></IonCol>
          <IonCol class="BizCategoryCol" @click="sortMembers('bizCategory')">BizCategory <IonIcon :icon="sortIcon('bizCategory')" class="sort-icon" /></IonCol>
          <IonCol class="ExhibitedCol" @click="sortMembers('exhibited')">Exhibited <IonIcon :icon="sortIcon('exhibited')" class="sort-icon" /></IonCol>
          <IonCol class="VisitedCol" @click="sortMembers('visited')">Visited <IonIcon :icon="sortIcon('visited')" class="sort-icon" /></IonCol>
          <IonCol class="PeopleSatisfiedNeedsCol" @click="sortMembers('peopleSatisfiedNeeds')">PeopleSatisfiedNeeds <IonIcon :icon="sortIcon('peopleSatisfiedNeeds')" class="sort-icon" /></IonCol>
          <IonCol class="PeopleRequestedOffersCol" @click="sortMembers('peopleRequestedOffers')">PeopleRequestedOffers <IonIcon :icon="sortIcon('peopleRequestedOffers')" class="sort-icon" /></IonCol>
          <IonCol class="InvestorsAdvertsCol" @click="sortMembers('investorsAdverts')">InvestorsAdverts <IonIcon :icon="sortIcon('investorsAdverts')" class="sort-icon" /></IonCol>
          <IonCol class="BizMentorCol" @click="sortMembers('bizMentor')">BizMentor <IonIcon :icon="sortIcon('bizMentor')" class="sort-icon" /></IonCol>
          <IonCol class="TotalSpentCol" @click="sortMembers('totalSpent')">TotalSpent <IonIcon :icon="sortIcon('totalSpent')" class="sort-icon" /></IonCol>
          <IonCol class="MobileNoCol" @click="sortMembers('mobileNo')">MobileNo <IonIcon :icon="sortIcon('mobileNo')" class="sort-icon" /></IonCol>
          <IonCol class="EmailCol" @click="sortMembers('email')">Email <IonIcon :icon="sortIcon('email')" class="sort-icon" /></IonCol>
          <IonCol class="BizCountryCol" @click="sortMembers('bizCountry')">BizCountry <IonIcon :icon="sortIcon('bizCountry')" class="sort-icon" /></IonCol>
          <IonCol class="BizCityCol" @click="sortMembers('bizCity')">BizCity <IonIcon :icon="sortIcon('bizCity')" class="sort-icon" /></IonCol>
          <IonCol class="JoinedCol" @click="sortMembers('joined')">Joined <IonIcon :icon="sortIcon('joined')" class="sort-icon" /></IonCol>
          <IonCol class="LastLoggedInCol" @click="sortMembers('lastLoggedIn')">LastLoggedIn <IonIcon :icon="sortIcon('lastLoggedIn')" class="sort-icon" /></IonCol>
          <IonCol class="ActionCol">Actions</IonCol>
        </IonRow>

        <!-- Data rows -->
        <IonRow v-for="member in paginatedMembers" :key="member.id" class="DataRow" :class="{ selected: selectedRow === member.id }" @click="selectRow(member.id)">
          <IonCol class="MemberIDCol">{{ member.id }}</IonCol>
          <IonCol class="MemberTitleCol">{{ member.title }}</IonCol>
          <IonCol class="MemberPriceCol">{{ member.price }}</IonCol>

          <IonCol class="PersonPicCol"><img :src="member.personPic" alt="Person Pic" class="person-pic"/></IonCol>
          <IonCol class="FirstNameCol">{{ member.firstName }}</IonCol>
          <IonCol class="LastNameCol">{{ member.lastName }}</IonCol>
          <IonCol class="MembershipTypeCol">{{ member.membershipType }}</IonCol>
          <IonCol class="AgeCol">{{ member.age }}</IonCol>
          <IonCol class="GenderCol">{{ member.gender }}</IonCol>
          <IonCol class="BusinessNameCol">{{ member.businessName }}</IonCol>
          <IonCol class="BizCategoryCol">{{ member.bizCategory }}</IonCol>
          <IonCol class="ExhibitedCol">{{ member.exhibited }}</IonCol>
          <IonCol class="VisitedCol">{{ member.visited }}</IonCol>
          <IonCol class="PeopleSatisfiedNeedsCol">{{ member.peopleSatisfiedNeeds }}</IonCol>
          <IonCol class="PeopleRequestedOffersCol">{{ member.peopleRequestedOffers }}</IonCol>
          <IonCol class="InvestorsAdvertsCol">{{ member.investorsAdverts }}</IonCol>
          <IonCol class="BizMentorCol">{{ member.bizMentor }}</IonCol>
          <IonCol class="TotalSpentCol">{{ member.totalSpent }}</IonCol>
          <IonCol class="MobileNoCol">{{ member.mobileNo }}</IonCol>
          <IonCol class="EmailCol">{{ member.email }}</IonCol>
          <IonCol class="BizCountryCol">{{ member.bizCountry }}</IonCol>
          <IonCol class="BizCityCol">{{ member.bizCity }}</IonCol>
          <IonCol class="JoinedCol">{{ member.joined }}</IonCol>
          <IonCol class="LastLoggedInCol">{{ member.lastLoggedIn }}</IonCol>
          <IonCol class="ActionCol">
            <IonButton class="ActionCol" fill="clear" title="Close">
              <IonIcon slot="icon-only" size="small" :icon="close"></IonIcon>
            </IonButton>
          </IonCol>
        </IonRow>

        <!-- Total row -->
        <IonRow class="TotalRow">
          <IonCol class="MemberIDCol">Totals:</IonCol>
          <IonCol class="MemberTitleCol"></IonCol>
          <IonCol class="MemberPriceCol"></IonCol>

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
import { ref, computed } from 'vue';
import { IonButton, IonCol, IonGrid, IonInput, IonRow, IonIcon } from '@ionic/vue';
import { arrowUpOutline, arrowDownOutline, close } from 'ionicons/icons';

interface Member {
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
  exhibited: number;
  visited: number;
  peopleSatisfiedNeeds: number;
  peopleRequestedOffers: number;
  investorsAdverts: number;
  bizMentor: number;
  totalSpent: number;
  mobileNo: number;
  email: string;
  bizCountry: string;
  bizCity: string;
  joined: string;
  lastLoggedIn: string;
}

const members = ref<Member[]>([
  {
    id: 1,
    title: 'VIP',
    price: '100',
    personPic: 'person1.jpg',
    firstName: 'John',
    lastName: 'Doe',
    membershipType: 'Gold',
    age: 35,
    gender: 'Male',
    businessName: 'Tech Solutions',
    bizCategory: 'IT',
    exhibited: 'Yes',
    visited: 'Yes',
    peopleSatisfiedNeeds: 5,
    peopleRequestedOffers: 2,
    investorsAdverts: 3,
    bizMentor: 'Yes',
    totalSpent: '$500',
    mobileNo: '123-456-7890',
    email: 'john.doe@example.com',
    bizCountry: 'USA',
    bizCity: 'New York',
    joined: '2021-01-01',
    lastLoggedIn: '2023-01-01',
  },
  // Add more member objects here
]);

const sortKey = ref<string>('');
const sortOrder = ref<number>(1);
const searchQuery = ref<string>('');
const currentPage = ref<number>(1);
const itemsPerPage = 10;
const selectedRow = ref<number | null>(null);

const resetSorting = () => {
  sortKey.value = '';
  sortOrder.value = 1;
};

const exportTable = () => {
  // Logic to export the table data
};

const printTable = () => {
  // Logic to print the table data
};

const searchMembers = () => {
  currentPage.value = 1; // Reset to the first page when a new search is made
};

const sortMembers = (key: keyof Member) => {
  if (sortKey.value === key) {
    sortOrder.value = -sortOrder.value;
  } else {
    sortKey.value = key;
    sortOrder.value = 1;
  }
};

const sortIcon = (key: keyof Member) => {
  if (sortKey.value === key) {
    return sortOrder.value === 1 ? arrowUpOutline : arrowDownOutline;
  }
  return null;
};

const sortedMembers = computed<Member[]>(() => {
  const sorted = [...members.value].sort((a, b) => {
    if (a[sortKey.value] < b[sortKey.value]) {
      return -sortOrder.value;
    }
    if (a[sortKey.value] > b[sortKey.value]) {
      return sortOrder.value;
    }
    return 0;
  });

  if (searchQuery.value) {
    return sorted.filter((member) =>
      Object.values(member).some((val) =>
        String(val).toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    );
  }

  return sorted;
});

const paginatedMembers = computed<Member[]>(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return sortedMembers.value.slice(start, end);
});

const totalPages = computed<number>(() => Math.ceil(sortedMembers.value.length / itemsPerPage));

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

const selectRow = (id: number) => {
  selectedRow.value = id;
};

const total = computed<number>(() => {
  return sortedMembers.value.reduce((acc, member) => {
    const price = parseFloat(member.totalSpent.replace('$', ''));
    return acc + price;
  }, 0);
});
</script>

<style scoped>
.TableContainer {
  overflow-x: auto;
}

.TitleRow,
.DataRow {
  display: flex;
  align-items: center;
}

.sort-icon {
  margin-left: 5px;
}

.PersonPicCol img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.selected {
  background-color: #f0f0f0;
}

.ButtonRow,
.PaginationRow {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ButtonRow ion-input {
  flex-grow: 1;
  margin-left: 10px;
}
</style>
