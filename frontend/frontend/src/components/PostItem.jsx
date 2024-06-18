/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const PostItem = ({ post }) => {
  const { id, title, description, date, image } = post;

  return (
    <section className="post">
      <Link to={`/post-details/${id}`}>
        <img src={image} alt="" />
      </Link>
      <Link to={`/post-details/${id}`}>
        <p className="title">{title}</p>
      </Link>
      <p className="date">Posted at - {date}</p>
      
      <hr />
    </section>
  );
};

export default PostItem;
