<script setup lang="ts">
import DarkModeToggle from '@/components/DarkModeToggle.vue'
import TypewriterText from '@/components/TypewriterText.vue'
import Button from '@/components/ui/button/Button.vue'
</script>

<template>
  <div class="flex flex-col min-h-svh justify-center items-center space-y-8">
    <TypewriterText />
    <div class="flex flex-row space-x-4">
      <RouterLink :to="{ name: 'explore' }">
        <Button variant="default">Explore</Button>
      </RouterLink>
      <RouterLink :to="{ name: 'signin' }">
        <Button variant="outline">Sign in</Button>
      </RouterLink>

      <DarkModeToggle />
    </div>
  </div>
</template>
