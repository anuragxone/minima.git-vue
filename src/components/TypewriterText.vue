<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Reactive state variables using ref()
const phrases = ref([
  'minima.git'
])
const phraseIndex = ref(0)
const charIndex = ref(0)
const displayedText = ref('')
const typingSpeed = ref(100) // milliseconds per character
const deletingSpeed = ref(50) // milliseconds per character
const pauseBeforeDelete = ref(1500) // milliseconds pause before starting to delete
const pauseBeforeType = ref(700) // milliseconds pause before typing next phrase
const isDeleting = ref(false)

// Function to handle the typing/deleting logic
const typeText = () => {
  const currentPhrase = phrases.value[phraseIndex.value]

  if (!isDeleting.value && charIndex.value < currentPhrase.length) {
    // Typing forward
    displayedText.value += currentPhrase.charAt(charIndex.value)
    charIndex.value++
    setTimeout(typeText, typingSpeed.value)
  } else if (!isDeleting.value && charIndex.value === currentPhrase.length) {
    // Finished typing a phrase, now pause then start deleting
    setTimeout(() => {
      isDeleting.value = true
      typeText() // Call itself to start deleting
    }, pauseBeforeDelete.value)
  } else if (isDeleting.value && charIndex.value > 0) {
    // Deleting backward
    displayedText.value = currentPhrase.substring(0, charIndex.value - 1)
    charIndex.value--
    setTimeout(typeText, deletingSpeed.value)
  } else {
    // Finished deleting a phrase, now pause then move to next phrase
    isDeleting.value = false
    phraseIndex.value = (phraseIndex.value + 1) % phrases.value.length // Loop back to start if at end
    charIndex.value = 0 // Reset char index for the new phrase
    setTimeout(typeText, pauseBeforeType.value) // Call itself to start typing next phrase
  }
}

// Lifecycle hook: Call typeText when the component is mounted to the DOM
onMounted(() => {
  typeText()
})
</script>

<template>
  <!-- <div class=" flex h-screen justify-center items-center "> -->
    <h1 class="  scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-mono ">
      <span>{{ displayedText }}</span><span class=" animate-caret-blink">█</span>
    </h1>
  <!-- </div> -->

</template>
