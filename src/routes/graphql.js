import { ApolloServer, gql } from 'apollo-server-micro';
import '../mongoose';
import typeDefs from '../lib/schema';
import resolvers from '../lib/resolvers';

const context = async ({ req }) => {
  let token = '';
  let host;
  console.log(process.env.NODE_ENV);
  if(process.env.NODE_ENV === 'development') {
    host = "http://localhost:3000"
  } else {
    host = req.headers.source
  }
  console.log(req.headers)
  if(req.headers.authorization) {
    token = req.headers.authorization.split(' ')[1];
  }
  return {
    token,
    origin: host
  }
  
}

const apolloServer = new ApolloServer({ typeDefs, resolvers, context });
const handler = apolloServer.createHandler();

export async function get(req, res, next) {
	handler(req, res);
} 

export async function post(req, res, next) {
	handler(req, res);
}