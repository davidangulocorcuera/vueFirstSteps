import fireApp from '@/plugins/firebase'

export const state = () => ({
  user: null
})
export const mutations = {}
export const actions = {
  fireTest (){
    const payload = {
      one: 'Apple',
      two: 'Orange'
    }
    fireApp.database().ref('VueApp').push(payload)
      .then(() => {
        console.log("success")
      })
      .catch(error => {
        console.log("error: ",error)
      })
  }
}
export const getters = {}
