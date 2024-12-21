<template>
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
</script>


<style>
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

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
</style>


