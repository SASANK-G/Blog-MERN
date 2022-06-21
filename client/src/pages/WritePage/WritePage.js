import "./WritePage.css";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import React from "react";
import API from "../../api";

export default function WritePage() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      //to prevent user from uploading same image
      //differientiate using date
      const filename = Date.now() + file.name;
      //according to api we require filename and file
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await API.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await API.post("/posts", newPost);
      //after uploading post navigate to post page with id
      window.location.replace("/post/" + res.data._id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="writePage">
      {file && (
        <img
          className="writeImg"
          //this will create a url of the file so that we can see uploaded file
          src={URL.createObjectURL(file)}
          alt=""
        />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <BsFileEarmarkPlus className="writeIcon " />
          </label>
          <input
            id="fileInput"
            type="file"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
