<template>
  <IonGrid>
    <!-- ButtonRow -->
    <IonRow class="ButtonRow">
      <IonButton @click="resetSorting">RESET</IonButton>
      <IonButton @click="exportTable">EXPORT</IonButton>
      <IonButton @click="printTable">PRINT</IonButton>
      <IonInput class="search" v-model="searchQuery" placeholder="Search..." @input="searchMembers"></IonInput>
      <IonButton class="arrowBackCircle" fill="clear" title="Duplicate" @click="scrollToLeft">
        <IonIcon slot="icon-only" size="large" :icon="arrowBackCircle"></IonIcon>
      </IonButton>
    </IonRow>

    <!-- TitleRow with sorting functionality and icons -->
    <IonRow class="TitleRow">
      <!-- Add your columns here -->
    </IonRow>

    <!-- Data rows -->
    <IonRow v-for="member in paginatedMembers" :key="member.id" class="DataRow" :class="{ selected: selectedRow === member.id }" @click="selectRow(member.id)">
      <!-- Add your data columns here -->

      <IonCol class="ActionCol">
        <IonButton class="ActionCol" fill="clear" title="Close">
          <IonButton @click="openModal(member.id)" class="test" fill="clear" title="Edit This Profile">
            <IonIcon slot="icon-only" size="small" :icon="create"></IonIcon>
          </IonButton>
          <IonButton class="test" fill="clear" title="Deactivate/Hide This Profile From Public">
            <IonIcon slot="icon-only" size="small" :icon="ban"></IonIcon>
          </IonButton>
          <IonButton class="test" fill="clear" title="Delete This Profile After 5 Years, From Data Base">
            <IonIcon slot="icon-only" size="small" :icon="trash"></IonIcon>
          </IonButton>
        </IonButton>
      </IonCol>
    </IonRow>

    <!-- Total row -->
    <IonRow class="TotalRow">
      <!-- Add your total columns here -->
    </IonRow>

    <!-- Pagination -->
    <IonRow class="PaginationRow">
      <IonButton @click="prevPage">Prev</IonButton>
      <div class="PageInfo">{{ currentPage }} / {{ totalPages }}</div>
      <IonButton @click="nextPage">Next</IonButton>
    </IonRow>

    <!-- Modal for displaying component in a popup -->
    <IonModal :is-open="isModalOpen" @didDismiss="closeModal">
      <FormProfilePublicSectionComponent />
      <IonButton @click="closeModal">Close</IonButton>
    </IonModal>
    
  </IonGrid>
</template>










<script lang="ts">
import { ref } from 'vue';
import { IonModal, IonGrid, IonRow, IonCol, IonButton, IonIcon, IonInput } from '@ionic/vue';
import { arrowBackCircle, create, ban, trash } from 'ionicons/icons';
import FormProfilePublicSectionComponent from '@/components/ProfileComponents/FormProfilePublicSectionComponent.vue';

export default {
  components: {
    FormProfilePublicSectionComponent,
    IonModal,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonIcon,
    IonInput,
  },
  setup() {
    const searchQuery = ref<string>('');
    const showMiniEvent = ref<boolean>(false);
    const activeMemberId = ref<number | null>(null);
    const isModalOpen = ref<boolean>(false);

    const openModal = (memberId: number) => {
      activeMemberId.value = memberId;
      isModalOpen.value = true;
    };

    const closeModal = () => {
      isModalOpen.value = false;
    };

    return {
      searchQuery,
      showMiniEvent,
      activeMemberId,
      isModalOpen,
      openModal,
      closeModal,
      arrowBackCircle,
      create,
      ban,
      trash,
    };
  },
};
</script>










<style scoped>
  /* Adjusting the length of the table here: http://localhost:8100/adminpage */
  .search {
    width: 100px;
  }
  
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
    width: 4000px;
    flex-direction: column;
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

  .ActionCol {
    overflow-x: visible;
  }

  .ActionCol ion-button {
    margin: 0;
    padding: 0;
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
      width: auto;
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


