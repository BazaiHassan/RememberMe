import { createApp } from 'vue'
import App from './App.vue'
import BaseCard from '../src/components/UI/BaseCard.vue';
import BaseButton from '../src/components/UI/BaseButton.vue';
import BaseDialog from '../src/components/UI/BaseDialog.vue';


const app = createApp(App)
app.component('base-card',BaseCard)
app.component('base-button', BaseButton)
app.component('base-dialog', BaseDialog)
app.mount('#app')
