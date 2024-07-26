<template>
  <IonGrid>
    <p class=" CenterPositions ">"Choose what website notification or email you receive from LEN."</p>
        <IonRow class="Tabs2-EmailNotification-WebsiteNotification">
          <IonSegment v-model="selectedTab" class="TabSegment" color="primary">
            <IonSegmentButton class="btn" value="emailNotification">EmailNotification</IonSegmentButton>
            <IonSegmentButton class="btn" value="websiteNotification">WebsiteNotification</IonSegmentButton>
          </IonSegment>
        </IonRow>
        <IonRow class="DisplayComponentRow">
          <IonCol v-show="selectedTab === 'emailNotification'" class="Marketing">
            <EmailNotification />
          </IonCol>
          <IonCol v-show="selectedTab === 'websiteNotification'" class="Accounting">
            <WebsiteNotification />
          </IonCol>

        </IonRow>
      </IonGrid>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonPage, IonGrid, IonRow, IonCol, IonContent, IonSegment, IonSegmentButton } from '@ionic/vue';
import EmailNotification from '@/components/EmailWebsiteNotification/EmailNotification.vue';
import WebsiteNotification from '@/components/EmailWebsiteNotification/WebsiteNotification.vue';

export default defineComponent({
  name: 'TABEmailWebsiteNotification',
  components: {
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonContent,
    IonSegment,
    IonSegmentButton,
    EmailNotification,
    WebsiteNotification,
  },
  setup() {
    const selectedTab = ref<string>(''); // Initialize with the default tab

    return {
      selectedTab,
    };
  },
});
</script>


<style scoped>
/* Updated for new tab names and mobile responsiveness */

.Tabs2-EmailNotification-WebsiteNotification {
  display: flex;
  flex-wrap: wrap; /* Allow tabs to wrap to the next row */
  margin-bottom: 10px;
}

.TabSegment {
  display: flex;
  flex-wrap: wrap; /* Allow segment buttons to wrap */
  width: 100%;
}

.TabSegment .btn {
  flex: 1 1 auto;
  min-width: 150px; 
}

.DisplayComponentRow {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.EmailNotification,
.WebsiteNotification {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  flex: 1 1 calc(50% - 20px); /* Ensure columns are responsive */
  margin: 10px;
}

.CenterPositions {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
}

@media (max-width: 600px) {
  
.EmailNotification,
.WebsiteNotification  {
    flex: 1 1 100%; /* Make each tab content full width on small screens */
  }
}
</style>
