const express = require('express')
const app = express()
const {graphqlHTTP} = require('express-graphql')
const { makeExecutableSchema } = require('@graphql-tools/schema')
const {loadFilesSync} = require('@graphql-tools/load-files')
const path = require('path')

const loadedFiles = loadFilesSync("**/*",{
  extensions:['graphql']
})

const loadedResolvers = loadFilesSync(path.join(__dirname, "**/*.resolvers.js"));
console.log(__dirname)
console.log(loadedResolvers)
const schema = makeExecutableSchema({
  typeDefs:loadedFiles,
  resolvers:loadedResolvers
})

app.use('/graphql',graphqlHTTP({
  schema:schema,
  graphiql:true,
}))

app.listen(4000,()=>{
  console.log('runnig!')
})