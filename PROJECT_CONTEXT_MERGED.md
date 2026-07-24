# masuip 官网项目合并上下文

本文件用于合并两个 Codex 对话中的项目背景和关键决策。后续继续改网站时，优先参考本文件、`README.md`、`brand-persona.md`、`content-plan.md` 和当前代码。

## 项目目标

- 为马肃和 ShineRed IP 制作面向全球客户的英文官网。
- 正式域名使用 `masuip.com`。
- 网站重点不是普通代理所官网，而是突出马肃个人专业性、前 CNIPA 专利审查员经历、专利地图引导式创新方法、AI 时代科创教育和中国专利进入策略。
- 目标客户表达应保持全球化，不再写成偏向某个地区客户。可覆盖 global innovators、overseas patent firms、cross-border technology teams、foreign companies entering China。

## 品牌与联系信息

- 对外英文品牌：`ShineRed IP`。
- 公司实体可保留为广东新瑞知识产权有限公司。
- 联系邮箱：`maximasure@hotmail.com`。
- 电话：`+86 191 7798 1982`。
- 公开域名、canonical、Open Graph、sitemap、robots、CNAME 均应使用 `https://masuip.com/`。

## 核心人设与卖点

- 马肃：科创教育专家、知识产权战略顾问、中南大学研究生校外导师。
- 曾任国家知识产权局专利局审查员、审协广东中心副研究员。
- 现任北京清控智云知识产权代理事务所执行合伙人、广东新瑞知识产权有限公司执行董事，湖南省知识产权局顾问。
- 有十年以上专利审查、知识产权科普、科技创新与成果转化经验。
- 核心方法：专利地图引导式创新、青少年科创能力评估体系、AI 时代科创实战方法。
- 重要销售主张：前审查员视角可以帮助外国申请人在中国申请前模拟审查、识别授权风险、重构权利要求、组织创造性答复逻辑，提高技术可支持发明在中国获得授权的概率。避免使用“保证授权”“100% 授权”等绝对承诺。

## 网站结构

- `index.html`：全球首页。
- `about.html`：马肃个人简介、权威背景、证书资质。
- `methodology.html`：专利地图引导式创新方法。
- `china-entry.html`：外国创新主体进入中国的专利策略。
- `services.html`：服务总览。
- `education.html`：AI 时代科创教育。
- `articles.html`：文章库。
- `contact.html`：联系页。
- `hong-kong.html`：已改为更通用的 Global Innovator China IP Cooperation。
- `vietnam.html`：已改为更通用的 Overseas Patent Firm China Cooperation。
- `europe.html`：欧洲/全球专利代理机构合作。

## 文章策略

- 网站文章库目前应有 19 篇文章。
- 16 篇来自 `公众号文章合计.docx` / `articles/source-wechat-batch.txt`，另外 3 篇为已有英文文章。
- 旧对话中曾要求公开文章“全文英文”；当前对话中又要求“不要简写得太严重”，因此当前实现为英文正文并追加 Original Chinese Essay 的版本。若上线面向海外客户时只想保留英文，需要再确认。
- 首页文章区曾从 3 篇精选改成展示完整文章列表，避免误以为只有 3 篇。
- 文章生成脚本：
  - `scripts/generate_wechat_articles.py`
  - `scripts/build_english_article_library.py`
- 以后新增文章应同步更新根目录和 `public/` 下的文章页面、`articles.html`、`sitemap.xml`。

## 图片与资质

- 首页和 About 主形象使用高铁商务场景图：`ma-su-train-portrait.jpg`。
- 方形头像备用：`ma-su-portrait.jpg`。
- 证件照和证书图片保留在资质展示区，不作为主形象照。
- 证书/证件展示图应带 `Ma Su / ShineRed IP - verification copy` 水印，并遮挡敏感信息。

## 部署与预览

- 当前项目是纯静态网站，无需数据库、PHP、Node.js 后台。
- 本地预览脚本：`scripts/preview-server.js`。
- 推荐本地预览：
  - `node scripts/preview-server.js`
  - 打开 `http://127.0.0.1:8080/`
- 旧对话中也曾用过 `http://127.0.0.1:8787/`，但当前预览脚本默认端口是 `8080`。
- 推荐部署方式：腾讯云 EdgeOne Pages / Makers 直接上传静态站点，或从 GitHub 仓库发布 `public` 目录。
- 部署包命名已统一为 `masuip-site.zip`，交付包为 `masuip-handoff-package.zip`。
- GitHub 建议仓库：`https://github.com/ipmasu/masuip-site`。

## 域名与自建服务器

- 正式域名：`masuip.com`。
- `www.masuip.com` 建议 CNAME 到托管平台提供的目标；根域名按平台支持设置 A/ALIAS/CNAME flatten 或跳转到 www。
- 自建服务器文档已改为 `C:\Websites\masuip`。
- Caddy 示例域名已改为 `masuip.com`。

## 当前对话新增决策

- 预览问题根因：旧测试 Node 进程占用 `8080` 只返回 `ok`，已停掉并启动真正预览服务。
- 文章页打不开的原因主要是 `file://` 预览和错误测试服务导致，建议始终用 HTTP 预览。
- 当前文章页已追加完整中文原文部分，以减少“简写太严重”的感觉。
- 部署文档和自建服务器文档已进一步统一到 `masuip.com` / `masuip-site`。

## 2026-06-20：英文文章加厚

- 用户反馈英文版文章仍然太简写。
- 已修改 scripts/build_english_article_library.py，为每篇英文文章的每个小节追加 practical detail 英文展开，包括适用对象、操作方法、证据材料和决策逻辑。
- 这一步是英文扩写，不是逐句翻译中文原文；如果需要更忠实的英文全文，应后续按篇进行完整翻译。

