<script setup lang="ts">
import { skills } from '../data/portfolio';
</script>

<template>
  <section id="skills" class="section-shell">
    <div class="section-heading">
      <p class="section-eyebrow">Core Skills</p>
      <h2 class="section-title">核心能力</h2>
      <p class="section-desc">围绕业务理解、接口质量、数据一致性和线上稳定性，形成完整测试闭环。</p>
    </div>
    <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <article v-for="skill in skills" :key="skill.title" class="card">
        <span class="icon-chip">{{ skill.icon }}</span>
        <h3 class="mt-4 text-lg font-bold text-slate-950">{{ skill.title }}</h3>
        <p class="mt-3 text-sm leading-7 text-slate-600">{{ skill.description }}</p>
      </article>
    </div>
  </section>
</template>
