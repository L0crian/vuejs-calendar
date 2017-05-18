<template>
        <div id="event-form" :class="{active: active}" :style="{left: left, top: top}">
            <h4>Add an event</h4>
            <p>{{date.format('dddd, MMM Do')}}</p>
            <div class="text">
                <input v-focus type="text" class="text" v-model="description" @keyup.enter="create">
            </div>
            <div class="buttons">
                <button @click="create" :disabled="!description.length">Create</button>
            </div>
            <button id="close-button" @click="close">&#10005</button>
        </div>
</template>

<script>
export default {
        data() {
            return {
                description: ''
            }
        },
        computed: {
            date() {
                return this.$store.state.eventFormDate;
            },
            top() {
                return `${this.$store.state.eventFormPosY}px`;
            },
            left() {
                return `${this.$store.state.eventFormPosX}px`;
            },
            active() {
                return this.$store.state.eventFormActive;
            }
        },
        methods: {
            close() {
                this.$store.commit('eventFormActive', false);
            },
            create() {
                this.$store.commit('addEvent', {description: this.description});
                this.description = '';
                this.$store.commit('eventFormActive', false);
            }
        },
    directives: {
            focus: {
                update(el) {
                    el.focus();
                }
            }
    }
}
</script>
