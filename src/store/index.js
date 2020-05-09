import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: [],
    errorMessage: ''
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
    insertTask({ commit, state}, task) {
      if (task.description.length !== 0) {
        commit('INSERT_TASK', task)
        this.state.errorMessage = ''
      } else {
        this.state.errorMessage = 'Insert a task!'
      }
    },
    completeTask({ state, commit }, taskId) {
      this.state.errorMessage = ''
      commit('COMPLETE_TASK', taskId)
    }
  },
  getters: {
    completedTasks(state) {
      return state.todoList.filter(task => task.completed)
    },
    getTaskById: state => id => {
      return state.todoList.find(task => task.id === id)
    }
  }
})
