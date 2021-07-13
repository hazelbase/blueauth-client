import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { getSdk, SdkFunctionWrapper, Sdk } from './generated/api';

export type { Sdk } from './generated/api';

export type Config = {
  url?: string;
  sdkFunctionWrapper?: SdkFunctionWrapper;
  graphqlClientOptions?: RequestInit;
};

export default function blueauthClient(config?: Config): Sdk {
  const grClient = new GraphQLClient(config?.url || '/api/auth', config?.graphqlClientOptions);
  return getSdk(grClient, config?.sdkFunctionWrapper);
}
