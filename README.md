# README

This simple Rails 7 chat application uses websocket and the ActionCable library. This was built to practice using websockets in two different ways. 

The first method uses clientside JS (consumer object) to send data (a message) over the cable, which is received by the Message channel on the back end and rebroadcasted to all subscribers on that channel over the cable. The data is received by the clientside JS consumer object and appended to the chat window. This allows users to send and receive messages seamingly instantaneously without any need for page refresh. Messages are not persisted or altered server side.

The second method add a Message model. Instead of using the clientside consumer object to send the message data over the cable like above, a form makes a `POST` request to the server. This is handled by the messages#create action, which builds and persists the message and broadcasts it, along with the user data, to all subscribers on the messages channel via the cable, which then handles the new data similarly to above.

Authentication is handled via Devise, and `connection.rb` authenticates a subscriber on a channel using the Warden environment variable to ensure the current user is an authenticated user.
