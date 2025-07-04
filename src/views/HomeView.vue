<script setup lang="ts">
import DarkModeToggle from '@/components/DarkModeToggle.vue'
import TypewriterText from '@/components/TypewriterText.vue'
import Button from '@/components/ui/button/Button.vue'
import router from '@/router'

const onClick = () => {
  router.push({
    name: 'signin',
  })
}
</script>

<template>
  <div class="flex flex-col h-screen justify-center items-center space-y-8">
    <TypewriterText />
    <div class="flex flex-row space-x-8">
      <Button @click="onClick">Sign in</Button>
      <DarkModeToggle />
    </div>
  </div>
</template>
