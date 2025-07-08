<script lang="ts">
export const description =
  "A sign up form with first name, last name, email and password inside a card. There's an option to sign up with GitHub and a link to login if you already have an account"
export const iframeHeight = '600px'
export const containerClass = 'w-full h-screen flex items-center justify-center px-4'
</script>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ref, reactive } from 'vue'
import axios from 'axios'
import type { User, UserRequest, UserResponse } from '@/models/User'
import SignupSuccessfulAlert from './SignupSuccessfulAlert.vue'
import SignupFailedAlert from './SignupFailedAlert.vue'
import { Eye, EyeOff } from 'lucide-vue-next'

const responseData = ref<UserResponse | null>(null)
const loading = ref(false)
const error = ref<string | null>(null)
const showPassword = ref(false)

const userData = reactive<User>({
  email: '',
  password: '',
  slug: '',
})

const requestData = reactive<UserRequest>({
  user: userData,
})

const registerUser = async (payload: UserRequest) => {
  loading.value = true
  error.value = null
  try {
    const response = await axios.post<UserResponse>('http://localhost:3000/auth/signup', payload)
    responseData.value = response.data
    console.log(responseData.value)
  } catch (err) {
    error.value = err?.response?.data?.message || 'Something went wrong'
    console.error(err)
  } finally {
    loading.value = false
  }
}

// onMounted(() => {
//   fetchData();
// })
</script>

<template>
  <form @submit.prevent="registerUser(requestData)">
    <Card class="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle class="text-xl"> Sign Up </CardTitle>
        <CardDescription> Enter your information to create an account </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="grid gap-4">
          <!-- <div class="grid grid-cols-2 gap-4"> -->
          <!-- <div class="grid gap-2">
            <Label for="first-name">First name</Label>
            <Input id="first-name" placeholder="Max" required />
          </div> -->
          <!-- <div class="grid gap-2">
            <Label for="last-name">Last name</Label>
            <Input id="last-name" placeholder="Robinson" required />
          </div> -->
          <!-- </div> -->
          <div class="grid gap-2">
            <Label for="slug">Username</Label>
            <Input id="slug" type="text" placeholder="admin1234" v-model="userData.slug" required />
          </div>
          <div class="grid gap-2">
            <Label for="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              v-model="userData.email"
              required
            />
          </div>
          <div class="grid gap-2">
            <Label for="password">Password</Label>
            <div class="flex flex-row space-x-2">
              <Input
                id="password"
                :type="showPassword ? 'text' : 'password'"
                v-model="userData.password"
                required
              />
              <Button
                type="button"
                variant="outline"
                size="icon"
                @click="showPassword = !showPassword"
              >
                <component :is="showPassword ? EyeOff : Eye" class="w-4 h-4" />
                <span class="sr-only">
                  {{ showPassword ? 'Hide password' : 'Show password' }}
                </span>
              </Button>
            </div>
          </div>
          <Button type="submit" class="w-full" :disabled="loading">
            {{ loading ? 'Creating Account...' : 'Create an account' }}
          </Button>
          <!-- <Button variant="outline" class="w-full"> Sign up with GitHub </Button> -->
        </div>
        <div class="mt-4 text-center text-sm">
          Already have an account?
          <RouterLink :to="{ name: 'signin' }" class="underline"> Sign in </RouterLink>
        </div>
      </CardContent>
      <div v-if="error">
        <SignupFailedAlert />
      </div>
      <div v-else-if="responseData">
        <SignupSuccessfulAlert />
      </div>
    </Card>
  </form>
</template>
