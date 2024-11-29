"use client";
import * as React from "react";
import { Progress } from "@/components/ui/progress";
import {
  Chart02,
  Chart03,
  Chart04,
  Chart05,
  Chart06,
  Chart07,
} from "@/app/components/chat/chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function PredictionTab() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(98), 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h5 className="font-medium text-lg py-2">Skill Matrix </h5>
            <div className="flex flex-col gap-3">
              <div>
                <div className="flex justify-between">
                  <div>
                    <p> Quantum AI Development</p>
                  </div>
                  <div>
                    <p> 98%</p>
                  </div>
                </div>
                <Progress
                  className="[&>*]:bg-yellow-600 h-2"
                  value={50}
                  max={100}
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <div>
                    <p> Neural quantum interface </p>
                  </div>
                  <div>
                    <p> 98%</p>
                  </div>
                </div>
                <Progress
                  className="[&>*]:bg-red-600 h-2"
                  value={50}
                  max={100}
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <div>
                    <p> Self awareness</p>
                  </div>
                  <div>
                    <p> 98%</p>
                  </div>
                </div>
                <Progress
                  className="[&>*]:bg-blue-700 h-2"
                  value={50}
                  max={100}
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <div>
                    <p>Interstellar Data Processing </p>
                  </div>
                  <div>
                    <p> 98%</p>
                  </div>
                </div>
                <Progress
                  className="[&>*]:bg-sky-500 h-2"
                  value={50}
                  max={100}
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <div>
                    <p> Quantum AI Development</p>
                  </div>
                  <div>
                    <p> 98%</p>
                  </div>
                </div>
                <Progress
                  className="[&>*]:bg-yellow-600 h-2"
                  value={50}
                  max={100}
                />
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-medium text-lg py-2">
              Emotional Intelligence{" "}
            </h5>
            <div className="flex flex-col gap-3">
              <div>
                <div className="flex justify-between">
                  <div>
                    <p> Motivation</p>
                  </div>
                  <div>
                    <p> 98%</p>
                  </div>
                </div>
                <Progress
                  className="[&>*]:bg-red-600 h-2"
                  value={50}
                  max={100}
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <div>
                    <p> AI Ethics in space Exploration </p>
                  </div>
                  <div>
                    <p> 98%</p>
                  </div>
                </div>
                <Progress
                  className="[&>*]:bg-yellow-300 h-2"
                  value={50}
                  max={100}
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <div>
                    <p>Self regulation</p>
                  </div>
                  <div>
                    <p> 98%</p>
                  </div>
                </div>
                <Progress
                  className="[&>*]:bg-blue-600 h-2"
                  value={50}
                  max={100}
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <div>
                    <p> Quantum AI Development</p>
                  </div>
                  <div>
                    <p> 98%</p>
                  </div>
                </div>
                <Progress
                  className="[&>*]:bg-black-600 h-2"
                  value={50}
                  max={100}
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <div>
                    <p> Social skills </p>
                  </div>
                  <div>
                    <p> 98%</p>
                  </div>
                </div>
                <Progress
                  className="[&>*]:bg-gray-400 h-2"
                  value={50}
                  max={100}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pb-3">
          <h5 className="py-2 mt-3">Behavioral and cultural fit </h5>
          <div className="grid grid-cols-6 gap-3">
            <div>
              <Card>
                <CardContent className="text-center p-2">
                  <Chart02 />
                  <p className="text-gray-500 text-xs">Innovation mind set </p>
                </CardContent>
              </Card>{" "}
            </div>
            <div>
              <Card>
                <CardContent className="text-center  p-2">
                  <Chart03 />
                  <p className="text-gray-500 text-xs">Collaborative spirit </p>
                </CardContent>
              </Card>{" "}
            </div>
            <div>
              <Card>
                <CardContent className="text-center  p-2">
                  <Chart04 />
                  <p className="text-gray-500 text-xs">Ethical Ai Advocacy</p>
                </CardContent>
              </Card>{" "}
            </div>
            <div>
              <Card>
                <CardContent className="text-center  p-2">
                  <Chart05 />
                  <p className="text-gray-500 text-xs">Adaptability </p>
                </CardContent>
              </Card>{" "}
            </div>
            <div>
              <Card>
                <CardContent className="text-center  p-2">
                  <Chart06 />
                  <p className="text-gray-500 text-xs">Communication </p>
                </CardContent>
              </Card>{" "}
            </div>
            <div>
              <Card>
                <CardContent className="text-center  p-2">
                  <Chart07 />
                  <p className="text-gray-500 text-xs">Overall Fitment</p>
                </CardContent>
              </Card>{" "}
            </div>
          </div>
        </div>
        <div className="pb-3">
          <h5 className="py-3">Sentiment Analysis simulation</h5>
          <div className="grid grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div>
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24 44C12.9543 44 4 35.0456 4 24C4 12.9543 12.9543 4 24 4C35.0456 4 44 12.9543 44 24C44 35.0456 35.0456 44 24 44ZM22 30V34H26V30H22ZM26 26.7102C28.8914 25.8496 31 23.171 31 20C31 16.134 27.866 13 24 13C20.604 13 17.7727 15.4184 17.1346 18.6269L21.0576 19.4115C21.3312 18.0365 22.5446 17 24 17C25.6568 17 27 18.3431 27 20C27 21.6568 25.6568 23 24 23C22.8954 23 22 23.8954 22 25V28H26V26.7102Z"
                        fill="#697488"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-gray-800">Current Question</h5>
                    <p className="text-gray-500">
                      How would you design a neuro-link interface for direct
                      human-AI collaboration in zero-gravity environments?
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div>
                  <div className="flex justify-between">
                    <div>
                      <h5 className="text-gray-800 py-1">
                        Sentiment Analysis:
                      </h5>
                    </div>
                    <div>
                      <p className="text-green-500">Positive</p>
                    </div>
                  </div>
                  <Progress
                    className="[&>*]:bg-gray-600 h-2"
                    value={50}
                    max={100}
                  />
                </div>

                <p className="text-gray-500">
                  AI is analyzing candidate&apos;s responses in real-time,
                  evaluating quantum computing expertise, problem-solving
                  skills, and ethical considerations in AI development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
