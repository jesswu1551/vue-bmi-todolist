<template>
  <v-container>
    <div class="text-center">
      <div class="overline">{{ today }}</div>
    </div>
    <v-text-field
      label="✏️ Add new todo ..."
      v-model="newtodo"
      @keyup.enter="addTodo(newtodo)"
      >
    </v-text-field>

    <div class="mt-10">
      <div class="d-flex align-center justify-space-between mb-3">
        <div></div>
        <div>
          <v-btn
            small text rounded
            :class="visible == tag ? 'primary' : 'grey--text text--darken-2'"
            v-for="tag in tags"
            :key="tag"
            @click="visible = tag"
          >
          {{ tag }}
          </v-btn>
        </div>
      </div>

      <div
        class="caption text-center grey--text text--darken-2"
        v-if="todos.length < 1"
      >
        Your todo list is empty.
      </div>
      <div v-else>
        <v-card>
          <v-list-item
            class="todo text-left"
            v-for="todo in filterTodos"
            :key="todo.id"
            @mouseover="c_index = todo.id"
            @mouseleave="c_index = -1"
          >
            <v-list-item-action>
              <v-checkbox v-model="todo.completed"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title
                class="view"
                :class="{ 'text-decoration-line-through': todo.completed, editing: todo == edited_todo }"
                v-show="!(todo == edited_todo)"
                @dblclick="editTodo(todo)"
              >{{ todo.text }}</v-list-item-title>
              <v-text-field
                flat solo hide-details
                autofocus
                class="edit pl-3"
                v-model="todo.text"
                v-show="todo == edited_todo"
                v-focus="todo == edited_todo"
                @blur="doneTodo(todo)"
                @keyup.enter="doneTodo(todo)"
              ></v-text-field>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn
                icon
                class="todo-remove-btn"
                @click="deleteTodo(todo)"
              >
                <v-icon v-show="todo.id == c_index">mdi-close</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-card>

        <div class="py-2 d-flex justify-space-between">
          <div class="caption grey--text text--darken-2" >{{ activeItems }} items left</div>
          <v-hover v-slot="{ hover }">
            <div
              class="clear-all caption grey--text text--darken-2"
              :class="{ 'primary--text': hover }"
              @click="removeCompletedTodo()"
            >
              Clear Completed
            </div>
          </v-hover>
        </div>

        <div class="my-2 caption text-center grey--text text--lighten-1">
          <div>Hit enter to add new todo</div>
          <div>Double click todo text to edit</div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
let STORAGE_KEY = "todo-list";
export default {
  name: 'TodoList',
  data() {
    return {
      newtodo: '',
      todos: [],
      edited_todo: '',
      visible: 'All',
      tags: ['All', 'Active', 'Completed'],
      c_index: -1,
      all_done: false,
    }
  },
  methods: {
    setLocalStorage(todos) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    },
    getLocalStorage() {
      return JSON.parse(localStorage.getItem(STORAGE_KEY));
    },
    addTodo(newtodo) {
      if (!newtodo) {
        return;
      }
      this.todos.push({ completed: false, text: newtodo.trim() , id: newtodo.trim() });
      this.newtodo = '';
    },
    deleteTodo(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    },
    editTodo(todo) {
      this.edited_todo = todo;
    },
    doneTodo(todo) {
      this.edited_todo = '';
      todo.text = todo.text.trim();
    },
    removeCompletedTodo() {
      this.todos = this.todos.filter(function (item) {
        return !item.completed;
      });
    },
  },
  watch: {
    todos: {
      handler: function(todos) {
        this.setLocalStorage(todos);
      },
      deep: true
    }
  },
  computed: {
    filterTodos: function () {
      let filterList = [];
      if (this.visible === 'All') {
        filterList = this.todos;
      } else if (this.visible === 'Active') {
        this.todos.forEach(function(item) {
          if (!item.completed) {
            filterList.push(item);
          }
        });
      } else if (this.visible === 'Completed') {
        this.todos.forEach(function(item) {
          if (item.completed) {
            filterList.push(item);
          }
        });
      }
      return filterList;
    },
    activeItems: function () {
      let left = 0;
      this.todos.forEach(function(item) {
          if (!item.completed) {
            left += 1;
          }
        });
      return left;
    },
    today: function () {
      let today = new Date().toDateString();
      return today;
    },
  },
  mounted() {
    if (this.getLocalStorage()) {
      this.todos = this.getLocalStorage();
    }
  },
  directives: {
    'focus': function (el, val) {
      if (val.value) {
        el.focus();
      }
    }
  }
}
</script>

<style scope>
.view {
  line-height: 46px !important;
}

.toggle-all {
  width: 1px;
  height: 1px;
  opacity: 0;
}

.complete-all, .clear-all {
  cursor: pointer;
}
</style>
