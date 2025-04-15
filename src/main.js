import {
	createSSRApp
} from "vue";
import App from "./App.vue";
import PageHead from './components/page-head'
export function createApp() {
	const app = createSSRApp(App);
	app.config.globalProperties.$backgroundAudioData = {
		playing: false,
		playTime: 0,
		formatedPlayTime: '00:00:00'
	}
	app.component('page-head', PageHead)
	console.log(uni.$u);
	return {
		app,
	};
}
