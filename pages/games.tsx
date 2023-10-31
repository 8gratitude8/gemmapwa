import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardImage,
} from "../components/ui/card";
import React, { useState } from 'react';
import { Button } from "../components/ui/button";
export default function GenerativeAIComponent() {
  const [textInput, setTextInput] = useState('');
  const [generatedImage, setGeneratedImage] = useState('');
  // Function to handle text input changes
  const handleTextInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setTextInput(event.target.value);
  }
  // Function to generate an image based on the user's input
  const generateImage = () => {
    // Replace this with code to generate an image using your generative AI model
    const generatedImageUrl = 'URL_TO_GENERATED_IMAGE';
    setGeneratedImage(generatedImageUrl);
  }
  return (
    <><input
      type="text"
      placeholder="Enter text..."
      value={textInput}
      onChange={handleTextInputChange} /><Button onClick={generateImage}>Generate Image</Button><Card>
        <div className="relative overflow-hidden h-[200px] md:h-[400px] w-full">
          <CardImage
            className="absolute inset-0 object-cover transform group-hover:scale-110 transition-transform duration-300 ease-in-out" />
        </div>
        <CardHeader>
          <CardTitle>{"text to 3D"}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{"Image will be served here"}</CardDescription>
        </CardContent>
      </Card><div>

        <CardContent>
          {generatedImage && (
            <img src={generatedImage} alt="Generated Image" />
          )}
        </CardContent>
      </div></>
  );
}
