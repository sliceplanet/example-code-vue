<template>
  <div class="posts_item" >
    <div class="posts_item_img">
      <img :src="item.image" alt=""/>
      <div class="truefalse"><span>{{ item.voutes.against }}%</span><span>{{ item.voutes.against }}%</span></div>
    </div>
    <div class="posts_item_cont">
      <div class="posts_item_title">{{ item.title }}</div>
      <div class="posts_item_bot">
        <div class="posts_item_author">{{$lang.main.authorWrap}}: <b>{{ item.author.fullname }}</b></div>
        <a href="#" class="fav_link" @click.prevent="addDiscussion"><span class="icon-fav"></span></a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'ThemeItem',

  props: ['item'],

  computed: {
    ...mapState('auth', ['auth'])
  },

  methods: {
    ...mapActions('profile', ['addFavoritesDiscussion']),

    addDiscussion () {
      this.addFavoritesDiscussion({ id: this.auth.id, object_id: this.item.id })
    }
  }
}
</script>

<style scoped>

</style>
