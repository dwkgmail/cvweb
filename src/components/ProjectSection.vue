<script setup lang="ts">
import { projects } from '../data/portfolio';
</script>

<template>
  <section id="projects" class="bg-white">
    <div class="section-shell">
      <div class="section-heading">
        <p class="section-eyebrow">Projects</p>
        <h2 class="section-title">项目案例</h2>
        <p class="section-desc">第一版聚焦求职展示，用清晰案例表达测试经验和业务理解。</p>
      </div>
      <div class="mt-10 grid gap-5 md:grid-cols-2">
        <article v-for="project in projects" :key="project.title" class="card">
          <h3 class="text-xl font-bold text-slate-950">{{ project.title }}</h3>
          <p class="mt-3 leading-8 text-slate-600">{{ project.description }}</p>
          <div class="mt-5 flex flex-wrap gap-2">
            <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
