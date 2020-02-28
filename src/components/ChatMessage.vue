<template>
    <div>
        <component :message="message" v-bind:is="type">{{date}}</component>
    </div>
</template>

<script>
    import manager from "./Messages/ChatMessageManager";
    import client from "./Messages/ChatMessageClient";
    import tech from "./Messages/ChatMessageSystem";
    import note from "./Messages/ChatMessageNote";

    import moment from "moment";

    export default {
        name: "ChatMessage",
        props: {
            message: Object
        },
        components: {
            manager,
            client,
            tech,
            note
        },
        computed: {
            date() {
                return moment(this.$props.message.date, 'X').format('YYYY-MM-DD HH:mm:ss')
            },
            type() {
                let types = ['client','manager','note','system'];
                return types[this.$props.message.type];
            }
        },
    }
</script>
