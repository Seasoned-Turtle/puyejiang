// 获取背景层
const background = document.querySelector('.background');

// 创建装饰元素并设置随机属性
function createDecorativeElement() {
    const element = document.createElement('div');
    element.classList.add('decorative-element');

    // 随机选择背景图像
    const images = [
        'url(\'tuanzi/团子 (1).ico\')',
        'url(\'tuanzi/团子 (2).ico\')',
        'url(\'tuanzi/团子 (3).ico\')',
        'url(\'tuanzi/团子 (4).ico\')',
        'url(\'tuanzi/团子 (5).ico\')',
        'url(\'tuanzi/团子 (6).ico\')',
        'url(\'tuanzi/团子 (7).ico\')',
        'url(\'tuanzi/团子 (8).ico\')',
        'url(\'tuanzi/团子 (9).ico\')',
        'url(\'tuanzi/团子 (10).ico\')',
        'url(\'tuanzi/团子 (11).ico\')',
        'url(\'tuanzi/团子 (12).ico\')',
        'url(\'tuanzi/团子 (13).ico\')',
        'url(\'tuanzi/团子 (14).ico\')',
        'url(\'tuanzi/团子 (15).ico\')',
        'url(\'tuanzi/团子 (16).ico\')',
        'url(\'tuanzi/团子 (17).ico\')',
        'url(\'tuanzi/团子 (18).ico\')',
        'url(\'tuanzi/团子 (19).ico\')',
        'url(\'tuanzi/团子 (20).ico\')',
        'url(\'tuanzi/团子 (21).ico\')',
        'url(\'tuanzi/团子 (22).ico\')',
        'url(\'tuanzi/团子 (23).ico\')',
        'url(\'tuanzi/团子 (24).ico\')',
        'url(\'tuanzi/团子 (25).ico\')',
        'url(\'tuanzi/团子 (26).ico\')',
        'url(\'tuanzi/团子 (27).ico\')',
        'url(\'tuanzi/团子 (28).ico\')',
        'url(\'tuanzi/团子 (29).ico\')',
        'url(\'tuanzi/团子 (30).ico\')'
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    element.style.backgroundImage = randomImage;

    // 设置初始位置
    const initialLeft = Math.random() * (window.innerWidth - 50);
    element.style.left = `${initialLeft}px`;
    element.style.top = '-50px';

    background.appendChild(element);

    return element;
}

// 动态创建多个装饰元素
const numberOfElements = 20;
const decorativeElements = [];
for (let i = 0; i < numberOfElements; i++) {
    decorativeElements.push(createDecorativeElement());
}

// 更新装饰元素的位置
function updatePositions() {
    decorativeElements.forEach(element => {
        const currentTop = parseFloat(window.getComputedStyle(element).top);
        const newTop = currentTop + 1; // 模拟下落效果
        element.style.top = `${newTop}px`;

        // 如果装饰元素超出屏幕底部，则重新初始化位置
        if (newTop > window.innerHeight) {
            // 重新选择一个新的图标
            const images = [
                'url(\'tuanzi/团子 (1).ico\')',
                'url(\'tuanzi/团子 (2).ico\')',
                // ... 其他图标路径 ...
                'url(\'tuanzi/团子 (30).ico\')'
            ];
            const randomImage = images[Math.floor(Math.random() * images.length)];
            element.style.backgroundImage = randomImage;

            // 重新初始化位置
            const initialLeft = Math.random() * (window.innerWidth - 50);
            element.style.left = `${initialLeft}px`;
            element.style.top = '-50px';
        }
    });

    requestAnimationFrame(updatePositions);
}

updatePositions();
