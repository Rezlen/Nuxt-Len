<template>
  <IonGrid>
    <p class="tableTitle">You Can Track Your Earned Rewards & Discounts Here:</p>
    <IonRow class="ButtonRow">
      <IonButton @click="resetSorting">RESET</IonButton>
      <IonButton @click="exportTable">EXPORT</IonButton>
      <IonButton @click="printTable">PRINT</IonButton>
      <IonInput class="search" v-model="searchQuery" placeholder="Search..." @input="searchMembers"></IonInput>

      <IonButton class="arrowBackCircle" fill="clear" title="BackToLeft" @click="scrollToLeft"> 
        <IonIcon slot="icon-only" size="large" :icon="arrowBackCircle"></IonIcon>
      </IonButton> 
    </IonRow>

      <!-- TitleRow with sorting functionality and icons -->
    <IonRow class="NONscrollingRow">
      
      <IonRow class="scrollingRow" ref="scrollableContainer">

        <IonRow class="TitleRow"  >
          <IonCol class="earnedEventIdCol" @click="sortMembers('earnedEventId')"> Earned EventId<IonIcon :icon="sortIcon('earnedEventId')" class="sort-icon" /></IonCol>
          <IonCol class="dateEarnedCol" @click="sortMembers('dateEarned')">Date Earned<IonIcon :icon="sortIcon('dateEarned')" class="sort-icon" /></IonCol>
          <IonCol class="earnedDiscountRewardPercentageCol" @click="sortMembers('earnedDiscountRewardPercentage')">Discount Reward Percentage Earned<IonIcon :icon="sortIcon('earnedDiscountRewardPercentage')" class="sort-icon" /></IonCol>
          <IonCol class="actionsCol" @click="sortMembers('earnedFrom')">Rewards/Discount Earned from:<IonIcon :icon="sortIcon('earnedFrom')" class="sort-icon" /></IonCol>
          <IonCol class="numberOfActionsCol" @click="sortMembers('numberOfActions')">Number Of Earned From<IonIcon :icon="sortIcon('numberOfActions')" class="sort-icon" /></IonCol>
          <IonCol class="discountRewardPercentageEarnedCol" @click="sortMembers('discountRewardPercentageEarned')">Discount Reward Percentage Earned<IonIcon :icon="sortIcon('discountRewardPercentageEarned')" class="sort-icon" /></IonCol>
          
        </IonRow>

        <!-- Data rows -->
        <IonRow  v-for="member in paginatedMembers" :key="member.earnedEventId" class="DataRow" :class="{ selected: selectedRow === member.earnedEventId }" @click="selectRow(member.earnedEventId)" >        
          <IonCol class="earnedEventIdCol">{{ member.earnedEventId }}</IonCol>
          <IonCol class="dateEarnedCol">{{ member.dateEarned }}</IonCol>
          <IonCol class="earnedDiscountRewardPercentageCol">{{ member.earnedDiscountRewardPercentage }}</IonCol>
          <IonCol class="actionsCol">{{ member.earnedFrom }}</IonCol>
          <IonCol class="numberOfActionsCol">{{ member.numberOfActions }}</IonCol>
          <IonCol class="discountRewardPercentageEarnedCol">{{ member.discountRewardPercentageEarned }}</IonCol>

        </IonRow>

        <!-- Total row -->
        <IonRow class="TotalRow"> 
          <IonCol class="earnedEventIdCol">Totals:</IonCol>
          <IonCol class="dateEarnedCol"></IonCol>
          <IonCol class="earnedDiscountRewardPercentageCol"></IonCol>
          <IonCol class="actionsCol"></IonCol>
          <IonCol class="numberOfActionsCol">{{ totalnumberOfActions }}</IonCol>
          <IonCol class="discountRewardPercentageEarnedCol">{{ totaldiscountRewardPercentageEarned }}</IonCol>

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

interface Member {
  earnedEventId: number;
  dateEarned: string;
  earnedDiscountRewardPercentage: string;
  earnedFrom: string;
  numberOfActions: number;
  discountRewardPercentageEarned: number;

}

export default defineComponent({
  name: 'MyRewardsDiscountsEarnedTableComponent',
  components: { IonIcon, IonGrid, IonRow, IonCol, IonButton, IonInput, IonCheckbox },
  setup() {
    const members = ref<Member[]>([
      {
        earnedEventId: 3,
        dateEarned: '2023-01-01T12:00:00',
        earnedDiscountRewardPercentage: 'Tech Conference',
        earnedFrom: 'Convention Center',
        numberOfActions: 150,
        discountRewardPercentageEarned: 500,

      },
      {
        earnedEventId: 2,
        dateEarned: '2023-01-01T12:00:00',
        earnedDiscountRewardPercentage: 'Tech fdf Conference',
        earnedFrom: 'Convention rfd Center',
        numberOfActions: 15066,
        discountRewardPercentageEarned: 5006,

      },
      {
        earnedEventId: 1,
        dateEarned: '2023-01-01T12:00:00',
        earnedDiscountRewardPercentage: 'Techeee Conference',
        earnedFrom: 'e e     eee Convention Center',
        numberOfActions: 1503,
        discountRewardPercentageEarned: 5003,

      },
        // Add more members as necessary

        

      ]);
    const checkboxStates = ref({

      checkbox1: false,
    });

    const sortKey = ref<keyof Member | null>(null);
    const sortAsc = ref(true);
       // making the selected row distinguishable
    const selectedRow = ref<number | null>(null);
    // Search Filed
    const searchQuery = ref<string>('');
    const filteredMembers = ref(members.value);

    /**
     * Sorts the members based on the provided key. 
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




      const sortIcon = (key: keyof Member) => {
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

    //  * Computes the sorted members based on the current sortKey and sort order.
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
        if (!sortKey.value) return filteredMembers.value;

        return [...filteredMembers.value].sort((a, b) => {
          if (a[sortKey.value!] < b[sortKey.value!]) return sortAsc.value ? -1 : 1;
          if (a[sortKey.value!] > b[sortKey.value!]) return sortAsc.value ? 1 : -1;
          return 0;
        });
      });

    const itemsPerPage = 20;
    const currentPage = ref(1);

    //  * Computes the paginated members for the current page.
      const paginatedMembers = computed(() => {
        const start = (currentPage.value - 1) * itemsPerPage;
        return sortedMembers.value.slice(start, start + itemsPerPage);
      });

    //  * Computes the total number of pages based on the number of members and items per page.
    const totalPages = computed(() => Math.ceil(filteredMembers.value.length / itemsPerPage));

    //  * Computes the total price of all members.
    const totalnumberOfActions = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.numberOfActions, 0));
    const totaldiscountRewardPercentageEarned = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.discountRewardPercentageEarned, 0));


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
        ['Event ID', 'dateEarned', 'earnedDiscountRewardPercentage', 'earnedFrom', 'numberOfActions', 'discountRewardPercentageEarned', 'Exhibitors', 'spentOnLEN',
      '1MinPitchers', '3MinPitchers', 'Investment Pitchers', 'Investors', 'Biz Mentors', 'yourEarnedCommission'
    ],
        ...paginatedMembers.value.map(member => [
          member.earnedEventId, member.dateEarned, member.earnedDiscountRewardPercentage, member.earnedFrom,
      member.numberOfActions, member.discountRewardPercentageEarned, 
        ])
      ]
        .map(e => e.join(","))
        .join("\n");

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'MembersList.csv';
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
              .even-row .earnedDiscountRewardPercentageCol {
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
                  <th>dateEarned</th>
                  <th>earnedDiscountRewardPercentage</th>
                  <th>earnedFrom</th>
                  <th>numberOfActions</th>
                  <th>discountRewardPercentageEarned</th>

                </tr>
              </thead>
              <tbody>
                ${paginatedMembers.value.map((member, index) => `
                  <tr class="${index % 2 === 0 ? 'even-row' : 'odd-row'}">
                    <td>${member.earnedEventId}</td>
                    <td>${member.dateEarned}</td>
                    <td>${member.earnedDiscountRewardPercentage}</td>
                    <td>${member.earnedFrom}</td>
                    <td>${member.numberOfActions}</td>
                    <td>${member.discountRewardPercentageEarned}</td>

                  </tr>
                `).join('')}
                  <tr class="TotalRow">
                    <td>Totals:</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>${totalnumberOfActions.value}</td>
                    <td>${totaldiscountRewardPercentageEarned.value}</td>

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
      close,
      paginatedMembers,
      sortMembers,
      sortIcon,
      resetSorting,
      exportTable,
      printTable,
      totalnumberOfActions,
      totaldiscountRewardPercentageEarned,

      currentPage,
      totalPages,
      prevPage,
      nextPage,
      selectedRow,
      selectRow,
      searchQuery,
      searchMembers,
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

  ion-grid {
    width: 100%;
  }
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

  .earnedEventIdCol {
    background-color: red;
    max-width: 70px;
  }
  .dateEarnedCol {
    max-width: 150px;
  }
  .earnedDiscountRewardPercentageCol {
    max-width: 100px;
  }
  .actionsCol {
    max-width: 500px;
  }
  .numberOfActionsCol {
    max-width: 150px;
  }
  .discountRewardPercentageEarnedCol {
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
    .scrollingRow {
      min-width: 1150px;
    }
  }


</style>