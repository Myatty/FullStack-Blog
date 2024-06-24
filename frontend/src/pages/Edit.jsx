import { useRouteLoaderData } from "react-router-dom"
import PostForm from "../components/PostForm"

const Edit = () => {

  const post = useRouteLoaderData("post-detail");

  return (
    <>
        <PostForm header={"Edit Your Post!"} btnText={"Update Post"} oldPostData={post} method={"patch"} />
    </>
  )
}

export default Edit