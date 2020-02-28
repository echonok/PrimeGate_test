<template>
    <div class="msg-wrp">
        <div class="msg">
            <span><slot></slot></span>
            <p class="">{{message.text}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ChatMessageManager",
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
        background-color: #d4c9f9;
        color: #171617;
        float: right;
        width: 80%;
    }
</style>