/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const PostDetails = ({post}) => {

    const {description, image, title, date} = post;
  return (
    <section className="details">
        <h3 className="detail-title">{title}</h3>
        <p className="date">{date}</p>
        <img src={image} alt={title} />
        <p className="description">{description}</p>
        <hr />
    </section>
)
}

export default PostDetails