// 侧边栏折叠逻辑
const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('#toggle-sidebar');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
});
