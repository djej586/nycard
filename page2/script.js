let currentPage = 2; // 当前页面

// 切换页面显示
function goToPage(pageNum) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById('page' + pageNum).style.display = 'flex';

    // // 如果跳转到第三页，展示最终的边框
    // if (pageNum === 3) {
    //     document.getElementById('final-border').src = `res/${selectedBorder}.png`;
    // }
}

// 选择边框
function selectFrame(borderName) {
    selectedBorder = borderName;
    // 更新第二页中的边框预览图
    document.getElementById('selected-border').src = `res/${selectedBorder}.png`;
}

// 初始化页面，加载首页
window.onload = function() {
    goToPage(2);
};

// 监听上下滚动切换页面
let scrollTimeout;
window.addEventListener('wheel', function(event) {
    clearTimeout(scrollTimeout); // 防止快速滚动时触发多个事件

    scrollTimeout = setTimeout(() => {
        if (event.deltaY > 0 && currentPage < 3) {  // 向下滚动
            currentPage++;
        } else if (event.deltaY < 0 && currentPage > 1) {  // 向上滚动
            currentPage--;
        }
        goToPage(currentPage);
    }, 200); // 限制频繁触发
});
