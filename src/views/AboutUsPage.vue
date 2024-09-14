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
          <IonCol size="12" size-md="9" class="bordered-section SignInSignUpComponent">
            <IonTitle>
              LEN's Vision:
            </IonTitle>
            <P>
            “We believe in celebrating our entrepreneurs, supporting great idea thinkers and dreamers, and helping small business owners with big aspirations and inspired start-ups. 
            Regardless of background, financial position, country of origin, or gender, these remarkable individuals deserve support and their shot at success.” – Reza, LEN
            </P>
            <IonTitle>
              LEN's Mission:
            </IonTitle>
            <P>
            LEN aims to be the premier platform connecting entrepreneurs, businesses, and investors in the UK and globally. 
            Our goal is to establish the largest monthly platform and exhibition where people and businesses can start, expand, buy, sell, promote, invest or receive investment.
            </P>
            <IonTitle>
              About LEN
            </IonTitle>
            <IonTitle>
              London Entrepreneurs Network®
            </IonTitle>
            <p>
              About LEN
              London Entrepreneurs Network® (LEN) was established in 2008 and has grown to be one of
              the UK’s largest and most active networking groups for entrepreneurs, start-ups and SMEs.
              We currently have 16,000 members, a figure that is expanding at a rate of 500 or more new
              registrations each month.
              In our history we have hosted hundreds of networking events in London, each attended by
              over a hundred members and guests. We collaborate with mentoring groups, to get our
              members face to face with some of the most successful business development minds in the
              country, and have partnerships with other experienced professionals – in the fields of web
              development, marketing, finance and law – to give our members access to a wide range of
              training and support to help them to succeed. We work with leading keynote speakers and
              coaches to make our events interesting and practical. And, each year, we collaborate with
              The Business Show and Business Startup Show organizers on ever larger and more popular
              stands, from which we run live versions of The Angels Investment Show®.
              Training, mentoring, dinner and business lunch events, exhibitions and our regular
              networking evenings – LEN is a dynamic, growing, ever-evolving, FREE resource for small
              businesses, entrepreneurs and investors looking for partnerships, funding, new business,
              collaborations, or to learn from those more experienced than them.
              The Angels Investment Show® is a natural evolution for our business – and one that we are
              proud to share with you here.
            </p>
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
import { IonPage, IonGrid, IonRow, IonCol, IonContent, IonTitle } from '@ionic/vue';
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


export default defineComponent({
  name: 'AboutUsPage',
  components: {
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonContent,
    IonTitle,
    MenuComponent,
    SocialMediaBarComponent,
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

ion-title {
  font-family: Arial, Helvetica, sans-serif;
  margin: 20px 0;;
  font-size: 30px;
  text-align: center;
}
p {
  padding: 20px;
  border-bottom: #000 1px solid;
  box-shadow: 0 4px 8px rgba(34, 139, 34, 0.8);
  margin-bottom: 50px;
}
.bordered-section {
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
