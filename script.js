document.addEventListener("DOMContentLoaded", () => {
    const actionBtn = document.getElementById("actionBtn");
    const outputMessage = document.getElementById("outputMessage");

    let clickCount = 0;

    actionBtn.addEventListener("click", () => {
        clickCount++;
        const currentTime = new Date().toLocaleTimeString("vi-VN");
        outputMessage.classList.remove("hidden");
        outputMessage.innerHTML = `
            <strong>Xin chào!</strong> Bạn đã nhấn nút lần thứ <strong>${clickCount}</strong> vào lúc <strong>${currentTime}</strong>.<br>
            JavaScript hoạt động tốt trên GitHub Pages của <strong>Nguyễn Khánh Duy (1822030329)</strong>!
        `;
    });
});
