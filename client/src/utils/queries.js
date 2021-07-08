import gql from 'graphql-tag';

export const QUERY_WATERSIGN = gql`
query {
    waterSigns {
      username
      createdAt
      waterMessage
    }
  }
`;

export const QUERY_EARTHSIGN = gql`
query {
    earthSigns {
      username
      createdAt
      earthMessage
    }
  }
`;

export const QUERY_AIRSIGN = gql`
query {
    airSigns {
      username
      createdAt
      airMessage
    }
  }
`;

export const QUERY_FIRESIGN = gql`
query {
    fireSigns {
      username
      createdAt
      fireMessage
    }
  }
`;