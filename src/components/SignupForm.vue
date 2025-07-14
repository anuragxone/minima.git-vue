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
import { ref } from 'vue'
import type { Ref } from 'vue'
import axios from 'axios'
import type { UserRequest, UserResponse } from '@/models/User'
import { userRequestSchema } from '@/schemas/user'
import SignupSuccessfulAlert from './SignupSuccessfulAlert.vue'
import SignupFailedAlert from './SignupFailedAlert.vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
} from '@/components/ui/form'

const responseData: Ref<UserResponse | null> = ref(null)
const loading = ref(false)
const error: Ref<string | null> = ref(null)

const schema = toTypedSchema(userRequestSchema)
const form = useForm({
  validationSchema: schema,
})

// const registerUser = async (payload: UserRequest) => {
//   console.log('registerUser called with payload:', payload) // <--- Crucial log
//   loading.value = true
//   error.value = null
//   try {
//     const response = await axios.post<UserResponse>('http://localhost:3000/auth/signup', payload)
//     responseData.value = response.data
//     console.log(responseData.value)
//   } catch (err) {
//     error.value = err?.response?.data?.message || 'Something went wrong'
//     console.error(err)
//   } finally {
//     loading.value = false
//   }
// }

const onSubmit = form.handleSubmit(async (payload) => {
  console.log('registerUser called with payload:', payload) // <--- Crucial log
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
  console.log('Value of onSubmit:', onSubmit)
})
</script>

<template>
  <Card class="mx-auto max-w-sm">
    <CardHeader>
      <CardTitle class="text-xl"> Sign Up </CardTitle>
      <CardDescription> Enter your information to create an account </CardDescription>
    </CardHeader>
    <CardContent>
      <form @submit="onSubmit">
        <div class="grid gap-4">
          <div class="grid gap-2">
            <FormField name="username" v-slot="{ componentField }">
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="johndoe" v-bind="componentField" required />
                </FormControl>
                <!-- <FormDescription> This is your public display name. </FormDescription> -->
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
          <div class="grid gap-2">
            <FormField name="email" v-slot="{ componentField }">
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="johndoe@gmail.com"
                    v-bind="componentField"
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
          <div class="grid gap-2">
            <FormField name="password" v-slot="{ componentField }">
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input id="password" type="password" v-bind="componentField" required />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
          <Button @click="onSubmit" class="w-full" :disabled="loading">
            {{ loading ? 'Creating Account...' : 'Create an account' }}
          </Button>
        </div>
      </form>
      <div class="mt-4 text-center text-sm">
        Already have an account?
        <RouterLink :to="{ name: 'signin' }" class="underline"> Sign in </RouterLink>
      </div>
      <div v-if="error">
        <SignupFailedAlert />
      </div>
      <div v-else-if="responseData">
        <SignupSuccessfulAlert />
      </div>
    </CardContent>
  </Card>
</template>
