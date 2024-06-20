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
        { id: 3, name: 'Administrative Assistant' },
        { id: 4, name: 'Advisor (Financial Advisor, Legal Advisor, etc.)' },
        { id: 5, name: 'Analyst (Business Analyst, Data Analyst, Financial Analyst, etc.)' },
        { id: 6, name: 'Architect' },
        { id: 7, name: 'Art Director' },
        { id: 8, name: 'Assistant Manager' },
        { id: 9, name: 'Auditor' },
        { id: 10, name: 'Brand Manager' },
        { id: 11, name: 'Business Consultant' },
        { id: 12, name: 'Business Development Manager' },
        { id: 13, name: 'CEO (Chief Executive Officer)' },
        { id: 14, name: 'CFO (Chief Financial Officer)' },
        { id: 15, name: 'Chief Creative Officer (CCO)' },
        { id: 16, name: 'Chief Data Officer (CDO)' },
        { id: 17, name: 'Chief Experience Officer (CXO)' },
        { id: 18, name: 'Chief Financial Officer (CFO)' },
        { id: 19, name: 'Chief HR Officer (CHRO)' },
        { id: 20, name: 'Chief Information Officer (CIO)' },
        { id: 21, name: 'Chief Legal Officer (CLO)' },
        { id: 22, name: 'Chief Marketing Officer (CMO)' },
        { id: 23, name: 'Chief Operating Officer (COO)' },
        { id: 24, name: 'Chief Revenue Officer (CRO)' },
        { id: 25, name: 'Chief Strategy Officer (CSO)' },
        { id: 26, name: 'Civil Engineer' },
        { id: 27, name: 'Communications Director' },
        { id: 28, name: 'Compliance Officer' },
        { id: 29, name: 'Consultant (Business Consultant, Management Consultant, etc.)' },
        { id: 30, name: 'Coordinator (Project Coordinator, Marketing Coordinator, etc.)' },
        { id: 31, name: 'Creative Director' },
        { id: 32, name: 'Customer Success Manager' },
        { id: 33, name: 'Data Analyst' },
        { id: 34, name: 'Data Scientist' },
        { id: 35, name: 'Designer' },
        { id: 36, name: 'Developer' },
        { id: 37, name: 'Digital Marketing Specialist' },
        { id: 38, name: 'Director (Director of Operations, Director of Marketing, etc.)' },
        { id: 39, name: 'Editor' },
        { id: 40, name: 'Engineer' },
        { id: 41, name: 'Entrepreneur' },
        { id: 42, name: 'Executive Assistant' },
        { id: 43, name: 'Financial Advisor' },
        { id: 44, name: 'Financial Analyst' },
        { id: 45, name: 'Graphic Designer' },
        { id: 46, name: 'HR Manager (Human Resources Manager)' },
        { id: 47, name: 'IT Specialist' },
        { id: 48, name: 'IT Technician' },
        { id: 49, name: 'Lawyer' },
        { id: 50, name: 'Manager (Marketing Manager, Operations Manager, Project Manager, etc.)' },
        { id: 51, name: 'Marketing Coordinator' },
        { id: 52, name: 'Marketing Director' },
        { id: 53, name: 'Marketing Manager' },
        { id: 54, name: 'Mechanical Engineer' },
        { id: 55, name: 'Medical Assistant' },
        { id: 56, name: 'Nurse' },
        { id: 57, name: 'Operations Director' },
        { id: 58, name: 'Operations Manager' },
        { id: 59, name: 'Paralegal' },
        { id: 60, name: 'Partner' },
        { id: 61, name: 'Personal Assistant' },
        { id: 62, name: 'Pharmacist' },
        { id: 63, name: 'Product Manager' },
        { id: 64, name: 'Product Marketing Manager' },
        { id: 65, name: 'Project Coordinator' },
        { id: 66, name: 'Project Manager' },
        { id: 67, name: 'Public Relations Manager' },
        { id: 68, name: 'Quality Assurance Manager' },
        { id: 69, name: 'Research Manager' },
        { id: 70, name: 'Retail Manager' },
        { id: 71, name: 'Risk Manager' },
        { id: 72, name: 'Sales Manager' },
        { id: 73, name: 'Senior Accountant' },
        { id: 74, name: 'Senior Software Engineer' },
        { id: 75, name: 'Software Development Manager' },
        { id: 76, name: 'Software Engineer' },
        { id: 77, name: 'Specialist (Marketing Specialist, IT Specialist, etc.)' },
        { id: 78, name: 'Strategy Director' },
        { id: 79, name: 'Supervisor' },
        { id: 80, name: 'Systems Analyst' },
        { id: 81, name: 'Teacher' },
        { id: 82, name: 'Team Leader' },
        { id: 83, name: 'Technical Support Specialist' },
        { id: 84, name: 'Technical Writer' },
        { id: 85, name: 'Translator' },
        { id: 86, name: 'UX Designer' },
        { id: 87, name: 'UX/UI Designer' },
        { id: 88, name: 'Vice President (VP)' },
        { id: 89, name: 'Video Editor' },
        { id: 90, name: 'Web Designer' },
        { id: 91, name: 'Web Developer' },
        { id: 92, name: 'Writer' },
      ] as JobPosition[],
      test: 'toto'
    };
  }
});
</script>
