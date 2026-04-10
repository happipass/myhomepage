# GitHub Pages 部署指南 - 个人主页/作品集

## 📋 部署步骤

### 1. 检查项目结构

确保你的仓库根目录包含以下文件:

```
your-repo/
├── index.html          # 必需:网站首页
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   └── (你的图片文件)
└── README.md
```

**重要**: `index.html` 必须在仓库根目录,这是 GitHub Pages 的默认入口文件。

### 2. 在 GitHub 上启用 Pages

#### 方法 A: 通过仓库设置 (推荐)

1. 打开你的 GitHub 仓库页面
2. 点击 **Settings** (设置)
3. 在左侧菜单找到 **Pages**
4. 在 **Source** (源) 下:
   - 选择分支: `main` 或 `master`
   - 选择文件夹: `/ (root)` 
5. 点击 **Save** (保存)
6. 等待 1-2 分钟,页面会显示访问链接

#### 方法 B: 通过 GitHub Actions (自动化部署)

如果你想要自动化部署流程,可以使用 GitHub Actions (见下方配置)。

### 3. 访问你的网站

部署完成后,你的网站地址为:
- **个人/组织仓库**: `https://你的用户名.github.io/仓库名/`
- **用户站点** (如果仓库名为 `username.github.io`): `https://你的用户名.github.io/`

### 4. 常见问题排查

#### ❌ 404 错误
- 检查 `index.html` 是否在根目录
- 确认分支选择正确
- 等待几分钟让 GitHub Pages 完成构建

#### ❌ 样式/图片加载失败
- 检查文件路径是否使用了绝对路径
- 对于子目录项目,使用相对路径或者添加 base 路径

#### ❌ JavaScript 报错
- 打开浏览器开发者工具 (F12) 查看具体错误
- 检查文件路径和语法

### 5. 路径处理建议

如果你的仓库不是 `username.github.io`,需要处理路径:

**HTML 中的资源引用:**
```html
<!-- ✅ 推荐:使用相对路径 -->
<link rel="stylesheet" href="css/style.css">
<script src="js/script.js"></script>
<img src="images/photo.jpg" alt="Photo">

<!-- ❌ 避免:绝对路径 -->
<link rel="stylesheet" href="/css/style.css">
```

**CSS 中的背景图片:**
```css
/* ✅ 相对于 CSS 文件的路径 */
background-image: url('../images/background.jpg');
```

### 6. 自定义域名 (可选)

如果你有自己的域名:

1. 在仓库根目录创建 `CNAME` 文件,内容为你的域名:
   ```
   www.yourdomain.com
   ```

2. 在域名提供商处添加 DNS 记录:
   - **A 记录** 指向 GitHub Pages IP:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - 或 **CNAME 记录** 指向: `你的用户名.github.io`

3. 在 GitHub Pages 设置中输入自定义域名并保存

### 7. 性能优化建议

- ✅ 压缩图片 (使用 TinyPNG 等工具)
- ✅ 合并和压缩 CSS/JS 文件
- ✅ 使用 CDN 加载第三方库
- ✅ 启用浏览器缓存
- ✅ 添加 favicon.ico

### 8. SEO 优化

在 `index.html` 的 `<head>` 中添加:

```html
<!-- 基本 SEO -->
<meta name="description" content="你的网站描述">
<meta name="keywords" content="关键词1, 关键词2">
<meta name="author" content="你的名字">

<!-- Open Graph (社交媒体分享) -->
<meta property="og:title" content="你的网站标题">
<meta property="og:description" content="网站描述">
<meta property="og:image" content="https://你的网站地址/images/preview.jpg">
<meta property="og:url" content="https://你的网站地址">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="你的网站标题">
<meta name="twitter:description" content="网站描述">
<meta name="twitter:image" content="https://你的网站地址/images/preview.jpg">
```

## 🚀 快速检查清单

- [ ] `index.html` 在仓库根目录
- [ ] 所有资源路径使用相对路径
- [ ] 代码已推送到 GitHub
- [ ] GitHub Pages 已在仓库设置中启用
- [ ] 选择了正确的分支和目录
- [ ] 等待 1-2 分钟构建完成
- [ ] 访问网站检查是否正常显示
- [ ] 测试所有链接和功能
- [ ] 在移动设备上测试响应式设计

## 📞 获取帮助

如果遇到问题:
1. 检查 GitHub Actions 标签页查看构建日志
2. 查看浏览器开发者工具 (F12) 的控制台错误
3. 参考 [GitHub Pages 官方文档](https://docs.github.com/pages)

祝你部署顺利! 🎉
