# 🚀 王梦瑶个人主页 - GitHub Pages 部署指南

## ✨ 更新内容

本次已为您完成以下更新：

### 📝 个人信息
- ✅ 更新邮箱地址为：2719649066@qq.com
- ✅ 完善个人简介内容
- ✅ 保持原有设计风格和主题切换功能

### 🔬 科研项目
- ✅ **NIPT时点选择与胎儿异常判定**（2025.09）
  - 完整的项目背景、核心贡献和研究成果
- ✅ **网络监督细粒度图像识别**（2025.09-2025.11）
  - 详细的模型选型、训练策略和竞赛成果

### 🏆 竞赛获奖
- ✅ 中国创新发展大赛 - 省级一等奖（2024.07）
- ✅ "挑战杯"全国大学生课外学术科技作品竞赛 - 省级一等奖（2025.07）
- ✅ 全国大学生数学建模竞赛 - 省级二等奖（2025.09）
- ✅ 全球校园人工智能算法精英大赛 - 国家级三等奖（2025.12）

### 🎖️ 荣誉奖项
- ✅ 国家奖学金（2023-2024学年）
- ✅ 校级二等奖学金（2023-2024学年第一学期）
- ✅ 创新创业奖学金（2024年度）
- ✅ 校级"三好学生"（2023-2024学年）
- ✅ 优秀团干部标兵（2024年度）
- ✅ 社会实践相关荣誉

### 🖼️ 奖状展示
- ✅ **新增奖状图片画廊**，支持点击放大查看
- ✅ 已整合9张奖状图片，精美展示
- ✅ 响应式设计，支持移动端浏览

### 👥 学生工作
- ✅ 校友服务中心副主任（2025.09-至今）
- ✅ 校友服务中心秘书部部长（2024.09-2025.07）

### 🤝 志愿服务
- ✅ "三下乡"社会实践（2024.07）
- ✅ 云支教、双选会、返校宣讲等活动

---

## 📦 文件结构

```
homepage/
├── index.html              # 主页面（已更新）
├── style.css               # 样式文件（已添加奖状画廊样式）
├── script.js               # 脚本文件
├── favicon.ico             # 网站图标
├── netlify.toml            # Netlify配置
├── readme.md               # 项目说明
├── static/
│   └── img/
│       ├── awards/         # 奖状图片文件夹
│       │   ├── 王梦瑶-8-国奖.jpg
│       │   ├── 王梦瑶-13-二等奖学金.jpg
│       │   ├── 王梦瑶-6-创新创业奖学金.jpg
│       │   ├── 王梦瑶-12-triz省一.jpg
│       │   ├── 王梦瑶-4-挑战杯省奖.jpg
│       │   ├── 王梦瑶-10-三好学生.jpg
│       │   ├── 王梦瑶-5-优干标兵.jpg
│       │   ├── 王梦瑶-9-先进小分队.jpg
│       │   └── 王梦瑶-7-优秀个人.jpg
│       ├── darkmode.png    # 深色模式预览图
│       ├── lightmode.png   # 浅色模式预览图
│       ├── avatar.png      # 头像
│       ├── logo1.png       # Logo
│       ├── logo3.png       # Logo
│       └── ... (其他图标和图片)
└── DEPLOYMENT_GUIDE.md     # 本部署指南
```

---

## 🌐 部署到 GitHub Pages

### 方法一：通过 GitHub 网页操作（推荐新手）

#### 步骤 1：创建 GitHub 仓库

1. 登录 [GitHub](https://github.com)
2. 点击右上角 "+" → "New repository"
3. 仓库名称：建议使用 `your-username.github.io`（如 `wangmengyao.github.io`）
   - 如果使用这个格式，网站地址将是：`https://wangmengyao.github.io`
   - 如果使用其他名称（如 `homepage`），网站地址将是：`https://your-username.github.io/homepage`
4. 设置为 **Public**（公开）
5. 点击 "Create repository"

#### 步骤 2：上传文件

**方式 A：网页上传（最简单）**

1. 在仓库页面，点击 "Add file" → "Upload files"
2. 将整个 `homepage` 文件夹内的所有文件拖入上传区
3. 等待文件上传完成
4. 在底部填写提交信息（如"Initial commit"）
5. 点击 "Commit changes"

**方式 B：使用 GitHub Desktop（推荐）**

1. 下载并安装 [GitHub Desktop](https://desktop.github.com/)
2. 打开 GitHub Desktop，登录你的账号
3. File → Clone repository → 选择刚创建的仓库
4. 将 `homepage` 文件夹内的所有文件复制到克隆的本地文件夹
5. 在 GitHub Desktop 中会看到所有更改
6. 填写提交信息，点击 "Commit to main"
7. 点击 "Push origin" 推送到 GitHub

#### 步骤 3：启用 GitHub Pages

1. 进入仓库页面
2. 点击 "Settings"（设置）
3. 左侧菜单找到 "Pages"
4. 在 "Source" 部分：
   - Branch: 选择 `main`（或 `master`）
   - Folder: 选择 `/ (root)`
5. 点击 "Save"
6. 等待 1-2 分钟，页面会显示：
   ```
   Your site is published at https://your-username.github.io/
   ```

#### 步骤 4：访问你的网站

- 打开浏览器，输入上面显示的网址
- 🎉 恭喜！你的个人主页已经上线了！

---

### 方法二：使用 Git 命令行（适合有经验的用户）

```bash
# 1. 在本地文件夹打开终端
cd homepage

# 2. 初始化 Git 仓库
git init

# 3. 添加所有文件
git add .

# 4. 提交
git commit -m "Initial commit - 王梦瑶个人主页"

# 5. 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/your-username/your-repo-name.git

# 6. 推送到 GitHub
git branch -M main
git push -u origin main

# 7. 在 GitHub 仓库设置中启用 Pages（参考方法一的步骤3）
```

---

## 🔧 自定义修改

### 修改联系方式

编辑 `index.html` 文件，找到以下行（约第104行）：

```html
<a class="iconItemLong" target="_blank" href="mailto:2719649066@qq.com">
```

将邮箱地址改为你想要的地址。

### 添加简历 PDF 链接

1. 将简历 PDF 文件放入项目根目录，例如命名为 `王梦瑶-简历.pdf`
2. 编辑 `index.html`，找到以下行（约第112行）：

```html
<a class="iconItem" target="_blank" href="#" title="简历下载">
```

改为：

```html
<a class="iconItem" target="_blank" href="./王梦瑶-简历.pdf" title="简历下载">
```

### 添加 GitHub 链接

编辑 `index.html`，找到 GitHub 图标部分（约第117行），将：

```html
<a class="iconItem" target="_blank" href="https://github.com/" title="GitHub（待更新）">
```

改为你的 GitHub 地址：

```html
<a class="iconItem" target="_blank" href="https://github.com/your-username" title="GitHub">
```

### 更换头像

1. 准备一张正方形图片（建议512x512或更大）
2. 替换 `favicon.ico` 文件
3. 或者修改 `index.html` 第32行的头像代码

---

## 📱 功能特性

### ✨ 主要功能

- **双主题切换**：支持浅色/深色主题，夜间自动切换为深色模式
- **响应式设计**：完美适配手机、平板、电脑
- **奖状画廊**：点击奖状可放大查看
- **平滑动画**：流畅的过渡效果
- **折叠面板**：科研项目、获奖、学生工作等内容可展开/收起

### 🎨 个性化

- 修改 `style.css` 中的颜色变量来自定义主题色
- 调整布局和字体大小
- 添加更多项目和经历

---

## 🆘 常见问题

### Q1: 部署后显示 404 错误

**A:** 
- 检查 `index.html` 是否在仓库根目录
- 确认 GitHub Pages 已正确启用
- 等待 3-5 分钟让 GitHub 完成部署

### Q2: 图片不显示

**A:**
- 检查图片路径是否正确
- 确认 `static/img/awards/` 文件夹和图片都已上传
- 图片文件名不要包含中文（已经处理好）

### Q3: 样式错乱

**A:**
- 确认 `style.css` 文件已正确上传
- 清除浏览器缓存（Ctrl+F5 或 Cmd+Shift+R）
- 检查文件编码为 UTF-8

### Q4: 如何更新网站内容？

**A:**
- 直接在 GitHub 仓库网页编辑文件
- 或者在本地修改后重新上传/推送
- 修改后等待 1-2 分钟自动部署

### Q5: 想要自定义域名？

**A:**
1. 购买域名（如 `wangmengyao.com`）
2. 在仓库根目录创建 `CNAME` 文件，内容为你的域名
3. 在域名服务商处添加 CNAME 记录指向 `your-username.github.io`
4. 在 GitHub Pages 设置中输入自定义域名

---

## 📞 技术支持

如遇到问题：

1. **GitHub 官方文档**：https://docs.github.com/pages
2. **HTML/CSS 教程**：https://www.w3schools.com
3. **相关教程视频**：在 B 站搜索"GitHub Pages部署教程"

---

## 🎯 下一步建议

1. ✅ **立即部署**：按照上面的步骤部署到 GitHub Pages
2. 📝 **完善内容**：添加更多项目经历和作品展示
3. 📄 **上传简历**：将简历 PDF 添加到网站并链接
4. 🔗 **添加链接**：完善 GitHub、LinkedIn 等社交链接
5. 📊 **添加统计**：使用 Google Analytics 跟踪访问量
6. 🎨 **个性化定制**：根据个人喜好调整颜色和布局

---

## 📜 版权信息

- 原始模板基于：[ZYYO homepage](https://github.com/ZYYO666/homepage)
- 由 Claude AI 协助完善
- 内容属于：王梦瑶
- 更新日期：2025年4月

---

## 🙏 致谢

感谢使用本项目！祝你推免顺利，前程似锦！🎓

如果这个项目对你有帮助，欢迎：
- ⭐ 给项目点个 Star
- 🔗 分享给需要的同学
- 💬 提供改进建议

---

**注意**：部署成功后，记得在各个申请材料中附上你的个人主页链接！
