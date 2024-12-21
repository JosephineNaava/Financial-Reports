<template>
    <v-data-table
      :headers="headers"
      :items="reports"
      class="elevation-1"
      
    >
    
      <template v-slot:body="props">
        <tr v-for="item in props.items" :key="item.transactionId">
          <td>{{ item.transactionId }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.accountHolder }}</td>
          <td>{{ item.transactionType }}</td>
          <td>{{ item.amount }}</td>
          <td>{{ item.accountBalance }}</td>
        </tr>
      </template>
    </v-data-table>
  </template>


  <script>
export default {
  props: {
    reports: {
      type: Array,
      required: true,
    },
  }, 
  data() {
    return {
      headers: [
        { text: "Transaction ID", value: "transactionId" },
        { text: "Date", value: "date" },
        { text: "Account Holder", value: "accountHolder" },
        { text: "Transaction Type", value: "transactionType" },
        { text: "Amount", value: "amount" },
        { text: "Account Balance", value: "accountBalance" },
      ],
    };
  },
};
</script>
  
  <style scoped>
  
  </style>
  