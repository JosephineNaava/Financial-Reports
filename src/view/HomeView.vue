<template>
    <v-container>
      <SearchFilter @filter="handleFilter" />
      <ReportTable :reports="filteredReports" />
      <ExportButtons :reports="filteredReports" />
    </v-container>
  </template>
  
  <script>
  import { ref, computed, onMounted } from 'vue';
  import axios from 'axios';
  import SearchFilter from '../components/SearchFilter.vue';
  import ReportTable from '../components/ReportTable.vue';
  import ExportButtons from '../components/ExportButtons.vue';
  
  export default {
    components: { SearchFilter, ReportTable, ExportButtons },
    setup() {
      const reports = ref([]);
      const searchQuery = ref('');
      const selectedTransactionType = ref('');
      const filteredReports = computed(() =>
        reports.value.filter((report) => {
            const matchesSearch = report.accountHolder
                .toLowerCase()
                .includes(searchQuery.value.toLowerCase());
            const matchesTransactionType =
                !selectedTransactionType.value || report.transactionType === selectedTransactionType.value;
            return matchesSearch && matchesTransactionType;
  })
);
  
      const handleFilter = (filterData) => {
        searchQuery.value = filterData.search;
        selectedTransactionType.value = filterData.transactionType;
        };
  
      onMounted(async () => {
        const response = await axios.get('http://localhost:5000/reports');
        reports.value = response.data;
      });
  
      return { 
            reports,
            searchQuery,
            selectedTransactionType,
            filteredReports,
            handleFilter,
        };
    },
  };
  </script>
  