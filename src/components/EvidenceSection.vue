<script setup lang="ts">
import { bugCases, testCases } from '../data/portfolio';
</script>

<template>
  <section id="cases" class="section-shell">
    <div class="section-heading">
      <p class="section-eyebrow">Evidence</p>
      <h2 class="section-title">测试用例示例</h2>
      <p class="section-desc">用小表格展示如何把业务规则转成可执行、可追踪的测试点。</p>
    </div>

    <div class="mt-10 overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-soft">
      <table class="min-w-full text-left">
        <thead class="bg-blue-50 text-sm text-slate-700">
          <tr>
            <th class="px-5 py-4 font-bold">编号</th>
            <th class="px-5 py-4 font-bold">模块</th>
            <th class="px-5 py-4 font-bold">测试点</th>
            <th class="px-5 py-4 font-bold">优先级</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100">
          <tr v-for="item in testCases" :key="item.id" class="hover:bg-blue-50/40">
            <td class="whitespace-nowrap px-5 py-4 font-mono text-sm font-semibold text-brand-700">{{ item.id }}</td>
            <td class="whitespace-nowrap px-5 py-4 text-sm text-slate-600">{{ item.module }}</td>
            <td class="px-5 py-4 text-sm font-medium text-slate-800">{{ item.point }}</td>
            <td class="px-5 py-4"><span class="rounded-full bg-brand-600 px-3 py-1 text-xs font-bold text-white">{{ item.priority }}</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div id="bugs" class="mt-16">
      <div class="section-heading">
        <p class="section-eyebrow">Bug Analysis</p>
        <h2 class="section-title">代表性 Bug 案例</h2>
        <p class="section-desc">展示现象、定位和根因，让面试官快速看到问题分析能力。</p>
      </div>
      <div class="mt-10 grid gap-5 md:grid-cols-3">
        <article v-for="bug in bugCases" :key="bug.title" class="card">
          <span class="icon-chip bg-red-50 text-red-500">BUG</span>
          <h3 class="mt-4 text-lg font-bold text-slate-950">{{ bug.title }}</h3>
          <p class="mt-3 text-sm leading-7 text-slate-600"><strong class="text-slate-800">现象：</strong>{{ bug.symptom }}</p>
          <p class="mt-2 text-sm leading-7 text-slate-600"><strong class="text-slate-800">定位：</strong>{{ bug.diagnosis }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
