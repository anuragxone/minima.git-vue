<script setup lang="ts">
import DarkModeToggle from '@/components/DarkModeToggle.vue'
import TypewriterText from '@/components/TypewriterText.vue'
import Button from '@/components/ui/button/Button.vue'
import router from '@/router'

const routeToSignIn = () => {
  router.push({
    name: 'signin',
  })
}

const routeToExplore = () => {
  router.push({
    name: 'explore',
  })
}
</script>

<template>
  <div class="flex flex-col min-h-svh justify-center items-center space-y-8">
    <TypewriterText />
    <div class="flex flex-row space-x-4">
      <Button @click="routeToExplore" variant="default">Explore</Button>
      <Button @click="routeToSignIn" variant="secondary">Sign in</Button>
      <DarkModeToggle />
    </div>
  </div>
</template>
