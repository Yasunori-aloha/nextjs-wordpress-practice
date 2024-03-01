import { NextPage } from "next";

const Home: NextPage = async () => {
  const res = await (await fetch('http://host.docker.internal:8000/graphql', {
    method: 'POST',
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query: `query NewQuery {
      posts {
        edges {
          node {
            id
            title
            content
          }
        }
      }
    }` })
  })).json();

  return <></>;
}

export default Home;
