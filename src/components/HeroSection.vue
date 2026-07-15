<template>
  <section id="top" class="relative overflow-hidden bg-white">
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-35"></div>
    <div class="absolute left-1/2 top-0 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-blue-200/30 blur-[120px]"></div>
    <div class="section-shell relative grid items-center gap-12 py-14 sm:py-16 lg:min-h-[720px] lg:grid-cols-[1.08fr_.92fr] lg:py-20">
      <div>
        <p class="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-2 text-xs font-extrabold tracking-wide text-blue-700">
          <span class="h-2 w-2 rounded-full bg-emerald-500"></span> OPEN TO WORK · 测试工程师 / AI 深度协作
        </p>
        <h1 class="mt-7 text-[2.65rem] font-black leading-[1.08] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-[4.25rem]">
          测试工程师
          <span class="mt-2 block bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-500 bg-clip-text text-transparent">+ AI 提效实践者</span>
        </h1>
        <p class="mt-7 max-w-2xl text-lg font-bold leading-8 text-slate-800">用测试经验做判断，用 AI 放大交付能力</p>
        <p class="mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">10 年+ 测试经验，覆盖 Web / App / 小程序 / 后台系统；把 AI 实际用于需求分析、代码理解、测试造数、脚本生成，并完成可公开验证的电商工程实践。</p>

        <div class="mt-9 grid grid-cols-2 gap-3 sm:flex sm:flex-row">
          <a href="#ai-impact" class="btn-primary">AI 实际效果 <span class="ml-2">→</span></a>
          <a href="#projects" class="btn-secondary">查看项目案例</a>
          <a href="/resume.pdf" download class="col-span-2 text-center text-sm font-bold text-slate-500 hover:text-blue-700 sm:col-auto sm:inline-flex sm:min-h-12 sm:items-center sm:px-4">下载简历 ↓</a>
        </div>

        <div class="mt-11 grid max-w-xl grid-cols-3 divide-x divide-slate-200 border-y border-slate-200 py-5">
          <div><strong class="flex items-baseline gap-1 text-2xl font-black text-slate-950"><span>10</span><span class="text-base text-blue-600">+</span></strong><span class="text-xs text-slate-500">年测试经验</span></div>
          <div class="pl-5"><strong class="flex items-baseline gap-1 text-2xl font-black text-slate-950"><span>4</span><span class="text-sm text-blue-600">端</span></strong><span class="text-xs text-slate-500">多端质量保障</span></div>
          <div class="pl-5"><strong class="flex items-baseline gap-1 text-2xl font-black text-slate-950"><span>6</span><span class="text-sm text-blue-600">类</span></strong><span class="text-xs text-slate-500">AI 协作场景</span></div>
        </div>
      </div>

      <div class="relative mx-auto w-full max-w-lg">
        <div class="absolute -inset-5 rotate-3 rounded-[2rem] bg-gradient-to-br from-blue-200 to-cyan-100"></div>
        <div class="relative overflow-hidden rounded-[1.75rem] border border-slate-800 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-900/25 sm:p-8">
          <div class="flex items-center justify-between border-b border-slate-800 pb-5">
            <div class="flex gap-2"><span class="h-3 w-3 rounded-full bg-red-400"></span><span class="h-3 w-3 rounded-full bg-amber-300"></span><span class="h-3 w-3 rounded-full bg-emerald-400"></span></div>
            <span class="font-mono text-[11px] text-slate-500">ai-test-workflow.ts</span>
          </div>
          <div class="mt-7 space-y-4 font-mono text-[12px] leading-7 sm:text-[13px]">
            <p><span class="text-fuchsia-300">const</span> input = [<span class="text-amber-200">'需求'</span>, <span class="text-amber-200">'代码'</span>, <span class="text-amber-200">'数据'</span>, <span class="text-amber-200">'指标'</span>];</p>
            <p><span class="text-fuchsia-300">const</span> draft = <span class="text-sky-300">AI.analyze</span>(input);</p>
            <p><span class="text-fuchsia-300">const</span> reviewed = <span class="text-sky-300">human.verify</span>(draft);</p>
            <p><span class="text-sky-300">run</span>(reviewed, [<span class="text-amber-200">'API'</span>, <span class="text-amber-200">'SQL'</span>, <span class="text-amber-200">'P95'</span>]);</p>
            <p class="rounded-lg bg-emerald-400/10 px-3 py-2 text-emerald-300">✓ AI generated · human verified</p>
          </div>
          <div class="mt-8 grid grid-cols-2 gap-3">
            <div class="rounded-xl border border-slate-800 bg-slate-900 p-4"><span class="block text-xs text-slate-500">直接产出</span><strong class="mt-1 block text-sm">用例 · SQL · 脚本 · 报告</strong></div>
            <div class="rounded-xl border border-slate-800 bg-slate-900 p-4"><span class="block text-xs text-slate-500">质量边界</span><strong class="mt-1 block text-sm">人工复核 + 真实验证</strong></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
