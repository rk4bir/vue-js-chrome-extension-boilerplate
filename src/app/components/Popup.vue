<template>
  <div>
    <div style="text-align: center; margin-bottom: 15px; margin-top: 10px">
      <button :disabled="isLoading" @click="handlePing">
        <span v-if="!isLoading">ping</span>
        <span v-else>sending...</span>
      </button>
    </div>
    <table>
      <thead>
        <tr>
          <th>Activity</th>
          <th>Context</th>
          <th>Timestamp</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="act in activities">
          <td>{{ act.activity }}</td>
          <td>{{ act.context }}</td>
          <td>{{ act.timestamp }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activities = ref([]);
const isLoading = ref(false);

const handlePing = () => {
  isLoading.value = true;

  setTimeout(() => {
    chrome.runtime.sendMessage({ type: "PING" });
    isLoading.value = false;
  }, 2000);
};

chrome.runtime.onMessage.addListener((message) => {
  // console.log(`[Popup.vue] message: ${JSON.stringify(message)}`);

  switch (message.type) {
    case "PING":
      activities.value.push({
        activity: "message",
        timestamp: new Date().toISOString(),
        context: message.message,
      });
      break;

    default:
      break;
  }
});
</script>
