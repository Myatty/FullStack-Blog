import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Form, Link , useActionData} from "react-router-dom";

const PostForm = () => {

  const data = useActionData();

  return (
    <section className="form-section">
      <div className="detail-header">
        <p>Create your post Now !</p> 
        <Link to={"/"}><ArrowLeftIcon className="arrowIcon" /></Link>
      </div>

      { data && data.errors && (
        <ul>
          {
            Object.values(data.errors).map(err => (
              <li key={err}>{err}</li>
            ))
          }
        </ul>
      )}

      <Form method="POST">
        <div className="form-input">
          <label htmlFor="form-title">Title</label>
          <input type="text" id="form-title" name="title" />
        </div>
        <div>
          <label htmlFor="form-image">Image Url</label>
          <input type="text" id="form-image" name="image" />
        </div>
        <div>
          <label htmlFor="form-date">Date</label>
          <input type="date" id="form-date" name="date" />
        </div>
        <div>
          <label htmlFor="form-description">Description</label>
          <textarea
            id="form-description"
            name="description"
            cols="30"
            rows="3"
          ></textarea>
        </div>

        <button className="btn">Post</button>
      </Form>
    </section>
  );
};

export default PostForm;
