import expressLoader from './expressLoader'
import mongoDBLoader from './mongodb'

export default async ({ config }) => {
  await mongoDBLoader({ app, config })
  console.log(' - MongoDB loaded and connected.');

  const app = expressLoader({ config })

  console.log(' - Express successfully configured.');

  return app
}
