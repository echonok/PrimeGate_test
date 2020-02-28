<template>
    <div class="chat-main">
        <ChatMessages></ChatMessages>
        <ChatBottom></ChatBottom>
    </div>
</template>

<script>
    import ChatMessages from "./ChatMessages";
    import ChatBottom from "./ChatBottom";
    export default {
        name: "Chat",
        components: {ChatBottom, ChatMessages}
    }
</script>
<style scoped>
    .chat-main {
        min-width: 30vw;
        max-width: 50vw;
        width: 40vw;
        height: 90vh;
        max-height: 90vh!important;
    }
</style>