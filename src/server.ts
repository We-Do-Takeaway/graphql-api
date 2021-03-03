import express from 'express'
import 'reflect-metadata'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'type-graphql'

import { HelloResolver } from './graphql/resolvers'

// Create a server:
const app = express()

const main = async () => {
  const schema = await buildSchema({
    resolvers: [HelloResolver],
  })

  // Use those to handle incoming requests:
  app.use(
    graphqlHTTP({
      schema,
    })
  )
  // Start the server:
  app.listen(8080, () => {
    console.log('Server started on port 8080')
  })
}

main()
