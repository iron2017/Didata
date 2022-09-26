import { createApp } from 'vue'
import './style.css'
import VNetworkGraph from "v-network-graph"
import "v-network-graph/lib/style.css"
import App from './App.vue'
app.use(VNetworkGraph)
createApp(App).mount('#app')
