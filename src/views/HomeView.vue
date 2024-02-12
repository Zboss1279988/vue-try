<script setup lang="ts">
import { storeToRefs } from 'pinia';
import {useAnswerStore} from '@/stores/answer'
import {ref} from 'vue'
interface Question {
  questionName: string;
  answerChoices: string[];
  correct: number;
}  
const store = useAnswerStore()
const t = ref()
const submit = ref(false)
const { answers } = storeToRefs(store)
const quiz: Question[] = [{questionName: 'Who is the GOAT', answerChoices: ['Pele', 'Messi', 'Ronaldo'], correct: 1}, {questionName: 'Who is the GOAT?', answerChoices: ['Ronaldo', 'Pele', 'Messi'], correct: 2}]

function onSubmit(e: Event) {
  e.preventDefault()
  t.value = answers.value.join(' ')
  submit.value = true
}
</script>

<template>
  <form @submit="onSubmit">
    <div v-for="(question, i) in quiz" :key="i" class="flex flex-col space-y-4">
      <h2 class="mt-4">{{ question.questionName }}</h2>
      <div v-for="(choice, index) in question.answerChoices" :key="index.toString()" class="flex space-x-4">
        <input :value="choice" :name="`${i.toString()}name`" :id="`${i}${index}`" type="radio" v-model="answers[i]">
        <label :for="`${i}${index}`">{{ choice }}</label>
      </div>
      <hr>
    </div>
    <hr>
    <button type="submit" class="mt-5 rounded-lg bg-slate-400/40 px-4 py-2 hover:bg-slate-500/40">Submit</button>
  </form>
  <!-- <form>
    <div>
      <h2>{{ question.questionName }}</h2>
      <div v-for="(choice, index) in question.answerChoices" :key="index.toString()">
        <input :name="i.toString()" :id="`${index.toString()}input`" type="radio">
        <label :for="`${index.toString()}input`">{{ choice }}</label>
      </div>
    </div>
    <button type="submit">Button</button>
  </form> -->
  <div>
    {{ t }}
  </div>
</template>