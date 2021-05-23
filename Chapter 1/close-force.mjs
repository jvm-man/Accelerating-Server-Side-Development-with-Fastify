import fastify from 'fastify'

const serverOptions = {
  logger: true
}
const app = fastify(serverOptions)

app.addHook('onClose', function forEver(instance, done) {
  // infinity waiting
  app.log.warn('infinity onClose');
  setTimeout(done, 1000 * 120)
})

process.once('SIGINT', async function closeApplication() {
  const tenSeconds = 6000
  const timeout = setTimeout(function forceClose() {
    app.log.error('force closing server')
    process.exit(1)
  }, tenSeconds)
  timeout.unref()

  try {
    await app.close()
    app.log.info('bye bye')
  } catch (error) {
    app.log.error(err, 'the app had trouble turning off')
  }
})

await app.listen({
  port: 8080,
  host: '0.0.0.0'
})
