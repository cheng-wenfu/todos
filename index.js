

Vue.component('todo-list',{
  props: ['todoText'],
  template: `
  <div class="todo-list" >
    {{todoText}}
  </div>`
})

var app = new Vue({
  el: "#root",
  data: {
    todos: []
  },
  methods: {
    addTodo: function() {

    }

  }
})
