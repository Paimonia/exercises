var openButton = document.querySelector("#openOverlay");
var successModal = createModal("The massage has been sent, thank you!");
var body = document.body;

openButton.addEventListener("click", (e) => {
  body.appendChild(successModal);
});

function createModal(content) {
    var overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");

  var template = document.querySelector("#overlayTemplate");

  overlayElement.innerHTML = template.innerHTML;
  overlayElement.addEventListener("click", (e) => {
    if (e.target === overlayElement) {
      closeElement.click();
    }
  });

  var closeElement = overlayElement.querySelector(".close");
  closeElement.addEventListener("click", (e) => {
    e.preventDefault();
    body.removeChild(overlayElement);
  });

  var contentElement = overlayElement.querySelector(".content");
  contentElement.innerHTML = content;

  return overlayElement;
}
