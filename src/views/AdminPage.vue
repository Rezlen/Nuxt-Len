<template>
  <IonPage>
    <IonContent>
      <IonGrid>
        <!-- Menu Section -->  <!-- Social Media Section -->
        <IonRow class="bordered-section">
          <MenuComponent />
        </IonRow>
        <IonRow class="bordered-section">
          <AdminCreateEventTABsComponent />
        </IonRow>
        <IonRow class="bordered-section">
          <AdminLeftSideBarComponent />
        </IonRow>
      



        

        <!-- Footer Section -->
        <IonRow>
          <IonCol class="bordered-section FooterComponent">
            <FooterComponent />
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonPage>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonGrid, IonRow, IonCol, IonContent } from '@ionic/vue';
import MenuComponent from '@/components/6TempComponents/MenuComponent.vue';
import AdminCreateEventTABsComponent from '@/components/AdminComponents/AdminEventsComponents/AdminCreateEventTABsComponent.vue';
import AdminLeftSideBarComponent from '@/components/AdminComponents/AdminEventsComponents/AdminLeftSideBarComponent.vue';
import FooterComponent from '@/components/6TempComponents/FooterComponent.vue';


export default defineComponent({
  name: 'AdminPage',
  components: {
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonContent,
    MenuComponent,
    AdminCreateEventTABsComponent,
    AdminLeftSideBarComponent,
    FooterComponent,
  },
});
</script>

<style scoped>
ion-grid {
  padding: 0;
  margin: 0;
}

.bordered-section {
  border: 1px solid #000;
  background-color: lightgray;
  padding: 0;
  margin: 0;
  z-index: 1;
  /* gap: 100px; */
}

@media (min-width: 768px) {
  .main-content-row ion-col {
    margin-bottom: 0; /* Reset margin for larger screens */
  }

}
</style>
