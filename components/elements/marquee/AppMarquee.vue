<template>
    <div class="vue-marquee">
        <div
            class="tape"
            v-for="(group, i) in groups"
            :key="i"
            :aria-hidden="i != 0"
            :style="tapeStyle"
        >
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        groups: {
            type: Number,
            default: 5
        },
        speed: {
            type: Number,
            default: 75
        }
    },
    data() {
        return {
            duration: null
        }
    },
    async mounted() {
        await this.$nextTick()
        const tape = this.$el.querySelector('.tape')
        const { width } = tape.getBoundingClientRect()
        const duration = width / this.speed
        this.duration = Math.floor(duration)
    },
    computed: {
        tapeStyle() {
            if (!this.duration) return {}
            return {
                '-webkit-animation-duration': `${this.duration}s`,
                'animation-duration': `${this.duration}s`
            }
        }
    }
}
</script>

<style lang="scss">
.vue-marquee {
    white-space: nowrap;
    overflow: hidden;

    .tape {
        display: inline-flex;
        animation: vueMarqueeTicker 14s infinite linear;
        transform: translateX(-23%);
    }
    .super-image.has-image > .image-sizer {
        opacity: 1;
    }
}

@keyframes vueMarqueeTicker {
    0% {
        transform: translateX(-23%);
    }
    100% {
        transform: translateX(-123%);
    }
}
</style>
