document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.createElement("button");
    toggleButton.innerText = "切换夜间模式";
    toggleButton.style.position = "fixed";
    toggleButton.style.top = "10px";
    toggleButton.style.right = "10px";
    toggleButton.style.padding = "10px";
    toggleButton.style.backgroundColor = "#000";
    toggleButton.style.color = "#fff";
    toggleButton.style.border = "none";
    toggleButton.style.cursor = "pointer";
    document.body.appendChild(toggleButton);
  
    // 检查是否有存储的夜间模式状态
    if (localStorage.getItem("night-mode") === "enabled") {
      document.body.classList.add("night-mode");
    }
  
    // 切换夜间模式
    toggleButton.addEventListener("click", () => {
      document.body.classList.toggle("night-mode");
  
      // 存储用户的偏好设置
      if (document.body.classList.contains("night-mode")) {
        localStorage.setItem("night-mode", "enabled");
      } else {
        localStorage.removeItem("night-mode");
      }
    });
  });
  