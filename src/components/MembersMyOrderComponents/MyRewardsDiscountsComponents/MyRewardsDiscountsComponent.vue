<template>
  <IonGrid>
    <IonCol>
      <p class="rewardLine">You Earn Rewards Based On Following:</p>
      <IonCol class="list">
        <li>You receive <span class="text-red">5% discount</span> for every <span class="font-weight-bold">10</span> people who SignUp to LEN when you <b>upload your Email Lists</b> in LEN and send them invitation email/message to join LEN (<a href="#">Here is the link</a>)</li>
        <li>You receive <span class="text-red">5% discount</span> for every <span class="font-weight-bold">5</span> people who SignUp to LEN when you <b>send an Invitation Link</b> to your contact or friends lists in social media like Facebook, LinkedIn, Twitter and so on. (<a href="#">Here is the link</a>)</li>
        <li>You receive <span class="text-red">5% discount</span> for every <span class="font-weight-bold">10</span> things you <b>share from LEN</b> in other websites or pages.</li>
        <li>You receive <span class="text-red">5% discount</span> for every <span class="font-weight-bold">£300 you spend</span> in LEN.</li>
        <li>You receive <span class="text-red">1% discount</span> for every <span class="font-weight-bold">Visiting Ticket</span> you reserve; added <span class="text-red">4% discount</span> when <b>Check-In</b> in our events. (<a href="#">Here is the link</a>)</li>
        <li>You receive <span class="text-red">5% discount</span> for <span class="font-weight-bold">every 5 Needs or every 5 Offers</span> you post in. <span class="text-red">4% discount</span> when <b>Check-In</b> in our events. (<a href="#">Here is the link</a>)</li>
      </IonCol>
      <IonRow class="linkRow">
        <p class="rewardLine">For sharing or inviting others, you can use your dedicated link (provided below). Simply send this link to them or paste it on any page.</p>
        <IonRow class="dedicatedLink"><p>Your dedicated link here</p></IonRow>
      </IonRow>
      <!-- this section is for the TABLE only -->
      <IonRow class="MyRewardsDiscountsEarnedTableComponent">
        <MyRewardsDiscountsEarnedTableComponent/>
      </IonRow>
      <!-- this section is for the TABLE only -->
      <IonRow class="MyRewardsDiscountsUsedTableComponent">
        <MyRewardsDiscountsUsedTableComponent/>
      </IonRow>
    </IonCol>
  </IonGrid>
</template>



<script lang="ts">
import { defineComponent} from 'vue';
import { IonCol, IonGrid, IonRow } from '@ionic/vue';
import MyRewardsDiscountsEarnedTableComponent from '@/components/MembersMyOrderComponents/MyRewardsDiscountsComponents/MyRewardsDiscountsEarnedTableComponent.vue';
import MyRewardsDiscountsUsedTableComponent from '@/components/MembersMyOrderComponents/MyRewardsDiscountsComponents/MyRewardsDiscountsUsedTableComponent.vue';

export default defineComponent({
  name: 'MyRewardsDiscountsComponent',
  components: {
    IonCol,
    IonGrid,
    IonRow,
    MyRewardsDiscountsEarnedTableComponent,
    MyRewardsDiscountsUsedTableComponent,

  },
});
</script>



<style scoped>
  ion-grid {
    overflow-y: auto;     /* Enable vertical scrolling */
    height: 100%;     /* Full height to fit the parent */
  }
  .rewardLine {
    font-size: 17px;
    text-align: center;
    font-weight: bold;
  }
  li {
    margin: 0 20px;
  }
  .text-red {
    color: red;
    font-weight: bold;
  }
  .linkRow {
    border: 1px solid lightgray;
    border-radius: 8px;
    margin-bottom: 30px;
  }
  .dedicatedLink {
    width: 100%;
    background-color: rgb(229, 246, 228);
  }
  
  @media (max-width: 650px) {
    li {
      margin: 10px;
      padding: 5px 0;
    }
  }
</style>

