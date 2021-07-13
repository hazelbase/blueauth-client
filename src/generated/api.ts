import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
};

export enum ActionResult {
  LoginStarted = 'LOGIN_STARTED',
  LoginCompleted = 'LOGIN_COMPLETED'
}


export type Mutation = {
  __typename?: 'Mutation';
  registerOrStartEmailLogin: ActionResult;
  startEmailLogin: Scalars['Boolean'];
  register: Scalars['JSON'];
  completeLogin: Scalars['String'];
  logout: Scalars['Boolean'];
};


export type MutationRegisterOrStartEmailLoginArgs = {
  identity: Scalars['JSON'];
};


export type MutationStartEmailLoginArgs = {
  identity: Scalars['JSON'];
};


export type MutationRegisterArgs = {
  identity: Scalars['JSON'];
};


export type MutationCompleteLoginArgs = {
  token: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  whoami?: Maybe<Scalars['JSON']>;
};

export type GetSelfQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSelfQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'whoami'>
);

export type RegisterOrStartEmailLoginMutationVariables = Exact<{
  identity: Scalars['JSON'];
}>;


export type RegisterOrStartEmailLoginMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'registerOrStartEmailLogin'>
);

export type RegisterMutationVariables = Exact<{
  identity: Scalars['JSON'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'register'>
);

export type StartEmailLoginMutationVariables = Exact<{
  identity: Scalars['JSON'];
}>;


export type StartEmailLoginMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'startEmailLogin'>
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);


export const GetSelfDocument = gql`
    query getSelf {
  whoami
}
    `;
export const RegisterOrStartEmailLoginDocument = gql`
    mutation registerOrStartEmailLogin($identity: JSON!) {
  registerOrStartEmailLogin(identity: $identity)
}
    `;
export const RegisterDocument = gql`
    mutation register($identity: JSON!) {
  register(identity: $identity)
}
    `;
export const StartEmailLoginDocument = gql`
    mutation startEmailLogin($identity: JSON!) {
  startEmailLogin(identity: $identity)
}
    `;
export const LogoutDocument = gql`
    mutation logout {
  logout
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getSelf(variables?: GetSelfQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetSelfQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSelfQuery>(GetSelfDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getSelf');
    },
    registerOrStartEmailLogin(variables: RegisterOrStartEmailLoginMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RegisterOrStartEmailLoginMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RegisterOrStartEmailLoginMutation>(RegisterOrStartEmailLoginDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'registerOrStartEmailLogin');
    },
    register(variables: RegisterMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RegisterMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RegisterMutation>(RegisterDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'register');
    },
    startEmailLogin(variables: StartEmailLoginMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StartEmailLoginMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<StartEmailLoginMutation>(StartEmailLoginDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'startEmailLogin');
    },
    logout(variables?: LogoutMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<LogoutMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<LogoutMutation>(LogoutDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'logout');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;