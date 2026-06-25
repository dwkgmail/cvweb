<template>
  <section class="bg-white">
    <div class="section-shell">
      <div class="section-heading">
        <p class="section-eyebrow">SQL & Data Checks</p>
        <h2 class="section-title">数据校验与金额链路</h2>
        <p class="section-desc">电商测试中重点关注订单、支付、退款、积分、优惠券与分账数据的一致性。</p>
      </div>
      <div class="mt-10 grid gap-5 md:grid-cols-3">
        <article class="card">
          <h3 class="text-lg font-bold text-slate-950">优惠分摊</h3>
          <p class="mt-3 text-sm leading-7 text-slate-600">校验优惠券、积分抵扣在商品、子订单、退款场景中的分摊与回退。</p>
        </article>
        <article class="card">
          <h3 class="text-lg font-bold text-slate-950">支付流水</h3>
          <p class="mt-3 text-sm leading-7 text-slate-600">核对支付单、订单状态、回调记录与财务流水，验证幂等和异常补偿。</p>
        </article>
        <article class="card">
          <h3 class="text-lg font-bold text-slate-950">分账校验</h3>
          <p class="mt-3 text-sm leading-7 text-slate-600">围绕供应商、平台、子商户账户，校验应分、实分和留存金额。</p>
        </article>
      </div>
    </div>
  </section>
</template>
