import React from 'react';
import { useQuery, gql } from '@apollo/client';
import UnderConstruction from '../src/components/sections/UnderConstruction';
import EClinicsection from '../src/components/sections/EClinic';

// const APPLICATIONS = gql`
//   query GetApplications {
//     eClinicRequests {
//       data {
//         id
//         attributes {
//           name
//           email
//           phone
//         }
//       }
//     }
//   }
// `;

const EClinic = () => {
  // const { loading, error, data } = useQuery(APPLICATIONS);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  // console.log(data);

  return <EClinicsection />;
};

export default EClinic;
