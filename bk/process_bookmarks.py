import re
import json
from urllib.parse import urlparse
from collections import defaultdict

def parse_html_bookmarks(html_content):
    """解析HTML书签文件，提取所有书签信息"""
    bookmarks = []
    
    # 正则表达式匹配书签链接
    bookmark_pattern = r'<DT><A HREF="([^"]+)"[^>]*>([^<]+)</A>'
    
    matches = re.findall(bookmark_pattern, html_content)
    
    for url, title in matches:
        # 清理标题
        title = title.strip()
        # 跳过空的或无效的书签
        if url and title and not url.startswith('javascript:'):
            bookmarks.append({
                'url': url,
                'title': title,
                'domain': urlparse(url).netloc.lower()
            })
    
    return bookmarks

def categorize_bookmark(url, title):
    """根据URL和标题自动分类书签"""
    url_lower = url.lower()
    title_lower = title.lower()
    domain = urlparse(url).netloc.lower()
    
    # AI工具和大语言模型
    if any(keyword in url_lower or keyword in title_lower for keyword in [
        'chatgpt', 'openai', 'claude', 'anthropic', 'gemini', 'bard',
        'kimi', 'moonshot', 'qwen', 'tongyi', 'doubao', 'yiyan', 'wenxin',
        'perplexity', 'poe.com', 'character.ai', 'replika', 'grok',
        'huggingface', 'mistral', 'cohere', 'palm'
    ]):
        return "AI大语言模型"
    
    # AI绘画和图像生成
    if any(keyword in url_lower or keyword in title_lower for keyword in [
        'stable-diffusion', 'stablediffusion', 'midjourney', 'dall-e', 'dalle',
        'civitai', 'clipdrop', 'runway', 'leonardo', 'artbreeder',
        'getimg', 'upscayl', 'vectorart', 'diffusion'
    ]):
        return "AI图像生成"
    
    # AI视频生成
    if any(keyword in url_lower or keyword in title_lower for keyword in [
        'sora', 'runway', 'pika', 'gen-', 'luma', 'jimeng', 'kling'
    ]):
        return "AI视频生成"
    
    # AI语音和音频
    if any(keyword in url_lower or keyword in title_lower for keyword in [
        'elevenlabs', 'tts', 'voice', 'speech', 'audio', 'suno', 'music',
        'ttsmaker'
    ]):
        return "AI语音音频"
    
    # AI Agent和工具
    if any(keyword in url_lower or keyword in title_lower for keyword in [
        'agent', 'autogpt', 'langchain', 'flowise', 'n8n', 'zapier',
        'gamma', 'notion', 'obsidian', 'cursor', 'github.com/microsoft/vscode',
        'vercel', 'v0.dev', 'bolt.new', 'replit', 'codesandbox'
    ]):
        return "AI Agent工具"
    
    # 学术研究
    if any(keyword in url_lower or keyword in title_lower for keyword in [
        'arxiv', 'scholar', 'researchgate', 'ieee', 'acm', 'pubmed',
        'sciencedirect', 'springer', 'elsevier', 'nature', 'science',
        'papers', 'research', 'academic', 'journal', 'publication',
        'aminer', 'connectedpapers', 'sci-hub', 'scihub'
    ]):
        return "学术研究"
    
    # 编程开发
    if any(keyword in url_lower or keyword in title_lower for keyword in [
        'github', 'stackoverflow', 'codepen', 'jsfiddle', 'replit',
        'programming', 'coding', 'developer', 'api', 'documentation',
        'tutorial', 'python', 'javascript', 'rust', 'golang'
    ]):
        return "编程开发"
    
    # 设计工具
    if any(keyword in url_lower or keyword in title_lower for keyword in [
        'figma', 'sketch', 'adobe', 'canva', 'photoshop', 'illustrator',
        'design', 'ui', 'ux', 'prototype', 'wireframe'
    ]):
        return "设计工具"
    
    # 生产力工具
    if any(keyword in url_lower or keyword in title_lower for keyword in [
        'notion', 'obsidian', 'evernote', 'onenote', 'trello', 'asana',
        'slack', 'discord', 'zoom', 'teams', 'productivity', 'workflow'
    ]):
        return "生产力工具"
    
    # 云服务和基础设施
    if any(keyword in url_lower or keyword in title_lower for keyword in [
        'aws', 'azure', 'gcp', 'firebase', 'heroku', 'netlify', 'vercel',
        'cloudflare', 'digitalocean', 'linode'
    ]):
        return "云服务"
    
    # 新闻资讯
    if any(keyword in url_lower or keyword in title_lower for keyword in [
        'news', 'techcrunch', 'hackernews', 'reddit', 'medium', 'blog',
        'article', 'post', 'story'
    ]):
        return "新闻资讯"
    
    # 社交媒体
    if any(keyword in url_lower or keyword in title_lower for keyword in [
        'twitter', 'facebook', 'linkedin', 'instagram', 'youtube',
        'tiktok', 'weibo', 'zhihu', 'social'
    ]):
        return "社交媒体"
    
    # 在线工具
    if any(keyword in url_lower or keyword in title_lower for keyword in [
        'tool', 'converter', 'generator', 'calculator', 'editor',
        'online', 'free', 'utility'
    ]):
        return "在线工具"
    
    # 学习教育
    if any(keyword in url_lower or keyword in title_lower for keyword in [
        'course', 'tutorial', 'learn', 'education', 'training',
        'mooc', 'udemy', 'coursera', 'edx', 'khan'
    ]):
        return "学习教育"
    
    # 默认分类
    return "其他"

def remove_duplicates(bookmarks):
    """去除重复的书签（基于URL和标题相似性）"""
    seen_urls = set()
    seen_titles = set()
    unique_bookmarks = []
    
    for bookmark in bookmarks:
        url = bookmark['url'].lower()
        title = bookmark['title'].lower()
        
        # 标准化URL（移除查询参数和锚点）
        url_base = url.split('?')[0].split('#')[0]
        
        # 如果URL或标题已存在，跳过
        if url_base in seen_urls:
            continue
            
        # 检查标题相似性（简单检查）
        title_words = set(title.split())
        is_duplicate = False
        for seen_title in seen_titles:
            seen_words = set(seen_title.split())
            if len(title_words & seen_words) / max(len(title_words), len(seen_words)) > 0.8:
                is_duplicate = True
                break
        
        if not is_duplicate:
            seen_urls.add(url_base)
            seen_titles.add(title)
            unique_bookmarks.append(bookmark)
    
    return unique_bookmarks

def generate_description(category, title, url):
    """为每个书签生成功能描述"""
    domain = urlparse(url).netloc.lower()
    
    descriptions = {
        "AI大语言模型": {
            "chatgpt": "OpenAI开发的强大对话AI，支持文本生成、代码编写、问答等多种任务",
            "claude": "Anthropic开发的AI助手，擅长长文本理解和安全对话",
            "gemini": "Google的多模态AI模型，支持文本、图像和代码生成",
            "kimi": "月之暗面开发的长文本AI助手，支持200万字上下文",
            "qwen": "阿里云开发的通义千问大语言模型",
            "doubao": "字节跳动的AI助手，支持多轮对话和创作",
            "perplexity": "AI搜索引擎，结合实时网络信息提供准确答案"
        },
        "AI图像生成": {
            "stable-diffusion": "开源的文本到图像生成模型，支持本地部署",
            "midjourney": "高质量AI艺术创作平台，擅长创意和艺术风格图像",
            "civitai": "AI模型分享社区，提供各种风格的Stable Diffusion模型",
            "clipdrop": "AI图像编辑工具套件，支持背景移除、风格转换等"
        },
        "学术研究": {
            "arxiv": "预印本论文库，计算机科学和物理学等领域的最新研究",
            "scholar": "Google学术搜索，查找学术文献和引用信息",
            "sci-hub": "免费学术论文下载平台",
            "connectedpapers": "可视化论文引用关系的学术工具"
        }
    }
    
    # 检查是否有特定的描述
    if category in descriptions:
        for keyword, desc in descriptions[category].items():
            if keyword in domain or keyword in title.lower():
                return desc
    
    # 生成通用描述
    if "AI大语言模型" in category:
        return f"AI对话助手，提供智能问答和文本生成服务"
    elif "AI图像生成" in category:
        return f"AI图像生成工具，支持文本到图像的创作"
    elif "AI视频生成" in category:
        return f"AI视频生成平台，支持文本到视频的创作"
    elif "AI语音音频" in category:
        return f"AI语音合成和音频处理工具"
    elif "学术研究" in category:
        return f"学术研究平台，提供论文搜索和研究工具"
    elif "编程开发" in category:
        return f"编程开发工具和资源平台"
    else:
        return f"实用工具和服务平台"

def main():
    # 读取HTML文件
    with open('favorites_2025_8_3.html', 'r', encoding='utf-8') as f:
        html_content = f.read()
    
    # 解析书签
    bookmarks = parse_html_bookmarks(html_content)
    print(f"解析到 {len(bookmarks)} 个书签")
    
    # 去重
    unique_bookmarks = remove_duplicates(bookmarks)
    print(f"去重后剩余 {len(unique_bookmarks)} 个书签")
    
    # 分类和生成描述
    categorized_bookmarks = defaultdict(list)
    for bookmark in unique_bookmarks:
        category = categorize_bookmark(bookmark['url'], bookmark['title'])
        description = generate_description(category, bookmark['title'], bookmark['url'])
        
        bookmark_data = {
            'name': bookmark['title'],
            'url': bookmark['url'],
            'description': description,
            'category': category,
            'icon': f"fas fa-link"  # 默认图标
        }
        
        categorized_bookmarks[category].append(bookmark_data)
    
    # 生成ykdata.js文件
    js_content = generate_ykdata_js(categorized_bookmarks)
    
    with open('ykdata.js', 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    print("已生成 ykdata.js 文件")
    
    # 打印统计信息
    print("\n分类统计:")
    for category, items in categorized_bookmarks.items():
        print(f"  {category}: {len(items)} 个")

def generate_ykdata_js(categorized_bookmarks):
    """生成ykdata.js文件内容"""
    
    # 按类别重要性排序
    category_order = [
        "AI大语言模型", "AI图像生成", "AI视频生成", "AI语音音频", "AI Agent工具",
        "学术研究", "编程开发", "生产力工具", "在线工具", "学习教育",
        "设计工具", "云服务", "新闻资讯", "社交媒体", "其他"
    ]
    
    all_websites = []
    website_id = 1
    
    for category in category_order:
        if category in categorized_bookmarks:
            for bookmark in categorized_bookmarks[category]:
                website_data = {
                    'id': website_id,
                    'name': bookmark['name'][:50],  # 限制名称长度
                    'url': bookmark['url'],
                    'description': bookmark['description'],
                    'category': bookmark['category'],
                    'icon': get_icon_for_category(bookmark['category'])
                }
                all_websites.append(website_data)
                website_id += 1
    
    # 生成JavaScript代码
    js_code = """// 默认网站数据 - 由收藏夹自动生成
const defaultWebsites = [
"""
    
    for website in all_websites:
        js_code += f"""    {{
        id: {website['id']},
        name: "{escape_js_string(website['name'])}",
        url: "{website['url']}",
        description: "{escape_js_string(website['description'])}",
        category: "{website['category']}",
        icon: "{website['icon']}"
    }},
"""
    
    js_code += "];\n"
    
    return js_code

def escape_js_string(s):
    """转义JavaScript字符串中的特殊字符"""
    return s.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n').replace('\r', '\\r')

def get_icon_for_category(category):
    """为不同类别返回合适的图标"""
    icon_map = {
        "AI大语言模型": "fas fa-robot",
        "AI图像生成": "fas fa-image",
        "AI视频生成": "fas fa-video",
        "AI语音音频": "fas fa-microphone",
        "AI Agent工具": "fas fa-cogs",
        "学术研究": "fas fa-graduation-cap",
        "编程开发": "fas fa-code",
        "生产力工具": "fas fa-tools",
        "在线工具": "fas fa-wrench",
        "学习教育": "fas fa-book",
        "设计工具": "fas fa-palette",
        "云服务": "fas fa-cloud",
        "新闻资讯": "fas fa-newspaper",
        "社交媒体": "fas fa-share-alt",
        "其他": "fas fa-link"
    }
    return icon_map.get(category, "fas fa-link")

if __name__ == "__main__":
    main()