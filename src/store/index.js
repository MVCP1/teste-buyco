import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [],
    page: 1,
    userId: 0,
  },
  getters: {
    getData: (state, getters) => {
      return state.data;
    },
    getPage: (state, getters) => {
      return state.page;
    },
  },

  actions: {
    async refreshData(context) {
      let newData = (await axios.get("http://localhost:3000/users")).data
      context.commit("setData", newData)
    },
    changePage(context, newPage) {
      let maxPage = Math.floor(context.getters.getData.length / 10);
      if (context.getters.getData.length % 10 > 0) {
        maxPage += 1;
      }
      if (newPage > 0 && newPage <= maxPage) {
        context.commit("setPage", newPage)
      }
      else if (newPage == -1) {
        context.commit("setPage", maxPage)
      }
    },
    sortDataId(context) {
      let sortedData = context.getters.getData;
      sortedData.sort(function (a, b) {
        if (a.id < b.id) {
          return -1;
        }
        else if (a.id > b.id) {
          return 1;
        }
        else {
          return 0;
        }
      })
      context.commit("setData", sortedData)
    },
    sortDataName(context) {
      let sortedData = context.getters.getData;
      sortedData.sort(function (a, b) {
        a = padronizeString(a.firstName + a.lastName)
        b = padronizeString(b.firstName + b.lastName)
        if (a < b) {
          return -1;
        }
        else if (a > b) {
          return 1;
        }
        else {
          return 0;
        }
      })
      context.commit("setData", sortedData)
    }
  },

  mutations: {
    setData(state, newData) {
      state.data = newData
    },
    setPage(state, newPage) {
      state.page = newPage
    }
  },

  modules: {
  },

})


function padronizeString(s) {
  var r = s.toLowerCase();
  r = r.replace(new RegExp(/\s/g), "");
  r = r.replace(new RegExp(/[àáâãäå]/g), "a");
  r = r.replace(new RegExp(/æ/g), "ae");
  r = r.replace(new RegExp(/ç/g), "c");
  r = r.replace(new RegExp(/[èéêë]/g), "e");
  r = r.replace(new RegExp(/[ìíîï]/g), "i");
  r = r.replace(new RegExp(/ñ/g), "n");
  r = r.replace(new RegExp(/[òóôõö]/g), "o");
  r = r.replace(new RegExp(/œ/g), "oe");
  r = r.replace(new RegExp(/[ùúûü]/g), "u");
  r = r.replace(new RegExp(/[ýÿ]/g), "y");
  r = r.replace(new RegExp(/\W/g), "");
  return r;
};