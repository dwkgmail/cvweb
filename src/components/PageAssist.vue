<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

const visible = ref(false);
const update = () => { visible.value = window.scrollY > 900; };

onMounted(() => {
  window.addEventListener('scroll', update, { passive: true });
  update();
});
onBeforeUnmount(() => window.removeEventListener('scroll', update));
</script>

<template>
  <Transition enter-active-class="transition duration-200" enter-from-class="translate-y-2 opacity-0" leave-active-class="transition duration-150" leave-to-class="translate-y-2 opacity-0">
    <a v-if="visible" href="#top" class="fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-lg font-black text-slate-700 shadow-lg shadow-slate-900/10 hover:border-blue-300 hover:text-blue-700" aria-label="返回顶部">↑</a>
  </Transition>
</template>
