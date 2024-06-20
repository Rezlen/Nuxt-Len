<template>
  <ion-select v-model="businessCategorySelected">
    <ion-select-option v-for="category in businessCategoryData" :key="category.id" :value="category.id">
      {{ category.name }}
    </ion-select-option>
  </ion-select>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonSelect, IonSelectOption } from '@ionic/vue';

interface BusinessCategory {
  id: number;
  name: string;
}

export default defineComponent({
  name: 'InterventionDetails',
  components: {
    IonSelect,
    IonSelectOption
  },
  data() {
    return {
      businessCategorySelected: null as number | null,
      businessCategoryData: [
        { id: 1, name: 'Accounting' },
        { id: 2, name: 'Advertising & Marketing' },
        { id: 3, name: 'Aerospace & Defense' },
        { id: 4, name: 'Agriculture & Farming' },
        { id: 5, name: 'Automotive' },
        { id: 6, name: 'Beauty & Personal Care' },
        { id: 7, name: 'Biotechnology' },
        { id: 8, name: 'Business Services' },
        { id: 9, name: 'Chemicals' },
        { id: 10, name: 'Construction & Real Estate' },
        { id: 11, name: 'Consumer Electronics' },
        { id: 12, name: 'Consumer Goods' },
        { id: 13, name: 'Education & Training' },
        { id: 14, name: 'Electrical Equipment' },
        { id: 15, name: 'Energy & Utilities' },
        { id: 16, name: 'Entertainment & Media' },
        { id: 17, name: 'Environmental Services' },
        { id: 18, name: 'Financial Services' },
        { id: 19, name: 'Food & Beverage' },
        { id: 20, name: 'Healthcare & Medical' },
        { id: 21, name: 'Hospitality & Tourism' },
        { id: 22, name: 'Information Technology (IT)' },
        { id: 23, name: 'Insurance' },
        { id: 24, name: 'Legal Services' },
        { id: 25, name: 'Manufacturing & Industrial' },
        { id: 26, name: 'Materials & Mining' },
        { id: 27, name: 'Non-Profit & Community' },
        { id: 28, name: 'Oil & Gas' },
        { id: 29, name: 'Pharmaceuticals' },
        { id: 30, name: 'Public Sector' },
        { id: 31, name: 'Real Estate' },
        { id: 32, name: 'Retail & Consumer Goods' },
        { id: 33, name: 'Software & Technology' },
        { id: 34, name: 'Sports & Recreation' },
        { id: 35, name: 'Telecommunications' },
        { id: 36, name: 'Transportation & Logistics' },
        { id: 37, name: 'Travel & Leisure' },
        { id: 38, name: 'Veterinary Services' },
        { id: 39, name: 'Waste Management' },
        { id: 40, name: 'Wholesale & Distribution' },
        { id: 41, name: 'Writing & Editing' },
        { id: 42, name: 'Renewable Energy' },
        { id: 43, name: 'Forestry & Paper' },
        { id: 44, name: 'Maritime' },
        { id: 45, name: 'Music & Performing Arts' },
        { id: 46, name: 'Nanotechnology' },
        { id: 47, name: 'Robotics' },
        { id: 48, name: 'Space Technology' },
        { id: 49, name: 'Textiles & Apparel' },
        { id: 50, name: 'Virtual Reality (VR) & Augmented Reality (AR)' },
        { id: 51, name: 'Architectural Services' },
        { id: 52, name: 'Art & Craft' },
        { id: 53, name: 'Aviation' },
        { id: 54, name: 'Beverages' },
        { id: 55, name: 'Broadcast Media' },
        { id: 56, name: 'Civil Engineering' },
        { id: 57, name: 'Consumer Services' },
        { id: 58, name: 'Design' },
        { id: 59, name: 'E-commerce' },
        { id: 60, name: 'Event Planning & Services' },
        { id: 61, name: 'Facilities Services' },
        { id: 62, name: 'Fishery' },
        { id: 63, name: 'Government Administration' },
        { id: 64, name: 'Graphic Design' },
        { id: 65, name: 'Human Resources' },
        { id: 66, name: 'Import & Export' },
        { id: 67, name: 'Industrial Automation' },
        { id: 68, name: 'Internet' },
        { id: 69, name: 'Investment Banking' },
        { id: 70, name: 'Market Research' },
        { id: 71, name: 'Medical Devices' },
        { id: 72, name: 'Military' },
        { id: 73, name: 'Mining & Metals' },
        { id: 74, name: 'Nursing' },
        { id: 75, name: 'Packaging & Containers' },
        { id: 76, name: 'Performing Arts' },
        { id: 77, name: 'Printing' },
        { id: 78, name: 'Public Relations' },
        { id: 79, name: 'Railroad Manufacture' },
        { id: 80, name: 'Renewables & Environment' },
        { id: 81, name: 'Security & Investigations' },
        { id: 82, name: 'Shipbuilding' },
        { id: 83, name: 'Staffing & Recruiting' },
        { id: 84, name: 'Supermarkets' },
        { id: 85, name: 'Tobacco' },
        { id: 86, name: 'Utilities' },
        { id: 87, name: 'Venture Capital & Private Equity' },
        { id: 88, name: 'Warehousing' },
        { id: 89, name: 'Water Treatment' },
        { id: 90, name: 'Wind Energy' },
        { id: 91, name: 'Wireless' },
        { id: 92, name: 'Yoga' },
        { id: 93, name: 'Zoology' },
        { id: 94, name: 'Blockchain' },
        { id: 95, name: 'Cryptocurrency' },
        { id: 96, name: 'Space Travel' },
        { id: 97, name: 'Artificial Intelligence' },
        { id: 98, name: 'Virtual Assistant' },
        { id: 99, name: 'E-sports' },
        { id: 100, name: 'Podcasting' }
      ] as BusinessCategory[],
      test: 'toto'
    };
  }
});
</script>
