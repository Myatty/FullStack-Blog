/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const PostItem = ({ post }) => {
  const { id, title, description, date, image } = post;

  return (
    <section className="post">
      <img src={image} alt="" />
      <p className="title">{title}</p>
      <p className="date">Posted at - {date}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste optio
        itaque quod nulla culpa voluptates minus dolorem, neque quidem officiis?
        Accusantium illo temporibus doloribus ratione eum aliquam nesciunt
        voluptas possimus.
      </p>
      <hr />
    </section>
  );
};

export default PostItem;
