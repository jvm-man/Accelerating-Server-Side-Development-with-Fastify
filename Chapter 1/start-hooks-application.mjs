import fastify from 'fastify' // [1]: import the framework
const serverOptions = { // [2]: define some settings for the server
  logger: true // turn on the default logging
}
const app = fastify(serverOptions) // [3]: instantiate the application

app.addHook('onRoute', function inspector(routeOptions) {
  console.log(routeOptions)
})

app.addHook('onRegister', function inspector(plugin, pluginOptions) {
  console.log('Chapter 2, Plugin System and Boot Process')
})

app.addHook('onReady', function preLoading(done) {
  console.log('onReady')
  done()
})

app.addHook('onReady', async function preLoading() {
  console.log('async onReady')
  // the done argument is gone!
})

app.addHook('onClose', function manageClose(done) {
  console.log('onClose')
  done()
})

await app.listen({ // [4]: start the server
  port: 8080,
  host: '0.0.0.0'
})
