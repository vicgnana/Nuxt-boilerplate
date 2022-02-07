<template>
  <div class="accordion">
      <article class="accordion_wrapper cursor-pointer mb-4"
          v-for="(item, index) in items" 
          :key="index" 
          :item="item"
          :index="index" > 
                  <div class="accordion_header">
                      <h2 >{{item.headTitle}}</h2>
                  </div>
                  <div class="accordion_content overflow-hidden" >
                      <p class="accorion_content--inner pt-8">{{item.message}} </p> 
                  </div>            
      </article>
  </div>
</template>

<script>
export default {
    data()  {
       return {
          visible:null,
          items:[
            {   
              headTitle: 'What is Lorem Ipsum?' ,
              message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
              
            },
            {   
              headTitle: 'Whe we use loremp ipsum?',
              message: 'Like you can find a content creator out of nowhere.',
            },
          ],
        }   
    },

    mixins: [],
    components: {},
    props: [ ],

    created(){},
   mounted(){
        const accordian = document.querySelectorAll('.accordion_wrapper')
        const texts = document.querySelectorAll('.accordion_content')

        this.$gsap.set(texts, {
            height: 0
        })

        accordian.forEach((article, index) => {
        article.addEventListener('click', () => {
            const text = texts[index]
            
            texts.forEach((el) => {
            if (el != text && el.classList.contains('is-active')) {
                    el.classList.remove('is-active')
                    this.$gsap.to(el, {
                    duration: 0.5,
                    height: 0,
                    ease: "Expo.easeOut",
                         onComplete: () => {
                           this.$nuxt.$emit('update-locomotive')
                         }
                    })
            }
            })
        
            if (text.classList.contains('is-active')) {
                    text.classList.remove('is-active')
                    this.$gsap.to(text, {
                        duration: 0.5,
                        height: 0,
                        ease: "Expo.easeOut",
                         onComplete: () => {
                           this.$nuxt.$emit('update-locomotive')
                         }
                    })
            } else {
                    text.classList.add('is-active')
                    this.$gsap.set(text, {
                        height: 'auto',
                         onComplete: () => {
                           this.$nuxt.$emit('update-locomotive')
                         }
                    })
                    this.$gsap.from(text, {
                        duration:0.5,
                        height: 0,
                        ease: "Expo.easeOut",
                         onComplete: () => {
                           this.$nuxt.$emit('update-locomotive')
                         }
                    })
            }
        })
     })
  },
    computed: {
    },


    methods: {

    },
}
</script>

<style lang="scss" scoped>
.accordion_content{
  
}
</style>