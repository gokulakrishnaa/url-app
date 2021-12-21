import "./Home.css";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export function Home() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const createUrl = () => {
    const newUrl = {
      url,
    };

    fetch("https://nodeurlapp.herokuapp.com/urlshort/shortner", {
      method: "POST",
      body: JSON.stringify(newUrl),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.urlSh);
        setShortUrl(data.urlSh);
      });
  };

  return (
    <div className="url-container">
      <h1>URL Shortner</h1>
      <div className="url-credentials">
        <TextField
          value={url}
          onChange={(em) => setUrl(em.target.value)}
          id="standard-basic"
          label="Url here..."
          variant="standard"
        />
        <Button onClick={createUrl} variant="contained">
          Create URL
        </Button>
        <h2>Short-Url : {shortUrl}</h2>
      </div>
    </div>
  );
}

// https://www.teahub.io/photos/full/22-221879_-net-full-stack-developer.jpg
