import {
  CreateNewDiscussion,
  GetDiscussions,
  GetDiscussion,
  GetDiscussionAspects
} from '@/api'

export default {
  namespaced: true,

  state: {
    discussions: [],
    discussion: false,
    discussion_aspects: false
  },

  mutations: {
    setDiscussionsList (state, list) {
      state.discussions = list
    },

    setDiscussion (store, item) {
      store.discussion = item
    },

    setDiscussionAspects (store, aspects) {
      store.discussion_aspects = aspects
    }
  },

  actions: {
    createNewDiscussion (store, data) {
      return CreateNewDiscussion(data)
    },

    getDiscussions (store) {
      return GetDiscussions()
        .then(response => {
          store.commit('setDiscussionsList', response.data.result)
        })
    },

    getDiscussion (store, id) {
      return GetDiscussion(id)
        .then(response => {
          store.commit('setDiscussion', response.data.result)
          return response
        })
    },

    getDiscussionAspects (store, id) {
      return GetDiscussionAspects(id)
        .then(response => {
          store.commit('setDiscussionAspects', response.data.result)
          return response
        })
    }
  }
}
