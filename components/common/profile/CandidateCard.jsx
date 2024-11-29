"use client";
import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import UserImg from "@/app/assets/img/sam.png";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Chart07, Chart08 } from "@/app/components/chat/chart";
import { Dot } from "lucide-react";

export default function Pipeline() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(98), 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Card>
        <CardHeader className="space-y-0 py-3">
          <div className="flex gap-2 justify-between items-center">
            <div className="flex gap-2">
              <div className="h-10  bg-white w-10 text-center flex-none rounded-full">
                <Image src={UserImg} alt="" />
              </div>
              <div>
                <CardTitle className="text-sm font-medium">
                  Lead Ui Designer
                </CardTitle>
                <CardDescription className="text-xs space-y-0">
                  Tokyo, Japan
                </CardDescription>
              </div>
            </div>

            <div>
              <Button variant="ghost" className="hover:bg-transparent p-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.8333 9.16677L17.6667 2.33344"
                    stroke="#697488"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.3333 5.66681V1.66681H14.3333"
                    stroke="#697488"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.16666 1.66681H7.5C3.33333 1.66681 1.66666 3.33348 1.66666 7.50014V12.5001C1.66666 16.6668 3.33333 18.3335 7.5 18.3335H12.5C16.6667 18.3335 18.3333 16.6668 18.3333 12.5001V10.8335"
                    stroke="#697488"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="px-3 pb-3">
          <div className="flex justify-between">
            <div>
              <div className="py-1">
                <Badge
                  variant="outline"
                  className="font-normal bg-slate-50 rounded text-gray-500"
                >
                  Fulltime
                </Badge>{" "}
                <Badge
                  variant="outline"
                  className="font-normal bg-slate-50 rounded text-gray-500"
                >
                  Onsite
                </Badge>{" "}
                <Badge
                  variant="outline"
                  className="font-normal bg-slate-50 rounded  text-gray-500"
                >
                  3-5 Years
                </Badge>{" "}
              </div>
              <div className="py-1 items-center flex">
                <Badge
                  variant="outline"
                  className="font-normal bg-transparent px-0 border-0 rounded text-gray-500"
                >
                  2 day ago
                </Badge>{" "}
                <Badge
                  variant="outline"
                  className="font-normal  bg-transparent px-0 border-0 rounded text-gray-500"
                >
                 <Dot /> 521 Apllicants
                </Badge>{" "}
              </div>
            </div>
            <div className="w-16">
            <Chart08 />
            </div>

          
          </div>

      
        </CardContent>
      </Card>
    </>
  );
}
