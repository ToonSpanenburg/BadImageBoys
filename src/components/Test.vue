<template>
<h1>
  Dit is een test pagina
</h1>
  <div>
    <h3>
      les 1
    </h3>
    <p>
      zo stuur je gewoon text!
    </p>
    <div>
      {{ message }}
      {{counter.count}}
    </div>
  </div>

  <div>
    <h3>
      les 2
    </h3>
    <p>
      gewoon wat event stuff
    </p>
    <div>
      <button @click="increment">{{ count }}</button>
    </div>
  </div>

  <div>
    <h3>
      les 3
    </h3>
    <p>
      2 way binding
    </p>
    <div>
      <input :value="text" @input="onInput" placeholder="Type here">
      <p>{{ text }}</p>
    </div>
  </div>

  <div>
    <h3>
      les 4
    </h3>
    <p>
      conditional rendering
    </p>
    <div>
      <button @click="toggle">toggle</button>
      <h1 v-if="awesome == true">Vue is awesome!</h1>
      <h1 v-else>Oh no 😢</h1>
    </div>
  </div>

  <div>
    <h3>
      les 5
    </h3>
    <p>
      elementen toevoegen via knop
    </p>
    <div>
      <form @submit.prevent="addTodo">
        <input v-model="newTodo">
        <button>Add Todo</button>
      </form>
      <ul>
        <li v-for="todo in filteredTodos" :key="todo.id">
          <input type="checkbox" v-model="todo.done">
          <span :class="{ done: todo.done }">{{ todo.text }}</span>
          <button @click="removeTodo(todo)">X</button>
        </li>
      </ul>
      <button @click="hideCompleted = !hideCompleted">
        {{ hideCompleted ? 'Show all' : 'Hide completed' }}
      </button>
    </div>
  </div>

</template>

<script setup>
//eerste les
import {computed, reactive, ref} from 'vue'

const counter = reactive({ count: 0 })
const message = ref('Hello World!')

//tweede les
const count = ref(0)

function increment() {
  // update component state
  count.value++
}

//derde les
const text = ref('')

function onInput(e) {
  text.value = e.target.value
}

//vierde les
const awesome = ref(true)

function toggle() {
  awesome.value = !awesome.value
}

//vijfde les
let id = 0

const newTodo = ref('')
const hideCompleted = ref(false)
const todos = ref([
  { id: id++, text: 'Learn HTML', done: true },
  { id: id++, text: 'Learn JavaScript', done: true },
  { id: id++, text: 'Learn Vue', done: false }
])

const filteredTodos = computed(() => {
  return hideCompleted.value
      ? todos.value.filter((t) => !t.done)
      : todos.value
})

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value, done: false })
  newTodo.value = ''
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo)
}

</script>
<script>
export default {
  name: "Test"
}
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>