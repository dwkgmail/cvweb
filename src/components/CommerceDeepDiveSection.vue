<template>
  <section id="commerce-case" class="bg-slate-950 text-white">
    <div class="section-shell">
      <div class="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div class="max-w-3xl">
          <div class="flex flex-wrap items-center gap-3">
            <p class="section-eyebrow text-blue-400">Commerce Deep Dive</p>
            <span class="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-[11px] font-bold text-amber-300">业务脱敏案例</span>
          </div>
          <h2 class="mt-5 text-3xl font-black tracking-tight sm:text-4xl">复杂优惠下的订单、支付与退款闭环测试</h2>
          <p class="mt-5 max-w-2xl text-sm leading-8 text-slate-400">以多商品、多优惠、拆单和部分退款为核心场景，展示如何从业务规则出发，完成接口、数据与状态的一致性验证。</p>
        </div>
        <div class="grid grid-cols-3 gap-2 text-center">
          <div class="rounded-xl border border-slate-800 bg-slate-900 px-3 py-3"><strong class="block text-sm text-blue-400">商品 → 售后</strong><span class="mt-1 block text-[11px] text-slate-500">覆盖范围</span></div>
          <div class="rounded-xl border border-slate-800 bg-slate-900 px-3 py-3"><strong class="block text-sm text-blue-400">UI · API · DB · LOG</strong><span class="mt-1 block text-[11px] text-slate-500">验证层级</span></div>
          <div class="rounded-xl border border-slate-800 bg-slate-900 px-3 py-3"><strong class="block text-sm text-blue-400">金额 · 状态 · 幂等</strong><span class="mt-1 block text-[11px] text-slate-500">风险主线</span></div>
        </div>
      </div>

      <div class="mt-12 grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
        <article class="rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
          <p class="text-xs font-black tracking-[.18em] text-blue-400">01 / 项目背景与职责</p>
          <h3 class="mt-4 text-xl font-black">交易链路质量保障</h3>
          <p class="mt-4 text-sm leading-7 text-slate-400">业务包含平台优惠、商家优惠、积分抵扣、父子订单、组合支付与按件退款。测试重点是确保用户实付、平台补贴、商家收入与退款金额守恒。</p>
          <ul class="mt-6 space-y-3 text-sm text-slate-300">
            <li class="flex gap-3"><span class="text-blue-400">✓</span>参与需求评审，拆解金额、状态和幂等规则</li>
            <li class="flex gap-3"><span class="text-blue-400">✓</span>设计主流程、逆向流程、异常补偿与边界用例</li>
            <li class="flex gap-3"><span class="text-blue-400">✓</span>使用接口、SQL、日志和页面结果交叉验证</li>
            <li class="flex gap-3"><span class="text-blue-400">✓</span>组织回归并输出上线风险与质量结论</li>
          </ul>
        </article>

        <article class="rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
          <p class="text-xs font-black tracking-[.18em] text-blue-400">02 / 测试策略</p>
          <div class="mt-5 grid gap-3 sm:grid-cols-2">
            <div class="rounded-2xl bg-slate-950 p-5"><strong class="text-sm">规则矩阵</strong><p class="mt-2 text-xs leading-6 text-slate-500">按商品类型、优惠来源、订单结构和退款方式组合覆盖。</p></div>
            <div class="rounded-2xl bg-slate-950 p-5"><strong class="text-sm">状态机验证</strong><p class="mt-2 text-xs leading-6 text-slate-500">校验待支付、已支付、退款中、已退款及异常补偿。</p></div>
            <div class="rounded-2xl bg-slate-950 p-5"><strong class="text-sm">金额守恒</strong><p class="mt-2 text-xs leading-6 text-slate-500">订单实付 = 商品分摊合计，退款与积分回退可追溯。</p></div>
            <div class="rounded-2xl bg-slate-950 p-5"><strong class="text-sm">幂等与并发</strong><p class="mt-2 text-xs leading-6 text-slate-500">重复支付回调、重复退款请求与库存并发扣减。</p></div>
          </div>
        </article>
      </div>

      <article class="mt-5 overflow-hidden rounded-3xl border border-slate-800 bg-white text-slate-900">
        <div class="grid lg:grid-cols-[.72fr_1.28fr]">
          <div class="bg-blue-600 p-7 text-white sm:p-9">
            <p class="text-xs font-black tracking-[.18em] text-blue-100">03 / 代表性问题</p>
            <h3 class="mt-4 text-2xl font-black">拆单后按件退款，积分回退少 1</h3>
            <p class="mt-4 text-sm leading-7 text-blue-100">问题只在金额无法整除且发生部分退款时出现，普通整单退款无法复现。</p>
          </div>
          <div class="grid gap-5 p-7 sm:grid-cols-2 sm:p-9 xl:grid-cols-4">
            <div><span class="text-xs font-black text-slate-400">定位过程</span><p class="mt-2 text-sm leading-7 text-slate-600">对比接口响应、订单明细和积分流水，缩小到子订单分摊算法。</p></div>
            <div><span class="text-xs font-black text-slate-400">根因判断</span><p class="mt-2 text-sm leading-7 text-slate-600">整除截断造成尾差未归集，退款按原分摊值回退时产生资产缺口。</p></div>
            <div><span class="text-xs font-black text-slate-400">验证闭环</span><p class="mt-2 text-sm leading-7 text-slate-600">补充尾差归集、拆单顺序及重复退款用例，并校验积分流水幂等。</p></div>
            <div><span class="text-xs font-black text-slate-400">沉淀结果</span><p class="mt-2 text-sm leading-7 text-slate-600">将金额尾差、资产流水与重复退款纳入发布前专项回归清单。</p></div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
