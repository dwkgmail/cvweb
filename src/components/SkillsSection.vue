<script setup lang="ts">
import { skills } from '../data/portfolio';
</script>

<template>
  <section id="skills" class="bg-slate-50">
    <div class="section-shell">
      <div class="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div class="section-heading">
          <p class="section-eyebrow">Core Skills</p>
          <h2 class="section-title">围绕业务结果，建立完整测试闭环</h2>
          <p class="section-desc">核心是电商业务质量保障，接口、数据、性能和 AI 是提升验证深度与效率的技术手段。</p>
        </div>
        <div class="flex flex-wrap gap-2 text-xs font-bold text-slate-500">
          <span class="rounded-full border border-slate-200 bg-white px-3 py-2">业务理解</span>
          <span class="rounded-full border border-slate-200 bg-white px-3 py-2">技术验证</span>
          <span class="rounded-full border border-slate-200 bg-white px-3 py-2">问题闭环</span>
        </div>
      </div>

      <div class="mt-8 grid grid-cols-2 gap-3 sm:hidden">
        <details v-for="skill in skills" :key="`mobile-${skill.title}`" class="group rounded-2xl border border-slate-200 bg-white shadow-sm">
          <summary class="cursor-pointer list-none p-4 [&::-webkit-details-marker]:hidden">
            <div class="flex items-center justify-between gap-2"><span class="grid h-9 min-w-9 place-items-center rounded-lg bg-slate-950 px-1.5 font-mono text-[10px] font-black text-white">{{ skill.icon }}</span><span class="text-slate-300 transition group-open:rotate-45 group-open:text-blue-600">＋</span></div>
            <h3 class="mt-3 text-sm font-black text-slate-950">{{ skill.title }}</h3>
          </summary>
          <div class="border-t border-slate-100 px-4 pb-4 pt-3"><p class="text-xs leading-6 text-slate-600">{{ skill.description }}</p><div class="mt-3 flex flex-wrap gap-1.5"><span v-for="keyword in skill.keywords" :key="keyword" class="text-[10px] font-bold text-blue-700"># {{ keyword }}</span></div></div>
        </details>
      </div>

      <div class="mt-10 hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-4">
        <article v-for="skill in skills" :key="skill.title" class="card card-hover group flex h-full flex-col">
          <div class="flex items-center justify-between">
            <span class="grid h-11 min-w-11 place-items-center rounded-xl bg-slate-950 px-2 font-mono text-[11px] font-black text-white transition group-hover:bg-blue-600">{{ skill.icon }}</span>
            <span class="text-slate-300 transition group-hover:text-blue-500" aria-hidden="true">↗</span>
          </div>
          <h3 class="mt-5 text-lg font-black text-slate-950">{{ skill.title }}</h3>
          <p class="mt-2 flex-1 text-sm leading-7 text-slate-600">{{ skill.description }}</p>
          <div class="mt-4 flex flex-wrap gap-2"><span v-for="keyword in skill.keywords" :key="keyword" class="text-xs font-bold text-blue-700"># {{ keyword }}</span></div>
        </article>
      </div>
    </div>
  </section>
</template>
