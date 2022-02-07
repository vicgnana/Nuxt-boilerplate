<template>
  <LocomotiveScroll ref="scroller" :getted-options="{ smooth: true,}">    
          <slice-zone type="page" uid="frontpage" />
  </LocomotiveScroll>
</template>

<script>
import SliceZone from "vue-slicezone";
export default {
    components: {
        SliceZone
    },
    props:[],
    data: () => ({}),
    computed:{},
    methods: {
    },
    mounted () {
        const locomotive = this.$refs.scroller.locomotive
        locomotive.on('scroll', (instance) => {
        document.documentElement.setAttribute('data-direction', instance.direction)
        })
    },

}
</script>

<style lang="scss" scoped></style>
