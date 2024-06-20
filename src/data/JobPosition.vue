<template>
  <ion-select v-model="jobPositionSelected">
    <ion-select-option v-for="position in jobPositions" :key="position.id" :value="position.id">
      {{ position.name }}
    </ion-select-option>
  </ion-select>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonSelect, IonSelectOption } from '@ionic/vue';

interface JobPosition {
  id: number;
  name: string;
}

export default defineComponent({
  name: 'JobPositionSelect',
  components: {
    IonSelect,
    IonSelectOption
  },
  data() {
    return {
      jobPositionSelected: null as number | null,
      jobPositions: [
        { id: 1, name: 'Account Executive' },
        { id: 2, name: 'Accountant' },
        { id: 3, name: 'Advisor' },
        { id: 4, name: 'Analyst' },
        { id: 5, name: 'Brand Manager' },
        { id: 6, name: 'Business Development Manager' },
        { id: 7, name: 'CEO (Chief Executive Officer)' },
        { id: 8, name: 'CFO (Chief Financial Officer)' },
        { id: 9, name: 'Chief Creative Officer (CCO)' },
        { id: 10, name: 'Chief Data Officer (CDO)' },
        { id: 11, name: 'Chief Experience Officer (CXO)' },
        { id: 12, name: 'Chief Financial Officer (CFO)' },
        { id: 13, name: 'Chief HR Officer (CHRO)' },
        { id: 14, name: 'Chief Legal Officer (CLO)' },
        { id: 15, name: 'Chief Marketing Officer (CMO)' },
        { id: 16, name: 'Chief Operating Officer (COO)' },
        { id: 17, name: 'Chief Strategy Officer (CSO)' },
        { id: 18, name: 'Chief Technology Officer (CTO)' },
        { id: 19, name: 'Communications Director' },
        { id: 20, name: 'Compliance Officer' },
        { id: 21, name: 'Consultant' },
        { id: 22, name: 'Coordinator' },
        { id: 23, name: 'Creative Director' },
        { id: 24, name: 'Customer Success Manager' },
        { id: 25, name: 'Data Analyst' },
        { id: 26, name: 'Director' },
        { id: 27, name: 'Engineering Manager' },
        { id: 28, name: 'Entrepreneur' },
        { id: 29, name: 'Executive Assistant' },
        { id: 30, name: 'Financial Advisor' },
        { id: 31, name: 'Financial Analyst' },
        { id: 32, name: 'HR Manager (Human Resources Manager)' },
        { id: 33, name: 'Legal Counsel' },
        { id: 34, name: 'Manager' },
        { id: 35, name: 'Marketing Director' },
        { id: 36, name: 'Marketing Manager' },
        { id: 37, name: 'Operations Director' },
        { id: 38, name: 'Operations Manager' },
        { id: 39, name: 'Partner' },
        { id: 40, name: 'President' },
        { id: 41, name: 'Product Manager' },
        { id: 42, name: 'Project Coordinator' },
        { id: 43, name: 'Project Manager' },
        { id: 44, name: 'Public Relations Manager' },
        { id: 45, name: 'Quality Assurance Manager' },
        { id: 46, name: 'Research Manager' },
        { id: 47, name: 'Retail Manager' },
        { id: 48, name: 'Risk Manager' },
        { id: 49, name: 'Sales Manager' },
        { id: 50, name: 'Specialist' },
        { id: 51, name: 'Strategy Director' },
        { id: 52, name: 'Supervisor' },
        { id: 53, name: 'Supply Chain Manager' },
        { id: 54, name: 'Team Leader' },
        { id: 55, name: 'Vice President (VP)' },
      ] as JobPosition[],
      test: 'toto'
    };
  }
});
</script>
