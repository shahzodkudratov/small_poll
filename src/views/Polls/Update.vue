<template>
    <div class="poll">
        <div class="update" v-if="!notFound">
            <h1 class="title">Edit poll</h1>
            <input class="name" type="text" required placeholder="type poll name" v-model="poll.name">

            <p class="warning">
                You can lost data if delete AND update the poll
            </p>

            <Questions v-bind:poll="sortedPoll"></Questions>

            <div class="buttons">
                <button v-on:click="updatePoll(poll)" :class="{ disabled: isBusy }" :disabled="isBusy">Save changes</button>
                <button v-on:click="deletePoll({ poll: poll })" :class="{ disabled: isBusy }" :disabled="isBusy">Delete poll</button>
                <router-link to="/" tag="button" :class="{ disabled: isBusy }" :disabled="isBusy">Cancel</router-link>
            </div>
        </div>
        <Widget v-bind:poll="originPoll" v-if="!notFound"></Widget>
    </div>
</template>

<style lang="scss">
    #app .poll .update {
        width: 60%;
    }
</style>

<script>
    import { mapGetters, mapMutations, mapActions } from 'vuex'
    import Questions from '@/components/Questions'
    import Widget from '@/components/Widget'

    export default {
        components: {
            Questions,
            Widget
        },

        data() {
            return {
                poll: {},
                notFound: false
            }
        },
        
        computed: {
            ...mapGetters({
                isBusy: 'isBusy',
                getPollById: 'poll/getPollById',
                validatePoll: 'poll/validatePoll'
            }),

            sortedPoll() {
                let poll = this.poll;

                poll.questions.sort((a, b) => {
                    return a.order - b.order;
                });

                poll.questions.forEach(question => {
                    question.answers.sort((a, b) => {
                        return new Date(a.created_at) - new Date(b.created_at)
                    })
                })

                return poll;
            },

            originPoll() {
                return this.getPollById(this.$attrs.id)
            }
        },

        methods: {
            ...mapMutations({
                updatePoll: 'poll/updatePoll'
            }),

            ...mapActions({
                deletePoll: 'apicalls/deletePoll'
            }),

            updatePoll(poll) {
                if(this.validatePoll({ poll: poll })) {
                    this.$store.dispatch('poll/updatePoll', { poll: this.poll, originPoll: this.originPoll })

                    .then(() => {
                        this.$notify({
                            group: 'msg',
                            type: 'success',
                            title: 'Poll updated'
                        })
                    })
                }
            }

            
        },

        created() {
            let poll = this.getPollById(this.$attrs.id);

            if(poll) {
                this.poll = this.$_.cloneDeep(poll);
            } else {
                this.notFound = true;
                this.$router.push({ path: '/' })
            }
        },

        beforeRouteUpdate (to, from, next) {
            let poll = this.getPollById(to.params.id);

            if(poll) {
                this.poll = this.$_.cloneDeep(poll);
            } else {
                this.notFound = true;
                this.$router.push({ path: '/' })
            }

            next();
        }
    };
</script>