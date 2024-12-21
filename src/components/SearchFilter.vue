<!-- <template>
    <v-text-field
      label="Search by Transaction Type or Account Holder"
      v-model="search"
      @input="$emit('filter', search)"
    ></v-text-field>
  </template>
  
  <script>
  export default {
    props: ['value'],
    data() {
      return {
        search: '',
      };
    },
  };
  </script> -->

<template>
  <v-row>
    <v-col cols="6">
      <v-text-field
        label="Search by Account Holder"
        v-model="search"
        @input="emitFilter"
      ></v-text-field>
    </v-col>
    <v-col cols="6">
      <!-- <v-select
        label="Filter by Transaction Type"
        :items="transactionTypes"
        v-model="selectedTransactionType"
        @change="emitFilter"
        clearable
      ></v-select> -->

       <!-- Filter Dropdown -->
    <v-select
      label="Filter by Transaction Type"
      :items="transactionTypes"
      v-model="selectedTransactionType"
      @change="emitFilter"
      class="transaction-filter"
      clearable
      :style="{ backgroundColor: '#e3f2fd' }"
      @blur="resetFilter"
    ></v-select>

    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ['value'],
  data() {
    return {
      search: '',
      selectedTransactionType: '',
      transactionTypes: ['Deposit', 'Withdrawal', 'Loan Payment'],
    };
  },
  methods: {
    emitFilter() {
      this.$emit('filter', {
        search: this.search,
        transactionType: this.selectedTransactionType,
      });
    },
  },
};
</script>

  