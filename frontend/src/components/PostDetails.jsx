/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { CalendarDaysIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const PostDetails = ({ post }) => {
  const { description, image, title, date } = post;
  return (
    <section className="details">
      <div className="detail-header">
        <div>
          <p className="detail-title">{title}</p>
          <p className="date">
            <CalendarDaysIcon className="clockIcon" />
            <span> {date} </span>
          </p>
        </div>
        <Link to={"/"}><ArrowLeftIcon className="arrowIcon" /></Link>
      </div>
      <img src={image} alt={title} />
      <p className="description">{description}</p>
      <div className="detail-footer">
        <Link to="/edit-post/:id" >
          <p className="btn sm">Edit</p>
        </Link>
        <Link to="/delete-post/:id" >
          <p className="btn sm">Delete</p>
        </Link>
      </div>
      <hr />
    </section>
  );
};

export default PostDetails;
