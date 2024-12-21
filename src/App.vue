<!-- <template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Financial Report Viewer</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script> -->


<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Financial Report Viewer</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <!-- Add filter and table logic directly if needed -->
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { useReportsStore } from "./store/reports";

export default {
  name: "App",
  setup() {
    const reportsStore = useReportsStore();
    const reports = reportsStore.reports; // Access all reports
    const filteredReports = reportsStore.filteredReports; // Access filtered reports

    return { reports, filteredReports };
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

.transaction-filter {
  margin-bottom: 10px;
  border-radius: 12px;
}
</style>
