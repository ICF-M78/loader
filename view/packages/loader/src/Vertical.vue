<!-- 加载动画 -->
<template>
    <div class="loading">
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>

<style lang="scss" scoped>
.loading,
.loading > div {
    position: relative;
    box-sizing: border-box;
}

.loading {
    display: block;
    font-size: 0;
    color: #000;
}

.horizontal {
    display: inline-block;
}

.loading > div {
    float: none;
    background-color: black;
}

.loading {
    width: 54px;
    height: 18px;
}

.loading > div {
    width: 8px;
    height: 8px;
    margin: 4px;
    border-radius: 100%;
    animation: ball-beat 0.7s -0.15s infinite linear;
}

.loading > div:nth-child(2n-1) {
    animation-delay: -0.5s;
}

@keyframes ball-beat {
    50% {
        opacity: 0.2;
        transform: scale(0.75);
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
}
</style>
