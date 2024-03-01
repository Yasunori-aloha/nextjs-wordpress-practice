import { NextPage } from "next";

type PostType = {
  id: string;
  title: string;
  content: string;
}

type GraphqlResponse = {
  data: {
    posts: {
      edges: {
        node: PostType;
      }[];
    }
  },
}

const Home: NextPage = async () => {
  const { data } = await (await fetch('http://host.docker.internal:8000/graphql', {
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
  })).json() as GraphqlResponse;

  const posts = data.posts.edges.map(({ node }) => node);

  return <></>;
}

export default Home;
