<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Inbox</ion-title>
      </ion-toolbar>
    </ion-header>


    <ion-content :fullscreen="true">
      <ion-refresher slot="fixed" @ionRefresh="refresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>

      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Inboxxxx</ion-title>
        </ion-toolbar>
      </ion-header>

<!-- signup button here https://ionicframework.com/docs/api/grid#vertical-alignment -->
<br/>
  <ion-grid >
    <ion-row class="SignupFields">
      <ion-col class="SignupFields" size="auto">
        <ion-input label="Type Your Email" label-placement="floating" fill="outline" type="email" ></ion-input>
      </ion-col>

      <ion-col class="SignupFields" size="auto">
        <ion-input label="Type Your Password" label-placement="floating" fill="outline" type="password" value="password" ></ion-input>
      </ion-col>

      <ion-col class="SignupFields" size="auto">
        <ion-input label="ReType Your Password" label-placement="floating" fill="outline" type="password" value="password"></ion-input>
      </ion-col>
    </ion-row>

    <ion-row>
      <ion-col class="SignupFields">
        <ion-button>SignUp</ion-button>
      </ion-col>
    </ion-row>

    <ion-row>
      <ion-col class="SignupFields">
        <!-- <ion-button expand="block" href="/Login"><ion-icon slot="start" :icon="logoGoogle" />Googleee</ion-button>  -->
        <ion-button expand="block" href="../components/MenuFooter/Menu.vue"><ion-icon slot="start" :icon="logoGoogle" />Googleee</ion-button> 
      </ion-col>
    </ion-row>

  <ion-item class="OutPut">Displaying the imported conatact list here</ion-item>
</ion-grid>

<!-- signup button here -->


      <ion-list>
        <MessageListItem v-for="message in messages" :key="message.id" :message="message" />
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  IonButton, IonIcon, IonInput, IonItem,
} from '@ionic/vue';
import MessageListItem from '@/components/MessageListItem.vue';
import { getMessages, Message } from '@/data/messages';
import { ref } from 'vue';
import { logoGoogle } from "ionicons/icons";

const messages = ref<Message[]>(getMessages());

const refresh = (ev: CustomEvent) => {
  setTimeout(() => {
    ev.detail.complete();
  }, 3000);
};
</script>

<style>

  ion-input {
    margin: 5px;
  }
  .OutPut {
    height: 200px;
    border: solid;
    margin: 20px;
    background-color: aqua;
  }

.SignupFields {
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>
