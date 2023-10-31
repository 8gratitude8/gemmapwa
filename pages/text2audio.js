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
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function genMusic() {
  const response = await fetch("/api/predictions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model_version: "melody",
      prompt: "piano sound",
    }),
  });
  let prediction = await response.json();
  console.log("prediction is", prediction);

  if (response.status !== 201) {
    console.log("error");
    //setError(prediction.detail);
    return;
  }

  while (prediction.status !== "succeeded" && prediction.status !== "failed") {
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
    console.log(prediction);
  }
}

export default function Audio() {
  return (
    <div>
      <Card>
        <div>
          {/* <CardImage
            className="absolute inset-0 object-cover transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
            src={game.imageUrl}
            alt={game.title}
          /> */}
        </div>
        <CardHeader>
          <CardTitle>Generate Audio with Text!</CardTitle>
        </CardHeader>
        <CardContent>
          <Button
            onClick={() => {
              genMusic();
            }}
          >
            Generate Default Audio
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
