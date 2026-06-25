<script setup lang="ts">
import { practiceItems } from '../data/portfolio';
</script>

<template>
  <section id="ai-practice" class="section-shell">
    <div class="section-heading">
      <p class="section-eyebrow">AI Practice</p>
      <h2 class="section-title">AI 测试提效实践</h2>
      <p class="section-desc">把 AI 当作测试工作流里的助手，用于需求分析、造数、脚本和报告总结。</p>
    </div>
    <div class="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      <article v-for="item in practiceItems" :key="item.title" class="card">
        <h3 class="text-lg font-bold text-slate-950">{{ item.title }}</h3>
        <p class="mt-3 text-sm leading-7 text-slate-600">{{ item.description }}</p>
        <div class="mt-5 flex flex-wrap gap-2">
          <span v-for="tag in item.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </article>
    </div>
  </section>
</template>
