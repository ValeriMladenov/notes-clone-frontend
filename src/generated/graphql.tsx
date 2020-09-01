import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
import * as React from "react";
import * as ApolloReactComponents from "@apollo/client/react/components";
import * as ApolloReactHoc from "@apollo/client/react/hoc";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
};

export type Query = {
  loadUser?: Maybe<User>;
  feed: Array<Note>;
  filterNotes: Array<Note>;
  note?: Maybe<Note>;
};

export type QueryFilterNotesArgs = {
  searchString?: Maybe<Scalars["String"]>;
};

export type QueryNoteArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type User = {
  id: Scalars["String"];
  email: Scalars["String"];
  name?: Maybe<Scalars["String"]>;
  photoURL?: Maybe<Scalars["String"]>;
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  notes: Array<Note>;
};

export type Note = {
  id: Scalars["Int"];
  title: Scalars["String"];
  content?: Maybe<Scalars["String"]>;
  published: Scalars["Boolean"];
  user: User;
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
};

export type Mutation = {
  signUp: AuthPayload;
  signIn: AuthPayload;
  updateProfile: User;
  createDraft: Note;
  deleteNote?: Maybe<Note>;
  publish?: Maybe<Note>;
};

export type MutationSignUpArgs = {
  user?: Maybe<UserCreateInput>;
};

export type MutationSignInArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationUpdateProfileArgs = {
  user?: Maybe<UserUpdateInput>;
};

export type MutationCreateDraftArgs = {
  title: Scalars["String"];
  content?: Maybe<Scalars["String"]>;
};

export type MutationDeleteNoteArgs = {
  id: Scalars["Int"];
};

export type MutationPublishArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type UserCreateInput = {
  email: Scalars["String"];
  password: Scalars["String"];
  name?: Maybe<Scalars["String"]>;
  statusMessage?: Maybe<Scalars["String"]>;
};

export type AuthPayload = {
  token: Scalars["String"];
  user: User;
};

export type UserUpdateInput = {
  email?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  statusMessage?: Maybe<Scalars["String"]>;
};

export type Subscription = {
  userSignedIn: User;
  userUpdated: User;
};

export type SubscriptionUserSignedInArgs = {
  userId: Scalars["String"];
};

export type SubscriptionUserUpdatedArgs = {
  userId: Scalars["String"];
};

export type Profile = {
  id: Scalars["String"];
  socialId: Scalars["String"];
  authType: AuthType;
  verified: Scalars["Boolean"];
};

export enum AuthType {
  Email = "Email",
  Facebook = "Facebook",
  Google = "Google",
  Apple = "Apple",
}

export type SignUpMutationVariables = Exact<{
  email: Scalars["String"];
  password: Scalars["String"];
  name: Scalars["String"];
}>;

export type SignUpMutation = { signUp: Pick<AuthPayload, "token"> };

export type LoadUserQueryVariables = Exact<{ [key: string]: never }>;

export type LoadUserQuery = { loadUser?: Maybe<Pick<User, "name">> };

export const SignUpDocument = gql`
  mutation signUp($email: String!, $password: String!, $name: String!) {
    signUp(user: { email: $email, password: $password, name: $name }) {
      token
    }
  }
`;
export type SignUpMutationFn = Apollo.MutationFunction<
  SignUpMutation,
  SignUpMutationVariables
>;
export type SignUpComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    SignUpMutation,
    SignUpMutationVariables
  >,
  "mutation"
>;

export const SignUpComponent = (props: SignUpComponentProps) => (
  <ApolloReactComponents.Mutation<SignUpMutation, SignUpMutationVariables>
    mutation={SignUpDocument}
    {...props}
  />
);

export type SignUpProps<
  TChildProps = {},
  TDataName extends string = "mutate"
> = {
  [key in TDataName]: Apollo.MutationFunction<
    SignUpMutation,
    SignUpMutationVariables
  >;
} &
  TChildProps;
export function withSignUp<
  TProps,
  TChildProps = {},
  TDataName extends string = "mutate"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    SignUpMutation,
    SignUpMutationVariables,
    SignUpProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    SignUpMutation,
    SignUpMutationVariables,
    SignUpProps<TChildProps, TDataName>
  >(SignUpDocument, {
    alias: "signUp",
    ...operationOptions,
  });
}

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useSignUpMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignUpMutation,
    SignUpMutationVariables
  >
) {
  return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(
    SignUpDocument,
    baseOptions
  );
}
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<
  SignUpMutation,
  SignUpMutationVariables
>;
export const LoadUserDocument = gql`
  query loadUser {
    loadUser {
      name
    }
  }
`;
export type LoadUserComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    LoadUserQuery,
    LoadUserQueryVariables
  >,
  "query"
>;

export const LoadUserComponent = (props: LoadUserComponentProps) => (
  <ApolloReactComponents.Query<LoadUserQuery, LoadUserQueryVariables>
    query={LoadUserDocument}
    {...props}
  />
);

export type LoadUserProps<
  TChildProps = {},
  TDataName extends string = "data"
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    LoadUserQuery,
    LoadUserQueryVariables
  >;
} &
  TChildProps;
export function withLoadUser<
  TProps,
  TChildProps = {},
  TDataName extends string = "data"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    LoadUserQuery,
    LoadUserQueryVariables,
    LoadUserProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    LoadUserQuery,
    LoadUserQueryVariables,
    LoadUserProps<TChildProps, TDataName>
  >(LoadUserDocument, {
    alias: "loadUser",
    ...operationOptions,
  });
}

/**
 * __useLoadUserQuery__
 *
 * To run a query within a React component, call `useLoadUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoadUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoadUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useLoadUserQuery(
  baseOptions?: Apollo.QueryHookOptions<LoadUserQuery, LoadUserQueryVariables>
) {
  return Apollo.useQuery<LoadUserQuery, LoadUserQueryVariables>(
    LoadUserDocument,
    baseOptions
  );
}
export function useLoadUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    LoadUserQuery,
    LoadUserQueryVariables
  >
) {
  return Apollo.useLazyQuery<LoadUserQuery, LoadUserQueryVariables>(
    LoadUserDocument,
    baseOptions
  );
}
export type LoadUserQueryHookResult = ReturnType<typeof useLoadUserQuery>;
export type LoadUserLazyQueryHookResult = ReturnType<
  typeof useLoadUserLazyQuery
>;
export type LoadUserQueryResult = Apollo.QueryResult<
  LoadUserQuery,
  LoadUserQueryVariables
>;
