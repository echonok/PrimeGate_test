<template>
    <div class="ChatMessages" ref="ChatMessages" :id="id" v-on:scroll.passive='handleScroll'>
        <div class="chat-msg-list" ref="ChatMessagesList">
            <ChatMessage v-for="(item, index) in getCurrentChatMessages" :message="item" :key="index"></ChatMessage>
        </div>
    </div>
</template>

<script>
    import ChatMessage from "./ChatMessage";
    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: "ChatMessages",
        components: {ChatMessage},
        data() {
            return {
                id: null,
                currentPosition: 0
            }
        },
        created () {
            window.addEventListener('scroll', this.handleScroll);
        },
        mounted() {
            this.setMessages();
            this.id = 'comp#' + this._uid;
            this.$nextTick(() => {
                this.scrollToBottom()
            });
        },
        destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
        },
        computed: {
            ...mapGetters([
                'getCurrentChatMessages'
            ]),
        },
        watch: {
            getCurrentChatMessages() {
                this.$nextTick(() => {
                    this.scrollToBottom()
                });
            }
        },
        methods: {
            ...mapActions(['setMessages', 'loadHistory']),
            scrollToBottom() {
                let node = document.getElementById(this.$data.id);
                const bottom = node.scrollHeight - node.scrollTop === node.clientHeight;
                if (!bottom) {
                    node.scrollTop = node.scrollHeight;
                }
            },
            handleScroll (event) {
                if (this.currentPosition > event.target.scrollTop) {
                    const offset = this.currentPosition - event.target.scrollTop;
                    const limit = event.target.scrollTop;
                    this.loadHistory({ offset, limit });
                }
                this.currentPosition = event.target.scrollTop;
            }
        }

    }
</script>

<style lang="scss">
    .ChatMessages {
        height: 70vh;
        overflow: auto;

        .client {
            -webkit-box-orient: horizontal;
            -webkit-box-direction: reverse;
            -webkit-flex-direction: row-reverse;
            -ms-flex-direction: row-reverse;
            flex-direction: row-reverse;
        }

        .msg-wrp {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;

            margin-bottom: 15px;

            -webkit-box-pack: end;
            -webkit-justify-content: flex-end;
            -ms-flex-pack: end;
            justify-content: flex-end;
            -webkit-box-align: end;
            -webkit-align-items: flex-end;
            -ms-flex-align: end;
            align-items: flex-start;

            .msg {
                padding: 0.8rem 1rem;
            }
        }
    }
</style>