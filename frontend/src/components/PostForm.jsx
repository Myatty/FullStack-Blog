/* eslint-disable react/prop-types */
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Form, Link , redirect, useActionData} from "react-router-dom";
import uuid from "react-uuid";

const PostForm = ({header, btnText, oldPostData, method}) => {

  const data = useActionData();

  return (
    <section className="form-section">
      <div className="detail-header">
        <p>{header}</p> 
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

      <Form method={method}>
        <div className="form-input">
          <label htmlFor="form-title">Title</label>
          <input type="text" id="form-title" name="title" defaultValue={oldPostData ? oldPostData.title : ''} />
        </div>
        <div>
          <label htmlFor="form-image">Image Url</label>
          <input type="text" id="form-image" name="image" defaultValue={oldPostData ? oldPostData.image : ''} />
        </div>
        <div>
          <label htmlFor="form-date">Date</label>
          <input type="date" id="form-date" name="date" defaultValue={oldPostData ? oldPostData.date : ''}  />
        </div>
        <div>
          <label htmlFor="form-description">Description</label>
          <textarea
            id="form-description"
            name="description"
            cols="30"
            rows="3"
            defaultValue={oldPostData ? oldPostData.description : ''} 
          ></textarea>
        </div>

        <button className="btn">{btnText}</button>
      </Form>
    </section>
  );
};

export default PostForm;


export const action = async ({request, params}) => {

  const data = await request.formData();
  const method = request.method;

  const postData = {
    id : uuid(),
    title: data.get("title"),
    description: data.get("description"),
    image: data.get("image"),
    date: data.get("date"),
  }

  let url = "http://localhost:8080/posts";

  if(method == "PATCH"){
    const id = params.id;
    url = `http://localhost:8080/posts/${id}`;
  }

  const response = await fetch(url ,{
    method,
    headers : {
      'Content-Type' : 'application/json',
    },
    body: JSON.stringify(postData),
  });

  if(response.status === 422){
    return response;
  }

  if(!response.ok){
    throw new Error("");
  }
  return redirect("/");
  
}
