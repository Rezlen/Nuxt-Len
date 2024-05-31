<template>
  <IonPage>
    <div class="login-signup-container">
      <IonGrid>
        <IonRow class="login-signup-row">
          <!-- Login Section -->
          <IonCol size="12" size-md="6" class="login-section">
            <h2>Login</h2>
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
              <IonButton expand="block" @click="handleLogin" class="action-button">Login</IonButton>
              <p>Or Login With</p>
              <div class="social-icons">
                <IonIcon :icon="logoFacebook" class="facebook-icon" />
                <IonIcon :icon="logoTwitter" class="twitter-icon" />
                <IonIcon :icon="logoGoogle" class="google-icon" />
                <IonIcon :icon="logoLinkedin" class="linkedin-icon" />
              </div>
            </div>
          </IonCol>
          <!-- SignUp Section -->
          <IonCol size="12" size-md="6" class="signup-section">
            <h2>Sign Up</h2>
            <div class="input-row">
              <ion-input
                v-model="signupName"
                label="Type Your Full Name"
                label-placement="floating"
                fill="outline"
                type="text"
                class="input-field"
              ></ion-input>
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
              <p>Or Sign Up With</p>
              <div class="social-icons">
                <IonIcon :icon="logoFacebook" class="facebook-icon" />
                <IonIcon :icon="logoTwitter" class="twitter-icon" />
                <IonIcon :icon="logoGoogle" class="google-icon" />
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
            <IonButton expand="block" color="tertiary" class="vip-button">VIP & VVIP Sign Up Options</IonButton>
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
  background-color: #f5f5f5;
  padding: 20px;
  font-family: Arial, sans-serif;
  overflow-y: auto;
}

.login-signup-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.login-section, .signup-section {
  background-color: #e6f7ff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex: 1;
}

.login-section h2, .signup-section h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.input-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.input-field {
  flex: 1;
  min-width: calc(50% - 10px);
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
  font-size: 24px;
  color: #3b5998;
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
  --background: #800080;
  font-size: 16px;
  width: 50%;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .login-signup-row {
    flex-direction: column;
  }
  
  .input-field {
    min-width: 100%;
  }

  .action-button {
    width: 100%;
  }

  .vip-button {
    width: 100%;
  }
}
</style>
