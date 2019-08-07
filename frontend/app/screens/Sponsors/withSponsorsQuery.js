// @flow

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import path from 'ramda/src/path';
import type { SponsorT } from 'types';

export const SPONSOR_QUERY = gql`
  query allSponsors {
    nodeQuery(offset: 0, limit: 999, filter: { type: "sponsor" }) {
      entities {
        id: entityId
        ...SponsorsFragment
      }
    }
  }

  fragment SponsorsFragment on NodeSponsor {
    entityId
    title
    body {
      value
    }
    fieldSponsorLevel {
      entity {
        entityLabel
      }
    }
    fieldSponsorUrl {
      uri
    }
    fieldSponsorImage {
      url
      alt
    }
  }
`;

const emptySponsor = {
  id: 'empty-sponsor',
  title: 'We Need You!',
  body: 'We Need You!',
  sponsorLevel: 'Platinum',
  image: {
    url: 'http://placekitten.com/421/240',
    alt: 'We Need You!',
  },
  sponsorUrl: '/sponsors',
};

export const sponsorsListMapper = (
  entities: Array<Object>,
): Array<SponsorT> => {
  if (entities.length < 1) {
    return [emptySponsor];
  }

  return entities.map(entity => ({
    id: entity.entityId,
    title: entity.title,
    body: entity.body.value,
    sponsorLevel: path(['fieldSponsorLevel', 'entity', 'entityLabel'], entity),
    image: {
      url: path(['fieldSponsorImage', 'url'], entity),
      alt: path(['fieldSponsorImage', 'alt'], entity),
    },
    sponsorUrl: path(['fieldSponsorUrl', 'uri'], entity),
  }));
};

const withSponsorsQuery = graphql(SPONSOR_QUERY, {
  props: ({
    data: { nodeQuery: { entities = [] } = {}, loading },
  }: {
    data: { nodeQuery: { entities: Array<Object> }, loading: boolean },
  }) => ({ sponsors: loading ? [] : sponsorsListMapper(entities) }),
});

export default withSponsorsQuery;
