<script setup lang="ts">
import { invoke } from '@tauri-apps/api/core'

const greetMsg = ref('')
const name = ref('')

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  greetMsg.value = await invoke('greet', { name: name.value })
  console.log(greetMsg.value)
}
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Vitesse',
  meta: [
    {
      name: 'description',
      content: 'Opinionated Vite Starter Template',
    },
    {
      name: 'theme-color',
      content: () => isDark.value ? '#00aba9' : '#ffffff',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: () => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg',
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
