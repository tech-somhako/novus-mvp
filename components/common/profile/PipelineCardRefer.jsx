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

export default function PipelineCardRefer() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(98), 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Card className="border-b-0 border-t-4 border-l-0 border-r-0 border-gray-600">
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
                  Jae Woo Kim
                </CardDescription>
              </div>
            </div>

            <div className="w-16">
              <Chart08 />
            </div>
          </div>
        </CardHeader>
        <CardContent className="px-3 pb-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-700 m-0">Career</p>
            </div>
            <div className="flex gap-2 items-center">
              <p className="text-gray-500 text-xs">16th Aug 2024</p>
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
        </CardContent>
      </Card>
    </>
  );
}
