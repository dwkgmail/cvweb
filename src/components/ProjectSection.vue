<script setup lang="ts">import { projects } from '../data/portfolio';</script>
<template>
  <section id="projects" class="bg-white"><div class="section-shell">
    <div class="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div class="section-heading"><p class="section-eyebrow">Selected Projects</p><h2 class="section-title">项目案例</h2><p class="section-desc">从业务链路、验证方法和质量价值三个维度，呈现真实项目中的测试思考。</p></div><p class="text-sm font-bold text-slate-400">04 CASE STUDIES</p></div>
    <p class="mt-7 text-xs font-bold text-slate-400 md:hidden">左右滑动查看 4 个项目案例 →</p>
    <div class="mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:mt-12 md:grid md:grid-cols-2 md:overflow-visible md:pb-0">
      <article v-for="project in projects" :key="project.title" class="card card-hover relative min-w-[86%] snap-start overflow-hidden p-0 sm:p-0 md:min-w-0">
        <div class="absolute right-5 top-3 text-7xl font-black text-slate-100">{{ project.index }}</div>
        <div class="relative p-6 sm:p-8"><p class="text-[11px] font-black tracking-[.2em] text-blue-600">{{ project.category }}</p><h3 class="mt-3 text-2xl font-black text-slate-950">{{ project.title }}</h3><p class="mt-4 max-w-xl text-sm leading-7 text-slate-600">{{ project.description }}</p>
          <ul class="mt-6 space-y-3"><li v-for="item in project.highlights" :key="item" class="flex gap-3 text-sm text-slate-700"><span class="mt-1 text-blue-600">✓</span><span>{{ item }}</span></li></ul>
          <div class="mt-7 flex flex-wrap gap-2"><span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span></div>
        </div>
      </article>
    </div>
  </div></section>
</template>
