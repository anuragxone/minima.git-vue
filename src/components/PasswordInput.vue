<script setup lang="ts">
import { ref } from 'vue'
import { EyeOff, Eye } from 'lucide-vue-next'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const showPassword = ref(false)

// const props = defineProps<{
//   password: string
// }>()

const password = defineModel('password', {
  type: String,
  required: true,
})
</script>

<template>
  <div class="flex flex-row space-x-2">
    <Input id="password" v-model="password" :type="showPassword ? 'text' : 'password'" required />
    <Button type="button" variant="outline" size="icon" @click="showPassword = !showPassword">
      <component :is="showPassword ? EyeOff : Eye" class="w-4 h-4" />
    </Button>
  </div>
</template>
