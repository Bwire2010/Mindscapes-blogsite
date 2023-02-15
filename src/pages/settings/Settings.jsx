import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label> Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=741&q=80"
              alt=""
            />
            <label htmlFor="fileinput">
              <i className=" settingsPPIcon fa-solid fa-user"></i>
            </label>
            <input type="file" id="fileinput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="patrobas" />
          <label>Email</label>
          <input type="email" placeholder="patrobas@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
