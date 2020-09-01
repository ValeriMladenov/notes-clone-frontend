import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/client/react/components';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
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
  searchString?: Maybe<Scalars['String']>;
};


export type QueryNoteArgs = {
  id?: Maybe<Scalars['Int']>;
};

export type User = {
  id: Scalars['String'];
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  photoURL?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  notes: Array<Note>;
};


export type Note = {
  id: Scalars['Int'];
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  published: Scalars['Boolean'];
  user: User;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type Mutation = {
  signUp: AuthPayload;
  signIn: AuthPayload;
  updateProfile: User;
  createDraft: Note;
  updateNote?: Maybe<Note>;
  deleteNote?: Maybe<Note>;
  publish?: Maybe<Note>;
};


export type MutationSignUpArgs = {
  user?: Maybe<UserCreateInput>;
};


export type MutationSignInArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpdateProfileArgs = {
  user?: Maybe<UserUpdateInput>;
};


export type MutationCreateDraftArgs = {
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
};


export type MutationUpdateNoteArgs = {
  id: Scalars['Int'];
  content: Scalars['String'];
};


export type MutationDeleteNoteArgs = {
  id: Scalars['Int'];
};


export type MutationPublishArgs = {
  id?: Maybe<Scalars['Int']>;
};

export type UserCreateInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  statusMessage?: Maybe<Scalars['String']>;
};

export type AuthPayload = {
  token: Scalars['String'];
  user: User;
};

export type UserUpdateInput = {
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  statusMessage?: Maybe<Scalars['String']>;
};

export type Subscription = {
  userSignedIn: User;
  userUpdated: User;
};


export type SubscriptionUserSignedInArgs = {
  userId: Scalars['String'];
};


export type SubscriptionUserUpdatedArgs = {
  userId: Scalars['String'];
};



export type Profile = {
  id: Scalars['String'];
  socialId: Scalars['String'];
  authType: AuthType;
  verified: Scalars['Boolean'];
};

export enum AuthType {
  Email = 'Email',
  Facebook = 'Facebook',
  Google = 'Google',
  Apple = 'Apple'
}

export type SignInMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignInMutation = { signIn: Pick<AuthPayload, 'token'> };

export type FeedQueryVariables = Exact<{ [key: string]: never; }>;


export type FeedQuery = { feed: Array<Pick<Note, 'id' | 'title' | 'content' | 'createdAt'>> };

export type CreateDraftMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateDraftMutation = { createDraft: Pick<Note, 'title' | 'content'> };

export type NoteQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type NoteQuery = { note?: Maybe<Pick<Note, 'id' | 'content' | 'createdAt'>> };

export type UpdateNoteMutationVariables = Exact<{
  id: Scalars['Int'];
  content: Scalars['String'];
}>;


export type UpdateNoteMutation = { updateNote?: Maybe<Pick<Note, 'content'>> };

export type SignUpMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
}>;


export type SignUpMutation = { signUp: Pick<AuthPayload, 'token'> };

export type LoadUserQueryVariables = Exact<{ [key: string]: never; }>;


export type LoadUserQuery = { loadUser?: Maybe<Pick<User, 'name'>> };


export const SignInDocument = gql`
    mutation signIn($email: String!, $password: String!) {
  signIn(email: $email, password: $password) {
    token
  }
}
    `;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;
export type SignInComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SignInMutation, SignInMutationVariables>, 'mutation'>;

    export const SignInComponent = (props: SignInComponentProps) => (
      <ApolloReactComponents.Mutation<SignInMutation, SignInMutationVariables> mutation={SignInDocument} {...props} />
    );
    
export type SignInProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<SignInMutation, SignInMutationVariables>
    } & TChildProps;
export function withSignIn<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SignInMutation,
  SignInMutationVariables,
  SignInProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, SignInMutation, SignInMutationVariables, SignInProps<TChildProps, TDataName>>(SignInDocument, {
      alias: 'signIn',
      ...operationOptions
    });
};

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, baseOptions);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const FeedDocument = gql`
    query feed {
  feed {
    id
    title
    content
    createdAt
  }
}
    `;
export type FeedComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<FeedQuery, FeedQueryVariables>, 'query'>;

    export const FeedComponent = (props: FeedComponentProps) => (
      <ApolloReactComponents.Query<FeedQuery, FeedQueryVariables> query={FeedDocument} {...props} />
    );
    
export type FeedProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<FeedQuery, FeedQueryVariables>
    } & TChildProps;
export function withFeed<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  FeedQuery,
  FeedQueryVariables,
  FeedProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, FeedQuery, FeedQueryVariables, FeedProps<TChildProps, TDataName>>(FeedDocument, {
      alias: 'feed',
      ...operationOptions
    });
};

/**
 * __useFeedQuery__
 *
 * To run a query within a React component, call `useFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeedQuery({
 *   variables: {
 *   },
 * });
 */
export function useFeedQuery(baseOptions?: Apollo.QueryHookOptions<FeedQuery, FeedQueryVariables>) {
        return Apollo.useQuery<FeedQuery, FeedQueryVariables>(FeedDocument, baseOptions);
      }
export function useFeedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FeedQuery, FeedQueryVariables>) {
          return Apollo.useLazyQuery<FeedQuery, FeedQueryVariables>(FeedDocument, baseOptions);
        }
export type FeedQueryHookResult = ReturnType<typeof useFeedQuery>;
export type FeedLazyQueryHookResult = ReturnType<typeof useFeedLazyQuery>;
export type FeedQueryResult = Apollo.QueryResult<FeedQuery, FeedQueryVariables>;
export const CreateDraftDocument = gql`
    mutation createDraft {
  createDraft(title: "New Draft", content: "") {
    title
    content
  }
}
    `;
export type CreateDraftMutationFn = Apollo.MutationFunction<CreateDraftMutation, CreateDraftMutationVariables>;
export type CreateDraftComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateDraftMutation, CreateDraftMutationVariables>, 'mutation'>;

    export const CreateDraftComponent = (props: CreateDraftComponentProps) => (
      <ApolloReactComponents.Mutation<CreateDraftMutation, CreateDraftMutationVariables> mutation={CreateDraftDocument} {...props} />
    );
    
export type CreateDraftProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateDraftMutation, CreateDraftMutationVariables>
    } & TChildProps;
export function withCreateDraft<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateDraftMutation,
  CreateDraftMutationVariables,
  CreateDraftProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateDraftMutation, CreateDraftMutationVariables, CreateDraftProps<TChildProps, TDataName>>(CreateDraftDocument, {
      alias: 'createDraft',
      ...operationOptions
    });
};

/**
 * __useCreateDraftMutation__
 *
 * To run a mutation, you first call `useCreateDraftMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDraftMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDraftMutation, { data, loading, error }] = useCreateDraftMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateDraftMutation(baseOptions?: Apollo.MutationHookOptions<CreateDraftMutation, CreateDraftMutationVariables>) {
        return Apollo.useMutation<CreateDraftMutation, CreateDraftMutationVariables>(CreateDraftDocument, baseOptions);
      }
export type CreateDraftMutationHookResult = ReturnType<typeof useCreateDraftMutation>;
export type CreateDraftMutationResult = Apollo.MutationResult<CreateDraftMutation>;
export type CreateDraftMutationOptions = Apollo.BaseMutationOptions<CreateDraftMutation, CreateDraftMutationVariables>;
export const NoteDocument = gql`
    query Note($id: Int!) {
  note(id: $id) {
    id
    content
    createdAt
  }
}
    `;
export type NoteComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<NoteQuery, NoteQueryVariables>, 'query'> & ({ variables: NoteQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const NoteComponent = (props: NoteComponentProps) => (
      <ApolloReactComponents.Query<NoteQuery, NoteQueryVariables> query={NoteDocument} {...props} />
    );
    
export type NoteProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<NoteQuery, NoteQueryVariables>
    } & TChildProps;
export function withNote<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  NoteQuery,
  NoteQueryVariables,
  NoteProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, NoteQuery, NoteQueryVariables, NoteProps<TChildProps, TDataName>>(NoteDocument, {
      alias: 'note',
      ...operationOptions
    });
};

/**
 * __useNoteQuery__
 *
 * To run a query within a React component, call `useNoteQuery` and pass it any options that fit your needs.
 * When your component renders, `useNoteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNoteQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useNoteQuery(baseOptions?: Apollo.QueryHookOptions<NoteQuery, NoteQueryVariables>) {
        return Apollo.useQuery<NoteQuery, NoteQueryVariables>(NoteDocument, baseOptions);
      }
export function useNoteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NoteQuery, NoteQueryVariables>) {
          return Apollo.useLazyQuery<NoteQuery, NoteQueryVariables>(NoteDocument, baseOptions);
        }
export type NoteQueryHookResult = ReturnType<typeof useNoteQuery>;
export type NoteLazyQueryHookResult = ReturnType<typeof useNoteLazyQuery>;
export type NoteQueryResult = Apollo.QueryResult<NoteQuery, NoteQueryVariables>;
export const UpdateNoteDocument = gql`
    mutation updateNote($id: Int!, $content: String!) {
  updateNote(id: $id, content: $content) {
    content
  }
}
    `;
export type UpdateNoteMutationFn = Apollo.MutationFunction<UpdateNoteMutation, UpdateNoteMutationVariables>;
export type UpdateNoteComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateNoteMutation, UpdateNoteMutationVariables>, 'mutation'>;

    export const UpdateNoteComponent = (props: UpdateNoteComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateNoteMutation, UpdateNoteMutationVariables> mutation={UpdateNoteDocument} {...props} />
    );
    
export type UpdateNoteProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateNoteMutation, UpdateNoteMutationVariables>
    } & TChildProps;
export function withUpdateNote<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateNoteMutation,
  UpdateNoteMutationVariables,
  UpdateNoteProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateNoteMutation, UpdateNoteMutationVariables, UpdateNoteProps<TChildProps, TDataName>>(UpdateNoteDocument, {
      alias: 'updateNote',
      ...operationOptions
    });
};

/**
 * __useUpdateNoteMutation__
 *
 * To run a mutation, you first call `useUpdateNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateNoteMutation, { data, loading, error }] = useUpdateNoteMutation({
 *   variables: {
 *      id: // value for 'id'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useUpdateNoteMutation(baseOptions?: Apollo.MutationHookOptions<UpdateNoteMutation, UpdateNoteMutationVariables>) {
        return Apollo.useMutation<UpdateNoteMutation, UpdateNoteMutationVariables>(UpdateNoteDocument, baseOptions);
      }
export type UpdateNoteMutationHookResult = ReturnType<typeof useUpdateNoteMutation>;
export type UpdateNoteMutationResult = Apollo.MutationResult<UpdateNoteMutation>;
export type UpdateNoteMutationOptions = Apollo.BaseMutationOptions<UpdateNoteMutation, UpdateNoteMutationVariables>;
export const SignUpDocument = gql`
    mutation signUp($email: String!, $password: String!, $name: String!) {
  signUp(user: {email: $email, password: $password, name: $name}) {
    token
  }
}
    `;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;
export type SignUpComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SignUpMutation, SignUpMutationVariables>, 'mutation'>;

    export const SignUpComponent = (props: SignUpComponentProps) => (
      <ApolloReactComponents.Mutation<SignUpMutation, SignUpMutationVariables> mutation={SignUpDocument} {...props} />
    );
    
export type SignUpProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>
    } & TChildProps;
export function withSignUp<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SignUpMutation,
  SignUpMutationVariables,
  SignUpProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, SignUpMutation, SignUpMutationVariables, SignUpProps<TChildProps, TDataName>>(SignUpDocument, {
      alias: 'signUp',
      ...operationOptions
    });
};

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
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, baseOptions);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const LoadUserDocument = gql`
    query loadUser {
  loadUser {
    name
  }
}
    `;
export type LoadUserComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<LoadUserQuery, LoadUserQueryVariables>, 'query'>;

    export const LoadUserComponent = (props: LoadUserComponentProps) => (
      <ApolloReactComponents.Query<LoadUserQuery, LoadUserQueryVariables> query={LoadUserDocument} {...props} />
    );
    
export type LoadUserProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<LoadUserQuery, LoadUserQueryVariables>
    } & TChildProps;
export function withLoadUser<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LoadUserQuery,
  LoadUserQueryVariables,
  LoadUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, LoadUserQuery, LoadUserQueryVariables, LoadUserProps<TChildProps, TDataName>>(LoadUserDocument, {
      alias: 'loadUser',
      ...operationOptions
    });
};

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
export function useLoadUserQuery(baseOptions?: Apollo.QueryHookOptions<LoadUserQuery, LoadUserQueryVariables>) {
        return Apollo.useQuery<LoadUserQuery, LoadUserQueryVariables>(LoadUserDocument, baseOptions);
      }
export function useLoadUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LoadUserQuery, LoadUserQueryVariables>) {
          return Apollo.useLazyQuery<LoadUserQuery, LoadUserQueryVariables>(LoadUserDocument, baseOptions);
        }
export type LoadUserQueryHookResult = ReturnType<typeof useLoadUserQuery>;
export type LoadUserLazyQueryHookResult = ReturnType<typeof useLoadUserLazyQuery>;
export type LoadUserQueryResult = Apollo.QueryResult<LoadUserQuery, LoadUserQueryVariables>;