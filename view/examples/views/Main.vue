<!-- 组件说明 -->
<template>
    <loader h="calc(50vh - 100px)" test vertical></loader>
    <loader h="calc(50vh - 100px)"></loader>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';
import { loader } from 'loader-wjt';
import 'loader-pcc/loader.css';

const rfsPage = () => {};

onMounted(() => {
    rfsPage();
});
</script>

<style lang="scss" scoped></style>
