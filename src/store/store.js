import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    basladi:false,
    dogru: 0,
    yanlis: 0,
    soruno: 1,
    soru: [],
    sorular:[],
    sonuc:[]
  },
  getters: {
    basladi:(state)=>{
      return state.basladi
    },
    dogruSayisi: (state) => {
      return state.dogru
    },
    yanlisSayisi: (state) => {
      return state.yanlis
    },
    soruNo: (state) => {
      return state.soruno
    },
    soruGetir: (state) => {
      return state.soru
    },
    tumSorular:(state)=>{
      return state.sorular
    },
    sonuc:(state)=>{
      return state.sonuc
    }
  },
  mutations: {
    dogru(state) {
      state.dogru++;
    },
    yanlis(state) {
      state.yanlis++;
    },
    dogruYanlisSifirla(state) {
      state.dogru = 0;
      state.yanlis = 0;
      state.soruno = 1;
    },
    soruyuArtir(state) {
      state.soruno++;
    },
    soruGetir(state, payload) {
      state.soru = payload
    },
    baslatDurdur(state, payload) {
      state.basladi = payload
    },
    sorular(state,sorular){
      state.sorular=sorular
    },
    sonucuIsle(state, payload){
      state.sonuc.push(payload)
    },
    sonucuTemizle(state){
      state.sonuc=[]
    }
  },
  actions: {
    tumSorular({commit},sorular){
      commit('sorular',sorular)
    },
    dogruSayisiniArtir({commit}) {
      commit('dogru')
    },
    yanlisSayisiniArtir({commit}) {
      commit('yanlis')
    },
    dogruYanlisSifirla({commit}) {
      commit('dogruYanlisSifirla')
    },
    soruyuArtir({commit}) {
      commit('soruyuArtir')
    },
    soruGetir({commit}, payload) {
      commit('soruGetir', payload)
    },
    yarismaBaslamaDurumu({commit}, payload){
      commit('baslatDurdur', payload)
    },
    sonucuIsle({commit}, payload){
      commit('sonucuIsle', payload)
    },
    sonucuTemizle({commit}){
      commit('sonucuTemizle')
    },
  }
})
