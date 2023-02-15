import "./write.css";

export default function Write() {
  return (
    <div className="write">
        <img 
        src="https://cdn.pixabay.com/photo/2014/10/05/06/05/rapeseeds-474558_960_720.jpg" 
        alt="" 
        className="writeImg"
        />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Write a story ..."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
