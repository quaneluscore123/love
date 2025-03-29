document.addEventListener("DOMContentLoaded", function () {
    const textLines = [
        "GỬI EM – NGƯỜI ANH THƯƠNG",

        "Em là nắng giữa trời xanh,",
        "Là bông hoa nhỏ dịu lành trong tim.",
        "Bước qua bao nỗi im lìm,",
        "Gặp em, anh thấy con tim rộn ràng.",

        "Mắt em như ánh trăng vàng,",
        "Lời em ấm áp, dịu dàng, thân thương.",
        "Dẫu cho ngày tháng vô thường,",
        "Bên em, anh ngỡ thiên đường gần ngay.",

        "Mong rằng xuân mãi đong đầy,",
        "Tay trong tay mãi, chẳng rời nhau đâu.",
        "Yêu em từ thuở ban đầu,",
        "Đến khi tóc bạc, tình sâu chẳng rời.",

        "💖💖💖",
        "Em là ánh sáng trong đời,",
        "Là nhịp đập trái tim anh mãi đợi chờ.",
    ];
    const messageElement = document.getElementById("message");

    let lineIndex = 0;

    function showLine() {
        if (lineIndex < textLines.length) {
            const lineContainer = document.createElement("p");
            lineContainer.textContent = textLines[lineIndex];
            lineContainer.style.opacity = "0"; 
            lineContainer.style.transition = "opacity 1s"; 
            messageElement.appendChild(lineContainer);

            setTimeout(() => {
                lineContainer.style.opacity = "1";
            }, 10);

            lineIndex++;
            setTimeout(showLine, 1000); 
        } else {
            document.addEventListener("click", function () {
                messageElement.style.transition = "opacity 2s";
                messageElement.style.opacity = "0";
                setTimeout(() => {
                    document.querySelector(".message-container").style.display = "none";
                    document.querySelector(".title").style.display = "block";
                }, 2000); 
            });
        }
    }

    showLine();

    const yesButton = document.querySelector(".choose-left");
    const noButton = document.querySelector(".choose-right");
    const resultDiv = document.getElementById("result");

    yesButton.addEventListener("click", function () {
        resultDiv.style.display = "block";
        resultDiv.innerHTML = `
            <p>Ehe tớ yêu cậu nhiều lắm ❤️</p>
            <div id="background-gif"></div>
        `;
    });

    noButton.addEventListener("click", function () {
        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;
        const maxX = window.innerWidth - buttonWidth;
        const maxY = window.innerHeight - buttonHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noButton.style.position = "absolute";
        noButton.style.left = randomX + "px";
        noButton.style.top = randomY + "px";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    function createRaindrop() {
        const raindrop = document.createElement("div");
        raindrop.classList.add("raindrop");

        raindrop.style.left = Math.random() * window.innerWidth + "px";
        raindrop.style.top = "-50px";

        const size = Math.random() * 5 + 2;
        raindrop.style.width = `${size}px`;
        raindrop.style.height = `${size * 3}px`;
        raindrop.style.animationDuration = Math.random() * 2 + 2 + "s";

        document.body.appendChild(raindrop);

        setTimeout(() => {
            raindrop.remove();
        }, 4000);
    }

    setInterval(createRaindrop, 100);
});
