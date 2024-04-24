import { createApp } from "vue";
import Popup from "./components/Popup.vue";

globalThis.__VUE_OPTIONS_API__ = true;
globalThis.__VUE_PROD_DEVTOOLS__ = false;
globalThis.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;

const app = createApp(Popup);
app.mount("#app");
