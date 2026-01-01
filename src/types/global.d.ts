declare module 'apollo-upload-client/public/createUploadLink.js' {
  import { ApolloLink } from '@apollo/client';
  const createUploadLink: (options?: any) => ApolloLink;
  export default createUploadLink;
}