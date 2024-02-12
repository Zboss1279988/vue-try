import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAnswerStore = defineStore('counter', () => {
  const answers = ref(['Pele', 'Ronaldo'])
  function setAnswers(value: string[]) {
    answers.value = value
  }
  return { answers }
})
