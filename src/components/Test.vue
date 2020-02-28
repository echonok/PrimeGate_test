<template>
    <div class="multiwidget">
        <Chat></Chat>
    </div>
</template>

<script>
    import Chat from "./Chat";
    export default {
        name: "Test",
        components: {
            Chat,
        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/mixins";
    .multiwidget {
        @include fsize(20);
        display: inline-flex;
        align-items: stretch;
        width:100%;
    }
</style>