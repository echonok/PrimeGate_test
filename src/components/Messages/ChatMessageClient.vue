<template>
    <div class="msg-wrp client">
        <div class="msg">
            <span><slot></slot></span>
            <p class="">{{message.text}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ChatMessageClient",
        props: {
            message: Object
        },
        computed: {}
    }
</script>

<style lang="scss" scoped>
    .msg {
        margin-bottom: 10px;
        border-radius: 10px;
        background-color: #c4e7d1;
        color: #0c0e05;
        width: 80%;
    }
</style>