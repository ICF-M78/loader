import type { App } from 'vue';
import Loader from './src/Loader.vue';

// 安装函数
Loader.install = function (app: App) {
    app.component(Loader.name as string, Loader);
};

export default Loader;
