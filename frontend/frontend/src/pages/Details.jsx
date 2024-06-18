/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import PostDetails from "../components/PostDetails";

const Details = () => {
  const post = useLoaderData();
  console.log(post);

  return (
    <>
        <PostDetails post={post}/>
    </>
  );
};

export default Details;

export const loader = async ({ request, params }) => {
  const response = await fetch(`http://localhost:8000/posts/${params.id}`);

  if (response.ok) {
    const data = await response.json();
    return data.post;
  } else {
    //
  }
};
