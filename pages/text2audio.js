import Replicate from "replicate";
import { Button } from "../components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardImage,
} from "../components/ui/card";
import React, { useState, useEffect } from "react";
import { Input } from "../components/ui/input";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default function Audio() {
  const [prompt, setPrompt] = useState("default");
  const [result, setResult] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [artUrl, setArtUrl] = useState(null);
  const [genComplete, setGenComplete] = useState(false);
  const audioRef = React.createRef();

  const handleInputChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleTitleInputChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescInputChange = (event) => {
    setDescription(event.target.value);
  };

  async function genMusic() {
    console.log(prompt);
    const response = await fetch("/api/predictions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model_version: "melody",
        prompt: prompt,
      }),
    });
    let prediction = await response.json();
    console.log("prediction is", prediction);

    if (response.status !== 201) {
      console.log("error");
      //setError(prediction.detail);
      return;
    }

    while (
      prediction.status !== "succeeded" &&
      prediction.status !== "failed"
    ) {
      console.log("in the loop");

      await sleep(1000);
      const response = await fetch("/api/predictions/" + prediction.id);
      prediction = await response.json();
      if (response.status !== 200) {
        console.log("error");
        return;
      }
      console.log({ prediction });
    }

    if (prediction.status === "succeeded") {
      console.log(prediction.output);
      setArtUrl(prediction.output);
      setGenComplete(true);
      //   setResult({
      //     prompt: prompt,
      //     title: title,
      //     description: description,
      //     artUrl: artUrl,
      //   });
      console.log(
        JSON.stringify({
          prompt: prompt,
          title: title,
          description: description,
          artUrl: prediction.output,
        })
      );
      try {
        fetch("https://us-central1-gdg-demos.cloudfunctions.net/create_audio", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "no-cors",
          body: {
            title: title,
            prompt: prompt,
            artUrl: prediction.output,
          },
        }).then((response) => {
          if (!response.ok) {
            console.log("error", response);
          } else {
            //url_res = response.json();
            console.log(response.json());
          }
        });

        // if (!response.ok) {
        //   throw new Error(`HTTP error! Status: ${response.status}`);
        // }

        // const responseData = await response.json();
        // setApiResponse(responseData);
      } catch (error) {
        console.error("API Error:", error);
        // Handle the error, e.g., show an error message to the user
      }
    }
  }

  //   useEffect(() => {
  //     console.log(result);
  //     let url_res = null;
  //     if (artUrl) {
  //       try {
  //         fetch("https://us-central1-gdg-demos.cloudfunctions.net/create_audio", {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           mode: "no-cors",
  //           body: JSON.stringify(result),
  //         }).then((response) => {
  //           if (!response.ok) {
  //             console.log("error");
  //           } else {
  //             //url_res = response.json();
  //             console.log(response.json());
  //           }
  //         });

  //         // if (!response.ok) {
  //         //   throw new Error(`HTTP error! Status: ${response.status}`);
  //         // }

  //         // const responseData = await response.json();
  //         // setApiResponse(responseData);
  //       } catch (error) {
  //         console.error("API Error:", error);
  //         // Handle the error, e.g., show an error message to the user
  //       }
  //     }
  //   }, [artUrl]); // useEffect will run whenever artUrl changes

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Generate Music with Text!</CardTitle>
          <label htmlFor="promptInput">Music Title (Optional): </label>
          <Input
            type="text"
            id="promptInput"
            value={title}
            onChange={handleTitleInputChange}
            placeholder="Type your title here"
          />
          <label htmlFor="promptInput">Music Description (Optional): </label>
          <Input
            type="text"
            id="promptInput"
            value={description}
            onChange={handleDescInputChange}
            placeholder="Type your description here"
          />
        </CardHeader>

        <CardContent>
          <label htmlFor="promptInput">Enter Prompt Here: </label>
          <Input
            type="text"
            id="promptInput"
            value={prompt}
            onChange={handleInputChange}
            placeholder="Type your prompt here"
          />
          <Button
            onClick={() => {
              genMusic();
            }}
          >
            Generate!
          </Button>
        </CardContent>
      </Card>
      <Card>
        {genComplete ? <CardHeader>Music: {title}</CardHeader> : null}
        {genComplete ? (
          <CardContent>
            <audio ref={audioRef} controls>
              <source src={artUrl} />
            </audio>
          </CardContent>
        ) : null}
      </Card>
    </div>
  );
}
