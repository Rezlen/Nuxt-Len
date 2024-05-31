
<template>
  <IonPage>
    <div class="login-signup-container">
      <IonGrid>
        <IonRow class="login-signup-row">
          <!-- Login Section -->
          <IonCol size="12" size-md="6" class="login-section">
            <h2>All Members SignIn</h2>
            <div class="input-row">
              <ion-input
                v-model="loginEmail"
                label="Type Your Email"
                label-placement="floating"
                fill="outline"
                type="email"
                class="input-field"
              ></ion-input>
              <ion-input
                v-model="loginPassword"
                label="Type Your Password"
                label-placement="floating"
                fill="outline"
                type="password"
                class="input-field"
              ></ion-input>
            </div>
            <div class="remember-me">
              <ion-checkbox v-model="rememberMe" slot="start"></ion-checkbox>
              <label>Remember Me</label>
            </div>
            <div class="action-row">
              <IonButton expand="block" @click="handleLogin" class="action-button">Log In</IonButton>
              <p>Or SignIn With</p>
              <div class="social-icons">
                <IonIcon :icon="logoGoogle" class="google-icon" />
                <IonIcon :icon="logoFacebook" class="facebook-icon" />
                <IonIcon :icon="logoTwitter" class="twitter-icon" />
                <IonIcon :icon="logoLinkedin" class="linkedin-icon" />
              </div>
            </div>
          </IonCol>
          <!-- SignUp Section -->
          <IonCol size="12" size-md="6" class="signup-section">
            <h2>FREE SignUp</h2>
            <div class="input-row">
              <ion-input
                v-model="signupEmail"
                label="Type Your Email"
                label-placement="floating"
                fill="outline"
                type="email"
                class="input-field"
              ></ion-input>
              <ion-input
                v-model="signupPassword"
                label="Type Your Password"
                label-placement="floating"
                fill="outline"
                type="password"
                class="input-field"
              ></ion-input>
            </div>
            <div class="action-row">
              <IonButton expand="block" @click="handleSignUp" class="action-button">Sign Up</IonButton>
              <p>Or SignUp With</p>
              <div class="social-icons">
                <IonIcon :icon="logoGoogle" class="google-icon" />
                <IonIcon :icon="logoFacebook" class="facebook-icon" />
                <IonIcon :icon="logoTwitter" class="twitter-icon" />
                <IonIcon :icon="logoLinkedin" class="linkedin-icon" />
              </div>
              <p class="terms">
                By clicking on Sign Up, you agree to London Entrepreneurs Network's 
                <a href="/terms" class="terms-link">TERMS & CONDITIONS</a> and 
                <a href="/privacy" class="terms-link">PRIVACY POLICY</a>.
              </p>
            </div>
          </IonCol>
        </IonRow>
        <!-- VIP & VVIP Sign Up Options -->
        <IonRow>
          <IonCol size="12" class="vip-signup-options">
            <IonButton color="purple" class="vip-button">VIP & VVIP Sign Up Options</IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  </IonPage>
</template>



<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonGrid, IonRow, IonCol, IonButton, IonIcon, IonCheckbox } from '@ionic/vue';
import { logoFacebook, logoTwitter, logoGoogle, logoLinkedin } from 'ionicons/icons';

export default defineComponent({
  name: 'LoginSignUp',
  components: {
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonIcon,
    IonCheckbox,
  },
  data() {
    return {
      loginEmail: '',
      loginPassword: '',
      signupName: '',
      signupEmail: '',
      signupPassword: '',
      rememberMe: false,
      logoFacebook,
      logoTwitter,
      logoGoogle,
      logoLinkedin,
    };
  },
  methods: {
    handleLogin() {
      // Handle login logic
      console.log('Login:', this.loginEmail, this.loginPassword, this.rememberMe);
    },
    handleSignUp() {
      // Handle sign up logic
      console.log('Sign Up:', this.signupName, this.signupEmail, this.signupPassword);
    },
  },
});
</script>

  
  
  <style scoped>
.login-signup-container {
  background-color: #f5f5f5; /* Use the same background color as the reference */
  padding: 20px;
  font-family: Arial, sans-serif; /* Use the same font family */
  overflow-y: auto;
}

.login-signup-row {
  display: flex;
  flex-wrap: wrap;
}

.login-section, .signup-section {
  background-color: #e6f7ff; /* Light blue background for sections */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: #3b5998 solid 1px;

}

.login-section h2, .signup-section h2 {
  font-size: 24px; /* Match the font size */
  margin-bottom: 20px;
}

.input-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.input-field {
  flex: 1;
  /* min-width: 5%; */
  border: solid 1px gray;
  border-radius: 10px;
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
}

.action-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.action-button {
  width: 100%;
}

.social-icons {
  display: flex;
  gap: 10px;
}

.social-icons ion-icon {
  font-size: 24px; /* Match the icon size */
  color: #3b5998; /* Default color for social media icons */
}

.social-icons .twitter-icon {
  color: #1da1f2;
}

.social-icons .google-icon {
  color: #db4437;
}

.social-icons .linkedin-icon {
  color: #0077b5;
}

.terms {
  text-align: center;
  font-size: 12px;
  margin-top: 10px;
}

.terms-link {
  color: blue;
  text-decoration: none;
}

.terms-link:hover {
  text-decoration: underline;
}

.vip-signup-options {
  text-align: center;
  margin-top: 20px;
}

.vip-button {
  background-color: purple;
  font-size: 16px; /* Match the font size */
  width: 30%;
  height: 130%;
  border-radius: 10px;
  --border-color: #000;
  --border-style: solid;
  --border-width: 2px;
}

@media (max-width: 768px) {
  .login-signup-row {
    flex-direction: column;
  }
  
  .input-field {
    min-width: 100%;
  }

  .vip-button {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .social-icons ion-icon {
    font-size: 20px;
  }

  .login-section h2, .signup-section h2 {
    font-size: 20px;
  }
}
</style>
