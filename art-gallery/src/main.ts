import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Material from '@primeuix/themes/material'
import DialogService from 'primevue/dialogservice'
import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(router)
app.use(PrimeVue, {
	theme: {
		preset: Material,
		options: {
			darkModeSelector: false
		}
	}
})
app.use(DialogService);

app.mount('#app')
