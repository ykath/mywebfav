// 数据版本号 - 更新数据时请修改此版本号
const DATA_VERSION = "2025.08.03.001";

// 默认网站数据 - 由收藏夹自动生成
const defaultWebsites = [
    // ==================== 最常用 ====================
    {
        id: 24,
        name: "ChatGPT",
        url: "https://chat.openai.com/chat",
        description: "OpenAI开发的顶级对话AI，支持代码编写、文档撰写、问题解答、创意生成等全方位任务",
        category: "最常用",
        icon: "fas fa-robot"
    },
    {
        id: 26,
        name: "Kimi.ai - 帮你看更大的世界",
        url: "https://kimi.moonshot.cn/",
        description: "月之暗面开发的长文本AI助手，支持200万字超长文档分析，擅长处理复杂文档和代码",
        category: "最常用",
        icon: "fas fa-robot"
    },
    {
        id: 27,
        name: "Gemini - 轻松对话，获取创意灵感",
        url: "https://gemini.google.com/",
        description: "Google最新多模态AI模型，支持文本、图像理解和代码生成，免费使用无限制",
        category: "最常用",
        icon: "fas fa-robot"
    },
    {
        id: 28,
        name: "豆包 - 字节跳动旗下 AI 智能助手",
        url: "https://www.doubao.com/chat/",
        description: "字节跳动AI助手，支持多轮智能对话、文案创作、图片理解等功能，国内访问稳定",
        category: "最常用",
        icon: "fas fa-robot"
    },
    {
        id: 29,
        name: "Qwen",
        url: "https://chat.qwen.ai/",
        description: "阿里云通义千问大语言模型，支持代码编程、文档分析、数学推理等专业任务",
        category: "最常用",
        icon: "fas fa-robot"
    },
    {
        id: 31,
        name: "智谱清言 Z",
        url: "https://chat.z.ai",
        description: "智谱AI国际版GLM-4.5模型，功能更新更快，支持复杂推理和代码生成",
        category: "最常用",
        icon: "fas fa-link"
    },
    {
        id: 30,
        name: "Grok",
        url: "https://grok.com/",
        description: "马斯克xAI公司开发的AI助手，具有独特的幽默风格和实时信息获取能力",
        category: "最常用",
        icon: "fas fa-robot"
    },
    {
        id: 127,
        name: "Albus - 使用人工智能探索、学习、创造",
        url: "https://albus.org/",
        description: "基于LLM的无限画布AI学习平台，支持思维导图式知识探索和创作",
        category: "最常用",
        icon: "fas fa-link"
    },
    {
        id: 109,
        name: "微博 – 随时随地发现新鲜事",
        url: "https://weibo.com/",
        description: "新浪微博社交平台，获取实时热点资讯和社会动态",
        category: "最常用",
        icon: "fas fa-share-alt"
    },
    {
        id: 142,
        name: "介绍 - 沉浸式翻译",
        url: "https://immersive-translate.owenyoung.com/",
        description: "智能双语对照翻译插件，支持网页、PDF、视频字幕等多种格式翻译",
        category: "最常用",
        icon: "fas fa-link"
    },
    {
        id: 171,
        name: "Excalidraw 流程图 支持在线",
        url: "https://excalidraw.com/",
        description: "简洁优雅的在线手绘风格流程图工具，支持实时协作和图表绘制",
        category: "最常用",
        icon: "fas fa-link"
    },
    {
        id: 178,
        name: "BabelDOC - 无损排版 海量额度",
        url: "https://app.immersivetranslate.com/babel-doc/",
        description: "专业PDF文档翻译工具，保持原文档格式和排版，支持学术论文翻译",
        category: "最常用",
        icon: "fas fa-link"
    },
    {
        id: 180,
        name: "Exposure Time Attribute – DICOM Standard Browser",
        url: "https://dicom.innolitics.com/ciods/ct-image/ct-image/00181150",
        description: "医学影像DICOM标准浏览器，用于查询DICOM标签字段含义和属性定义",
        category: "最常用",
        icon: "fas fa-link"
    },

    // ==================== AI大语言模型 ====================
    {
        id: 25,
        name: "Claude",
        url: "https://claude.ai/chats",
        description: "Anthropic开发的AI助手，擅长长文本理解、复杂推理和安全可靠的对话交互",
        category: "AI大语言模型",
        icon: "fas fa-robot"
    },
    {
        id: 166,
        name: "DeepSeek - 探索未至之境",
        url: "https://chat.deepseek.com/",
        description: "深度求索开发的开源大模型，在数学和编程方面表现优异，支持R1推理模型",
        category: "AI大语言模型",
        icon: "fas fa-link"
    },
    {
        id: 1,
        name: "Perplexity",
        url: "https://www.perplexity.ai/?login-source=floatingSignup",
        description: "AI搜索引擎，结合实时网络信息提供带引用来源的准确答案和深度分析",
        category: "AI大语言模型",
        icon: "fas fa-robot"
    },
    {
        id: 165,
        name: "Prompt Gallery | Google AI Studio",
        url: "https://aistudio.google.com/gallery",
        description: "Google AI Studio实验平台，提供Gemini模型测试和prompt优化功能",
        category: "AI大语言模型",
        icon: "fas fa-link"
    },
    {
        id: 169,
        name: "Welcome | xAI",
        url: "https://x.ai/",
        description: "马斯克xAI公司官网，Grok大语言模型的开发方，专注于AI安全研究",
        category: "AI大语言模型",
        icon: "fas fa-link"
    },
    {
        id: 167,
        name: "腾讯元宝 - 轻松工作 多点生活",
        url: "https://yuanbao.tencent.com/chat/naQivTmsDa/2d5028e6-ea6d-11ef-acd0-821423c66d64?from=chat",
        description: "腾讯AI助手，支持知识库RAG问答、文档分析和智能创作功能",
        category: "AI大语言模型",
        icon: "fas fa-link"
    },
    {
        id: 6,
        name: "文心一言",
        url: "https://yiyan.baidu.com/",
        description: "百度开发的生成式AI助手，支持文本创作、知识问答和多轮对话",
        category: "AI大语言模型",
        icon: "fas fa-robot"
    },
    {
        id: 111,
        name: "智谱清言",
        url: "https://chatglm.cn/main/detail",
        description: "智谱AI开发的GLM系列大语言模型，国内版本，支持多种任务处理",
        category: "AI大语言模型",
        icon: "fas fa-link"
    },
    {
        id: 112,
        name: "通义千问",
        url: "https://qianwen.aliyun.com/?chatId=eeedf3c95b114f01bb6d043ee56a3101",
        description: "阿里云开发的大语言模型，支持多模态理解和复杂任务推理",
        category: "AI大语言模型",
        icon: "fas fa-link"
    },
    {
        id: 114,
        name: "讯飞星火认知大模型",
        url: "https://xinghuo.xfyun.cn/desk",
        description: "科大讯飞开发的认知智能大模型，擅长逻辑推理和知识问答",
        category: "AI大语言模型",
        icon: "fas fa-link"
    },
    {
        id: 2,
        name: "文档分析 - Poe",
        url: "https://poe.com/chat/24hb1fz05io7z4ays36",
        description: "Quora开发的AI聚合平台，集成多种大语言模型，支持文档分析功能",
        category: "AI大语言模型",
        icon: "fas fa-robot"
    },
    {
        id: 3,
        name: "Le Chat Mistral",
        url: "https://chat.mistral.ai/chat",
        description: "法国Mistral AI开发的大语言模型，在欧洲具有领先地位的开源AI助手",
        category: "AI大语言模型",
        icon: "fas fa-robot"
    },

    // ==================== AI Agent工具 ====================
    {
        id: 51,
        name: "v0 by Vercel",
        url: "https://v0.dev/",
        description: "Vercel开发的AI网站生成工具，通过自然语言描述快速生成React组件和完整网站",
        category: "AI Agent工具",
        icon: "fas fa-cogs"
    },
    {
        id: 52,
        name: "bolt.new",
        url: "https://bolt.new/",
        description: "StackBlitz开发的AI全栈开发环境，可在浏览器中生成和运行完整的Web应用",
        category: "AI Agent工具",
        icon: "fas fa-cogs"
    },
    {
        id: 55,
        name: "Cursor - The AI Code Editor",
        url: "https://cursor.com/agents",
        description: "AI代码编辑器，集成GPT-4进行智能编程辅助，支持代码补全和重构（已购买会员）",
        category: "AI Agent工具",
        icon: "fas fa-cogs"
    },
    {
        id: 56,
        name: "Vercel: Build and deploy the best web experiences ",
        url: "https://vercel.com/home",
        description: "现代化前端部署平台，支持静态网站、Serverless函数和边缘计算部署",
        category: "AI Agent工具",
        icon: "fas fa-cogs"
    },
    {
        id: 88,
        name: "Copilot Hub - Your All-In-One AI Toolbox",
        url: "https://devv.ai/",
        description: "面向开发者的AI搜索引擎，专注于编程问题解答和技术文档检索",
        category: "AI Agent工具",
        icon: "fas fa-wrench"
    },
    {
        id: 54,
        name: "Genspark - Genspark 超级智能体",
        url: "https://www.genspark.ai/agents?type=super_agent",
        description: "多功能AI Agent平台，支持复杂任务分解和自动化执行流程",
        category: "AI Agent工具",
        icon: "fas fa-cogs"
    },
    {
        id: 53,
        name: "Gamma PPT生成",
        url: "https://gamma.app/",
        description: "AI演示文稿生成工具，通过文本描述自动创建专业PPT和网页展示",
        category: "AI Agent工具",
        icon: "fas fa-cogs"
    },
    {
        id: 162,
        name: "NotebookLM",
        url: "https://notebooklm.google.com/",
        description: "Google AI笔记本工具，支持文档上传和基于内容的智能问答分析",
        category: "AI Agent工具",
        icon: "fas fa-link"
    },
    {
        id: 163,
        name: "flowith 2.0 - Your AI Creation Workspace, with Kno",
        url: "https://flowith.io/#",
        description: "AI创作工作空间，支持知识图谱构建和创意内容生成的协作平台",
        category: "AI Agent工具",
        icon: "fas fa-link"
    },
    {
        id: 103,
        name: "Firebase Studio",
        url: "https://studio.firebase.google.com/",
        description: "Google Firebase应用开发平台，提供后端服务、数据库和部署功能",
        category: "AI Agent工具",
        icon: "fas fa-cloud"
    },
    {
        id: 113,
        name: "Pi, your personal AI",
        url: "https://pi.ai/talk",
        description: "Inflection AI开发的个人AI助手，专注于情感陪伴和日常对话",
        category: "AI Agent工具",
        icon: "fas fa-link"
    },
    {
        id: 116,
        name: "360AI搜索",
        url: "https://www.sou.com/search/e728c9806e6244a8929578e6adaac1e5",
        description: "360公司开发的AI搜索引擎，结合大语言模型提供智能搜索结果",
        category: "AI Agent工具",
        icon: "fas fa-link"
    },
    {
        id: 117,
        name: "百小应-懂搜索的AI助手",
        url: "https://ying.baichuan-ai.com/chat",
        description: "百川智能AI搜索助手，专注于信息检索和知识问答服务",
        category: "AI Agent工具",
        icon: "fas fa-link"
    },
    {
        id: 118,
        name: "ASCIIFlow 画图生成Ascii",
        url: "https://asciiflow.com/#/",
        description: "在线ASCII艺术绘图工具，用于创建文本形式的流程图和示意图",
        category: "AI Agent工具",
        icon: "fas fa-link"
    },
    {
        id: 119,
        name: "酷表ChatExcel",
        url: "https://chatexcel.com/",
        description: "AI表格处理助手，通过自然语言操作Excel表格和数据分析",
        category: "AI Agent工具",
        icon: "fas fa-link"
    },
    {
        id: 120,
        name: "Call Annie",
        url: "https://callsam.ai/call",
        description: "AI语音通话助手，支持实时语音对话和电话形式的AI交互",
        category: "AI Agent工具",
        icon: "fas fa-link"
    },
    {
        id: 122,
        name: "MindShow，让想法快速展示",
        url: "https://www.mindshow.fun/",
        description: "AI思维导图和演示文稿生成工具，快速将想法转化为可视化内容",
        category: "AI Agent工具",
        icon: "fas fa-link"
    },
    {
        id: 124,
        name: "Julius AI | Your AI Data Analyst",
        url: "https://julius.ai/",
        description: "AI数据分析师，支持数据可视化、统计分析和商业智能报告生成",
        category: "AI Agent工具",
        icon: "fas fa-link"
    },
    {
        id: 125,
        name: "Ai Drive",
        url: "https://myaidrive.com/",
        description: "AI文档管理和分析平台，支持多种文档格式的智能搜索和问答",
        category: "AI Agent工具",
        icon: "fas fa-link"
    },
    {
        id: 126,
        name: "Devv",
        url: "https://devv.ai/zh",
        description: "专为开发者设计的AI搜索引擎，提供编程相关的精准答案和代码示例",
        category: "AI Agent工具",
        icon: "fas fa-link"
    },
    {
        id: 128,
        name: "首页 - boardmix-AI白板",
        url: "https://boardmix.cn/app/home",
        description: "AI协作白板工具，支持团队brainstorming、流程图绘制和项目管理",
        category: "AI Agent工具",
        icon: "fas fa-link"
    },
    {
        id: 164,
        name: "HaiSnap",
        url: "https://www.haisnap.com/",
        description: "AI截图工具，提供智能图像处理和自动化截图功能",
        category: "AI Agent工具",
        icon: "fas fa-link"
    },
    {
        id: 168,
        name: "MinerU",
        url: "https://mineru.net/",
        description: "智能文档格式转换工具，支持PDF、Word、Markdown等多种格式间的转换",
        category: "AI Agent工具",
        icon: "fas fa-link"
    },

    // ==================== AI图像生成 ====================
    {
        id: 36,
        name: "Civitai | Stable Diffusion models, embeddings, LoR",
        url: "https://civitai.com/",
        description: "全球最大的AI艺术模型分享社区，提供各种风格的Stable Diffusion模型和LoRA",
        category: "AI图像生成",
        icon: "fas fa-image"
    },
    {
        id: 32,
        name: "Create stunning visuals in seconds with AI.",
        url: "https://clipdrop.co/",
        description: "Stability AI开发的图像编辑工具套件，支持背景移除、物体替换、风格转换等功能",
        category: "AI图像生成",
        icon: "fas fa-image"
    },
    {
        id: 34,
        name: "Stable Diffusion - Prompts examples",
        url: "https://stablediffusion.fr/prompts",
        description: "Stable Diffusion提示词示例库，提供各种风格和主题的prompt模板",
        category: "AI图像生成",
        icon: "fas fa-image"
    },
    {
        id: 38,
        name: "Guide to negative prompts in Stable Diffusion",
        url: "https://getimg.ai/guides/guide-to-negative-prompts-in-stable-diffusion",
        description: "Stable Diffusion负面提示词使用指南，帮助优化AI图像生成质量",
        category: "AI图像生成",
        icon: "fas fa-image"
    },
    {
        id: 33,
        name: "VectorArt.ai - Unlimited AI Generated Vector Image",
        url: "https://vectorart.ai/collection",
        description: "AI矢量图像生成平台，专门生成可缩放的矢量艺术作品",
        category: "AI图像生成",
        icon: "fas fa-image"
    },
    {
        id: 37,
        name: "Deliberate - v2 | Stable Diffusion Checkpoint | Ci",
        url: "https://civitai.com/models/4823/deliberate",
        description: "高质量的Stable Diffusion检查点模型，擅长生成逼真的人像和艺术作品",
        category: "AI图像生成",
        icon: "fas fa-image"
    },

    // ==================== AI视频生成 ====================
    {
        id: 40,
        name: "Sora",
        url: "https://sora.com/",
        description: "OpenAI开发的革命性AI视频生成模型，可从文本描述生成高质量长视频",
        category: "AI视频生成",
        icon: "fas fa-video"
    },
    {
        id: 39,
        name: "KLING AI: Next-Generation AI Creative Studio",
        url: "https://klingai.com/",
        description: "快手开发的AI视频生成平台，支持文本到视频、图片到视频的创作",
        category: "AI视频生成",
        icon: "fas fa-video"
    },
    {
        id: 41,
        name: "即梦AI - 一站式AI创作平台",
        url: "https://jimeng.jianying.com/ai-tool/video/generate",
        description: "字节跳动剪映团队开发的AI视频创作工具，支持快速生成短视频内容",
        category: "AI视频生成",
        icon: "fas fa-video"
    },

    // ==================== AI语音音频 ====================
    {
        id: 43,
        name: "AI Voice Generator & Text to Speech | ElevenLa",
        url: "https://elevenlabs.io/app/subscription",
        description: "业界领先的AI语音合成平台，支持多语言、多音色的高质量语音生成",
        category: "AI语音音频",
        icon: "fas fa-microphone"
    },
    {
        id: 44,
        name: "Suno",
        url: "https://suno.g-mi.cn/#/create",
        description: "AI音乐生成平台，可根据文本描述创作完整的歌曲，包括歌词和旋律",
        category: "AI语音音频",
        icon: "fas fa-microphone"
    },
    {
        id: 42,
        name: "在线免费文字转语音 - TTSMaker官网 | 马克配音",
        url: "https://ttsmaker.cn/",
        description: "免费在线文字转语音工具，支持多种语言和音色的语音合成",
        category: "AI语音音频",
        icon: "fas fa-microphone"
    },

    // ==================== AI API开发 ====================
    {
        id: 11,
        name: "Playground - OpenAI API",
        url: "https://platform.openai.com/playground",
        description: "OpenAI官方API测试平台，用于调试和测试GPT模型API调用",
        category: "AI API开发",
        icon: "fas fa-robot"
    },
    {
        id: 16,
        name: "Anthropic Console",
        url: "https://console.anthropic.com/dashboard",
        description: "Anthropic官方API控制台，管理Claude模型的API密钥和使用情况",
        category: "AI API开发",
        icon: "fas fa-robot"
    },
    {
        id: 14,
        name: "Moonshot AI - 开放平台",
        url: "https://platform.moonshot.cn/console/info",
        description: "月之暗面Kimi大模型API平台，提供长文本处理能力的API接口",
        category: "AI API开发",
        icon: "fas fa-robot"
    },
    {
        id: 81,
        name: "Z.ai - Inspiring AGI to Benefit Humanity",
        url: "https://z.ai/manage-apikey/apikey-list",
        description: "智谱AI国际版API管理平台，提供GLM系列模型的API接口服务",
        category: "AI API开发",
        icon: "fas fa-code"
    },
    {
        id: 96,
        name: "AI 训练Weights and Biases",
        url: "https://wandb.ai/",
        description: "机器学习实验跟踪和可视化平台，支持模型训练过程监控和结果分析",
        category: "AI API开发",
        icon: "fas fa-palette"
    },
    {
        id: 97,
        name: "产品简介 - SiliconFlow",
        url: "https://docs.siliconflow.cn/cn/userguide/introduction",
        description: "硅基流动AI推理平台，提供高性能的大语言模型API服务和文档",
        category: "AI API开发",
        icon: "fas fa-palette"
    },
    {
        id: 131,
        name: "百度智能云控制台",
        url: "https://console.bce.baidu.com/qianfan/ais/console/usageConsole/application",
        description: "百度千帆大模型平台控制台，管理文心一言等模型的API调用",
        category: "AI API开发",
        icon: "fas fa-link"
    },
    {
        id: 153,
        name: "火山引擎-云上增长新动力",
        url: "https://www.volcengine.com/",
        description: "字节跳动云服务平台，提供豆包大模型和其他AI服务的API接口",
        category: "AI API开发",
        icon: "fas fa-link"
    },
    {
        id: 154,
        name: "火山方舟管理控制台",
        url: "https://console.volcengine.com/ark/region:ark+cn-beijing/experience/chat",
        description: "火山引擎大模型服务控制台，管理豆包等模型的API调用和配置",
        category: "AI API开发",
        icon: "fas fa-link"
    },
    {
        id: 155,
        name: "阿里云百炼",
        url: "https://bailian.console.aliyun.com/#/home",
        description: "阿里云大模型服务平台，提供通义千问等模型的API接口和应用开发",
        category: "AI API开发",
        icon: "fas fa-link"
    },
    {
        id: 156,
        name: "账号认证 | 高德控制台",
        url: "https://console.amap.com/dev/user/permission?from=person-alipay",
        description: "高德地图开发者控制台，提供地图API和MCP接口服务",
        category: "AI API开发",
        icon: "fas fa-link"
    },

    // ==================== AI 学习文档 ====================
    {
        id: 45,
        name: "DLAI - Learning Platform Beta",
        url: "https://learn.deeplearning.ai/langchain/lesson/2/models,-prompts-and-parsers",
        description: "DeepLearning.ai官方学习平台，提供LangChain、机器学习等AI技术课程",
        category: "AI 学习文档",
        icon: "fas fa-cogs"
    },
    {
        id: 92,
        name: "Short Courses | Learn Generative AI from DeepLearn",
        url: "https://www.deeplearning.ai/short-courses/",
        description: "DeepLearning.ai短期课程，涵盖生成式AI、提示工程等前沿技术",
        category: "AI 学习文档",
        icon: "fas fa-book"
    },
    {
        id: 17,
        name: "ChatGPT学习手册 - 飞书云文档",
        url: "https://nujuo8y1qx.feishu.cn/docx/AdqEdlT52oBiawx6Vv2cc89DnLb",
        description: "系统性ChatGPT使用指南，涵盖基础操作到高级应用技巧",
        category: "AI 学习文档",
        icon: "fas fa-robot"
    },
    {
        id: 19,
        name: "🧠ChatGPT 中文调教指南![惊人的](https://github.com/sindresor",
        url: "https://chatguide.plexpt.com/?continueFlag=8fd402ce43a53b65120cc2a03a04bd12",
        description: "详细的ChatGPT提示词工程指南，教授如何编写高效的prompt",
        category: "AI 学习文档",
        icon: "fas fa-robot"
    },
    {
        id: 20,
        name: "🧭 ChatGPT 学习导航 | Learning Prompt",
        url: "https://learningprompt.wiki/docs/chatgpt-learning-path",
        description: "提示词学习导航网站，提供系统化的prompt工程学习路径",
        category: "AI 学习文档",
        icon: "fas fa-robot"
    },
    {
        id: 21,
        name: "ChatGPT Cheat Sheet & Quick Reference",
        url: "https://quickref.me/chatgpt",
        description: "ChatGPT快速参考手册，提供常用prompt模板和使用技巧",
        category: "AI 学习文档",
        icon: "fas fa-robot"
    },
    {
        id: 95,
        name: "通往 AGI 之路 - 飞书云文档",
        url: "https://waytoagi.feishu.cn/wiki/QPe5w5g7UisbEkkow8XcDmOpn8e?continueFlag=98a222da44d069cfcd7ebecbfa154d38&fromScene=spaceOverview",
        description: "人工智能通用学习资源库，涵盖AGI发展路径和前沿研究",
        category: "AI 学习文档",
        icon: "fas fa-palette"
    },
    {
        id: 18,
        name: "ChatGPT 资源库 & AI 工具箱",
        url: "https://flowus.cn/flowus101/share/10037b40-88c3-43b3-85f6-b6602dced060",
        description: "综合性AI工具和资源导航，收录各类实用的AI应用",
        category: "AI 学习文档",
        icon: "fas fa-robot"
    },
    {
        id: 78,
        name: "Queries over your Data — LlamaIndex documentation ",
        url: "https://docs.llamaindex.ai/en/stable/",
        description: "LlamaIndex框架官方文档，用于构建基于LLM的数据查询和检索应用",
        category: "AI 学习文档",
        icon: "fas fa-code"
    },
    {
        id: 9,
        name: "OpenAI API 中文教程_w3cschool",
        url: "https://m.w3cschool.cn/openai_api",
        description: "OpenAI API中文使用教程，详细介绍各种API接口的调用方法",
        category: "AI 学习文档",
        icon: "fas fa-robot"
    },
    {
        id: 10,
        name: "GitHub - openai/openai-cookbook: Examples and guid",
        url: "https://github.com/openai/openai-cookbook",
        description: "OpenAI官方代码示例库，提供API使用的最佳实践和案例",
        category: "AI 学习文档",
        icon: "fas fa-robot"
    },
    {
        id: 15,
        name: "主页 - Anthropic --- Home - Anthropic",
        url: "https://docs.anthropic.com/en/home",
        description: "Anthropic官方文档，Claude模型的使用指南和API参考",
        category: "AI 学习文档",
        icon: "fas fa-robot"
    },
    {
        id: 13,
        name: "Doubao/Skylark API 调用指南--火山方舟大模型服务平台-火山引擎",
        url: "https://www.volcengine.com/docs/82379/1099455",
        description: "字节跳动豆包大模型API调用指南和技术文档",
        category: "AI 学习文档",
        icon: "fas fa-robot"
    },
    {
        id: 22,
        name: "hackaprompt/hackaprompt-dataset · Datasets at Hugg",
        url: "https://huggingface.co/datasets/hackaprompt/hackaprompt-dataset",
        description: "HuggingFace上的prompt攻击和防护数据集，用于研究AI安全",
        category: "AI 学习文档",
        icon: "fas fa-robot"
    },
    {
        id: 79,
        name: "The Rust Programming Language --- Rust 编程语言",
        url: "https://doc.rust-lang.org/book/ch03-03-how-functions-work.html",
        description: "Rust编程语言官方文档，系统学习Rust语法和特性",
        category: "AI 学习文档",
        icon: "fas fa-code"
    },
    {
        id: 87,
        name: "Fudan ZMIC Lab",
        url: "https://zmiclab.github.io/",
        description: "复旦大学医学影像、图像视觉与人工智能实验室，发布最新研究成果",
        category: "AI 学习文档",
        icon: "fas fa-code"
    },
    {
        id: 100,
        name: "Bootstrap Themes Built & Curated by the Bootst",
        url: "https://themes.getbootstrap.com/",
        description: "Bootstrap官方主题库，提供各种专业的前端UI设计模板",
        category: "AI 学习文档",
        icon: "fas fa-palette"
    },
    {
        id: 151,
        name: "前言 · LLM 应用开发实践笔记",
        url: "https://aitutor.liduos.com/",
        description: "大语言模型应用开发实践教程，包含项目案例和代码示例",
        category: "AI 学习文档",
        icon: "fas fa-link"
    },
    {
        id: 158,
        name: "Beautiful Soup 中文文档",
        url: "https://beautifulsoup.cn/",
        description: "Python网页解析库Beautiful Soup的中文使用文档",
        category: "AI 学习文档",
        icon: "fas fa-link"
    },
    {
        id: 159,
        name: "AIGC交流群工具沉淀 by 向阳",
        url: "https://bytedance.feishu.cn/base/AIMAbnJxQaNgSGsBAtwcdAkLnvf?continueFlag=55d3a3f44c3f946ede6300ac75813447&table=tblmZTd8VuUOOONh&view=vew0Eo17BB",
        description: "AIGC技术交流社群沉淀的工具和资源合集",
        category: "AI 学习文档",
        icon: "fas fa-link"
    },
    {
        id: 160,
        name: "PromptPerfect - Elevate Your Prompts to Perfection",
        url: "https://promptperfect.jina.ai/",
        description: "AI提示词优化工具，帮助改进和完善prompt质量",
        category: "AI 学习文档",
        icon: "fas fa-link"
    },

    // ==================== 学术研究 ====================
    {
        id: 62,
        name: "arXiv.org e-Print archive",
        url: "https://arxiv.org/",
        description: "全球最大的预印本论文库，涵盖计算机科学、物理、数学等学科的最新研究",
        category: "学术研究",
        icon: "fas fa-graduation-cap"
    },
    {
        id: 58,
        name: "Papers With Code : the latest in machine learning",
        url: "https://paperswithcode.com/",
        description: "机器学习论文与代码对应平台，提供可复现研究和基准测试",
        category: "学术研究",
        icon: "fas fa-graduation-cap"
    },
    {
        id: 66,
        name: "Sci-Hub",
        url: "https://sci-hubtw.hkvisa.net/",
        description: "免费学术论文下载平台，突破付费壁垒获取科研文献",
        category: "学术研究",
        icon: "fas fa-graduation-cap"
    },
    {
        id: 106,
        name: "arXiv 的人工智能研究助手",
        url: "https://www.emergentmind.com/",
        description: "基于AI的arXiv论文搜索和总结工具，快速发现相关研究",
        category: "学术研究",
        icon: "fas fa-newspaper"
    },
    {
        id: 179,
        name: "Hogwild! Inference: Parallel LLM Generation via Co",
        url: "https://www.alphaxiv.org/explore",
        description: "AI驱动的学术论文搜索引擎，提供智能的论文摘要和关联推荐",
        category: "学术研究",
        icon: "fas fa-link"
    },
    {
        id: 48,
        name: "Paper Agent",
        url: "https://pasa-agent.ai/",
        description: "基于AI的智能论文检索代理，帮助研究者快速找到相关文献",
        category: "学术研究",
        icon: "fas fa-cogs"
    },
    {
        id: 67,
        name: "Connected Papers | Find and explore academic paper",
        url: "https://www.connectedpapers.com/",
        description: "可视化论文引用关系网络，帮助发现相关研究和学术脉络",
        category: "学术研究",
        icon: "fas fa-graduation-cap"
    },
    {
        id: 141,
        name: "ReadPaper - 轻松读论文 | 专业翻译 | 一键引文 | 图表同屏-论文阅读平台-专业学术",
        url: "https://readpaper.com/home/",
        description: "专业论文阅读和管理平台，支持翻译、批注和引用管理",
        category: "学术研究",
        icon: "fas fa-link"
    },
    {
        id: 59,
        name: "AMiner - AI赋能科技情报挖掘-学术搜索-论文检索-论文专利-文献追踪-学者画像",
        url: "https://www.aminer.cn/",
        description: "AI驱动的学术搜索平台，提供学者画像、论文分析和科研趋势",
        category: "学术研究",
        icon: "fas fa-graduation-cap"
    },
    {
        id: 132,
        name: "BriefGPT - AI 论文速递",
        url: "https://briefgpt.xyz/",
        description: "AI论文摘要和速递服务，快速了解最新研究进展",
        category: "学术研究",
        icon: "fas fa-link"
    },
    {
        id: 134,
        name: "Ask Your PDF",
        url: "https://askyourpdf.com/upload",
        description: "AI PDF文档分析工具，支持上传论文进行智能问答",
        category: "学术研究",
        icon: "fas fa-link"
    },
    {
        id: 135,
        name: "ChatPaper",
        url: "https://chatwithpaper.org/",
        description: "基于AI的论文阅读助手，提供论文总结和深度分析",
        category: "学术研究",
        icon: "fas fa-link"
    },
    {
        id: 136,
        name: "ChatPDF - Chat with any PDF!",
        url: "https://www.chatpdf.com/",
        description: "PDF文档智能问答工具，可与论文进行交互式对话",
        category: "学术研究",
        icon: "fas fa-link"
    },
    {
        id: 137,
        name: "Humata - GPT for your files",
        url: "https://www.humata.ai/",
        description: "文件智能分析工具，支持论文和技术文档的AI问答",
        category: "学术研究",
        icon: "fas fa-link"
    },
    {
        id: 138,
        name: "ChatDOC - Chat with your documents",
        url: "https://chatdoc.com/",
        description: "文档智能对话工具，支持多种格式的学术文档分析",
        category: "学术研究",
        icon: "fas fa-link"
    },
    {
        id: 133,
        name: "项目检索 |国家自然科学基金管理信息系统",
        url: "https://isisn.nsfc.gov.cn/egrantindex/funcindex/prjsearch-list?locale=zh_CN#",
        description: "国家自然科学基金项目查询系统，查看科研项目资助信息",
        category: "学术研究",
        icon: "fas fa-link"
    },
    {
        id: 60,
        name: "知因分析-开源科技情报智能服务平台",
        url: "https://vip.aminer.cn/analysis/",
        description: "科技情报分析平台，提供技术趋势和竞争情报分析",
        category: "学术研究",
        icon: "fas fa-graduation-cap"
    },
    {
        id: 61,
        name: "最新论文 - 寒武纪 --- Recent Papers - Cambrian",
        url: "https://www.cambrianml.org/today",
        description: "机器学习领域最新论文聚合平台，追踪前沿研究动态",
        category: "学术研究",
        icon: "fas fa-graduation-cap"
    },
    {
        id: 63,
        name: "文献检索-SciHub",
        url: "https://www.scihub.net.cn/sci-hub/",
        description: "SciHub中文镜像站点，提供免费学术论文下载服务",
        category: "学术研究",
        icon: "fas fa-graduation-cap"
    },
    {
        id: 64,
        name: "GPT 学术优化",
        url: "https://academic.chatwithpaper.org/",
        description: "基于GPT的学术写作和研究优化工具",
        category: "学术研究",
        icon: "fas fa-graduation-cap"
    },
    {
        id: 65,
        name: "AI Paraphrasing Tool for Academics | SciSpace  论文阅",
        url: "https://typeset.io/paraphraser",
        description: "学术写作AI改写工具，帮助改进论文表达和避免重复",
        category: "学术研究",
        icon: "fas fa-graduation-cap"
    },
    {
        id: 68,
        name: "Lumina: The AI Search Engine for Research",
        url: "https://lumina.sh/c5bbe32b-4fb7-476a-81aa-fe269f67f283",
        description: "AI驱动的科研搜索引擎，专为学术研究优化的搜索体验",
        category: "学术研究",
        icon: "fas fa-graduation-cap"
    },
    {
        id: 86,
        name: "一分钟读论文 | Micropaper",
        url: "https://unbug.github.io/",
        description: "快速论文摘要工具，帮助研究者高效浏览学术文献",
        category: "学术研究",
        icon: "fas fa-code"
    },

    // ==================== 在线工具 ====================
    {
        id: 90,
        name: "ezgif.com free online animated GIF editor",
        url: "https://ezgif.com/",
        description: "免费在线GIF制作和编辑工具，支持视频转GIF、GIF压缩等功能",
        category: "在线工具",
        icon: "fas fa-wrench"
    },
    {
        id: 91,
        name: "Free 4K Stock Videos & Full HD Video Clips to ",
        url: "https://www.pexels.com/videos/",
        description: "高质量免费4K视频素材库，提供商用免费的视频资源",
        category: "在线工具",
        icon: "fas fa-wrench"
    },

    // ==================== 南京安科 ====================
    {
        id: 181,
        name: "Matis",
        url: "https://10.10.70.174/mantis/view.php?id=4215",
        description: "南京安科内部bug管理和项目跟踪系统，用于软件开发过程管理",
        category: "南京安科",
        icon: "fas fa-link"
    },
    {
        id: 184,
        name: "安科售后",
        url: "http://www.ankeimaging.com/",
        description: "南京安科售后服务管理平台，处理客户技术支持和维护请求",
        category: "南京安科",
        icon: "fas fa-link"
    },
    {
        id: 185,
        name: "scu - Dicom影像管理",
        url: "http://10.10.71.180:30771/#/scpscuManger/scu",
        description: "安科内部DICOM医学影像管理系统，用于医学影像的存储和传输",
        category: "南京安科",
        icon: "fas fa-link"
    },
    {
        id: 186,
        name: "CT文件 - CT文件管理系统",
        url: "http://10.10.71.180:30083/#/fileManager",
        description: "南京安科CT扫描文件管理系统，支持影像文件上传和批量下载",
        category: "南京安科",
        icon: "fas fa-link"
    },
    {
        id: 187,
        name: "安科生产管理系统",
        url: "http://10.10.71.1/test/#/dashboard",
        description: "生产过程信息收集系统，用于产品制造过程中的质量控制和数据记录",
        category: "南京安科",
        icon: "fas fa-link"
    },
    {
        id: 188,
        name: "首页 - 安科中台",
        url: "http://10.10.71.1/sc/#/dashboard",
        description: "生产过程管理系统中台，为生产主管提供统一的管理界面",
        category: "南京安科",
        icon: "fas fa-link"
    },
    {
        id: 189,
        name: "设备监控",
        url: "http://device.ankeimaging.com/index.html#/login",
        description: "外部CT设备远程监控系统，实时收集和监控设备运行状态",
        category: "南京安科",
        icon: "fas fa-link"
    },
    {
        id: 190,
        name: "错误码查询系统",
        url: "http://10.10.71.181:30581/",
        description: "多产品错误码查询系统，为售后和研发团队提供故障诊断支持",
        category: "南京安科",
        icon: "fas fa-link"
    },
    {
        id: 205,
        name: "安科在线文档",
        url: "http://10.10.71.180:30300/#/",
        description: "安科内部服务导航和文档中心，提供各系统入口和帮助文档",
        category: "南京安科",
        icon: "fas fa-link"
    },

    // ==================== 其他 ====================
    {
        id: 130,
        name: "AI工具集官网 | 1000+ AI工具集合，国内外AI工具集导航大全",
        url: "https://ai-bot.cn/",
        description: "综合性AI工具导航网站，收录1000+国内外优质AI工具和服务",
        category: "其他",
        icon: "fas fa-link"
    },
    {
        id: 143,
        name: "Adrenaline",
        url: "https://useadrenaline.com/playground",
        description: "代码库可视化分析工具，帮助理解复杂项目的代码结构和依赖关系",
        category: "其他",
        icon: "fas fa-link"
    },
    {
        id: 147,
        name: "Panda Nodes VPN代理",
        url: "https://pandanodes.com/#/dashboard",
        description: "VPN代理服务，支持Clash客户端配置，用于网络加速和访问",
        category: "其他",
        icon: "fas fa-link"
    },
    {
        id: 149,
        name: "Tushare数据 股票数据",
        url: "https://tushare.pro/",
        description: "专业股票数据API接口，提供A股、港股等金融数据服务（已购买）",
        category: "其他",
        icon: "fas fa-link"
    },
    {
        id: 150,
        name: "🏡 Home | Chroma  向量数据库",
        url: "https://docs.trychroma.com/",
        description: "Chroma向量数据库文档，用于AI应用的向量存储和相似度搜索",
        category: "其他",
        icon: "fas fa-link"
    },
    {
        id: 157,
        name: "GreatAiPrompts",
        url: "https://www.greataiprompts.com/",
        description: "优质AI提示词模板库，提供各种场景下的高效prompt示例",
        category: "其他",
        icon: "fas fa-link"
    },
    {
        id: 172,
        name: "Markdown 语法速查表 | Markdown 官方教程",
        url: "https://markdown.com.cn/cheat-sheet.html#%E5%9F%BA%E6%9C%AC%E8%AF%AD%E6%B3%95",
        description: "Markdown语法快速参考手册，包含基础到高级的所有语法说明",
        category: "其他",
        icon: "fas fa-link"
    },
    {
        id: 175,
        name: "微信 Markdown 编辑器 | Doocs 开源社区",
        url: "https://md.openwrite.cn/",
        description: "将Markdown格式转换为微信公众号文章排版的在线工具",
        category: "其他",
        icon: "fas fa-link"
    },

    // ==================== 废弃项目 ====================
    {
        id: 7,
        name: "ShareGPT: Share your wildest ChatGPT conversations",
        url: "https://sharegpt.com/",
        description: "ChatGPT对话分享平台，展示创意对话和使用案例（功能有限）",
        category: "AI大语言模型",
        icon: "fas fa-robot"
    },
    {
        id: 8,
        name: "Finchat - ChatGPT for Finance | FinChat.io",
        url: "https://finchat.io/",
        description: "专门针对金融领域的AI对话工具，提供财务分析和投资建议",
        category: "AI大语言模型",
        icon: "fas fa-robot"
    }
];



// 网站分类配置 - 按重要性和使用频率排序
const categories = [
    { name: "最常用", icon: "fas fa-star", color: "#f39c12" },
    { name: "AI大语言模型", icon: "fas fa-robot", color: "#e74c3c" },
    { name: "AI Agent工具", icon: "fas fa-cogs", color: "#2c3e50" },
    { name: "AI图像生成", icon: "fas fa-image", color: "#9b59b6" },
    { name: "AI视频生成", icon: "fas fa-video", color: "#e67e22" },
    { name: "AI语音音频", icon: "fas fa-microphone", color: "#8e44ad" },
    { name: "AI API开发", icon: "fas fa-code", color: "#27ae60" }, 
    { name: "AI 学习文档", icon: "fas fa-book", color: "#3498db" },
    { name: "学术研究", icon: "fas fa-graduation-cap", color: "#2ecc71" },
    { name: "在线工具", icon: "fas fa-wrench", color: "#1abc9c" },
    { name: "南京安科", icon: "fas fa-building", color: "#2c5e50" },
    { name: "其他", icon: "fas fa-link", color: "#95a5a6" }
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