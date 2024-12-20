<template>
    <v-data-table :headers="headers" :items="reports" class="elevation-1"></v-data-table>
  </template>
  
  <script>
  export default {
    props: ['reports'],
    data() {
      return {
        headers: [
          { text: 'Transaction ID', value: 'transactionId' },
          { text: 'Date', value: 'date' },
          { text: 'Account Holder', value: 'accountHolder' },
          { text: 'Transaction Type', value: 'transactionType' },
          { text: 'Amount', value: 'amount' },
          { text: 'Account Balance', value: 'accountBalance' },
        ],
      };
    },
  };
  </script>
  