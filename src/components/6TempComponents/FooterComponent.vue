<template>
  <IonFooter class="footer">
    <IonGrid>
      <IonRow class="footer-content">
        <IonCol size="12">
          <div class="sitemap-wrapper">
            <ul class="sitemap">
              <li>
                <strong>BUSINESSES/OFFERS</strong>
                <ul>
                  <li>All Businesses Profiles</li>
                  <li>All Offers</li>
                  <li>Best Offers</li>
                  <li>All Needs</li>
                  <li>Advertise For Free</li>
                </ul>
              </li>
              <li>
                <strong>ABOUT US</strong>
                <ul>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>FAQ</li>
                  <li>Sitemap</li>
                </ul>
              </li>
              <li>
                <strong>EVENTS/SHOWS</strong>
                <ul>
                  <li>Events & Shows</li>
                  <li>Exhibitors</li>
                  <li>Visitors</li>
                  <li>Exhibiting</li>
                </ul>
              </li>
              <li>
                <strong>OTHERS</strong>
                <ul>
                  <li>Feed</li>
                  <li>Login</li>
                  <li>VIP Membership</li>
                  <li>Forgot Password</li>
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
                <strong>MORE OPTIONS</strong>
                <ul>
                  <li>Rewards & Discounts</li>
                  <li>Apply For Investment</li>
                  <li>Provide Investment</li>
                  <li>Investors</li>
                  <li>Investees</li>
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
              <li>
                <strong>POLICIES</strong>
                <ul>
                  <li>Terms & Conditions</li>
                  <li>Cancellation Policy</li>
                  <li>Privacy Policy</li>
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
            </ul>
          </div>
        </IonCol>
      </IonRow>
    </IonGrid>
  </IonFooter>
</template>

<script lang="ts">
import { IonFooter, IonGrid, IonRow, IonCol } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonFooter,
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
  background-size: cover;
  background-position: top;
  background-image: url('../../Images/FooterLondonImage.gif');
  height: 400px;
  display: flex;
  align-items: flex-end;
}


.sitemap {
  list-style-type: none;
  padding-left: 5px;
  margin: 0;
  display: flex;
  flex-wrap: wrap; /* Important to have the Lists within the frame */
  /* justify-content: center; */
  overflow-y: auto; 
  /* Makes the list scrollable if it overflows */
  align-items: flex-start;
  /* align-content: flex-end; */
  height: 250px;
}

.sitemap > li {
  margin: 10px;
  text-align: left;
}

.sitemap ul {
  padding-left: 0;
}

@media (max-width: 768px) {

  .sitemap {
    flex-direction: row; /* Stack items vertically on mobile */
    align-items: center;
    max-height: 250px; /* Adjust this value as needed */

  }

  .sitemap > li {
    text-align: left; /* Center text on mobile */
  }
}

@media (max-width: 480px) {
  .sitemap {
    font-size: 14px; /* Smaller font size on very small screens */
  }
}
</style>
