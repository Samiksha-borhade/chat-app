function sendMessage() {
  const input = document.getElementById('message-input');
  const messageText = input.value.trim();

  if (messageText !== "") {
    const messageElement = document.createElement('div');
    messageElement.className = 'message user';
    messageElement.textContent = messageText;

    const chatBox = document.getElementById('chat-box');
    chatBox.appendChild(messageElement);

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to bottom

    // Optional: Add a fake response after 1 second
    setTimeout(() => {
      const botReply = document.createElement('div');
      botReply.className = 'message';
      botReply.textContent = "Bot: Thanks for your message!";
      chatBox.appendChild(botReply);
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
  }
}
