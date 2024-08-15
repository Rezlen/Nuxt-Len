<template>
  <IonGrid>
    <p class="tableTitle">You Can Track Your LEN Share Purchase Offer Here:</p>
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
          <IonCol class="memberIdCol" @click="sortMembers('memberId')"> ID/No.<IonIcon :icon="sortIcon('memberId')" class="sort-icon" /></IonCol>
          <IonCol class="dateCol" @click="sortMembers('date')">Date<IonIcon :icon="sortIcon('date')" class="sort-icon" /></IonCol>
          <IonCol class="sharePercentageOfferCol" @click="sortMembers('sharePercentageOffer')">Share Percentage Offer<IonIcon :icon="sortIcon('sharePercentageOffer')" class="sort-icon" /></IonCol>
          <IonCol class="actionsCol" @click="sortMembers('description')">Description<IonIcon :icon="sortIcon('description')" class="sort-icon" /></IonCol>
          <IonCol class="numberOfActionsCol" @click="sortMembers('suggestedAmount')">Suggested Amount <IonIcon :icon="sortIcon('suggestedAmount')" class="sort-icon" /></IonCol>
          <IonCol class="approvedNotApprovedDateCol" @click="sortMembers('approvedNotApprovedDate')">Approved NotApproved<IonIcon :icon="sortIcon('approvedNotApprovedDate')" class="sort-icon" /></IonCol>
          
        </IonRow>

        <!-- Data rows -->
        <IonRow  v-for="member in paginatedMembers" :key="member.memberId" class="DataRow" :class="{ selected: selectedRow === member.memberId }" @click="selectRow(member.memberId)" >        
          <IonCol class="memberIdCol">{{ member.memberId }}</IonCol>
          <IonCol class="dateCol">{{ member.date }}</IonCol>
          <IonCol class="sharePercentageOfferCol">{{ member.sharePercentageOffer }}</IonCol>
          <IonCol class="actionsCol">{{ member.description }}</IonCol>
          <IonCol class="numberOfActionsCol">{{ member.suggestedAmount }}</IonCol>
          <IonCol class="approvedNotApprovedDateCol">{{ member.approvedNotApprovedDate }}</IonCol>

        </IonRow>

        <!-- Total row -->
        <IonRow class="TotalRow"> 
          <IonCol class="memberIdCol">Totals:</IonCol>
          <IonCol class="dateCol"></IonCol>
          <IonCol class="sharePercentageOfferCol"></IonCol>
          <IonCol class="actionsCol"></IonCol>
          <IonCol class="numberOfActionsCol"></IonCol>
          <IonCol class="approvedNotApprovedDateCol"></IonCol>

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
  memberId: number;
  date: string;
  sharePercentageOffer: string;
  description: string;
  suggestedAmount: number;
  approvedNotApprovedDate: number;

}

export default defineComponent({
  name: 'MySharesTableComponent',
  components: { IonIcon, IonGrid, IonRow, IonCol, IonButton, IonInput, IonCheckbox },
  setup() {
    const members = ref<Member[]>([
      {
        memberId: 3,
        date: '2023-01-01T12:00:00',
        sharePercentageOffer: 'Tech Conference',
        description: 'Convention Center',
        suggestedAmount: 150,
        approvedNotApprovedDate: 500,

      },
      {
        memberId: 2,
        date: '2023-01-01T12:00:00',
        sharePercentageOffer: 'Tech fdf Conference',
        description: 'Convention rfd Center',
        suggestedAmount: 15066,
        approvedNotApprovedDate: 5006,

      },
      {
        memberId: 1,
        date: '2023-01-01T12:00:00',
        sharePercentageOffer: 'Techeee Conference',
        description: 'e e     eee Convention Center',
        suggestedAmount: 1503,
        approvedNotApprovedDate: 5003,

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
        ['Member ID', 'date', 'sharePercentageOffer', 'description', 'suggestedAmount', 'approvedNotApprovedDate' ],
        ...paginatedMembers.value.map(member => [
          member.memberId, member.date, member.sharePercentageOffer, member.description, member.suggestedAmount, member.approvedNotApprovedDate, 
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
              .even-row .sharePercentageOfferCol {
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
                  <th>Member ID</th>
                  <th>date</th>
                  <th>sharePercentageOffer</th>
                  <th>description</th>
                  <th>suggestedAmount</th>
                  <th>approvedNotApprovedDate</th>

                </tr>
              </thead>
              <tbody>
                ${paginatedMembers.value.map((member, index) => `
                  <tr class="${index % 2 === 0 ? 'even-row' : 'odd-row'}">
                    <td>${member.memberId}</td>
                    <td>${member.date}</td>
                    <td>${member.sharePercentageOffer}</td>
                    <td>${member.description}</td>
                    <td></td>
                    <td></td>

                  </tr>
                `).join('')}
                  <tr class="TotalRow">
                    <td>Totals:</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>

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

  .memberIdCol {
    background-color: red;
    max-width: 100px;
  }
  .dateCol {
    max-width: 150px;
  }
  .sharePercentageOfferCol {
    max-width: 100px;
  }
  .actionsCol {
    max-width: 500px;
  }
  .numberOfActionsCol {
    max-width: 150px;
  }
  .approvedNotApprovedDateCol {
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
    .arrowBackCircle {
      position: fixed;
      top: 55;
      left: 0;
      right: 0;
      z-index: 1;
    }
    .scrollingRow {
      min-width: 1150px;
    }
  }


</style>