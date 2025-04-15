import {
	createSSRApp
} from "vue";
import App from "./App.vue";
import uviewPlus, { setConfig } from 'uview-plus'

export function createApp() {
	const app = createSSRApp(App);
	app.use(uviewPlus)
	console.log(uni.$u);
	return {
		app,
	};
}
