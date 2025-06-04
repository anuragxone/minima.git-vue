<script setup lang="ts">
import DarkModeToggle from '@/components/DarkModeToggle.vue';
import TypewriterText from '@/components/TypewriterText.vue';
import Button from '@/components/ui/button/Button.vue';
</script>

<template>
  <div class=" flex flex-col h-screen justify-center items-center space-y-8">
    <TypewriterText />
    <div class=" flex flex-row space-x-8">
      <Button as-child>
        <RouterLink to="/signin">Sign in</RouterLink>
      </Button>
      <DarkModeToggle />
    </div>

  </div>
</template>
