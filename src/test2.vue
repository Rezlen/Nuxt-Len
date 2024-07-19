<template>
  <IonGrid>
    <p class="TitleP">List of all members who have booked a 1Minute, 3Minute &/or Investment Pitching</p>
    <IonRow class="ButtonRow">
      <IonButton @click="resetSorting">RESET</IonButton>
      <IonButton @click="exportTable">EXPORT</IonButton>
      <IonButton @click="printTable">PRINT</IonButton>
      <IonInput class="search" v-model="searchQuery" placeholder="Search..." @input="searchMembers"></IonInput>
      <IonButton class="arrowBackCircle" fill="clear" title="Duplicate" @click="scrollToLeft"> 
        <IonIcon slot="icon-only" size="large" :icon="arrowBackCircle"></IonIcon>
      </IonButton>
    </IonRow>
    
    <IonRow class="ContainerRow" ref="scrollableContainer">
        <!-- TitleRow with sorting functionality and icons -->
        <IonRow class="TitleRow">
          <IonCol class="MemberIDCol" @click="sortMembers('id')">Member ID <IonIcon :icon="sortIcon('id')" class="sort-icon" /></IonCol>
          <IonCol class="PersonPicCol" @click="sortMembers('personPic')">PersonPic <IonIcon :icon="sortIcon('personPic')" class="sort-icon" /></IonCol>
          <IonCol class="FirstNameCol" @click="sortMembers('firstName')">FirstName <IonIcon :icon="sortIcon('firstName')" class="sort-icon" /></IonCol>
          <IonCol class="LastNameCol" @click="sortMembers('lastName')">LastName <IonIcon :icon="sortIcon('lastName')" class="sort-icon" /></IonCol>
          <IonCol class="MembershipTypeCol" @click="sortMembers('membershipType')">Membership Type <IonIcon :icon="sortIcon('membershipType')" class="sort-icon" /></IonCol>
          <IonCol class="TotalMembershipSpentCol" @click="sortMembers('totalMembershipSpent')">Total Membership Spent<IonIcon :icon="sortIcon('totalMembershipSpent')" class="sort-icon" /></IonCol>
          <IonCol class="TotalSpentCol" @click="sortMembers('totalSpent')">Total Spent<IonIcon :icon="sortIcon('totalSpent')" class="sort-icon" /></IonCol>

          <!-- <IonRow class="PitchingSection"> -->
          <IonCol class="PitchingKindCol" @click="sortMembers('pitchingKind')">Pitching Kind <IonIcon :icon="sortIcon('pitchingKind')" class="sort-icon" /></IonCol>
          <IonCol class="LikedNoCol" @click="sortMembers('likedNo')">LikedNo <IonIcon :icon="sortIcon('likedNo')" class="sort-icon" /></IonCol>
          <IonCol class="SeenNoCol" @click="sortMembers('seenNo')">SeenNo <IonIcon :icon="sortIcon('seenNo')" class="sort-icon" /></IonCol>
          <IonCol class="PitchingTitleCol" @click="sortMembers('pitchingTitle')">Pitching Title <IonIcon :icon="sortIcon('pitchingTitle')" class="sort-icon" /></IonCol>
          <IonCol class="PitchingForCol" @click="sortMembers('pitchingFor')">PitchingFor <IonIcon :icon="sortIcon('pitchingFor')" class="sort-icon" /></IonCol>
          <IonCol class="PitchingCountryCol" @click="sortMembers('pitchingCountry')">Pitching Country <IonIcon :icon="sortIcon('pitchingCountry')" class="sort-icon" /></IonCol>
          <IonCol class="PitchingCityCol" @click="sortMembers('pitchingCity')">Pitching City <IonIcon :icon="sortIcon('pitchingCity')" class="sort-icon" /></IonCol>
          <IonCol class="PitchingCategoryCol" @click="sortMembers('pitchingCategory')">Pitching Category<IonIcon :icon="sortIcon('pitchingCategory')" class="sort-icon" /></IonCol>
          <IonCol class="YouTubeLinkCol" @click="sortMembers('youTubeLink')">YouTube Link<IonIcon :icon="sortIcon('youTubeLink')" class="sort-icon" /></IonCol>
          <IonCol class="PitchingSummeryCol" @click="sortMembers('pitchingSummery')">PitchingSummery <IonIcon :icon="sortIcon('pitchingSummery')" class="sort-icon" /></IonCol>
          <IonCol class="LookingForSummeryCol" @click="sortMembers('lookingForSummery')">LookingFor Summery <IonIcon :icon="sortIcon('lookingForSummery')" class="sort-icon" /></IonCol>
          <!-- </IonRow> -->

          <IonCol class="AgeCol" @click="sortMembers('age')">Age <IonIcon :icon="sortIcon('age')" class="sort-icon" /></IonCol>
          <IonCol class="GenderCol" @click="sortMembers('gender')">Gender <IonIcon :icon="sortIcon('gender')" class="sort-icon" /></IonCol>
          <IonCol class="BusinessNameCol" @click="sortMembers('businessName')">Business Name <IonIcon :icon="sortIcon('businessName')" class="sort-icon" /></IonCol>
          <IonCol class="BusinessRevenueCol" @click="sortMembers('businessRevenue')">Business Revenue <IonIcon :icon="sortIcon('businessRevenue')" class="sort-icon" /></IonCol>
          <IonCol class="JobPositionCol" @click="sortMembers('jobPosition')">Job Position<IonIcon :icon="sortIcon('jobPosition')" class="sort-icon" /></IonCol>
          <IonCol class="SalaryCol" @click="sortMembers('salary')">Salary<IonIcon :icon="sortIcon('salary')" class="sort-icon" /></IonCol>

          <IonCol class="BizCategoryCol" @click="sortMembers('bizCategory')">BizCategory <IonIcon :icon="sortIcon('bizCategory')" class="sort-icon" /></IonCol>
          <IonCol class="ExhibitedCol" @click="sortMembers('exhibited')">Exhibited <IonIcon :icon="sortIcon('exhibited')" class="sort-icon" /></IonCol>
          <IonCol class="EventSpentCol" @click="sortMembers('eventSpent')">Event Spent <IonIcon :icon="sortIcon('eventSpent')" class="sort-icon" /></IonCol>

          <IonCol class="VisitedCol" @click="sortMembers('visited')">Visited <IonIcon :icon="sortIcon('visited')" class="sort-icon" /></IonCol>
          <IonCol class="ListedNeedsCol" @click="sortMembers('listedNeeds')">Listed Needs <IonIcon :icon="sortIcon('listedNeeds')" class="sort-icon" /></IonCol>
          <IonCol class="ListedOffersCol" @click="sortMembers('listedOffers')">Listed Offers <IonIcon :icon="sortIcon('listedOffers')" class="sort-icon" /></IonCol>
          <IonCol class="AdvertSpentCol" @click="sortMembers('advertSpent')">Advert Spent <IonIcon :icon="sortIcon('advertSpent')" class="sort-icon" /></IonCol>

          <IonCol class="PeopleSatisfiedNeedsCol" @click="sortMembers('peopleSatisfiedNeeds')">People SatisfiedNeeds <IonIcon :icon="sortIcon('peopleSatisfiedNeeds')" class="sort-icon" /></IonCol>
          <IonCol class="PeopleRequestedOffersCol" @click="sortMembers('peopleRequestedOffers')">People RequestedOffers <IonIcon :icon="sortIcon('peopleRequestedOffers')" class="sort-icon" /></IonCol>
          <IonCol class="InvestorsAdvertsCol" @click="sortMembers('investorsAdverts')">Investors Adverts <IonIcon :icon="sortIcon('investorsAdverts')" class="sort-icon" /></IonCol>
          <IonCol class="PitchingsCol" @click="sortMembers('pitchings')">Pitchings <IonIcon :icon="sortIcon('pitchings')" class="sort-icon" /></IonCol>

          <IonCol class="BizMentorCol" @click="sortMembers('bizMentor')">BizMentor <IonIcon :icon="sortIcon('bizMentor')" class="sort-icon" /></IonCol>
          <IonCol class="BizMentorSpentCol" @click="sortMembers('bizMentorSpent')">BizMentor Spent <IonIcon :icon="sortIcon('bizMentorSpent')" class="sort-icon" /></IonCol>
          <IonCol class="MobileNoCol" @click="sortMembers('mobileNo')">MobileNo <IonIcon :icon="sortIcon('mobileNo')" class="sort-icon" /></IonCol>
          <IonCol class="EmailCol" @click="sortMembers('email')">Email <IonIcon :icon="sortIcon('email')" class="sort-icon" /></IonCol>
          <IonCol class="BizCountryCol" @click="sortMembers('bizCountry')">BizCountry <IonIcon :icon="sortIcon('bizCountry')" class="sort-icon" /></IonCol>
          <IonCol class="BizCityCol" @click="sortMembers('bizCity')">BizCity <IonIcon :icon="sortIcon('bizCity')" class="sort-icon" /></IonCol>
          <IonCol class="ConnectionsCol" @click="sortMembers('connections')">Connections <IonIcon :icon="sortIcon('connections')" class="sort-icon" /></IonCol>
          <IonCol class="NoEmployeesCol" @click="sortMembers('noEmployees')">No.Employees <IonIcon :icon="sortIcon('noEmployees')" class="sort-icon" /></IonCol>

          <IonCol class="BookingDateCol" @click="sortMembers('bookingDate')">BookingDate <IonIcon :icon="sortIcon('bookingDate')" class="sort-icon" /></IonCol>

          <IonCol class="JoinedCol" @click="sortMembers('joined')">Joined <IonIcon :icon="sortIcon('joined')" class="sort-icon" /></IonCol>
          <IonCol class="LastLoggedInCol" @click="sortMembers('lastLoggedIn')">LastLoggedIn <IonIcon :icon="sortIcon('lastLoggedIn')" class="sort-icon" /></IonCol>
          <IonCol class="NoLoggedInCol" @click="sortMembers('noLoggedIn')">NoOf LoggedIn <IonIcon :icon="sortIcon('noLoggedIn')" class="sort-icon" /></IonCol>
          <IonCol class="FullProfileSeenCol" @click="sortMembers('fullProfileSeen')">FullProfile Seen <IonIcon :icon="sortIcon('fullProfileSeen')" class="sort-icon" /></IonCol>
        </IonRow>

        <!-- Data rows -->
        <IonRow v-for="member in paginatedMembers" :key="member.id" class="DataRow" :class="{ selected: selectedRow === member.id }" @click="selectRow(member.id)">
          <IonCol class="MemberIDCol">{{ member.id }}</IonCol>
          <IonCol class="PersonPicCol"><img :src="member.personPic" alt="Person Pic" class="person-pic"/></IonCol>
          <IonCol class="FirstNameCol">{{ member.firstName }}</IonCol>
          <IonCol class="LastNameCol">{{ member.lastName }}</IonCol>
          <IonCol class="MembershipTypeCol">{{ member.membershipType }}</IonCol>
          <IonCol class="TotalMembershipSpentCol">{{ member.totalMembershipSpent }}</IonCol>
          <IonCol class="TotalSpentCol">{{ member.totalSpent }}</IonCol>

          <!-- PitchingSection Data -->
          <IonCol class="PitchingKindCol">{{ member.pitchingKind }}</IonCol>
          <IonCol class="LikedNoCol">{{ member.likedNo }}</IonCol>
          <IonCol class="SeenNoCol">{{ member.seenNo }}</IonCol>
          <IonCol class="PitchingTitleCol">{{ member.pitchingTitle }}</IonCol>
          <IonCol class="PitchingForCol">{{ member.pitchingFor }}</IonCol>
          <IonCol class="PitchingCountryCol">{{ member.pitchingCountry }}</IonCol>
          <IonCol class="PitchingCityCol">{{ member.pitchingCity }}</IonCol>
          <IonCol class="PitchingCategoryCol">{{ member.pitchingCategory }}</IonCol>
          <IonCol class="YouTubeLinkCol"><a :href="member.youTubeLink" target="_blank">YouTube Link</a></IonCol>
          <IonCol class="PitchingSummeryCol">{{ member.pitchingSummery }}</IonCol>
          <IonCol class="LookingForSummeryCol">{{ member.lookingForSummery }}</IonCol>


          <IonCol class="AgeCol">{{ member.age }}</IonCol>
          <IonCol class="GenderCol">{{ member.gender }}</IonCol>
          <IonCol class="BusinessNameCol">{{ member.businessName }}</IonCol>
          <IonCol class="BusinessRevenueCol">{{ member.businessRevenue }}</IonCol>
          <IonCol class="JobPositionCol">{{ member.jobPosition }}</IonCol>
          <IonCol class="SalaryCol">{{ member.salary }}</IonCol>

          <IonCol class="BizCategoryCol">{{ member.bizCategory }}</IonCol>
          <IonCol class="ExhibitedCol">{{ member.exhibited }}</IonCol>
          <IonCol class="EventSpentCol">{{ member.eventSpent }}</IonCol>

          <IonCol class="VisitedCol">{{ member.visited }}</IonCol>
          <IonCol class="ListedNeedsCol">{{ member.listedNeeds }}</IonCol>
          <IonCol class="ListedOffersCol">{{ member.listedOffers }}</IonCol>
          <IonCol class="AdvertSpentCol">{{ member.advertSpent }}</IonCol>

          <IonCol class="PeopleSatisfiedNeedsCol">{{ member.peopleSatisfiedNeeds }}</IonCol>
          <IonCol class="PeopleRequestedOffersCol">{{ member.peopleRequestedOffers }}</IonCol>
          <IonCol class="InvestorsAdvertsCol">{{ member.investorsAdverts }}</IonCol>
          <IonCol class="PitchingsCol">{{ member.pitchings }}</IonCol>

          <IonCol class="BizMentorCol">{{ member.bizMentor }}</IonCol>
          <IonCol class="BizMentorSpentCol">{{ member.bizMentorSpent }}</IonCol>
          <IonCol class="MobileNoCol">{{ member.mobileNo }}</IonCol>
          <IonCol class="EmailCol">{{ member.email }}</IonCol>
          <IonCol class="BizCountryCol">{{ member.bizCountry }}</IonCol>
          <IonCol class="BizCityCol">{{ member.bizCity }}</IonCol>
          <IonCol class="ConnectionsCol">{{ member.connections }}</IonCol>
          <IonCol class="NoEmployeesCol">{{ member.noEmployees }}</IonCol>

          <IonCol class="BookingDateCol">{{ member.bookingDate }}</IonCol>

          <IonCol class="JoinedCol">{{ member.joined }}</IonCol>
          <IonCol class="LastLoggedInCol">{{ member.lastLoggedIn }}</IonCol>
          <IonCol class="NoLoggedInCol">{{ member.noLoggedIn }}</IonCol>
          <IonCol class="FullProfileSeenCol">{{ member.fullProfileSeen }}</IonCol>

        </IonRow>

        <!-- Total row -->
        <IonRow class="TotalRow">
          <IonCol class="MemberIDCol">Totals:</IonCol>
          <IonCol class="PersonPicCol"></IonCol>
          <IonCol class="FirstNameCol"></IonCol>
          <IonCol class="LastNameCol"></IonCol>
          <IonCol class="MembershipTypeCol"></IonCol>
          <IonCol class="TotalMembershipSpentCol">{{ totalMembershipSpent }}</IonCol>
          <IonCol class="TotalSpentCol">{{ totalSpent }}</IonCol>

          <!-- Pitching section -->
          <IonCol class="PitchingKindCol"></IonCol>
          <IonCol class="LikedNoCol">{{ totalLikedNo }}</IonCol>
          <IonCol class="SeenNoCol">{{ totalSeenNo }}</IonCol>
          <IonCol class="PitchingTitleCol"></IonCol>
          <IonCol class="PitchingForCol"></IonCol>
          <IonCol class="PitchingCountryCol"></IonCol>
          <IonCol class="PitchingCityCol"></IonCol>
          <IonCol class="PitchingCategoryCol"></IonCol>
          <IonCol class="YouTubeLinkCol"></IonCol>
          <IonCol class="PitchingSummeryCol"></IonCol>
          <IonCol class="LookingForSummeryCol"></IonCol>

          <IonCol class="AgeCol"></IonCol>
          <IonCol class="GenderCol"></IonCol>
          <IonCol class="BusinessNameCol"></IonCol>
          <IonCol class="BusinessRevenueCol">{{ totalBusinessRevenue }}</IonCol>
          <IonCol class="JobPositionCol"></IonCol>
          <IonCol class="SalaryCol">{{ totalSalary }}</IonCol>

          <IonCol class="BizCategoryCol"></IonCol>
          <IonCol class="ExhibitedCol"></IonCol>
          <IonCol class="EventSpentCol">{{ totalEventSpent }}</IonCol>

          <IonCol class="VisitedCol"></IonCol>
          <IonCol class="ListedNeedsCol"></IonCol>
          <IonCol class="ListedOffersCol"></IonCol>
          <IonCol class="AdvertSpentCol">{{ totalAdvertSpent }}</IonCol>

          <IonCol class="PeopleSatisfiedNeedsCol"></IonCol>
          <IonCol class="PeopleRequestedOffersCol"></IonCol>
          <IonCol class="InvestorsAdvertsCol"></IonCol>
          <IonCol class="PitchingsCol"></IonCol>

          <IonCol class="BizMentorCol"></IonCol>
          <IonCol class="BizMentorSpentCol">{{ bizMentorSpent }}</IonCol>
          <IonCol class="MobileNoCol"></IonCol>
          <IonCol class="EmailCol"></IonCol>
          <IonCol class="BizCountryCol"></IonCol>
          <IonCol class="BizCityCol"></IonCol>
          <IonCol class="ConnectionsCol"></IonCol>
          <IonCol class="NoEmployeesCol">{{ totalEmployees }}</IonCol>

          <IonCol class="BookingDateCol"></IonCol>

          <IonCol class="JoinedCol"></IonCol>
          <IonCol class="LastLoggedInCol"></IonCol>
          <IonCol class="NoLoggedInCol"></IonCol>
          <IonCol class="FullProfileSeenCol"></IonCol>

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
  import { arrowDownOutline, arrowUpOutline, arrowBackCircle } from 'ionicons/icons';
  import FormProfilePublicSectionComponent from '@/components/ProfileComponents/FormProfilePublicSectionComponent.vue';

  interface Member {
    id: number;
    personPic: string;
    firstName: string;
    lastName: string;
    membershipType: string;
    totalMembershipSpent: number;
    totalSpent: number;
    pitchingKind: '1MinPitching' | '3MinPitching' | 'InvestmentPitching';
    likedNo: number;
    seenNo: number;
    pitchingTitle: string;
    pitchingFor: string;
    pitchingCountry: string;
    pitchingCity: string;
    pitchingCategory: string;
    youTubeLink: string;
    pitchingSummery: string;
    lookingForSummery: string;
    age: number;
    gender: string;
    businessName: string;
    businessRevenue: number;
    jobPosition: string;
    salary: number;
    bizCategory: string;
    exhibited: number;
    eventSpent: number;
    visited: number;
    listedNeeds: number;
    listedOffers: number;
    advertSpent: number;
    peopleSatisfiedNeeds: number;
    peopleRequestedOffers: number;
    investorsAdverts: number;
    pitchings: number;
    bizMentor: number;
    bizMentorSpent: number;
    mobileNo: string;
    email: string;
    bizCountry: string;
    bizCity: string;
    connections: number;
    noEmployees: number;
    bookingDate: string;
    joined: string;
    lastLoggedIn: string;
    noLoggedIn: number;
    fullProfileSeen: number;
  }

  export default defineComponent({
    name: 'MembersPitchingProfileDetailAdminComponent',
    components: { IonIcon, IonGrid, IonRow, IonCol, IonButton, IonInput, FormProfilePublicSectionComponent },
    setup() {
      const members = ref<Member[]>([]);
      const sortKey = ref<keyof Member | null>(null);
      const sortAsc = ref(true);
      const pitchingKindMode = ref<'default' | 'investmentFirst' | '1MinFirst'>('default');

      const selectedRow = ref<number | null>(null);
      const searchQuery = ref<string>('');
      const filteredMembers = ref(members.value);
      const scrollableContainer = ref<HTMLDivElement | null>(null);

      const scrollToLeft = () => {
        if (scrollableContainer.value) {
          scrollableContainer.value.scrollLeft = 0;
        }
      };

      // Custom order for pitchingKind
      const pitchingKindOrder: Record<Member['pitchingKind'], number> = {
        'InvestmentPitching': 1,
        '1MinPitching': 2,
        '3MinPitching': 3
      };

      const sortMembers = (key: keyof Member) => {
        if (sortKey.value === key) {
          if (key === 'pitchingKind') {
            // Cycle through pitchingKind modes
            if (pitchingKindMode.value === 'default') {
              pitchingKindMode.value = 'investmentFirst';
            } else if (pitchingKindMode.value === 'investmentFirst') {
              pitchingKindMode.value = '1MinFirst';
            } else if (pitchingKindMode.value === '1MinFirst') {
              pitchingKindMode.value = 'default';
            }
          } else {
            sortAsc.value = !sortAsc.value;
          }
        } else {
          sortKey.value = key;
          sortAsc.value = true;
          if (key === 'pitchingKind') {
            pitchingKindMode.value = 'default';
          }
        }
      };

      const sortIcon = (key: keyof Member) => {
        if (sortKey.value === key) {
          return sortAsc.value ? arrowUpOutline : arrowDownOutline;
        }
        return null;
      };

      const resetSorting = () => {
        sortKey.value = null;
        sortAsc.value = true;
        pitchingKindMode.value = 'default';
      };

      const sortedMembers = computed(() => {
        if (!sortKey.value) {
          if (pitchingKindMode.value === 'default') {
            return [...filteredMembers.value].sort((a, b) => {
              if (a.bookingDate < b.bookingDate) return sortAsc.value ? -1 : 1;
              if (a.bookingDate > b.bookingDate) return sortAsc.value ? 1 : -1;
              return 0;
            });
          }
          return filteredMembers.value;
        }

        if (sortKey.value === 'pitchingKind') {
          return [...filteredMembers.value].sort((a, b) => {
            const orderA = pitchingKindOrder[a.pitchingKind];
            const orderB = pitchingKindOrder[b.pitchingKind];

            if (pitchingKindMode.value === 'investmentFirst') {
              return orderA === 1 ? -1 : (orderB === 1 ? 1 : (sortAsc.value ? orderA - orderB : orderB - orderA));
            } else if (pitchingKindMode.value === '1MinFirst') {
              return orderA === 2 ? -1 : (orderB === 2 ? 1 : (sortAsc.value ? orderA - orderB : orderB - orderA));
            }

            return sortAsc.value ? orderA - orderB : orderB - orderA;
          });
        }

        return [...filteredMembers.value].sort((a, b) => {
          if (a[sortKey.value!] < b[sortKey.value!]) return sortAsc.value ? -1 : 1;
          if (a[sortKey.value!] > b[sortKey.value!]) return sortAsc.value ? 1 : -1;
          return 0;
        });
      });

      const itemsPerPage = 20;
      const currentPage = ref(1);

      const paginatedMembers = computed(() => {
        const start = (currentPage.value - 1) * itemsPerPage;
        return sortedMembers.value.slice(start, start + itemsPerPage);
      });

      const totalPages = computed(() => Math.ceil(filteredMembers.value.length / itemsPerPage));

      const totalMembershipSpent = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.totalMembershipSpent, 0));
      const totalSpent = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.totalSpent, 0));
      const totalLikedNo = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.likedNo, 0));
      const totalSeenNo = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.seenNo, 0));

      const totalBusinessRevenue = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.businessRevenue, 0));
      const totalSalary = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.salary, 0));
      const totalEventSpent = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.eventSpent, 0));
      const totalAdvertSpent = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.advertSpent, 0));
      const bizMentorSpent = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.bizMentorSpent, 0));
      const totalEmployees = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.noEmployees, 0));

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

      const searchMembers = () => {
        if (searchQuery.value.trim() === '') {
          filteredMembers.value = members.value;
        } else {
          const query = searchQuery.value.trim().toLowerCase();
          filteredMembers.value = members.value.filter(member =>
            Object.values(member).some(val =>
              val.toString().toLowerCase().includes(query)
            )
          );
        }
      };

      watch(searchQuery, searchMembers);

      return {
        members,
        sortKey,
        sortAsc,
        sortMembers,
        sortIcon,
        resetSorting,
        selectRow,
        selectedRow,
        searchQuery,
        searchMembers,
        paginatedMembers,
        currentPage,
        totalPages,
        prevPage,
        nextPage,
        totalMembershipSpent,
        totalSpent,
        totalLikedNo,
        totalSeenNo,
        totalBusinessRevenue,
        totalSalary,
        totalEventSpent,
        totalAdvertSpent,
        bizMentorSpent,
        totalEmployees,
        arrowBackCircle,
        scrollToLeft,
        scrollableContainer,
      };
    }
  });
</script>












<style scoped>
.TitleP{
  display: center;
  text-align: center;
  font-weight: bold;
} 
/* Adjusting the length of the table here: http://localhost:8100/adminpage */
.search {
  width: 100px;
}
/* .PitchingSection {
  Border-top: 2px red solid;
  Border-left: 2px red solid;
  Border-right: 2px red solid;
} */
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
  width: 5500px;
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

.MemberIDCol {
  background-color: red;
}

ion-col {
  max-width: 100px; /* Increase the max width for better visibility */
  padding: 0;
  margin: 0;
  white-space: nowrap;
  overflow-x: auto;
  align-content: center;
  height: 30px;
  font-size: 12px;
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


