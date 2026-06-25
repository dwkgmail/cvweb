<script setup lang="ts">
import { navItems } from '../data/portfolio';
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
    <nav class="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8" aria-label="主导航">
      <a href="#top" class="flex items-center gap-3">
        <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-sm font-bold text-white shadow-lg shadow-blue-500/25">DWK</span>
        <span>
          <span class="block text-sm font-bold text-slate-950 sm:text-base">丁文凯</span>
          <span class="block text-xs text-slate-500">测试作品集网站</span>
        </span>
      </a>

      <div class="flex gap-2 overflow-x-auto pb-1 lg:justify-center">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="shrink-0 rounded-full px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-blue-50 hover:text-brand-700"
        >
          {{ item.label }}
        </a>
      </div>

      <div class="flex gap-2">
        <a href="#contact" class="rounded-full border border-blue-200 px-4 py-2 text-sm font-semibold text-brand-700 hover:bg-brand-50">联系我</a>
        <a href="/resume.pdf" download class="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 hover:bg-brand-700">下载简历</a>
      </div>
    </nav>
  </header>
</template>
