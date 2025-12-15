import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { USER_SERVICE_TOKEN, UserService } from './users'
import { ORDER_SERVICE_TOKEN, OrderService } from './orders'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.provide(USER_SERVICE_TOKEN, new UserService())
app.provide(ORDER_SERVICE_TOKEN, new OrderService())

app.mount('#app')
