import axios from "axios";
import cookies from 'js-cookie';

const api_url = 'https://swapstore.co.ke/api/'
// const api_url = 'http://dellmat.jim/api/'



export default {

  alertEvent(context, payload) {
    $nuxt.$emit('alertRequest', payload)
    // context.commit('alertEvent', payload)
  },

  errorEvent(context, payload) {
    $nuxt.$emit('errorEvent', payload)
    // context.commit('alertEvent', payload)
  },


  async getItems({ commit, state }, payload) {

    // console.log(payload);
    // var headers = {
    //   'Content-type': 'Application/json',
    //   'Accept': 'Application/json',
    //   'Authorization': state.access_local
    // }

    var model = payload.model
    var update = payload.update

    // let response = await axios.get(api_url + model, {
    //   'headers': headers
    // })
    let response = await axios.get(api_url + model)

    commit(update, response.data)
  },


  // Get Single items
  async showItem({ commit }, payload) {
    // console.log(payload);


    var model = payload.model
    var update = payload.update
    var id = payload.id

    let response = await axios.get(api_url + model + '/' + id)
    // console.log(response.data);

    commit(update, response.data)

    // console.log(payload);

    // var model = payload.model
    // var update = payload.update
    // var id = payload.id
    // context.commit('loading', true)
    // return new Promise((resolve, reject) => {
    //     axios.get(model + '/' + id).then((response) => {
    //         context.commit(update, response.data)
    //         $nuxt.$emit("StoprogEvent");
    //         context.commit('loading', false)
    //         resolve(response)
    //     }).catch((error) => {
    //         $nuxt.$emit("StoprogEvent");
    //         reject(error);
    //         context.commit('loading', false)
    //         if (error.response.status === 500 || error.response.status === 405) {
    //             $nuxt.$emit('errorEvent', error.response.statusText)
    //             return
    //         } else if (error.response.status === 401 || error.response.status === 409) {
    //             $nuxt.$emit('reloadRequest', error.response.statusText)
    //         } else if (error.response.status === 422) {
    //             $nuxt.$emit('errorEvent', error.response.data.message + ': ' + error.response.statusText)
    //             context.commit('errors', error.response.data.errors)
    //             return
    //         }
    //         context.commit('errors', error.response.data.errors)
    //     })
    // })
  },



  // Post Items
  postItems(context, payload) {
    // console.log(payload);
    context.commit('errors', [])

    var model = payload.model
    var data = payload.data

    // console.log(data);

    // var data = payload['data']
    // console.log(data);
    // var update_ = payload['update_list']
    context.commit('loading', true)
    return new Promise((resolve, reject) => {
      axios.post(api_url + model, data).then((response) => {
        context.commit('loading', false)
        $nuxt.$emit('alertRequest', 'Created')
        // console.log(response.data);
        // context.commit(update_, response.data)
        $nuxt.$emit("StoprogEvent");
        resolve(response)
      }).catch((error) => {
        // console.log(error.response.data.errors);
        $nuxt.$emit("StoprogEvent");
        reject(error);

        context.commit('loading', false)
        if (error.response.status === 500 || error.response.status === 405) {
          $nuxt.$emit('errorEvent', error.response.statusText)
          return
        } else if (error.response.status === 401 || error.response.status === 409) {
          $nuxt.$emit('reloadRequest', error.response.statusText)
        } else if (error.response.status === 422) {
          var errors_ = error.response.data.errors
          context.commit('errors', errors_)
          $nuxt.$emit('errorEvent', error.response.data.message + ': ' + error.response.statusText)
          context.commit('errors', error.response.data.errors)
          return
        }
        context.commit('errors', error.response.data.errors)
      })
    });
  },

  // Post Items
  postItem(context, payload) {
    // console.log(payload);
    context.commit('errors', [])

    var model = payload.model
    var id = payload.id
    var data = payload.data

    // console.log(data);

    // var data = payload['data']
    // console.log(data);
    // var update_ = payload['update_list']
    context.commit('loading', true)
    return new Promise((resolve, reject) => {
      axios.post(api_url + model + '/' + id, data).then((response) => {
        context.commit('loading', false)
        // $nuxt.$emit('alertRequest', 'Created')
        // console.log(response.data);
        // context.commit(update_, response.data)
        // $nuxt.$emit("StoprogEvent");
        resolve(response)
      }).catch((error) => {
        // console.log(error);
        // $nuxt.$emit("StoprogEvent");
        reject(error);

        context.commit('loading', false)
        if (error.response.status === 500 || error.response.status === 405) {
          $nuxt.$emit('errorEvent', error.response.statusText)
          return
        } else if (error.response.status === 401 || error.response.status === 409) {
          $nuxt.$emit('reloadRequest', error.response.statusText)
        } else if (error.response.status === 422) {
          var errors_ = error.response.data.errors
          context.commit('errors', errors_)
          $nuxt.$emit('errorEvent', error.response.data.message + ': ' + error.response.statusText)
          context.commit('errors', error.response.data.errors)
          return
        }
        context.commit('errors', error.response.data.errors)
      })
    });
  },


  // Patch Items
  patchItems(context, payload) {
    // console.log(payload);

    var model = payload.model
    var data = payload.data
    var id = payload.id
    context.commit('loading', true)
    return new Promise((resolve, reject) => {
      axios.patch(model + '/' + id, data).then((response) => {
        $nuxt.$emit('alertRequest', 'Updated')
        context.commit('loading', false)
        $nuxt.$emit("StoprogEvent");
        resolve(response)
      }).catch((error) => {
        $nuxt.$emit("StoprogEvent");
        reject(error);
        context.commit('loading', false)
        if (error.response.status === 500 || error.response.status === 405) {
          $nuxt.$emit('errorEvent', error.response.statusText)
          return
        } else if (error.response.status === 401 || error.response.status === 409) {
          $nuxt.$emit('reloadRequest', error.response.statusText)
        } else if (error.response.status === 422) {
          $nuxt.$emit('errorEvent', error.response.data.message + ': ' + error.response.statusText)
          context.commit('errors', error.response.data.errors)

        }
        context.commit('errors', error.response.data.errors)
      })
    });

  },


  searchItems(context, payload) {
    // console.log(payload);

    var model = payload.model
    var update_ = payload.update_
    var search = payload.search
    context.commit('loading', true)
    return new Promise((resolve, reject) => {
      axios.get(model + '/' + search).then((response) => {
        context.commit('loading', false)

        context.commit(update_, response.data)
        $nuxt.$emit("StoprogEvent");
        resolve(response)
      }).catch((error) => {
        // console.log(error);
        $nuxt.$emit("StoprogEvent");
        reject(error);

        context.commit('loading', false)
        if (error.response.status === 500) {
          $nuxt.$emit('errorEvent', error.response.statusText)
          return
        } else if (error.response.status === 401 || error.response.status === 409) {
          $nuxt.$emit('reloadRequest', error.response.statusText)
        } else if (error.response.status === 422) {
          $nuxt.$emit('errorEvent', error.response.data.message + ': ' + error.response.statusText)
          context.commit('errors', error.response.data.errors)
          return
        }
        context.commit('errors', error.response.data.errors)
      })
    });
  },



  filterItems(context, payload) {
    // console.log(payload);

    var model = payload.model
    var update = payload.update
    var data = payload.data
    context.commit('loading', true)
    return new Promise((resolve, reject) => {
      axios.post(api_url + model, data).then((response) => {
        context.commit('loading', false)

        context.commit(update, response.data)
        $nuxt.$emit("StoprogEvent");
        resolve(response)
      }).catch((error) => {
        // console.log(error);
        $nuxt.$emit("StoprogEvent");
        reject(error);

        context.commit('loading', false)
        if (error.response.status === 500) {
          $nuxt.$emit('errorEvent', error.response.statusText)
          return
        } else if (error.response.status === 401 || error.response.status === 409) {
          $nuxt.$emit('reloadRequest', error.response.statusText)
        } else if (error.response.status === 422) {
          $nuxt.$emit('errorEvent', error.response.data.message + ': ' + error.response.statusText)
          context.commit('errors', error.response.data.errors)
          return
        }
        context.commit('errors', error.response.data.errors)
      })
    });
  },


  // Auth
  setToken({ commit }, payload) {
    // console.log(payload);

    var token = payload.token
    var expiresIn = payload.expiresIn

    // axios.setToken(token, 'Bearer');
    const expiryTime = new Date(new Date().getTime() + expiresIn * 1000);
    cookies.set('x-access-token', token, { expires: expiryTime });
    commit('SET_TOKEN', token);
  },

  async refreshToken({ dispatch }) {
    const payload = await axios.$post('refresh-token');
    dispatch('setToken', payload);
  },

  logout({ commit }) {
    axios.setToken(false);
    cookies.remove('x-access-token');
    commit('REMOVE_TOKEN');
  }
}
