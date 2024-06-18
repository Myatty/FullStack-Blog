/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
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
      <p className="date">
        <CalendarDaysIcon className="clockIcon" />
         Posted at - <span> {date} </span> 
      </p>

      <hr />
    </section>
  );
};

export default PostItem;
