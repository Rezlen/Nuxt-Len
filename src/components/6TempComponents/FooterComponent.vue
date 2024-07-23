<template>
  <IonGrid class="footer">

      <IonCol size="12">
          <ul class="sitemap">
            <li>
              <strong>BUSINESSES/OFFERS</strong>
              <ul>
                <li><a href='/BizOfferNeedPage' class="Items" >All Businesses Profiles</a></li>
                <li><a href='/BizOfferNeedPage' class="Items" >All Offers</a></li>
                <li><a href='/BizOfferNeedPage' class="Items" >Best Offers</a></li>
                <li><a href='/BizOfferNeedPage' class="Items" >All Needs</a></li>
                <li><a href='/BizOfferNeedPage' class="Items" >Advertise For Free</a></li>
              </ul>
            </li>
            <li>
              <strong>ABOUT US</strong>
              <ul>
                <li><a href='/AboutUsPage' class="Items" >About Us</a></li>
                <li>Contact Us</li>
                <li>FAQ</li>
                <li>Sitemap</li>
              </ul>
            </li>
            <li>
              <strong>EVENTS/SHOWS</strong>
              <ul>
                <li><a href='/TheEventShowPage' class="Items" >Events & Shows</a></li>
                <li><a href='/TheEventShowPage' class="Items" >Exhibitors</a></li>
                <li><a href='/TheEventShowPage' class="Items" >Visitors</a></li>
                <li><a href='/TheEventShowPage' class="Items" >Exhibiting</a></li>
              </ul>
            </li>
            <li>
              <strong>OTHERS</strong>
              <ul>
                <li>Feed</li>
                <li><a href='/SignInSignUpPage' class="Items" >Login</a></li>
                <li>VIP Membership</li>
                <li><a href='/SignInSignUpPage' class="Items" >Forgot Password</a></li>
              </ul>
            </li>
            <li>
              <strong>Investors & Investees</strong>
              <ul>
                <li><a href='/InvestorsInvesteesPage' class="Items" >Apply For Investment</a></li>
                <li><a href='/InvestorsInvesteesPage' class="Items" >Provide Investment</a></li>
                <li><a href='/InvestorsInvesteesPage' class="Items" >Investors</a></li>
                <li><a href='/InvestorsInvesteesPage' class="Items" >Investees</a></li>
              </ul>
            </li>
            <li>
              <strong>ADVERTS</strong>
              <ul>
                <li>Adverts</li>
                <li>Adverts Offer & Needs</li>
                <li>Adverts Feature Profile</li>
                <li>Adverts Left Right</li>
              </ul>
            </li>
            <li>
              <strong>POLICIES</strong>
              <ul>
                <li><a href='/TermsConditionsPage' class="Items" >Terms & Conditions</a></li>
                <li>Cancellation Policy</li>
                <li><a href='/PrivacyPolicyPage' class="Items" >Privacy Policy</a></li>
              </ul>
            </li>
            <li>
              <strong>CONTACT US</strong>
              <ul>
                <li>Wework Moorgate</li>
                <li>1 Fore Street, EC2Y 5EJ, London</li>
                <li>07591020664</li>
              </ul>
            </li>
            <li>
              <strong>MORE OPTIONS</strong>
              <ul>
                <li>Rewards & Discounts</li>
                <li>Shares</li>
                <li>Sponsorship/Partnership</li>
                <li>Sponsors/Partners</li>
                <li>Services/Products Exchange</li>
                <li>Gallery</li>
                <li>Business Advice</li>
                <li>Blog</li>
                <li>Groups</li>
              </ul>
            </li>
          </ul>
      </IonCol>
  </IonGrid>
</template>

<script lang="ts">
import { IonGrid, IonRow, IonCol } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FooterComponent',
  components: {
    IonGrid,
    IonRow,
    IonCol,
  },
});
</script>

<style scoped>
.footer {
  color: rgb(3, 2, 2);
  font-family: Arial, sans-serif;
  font-size: small;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}

.sitemap {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; 
  align-items: flex-start; 
  background-size: cover;
  background-position: top;
  background-image: url('../../Images/FooterLondonImage.gif');
  padding-top: 20px;
  padding-bottom: 20px;
}

.sitemap > li {
  margin: 10px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Ensure items are aligned to the bottom within each column */
}

.sitemap ul {
  padding-left: 0;
}
a {
  /* text-decoration: none; */
  color: black;
}

@media (max-width: 768px) {

  .sitemap {
    flex-direction: column; /* Stack items vertically on mobile */
    align-items: flex-start; /* Ensure alignment remains on mobile */
  }

  .sitemap > li {
    text-align: left; /* Align text to the left */
  }
}

@media (max-width: 480px) {
  .sitemap {
    font-size: 14px; /* Smaller font size on very small screens */
  }
}
</style>
