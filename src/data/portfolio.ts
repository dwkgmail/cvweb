export type NavItem = {
  label: string;
  href: string;
};

export type SkillItem = {
  title: string;
  icon: string;
  description: string;
};

export type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
};

export type TestCase = {
  id: string;
  module: string;
  point: string;
  priority: 'P0' | 'P1' | 'P2';
};

export type BugCase = {
  title: string;
  symptom: string;
  diagnosis: string;
};

export type AutomationBlock = {
  title: string;
  summary: string;
  metric: string;
  points: string[];
};

export type PracticeItem = {
  title: string;
  description: string;
  tags: string[];
};

export const navItems: NavItem[] = [
  { label: '核心能力', href: '#skills' },
  { label: '项目案例', href: '#projects' },
  { label: '测试用例', href: '#cases' },
  { label: 'Bug 案例', href: '#bugs' },
  { label: '自动化与性能', href: '#automation' },
  { label: 'AI 提效', href: '#ai-practice' },
  { label: '关于我', href: '#about' },
];

export const skills: SkillItem[] = [
  { title: '业务测试', icon: 'BUS', description: '覆盖电商商品、购物车、订单、支付、退款、积分、优惠券、后台配置等核心链路。' },
  { title: '接口测试', icon: 'API', description: '围绕参数校验、鉴权、幂等、异常返回、上下游联调设计接口测试方案。' },
  { title: '自动化测试', icon: 'AUTO', description: '熟悉 Python + Pytest + Requests，支持数据驱动、数据库断言与 Allure 报告。' },
  { title: '性能压测', icon: 'P95', description: '设计登录、商品详情、下单、查询类接口场景，关注 TPS、响应时间、P95、错误率。' },
  { title: 'SQL 数据校验', icon: 'SQL', description: '校验订单金额、支付流水、退款记录、优惠分摊和状态流转一致性。' },
  { title: '问题定位', icon: 'LOG', description: '结合抓包、日志、数据库和接口链路，定位缺陷根因并推动闭环。' },
  { title: 'AI 建站', icon: 'AI', description: '借助 AI 完成作品集页面结构设计、文案整理、组件拆分与快速上线。' },
  { title: 'AI 代码分析', icon: '<>', description: '使用 AI 辅助分析接口逻辑、字段来源、影响范围和潜在测试风险。' },
];

export const projects: ProjectItem[] = [
  {
    title: '电商平台测试',
    description: '覆盖商品、购物车、订单、支付、退款、积分、优惠券、分账等核心链路。',
    tags: ['交易链路', '金额校验', '接口联调'],
  },
  {
    title: '后台管理系统测试',
    description: '商品管理、用户管理、订单管理、财务流水、权限与配置项验证。',
    tags: ['后台系统', '权限', '数据一致性'],
  },
  {
    title: 'AI 营养师项目测试',
    description: '覆盖知识库、报告解析、对话问答、商品推荐与回归测试。',
    tags: ['AI 应用', '回归测试', '缺陷跟踪'],
  },
  {
    title: '测试平台 / 小工具实践',
    description: '借助 AI 快速搭建测试能力展示网站、记账工具等轻量项目。',
    tags: ['AI 建站', '快速上线', '实践能力'],
  },
];

export const testCases: TestCase[] = [
  { id: 'TC-ORDER-001', module: '订单', point: '优惠券金额分摊', priority: 'P0' },
  { id: 'TC-PAY-002', module: '支付', point: '重复支付幂等', priority: 'P0' },
  { id: 'TC-CART-003', module: '购物车', point: '数量边界校验', priority: 'P1' },
  { id: 'TC-POINT-004', module: '积分', point: '抵扣与退款回退', priority: 'P0' },
];

export const bugCases: BugCase[] = [
  { title: '积分抵扣拆单退款少退', symptom: '按件退款后积分少退', diagnosis: '金额整除截断导致退款积分不完整' },
  { title: '支付成功订单状态未更新', symptom: '支付回调成功但订单未流转', diagnosis: '回调幂等处理异常' },
  { title: '趋势图日期未补零', symptom: '无交易日断档', diagnosis: '日期维度未补 0，连续展示缺失' },
];

export const automationBlocks: AutomationBlock[] = [
  {
    title: '接口自动化',
    summary: '围绕订单、支付、退款、优惠券和积分等核心接口建立自动化回归，降低重复验证成本。',
    metric: 'Python + Pytest',
    points: ['Requests 接口调用', 'YAML / JSON 数据驱动', '数据库断言', 'Allure 报告', 'Jenkins 集成'],
  },
  {
    title: '性能压测',
    summary: '对登录、商品详情、下单、查询类接口设计压测场景，关注吞吐、时延和稳定性。',
    metric: 'Locust / JMeter',
    points: ['业务链路场景设计', 'TPS 与响应时间监控', 'P95 与错误率分析', '瓶颈定位与报告输出'],
  },
];

export const practiceItems: PracticeItem[] = [
  { title: 'AI 建网站', description: '从需求到页面原型、前端结构设计与快速上线。', tags: ['需求拆解', '页面原型', '快速上线'] },
  { title: 'AI 分析代码', description: '辅助分析接口逻辑、字段来源、影响范围与潜在风险。', tags: ['接口逻辑', '影响范围', '风险识别'] },
  { title: 'AI 造数据', description: '根据业务规则生成测试数据方案与 SQL 造数脚本。', tags: ['业务规则', 'SQL 造数', '边界覆盖'] },
  { title: 'AI 辅助压测', description: '生成压测脚本、设计场景、分析结果并输出总结。', tags: ['脚本生成', '场景设计', '结果总结'] },
];

export const qualityHighlights = [
  '8 年+ 测试经验，覆盖 Web / App / 小程序 / 后台系统。',
  '擅长电商交易链路、营销活动、支付结算、退款回退、数据校验与质量保障。',
  '具备接口自动化、性能压测、SQL 校验、抓包分析和问题定位经验。',
  '持续实践 AI 辅助建站、代码分析、测试数据设计和压测脚本生成。',
];
