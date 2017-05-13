<template>
    <div :class="classObject">{{day.format('D')}}</div>
</template>

<script>
    export default {
        props: ['day'],
        computed: {
            classObject: function () {
                let today = this.day.isSame(this.$moment(), 'day');
                return {
                    day: true,
                    today,
                    past: this.day.isSameOrBefore(this.$moment(), 'day') && !today
                }
            }
        }
    }
</script>

<style>

</style>