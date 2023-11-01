import { NextPage } from "next";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardImage,
} from "../components/ui/card";
import Link from "next/link";

const Games: NextPage = () => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mb-32 md:mb-64">
        <Link
            className="block group hover:border-primary hover:bg-primary-light rounded-xl"
            href={`https://gratitude.8thwall.app/dallegen/`}
            key={1}
          >
            <Card>
              <div className="relative overflow-hidden h-[200px] md:h-[400px] w-full">
                <CardImage
                  alt={"game.title"}
                  className="absolute inset-0 object-cover transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
                  src={"/3d.png"}
                />
              </div>
              <CardHeader>
                <CardTitle>{"text to 3D"}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{"Image generation"}</CardDescription>
                
              </CardContent>
              
            </Card>
          </Link>
          <Link
            className="block group hover:border-primary hover:bg-primary-light rounded-xl"
            href={`/text2audio`}
            key={2}
          >
            <Card>
              <div className="relative overflow-hidden h-[200px] md:h-[400px] w-full">
                <CardImage
                  className="absolute inset-0 object-cover transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
                  src="/music.png"
                />
              </div>
              <CardHeader>
                <CardTitle>{"text to audio"}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{"audio generation"}</CardDescription>
              </CardContent>
            </Card>
          </Link>
          <Link
            className="block group hover:border-primary hover:bg-primary-light rounded-xl"
            href={`https://gratitude.8thwall.app/weaviate/`}
            key={1}
          >
            <Card>
              <div className="relative overflow-hidden h-[200px] md:h-[400px] w-full">
                <CardImage
                  src={'data:image/jpeg;base64,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'}
                  alt={"game.title"}
                  className="absolute inset-0 object-cover transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
                />
              </div>
              <CardHeader>
                <CardTitle>{"Extras"}</CardTitle>
              </CardHeader>
              
            </Card>
          </Link>
      </div>
    );
  }

export default Games;
