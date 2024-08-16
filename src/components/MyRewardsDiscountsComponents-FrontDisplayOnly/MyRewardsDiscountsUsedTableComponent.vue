<template>
  <IonGrid>
    <p class="tableTitle">Used Discount & Rewards:</p>
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
          <IonCol class="usedEventIdCol" @click="sortMembers('usedEventId')"> Used Event ID/No.<IonIcon :icon="sortIcon('usedEventId')" class="sort-icon" /></IonCol>
          <IonCol class="dateUsedCol" @click="sortMembers('dateUsed')">Date Used<IonIcon :icon="sortIcon('dateUsed')" class="sort-icon" /></IonCol>
          <IonCol class="usedDiscountRewardPercentageCol" @click="sortMembers('usedDiscountRewardPercentage')">Discount Reward Percentage Used<IonIcon :icon="sortIcon('usedDiscountRewardPercentage')" class="sort-icon" /></IonCol>
          <IonCol class="usedForCol" @click="sortMembers('usedFor')">Used your Rewards Discount for:<IonIcon :icon="sortIcon('usedFor')" class="sort-icon" /></IonCol>
          <IonCol class="priceCol" @click="sortMembers('price')">Price<IonIcon :icon="sortIcon('price')" class="sort-icon" /></IonCol>
          <IonCol class="savedAmountCol" @click="sortMembers('savedAmount')">Saved Amount<IonIcon :icon="sortIcon('savedAmount')" class="sort-icon" /></IonCol>
        </IonRow>

        <!-- Data rows -->
        <IonRow  v-for="member in paginatedMembers" :key="member.usedEventId" class="DataRow" :class="{ selected: selectedRow === member.usedEventId }" @click="selectRow(member.usedEventId)" >        
          <IonCol class="usedEventIdCol">{{ member.usedEventId }}</IonCol>
          <IonCol class="dateUsedCol">{{ member.dateUsed }}</IonCol>
          <IonCol class="usedDiscountRewardPercentageCol">{{ member.usedDiscountRewardPercentage }}</IonCol>
          <IonCol class="usedForCol">{{ member.usedFor }}</IonCol>
          <IonCol class="priceCol">{{ member.price }}</IonCol>
          <IonCol class="savedAmountCol">{{ member.savedAmount }}</IonCol>
        </IonRow>

        <!-- Total row -->
        <IonRow class="TotalRow"> 
          <IonCol class="usedEventIdCol">Total saved:</IonCol>
          <IonCol class="dateUsedCol"></IonCol>
          <IonCol class="usedDiscountRewardPercentageCol"></IonCol>
          <IonCol class="usedForCol"></IonCol>
          <IonCol class="priceCol">{{ totalprice }}</IonCol>
          <IonCol class="savedAmountCol">{{ totalsavedAmount }}</IonCol>
        </IonRow>

        <!-- Remaining Reward Discount row -->
        <IonRow class="TotalRow"> 
          <IonCol class="usedEventIdCol"></IonCol>
          <IonCol class="dateUsedCol"></IonCol>
          <IonCol class="usedDiscountRewardPercentageCol"></IonCol>
          <IonCol class="usedForCol remainingRewardDiscount">Remaining Reward Discount:</IonCol>
          <IonCol class="savedAmountCol remainingRewardDiscount">{{ totalprice }}</IonCol>
          <IonCol class="savedAmountCol remainingRewardDiscount">{{ totalsavedAmount }}</IonCol>
        </IonRow>

        <!-- discountCode row -->
        <IonRow class="TotalRow"> 
          <IonCol class="usedEventIdCol"></IonCol>
          <IonCol class="dateUsedCol"></IonCol>
          <IonCol class="usedDiscountRewardPercentageCol"></IonCol>
          <IonCol class="usedForCol discountCode"> Use this Reward Discount Code at the checkout & enjoy:	</IonCol>
          <IonCol class="savedAmountCol discountCode"></IonCol>
          <IonCol class="savedAmountCol discountCode">Rez@disc@LEN</IonCol>
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
  usedEventId: number;
  dateUsed: string;
  usedDiscountRewardPercentage: string;
  usedFor: string;
  price: number;
  savedAmount: number;
}

export default defineComponent({
  name: 'MyRewardsDiscountsUsedTableComponent',
  components: { IonIcon, IonGrid, IonRow, IonCol, IonButton, IonInput, IonCheckbox },
  setup() {
    const members = ref<Member[]>([
      {
        usedEventId: 3,
        dateUsed: '2023-01-01T12:00:00',
        usedDiscountRewardPercentage: 'Tech Conference',
        usedFor: 'Convention Center',
        price: 150,
        savedAmount: 500,

      },
      {
        usedEventId: 2,
        dateUsed: '2023-01-01T12:00:00',
        usedDiscountRewardPercentage: 'Tech fdf Conference',
        usedFor: 'Convention rfd Center',
        price: 15066,
        savedAmount: 5006,

      },
      {
        usedEventId: 1,
        dateUsed: '2023-01-01T12:00:00',
        usedDiscountRewardPercentage: 'Techeee Conference',
        usedFor: 'e e     eee Convention Center',
        price: 1503,
        savedAmount: 5003,

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
    const totalprice = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.price, 0));
    const totalsavedAmount = computed(() => filteredMembers.value.reduce((sum, member) => sum + member.savedAmount, 0));


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
        ['Event ID', 'dateUsed', 'usedDiscountRewardPercentage', 'usedFor', 'price', 'savedAmount', 'Exhibitors', 'spentOnLEN',
      '1MinPitchers', '3MinPitchers', 'Investment Pitchers', 'Investors', 'Biz Mentors', 'yourEarnedCommission'
    ],
        ...paginatedMembers.value.map(member => [
          member.usedEventId, member.dateUsed, member.usedDiscountRewardPercentage, member.usedFor, member.price, member.savedAmount, 
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
              .even-row .usedDiscountRewardPercentageCol {
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
                  <th>dateUsed</th>
                  <th>usedDiscountRewardPercentage</th>
                  <th>usedFor</th>
                  <th>price</th>
                  <th>savedAmount</th>

                </tr>
              </thead>
              <tbody>
                ${paginatedMembers.value.map((member, index) => `
                  <tr class="${index % 2 === 0 ? 'even-row' : 'odd-row'}">
                    <td>${member.usedEventId}</td>
                    <td>${member.dateUsed}</td>
                    <td>${member.usedDiscountRewardPercentage}</td>
                    <td>${member.usedFor}</td>
                    <td>${member.price}</td>
                    <td>${member.savedAmount}</td>

                  </tr>
                `).join('')}
                  <tr class="TotalRow">
                    <td>Totals:</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>${totalprice.value}</td>
                    <td>${totalsavedAmount.value}</td>

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

      
      totalprice,
      totalsavedAmount,

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
    font-size: 30px;
    margin-top: 50px;
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

  .usedEventIdCol {
    background-color: red;
    max-width: 70px;
  }
  .dateUsedCol {
    max-width: 150px;
  }
  .usedDiscountRewardPercentageCol {
    max-width: 100px;
  }
  .usedForCol {
    max-width: 500px;
  }
  .priceCol {
    max-width: 120px;
  }
  .savedAmountCol {
    max-width: 120px;
  }
  .remainingRewardDiscount,
  .discountCode {
    font-weight: bold;
    font-size: 16px;
    /* justify-content: flex-start; */
    text-align: right;
    align-items: center;
    background-color:  rgb(11, 224, 8);
    height: 50px;
    padding-right: 10px;
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
      flex-direction: column;
    }
  }


</style>