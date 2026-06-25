<script setup lang="ts">
import { qualityHighlights } from '../data/portfolio';
</script>

<template>
  <section id="about" class="section-shell">
    <div class="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div class="card bg-gradient-to-br from-blue-50 to-white">
        <p class="section-eyebrow">About</p>
        <h2 class="section-title">关于我</h2>
        <p class="mt-5 text-base leading-8 text-slate-600">
          我关注的不只是功能是否能跑通，更关注业务规则是否闭环、金额与数据是否一致、异常链路是否可控，以及问题能否被准确复现和定位。
        </p>
        <div id="contact" class="mt-8 rounded-2xl bg-white p-5 shadow-sm">
          <p class="text-sm font-bold text-slate-950">联系方式</p>
          <a href="tel:17602153669" class="mt-2 inline-flex text-lg font-black tracking-wide text-brand-700 hover:text-brand-900">17602153669</a>
          <p class="mt-2 text-sm text-slate-500">欢迎沟通岗位机会、项目背景和测试经验。</p>
          <a href="mailto:dingwenkai001@aliyun.com" class="mt-3 inline-flex text-sm font-semibold text-slate-600 hover:text-brand-700">dingwenkai001@aliyun.com</a>
        </div>
      </div>

      <div class="grid gap-4">
        <div v-for="item in qualityHighlights" :key="item" class="flex gap-4 rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
          <span class="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-600 text-xs font-black text-white">✓</span>
          <p class="text-sm leading-7 text-slate-600">{{ item }}</p>
        </div>
        <div class="mt-3 flex flex-col gap-3 sm:flex-row">
          <a href="/resume.pdf" download class="btn-primary">下载简历</a>
          <a href="#top" class="btn-secondary">返回顶部</a>
        </div>
      </div>
    </div>
  </section>
</template>
