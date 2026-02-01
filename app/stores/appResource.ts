import { defineStore } from 'pinia'

export const useMyAppResourceStore = defineStore('myAppResourceStore', {
  state: (): TypeAppResource => ({
    viewportWidth: 0,
  }),
  getters: {},
  actions: {}
})
