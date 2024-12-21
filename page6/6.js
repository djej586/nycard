 /*需要功能
      1.图片加载好后有彩带 （已实现）
      2.保存按钮的逻辑  （已实现）
      3.分享到朋友圈按钮的逻辑
      4.分享给朋按钮的逻辑
      5.抖动效果 （已实现）*/

      /*默认路径*/
      let borderPath="./border.png";
      document.getElementById("border").src=borderPath;
      let tips1Path="./tips-1.png"
      document.getElementById("tips1").src=tips1Path;
      let tips2Path="./tips-2.png"
      document.getElementById("tips2").src=tips2Path;
      
      /*按钮抖动效果*/
      document.querySelectorAll("button").forEach((button) => {
        let shakeInterval;
        function shakeButton() {
          const randomX = (Math.random() - 0.95) ; 
          const randomY = (Math.random() - 0.95) ; 
          button.style.transform = `translate(${randomX}vh, ${randomY}vh)`;
        }
        function startShaking() {
          shakeInterval = setInterval(shakeButton, 200); 
        }
        function stopShaking() {
          clearInterval(shakeInterval);
          button.style.transform = "translate(0, 0)";
        }
        startShaking();
        button.addEventListener("mouseenter", stopShaking);
        button.addEventListener("mouseleave", startShaking);
      });
      
      /*屏幕彩带效果*/
      function createConfetti() {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A6", "#F3FF33"];
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        // 随机设置彩带生成位置（屏幕左侧或右侧）
        const side = Math.random() < 0.5 ? "left" : "right";
        const randomPosition = Math.random() * 100; // 0% 到 100% 的随机位置
        confetti.style[side] = `${randomPosition}vw`;
        confetti.style.top = "-10vh";
        const duration = Math.random() * 3 + 2; // 2s 到 5s
        confetti.style.animationDuration = `${duration}s`;
        document.body.appendChild(confetti);
        // 动画结束后移除彩带
        confetti.addEventListener("animationend", () => {
          confetti.remove();
        });
      }
        // 定时生成彩带
      setInterval(createConfetti, 100); 
      
      //截图保存功能
      function captureWithSize() {
        const targetElement = document.getElementById("capture"); // 指定区域
      html2canvas(targetElement, {
        useCORS: true, // 允许加载跨域资源
        allowTaint: true, 
        scale: 2, 
      }).then((canvas) => {
        
        const link = document.createElement("a");
        link.download = "capture.png"; // 下载的文件名
        link.href = canvas.toDataURL("image/png");
        link.click();
      }).catch((error) => {
        console.error("截图失败:", error);
      });
    }

    //分享给朋友

    //分享到朋友圈

      