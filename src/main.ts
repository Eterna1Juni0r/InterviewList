import './assets/main.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'

import Chart from 'primevue/chart'
import Card from 'primevue/card'
import ToastService from 'primevue/toastservice'
import Menubar from 'primevue/menubar'
import Toast from 'primevue/toast'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Tooltip from 'primevue/tooltip'
import ConfirmationService from 'primevue/confirmationservice'
import ProgressSpinner from 'primevue/progressspinner'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import RadioButton from 'primevue/radiobutton'
import ConfirmDialog from 'primevue/confirmdialog'
import Message from 'primevue/message'
import Badge from 'primevue/badge'
import InputNumber from 'primevue/inputnumber'
import Textarea from 'primevue/textarea'
import Calendar from 'primevue/calendar'

import Material from '@primevue/themes/material'
import { initializeApp } from 'firebase/app'
// import { getAnalytics } from "firebase/analytics";

import App from './App.vue'
import router from './router'

const firebaseConfig = {
  apiKey: 'AIzaSyDN18BdvvOPuHvx1BPFlTkjScWTqzLp-Zk',
  authDomain: 'interview-list-2c7ce.firebaseapp.com',
  projectId: 'interview-list-2c7ce',
  storageBucket: 'interview-list-2c7ce.firebasestorage.app',
  messagingSenderId: '226903669172',
  appId: '1:226903669172:web:1d1c28a3c8ce66db4edae1',
  measurementId: 'G-G18T8CTQPB',
}

initializeApp(firebaseConfig)

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Material,
    options: {
      prefix: 'p',
      darkModeSelector: 'system',
      cssLayer: false,
    },
  },
})
app.use(ToastService)
app.use(createPinia())
app.use(router)
app.use(ConfirmationService)
app.component('app-menubar', Menubar)
app.component('app-toast', Toast)
app.component('app-input-text', InputText)
app.component('app-button', Button)
app.directive('tooltip', Tooltip)
app.component('app-progress', ProgressSpinner)
app.component('app-card', Card)
app.component('app-datatable', DataTable)
app.component('app-column', Column)
app.component('app-radio', RadioButton)
app.component('app-dialog', ConfirmDialog)
app.component('app-message', Message)
app.component('app-badge', Badge)
app.component('app-input-number', InputNumber)
app.component('app-textarea', Textarea)
app.component('app-calendar', Calendar)
app.component('app-chart', Chart)

app.mount('#app')
