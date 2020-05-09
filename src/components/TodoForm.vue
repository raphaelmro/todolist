<template>
  <div>
    <label>
      <input placeholder="Insert a task" v-model="task" type="text" />
    </label>
    <button @click.prevent="insertTask">Add Task</button>
    <br />
  </div>
</template>
<script>
export default {
  name: 'TodoForm',
  data() {
    return {
      task: '',
      id: null
    }
  },
  methods: {
    insertTask() {
      this.$store.dispatch('insertTask', {
        id: this.id + 1,
        description: this.task,
        completed: false
      })
      this.id = this.id + 1
      this.task = ''
    }
  }
}
</script>
