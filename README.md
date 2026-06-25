# 丁文凯｜测试工程师作品集网站

这是一个用于求职展示的静态作品集网站，定位为“测试工程师 + AI 提效实践者”个人展示页。

网站重点展示电商业务测试、接口自动化、性能压测、SQL 数据校验、问题定位和 AI 辅助测试提效实践。第一版仅包含前端静态页面，不包含登录、后台管理、数据库或服务端接口。

## 技术栈

- Vue 3
- Vite
- TypeScript
- Tailwind CSS
- 静态 TypeScript 数据
- Nginx 静态部署

## 本地启动

安装依赖：

```bash
npm install
```

启动开发服务：

```bash
npm run dev
```

构建生产版本：

```bash
npm run build
```

构建成功后会生成 `dist/` 目录，可直接部署到 Nginx。

## 项目结构

```text
src/
  components/      页面区块组件
  data/            作品集静态数据
  App.vue          页面组合入口
  main.ts          Vue 入口
  styles.css       Tailwind 与通用样式
public/
  resume.pdf       简历下载文件
  favicon.svg      站点图标
```

## Nginx 部署示例

```nginx
server {
    listen 80;
    server_name dingwenkai.online www.dingwenkai.online;

    root /var/www/dingwenkai.online;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|svg|ico|pdf|woff|woff2)$ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
        try_files $uri =404;
    }
}
```

## 上传 Git 前建议

仓库只需要提交源码、配置、`package-lock.json` 和 `public/` 静态资源。`node_modules/`、`dist/`、开发日志和截图文件不需要提交。
