// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from '@apollo/client';

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

export default function Apollo() {
  // const { loading, error, data } = useQuery(GET_LOCATIONS);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error : {error.message}</p>;

  return <h1>Hello World!</h1>;

  // return data.locations.map(({ id, name, description, photo }) => (
  //   <div key={id}>
  //     <h3>{name}</h3>
  //     <img width='400' height='250' alt='location-reference' src={`${photo}`} />
  //     <br />
  //     <b>About this location:</b>
  //     <p>{description}</p>
  //     <br />
  //   </div>
  // ));
}
