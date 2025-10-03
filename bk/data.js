// 默认网站数据
const defaultWebsites = [
    // 最常用
    {
        id: 1,
        name: "百度",
        url: "https://www.baidu.com",
        description: "中国最大的搜索引擎，提供网页、图片、视频等搜索服务",
        category: "最常用",
        icon: "fas fa-search"
    },
    {
        id: 2,
        name: "GitHub",
        url: "https://github.com",
        description: "全球最大的代码托管平台，开发者协作与开源项目聚集地",
        category: "最常用",
        icon: "fab fa-github"
    },
    {
        id: 3,
        name: "微信网页版",
        url: "https://wx.qq.com",
        description: "微信网页版，在电脑上使用微信聊天功能",
        category: "最常用",
        icon: "fab fa-weixin"
    },
    {
        id: 4,
        name: "淘宝",
        url: "https://www.taobao.com",
        description: "中国最大的网购零售平台，海量商品一站式购物",
        category: "最常用",
        icon: "fas fa-shopping-cart"
    },
    
    // 开发工具
    {
        id: 5,
        name: "Stack Overflow",
        url: "https://stackoverflow.com",
        description: "全球最大的程序员问答社区，解决编程技术问题",
        category: "开发工具",
        icon: "fab fa-stack-overflow"
    },
    {
        id: 6,
        name: "MDN Web Docs",
        url: "https://developer.mozilla.org",
        description: "权威的Web开发文档和教程，前端开发必备参考",
        category: "开发工具",
        icon: "fas fa-code"
    },
    {
        id: 7,
        name: "CodePen",
        url: "https://codepen.io",
        description: "在线代码编辑器，前端代码分享和展示平台",
        category: "开发工具",
        icon: "fab fa-codepen"
    },
    {
        id: 8,
        name: "VS Code官网",
        url: "https://code.visualstudio.com",
        description: "微软开发的免费代码编辑器，强大的开发工具",
        category: "开发工具",
        icon: "fas fa-terminal"
    },
    
    // 学习资源
    {
        id: 9,
        name: "菜鸟教程",
        url: "https://www.runoob.com",
        description: "提供编程语言教程，适合初学者学习编程",
        category: "学习资源",
        icon: "fas fa-graduation-cap"
    },
    {
        id: 10,
        name: "知乎",
        url: "https://www.zhihu.com",
        description: "中文问答社区，分享知识、经验和见解",
        category: "学习资源",
        icon: "fas fa-question-circle"
    },
    {
        id: 11,
        name: "Coursera",
        url: "https://www.coursera.org",
        description: "在线学习平台，提供来自顶尖大学的课程",
        category: "学习资源",
        icon: "fas fa-university"
    },
    
    // 娱乐影音
    {
        id: 12,
        name: "哔哩哔哩",
        url: "https://www.bilibili.com",
        description: "年轻人聚集的文化社区和视频平台",
        category: "娱乐影音",
        icon: "fas fa-play-circle"
    },
    {
        id: 13,
        name: "网易云音乐",
        url: "https://music.163.com",
        description: "专注于发现与分享的音乐产品",
        category: "娱乐影音",
        icon: "fas fa-music"
    },
    {
        id: 14,
        name: "YouTube",
        url: "https://www.youtube.com",
        description: "全球最大的视频分享网站",
        category: "娱乐影音",
        icon: "fab fa-youtube"
    },
    
    // 社交媒体
    {
        id: 15,
        name: "微博",
        url: "https://weibo.com",
        description: "中国领先的社交媒体平台",
        category: "社交媒体",
        icon: "fab fa-weibo"
    },
    {
        id: 16,
        name: "Twitter",
        url: "https://twitter.com",
        description: "全球实时信息网络，分享最新动态",
        category: "社交媒体",
        icon: "fab fa-twitter"
    },
    
    // 购物网站
    {
        id: 17,
        name: "京东",
        url: "https://www.jd.com",
        description: "专业的综合网上购物商城",
        category: "购物网站",
        icon: "fas fa-store"
    },
    {
        id: 18,
        name: "天猫",
        url: "https://www.tmall.com",
        description: "理想生活上天猫，品质购物平台",
        category: "购物网站",
        icon: "fas fa-cat"
    },
    
    // 新闻资讯
    {
        id: 19,
        name: "新浪新闻",
        url: "https://news.sina.com.cn",
        description: "及时获取国内外重要新闻资讯",
        category: "新闻资讯",
        icon: "fas fa-newspaper"
    },
    {
        id: 20,
        name: "今日头条",
        url: "https://www.toutiao.com",
        description: "个性化推荐新闻资讯平台",
        category: "新闻资讯",
        icon: "fas fa-rss"
    },
    
    // 工具应用
    {
        id: 21,
        name: "腾讯翻译君",
        url: "https://fanyi.qq.com",
        description: "智能翻译工具，支持多种语言互译",
        category: "工具应用",
        icon: "fas fa-language"
    },
    {
        id: 22,
        name: "石墨文档",
        url: "https://shimo.im",
        description: "全新一代云端Office，多人实时协作",
        category: "工具应用",
        icon: "fas fa-file-alt"
    },
    {
        id: 23,
        name: "色彩搭配",
        url: "https://coolors.co",
        description: "专业的配色方案生成器",
        category: "工具应用",
        icon: "fas fa-palette"
    }
];

// 网站分类配置
const categories = [
    { name: "最常用", icon: "fas fa-star", color: "#f39c12" },
    { name: "开发工具", icon: "fas fa-code", color: "#3498db" },
    { name: "学习资源", icon: "fas fa-graduation-cap", color: "#2ecc71" },
    { name: "娱乐影音", icon: "fas fa-play", color: "#e74c3c" },
    { name: "社交媒体", icon: "fas fa-users", color: "#9b59b6" },
    { name: "购物网站", icon: "fas fa-shopping-bag", color: "#e67e22" },
    { name: "新闻资讯", icon: "fas fa-newspaper", color: "#34495e" },
    { name: "工具应用", icon: "fas fa-tools", color: "#1abc9c" },
    { name: "其他", icon: "fas fa-folder", color: "#95a5a6" }
];

// 获取分类图标
function getCategoryIcon(categoryName) {
    const category = categories.find(cat => cat.name === categoryName);
    return category ? category.icon : "fas fa-folder";
}

// 获取分类颜色
function getCategoryColor(categoryName) {
    const category = categories.find(cat => cat.name === categoryName);
    return category ? category.color : "#95a5a6";
}