<script setup lang="ts">
const aiScenarios = [
  {
    code: 'REQ',
    title: 'AI 辅助需求分析',
    input: '需求文档、业务规则、历史缺陷',
    output: '规则矩阵、状态流转、风险清单',
    effect: '把口头描述转成可评审、可追踪的测试输入',
  },
  {
    code: 'CODE',
    title: 'AI 辅助代码分析',
    input: '接口实现、字段模型、调用关系',
    output: '字段来源、影响范围、异常分支',
    effect: '更快缩小回归范围，并提前识别上下游风险',
  },
  {
    code: 'DATA',
    title: 'AI 辅助测试造数',
    input: '表结构、字段约束、业务边界',
    output: '正常、边界、异常数据与 SQL 草稿',
    effect: '让复杂组合造数可重复，并保留人工校验入口',
  },
  {
    code: 'PERF',
    title: 'AI 辅助性能测试',
    input: '接口契约、业务占比、目标阈值',
    output: 'Locust 场景、负载模型、分析模板',
    effect: '从脚本准备延伸到指标解读与瓶颈假设',
  },
  {
    code: 'BUG',
    title: 'AI 辅助缺陷表达',
    input: '现象、日志、请求响应、数据库快照',
    output: '复现步骤、影响范围、证据摘要',
    effect: '让缺陷信息更完整，减少来回补充上下文',
  },
  {
    code: 'SUM',
    title: 'AI 辅助报告总结',
    input: '执行结果、缺陷分布、性能指标',
    output: '风险摘要、遗留问题、发布建议草稿',
    effect: '把分散结果整理成面向决策者的质量结论',
  },
];

const siteEvidence = [
  { value: '1 份', label: '结构化需求输入', detail: '从 AGENTS.md 提取定位、内容和验收标准' },
  { value: '8 段', label: '核心内容落地', detail: '从首屏到 AI 实效与联系入口形成完整叙事' },
  { value: '2 端', label: '响应式实际验收', detail: '桌面端与 390px 移动端逐项检查' },
  { value: '0', label: '浏览器控制台错误', detail: '构建、交互与横向溢出均经过实际验证' },
];
</script>

<template>
  <section id="ai-impact" class="relative overflow-hidden bg-slate-950 text-white">
    <div class="absolute -right-32 top-10 h-96 w-96 rounded-full bg-blue-600/20 blur-[110px]"></div>
    <div class="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]"></div>

    <div class="section-shell relative">
      <div class="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
        <div class="max-w-3xl">
          <p class="section-eyebrow text-cyan-400">AI Real Impact</p>
          <h2 class="mt-5 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">AI 不是标签，<span class="block">而是可验证的测试工作流</span></h2>
          <p class="mt-5 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">从输入信息到生成草稿，再经过人工复核、真实执行与结果沉淀。AI 负责加速理解和生产，测试人员负责业务判断与最终质量结论。</p>
          <div class="mt-5 flex flex-wrap gap-2 text-xs font-bold"><span class="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-cyan-200">测试 AI 应用：知识库 / 问答质量</span><span class="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1.5 text-blue-200">用 AI 做测试：分析 / 造数 / 脚本</span></div>
        </div>
        <div class="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-5 py-4 text-sm text-emerald-200">
          <strong class="block text-white">协作原则</strong>
          <span class="mt-1 block">AI 生成 · 人工审核 · 环境验证</span>
        </div>
      </div>

      <div class="mt-12 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80">
        <div class="grid lg:grid-cols-[.72fr_1.28fr]">
          <div class="border-b border-slate-800 p-7 lg:border-b-0 lg:border-r lg:p-9">
            <div class="flex items-center gap-3"><span class="grid h-11 w-11 place-items-center rounded-xl bg-blue-500/15 text-sm font-black text-blue-300">LIVE</span><div><p class="text-xs font-black tracking-[.16em] text-blue-400">本站真实实践</p><h3 class="mt-1 text-xl font-black">这个作品集如何被 AI 加速</h3></div></div>
            <ol class="mt-7 space-y-5">
              <li class="flex gap-4"><span class="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blue-600 text-xs font-black">1</span><div><strong class="text-sm">输入</strong><p class="mt-1 text-xs leading-6 text-slate-400">求职定位、页面结构、技术栈、内容重点与验收标准。</p></div></li>
              <li class="flex gap-4"><span class="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blue-600 text-xs font-black">2</span><div><strong class="text-sm">AI 协作</strong><p class="mt-1 text-xs leading-6 text-slate-400">拆解内容、生成组件、整理文案、优化响应式与证据表达。</p></div></li>
              <li class="flex gap-4"><span class="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blue-600 text-xs font-black">3</span><div><strong class="text-sm">人工判断</strong><p class="mt-1 text-xs leading-6 text-slate-400">确认业务真实性、删除夸大数字、区分真实实证与模拟案例。</p></div></li>
              <li class="flex gap-4"><span class="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-emerald-500 text-xs font-black">✓</span><div><strong class="text-sm">实际验收</strong><p class="mt-1 text-xs leading-6 text-slate-400">完成构建、浏览器渲染、移动端、导航与交互检查。</p></div></li>
            </ol>
            <div class="mt-7 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-xs leading-6 text-emerald-100"><strong class="block text-sm text-white">实际效果</strong>把文字需求转化成现在可浏览、可运行、可检查、可构建并可部署到 Nginx 的求职作品。</div>
          </div>

          <div class="grid grid-cols-2 gap-px bg-slate-800 sm:grid-cols-4">
            <div v-for="item in siteEvidence" :key="item.label" class="bg-slate-950/60 p-5 sm:p-6">
              <strong class="text-2xl font-black text-cyan-400 sm:text-3xl">{{ item.value }}</strong>
              <span class="mt-2 block text-sm font-bold text-white">{{ item.label }}</span>
              <p class="mt-2 text-xs leading-5 text-slate-500">{{ item.detail }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16">
        <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div><p class="text-xs font-black uppercase tracking-[.18em] text-blue-400">Reusable Scenarios</p><h3 class="mt-3 text-2xl font-black sm:text-3xl">AI 已融入的 6 类测试场景</h3></div>
          <p class="max-w-lg text-sm leading-7 text-slate-400">以下展示可复用的协作方式与直接产出，不把未经验证的 AI 内容当作最终结论。</p>
        </div>

        <p class="mt-6 text-xs font-bold text-slate-500 md:hidden">左右滑动查看 6 类 AI 协作场景 →</p>
        <div class="mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:mt-8 md:grid md:grid-cols-2 md:overflow-visible md:pb-0 xl:grid-cols-3">
          <article v-for="item in aiScenarios" :key="item.code" class="group min-w-[86%] snap-start rounded-2xl border border-slate-800 bg-slate-900 p-5 transition hover:-translate-y-1 hover:border-blue-500/60 sm:p-6 md:min-w-0">
            <div class="flex items-center justify-between"><span class="font-mono text-xs font-black text-cyan-400">AI / {{ item.code }}</span><span class="text-slate-600 transition group-hover:text-blue-400">↗</span></div>
            <h4 class="mt-4 text-lg font-black">{{ item.title }}</h4>
            <dl class="mt-5 space-y-3 text-xs leading-6">
              <div><dt class="font-bold text-slate-500">输入</dt><dd class="text-slate-300">{{ item.input }}</dd></div>
              <div><dt class="font-bold text-slate-500">直接产出</dt><dd class="text-slate-300">{{ item.output }}</dd></div>
            </dl>
            <p class="mt-5 rounded-xl border border-blue-500/15 bg-blue-500/10 p-3 text-xs font-bold leading-6 text-blue-200"><span class="text-blue-400">实际作用：</span>{{ item.effect }}</p>
          </article>
        </div>
      </div>

      <article class="mt-16 overflow-hidden rounded-3xl border border-blue-400/20 bg-white text-slate-900">
        <div class="grid lg:grid-cols-[.68fr_1.32fr]">
          <div class="bg-gradient-to-br from-blue-600 to-cyan-500 p-7 text-white sm:p-9">
            <span class="rounded-full bg-white/15 px-3 py-1 text-xs font-bold">AI 闭环演示案例</span>
            <h3 class="mt-5 text-2xl font-black">优惠券退款需求测试分析</h3>
            <p class="mt-4 text-sm leading-7 text-blue-50">用一个脱敏业务场景说明：AI 如何从需求文本生成测试资产，测试人员又如何控制质量与安全边界。</p>
          </div>
          <div class="grid gap-px bg-slate-200 sm:grid-cols-2 xl:grid-cols-4">
            <div class="bg-white p-6"><span class="text-xs font-black text-blue-600">01 / INPUT</span><h4 class="mt-3 font-black">需求输入</h4><p class="mt-3 text-sm leading-7 text-slate-600">优惠分摊公式、订单状态、退款限制与脱敏历史缺陷。</p></div>
            <div class="bg-white p-6"><span class="text-xs font-black text-blue-600">02 / AI</span><h4 class="mt-3 font-black">生成草稿</h4><p class="mt-3 text-sm leading-7 text-slate-600">提取规则表、状态组合、测试点、SQL 造数和断言骨架。</p></div>
            <div class="bg-white p-6"><span class="text-xs font-black text-blue-600">03 / HUMAN</span><h4 class="mt-3 font-black">人工复核</h4><p class="mt-3 text-sm leading-7 text-slate-600">校验金额守恒、幂等、异常补偿，并删除不符合业务的组合。</p></div>
            <div class="bg-white p-6"><span class="text-xs font-black text-blue-600">04 / OUTPUT</span><h4 class="mt-3 font-black">可执行资产</h4><p class="mt-3 text-sm leading-7 text-slate-600">规则矩阵、测试点清单、SQL 草案、接口断言和风险摘要。</p></div>
          </div>
        </div>
      </article>

      <div class="mt-5 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
        <div class="border-b border-slate-800 px-6 py-4"><span class="text-xs font-black uppercase tracking-[.16em] text-amber-300">Human Correction / 人工纠偏记录</span></div>
        <div class="grid gap-px bg-slate-800 md:grid-cols-3">
          <div class="bg-slate-900 p-5"><span class="text-xs font-bold text-slate-500">AI 初稿</span><p class="mt-2 text-sm leading-7 text-slate-300">“按商品金额比例分摊优惠，并在退款时按原比例退回。”</p></div>
          <div class="bg-slate-900 p-5"><span class="text-xs font-bold text-slate-500">人工追问</span><p class="mt-2 text-sm leading-7 text-slate-300">分母是否含运费？尾差归属谁？多次部分退款是否守恒？重复请求如何处理？</p></div>
          <div class="bg-slate-900 p-5"><span class="text-xs font-bold text-slate-500">修正输出</span><p class="mt-2 text-sm leading-7 text-slate-300">补充分摊口径、舍入精度、尾差顺序、幂等、最终一致性与异常补偿。</p></div>
        </div>
      </div>

      <div class="mt-8 grid gap-3 text-xs text-slate-400 sm:grid-cols-3">
        <p class="rounded-xl border border-slate-800 bg-slate-900 px-4 py-3"><strong class="text-white">数据边界：</strong>生产账号、域名与敏感数据不输入公共模型</p>
        <p class="rounded-xl border border-slate-800 bg-slate-900 px-4 py-3"><strong class="text-white">质量边界：</strong>AI 产出必须经过人工审核与真实环境验证</p>
        <p class="rounded-xl border border-slate-800 bg-slate-900 px-4 py-3"><strong class="text-white">决策边界：</strong>AI 不替代测试结论与发布决策责任</p>
      </div>
    </div>
  </section>
</template>
