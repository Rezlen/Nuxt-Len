<template>
  <IonGrid>

    <IonRow class="ButtonRow">
      <IonButton @click="resetSorting">RESET</IonButton>
      <IonButton @click="exportTable">EXPORT</IonButton>
      <IonButton @click="printTable">PRINT</IonButton>
      <IonInput v-model="searchQuery" placeholder="Search..." @input="searchTickets"></IonInput>
      <IonButton class="arrowBackCircle" fill="clear" title="Duplicate"> <IonIcon slot="icon-only" size="large" :icon="arrowBackCircle"></IonIcon></IonButton>
    </IonRow>
    
    <IonRow class="ContainerRow">
        <!-- TitleRow with sorting functionality and icons -->
        <IonRow class="TitleRow">
          <IonCol class="TicketIDCol" @click="sortTickets('id')">Ticket ID <IonIcon :icon="sortIcon('id')" class="sort-icon" /></IonCol>
          <IonCol class="TicketTitleCol" @click="sortTickets('title')">Ticket Title <IonIcon :icon="sortIcon('title')" class="sort-icon" /></IonCol>
          <IonCol class="TicketPriceCol" @click="sortTickets('price')">Ticket Price <IonIcon :icon="sortIcon('price')" class="sort-icon" /></IonCol>
          <IonCol class="ExhibitionSpotNoCol" @click="sortTickets('spotNo')">Exhibition SpotNo <IonIcon :icon="sortIcon('spotNo')" class="sort-icon" /></IonCol>
          <IonCol class="ExhibitionSpotColorCol" @click="sortTickets('spotColor')">Exhibition SpotColor <IonIcon :icon="sortIcon('spotColor')" class="sort-icon" /></IonCol>
          <IonCol class="PersonPicCol" @click="sortTickets('personPic')">PersonPic <IonIcon :icon="sortIcon('personPic')" class="sort-icon" /></IonCol>
          <IonCol class="FirstNameCol" @click="sortTickets('firstName')">FirstName <IonIcon :icon="sortIcon('firstName')" class="sort-icon" /></IonCol>
          <IonCol class="LastNameCol" @click="sortTickets('lastName')">LastName <IonIcon :icon="sortIcon('lastName')" class="sort-icon" /></IonCol>
          <IonCol class="MembershipTypeCol" @click="sortTickets('membershipType')">Membership Type <IonIcon :icon="sortIcon('membershipType')" class="sort-icon" /></IonCol>
          <IonCol class="AgeCol" @click="sortTickets('age')">Age <IonIcon :icon="sortIcon('age')" class="sort-icon" /></IonCol>
          <IonCol class="GenderCol" @click="sortTickets('gender')">Gender <IonIcon :icon="sortIcon('gender')" class="sort-icon" /></IonCol>
          <IonCol class="BusinessNameCol" @click="sortTickets('businessName')">Business Name <IonIcon :icon="sortIcon('businessName')" class="sort-icon" /></IonCol>
          <IonCol class="BizCategoryCol" @click="sortTickets('bizCategory')">BizCategory <IonIcon :icon="sortIcon('bizCategory')" class="sort-icon" /></IonCol>
          <IonCol class="ExhibitedCol" @click="sortTickets('exhibited')">Exhibited <IonIcon :icon="sortIcon('exhibited')" class="sort-icon" /></IonCol>
          <IonCol class="VisitedCol" @click="sortTickets('visited')">Visited <IonIcon :icon="sortIcon('visited')" class="sort-icon" /></IonCol>
          <IonCol class="PeopleSatisfiedNeedsCol" @click="sortTickets('peopleSatisfiedNeeds')">People SatisfiedNeeds <IonIcon :icon="sortIcon('peopleSatisfiedNeeds')" class="sort-icon" /></IonCol>
          <IonCol class="PeopleRequestedOffersCol" @click="sortTickets('peopleRequestedOffers')">People RequestedOffers <IonIcon :icon="sortIcon('peopleRequestedOffers')" class="sort-icon" /></IonCol>
          <IonCol class="InvestorsAdvertsCol" @click="sortTickets('investorsAdverts')">Investors Adverts <IonIcon :icon="sortIcon('investorsAdverts')" class="sort-icon" /></IonCol>
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
          <IonCol class="TicketPriceCol">{{ ticket.price }}</IonCol>
          <IonCol class="ExhibitionSpotNoCol">{{ ticket.spotNo }}</IonCol>
          <IonCol class="ExhibitionSpotColorCol">{{ ticket.spotColor }}</IonCol>
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
          <IonCol class="TicketPriceCol"></IonCol>
          <IonCol class="ExhibitionSpotNoCol"></IonCol>
          <IonCol class="ExhibitionSpotColorCol"></IonCol>
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
    </IonRow>

    <!-- Pagination -->
    <IonRow class="PaginationRow">
      <IonButton @click="prevPage">Prev</IonButton>
      <div class="PageInfo">{{ currentPage }} / {{ totalPages }}</div>
      <IonButton @click="nextPage">Next</IonButton>
    </IonRow>

  </IonGrid>
</template>












<style scoped>
  /* Adjusting the length of the table here: http://localhost:8100/adminpage */
  ion-grid {
    height: 100%;
  }

  .TitleRow {
    font-weight: bold;
    cursor: pointer;
    height: 50px;
    align-items: center;
  }
.ContainerRow, .TitleRow, .DataRow, .TotalRow{
    width: 3000px;

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

  .TicketIDCol, .TicketTitleCol, .TicketPriceCol, .ExhibitionSpotNoCol, .ExhibitionSpotColorCol, .PersonPicCol, .FirstNameCol, .LastNameCol, .MembershipTypeCol, .AgeCol, .GenderCol, .BusinessNameCol, .BizCategoryCol, .ExhibitedCol, .VisitedCol, .PeopleSatisfiedNeedsCol, .PeopleRequestedOffersCol, .InvestorsAdvertsCol, .BizMentorCol, .TotalSpentCol, .MobileNoCol, .EmailCol, .BizCountryCol, .BizCityCol, .JoinedCol, .LastLoggedInCol, .ActionCol {
    border-right: 1px solid lightgray;
  }

  .TicketIDCol {
    /* width: 50px; */
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

  }





</style>


