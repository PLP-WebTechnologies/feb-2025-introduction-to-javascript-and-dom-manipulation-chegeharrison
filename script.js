// Change text content
document.getElementById("changeTextBtn").addEventListener("click", () => {
    const desc = document.getElementById("description");
    desc.textContent = "Nice! You changed the text with JavaScript!";
  });
  
  // Modify CSS style
  document.getElementById("changeStyleBtn").addEventListener("click", () => {
    const box = document.getElementById("colorBox");
    box.style.backgroundColor = box.style.backgroundColor === "lightseagreen" ? "salmon" : "lightseagreen";
  });
  
  // Add or remove an element
  let isMessageShown = false;
  
  document.getElementById("toggleElementBtn").addEventListener("click", () => {
    const container = document.getElementById("messageContainer");
  
    if (isMessageShown) {
      container.innerHTML = "";
    } else {
      const message = document.createElement("p");
      message.textContent = "Hello, you toggled this message!";
      message.style.marginTop = "10px";
      message.style.color = "#1d4ed8";
      container.appendChild(message);
    }
  
    isMessageShown = !isMessageShown;
  });
  