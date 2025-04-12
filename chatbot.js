// Open and close the chatbot window
function toggleChatbot() {
    var chatbotContainer = document.getElementById("chatbot-container");
    if (chatbotContainer.style.display === "none" || chatbotContainer.style.display === "") {
        chatbotContainer.style.display = "flex";
    } else {
        chatbotContainer.style.display = "none";
    }
}