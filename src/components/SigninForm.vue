<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import PasswordInput from '@/components/PasswordInput.vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('flex flex-col gap-6', props.class)">
    <Card>
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription> Enter your email below to login to your account </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div class="flex flex-col gap-6">
            <div class="grid gap-3">
              <Label for="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div class="grid gap-3">
              <div class="flex items-center">
                <Label for="password">Password</Label>
                <a href="#" class="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                  Forgot your password?
                </a>
              </div>
              <!-- <Input id="password" type="password" required /> -->
              <PasswordInput v-model="password" />
            </div>
            <div class="flex flex-col gap-3">
              <Button type="submit" class="w-full"> Login </Button>
              <!-- Disable: Google login button -->
              <!-- <Button variant="outline" class="w-full"> Login with Google </Button> -->
            </div>
          </div>
          <div class="mt-4 text-center text-sm">
            Don't have an account?
            <RouterLink class="underline underline-offset-4" :to="{ name: 'signup' }">
              Sign up
            </RouterLink>
          </div>
        </form>
      </CardContent>
    </Card>
  </div>
</template>
