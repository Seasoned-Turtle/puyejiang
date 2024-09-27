function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    var content = document.querySelector('.content');
    var toggleBtn = document.querySelector('.toggle-btn');

    if (sidebar.style.width === '250px') {
        sidebar.style.width = '0px';
        content.style.marginLeft = '0px';
        toggleBtn.style.left = '0px';
    } else {
        sidebar.style.width = '250px';
        content.style.marginLeft = '260px';
        toggleBtn.style.left = '250px';
    }
}


// document.querySelector('.menu-toggle').addEventListener('click', function() {
//     const nav = document.querySelector('nav');
//     nav.classList.toggle('active');
// });
