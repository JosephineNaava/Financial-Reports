<!-- <template>
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
   -->

   <!-- <template>
    <v-data-table
      :headers="headers"
      :items="reports"
      class="elevation-1"
    >
     
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Financial Reports</v-toolbar-title>
        </v-toolbar>
      </template>
  
     
      <template v-slot:headers="props">
        <tr>
          <th v-for="header in props.headers" :key="header.text" class="text-left">
            {{ header.text }}
          </th>
        </tr>
      </template>
  
      
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
  </script> -->
  
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
  
  <style scoped>
  /* Add any scoped table styles if necessary */
  </style>
  