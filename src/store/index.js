import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: []
  },
  mutations: {
    INSERT_TASK(state, task) {
      this.state.todoList.push(task)
    },
    COMPLETE_TASK(state, taskId) {
      this.state.todoList.find(currentTask => {
        if (currentTask.id === taskId) {
          currentTask.completed = !currentTask.completed
        }
      })
    }
  },
  actions: {
    insertTask({ commit }, task) {
      commit('INSERT_TASK', task)
    },
    completeTask({ state, commit }, taskId) {
      commit('COMPLETE_TASK', taskId)
    }
  }
})
