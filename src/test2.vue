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
        <IonRow class="TitleRow">
          <IonCol class="MemberIDCol" @click="sortMembers('id')">Member ID <IonIcon :icon="sortIcon('id')" class="sort-icon" /></IonCol>
          <IonCol class="PersonPicCol" @click="sortMembers('personPic')">PersonPic <IonIcon :icon="sortIcon('personPic')" class="sort-icon" /></IonCol>
          <IonCol class="FirstNameCol" @click="sortMembers('firstName')">FirstName <IonIcon :icon="sortIcon('firstName')" class="sort-icon" /></IonCol>
          <IonCol class="LastNameCol" @click="sortMembers('lastName')">LastName <IonIcon :icon="sortIcon('lastName')" class="sort-icon" /></IonCol>
          <IonCol class="MembershipTypeCol" @click="sortMembers('membershipType')">Membership Type <IonIcon :icon="sortIcon('membershipType')" class="sort-icon" /></IonCol>
          <IonCol class="TotalMembershipSpentCol" @click="sortMembers('totalMembershipSpent')">Total Membership Spent<IonIcon :icon="sortIcon('totalMembershipSpent')" class="sort-icon" /></IonCol>
          <IonCol class="TotalSpentCol" @click="sortMembers('totalSpent')">Total Spent<IonIcon :icon="sortIcon('totalSpent')" class="sort-icon" /></IonCol>
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
        </IonRow>

        <IonRow v-for="member in paginatedMembers" :key="member.id" class="DataRow" :class="{ selected: selectedRow === member.id }" @click="selectRow(member.id)">
          <IonCol class="MemberIDCol">{{ member.id }}</IonCol>
          <IonCol class="PersonPicCol"><img :src="member.personPic" alt="Person Pic" class="person-pic"/></IonCol>
          <IonCol class="FirstNameCol">{{ member.firstName }}</IonCol>
          <IonCol class="LastNameCol">{{ member.lastName }}</IonCol>
          <IonCol class="MembershipTypeCol">{{ member.membershipType }}</IonCol>
          <IonCol class="TotalMembershipSpentCol">{{ member.totalMembershipSpent }}</IonCol>
          <IonCol class="TotalSpentCol">{{ member.totalSpent }}</IonCol>
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
        </IonRow>

        <IonRow class="TotalRow">
          <IonCol class="MemberIDCol">Totals:</IonCol>
          <IonCol class="PersonPicCol"></IonCol>
          <IonCol class="FirstNameCol"></IonCol>
          <IonCol class="LastNameCol"></IonCol>
          <IonCol class="MembershipTypeCol"></IonCol>
          <IonCol class="TotalMembershipSpentCol">{{ totalMembershipSpent }}</IonCol>
          <IonCol class="TotalSpentCol">{{ totalSpent }}</IonCol>
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
        </IonRow>
    </IonRow>

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
    bookingDate: string;
  }

  export default defineComponent({
    name: 'MembersPitchingProfileDetailAdminComponent',
    components: { IonIcon, IonGrid, IonRow, IonCol, IonButton, IonInput },
    setup() {
      const members = ref<Member[]>([]);
      const sortKey = ref<keyof Member | null>('bookingDate');
      const sortAsc = ref(true);

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

      const sortIcon = (key: keyof Member) => {
        if (sortKey.value === key) {
          return sortAsc.value ? arrowUpOutline : arrowDownOutline;
        }
        return null;
      };

      const resetSorting = () => {
        sortKey.value = 'bookingDate';
        sortAsc.value = true;
      };

      const sortMembers = (key: keyof Member) => {
        if (sortKey.value === key) {
          sortAsc.value = !sortAsc.value;
        } else {
          sortKey.value = key;
          sortAsc.value = true;
        }
        searchMembers();
      };

      const sortedMembers = computed(() => {
        return [...filteredMembers.value].sort((a, b) => {
          if (sortKey.value === 'pitchingKind') {
            return sortAsc.value
              ? pitchingKindOrder[a.pitchingKind] - pitchingKindOrder[b.pitchingKind]
              : pitchingKindOrder[b.pitchingKind] - pitchingKindOrder[a.pitchingKind];
          } else if (sortKey.value) {
            if (a[sortKey.value] < b[sortKey.value]) return sortAsc.value ? -1 : 1;
            if (a[sortKey.value] > b[sortKey.value]) return sortAsc.value ? 1 : -1;
          }
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
        arrowBackCircle,
        scrollToLeft,
        scrollableContainer,
      };
    }
  });
</script>
