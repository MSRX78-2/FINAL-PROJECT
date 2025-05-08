console.log("Name: Fuyu Wang");
console.log("Github: github.com/MSRX78-2");
console.log("Email: fuyuwang@students.calarts.edu");

// 动画
window.addEventListener('load', () => {
    const intro = document.getElementById('intro');// 获取元素
    setTimeout(() => {
        intro.classList.add('hide');// 添加类名以触发动画
        setTimeout(() => {
            intro.style.display = 'none';// 隐藏元素
        }, 1000); // 动画持续时间
    }, 3000); // 3秒后隐藏
});
