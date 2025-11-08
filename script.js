// 全局变量
let websites = [];
let currentCategory = "全部";
let searchTerm = "";

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    loadWebsites();
    initializeCategories();
    initializeEventListeners();
    renderWebsites();
});

// 加载网站数据
function loadWebsites() {
    const savedWebsites = localStorage.getItem('websites');
    const savedVersion = localStorage.getItem('dataVersion');
    
    // 检查版本号，如果数据版本有更新，则自动重置数据
    if (savedWebsites && savedVersion === DATA_VERSION) {
        websites = JSON.parse(savedWebsites);
        console.log('使用已保存的网站数据，版本:', savedVersion);
    } else {
        console.log('检测到数据版本更新或首次加载，使用默认数据');
        websites = [...defaultWebsites];
        saveWebsites();
        // 保存当前版本号
        localStorage.setItem('dataVersion', DATA_VERSION);
        
        // 如果是版本更新，显示提示
        if (savedWebsites && savedVersion !== DATA_VERSION) {
            setTimeout(() => {
                alert(`数据已更新到版本 ${DATA_VERSION}，已自动重置为最新数据！`);
            }, 1000);
        }
    }
}

// 保存网站数据到本地存储
function saveWebsites() {
    localStorage.setItem('websites', JSON.stringify(websites));
    localStorage.setItem('dataVersion', DATA_VERSION);
}

// 重置为默认数据
function resetToDefaultData() {
    if (confirm('确定要重置为默认数据吗？这将清空所有当前数据，恢复到ykdata.js中的内容。')) {
        try {
            console.log('开始重置数据...');
            
            // 强制清空所有可能的localStorage数据
            localStorage.clear();
            
            // 重新设置数据
            websites = [...defaultWebsites];
            console.log('重置后的网站数量:', websites.length);
            
            // 保存到localStorage
            saveWebsites();
            
            // 重新初始化页面
            initializeCategories();
            renderWebsites();
            
            // 重置当前分类为"全部"
            currentCategory = "全部";
            document.querySelectorAll('.category-item').forEach(item => {
                item.classList.remove('active');
            });
            const firstCategory = document.querySelector('.category-item');
            if (firstCategory) {
                firstCategory.classList.add('active');
            }
            
            // 显示成功消息 - 使用多种方式确保用户看到
            console.log('重置成功！');
            alert('数据已重置为默认状态！页面将刷新以确保更新生效。');
            
            // 强制刷新页面以确保缓存清除
            setTimeout(() => {
                window.location.reload(true);
            }, 1000);
            
        } catch (error) {
            console.error('重置数据时出错:', error);
            alert('重置失败：' + error.message);
        }
    }
}

// 调试数据状态
function debugDataStatus() {
    try {
        const localStorageData = localStorage.getItem('websites');
        const savedVersion = localStorage.getItem('dataVersion');
        const currentWebsitesCount = websites ? websites.length : 0;
        const defaultWebsitesCount = defaultWebsites ? defaultWebsites.length : 0;
        
        let debugInfo = `=== 调试信息 ===\n`;
        debugInfo += `数据版本 (ykdata.js): ${typeof DATA_VERSION !== 'undefined' ? DATA_VERSION : '未定义'}\n`;
        debugInfo += `保存的版本 (localStorage): ${savedVersion || '无'}\n`;
        debugInfo += `版本是否匹配: ${savedVersion === DATA_VERSION ? '是' : '否'}\n`;
        debugInfo += `当前网站数量: ${currentWebsitesCount}\n`;
        debugInfo += `默认网站数量: ${defaultWebsitesCount}\n`;
        debugInfo += `localStorage中是否有数据: ${localStorageData ? '是' : '否'}\n`;
        debugInfo += `当前域名: ${window.location.hostname}\n`;
        debugInfo += `当前时间: ${new Date().toLocaleString()}\n`;
        
        if (localStorageData) {
            try {
                const parsedData = JSON.parse(localStorageData);
                debugInfo += `localStorage中网站数量: ${parsedData.length}\n`;
            } catch (e) {
                debugInfo += `localStorage数据解析错误: ${e.message}\n`;
            }
        }
        
        console.log(debugInfo);
        alert(debugInfo);
    } catch (error) {
        console.error('调试失败:', error);
        alert('调试失败：' + error.message);
    }
}

// 强制刷新页面
function forceRefresh() {
    if (confirm('确定要强制刷新页面吗？这将清除所有浏览器缓存。')) {
        // 清除所有可能的缓存
        if ('caches' in window) {
            caches.keys().then(names => {
                names.forEach(name => {
                    caches.delete(name);
                });
            });
        }
        
        // 强制刷新
        window.location.reload(true);
    }
}

// 初始化分类列表
function initializeCategories() {
    const categoryList = document.getElementById('categoryList');
    
    // 清空现有分类列表
    categoryList.innerHTML = '';
    
    // 添加"全部"分类
    const allCategory = createCategoryButton("全部", "fas fa-th-large", getWebsiteCount("全部"));
    allCategory.classList.add('active');
    categoryList.appendChild(allCategory);
    
    // 添加其他分类
    categories.forEach(category => {
        const count = getWebsiteCount(category.name);
        if (count > 0) {
            const categoryButton = createCategoryButton(category.name, category.icon, count);
            categoryList.appendChild(categoryButton);
        }
    });
}

// 创建分类按钮
function createCategoryButton(name, icon, count) {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.innerHTML = `
        <span><i class="${icon}"></i> ${name}</span>
        <span class="category-count">${count}</span>
    `;
    button.addEventListener('click', () => selectCategory(name, button));
    li.appendChild(button);
    return li;
}

// 获取分类下的网站数量
function getWebsiteCount(categoryName) {
    if (categoryName === "全部") {
        return websites.length;
    }
    return websites.filter(site => site.category === categoryName).length;
}

// 选择分类
function selectCategory(categoryName, buttonElement) {
    currentCategory = categoryName;
    
    // 更新按钮状态
    document.querySelectorAll('.category-nav button').forEach(btn => {
        btn.classList.remove('active');
    });
    buttonElement.classList.add('active');
    
    // 重新渲染网站
    renderWebsites();
}

// 初始化事件监听器
function initializeEventListeners() {
    // 搜索功能
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value.toLowerCase();
        renderWebsites();
    });
    
    // 添加网站模态框
    const addSiteBtn = document.getElementById('addSiteBtn');
    const modal = document.getElementById('addSiteModal');
    const closeBtn = modal.querySelector('.close');
    const form = document.getElementById('addSiteForm');
    
    addSiteBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });
    
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        form.reset();
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            form.reset();
        }
    });
    
    // 表单提交
    form.addEventListener('submit', handleAddSite);
    
    // 导入收藏夹
    const bookmarkFile = document.getElementById('bookmarkFile');
    bookmarkFile.addEventListener('change', handleFileImport);

    // 网络搜索
    const webSearchForm = document.getElementById('webSearchForm');
    const webSearchInput = document.getElementById('webSearchInput');
    if (webSearchForm && webSearchInput) {
        webSearchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const query = webSearchInput.value.trim();
            if (!query) {
                webSearchInput.focus();
                return;
            }
            const searchUrl = `https://www.baidu.com/s?wd=${encodeURIComponent(query)}`;
            window.open(searchUrl, '_blank');
        });
    }
}

// 处理添加网站
function handleAddSite(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const newSite = {
        id: Date.now(),
        name: document.getElementById('siteName').value,
        url: document.getElementById('siteUrl').value,
        description: document.getElementById('siteDesc').value,
        category: document.getElementById('siteCategory').value,
        icon: "fas fa-globe"
    };
    
    websites.push(newSite);
    saveWebsites();
    
    // 关闭模态框并重置表单
    document.getElementById('addSiteModal').style.display = 'none';
    document.getElementById('addSiteForm').reset();
    
    // 刷新分类和网站显示
    refreshCategories();
    renderWebsites();
    
    // 显示成功消息
    showMessage('网站添加成功！', 'success');
}

// 处理文件导入
function handleFileImport(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(event) {
        try {
            const content = event.target.result;
            let importedSites = [];
            
            if (file.name.endsWith('.json')) {
                // JSON格式导入
                importedSites = JSON.parse(content);
            } else if (file.name.endsWith('.html')) {
                // HTML书签文件导入
                importedSites = parseHtmlBookmarks(content);
            }
            
            if (importedSites.length > 0) {
                // 添加导入的网站
                importedSites.forEach(site => {
                    const newSite = {
                        id: Date.now() + Math.random(),
                        name: site.name || site.title || '未命名网站',
                        url: site.url || site.href || '',
                        description: site.description || '从收藏夹导入',
                        category: site.category || '其他',
                        icon: site.icon || 'fas fa-globe'
                    };
                    websites.push(newSite);
                });
                
                saveWebsites();
                refreshCategories();
                renderWebsites();
                showMessage(`成功导入 ${importedSites.length} 个网站！`, 'success');
            } else {
                showMessage('未找到有效的网站数据', 'error');
            }
        } catch (error) {
            console.error('导入失败:', error);
            showMessage('文件格式不正确，导入失败', 'error');
        }
    };
    
    reader.readAsText(file, 'UTF-8');
}

// 解析HTML书签文件
function parseHtmlBookmarks(htmlContent) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    const links = doc.querySelectorAll('a[href]');
    
    const bookmarks = [];
    links.forEach(link => {
        const url = link.getAttribute('href');
        const name = link.textContent.trim();
        
        if (url && name && url.startsWith('http')) {
            bookmarks.push({
                name: name,
                url: url,
                description: '从书签导入',
                category: '其他'
            });
        }
    });
    
    return bookmarks;
}

// 刷新分类列表
function refreshCategories() {
    const categoryList = document.getElementById('categoryList');
    categoryList.innerHTML = '';
    initializeCategories();
}

// 渲染网站列表
function renderWebsites() {
    const container = document.getElementById('websiteContainer');
    
    // 过滤网站
    let filteredWebsites = websites;
    
    // 按分类过滤
    if (currentCategory !== "全部") {
        filteredWebsites = filteredWebsites.filter(site => site.category === currentCategory);
    }
    
    // 按搜索词过滤
    if (searchTerm) {
        filteredWebsites = filteredWebsites.filter(site =>
            site.name.toLowerCase().includes(searchTerm) ||
            site.description.toLowerCase().includes(searchTerm) ||
            site.url.toLowerCase().includes(searchTerm)
        );
    }
    
    // 按分类分组
    const groupedSites = groupByCategory(filteredWebsites);
    
    // 生成HTML
    container.innerHTML = '';
    
    if (filteredWebsites.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <h3>没有找到相关网站</h3>
                <p>尝试调整搜索词或选择其他分类</p>
            </div>
        `;
        return;
    }
    
    // 渲染各分类的网站
    Object.keys(groupedSites).forEach(category => {
        if (groupedSites[category].length > 0) {
            const section = createCategorySection(category, groupedSites[category]);
            container.appendChild(section);
        }
    });
}

// 按分类分组网站
function groupByCategory(sites) {
    const grouped = {};
    
    if (currentCategory === "全部") {
        // 显示所有分类
        categories.forEach(cat => {
            grouped[cat.name] = sites.filter(site => site.category === cat.name);
        });
        // 添加其他未分类的网站
        const otherSites = sites.filter(site => 
            !categories.some(cat => cat.name === site.category)
        );
        if (otherSites.length > 0) {
            grouped["其他"] = otherSites;
        }
    } else {
        // 只显示当前分类
        grouped[currentCategory] = sites;
    }
    
    return grouped;
}

// 创建分类区域
function createCategorySection(categoryName, sites) {
    const section = document.createElement('div');
    section.className = 'category-section';
    
    const categoryIcon = getCategoryIcon(categoryName);
    
    section.innerHTML = `
        <h2 class="category-title">
            <i class="${categoryIcon}"></i>
            ${categoryName} (${sites.length})
        </h2>
        <div class="website-grid">
            ${sites.map(site => createWebsiteCard(site)).join('')}
        </div>
    `;
    
    return section;
}

// 创建网站卡片
function createWebsiteCard(site) {
    const domain = extractDomain(site.url);
    const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
    
    return `
        <div class="website-card" onclick="openWebsite('${site.url}')">
            <div class="card-header">
                <div class="card-icon">
                    <i class="${site.icon}"></i>
                </div>
                <div class="card-title">${escapeHtml(site.name)}</div>
            </div>
            <div class="card-url">${escapeHtml(domain)}</div>
            <div class="card-description">${escapeHtml(site.description)}</div>
            <div class="card-footer">
                <span class="card-category">${escapeHtml(site.category)}</span>
                <div class="card-actions">
                    <button class="card-action" onclick="editWebsite(${site.id}); event.stopPropagation();" title="编辑">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="card-action" onclick="deleteWebsite(${site.id}); event.stopPropagation();" title="删除">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// 提取域名
function extractDomain(url) {
    try {
        const urlObj = new URL(url);
        return urlObj.hostname;
    } catch {
        return url;
    }
}

// HTML转义
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// 打开网站
function openWebsite(url) {
    window.open(url, '_blank');
}

// 删除网站
function deleteWebsite(id) {
    if (confirm('确定要删除这个网站吗？')) {
        websites = websites.filter(site => site.id !== id);
        saveWebsites();
        refreshCategories();
        renderWebsites();
        showMessage('网站已删除', 'success');
    }
}

// 编辑网站
function editWebsite(id) {
    const site = websites.find(s => s.id === id);
    if (!site) return;
    
    // 填充表单
    document.getElementById('siteName').value = site.name;
    document.getElementById('siteUrl').value = site.url;
    document.getElementById('siteDesc').value = site.description;
    document.getElementById('siteCategory').value = site.category;
    
    // 显示模态框
    document.getElementById('addSiteModal').style.display = 'block';
    
    // 修改表单提交处理
    const form = document.getElementById('addSiteForm');
    form.onsubmit = function(e) {
        e.preventDefault();
        
        // 更新网站信息
        site.name = document.getElementById('siteName').value;
        site.url = document.getElementById('siteUrl').value;
        site.description = document.getElementById('siteDesc').value;
        site.category = document.getElementById('siteCategory').value;
        
        saveWebsites();
        
        // 关闭模态框并重置表单
        document.getElementById('addSiteModal').style.display = 'none';
        form.reset();
        form.onsubmit = handleAddSite; // 恢复原始处理函数
        
        refreshCategories();
        renderWebsites();
        showMessage('网站信息已更新', 'success');
    };
}

// 显示消息提示
function showMessage(message, type = 'info') {
    // 创建消息元素
    const messageEl = document.createElement('div');
    messageEl.className = `message message-${type}`;
    messageEl.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${type === 'success' ? '#2ecc71' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 9999;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;
    messageEl.textContent = message;
    
    document.body.appendChild(messageEl);
    
    // 显示动画
    setTimeout(() => {
        messageEl.style.opacity = '1';
        messageEl.style.transform = 'translateX(0)';
    }, 100);
    
    // 自动隐藏
    setTimeout(() => {
        messageEl.style.opacity = '0';
        messageEl.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (messageEl.parentNode) {
                messageEl.parentNode.removeChild(messageEl);
            }
        }, 300);
    }, 3000);
}

// 导出数据
function exportData() {
    const dataStr = JSON.stringify(websites, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'websites_backup.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    showMessage('数据导出成功', 'success');
}

// 键盘快捷键
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K 快速搜索
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.getElementById('searchInput').focus();
    }
    
    // Esc 关闭模态框
    if (e.key === 'Escape') {
        const modal = document.getElementById('addSiteModal');
        if (modal.style.display === 'block') {
            modal.style.display = 'none';
            document.getElementById('addSiteForm').reset();
        }
    }
});