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
import { games } from "../lib/GamesList";
  
const Games: NextPage = () => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mb-32 md:mb-64">
        <Link
            className="block group hover:border-primary hover:bg-primary-light rounded-xl"
            href={`href`}
            key={1}
          >
            <Card>
              <div className="relative overflow-hidden h-[200px] md:h-[400px] w-full">
                <CardImage
                  className="absolute inset-0 object-cover transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
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
            href={`href`}
            key={2}
          >
            <Card>
              <div className="relative overflow-hidden h-[200px] md:h-[400px] w-full">
                <CardImage
                  className="absolute inset-0 object-cover transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
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
      </div>
    );
  }

export default Games;

//text to 3d, text to audio
