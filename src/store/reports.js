import { defineStore } from 'pinia';

export const useReportsStore = defineStore('reports', {
  state: () => ({
    reports: [
      {
        transactionId: 'TX12345',
        date: '2024-12-15',
        accountHolder: 'John Doe',
        transactionType: 'Deposit',
        amount: 5000,
        accountBalance: 20000,
      },
      {
        transactionId: 'TX12346',
        date: '2024-12-16',
        accountHolder: 'Jane Smith',
        transactionType: 'Withdrawal',
        amount: 1000,
        accountBalance: 19000,
      },
      {
        transactionId: 'TX12347',
        date: '2024-12-16',
        accountHolder: 'Joseph',
        transactionType: 'Withdrawal',
        amount: 1000,
        accountBalance: 14000,
      },
      {
        transactionId: 'TX12348',
        date: '2024-12-16',
        accountHolder: 'Josephine',
        transactionType: 'Deposit',
        amount: 1000,
        accountBalance: 9000,
      },
      {
        transactionId: 'TX12349',
        date: '2024-12-16',
        accountHolder: 'Junior',
        transactionType: 'Withdrawal',
        amount: 1000,
        accountBalance: 16000,
      },
      {
        transactionId: 'TX12350',
        date: '2024-12-16',
        accountHolder: 'Prosper',
        transactionType: 'Deposit',
        amount: 1000,
        accountBalance: 7000,
      },
    ],
  }),
  getters: {
    filteredReports: (state) => (searchTerm, transactionType) => {
      let filtered = state.reports;
      if (searchTerm) {
        filtered = filtered.filter((report) =>
          report.accountHolder.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      if (transactionType) {
        filtered = filtered.filter(
          (report) => report.transactionType === transactionType
        );
      }
      return filtered;
    },
  },
  actions: {
    addReport(report) {
      this.reports.push(report);
    },
  },
});
