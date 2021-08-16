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
  SignInStarted = 'SIGN_IN_STARTED',
  SignInCompleted = 'SIGN_IN_COMPLETED'
}


export type Mutation = {
  __typename?: 'Mutation';
  registerOrStartEmailSignIn: ActionResult;
  startEmailSignIn: Scalars['Boolean'];
  register: Scalars['JSON'];
  signOut: Scalars['Boolean'];
};


export type MutationRegisterOrStartEmailSignInArgs = {
  identity: Scalars['JSON'];
  redirectURL?: Maybe<Scalars['String']>;
};


export type MutationStartEmailSignInArgs = {
  identity: Scalars['JSON'];
  redirectURL?: Maybe<Scalars['String']>;
};


export type MutationRegisterArgs = {
  identity: Scalars['JSON'];
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

export type RegisterOrStartEmailSignInMutationVariables = Exact<{
  identity: Scalars['JSON'];
  redirectURL?: Maybe<Scalars['String']>;
}>;


export type RegisterOrStartEmailSignInMutation = (
  { __typename?: 'Mutation' }
  & { result: Mutation['registerOrStartEmailSignIn'] }
);

export type RegisterMutationVariables = Exact<{
  identity: Scalars['JSON'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { result: Mutation['register'] }
);

export type StartEmailSignInMutationVariables = Exact<{
  identity: Scalars['JSON'];
  redirectURL?: Maybe<Scalars['String']>;
}>;


export type StartEmailSignInMutation = (
  { __typename?: 'Mutation' }
  & { result: Mutation['startEmailSignIn'] }
);

export type SignOutMutationVariables = Exact<{ [key: string]: never; }>;


export type SignOutMutation = (
  { __typename?: 'Mutation' }
  & { result: Mutation['signOut'] }
);


export const GetSelfDocument = gql`
    query getSelf {
  whoami
}
    `;
export const RegisterOrStartEmailSignInDocument = gql`
    mutation registerOrStartEmailSignIn($identity: JSON!, $redirectURL: String) {
  result: registerOrStartEmailSignIn(
    identity: $identity
    redirectURL: $redirectURL
  )
}
    `;
export const RegisterDocument = gql`
    mutation register($identity: JSON!) {
  result: register(identity: $identity)
}
    `;
export const StartEmailSignInDocument = gql`
    mutation startEmailSignIn($identity: JSON!, $redirectURL: String) {
  result: startEmailSignIn(identity: $identity, redirectURL: $redirectURL)
}
    `;
export const SignOutDocument = gql`
    mutation signOut {
  result: signOut
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getSelf(variables?: GetSelfQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetSelfQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSelfQuery>(GetSelfDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getSelf');
    },
    registerOrStartEmailSignIn(variables: RegisterOrStartEmailSignInMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RegisterOrStartEmailSignInMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RegisterOrStartEmailSignInMutation>(RegisterOrStartEmailSignInDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'registerOrStartEmailSignIn');
    },
    register(variables: RegisterMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RegisterMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RegisterMutation>(RegisterDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'register');
    },
    startEmailSignIn(variables: StartEmailSignInMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StartEmailSignInMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<StartEmailSignInMutation>(StartEmailSignInDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'startEmailSignIn');
    },
    signOut(variables?: SignOutMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SignOutMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SignOutMutation>(SignOutDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'signOut');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;