<template>
  <section id="top" class="bg-[radial-gradient(circle_at_top_left,#dbeafe_0,#fff_38%,#f8fafc_100%)]">
    <div class="section-shell grid items-center gap-10 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:pt-20">
      <div>
        <p class="inline-flex rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-brand-700 shadow-sm">
          电商测试 · 接口自动化 · 性能压测 · AI 提效
        </p>
        <h1 class="mt-7 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          测试工程师 +
          <span class="block bg-gradient-to-r from-brand-700 via-blue-500 to-sky-400 bg-clip-text text-transparent">AI 提效实践者</span>
        </h1>
        <p class="mt-6 max-w-3xl text-lg leading-9 text-slate-600">
          专注电商测试、接口自动化、性能压测、SQL 校验、代码分析与 AI 辅助测试提效。
        </p>
        <p class="mt-4 max-w-3xl text-base leading-8 text-slate-500">
          8年+ 测试经验，覆盖 Web / App / 小程序 / 后台系统，擅长电商交易链路、营销活动、支付结算、数据校验与质量保障。
        </p>

        <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href="#projects" class="btn-primary">查看项目案例</a>
          <a href="#contact" class="btn-secondary">联系我</a>
          <a href="/resume.pdf" download class="btn-secondary">下载简历</a>
        </div>

        <div class="mt-10 grid grid-cols-3 gap-3">
          <div class="stat-card"><strong>8+</strong><span>年测试经验</span></div>
          <div class="stat-card"><strong>4端</strong><span>Web / App / 小程序 / 后台</span></div>
          <div class="stat-card"><strong>AI+</strong><span>建站 / 造数 / 压测 / 分析</span></div>
        </div>
      </div>

      <div class="rounded-[2rem] border border-blue-100 bg-white/90 p-5 shadow-soft">
        <div class="rounded-3xl bg-slate-950 p-5 text-white">
          <div class="mb-5 flex gap-2">
            <span class="h-3 w-3 rounded-full bg-red-400"></span>
            <span class="h-3 w-3 rounded-full bg-yellow-300"></span>
            <span class="h-3 w-3 rounded-full bg-green-400"></span>
          </div>
          <div class="space-y-4 font-mono text-sm leading-7">
            <p><span class="text-sky-300">const</span> coverage = ['业务', '接口', 'SQL', '性能'];</p>
            <p><span class="text-sky-300">assert</span>(order.amount === payment.amount);</p>
            <p><span class="text-sky-300">watch</span>('P95', '错误率', '缺陷闭环');</p>
            <p class="text-emerald-300">report.status = 'ready for interview';</p>
          </div>
        </div>
        <div class="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
          <div class="mini-card">交易链路</div>
          <div class="mini-card">金额校验</div>
          <div class="mini-card">AI 辅助</div>
        </div>
      </div>
    </div>
  </section>
</template>
