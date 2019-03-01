import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import { jsonapiModule } from '../../../src/jsonapi-vuexn';


Vue.use(Vuex)

const api = axios.create({
  // connect to local jsonapi-mock server
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/vnd.api+json',
    'Accept': 'application/vnd.api+json'
  }
})

export default new Vuex.Store({
  modules: {
    'jv': jsonapiModule(api)
  }
})
