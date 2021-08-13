import { gql } from 'apollo-server';

export default gql`
  type editProfileResult{
    ok: Boolean!
    error: String
  }

  scalar Upload

  type Mutation{
    editProfile(
      firstName: String
      lastName: String
      username: String
      email: String
      password: String
      bio: String
      avartar: Upload
    ): editProfileResult
  }
`
