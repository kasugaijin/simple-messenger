class MessageChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'message'
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def receive(data)
    # Do not need to rebroadcast received data if using the model because
    # broadcast is handled on the messages#create action
    # data['user'] = current_user
    # ActionCable.server.broadcast('message', data)
  end
end
