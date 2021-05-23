import fastify from 'fastify' // [1]: import the framework
const serverOptions = { // [2]: define some settings for the server
  logger: true // turn on the default logging
}
const app = fastify(serverOptions) // [3]: instantiate the application
await app.listen({ // [4]: start the server
  port: 8080,
  host: '0.0.0.0'
})
