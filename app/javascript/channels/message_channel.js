import consumer from "channels/consumer"

const messageChannel = consumer.subscriptions.create("MessageChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    const messageDisplay = document.querySelector('#message-display')
    messageDisplay.insertAdjacentHTML('beforeend', this.template(data))
    clearInput()
  },

  template(data) {
    console.log(data)
    return `<article class="message">
              <div class="message-body">
                <p></p>
                <p>
                  <strong>${data.user.email}:</strong> ${data.body}
                </p>
              </div>
            </article>`
  }
});

function clearInput() {
  let messageInput = document.querySelector('#message-input')
  messageInput.value = '';
}

// JS to use when not using message model
// turbo:load listener ensure DOM is loaded before running JS
// document.addEventListener("turbo:load", () => {
//   let form = document.querySelector('#message-form')
//   if(form) {
//     form.addEventListener('submit', (e) => {
//       //stop page re-rendering on submit click
//       e.preventDefault()

//       let messageInput = document.querySelector('#message-input')
//       if(messageInput.value == '') return;
//       const message = {
//         body: messageInput.value
//       }
//       messageChannel.send({message: message})
//       messageInput.value = '';
//     })
//   }
// })
