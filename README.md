# ZeroCup2023

武汉大学2023年零杯零组**From zero to one;队**作品

## 一. 综述

我们的网站分为四个section:

1. 主页：对MBTI的综述介绍与导航
2. 十六人格介绍：对十六种人格的细致介绍
3. 测试部分：提供一套MBTI测试题，检测使用者的MBTI类型
4. 关于生活：一些相关文章，并提供搜索功能检索感兴趣的内容

## 二. 项目目录及说明

```txt
.
├── loading.html //加载页入口（总入口）
├── main
│   ├── blackSong //字体文件
│   │   └── 寒蝉端黑宋_100font.com
│   │   │   ├── 寒蝉端黑宋
│   │   │   |   ├──ChillDuanHeiSong_CompactMedium.otf
│   │   |   |   └── ...
│   │   │   ├── 寒蝉端黑宋Pro
│   │   │   |   └── ChillDuanHeiSongProJP_Regular.otf 
│   │   │   └── 帮助说明.txt
│   ├── main.html //主页入口
│   ├── content.css //主页样式文件
│   ├── header.css //导航栏样式文件
│   ├── line.css //加载页样式文件
│   ├── loadingStyle.css //加载页样式文件
│   ├── main.css //主页样式文件
│   ├── loadingText.js //加载页js文件
│   ├── main.js //主页js文件
│   ├── rolling.js //主页js文件
│   ├── right1.jpg //以下都为主页或加载页图片资源
│   ├── right2.jpg
│   ├── angle-double-down (1).svg
│   ├── EXPLORE.svg
│   ├── Vector.svg
│   ├── zhuye2.svg
│   ├── 测试申请.svg
│   ├── 生活休闲.svg
│   ├── 详情介绍.svg
│   ├── 1.png
│   ├── 2.png
│   ├── 3.png
│   ├── 4.png
│   ├── front1.png
│   ├── front2.png
│   ├── front3.png
│   ├── front4.png
│   ├── front5.png
│   ├── pic_1631337782009L6Iboy3C5gH2OEGlJv5T5.png
│   ├── right1.png
│   └── right2.png
├── test
│   ├── .vscode
│   │   └── launch.json
│   ├── header
│   │   └── header.css
│   ├── logonotest
│   │   ├── axis.png
│   │   ├── logo.css
│   │   ├── logo.html
│   │   └── logo.js
│   ├── stars //图片资源
│   │   ├── star1.png
│   │   ├── star2.png
│   │   ├── star3.png
│   │   └── star4.png
│   ├── test数据处理
│   │   ├── 处理.exe
│   │   ├── 处理.cpp
│   │   ├── data.out
│   │   └── data.in
│   ├── test.css //测试样式文件
│   ├── test.js //测试js文件
│   ├── test.html //测试页面入口
│   ├── 测试.html
│   ├── zhuye2.svg //以下为图片资源
│   ├── 测试申请.svg
│   ├── 生活休闲.svg
│   ├── 详情介绍.svg
│   └── axis.png
├── introduction
│   ├── font //字体文件
│   │   ├── HYZhuXinKaiW.ttf
│   │   └── Slidexiaxing-Regular.ttf
│   ├── img //图片资源
│   │   ├── 屏幕截图 2023-11-10 010355.png
│   │   ├── 屏幕截图 2023-11-10 005735.png
│   │   ├── 屏幕截图 2023-11-10 001503.png
│   │   └── ...
│   ├── INTRODUCTION.html //介绍页面入口
│   ├── header.css //介绍页样式文件
│   ├── introduction.css //介绍页样式文件
│   ├── single.css //介绍页样式文件
│   ├── introduction.js //介绍页js文件
│   ├── single.js //介绍页js文件
│   ├── adventurer.html //以下为下分展示页入口
│   ├── advocate.html
│   ├── architect.html
│   ├── campaigner.html
│   ├── commander.html
│   ├── consul.html
│   ├── debater.html
│   ├── defender.html
│   ├── entertainer.html
│   ├── entrepreneur.html
│   ├── executive.html
│   ├── logician.html
│   ├── logistician.html
│   ├── mediator.html
│   ├── protagonist.html
│   ├── virtuoso.html
│   ├── zhuye2.svg //以下为图片资源
│   ├── 测试申请.svg
│   ├── 生活休闲.svg
│   └── 详情介绍.svg
├── about
│   ├── about.html //生活页面入口
│   ├── article1.html //以下为下分文章展示入口
│   ├── article2.html
│   ├── article3.html
│   ├── article4.html
│   ├── article5.html
│   ├── article6.html
│   ├── article7.html
│   ├── article8.html
│   ├── article9.html
│   ├── article10.html
│   ├── zhuye2.svg //以下为图片资源
│   ├── 测试申请.svg
│   ├── 生活休闲.svg
│   ├── 详情介绍.svg
│   ├── 主页选中.svg
│   ├── bgbg.png
│   ├── bgi.png
│   ├── sarch.png
│   └── 菜单.png
├──picture
|  ├── about1.svg //以下为共用图片资源
│  ├── introduction1.svg
│  ├── main0.svg
│  └── test1.svg
|  
├── README.md //说明文档
└── README.pdf //说明文档pdf

```

## 三.功能设计

在本项目中，我们采用前端展示与少量后台交互的设计，在此基础上编写html，css和JavaScript的代码。页面没有使用任何第三方辅助工具和其他库。为提高合作效率，我们学习并使用了``git``和``github``帮助高效开发。同时我们注意开发规范，对变量命名、css选择器、JavaScript标准等都严格要求，代码可读性高。同时我们采取了响应式设计，尽可能满足了不同屏幕大小的使用。
	
在加载页面中，我们设计并实现了文字渐入的动画效果，各类图形动画、文字动画和渐显渐隐效果，下方设计了动画按钮。
	
用户点击enter按钮进入主页后，我们设计了视差下滑效果，对文字描述进行hover高亮显示处理。插入生动的图画并进行合理布局。

导航栏由左上角动画logo与右上角索引部分构成，点击右上角可跳转到对应的四个模块。

点击介绍进入介绍部分，背景中八个字母含义有hover显示，四个大模块采取高亮与变形效果，点击展开，图片左移，显示介绍，右边小节我们设计了书签动画作为指引。点击书签可进入详细介绍。介绍页左边为人物简画，鼠标悬停可使图片立体化，右方为详细文字介绍，末尾有附加的随机名言。点击下方按钮可回到上一页。

点击测试索引进入测试部分。我们设计了文字勾勒特效与彩色流星背景动画，可在下方选择简易版或完整版试题，也可以自定义题目数量。点击其中一个进入测试，并点击启动开始测试。背景为3D坐标轴旋转动画。题目采取渐显渐隐随机位置效果，选择按钮样式为彩色四角星。测试完成后会给出测试者的类型，并提供跳转到相应性格介绍的链接按钮。点击可跳转到详细介绍。

最后是关于生活模块，点击索引进入，背景采用光影泡泡充实画面，并用文字渐显渐隐以体现此模块的作用。此模块使用十篇网上文章进行效果展示，点击上下页可以翻页显示，点击每篇文章可进行新窗口跳转，再次点击back按钮可以关闭新窗口。上方搜索框可进行搜索。针对搜索内容，我们从标题，标签，首段等方面分为六个等级显示，相关度高的优先显示。

## 四. 队成员及分工：
刘胜煜：队长，组织任务推进并负责介绍页面的制作、管理项目仓库。

钱逸文：负责加载页面和主页的制作、页面图标的设计。

戴天奕：负责测试页面的制作和测试数据的处理。

黄嘉麒：负责生活页面的制作和文件整理，readme编写。
