<template>
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
  </script>
  