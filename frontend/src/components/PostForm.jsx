const PostForm = () => {
  return (
    <section className="form-section">
      <p>Create your post Now !</p>
      <form action="">
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
        
      </form>
    </section>
  );
};

export default PostForm;
