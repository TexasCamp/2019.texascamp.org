import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const updateSession = gql`
  mutation updateSession(
    $input: UpdateSessionInput!
    $id: Int!
    $edit_token: String!
  ) {
    UpdateSession(id: $id, edit_token: $edit_token, input: $input) {
      errors
      violations {
        message
        path
        code
      }
      entity {
        entityLabel
        entityId
      }
    }
  }
`;

export default graphql(updateSession, {
  props: ({ mutate }) => ({
    updateSession: (
      id,
      editToken,
      title,
      skillLevel,
      trackId,
      type,
      speakers,
      description,
      name,
      email,
      company,
    ) =>
      mutate({
        variables: {
          id,
          edit_token: editToken,
          input: {
            title,
            skill_level_id: parseInt(skillLevel, 10),
            track_id: parseInt(trackId, 10),
            session_type_id: parseInt(type, 10),
            speakers,
            description,
            contact_info: {
              name,
              email,
              company,
            },
          },
        },
      }),
  }),
});
