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
                  src={'data:image/png;base64,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'}
                  alt={"game.title"}
                  className="absolute inset-0 object-cover transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
                  src="/3d.png"
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
                  src={'data:image/png;base64,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'}
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
