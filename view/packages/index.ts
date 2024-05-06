// 导入单个组件
import type { App } from 'vue';
import loader from './loader/index';

// 以数组的结构保存组件，便于遍历
const cmpts = [loader];

// 定义 install 方法
const install: any = function (app: App) {
    cmpts.forEach(el => {
        app.component(el.name as string, el);
    });
};

export { loader };

export default {
    install,
};
