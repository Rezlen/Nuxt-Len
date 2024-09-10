<template>
  <IonGrid>
    <!-- Header text -->
     <p class="Header"><b>Advance Targeted Advertising</b></p>
    <p class="Header">You can choose to show your advert to people or businesses with one or many specification listed
      below:</p>


    <!-- Section Headers with Toggle Functionality -->
    <IonRow>
      <!--//////////////// Show your advert to people who NEED:://///////////////////////// -->
      <IonRow class="Head">
        <div class="label" @click="toggleSection('section1')">
          Show your advert to people who NEED:
        </div>

        <!-- Conditional rendering based on section visibility -->
        <IonRow v-if="isSectionVisible('section1')" class="advance4Rows">

          <IonCol class="threeColDivision">
            <IonCol class="advanceCol">
              <IonRow class="advanceRowsBorder">
                <IonCol class="pushColToLeft">
                  <IonSelect v-model="selectedCountry" interface="popover" label="Investment in" placeholder="Country"
                    :multiple="true">
                    <IonSelectOption value="Week">Week</IonSelectOption>
                    <IonSelectOption value="Month">Month</IonSelectOption>
                    <IonSelectOption value="Every 2 Months">Every 2 Months</IonSelectOption>
                  </IonSelect>
                </IonCol>
                <IonCol class="pushColToLeft">
                  <IonSelect v-model="selectedCity" interface="popover" placeholder="City" :multiple="true">
                    <IonSelectOption value="Week">Week</IonSelectOption>
                    <IonSelectOption value="Month">Month</IonSelectOption>
                    <IonSelectOption value="Every 2 Months">Every 2 Months</IonSelectOption>
                  </IonSelect>
                </IonCol>
              </IonRow>
            </IonCol>

            <IonCol class="advanceCol">
              <IonRow class="advanceRowsBorder">
                <IonCol class="pushColToLeft">
                  <IonSelect v-model="selectedCountry" interface="popover" label="Marketing in" placeholder="Country"
                    :multiple="true">
                    <IonSelectOption value="Week">Week</IonSelectOption>
                    <IonSelectOption value="Month">Month</IonSelectOption>
                    <IonSelectOption value="Every 2 Months">Every 2 Months</IonSelectOption>
                  </IonSelect>
                </IonCol>
                <IonCol class="pushColToLeft">
                  <IonSelect v-model="selectedCity" interface="popover" placeholder="City" :multiple="true">
                    <IonSelectOption value="Week">Week</IonSelectOption>
                    <IonSelectOption value="Month">Month</IonSelectOption>
                    <IonSelectOption value="Every 2 Months">Every 2 Months</IonSelectOption>
                  </IonSelect>
                </IonCol>
              </IonRow>
            </IonCol>

            <IonCol class="advanceCol">
              <IonRow class="advanceRowsBorder">
                <IonCol class="pushColToLeft">
                  <IonSelect v-model="selectedCountry" interface="popover" label="Business Advice in"
                    placeholder="Country" :multiple="true">
                    <IonSelectOption value="Week">Week</IonSelectOption>
                    <IonSelectOption value="Month">Month</IonSelectOption>
                    <IonSelectOption value="Every 2 Months">Every 2 Months</IonSelectOption>
                  </IonSelect>
                </IonCol>
                <IonCol class="pushColToLeft">
                  <IonSelect v-model="selectedCity" interface="popover" placeholder="City" :multiple="true">
                    <IonSelectOption value="Week">Week</IonSelectOption>
                    <IonSelectOption value="Month">Month</IonSelectOption>
                    <IonSelectOption value="Every 2 Months">Every 2 Months</IonSelectOption>
                  </IonSelect>
                </IonCol>
              </IonRow>
            </IonCol>
          </IonCol>


          <IonCol class="threeColDivision">
            <IonCol class="advanceCol">
              <IonRow class="advanceRowsBorder">
                <IonCol class="pushColToLeft">
                  <IonSelect v-model="selectedCountry" interface="popover" label="Accounting in" placeholder="Country"
                    :multiple="true">
                    <IonSelectOption value="Week">Week</IonSelectOption>
                    <IonSelectOption value="Month">Month</IonSelectOption>
                    <IonSelectOption value="Every 2 Months">Every 2 Months</IonSelectOption>
                  </IonSelect>
                </IonCol>
                <IonCol class="pushColToLeft">
                  <IonSelect v-model="selectedCity" interface="popover" placeholder="City" :multiple="true">
                    <IonSelectOption value="Week">Week</IonSelectOption>
                    <IonSelectOption value="Month">Month</IonSelectOption>
                    <IonSelectOption value="Every 2 Months">Every 2 Months</IonSelectOption>
                  </IonSelect>
                </IonCol>
              </IonRow>
            </IonCol>

            <IonCol class="advanceCol">
              <IonRow class="advanceRowsBorder">
                <IonCol class="pushColToLeft">
                  <IonSelect v-model="selectedCountry" interface="popover" label="Legal Help in" placeholder="Country"
                    :multiple="true">
                    <IonSelectOption value="Week">Week</IonSelectOption>
                    <IonSelectOption value="Month">Month</IonSelectOption>
                    <IonSelectOption value="Every 2 Months">Every 2 Months</IonSelectOption>
                  </IonSelect>
                </IonCol>
                <IonCol class="pushColToLeft">
                  <IonSelect v-model="selectedCity" interface="popover" placeholder="City" :multiple="true">
                    <IonSelectOption value="Week">Week</IonSelectOption>
                    <IonSelectOption value="Month">Month</IonSelectOption>
                    <IonSelectOption value="Every 2 Months">Every 2 Months</IonSelectOption>
                  </IonSelect>
                </IonCol>
              </IonRow>
            </IonCol>

            <IonCol class="advanceCol">
              <IonRow class="advanceRowsBorder">
                <IonCol class="pushColToLeft">
                  <IonSelect v-model="selectedCountry" interface="popover" label="Development, Website, App in"
                    placeholder="Country" :multiple="true">
                    <IonSelectOption value="Week">Week</IonSelectOption>
                    <IonSelectOption value="Month">Month</IonSelectOption>
                    <IonSelectOption value="Every 2 Months">Every 2 Months</IonSelectOption>
                  </IonSelect>
                </IonCol>
                <IonCol class="pushColToLeft">
                  <IonSelect v-model="selectedCity" interface="popover" placeholder="City" :multiple="true">
                    <IonSelectOption value="Week">Week</IonSelectOption>
                    <IonSelectOption value="Month">Month</IonSelectOption>
                    <IonSelectOption value="Every 2 Months">Every 2 Months</IonSelectOption>
                  </IonSelect>
                </IonCol>
              </IonRow>
            </IonCol>
          </IonCol>


          <IonCol class="threeColDivision">
            <IonCol class="advanceCol">
              <IonRow class="advanceRowsBorder">
                <IonCol class="pushColToLeft">
                  <IonSelect v-model="selectedCountry" interface="popover" label="Office Space in" placeholder="Country"
                    :multiple="true">
                    <IonSelectOption value="Week">Week</IonSelectOption>
                    <IonSelectOption value="Month">Month</IonSelectOption>
                    <IonSelectOption value="Every 2 Months">Every 2 Months</IonSelectOption>
                  </IonSelect>
                </IonCol>
                <IonCol class="pushColToLeft">
                  <IonSelect v-model="selectedCity" interface="popover" placeholder="City" :multiple="true">
                    <IonSelectOption value="Week">Week</IonSelectOption>
                    <IonSelectOption value="Month">Month</IonSelectOption>
                    <IonSelectOption value="Every 2 Months">Every 2 Months</IonSelectOption>
                  </IonSelect>
                </IonCol>
              </IonRow>
            </IonCol>

            <IonCol class="advanceCol">
              <IonRow class="advanceRowsBorder">
                <IonCol class="pushColToLeft">
                  <IonSelect v-model="selectedCountry" interface="popover" label="Video Production in"
                    placeholder="Country" :multiple="true">
                    <IonSelectOption value="Week">Week</IonSelectOption>
                    <IonSelectOption value="Month">Month</IonSelectOption>
                    <IonSelectOption value="Every 2 Months">Every 2 Months</IonSelectOption>
                  </IonSelect>
                </IonCol>
                <IonCol class="pushColToLeft">
                  <IonSelect v-model="selectedCity" interface="popover" placeholder="City" :multiple="true">
                    <IonSelectOption value="Week">Week</IonSelectOption>
                    <IonSelectOption value="Month">Month</IonSelectOption>
                    <IonSelectOption value="Every 2 Months">Every 2 Months</IonSelectOption>
                  </IonSelect>
                </IonCol>
              </IonRow>
            </IonCol>
          </IonCol>



        </IonRow>
      </IonRow>

      <!--//////////////// Show your advert to people with General & Financial Activities://///////////////////////// -->
      <IonRow class="Head">
        <div class="label" @click="toggleSection('section2')">
          Show your advert to people with General & Financial Activities:
        </div>

        <!-- Conditional rendering based on section visibility -->
        <IonRow v-if="isSectionVisible('section2')" class="advance4Rows">


          <IonCol class="threeColDivision">
            <IonRow class="advanceRowsBorder">
              <IonCol class="pushColToLeft">
                <IonItem class="checkBoxInputFields">
                  <IonCheckbox slot="start" v-model="checkboxStates.checkbox1">Membership Normal[17]</IonCheckbox>
                  <IonCheckbox slot="start" v-model="checkboxStates.checkbox2">VIP[55]</IonCheckbox>
                  <IonCheckbox slot="start" v-model="checkboxStates.checkbox3">VVIP[67]</IonCheckbox>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow class="advanceRowsBorder">
              <IonCol class="pushColToLeft ">
                <IonItem class="checkBoxInputFields">
                  <IonInput v-model="formFields.exhibitedMoreThan" type="text" :counter="true" :maxlength="2"
                    placeholder="Exhibited[17] more than:"></IonInput>&/or
                  <IonInput v-model="formFields.visitedMoreThan" type="text" :counter="true" :maxlength="2"
                    placeholder="Visited[17] more than:"></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow class="advanceRowsBorder">
              <IonCol class="pushColToLeft ">
                <IonItem class="checkBoxInputFields">
                  <IonInput v-model="formFields.paidMoreThan" type="text" class="custom" :counter="true" :maxlength="5"
                    label-placement="floating" label="EXHIBITORS[23] who paid more than £"></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow class="advanceRowsBorder">
              <IonCol class="pushColToLeft ">
                <IonItem class="checkBoxInputFields">
                  <IonInput v-model="formFields.purchasedMoreThan" type="text" :counter="true" :maxlength="5"
                    label-placement="floating" label="PURCHASED on LEN website[343] more than £"></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

          </IonCol>

          <IonCol class="threeColDivision">

            <IonRow class="advanceRowsBorder">
              <IonCol class="pushColToLeft ">
                <IonItem class="checkBoxInputFields">
                  <IonInput v-model="formFields.profilesVisitedMoreThan" type="text" :counter="true" :maxlength="5"
                    label-placement="floating" label="PROFILEs visited[33] more than"></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow class="advanceRowsBorder">
              <IonCol class="pushColToLeft ">
                <IonItem class="checkBoxInputFields">
                  <IonInput v-model="formFields.profilesCompletionAbove" type="text" :counter="true" :maxlength="5"
                    label-placement="floating" label="PROFILEs [44k] % completion is above %"></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow class="advanceRowsBorder">
              <IonCol class="pushColToLeft ">
                <IonItem class="checkBoxInputFields">
                  <IonInput v-model="formFields.membersConnectionsMoreThan" type="text" :counter="true" :maxlength="5"
                    label-placement="floating" label="Members [333k] with CONNECTION more than"></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow class="advanceRowsBorder">
              <IonCol class="pushColToLeft ">
                <IonItem class="checkBoxInputFields">
                  <IonInput v-model="formFields.loggedIntoProfileMoreThan" type="text" :counter="true" :maxlength="5"
                    label-placement="floating" label="Logged into [333k] their profile more than"></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

          </IonCol>

          <IonCol class="threeColDivision">
            <IonRow class="advanceRowsBorder">
              <IonCol class="pushColToLeft">
                <IonItem class="checkBoxInputFields">
                  <IonCheckbox slot="start" v-model="checkboxStates.checkbox4">NOT PURCHASED[17k] anything on LEN
                    website</IonCheckbox>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow class="advanceRowsBorder">
              <IonCol class="pushColToLeft">
                <IonItem class="checkBoxInputFields">
                  <IonSelect v-model="selectedCountry" interface="popover"
                    label="Investees[44] Posted 'APPLY FOR INVESTMENT' form, in" placeholder="Category"
                    :multiple="true">
                    <IonSelectOption value="Week">Week</IonSelectOption>
                    <IonSelectOption value="Month">Month</IonSelectOption>
                    <IonSelectOption value="Every 2 Months">Every 2 Months</IonSelectOption>
                  </IonSelect>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow class="advanceRowsBorder">
              <IonCol class="pushColToLeft">
                <IonItem class="checkBoxInputFields">
                  <IonSelect v-model="selectedCountry" interface="popover"
                    label="Investors[33] Posted 'Provide INVESTMENT' form, in" placeholder="Category" :multiple="true">
                    <IonSelectOption value="Week">Week</IonSelectOption>
                    <IonSelectOption value="Month">Month</IonSelectOption>
                    <IonSelectOption value="Every 2 Months">Every 2 Months</IonSelectOption>
                  </IonSelect>
                </IonItem>
              </IonCol>
            </IonRow>

          </IonCol>


        </IonRow>
      </IonRow>

      <!--//////////////// Show your advert to people with Personal Specifications://///////////////////////// -->
      <IonRow class="Head">
        <div class="label" @click="toggleSection('section3')">
          Show your advert to people with Personal Specifications:
        </div>

        <!-- Conditional rendering based on section visibility -->
        <IonRow v-if="isSectionVisible('section3')" class="advance4Rows">

          <IonCol class="threeColDivision">
            <IonRow class="advanceRowsBorder">
              <IonCol class="pushColToLeft ">
                <IonItem class="checkBoxInputFields">
                  <IonInput v-model="formFields.malesAgeFrom" type="text" :counter="true" :maxlength="2"
                    placeholder="Males[17] Age from:"></IonInput>to
                  <IonInput v-model="formFields.malesAgeTo" type="text" :counter="true" :maxlength="2">
                  </IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow class="advanceRowsBorder">
              <IonCol class="pushColToLeft ">
                <IonItem class="checkBoxInputFields">
                  <IonInput v-model="formFields.femalesAgeFrom" type="text" :counter="true" :maxlength="2"
                    placeholder="Females[19] Age from:"></IonInput>to
                  <IonInput v-model="formFields.femalesAgeTo" type="text" :counter="true" :maxlength="2">
                  </IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow class="advanceRowsBorder">
              <IonCol class="pushColToLeft ">
                <IonItem class="checkBoxInputFields">
                  <IonInput v-model="formFields.salaryFrom" type="text" :counter="true" :maxlength="5"
                    placeholder="Salary[17] from:"></IonInput>to
                  <IonInput v-model="formFields.salaryTo" type="text" :counter="true" :maxlength="5">
                  </IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

          </IonCol>

          <IonCol class="threeColDivision">
            <IonRow class="advanceRowsBorder">
              <IonCol class="pushColToLeft">
                <IonItem class="checkBoxInputFields">
                  <IonSelect v-model="selectedCountry" interface="popover" label="Job[44]" placeholder="Category"
                    :multiple="true">
                    <IonSelectOption value="Week">Week</IonSelectOption>
                    <IonSelectOption value="Month">Month</IonSelectOption>
                    <IonSelectOption value="Every 2 Months">Every 2 Months</IonSelectOption>
                  </IonSelect>
                </IonItem>
              </IonCol>
            </IonRow>





            <IonRow class="advanceRowsBorder">
              <IonCol class="pushColToLeft">
                <IonSelect v-model="selectedCountry" interface="popover" label="Personal" placeholder="Country"
                  :multiple="true">
                  <IonSelectOption value="Week">Week</IonSelectOption>
                  <IonSelectOption value="Month">Month</IonSelectOption>
                  <IonSelectOption value="Every 2 Months">Every 2 Months</IonSelectOption>
                </IonSelect>
              </IonCol>
              <IonCol class="pushColToLeft">
                <IonSelect v-model="selectedCity" interface="popover" placeholder="City" :multiple="true">
                  <IonSelectOption value="Week">Week</IonSelectOption>
                  <IonSelectOption value="Month">Month</IonSelectOption>
                  <IonSelectOption value="Every 2 Months">Every 2 Months</IonSelectOption>
                </IonSelect>
              </IonCol>
            </IonRow>
          </IonCol>


          <IonCol class="threeColDivision">
            <IonRow class="advanceRowsBorder">
              <IonCol class="pushColToLeft">
                <IonItem class="checkBoxInputFields">
                  <IonCheckbox slot="start" v-model="checkboxStates.checkbox5">Members with <span class="bold">PERSONAL
                      LandLine</span>[333]</IonCheckbox>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow class="advanceRowsBorder">
              <IonCol class="pushColToLeft">
                <IonItem class="checkBoxInputFields">
                  <IonCheckbox slot="start" v-model="checkboxStates.checkbox6">Members with <span class="bold">PERSONAL
                      Mobile</span>[333]</IonCheckbox>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow class="advanceRowsBorder">
              <IonCol class="pushColToLeft">
                <IonItem class="checkBoxInputFields">
                  <IonCheckbox slot="start" v-model="checkboxStates.checkbox7">Members with <span class="bold">PERSONAL
                      Profile Image</span>[333]</IonCheckbox>
                </IonItem>
              </IonCol>
            </IonRow>

          </IonCol>


          <IonRow class="advanceRowsBorder">
            <IonCol class="pushColToLeft">
              <IonItem class="checkBoxInputFields">
                <IonCheckbox slot="start" v-model="checkboxStates.checkbox8">Members with personal FaceBook Link[17]
                </IonCheckbox>
                <IonCheckbox slot="start" v-model="checkboxStates.checkbox9">Linked Link[55]</IonCheckbox>
                <IonCheckbox slot="start" v-model="checkboxStates.checkbox10">Instagram Link[67]</IonCheckbox>
                <IonCheckbox slot="start" v-model="checkboxStates.checkbox11">Twitter/X Link[67]</IonCheckbox>
                <IonCheckbox slot="start" v-model="checkboxStates.checkbox12">YouTube Link[67]</IonCheckbox>
                <IonCheckbox slot="start" v-model="checkboxStates.checkbox13">Website Link[67]</IonCheckbox>

              </IonItem>
            </IonCol>
          </IonRow>
        </IonRow>
      </IonRow>

      <!--//////////////// Show your advert to people with Business or Company Specifications://///////////////////////// -->
      <IonRow class="Head">
        <div class="label" @click="toggleSection('section4')">
          Show your advert to people with Business or Company Specifications:
        </div>

        <!-- Conditional rendering based on section visibility -->
        <IonRow v-if="isSectionVisible('section4')" class="advance4Rows">

          <IonCol class="threeColDivision">
            <IonRow class="advanceRowsBorder">
              <IonCol class="pushColToLeft">
                <IonItem class="checkBoxInputFields">
                  <IonCheckbox slot="start" v-model="checkboxStates.checkbox14">Members with <span class="bold">"WHO WE
                      ARE, WHAT WE DO£</span>[333]
                  </IonCheckbox>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow class="advanceRowsBorder">
              <IonCol class="pushColToLeft">
                <IonItem class="checkBoxInputFields">
                  <IonCheckbox slot="start" v-model="checkboxStates.checkbox15">Members with <span class="bold">"WHAT WE
                      ARE LOOKING FOR"</span>[333]</IonCheckbox>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow class="advanceRowsBorder">
              <IonCol class="pushColToLeft">
                <IonItem class="checkBoxInputFields">
                  <IonCheckbox slot="start" v-model="checkboxStates.checkbox16">Members with <span class="bold">"WHAT WE
                      PROVIDE"</span>[333]
                  </IonCheckbox>
                </IonItem>
              </IonCol>
            </IonRow>




          </IonCol>

          <IonCol class="threeColDivision">

            <IonRow class="advanceRowsBorder">
              <IonCol class="pushColToLeft ">
                <IonItem class="checkBoxInputFields">
                  <IonInput v-model="formFields.noOfEmployeesFrom" type="text" :counter="true" :maxlength="2"
                    placeholder="No. of Employee[17] from:"></IonInput>to
                  <IonInput v-model="formFields.noOfEmployeesTo" type="text" :counter="true" :maxlength="2">
                  </IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow class="advanceRowsBorder">
              <IonCol class="pushColToLeft ">
                <IonItem class="checkBoxInputFields">
                  <IonInput v-model="formFields.revenueFrom" type="text" :counter="true" :maxlength="2"
                    placeholder="Revenue[19] from:"></IonInput>to
                  <IonInput v-model="formFields.revenueTo" type="text" :counter="true" :maxlength="2">
                  </IonInput>
                </IonItem>
              </IonCol>
            </IonRow>



            <IonRow class="advanceRowsBorder">
              <IonCol class="pushColToLeft">
                <IonItem class="checkBoxInputFields">
                  <IonSelect v-model="selectedCountry" interface="popover" label="Company/Business[44]"
                    placeholder="Category" :multiple="true">
                    <IonSelectOption value="Week">Week</IonSelectOption>
                    <IonSelectOption value="Month">Month</IonSelectOption>
                    <IonSelectOption value="Every 2 Months">Every 2 Months</IonSelectOption>
                  </IonSelect>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow class="advanceRowsBorder">
              <IonCol class="pushColToLeft">
                <IonSelect v-model="selectedCountry" interface="popover" label="Company/Business" placeholder="Country"
                  :multiple="true">
                  <IonSelectOption value="Week">Week</IonSelectOption>
                  <IonSelectOption value="Month">Month</IonSelectOption>
                  <IonSelectOption value="Every 2 Months">Every 2 Months</IonSelectOption>
                </IonSelect>
              </IonCol>
              <IonCol class="pushColToLeft">
                <IonSelect v-model="selectedCity" interface="popover" placeholder="City" :multiple="true">
                  <IonSelectOption value="Week">Week</IonSelectOption>
                  <IonSelectOption value="Month">Month</IonSelectOption>
                  <IonSelectOption value="Every 2 Months">Every 2 Months</IonSelectOption>
                </IonSelect>
              </IonCol>
            </IonRow>
          </IonCol>



          <IonCol class="threeColDivision">
            <IonRow class="advanceRowsBorder">
              <IonCol class="pushColToLeft">
                <IonItem class="checkBoxInputFields">
                  <IonCheckbox slot="start" v-model="checkboxStates.checkbox17">Members with <span
                      class="bold">Company/Business
                      LandLine</span>[333]</IonCheckbox>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow class="advanceRowsBorder">
              <IonCol class="pushColToLeft">
                <IonItem class="checkBoxInputFields">
                  <IonCheckbox slot="start" v-model="checkboxStates.checkbox18">Members with <span
                      class="bold">Company/Business
                      Mobile</span>[333]</IonCheckbox>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow class="advanceRowsBorder">
              <IonCol class="pushColToLeft">
                <IonItem class="checkBoxInputFields">
                  <IonCheckbox slot="start" v-model="checkboxStates.checkbox19">Members with <span
                      class="bold">Company/Business
                      Profile Image</span>[333]</IonCheckbox>
                </IonItem>
              </IonCol>
            </IonRow>

          </IonCol>


          <IonRow class="advanceRowsBorder">
            <IonCol class="pushColToLeft">
              <IonItem class="checkBoxInputFields">
                <IonCheckbox slot="start" v-model="checkboxStates.checkbox20">Members with company/business FaceBook
                  Link[17]
                </IonCheckbox>
                <IonCheckbox slot="start" v-model="checkboxStates.checkbox21">Linked Link[55]</IonCheckbox>
                <IonCheckbox slot="start" v-model="checkboxStates.checkbox22">Instagram Link[67]</IonCheckbox>
                <IonCheckbox slot="start" v-model="checkboxStates.checkbox23">Twitter/X Link[67]</IonCheckbox>
                <IonCheckbox slot="start" v-model="checkboxStates.checkbox24">YouTube Link[67]</IonCheckbox>
                <IonCheckbox slot="start" v-model="checkboxStates.checkbox25">Website Link[67]</IonCheckbox>

              </IonItem>
            </IonCol>
          </IonRow>
        </IonRow>
      </IonRow>

      <IonButton class="UpdateBTN" size="large" expand="block" title="SubmitBTN" @click="submitContent">Update
      </IonButton>


    </IonRow>
  </IonGrid>
</template>


<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { IonItem, IonCheckbox, IonGrid, IonRow, IonCol, IonButton, IonSelectOption, IonSelect, IonInput } from '@ionic/vue';

// Utility functions for sanitization and URL validation
const sanitizeInput = (input: string): string => {
  return input
    .replace(/<script.*?>.*?<\/script>/gi, '') // Remove script tags
    .replace(/<[\/\!]*?[^<>]*?>/gi, '')       // Remove HTML tags
    .replace(/&(?:lt|gt|amp|quot|#39);/g, '') // Remove HTML entities
    .replace(/[<>\/\\'";]/g, '');             // Remove potentially harmful characters
};

// Define the interface for the form fields
interface FormFields {
  exhibitedMoreThan: string;
  visitedMoreThan: string;
  paidMoreThan: string;
  purchasedMoreThan: string;
  profilesVisitedMoreThan: string;
  profilesCompletionAbove: string;
  membersConnectionsMoreThan: string;
  loggedIntoProfileMoreThan: string;
  malesAgeFrom: string;
  malesAgeTo: string;
  femalesAgeFrom: string;
  femalesAgeTo: string;
  salaryFrom: string;
  salaryTo: string;
  noOfEmployeesFrom: string;
  noOfEmployeesTo: string;
  revenueFrom: string;
  revenueTo: string;
}

export default defineComponent({
  name: 'AdvanceAdvertisingComponent',
  components: {
    IonItem,
    IonCheckbox,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonSelectOption,
    IonSelect,
    IonInput,
  },
  setup() {
    // Create a state object to manage all checkBoxInputFields states
    const checkboxStates = ref({
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false,
      checkbox5: false,
      checkbox6: false,
      checkbox7: false,
      checkbox8: false,
      checkbox9: false,
      checkbox10: false,
      checkbox11: false,
      checkbox12: false,
      checkbox13: false,
      checkbox14: false,
      checkbox15: false,
      checkbox16: false,
      checkbox17: false,
      checkbox18: false,
      checkbox19: false,
      checkbox20: false,
      checkbox21: false,
      checkbox22: false,
      checkbox23: false,
      checkbox24: false,
      checkbox25: false,
      

    });
    const formFields = ref<FormFields>({
      exhibitedMoreThan: '',
      visitedMoreThan: '',
      paidMoreThan: '',
      purchasedMoreThan: '',
      profilesVisitedMoreThan: '',
      profilesCompletionAbove: '',
      membersConnectionsMoreThan: '',
      loggedIntoProfileMoreThan: '',
      malesAgeFrom: '',
      malesAgeTo: '',
      femalesAgeFrom: '',
      femalesAgeTo: '',
      salaryFrom: '',
      salaryTo: '',
      noOfEmployeesFrom: '',
      noOfEmployeesTo: '',
      revenueFrom: '',
      revenueTo: '',
    });

    const selectedCountry = ref<string | null>(null);
    const selectedCity = ref<string | null>(null);

    const sanitizedFields = computed<FormFields>(() => {
      const sanitized: FormFields = { ...formFields.value }; // Copy the form fields object
      for (const key in sanitized) {
        if (sanitized.hasOwnProperty(key)) {
          sanitized[key as keyof FormFields] = sanitizeInput(formFields.value[key as keyof FormFields]);
        }
      }
      return sanitized;
    });

    // State to manage visibility of sections
    const sectionVisibility = ref<{ [key: string]: boolean }>({
      section1: false,
      section2: false,
      section3: false,
      section4: false,
    });

    // Method to toggle section visibility
    const toggleSection = (section: string) => {
      sectionVisibility.value[section] = !sectionVisibility.value[section];
    };

    // Method to check if a section is visible
    const isSectionVisible = (section: string) => {
      return sectionVisibility.value[section];
    };
    const submitContent = () => {
      // Your code to handle the button click
      console.log('Submit button clicked');
    };

    
    return {
      checkboxStates,
      toggleSection,
      isSectionVisible,
      submitContent,
      selectedCountry,
      selectedCity,
      formFields,
      sanitizedFields,
    };
  },
});
</script>


<style scoped>
  .Header {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 20px;
    font-size: 20px;
  }

  ion-item {
    width: 100%;
  }

  ion-row {
    width: 100%;
  }

  .bold {
    font-weight: bold;
  }


  .Head {
    cursor: pointer; /* Show cursor pointer on hover */
    border: 2px rgb(59, 25, 196) solid;
    border-radius: 10px;
    
  }
  .Head ion-col {
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 0;
    padding-bottom: 0;
  }

  .label {
    /* text-align: center; */
    flex: 1;
    padding: 10px;
    font-weight: bold;
    background-color: lightblue;
    border-radius: 10px;
  }

  .Title {
    display: flex;
    justify-content: space-between; /* Distributes space evenly */
    width: 100%;
  }

  .Title-left, .Title-right {
    text-align: center;
  }

  .Title-left {
    text-align: left; /* Align text to the left */
    font-weight: bold;
  }

  .Title-right {
    text-align: right; /* Align text to the right */
    font-weight: bold;
  }
  .UpdateBTN {
    width: 100%;
  }

  .advanceCol {
    font-size: 12px;
  }
  .checkBoxInputFields {
    font-size: 12px;
    overflow-x: auto;
    max-width: fit-content;
    /* height: 50px; */
  }
  .advance4Rows {
    margin-bottom: 20px;
  }
  ion-input.custom .input-bottom .counter {
    --color: red;
  }
  .advanceRowsBorder {
    border: 1px lightgray solid;
    border-radius: 10px;
  }
  .pushColToLeft {
    /* justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    margin: 0;
    padding: 0; */
    max-width: fit-content;
  }
  .inputFields{
    max-width: 100%;

  }


  @media (max-width: 600px) {
    .advanceCol{
      /* display: flex; */
      /* flex-direction: row; */
      min-width: 100%;
    }
  }
</style>
