<template>
  <div class="export-container">

    <div class="export-header">
      <v-text>{{ "Export Report Here:" }}</v-text>
    </div>
    
    <div class="button-group">
      <v-btn @click="exportCSV" class="blue-btn">CSV</v-btn>
      <v-btn @click="exportPDF" class="blue-btn"> PDF</v-btn>
      <v-btn @click="exportExcel" class="blue-btn">Excel</v-btn>
    </div>
  </div>
</template>

<script>
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'; 
import * as XLSX from 'xlsx';

export default {
  props: ['reports'],
  data() {
    return {
      selectedTransactionType: '',
      transactionTypes: ['Deposit', 'Withdrawal', 'Loan Payment'],
    };
  },
  methods: {
    exportCSV() {
      const csvHeaders = ['Transaction ID', 'Date', 'Account Holder', 'Transaction Type', 'Amount', 'Account Balance'];
      const csvContent =
        'data:text/csv;charset=utf-8,' +
        [csvHeaders.join(',')]
          .concat(
            this.reports.map((r) =>
              [r.transactionId, r.date, r.accountHolder, r.transactionType, r.amount, r.accountBalance].join(',')
            )
          )
          .join('\n');
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement('a');
      link.setAttribute('href', encodedUri);
      link.setAttribute('download', 'reports.csv');
      document.body.appendChild(link);
      link.click();
    },
    exportPDF() {
      const doc = new jsPDF();
      doc.text('Financial Reports', 10, 10);
      autoTable(doc, {
        head: [['Transaction ID', 'Date', 'Account Holder', 'Transaction Type', 'Amount', 'Account Balance']],
        body: this.reports.map((r) => [
          r.transactionId,
          r.date,
          r.accountHolder,
          r.transactionType,
          r.amount,
          r.accountBalance,
        ]),
      });
      doc.save('reports.pdf');
    },
    exportExcel() {
      const headers = ['Transaction ID', 'Date', 'Account Holder', 'Transaction Type', 'Amount', 'Account Balance'];
      const data = [headers].concat(
        this.reports.map((r) => [
          r.transactionId,
          r.date,
          r.accountHolder,
          r.transactionType,
          r.amount,
          r.accountBalance,
        ])
      );
      const worksheet = XLSX.utils.aoa_to_sheet(data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Reports');
      XLSX.writeFile(workbook, 'reports.xlsx');
    },
    emitFilter() {
      this.$emit('filter', this.selectedTransactionType);
    },
    resetFilter() {
      this.selectedTransactionType = '';
      this.emitFilter();
    },
  },
};
</script>

<style scoped>
.export-container {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.export-header {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.button-group {
  display: flex;
  gap: 10px;
}

.blue-btn {
  background-color: #1976d2;
  color: white;
  border-radius: 12px;
  padding: 8px 16px;
}

.blue-btn:hover {
  background-color: #1565c0;
}
</style>
