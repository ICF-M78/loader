<template>
    <div :style="{ height: h }" id="load-card" :class="{ test: test }">
        <Vertical v-if="vertical"></Vertical>
        <Horizontal v-else></Horizontal>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, defineProps, defineExpose } from 'vue';
import Horizontal from './Horizontal.vue';
import Vertical from './Vertical.vue';

// props
const props = defineProps({
    h: {
        type: String,
        default: '50vh',
    },
    vertical: {
        type: Boolean,
        default: false,
    },
    test: {
        type: Boolean,
        default: false,
    },
});

// 初始化页面的函数
async function initPage() {
    // 这里可以添加初始化逻辑
}

onMounted(() => {
    initPage();
});

// 暴露组件名称
defineExpose({
    name: 'loader',
});
</script>

<style lang="scss" scoped>
#load-card {
    // 上下左右居中
    display: flex;
    justify-content: center;
    align-items: center;
}

.test {
    // 调试模式
    border: 2px dashed red;
}
</style>
