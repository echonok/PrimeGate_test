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
        name: "ChatMessageSystem",
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
        background-color: #ff6837;
        color: white;
        width: 80%;
    }
</style>