<script setup lang="ts">
const pytestCode = `@pytest.mark.parametrize("case", load_yaml("refund.yml"))
def test_refund_points(case, api, db, cleanup):
    result = api.refund(case["order_id"], case["sku_id"])
    assert result.status_code == 200
    assert_schema(result.json(), "refund_success.json")
    assert result.json()["code"] == 0

    # 重放同一请求，验证业务幂等
    retry = api.refund(case["order_id"], case["sku_id"])
    assert retry.json()["refund_id"] == result.json()["refund_id"]

    ledger = wait_until(
        lambda: db.query_point_ledger(case["order_id"]),
        timeout=5,
    )
    assert ledger["returned"] == case["expected_points"]
    assert ledger["idempotency_key"] == case["request_id"]`;

const deliverables = [
  { code: 'PLAN', title: '测试计划', meta: '范围 · 排期 · 风险', desc: '明确交易主链路、上下游依赖、准入准出与重点风险。', preview: ['范围：订单 / 支付 / 退款', '依赖：支付回调 / 积分服务', '准出：P0 清零，P1 有明确结论'] },
  { code: 'CASE', title: '完整用例', meta: '前置 · 步骤 · 期望', desc: '按优惠组合、状态流转和退款方式拆分，并保留数据与 SQL 断言。', preview: ['前置：含积分抵扣的已支付订单', '步骤：对单个 SKU 发起退款', '期望：退款、积分与流水一致'] },
  { code: 'BUG', title: '缺陷记录', meta: '环境 · 复现 · 回归', desc: '记录问题证据、影响范围、根因分析、修复方案和回归结果。', preview: ['现象：积分回退少 1', '证据：接口响应 + 积分流水', '回归：尾差、拆单、重复退款'] },
  { code: 'SQL', title: '数据核对脚本', meta: '订单 · 支付 · 流水', desc: '交叉验证订单明细、支付记录、积分与退款流水。', preview: ['order_item：分摊金额', 'payment_record：支付状态', 'point_ledger：回退流水与幂等键'] },
  { code: 'REPORT', title: '测试报告', meta: '结果 · 缺陷 · 风险', desc: '输出执行范围、遗留问题、风险等级和上线建议。', preview: ['执行：核心链路与异常补偿', '遗留：按影响等级说明', '结论：通过 / 有条件通过 / 不通过'] },
];
</script>

<template>
  <section id="proof" class="bg-slate-50">
    <div class="section-shell">
      <div class="section-heading">
        <p class="section-eyebrow">Portfolio Evidence</p>
        <h2 class="section-title">从描述能力，到展示交付证据</h2>
        <p class="section-desc">以下内容为脱敏或模拟展示，用于呈现测试思路、交付结构和技术实践，不代表线上生产数据。</p>
      </div>

      <div class="mt-12">
        <div class="flex items-center justify-between gap-4"><div><h3 class="text-xl font-black text-slate-950">交付物结构预览</h3><p class="mt-2 text-xs text-slate-500">点击卡片展开脱敏字段示例</p></div><span class="tag">STRUCTURE SAMPLE</span></div>
        <div class="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <details v-for="item in deliverables" :key="item.code" class="group card card-hover p-0 sm:p-0">
            <summary class="cursor-pointer list-none p-5 [&::-webkit-details-marker]:hidden">
              <div class="flex items-center justify-between"><span class="font-mono text-[11px] font-black text-blue-600">{{ item.code }}.DOC</span><span class="text-slate-300 transition group-open:rotate-45 group-open:text-blue-600">＋</span></div>
              <h4 class="mt-4 font-black text-slate-950">{{ item.title }}</h4>
              <p class="mt-1 text-xs font-bold text-slate-400">{{ item.meta }}</p>
              <p class="mt-4 text-xs leading-6 text-slate-600">{{ item.desc }}</p>
            </summary>
            <ul class="space-y-2 border-t border-slate-100 bg-blue-50/50 p-5 text-xs leading-5 text-slate-600"><li v-for="line in item.preview" :key="line" class="flex gap-2"><span class="text-blue-600">•</span>{{ line }}</li></ul>
          </details>
        </div>
      </div>

      <div class="mt-16 grid gap-6 xl:grid-cols-2">
        <article class="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_16px_50px_rgba(15,23,42,.06)]">
          <div class="flex flex-col justify-between gap-4 border-b border-slate-200 p-6 sm:flex-row sm:items-center sm:p-8">
            <div><span class="text-xs font-black tracking-[.18em] text-blue-600">SIMULATED PERFORMANCE REPORT</span><h3 class="mt-2 text-xl font-black">下单接口阶梯压测复盘</h3></div>
            <span class="rounded-full bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-700">模拟报告</span>
          </div>
          <div class="p-6 sm:p-8">
            <div class="mb-6 grid gap-3 sm:grid-cols-2"><p class="rounded-xl border border-blue-100 bg-blue-50 p-4 text-xs leading-6 text-blue-900"><strong class="block text-blue-700">AI 参与</strong>根据接口契约与容量目标，起草 Locust 场景骨架、指标模板和异常排查清单。</p><p class="rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs leading-6 text-slate-700"><strong class="block text-slate-900">人工负责</strong>确定负载模型与阈值、准备数据、实际执行、关联监控并给出容量结论。</p></div>
            <div class="mb-6 grid grid-cols-2 gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs sm:grid-cols-4"><div><span class="block text-slate-400">环境</span><strong class="mt-1 block">预发单实例 · 模拟</strong></div><div><span class="block text-slate-400">负载</span><strong class="mt-1 block">5 → 10 → 15 用户</strong></div><div><span class="block text-slate-400">持续时间</span><strong class="mt-1 block">每阶段 10 min</strong></div><div><span class="block text-slate-400">目标阈值</span><strong class="mt-1 block">P95 ≤ 2s</strong></div></div>
            <div class="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div class="rounded-xl bg-slate-50 p-4"><strong class="text-xl text-slate-950">15</strong><span class="mt-1 block text-[11px] text-slate-500">并发用户</span></div>
              <div class="rounded-xl bg-slate-50 p-4"><strong class="text-xl text-slate-950">16</strong><span class="mt-1 block text-[11px] text-slate-500">峰值 RPS</span></div>
              <div class="rounded-xl bg-slate-50 p-4"><strong class="text-xl text-slate-950">1.82s</strong><span class="mt-1 block text-[11px] text-slate-500">P95</span></div>
              <div class="rounded-xl bg-slate-50 p-4"><strong class="text-xl text-emerald-600">98%</strong><span class="mt-1 block text-[11px] text-slate-500">成功率</span></div>
            </div>
            <div class="mt-7 rounded-2xl bg-slate-950 p-5 text-sm text-slate-300">
              <div class="flex items-center justify-between"><span>5 users</span><span class="text-emerald-400">稳定</span></div><div class="mt-2 h-2 rounded-full bg-slate-800"><div class="h-2 w-[34%] rounded-full bg-emerald-400"></div></div>
              <div class="mt-4 flex items-center justify-between"><span>10 users</span><span class="text-blue-400">可接受</span></div><div class="mt-2 h-2 rounded-full bg-slate-800"><div class="h-2 w-[67%] rounded-full bg-blue-500"></div></div>
              <div class="mt-4 flex items-center justify-between"><span>15 users</span><span class="text-amber-400">出现瓶颈</span></div><div class="mt-2 h-2 rounded-full bg-slate-800"><div class="h-2 w-full rounded-full bg-amber-400"></div></div>
            </div>
            <div class="mt-6 rounded-xl border-l-4 border-amber-400 bg-amber-50 p-4 text-sm leading-7 text-amber-900"><strong>初步判断：</strong>响应恶化与单 SKU 并发扣减时的行锁等待相关；仍需结合数据库锁监控和连接池指标进一步验证。建议对热点 SKU 增加专项容量测试。</div>
          </div>
        </article>

        <article class="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 text-white shadow-xl">
          <div class="flex items-center justify-between border-b border-slate-800 px-6 py-5"><div><span class="text-xs font-black tracking-[.18em] text-blue-400">API AUTOMATION</span><h3 class="mt-1 text-xl font-black">退款积分自动化示例</h3></div><span class="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-400">演示报告</span></div>
          <div class="grid gap-px border-b border-slate-800 bg-slate-800 sm:grid-cols-2"><p class="bg-slate-900 p-5 text-xs leading-6 text-slate-400"><strong class="block text-blue-400">AI 参与</strong>根据退款规则起草 Pytest 参数化结构、接口调用和断言清单。</p><p class="bg-slate-900 p-5 text-xs leading-6 text-slate-400"><strong class="block text-white">人工负责</strong>补齐 Schema、业务码、幂等、最终一致性与清理策略，并在环境中执行。</p></div>
          <pre class="overflow-x-auto p-6 font-mono text-[12px] leading-6 text-slate-300 sm:p-8"><code>{{ pytestCode }}</code></pre>
          <div class="border-t border-slate-800 bg-slate-900 p-6 sm:p-8">
            <p class="mb-4 text-xs font-black uppercase tracking-[.16em] text-blue-400">演示结构包含</p>
            <div class="grid grid-cols-2 gap-2 text-xs sm:grid-cols-3"><span class="rounded-lg border border-slate-700 px-3 py-2 text-slate-300">✓ 参数化用例</span><span class="rounded-lg border border-slate-700 px-3 py-2 text-slate-300">✓ Schema 断言</span><span class="rounded-lg border border-slate-700 px-3 py-2 text-slate-300">✓ 业务码断言</span><span class="rounded-lg border border-slate-700 px-3 py-2 text-slate-300">✓ 幂等验证</span><span class="rounded-lg border border-slate-700 px-3 py-2 text-slate-300">✓ DB 最终一致性</span><span class="rounded-lg border border-slate-700 px-3 py-2 text-slate-300">✓ 失败证据留存</span></div>
            <p class="mt-5 text-xs leading-6 text-slate-400">结构示例不代表真实覆盖率；实际结果应以目标环境执行记录与 Allure 报告为准。</p>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>
