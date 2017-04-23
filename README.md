# realtime

A sample socket.io application that subscribes to Redis channels with a * pattern subscribe. The contents of the channel is sent, via socket.io, to a remote client that has subscribed to a socket.io 'room' with a name that matches a Redis channel.

The application includes a very simple HTML page at / that connects to 'room' particle so that it receives the contents of the Redis channel called 'particle'.

This application works together with an Azure Function that picks up messages from IoT Hub and puts that message in a Redis channel with name 'particle'

This application contains integration with Shippable that automatically builds a new container image pushes it to Azure Container Service