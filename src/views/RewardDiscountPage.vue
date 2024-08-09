<template>
  <IonPage>
    <IonContent>
      <IonGrid>
        <!-- Menu Section -->  <!-- Social Media Section -->
        <IonRow class="bordered-section">
            <MenuComponent />
        </IonRow>
        <IonRow class="bordered-section">
          <SocialMediaBarComponent />
        </IonRow>
      



        <!-- Main Content Section with Adverts and Middle Content -->
        <IonRow class="main-content-row ">
          <!-- Left Advert Section -->
          <IonCol size="12" size-md="1.5" class="bordered-section LeftAdvertComponent">
            <LeftAd1Component />
            <LeftAd2Component />
            <LeftAd3Component />
            <LeftAd4Component />
          </IonCol>

          <!-- Middle Content Section -->
          <IonCol size="12" size-md="9" class="bordered-section ">

            <!-- <IonGrid> -->
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
            <!-- </IonGrid> -->








          </IonCol>

          <!-- Right Advert Section -->
          <IonCol size="12" size-md="1.5" class="bordered-section RightAdvertComponent">
            <RightAd1Component />
            <RightAd2Component />
            <RightAd3Component />
            <RightAd4Component />
          </IonCol>
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
import { IonPage, IonGrid, IonRow, IonCol, IonContent, } from '@ionic/vue';
import MenuComponent from '@/components/6TempComponents/MenuComponent.vue';
import SocialMediaBarComponent from '@/components/6TempComponents/SocialMediaBarComponent.vue';
import LeftAd1Component from '@/components/6TempComponents/LeftRightAds/LeftAd1Component.vue';
import LeftAd2Component from '@/components/6TempComponents/LeftRightAds/LeftAd2Component.vue';
import LeftAd3Component from '@/components/6TempComponents/LeftRightAds/LeftAd3Component.vue';
import LeftAd4Component from '@/components/6TempComponents/LeftRightAds/LeftAd4Component.vue';
import RightAd1Component from '@/components/6TempComponents/LeftRightAds/RightAd1Component.vue';
import RightAd2Component from '@/components/6TempComponents/LeftRightAds/RightAd2Component.vue';
import RightAd3Component from '@/components/6TempComponents/LeftRightAds/RightAd3Component.vue';
import RightAd4Component from '@/components/6TempComponents/LeftRightAds/RightAd4Component.vue';
import FooterComponent from '@/components/6TempComponents/FooterComponent.vue';

import MyRewardsDiscountsEarnedTableComponent from '@/components/MembersMyOrderComponents/MyRewardsDiscountsComponents/MyRewardsDiscountsEarnedTableComponent.vue';
import MyRewardsDiscountsUsedTableComponent from '@/components/MembersMyOrderComponents/MyRewardsDiscountsComponents/MyRewardsDiscountsUsedTableComponent.vue';


export default defineComponent({
  name: 'RewardDiscountPage',
  components: {
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonContent,
    MenuComponent,
    SocialMediaBarComponent,

    MyRewardsDiscountsEarnedTableComponent,
    MyRewardsDiscountsUsedTableComponent,

    LeftAd1Component,
    LeftAd2Component,
    LeftAd3Component,
    LeftAd4Component,
    RightAd1Component,
    RightAd2Component,
    RightAd3Component,
    RightAd4Component,
    FooterComponent,

  },
});
</script>

<style scoped>

.bordered-section {
  padding: 0;
  margin: 0;
  z-index: 1;
  /* gap: 100px; */
}
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
@media (max-width: 600px) {
  .main-content-row ion-col {
    margin-bottom: 0; /* Reset margin for larger screens */
  }
  .RightAdvertComponent,
  .LeftAdvertComponent {
    display: none;
  }
  li {
  margin: 10px;
  padding: 5px 0;
  }

}
</style>
