<template>
  <IonGrid class="Grid">
    <IonRow class="Tabs2-EmailNotification-WebsiteNotification">
      <!-- Dropdown for Messages Contacts Connection Feed -->
      <div class="dropdown">
        <button class="dropdown-button" @dblclick="toggleTab('messagesContactsConnectionFeed')">
          Messages Contacts Connection Feed
        </button>
        <div v-show="isExpanded['messagesContactsConnectionFeed']" class="dropdown-content">
          <ion-select
            justify="start"
            placeholder="I receive email when members send a message to me"
            interface="popover"
            class="test"
          >
            <ion-select-option value="apples">Yes</ion-select-option>
            <ion-select-option value="oranges">No</ion-select-option>
          </ion-select>
        </div>
      </div>

      <!-- Dropdown for Pitchings Investments -->
      <div class="dropdown">
        <button class="dropdown-button" @dblclick="toggleTab('pitchingsInvestments')">
          Pitchings Investments
        </button>
        <div v-show="isExpanded['pitchingsInvestments']" class="dropdown-content">
          <ion-select
            justify="start"
            placeholder="Sponsors & Partners"
            interface="popover"
          >
            <ion-select-option value="apples">Yes</ion-select-option>
            <ion-select-option value="oranges">No</ion-select-option>
          </ion-select>
        </div>
      </div>
    </IonRow>

    <IonRow>
      <IonCol>
        <IonButton size="large" expand="block" @click="submitContent">Submit</IonButton>
      </IonCol>
    </IonRow>
  </IonGrid>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonGrid, IonRow, IonCol, IonSelect, IonSelectOption, IonButton } from '@ionic/vue';

export default defineComponent({
  name: 'EmailNotification',
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonSelect,
    IonSelectOption,
    IonButton,
  },
  setup() {
    const isExpanded = ref<{ [key: string]: boolean }>({
      'messagesContactsConnectionFeed': false,
      'pitchingsInvestments': false
    });

    const toggleTab = (tab: string) => {
      isExpanded.value[tab] = !isExpanded.value[tab];
    };

    const submitContent = () => {
      // Handle submit logic
      console.log('Submit clicked');
    };

    return {
      isExpanded,
      toggleTab,
      submitContent,
    };
  }
});
</script>


<style scoped>
.dropdown {
  margin-bottom: 10px;
}

.dropdown-button {
  background-color: #3880ff;
  color: white;
  border: none;
  padding: 10px;
  text-align: left;
  cursor: pointer;
  width: 100%;
  border-radius: 5px;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 100%;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  z-index: 1;
}

.dropdown-content {
  display: block;
}

ion-select {
  width: 100%;
}

@media (max-width: 600px) {
  .dropdown-button {
    font-size: 11px;
  }
}
</style>


