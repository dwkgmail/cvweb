<script setup lang="ts">
import { bugCases, testCases } from '../data/portfolio';
</script>

<template>
  <section id="cases" class="bg-slate-50">
    <div class="section-shell">
      <div class="section-heading">
        <p class="section-eyebrow">Test Evidence</p>
        <h2 class="section-title">测试设计与缺陷分析</h2>
        <p class="section-desc">把业务规则转换为可执行、可追踪的验证项，并通过现象、证据与根因推动问题闭环。</p>
      </div>

      <div class="mt-10 hidden overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-[0_16px_50px_rgba(15,23,42,.06)] sm:block">
        <table class="w-full min-w-[720px] text-left">
          <caption class="sr-only">电商核心链路测试用例示例</caption>
          <thead class="border-b border-slate-200 bg-slate-950 text-xs uppercase tracking-wider text-slate-300">
            <tr><th scope="col" class="px-6 py-4">编号</th><th scope="col" class="px-6 py-4">模块</th><th scope="col" class="px-6 py-4">测试点</th><th scope="col" class="px-6 py-4">方法</th><th scope="col" class="px-6 py-4">优先级</th></tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            <tr v-for="item in testCases" :key="item.id" class="transition hover:bg-blue-50/50">
              <td class="px-6 py-5 font-mono text-xs font-bold text-blue-700">{{ item.id }}</td><td class="px-6 py-5 text-sm text-slate-600">{{ item.module }}</td><td class="px-6 py-5 text-sm font-bold text-slate-900">{{ item.point }}</td><td class="px-6 py-5 text-sm text-slate-500">{{ item.method }}</td><td class="px-6 py-5"><span :class="item.priority === 'P0' ? 'bg-red-50 text-red-600' : 'bg-amber-50 text-amber-700'" class="rounded-full px-3 py-1 text-xs font-black">{{ item.priority }}</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="mt-8 grid gap-3 sm:hidden">
        <article v-for="item in testCases" :key="item.id" class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div class="flex items-center justify-between gap-3"><span class="font-mono text-xs font-bold text-blue-700">{{ item.id }}</span><span :class="item.priority === 'P0' ? 'bg-red-50 text-red-600' : 'bg-amber-50 text-amber-700'" class="rounded-full px-3 py-1 text-xs font-black">{{ item.priority }}</span></div>
          <h3 class="mt-4 font-black text-slate-950">{{ item.module }} · {{ item.point }}</h3>
          <p class="mt-2 text-xs font-bold text-slate-400">验证方法：{{ item.method }}</p>
        </article>
      </div>

      <div id="bugs" class="mt-16">
        <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div><p class="section-eyebrow">Bug Analysis</p><h3 class="mt-4 text-2xl font-black text-slate-950 sm:text-3xl">代表性 Bug 案例</h3></div>
          <p class="max-w-xl text-sm leading-7 text-slate-600">选取资产、交易状态和数据展示三类问题，避免与深度案例重复表达。</p>
        </div>
        <div class="mt-8 grid gap-5 md:grid-cols-3">
          <article v-for="(bug, index) in bugCases" :key="bug.title" class="card card-hover">
            <div class="flex items-center justify-between gap-3"><span class="rounded-lg bg-red-50 px-2.5 py-1 text-[11px] font-black text-red-600">BUG-0{{ index + 1 }}</span><span class="text-right text-xs font-bold text-emerald-600">{{ bug.value }}</span></div>
            <h4 class="mt-5 text-lg font-black text-slate-950">{{ bug.title }}</h4>
            <div class="mt-5 space-y-4 border-l-2 border-slate-100 pl-4"><p class="text-sm leading-6 text-slate-600"><strong class="block text-xs text-slate-400">现象</strong>{{ bug.symptom }}</p><p class="text-sm leading-6 text-slate-600"><strong class="block text-xs text-slate-400">定位</strong>{{ bug.diagnosis }}</p></div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
