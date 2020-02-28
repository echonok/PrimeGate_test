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
        name: "ChatMessageNote",
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
        background-color: #9c9a7b;
        color: #1b1b1b;
        width: 80%;
    }
</style>