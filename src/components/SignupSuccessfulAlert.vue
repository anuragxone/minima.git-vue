<script setup lang="ts">
import { Rocket } from 'lucide-vue-next'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
</script>

<template>
  <Alert>
    <Rocket class="h-4 w-4" />
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>
      Sign up successfull! Please confirm your account to sign in.
    </AlertDescription>
  </Alert>
</template>
