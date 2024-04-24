chrome.runtime.onMessage.addListener(async (message) => {
  switch (message.type) {
    case "PING":
      chrome.runtime.sendMessage({
        type: "PING",
        message: "Pong!",
      });
      break;

    default:
      break;
  }
});
