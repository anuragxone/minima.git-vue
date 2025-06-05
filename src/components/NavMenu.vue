<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <!-- <NavigationMenuLink :class="navigationMenuTriggerStyle()" class=" font-roboto-mono subpixel-antialiased"> -->
        <RouterLink to="/" :class="navigationMenuTriggerStyle()">Home</RouterLink>
        <!-- </NavigationMenuLink> -->
      </NavigationMenuItem>
      <NavigationMenuItem>
        <RouterLink to="/auth" :class="navigationMenuTriggerStyle()">Auth</RouterLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>
