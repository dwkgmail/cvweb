<script setup lang="ts">
import { automationBlocks } from '../data/portfolio';
</script>

<template>
  <section id="automation" class="bg-white">
    <div class="section-shell">
      <div class="section-heading">
        <p class="section-eyebrow">Automation & Performance</p>
        <h2 class="section-title">自动化与性能测试</h2>
        <p class="section-desc">用工具提升回归效率，用指标判断系统稳定性。</p>
      </div>
      <div class="mt-10 grid gap-5 lg:grid-cols-2">
        <article v-for="block in automationBlocks" :key="block.title" class="card">
          <div class="flex items-start justify-between gap-4">
            <div>
              <p class="section-eyebrow">{{ block.metric }}</p>
              <h3 class="mt-2 text-xl font-bold text-slate-950">{{ block.title }}</h3>
            </div>
            <span class="icon-chip">{{ block.title.slice(0, 2) }}</span>
          </div>
          <p class="mt-4 leading-8 text-slate-600">{{ block.summary }}</p>
          <ul class="mt-6 grid gap-3 sm:grid-cols-2">
            <li v-for="point in block.points" :key="point" class="rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
              {{ point }}
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
