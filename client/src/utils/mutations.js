import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
  `;

  export const ADD_WATERSIGN = gql`
  mutation addWaterSign($waterMessage: String!) {
    addWaterSign(waterMessage: $waterMessage) {
      waterMessage
      createdAt
      username
    }
  }
  `;

  export const ADD_EARTHSIGN = gql`
  mutation addEarthSign($earthMessage: String!) {
    addEarthSign(earthMessage: $earthMessage) {
      earthMessage
      createdAt
      username
    }
  }
  `;
  export const ADD_AIRSIGN = gql`
  mutation addAirSign($airMessage: String!) {
    addAirSign(airMessage: $airMessage) {
      airMessage
      createdAt
      username
    }
  }
  `;
  export const ADD_FIRESIGN = gql`
  mutation addFireSign($fireMessage: String!) {
    addFireSign(fireMessage: $fireMessage) {
      fireMessage
      createdAt
      username
    }
  }
  `;