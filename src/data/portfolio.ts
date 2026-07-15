export type NavItem = { label: string; href: string };
export type SkillItem = { title: string; icon: string; description: string; keywords: string[] };
export type ProjectItem = {
  title: string;
  category: string;
  description: string;
  highlights: string[];
  tags: string[];
  index: string;
  url?: string;
  linkLabel?: string;
};
export type TestCase = { id: string; module: string; point: string; priority: 'P0' | 'P1' | 'P2'; method: string };
export type BugCase = { title: string; symptom: string; diagnosis: string; value: string };

export const navItems: NavItem[] = [
  { label: '核心能力', href: '#skills' },
  { label: '项目案例', href: '#projects' },
  { label: '深度案例', href: '#commerce-case' },
  { label: '作品证据', href: '#proof' },
  { label: 'AI 实效', href: '#ai-impact' },
  { label: '关于我', href: '#about' },
];

export const skills: SkillItem[] = [
  { title: '业务测试', icon: 'BUS', description: '覆盖商品、购物车、订单、支付、退款、积分、优惠券及后台配置等关键业务。', keywords: ['交易闭环', '异常场景'] },
  { title: '接口测试', icon: 'API', description: '围绕参数、鉴权、幂等、异常返回和上下游联调设计接口测试方案。', keywords: ['Postman', '抓包联调'] },
  { title: '自动化测试', icon: 'AUT', description: '使用 Python + Pytest + Requests 搭建数据驱动的接口回归能力。', keywords: ['数据驱动', '持续回归'] },
  { title: '性能压测', icon: 'P95', description: '针对核心链路设计压力场景，关注 TPS、P95、错误率和系统稳定性。', keywords: ['Locust', 'JMeter'] },
  { title: 'SQL 数据校验', icon: 'SQL', description: '校验订单、支付、退款、优惠分摊与状态流转，保证账实一致。', keywords: ['金额核对', '数据一致性'] },
  { title: '问题定位', icon: 'LOG', description: '结合抓包、日志、数据库和调用链快速缩小范围，推动缺陷闭环。', keywords: ['根因分析', '缺陷闭环'] },
  { title: 'AI 工程实践', icon: 'WEB', description: '借助 AI 完成需求拆解、架构设计、代码实现、问题修复与可运行工程交付。', keywords: ['AI 建站', '电商 MVP'] },
  { title: 'AI 代码分析', icon: 'AI', description: '辅助分析接口逻辑、字段来源、影响范围与潜在测试风险。', keywords: ['代码理解', '风险识别'] },
];

export const projects: ProjectItem[] = [
  { index: '01', category: 'E-COMMERCE', title: '电商平台测试', description: '负责从商品到履约售后的完整交易质量保障，重点覆盖复杂优惠、支付状态与退款回退。', highlights: ['梳理商品—购物车—订单—支付—退款主链路', '校验优惠券、积分与分账金额的一致性'], tags: ['交易链路', '金额校验', '接口联调'] },
  { index: '02', category: 'ADMIN SYSTEM', title: '后台管理系统测试', description: '验证运营后台核心配置与数据流转，兼顾角色权限、边界条件和前后台数据一致性。', highlights: ['覆盖商品、用户、订单和财务流水模块', '验证角色权限、配置生效与操作审计'], tags: ['后台系统', '权限', '数据一致性'] },
  { index: '03', category: 'AI APPLICATION', title: 'AI 营养师项目测试', description: '围绕知识库、报告解析和对话问答建立可重复验证的 AI 应用质量标准。', highlights: ['验证召回准确性、解析一致性、幻觉与多轮上下文', '沉淀固定问题集、期望要点与回答质量回归集'], tags: ['AI 应用测试', '回答质量', '回归集'] },
  {
    index: '04',
    category: 'AI-BUILT COMMERCE',
    title: 'DWK Shop · AI 电商项目',
    description: '通过 AI 深度协作搭建的可运行电商 MVP，包含 Vue 3 用户端、管理后台和 Spring Boot 多模块微服务后端。',
    highlights: [
      '打通商品浏览、购物车、确认订单、提交订单、模拟支付与售后基础链路',
      '落地 API 网关、7 个业务服务及 MySQL、Redis、RabbitMQ、Elasticsearch',
    ],
    tags: ['AI 工程实践', '电商全链路', '微服务'],
    url: 'https://github.com/dwkgmail/dwkshop',
    linkLabel: '查看 GitHub 源码',
  },
];

export const testCases: TestCase[] = [
  { id: 'TC-ORDER-001', module: '订单', point: '优惠券金额分摊', priority: 'P0', method: '接口 + SQL' },
  { id: 'TC-PAY-002', module: '支付', point: '重复支付幂等', priority: 'P0', method: '并发请求' },
  { id: 'TC-CART-003', module: '购物车', point: '数量边界校验', priority: 'P1', method: '边界值' },
  { id: 'TC-POINT-004', module: '积分', point: '抵扣与退款回退', priority: 'P0', method: '链路验证' },
];

export const bugCases: BugCase[] = [
  { title: '积分抵扣拆单退款少退', symptom: '按件退款后，用户积分回退数量不足。', diagnosis: '金额整除截断导致分摊精度丢失，退款积分不完整。', value: '避免用户资产损失' },
  { title: '支付成功订单状态未更新', symptom: '支付回调成功，但订单仍停留在待支付。', diagnosis: '回调幂等键处理异常，重复消息被错误拦截。', value: '保障交易状态一致' },
  { title: '趋势图日期未补零', symptom: '无交易日期直接断档，趋势判断失真。', diagnosis: '聚合结果未按日期维度补 0，前端数据不连续。', value: '提升报表可信度' },
];

export const qualityHighlights = [
  { value: '10+', label: '年测试经验', detail: '覆盖 Web / App / 小程序 / 后台系统' },
  { value: '全链路', label: '电商业务测试', detail: '交易、营销、支付、退款与结算' },
  { value: '数据化', label: '质量验证思维', detail: '接口、日志、SQL 与性能指标交叉验证' },
  { value: 'AI+', label: '工程提效实践', detail: '作品集与 DWK Shop 均有公开成果可验证' },
];
