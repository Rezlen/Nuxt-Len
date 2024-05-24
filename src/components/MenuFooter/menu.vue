<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-grid>
          <ion-row class="MenuRow">

            <ion-col class="MenuCol" size="auto">
              <ion-title>LEN LOGO</ion-title>
            </ion-col>

            <ion-col class="MenuCol" size="auto">
              <ion-title>Home</ion-title>
            </ion-col>

            <ion-col class="MenuCol" size="auto">
              <ion-title>Businesses & Offers</ion-title>
            </ion-col>

            <ion-col class="MenuCol" size="auto">
              <ion-title>Events & Shows</ion-title>
            </ion-col>

            <ion-col class="MenuCol" size="auto">
              <ion-title>FREE Pitching</ion-title>
            </ion-col>

            <ion-col class="MenuCol" size="auto">
              <ion-title>Feeds</ion-title>
            </ion-col>

            <ion-col class="MenuCol" size="auto">
              <ion-title>VIP Membership</ion-title>
            </ion-col>

            <ion-col class="MenuCol" size="auto">
              <ion-title>More Options</ion-title>
            </ion-col>

            <ion-col class="MenuCol" size="auto">
              <ion-title>Subscription</ion-title>
            </ion-col>

            <ion-col class="MenuCol" size="auto">
              <ion-title>SignIn</ion-title>
            </ion-col>
            
          </ion-row>
        </ion-grid>
      </ion-toolbar>
    </ion-header>
    <ion-content></ion-content>
  </ion-page>
</template>


<script setup lang="ts">
  import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol,
  } from '@ionic/vue';
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

  .MenuCol {
      display: flex;
      align-items: center;
      justify-content: center;
  }

</style>
