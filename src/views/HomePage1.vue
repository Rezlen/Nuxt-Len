<template>
  <IonPage>
    <IonContent>
      <IonGrid>
        <!-- Menu Section -->  
        <IonRow class="bordered-section">
          <MenuComponent />
        </IonRow>
        <!-- Social Media Section -->
        <IonRow class="bordered-section">
          <SocialMediaBarComponent />
        </IonRow>
      


        <!-- First row; 1-LENSection 2-Investors(Angels)Section -->
        <IonRow class=" bordered-section LENSection ">
          <iframe width="300" height="200" src="https://www.youtube.com/embed/dNjQ_wZBA28" title="🔥Business Advice London - Advice For Entrepreneurs - Mentoring, Coaching  | London Entrepreneurs 🚀" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <p class="WorldLine" > Worlds Best Businesses & Entrepreneurs Are Here in London! </p>
          <IonCol class=" LENMidSection" >
            <p class="FREEline" > Wanna Join Both for <a href="/src/views/SignInSignUpPage.vue" class="FREE-link"> FREE</a> ? </p>
            <p><a href="/src/views/SignInSignUpPage.vue" class="FREE-button" >Click Here </a> </p>
          </IonCol>
          <p class="WorldLine" > Worlds Best Investors & Investees Are Here in London!</p>
          <iframe width="300" height="200" src="https://www.youtube.com/embed/dNjQ_wZBA28" title="🔥Business Advice London - Advice For Entrepreneurs - Mentoring, Coaching  | London Entrepreneurs 🚀" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </IonRow>



        <!-- 2nd row; 1-LiveMapSection 2-MembersNumberSection 3-EventsButtonSection -->
        <IonRow class=" bordered-section MapExhibitingSection ">

          <IonCol class=" bordered-section LiveEventsExhibitingMap ">
            LiveEventsExhibitingMap Component Must be placed here
            <RouterLink to="/eventsShows" routerDirection="forward">
              <img alt="LEN Logo" height="160" src="/public/favicon.png" />
            </RouterLink>
          </IonCol>

          <!--  2-MembersNumberSection -->
          <IonCol class=" bordered-section MembersNumberSection ">
              <IonCol class="MembersTotalIncome">
                <div class="section-title">Members Total Income</div>
                <div class="section-title">Number Component Must be here</div>
              </IonCol>
              <IonCol class="VisitorIncome">
                <div class="section-title">Visitor Income</div>
                <div class="section-title">Number Component Must be here</div>
              </IonCol>
              <IonCol class="ExhibitorRevenue">
                <div class="section-title">Exhibitor Revenue</div>
                <div class="section-title">Number Component Must be here</div>
              </IonCol>
              <IonCol class="Exhibitors">
                <div class="section-title">Exhibitors</div>
                <div class="section-title">Number Component Must be here</div>
              </IonCol>
              <IonCol class="Visitors">
                <div class="section-title">Visitors</div>
                <div class="section-title">Number Component Must be here</div>
              </IonCol>
              <IonCol class="Countries">
                <div class="section-title">Countries</div>
                <div class="section-title">Number Component Must be here</div>
              </IonCol>
          </IonCol>

          <!-- 3-EventsButtonSection -->
          <IonCol class=" bordered-section EventsButtonSection ">
            <p><a href="/src/views/SignInSignUpPage.vue" class="Events-button" >Exhibiting </a> </p>
            <p><a href="/src/views/SignInSignUpPage.vue" class="Events-button" >FREE Visiting </a> </p>
            <p><a href="/src/views/SignInSignUpPage.vue" class="Events-button" >More Events </a> </p>
          </IonCol>
          
        </IonRow>
        



        <!-- Middle Content Section with Left/Right Adverts and Middle Content -->
        <IonRow class=" ">
          <!-- Left Advert Section -->
          <IonCol size="12" size-md="1.5" class="bordered-section LeftAdvertComponent">
            <LeftAd1Component />
            <LeftAd2Component />
            <LeftAd3Component />
            <LeftAd4Component />
          </IonCol>


          <!-- Middle Content Section -->
          <IonCol size="12" size-md="9" class="bordered-section SignInSignUpComponent">
            <!-- 1-Profiles- 2-Offers- 3-Investors section -->
            <IonRow class=" bordered-section ProfilesSection ">
              <ProfilesComponent /><p>Profile component will be here</p>
            </IonRow>
            <IonRow class=" bordered-section OffersSection ">
              <OffersComponent /><p>Offers Needs Best Offers component will be here</p>
            </IonRow>
            <IonRow class=" bordered-section InvestorsSection ">
              <InvestorsComponent /><p>Investors & investees component will be here</p>
            </IonRow>
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
          <IonCol class=" bordered-section FooterComponent">
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
import SocialMediaBarComponent from '@/components/6TempComponents/SocialMediaBarComponent.vue';
import FooterComponent from '@/components/6TempComponents/FooterComponent.vue';
import LeftAd1Component from '@/components/6TempComponents/LeftRightAds/LeftAd1Component.vue';
import LeftAd2Component from '@/components/6TempComponents/LeftRightAds/LeftAd2Component.vue';
import LeftAd3Component from '@/components/6TempComponents/LeftRightAds/LeftAd3Component.vue';
import LeftAd4Component from '@/components/6TempComponents/LeftRightAds/LeftAd4Component.vue';
import RightAd1Component from '@/components/6TempComponents/LeftRightAds/RightAd1Component.vue';
import RightAd2Component from '@/components/6TempComponents/LeftRightAds/RightAd2Component.vue';
import RightAd3Component from '@/components/6TempComponents/LeftRightAds/RightAd3Component.vue';
import RightAd4Component from '@/components/6TempComponents/LeftRightAds/RightAd4Component.vue';

export default defineComponent({
  name: 'HomePage1',
  components: {
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonContent,
    MenuComponent,
    SocialMediaBarComponent,
    FooterComponent,
    LeftAd1Component,
    LeftAd2Component,
    LeftAd3Component,
    LeftAd4Component,
    RightAd1Component,
    RightAd2Component,
    RightAd3Component,
    RightAd4Component,
  },
});
</script>

<style scoped>
ion-grid {
  padding: 0;
  margin: 0;
}

.bordered-section {
  border: 1px solid;
  border-radius: 8px;
}
.WorldLine{
  font-size: 30px;
  padding: 0;
  margin: 0;
}

.FREE-link {
  color: blue;
  text-decoration: none;
}

.FREE-button {
  color: white;
  text-decoration: none;
  background-color: rgb(52, 52, 184);
  padding: 12px;
  border-radius: 10px;
}
.FREE-button:hover {
  background-color: rgb(201, 12, 191);
}

.LENSection {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px; /* Add some gap between items */
  justify-content: center;
  align-content: center;
}
.LENMidSection {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
}

.LENSection p{
  max-width: 200px;
}

.FREEline {
  /* padding-right: 10px; */
  font-size: 20px;
  font-weight: bold;
  color: red;
}
iframe {
  border-radius: 10px;
  margin: 10px;
}




/* MapExhibitingSection style start here*/

.MapExhibitingSection,
.LiveEventsExhibitingMap,
.MembersNumberSection,
.EventsButtonSection {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* align-content: center; */
  text-align: center;

}

.Events-button {
  color: white;
  text-decoration: none;
  background-color: rgb(52, 52, 184);
  padding: 12px;
  border-radius: 10px;
  margin-right: 5px;
}
.Events-button:hover {
  background-color: rgb(201, 12, 191);
}



/* MapExhibitingSection style Ends here*/



@media (max-width: 768px) {
  /* if you can try to make the advert disolaywithin componentts in mobile view */
  .RightAdvertComponent,
  .LeftAdvertComponent {
    display: none;
  }

  .LENSection {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
    gap: 0;
  }
  .LENSection p{
    max-width:none;
    padding: 0 15px;
}

  .WorldLine{
    font-size: 30px;
    padding: 0;
    margin: 0;
  }

}
</style>
