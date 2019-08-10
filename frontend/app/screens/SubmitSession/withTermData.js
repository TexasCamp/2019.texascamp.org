// @flow
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import compose from 'recompose/compose';

const TYPE_QUERY = gql`
  query sessionTypes {
    taxonomyTermQuery(offset: 0, limit: 999, filter: { vid: "session_type" }) {
      types: entities {
        name: entityLabel
        id: entityId
      }
    }
  }
`;

const TRACK_QUERY = gql`
  query sessionTracks {
    taxonomyTermQuery(offset: 0, limit: 999, filter: { vid: "track" }) {
      tracks: entities {
        name: entityLabel
        id: entityId
      }
    }
  }
`;

const SKILL_LEVELS_QUERY = gql`
  query sessionSkillLevels {
    taxonomyTermQuery(offset: 0, limit: 999, filter: { vid: "skill_level" }) {
      skillLevels: entities {
        name: entityLabel
        id: entityId
      }
    }
  }
`;

const loadingOptions = [{ id: 0, name: 'Loading...' }];

const withTypes = graphql(TYPE_QUERY, {
  props: ({
    data: { taxonomyTermQuery: { types = [] } = {}, loading },
  }: {
    data: { taxonomyTermQuery: { types: Array<Object> }, loading: boolean },
  }): Object => ({
    types: loading ? loadingOptions : types,
  }),
});

const withTracks = graphql(TRACK_QUERY, {
  props: ({
    data: { taxonomyTermQuery: { tracks = [] } = {}, loading },
  }: {
    data: { taxonomyTermQuery: { tracks: Array<Object> }, loading: boolean },
  }): Object => ({
    tracks: loading ? loadingOptions : tracks,
  }),
});

const withSkillLevels = graphql(SKILL_LEVELS_QUERY, {
  props: ({
    data: { taxonomyTermQuery: { skillLevels = [] } = {}, loading },
  }: {
    data: {
      taxonomyTermQuery: { skillLevels: Array<Object> },
      loading: boolean,
    },
  }): Object => ({
    skillLevels: loading ? loadingOptions : skillLevels,
  }),
});

export default compose(withTypes, withTracks, withSkillLevels);
