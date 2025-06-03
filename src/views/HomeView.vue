<script setup lang="ts">
import DarkModeToggle from '@/components/DarkModeToggle.vue';
import TypewriterText from '@/components/TypewriterText.vue';
</script>

<template>
  <main>
    <div class=" flex flex-col h-screen">
      <div class=" flex flex-row-reverse">
        <div class=" p-4">
          <DarkModeToggle />
        </div>

      </div>
      <div class=" absolute flex size-full justify-center items-center">
        <TypewriterText />
      </div>
    </div>
  </main>
</template>
