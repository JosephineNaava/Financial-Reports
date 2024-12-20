<template>
    <v-btn @click="exportCSV">Export CSV</v-btn>
  </template>
  
  <script>
  export default {
    props: ['reports'],
    methods: {
      exportCSV() {
        const csvContent = 'data:text/csv;charset=utf-8,' +
          this.reports
            .map((r) =>
              [r.transactionId, r.date, r.accountHolder, r.transactionType, r.amount, r.accountBalance].join(',')
            )
            .join('\n');
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', 'reports.csv');
        document.body.appendChild(link);
        link.click();
      },
    },
  };
  </script>
  