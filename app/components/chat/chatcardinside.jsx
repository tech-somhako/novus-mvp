import Image from "next/image";
import { Button } from "@/components/ui/button";
import UserImg from "@/app/assets/img/sam.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function ChatCardInside() {
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
                  Jacob Jones
                </CardTitle>
                <CardDescription className="text-xs space-y-0">
                  Tokyo, Japan
                </CardDescription>
              </div>
            </div>

            <div>
              <Button variant="ghost" className="hover:bg-transparent p-0">
                <Link href="/jobcard">
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
                </Link>
              
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="py-2">
            <Badge variant="outline" className="font-normal text-gray-500">
              Public Company
            </Badge>{" "}
            <Badge variant="outline" className="font-normal text-gray-500">
              AI Experience
            </Badge>{" "}
            <Badge variant="outline" className="font-normal text-gray-500">
              B2B Saas
            </Badge>{" "}
            <Badge variant="outline" className="font-normal text-gray-500">
              Full Stack developer
            </Badge>
          </div>

          <h5 className="text-sm">
            6 years of full-time professional experience
          </h5>
          <ul className="text-sm text-gray-500 list-disc ps-4">
            <li>Currently: Software Engineer - AI at Asana for 2 years</li>
            <li>
              {" "}
              Previously: Sr. AI Software Engineer at Salesforce for 3 years,
              teaching assistant roles at U of I, and numerous{" "}
            </li>
          </ul>
          <h5 className="text-sm">internships.</h5>
          <ul className="text-sm text-gray-500 list-disc ps-4">
            <li>Currently: Software Engineer - AI at Asana for 2 years</li>
            <li>
              {" "}
              Highlights: improving retrieval efforts and RAG workflows,
              experiments to improve user retention, and scaling the
              notifications platform{" "}
            </li>
          </ul>
        </CardContent>
      </Card>
    </>
  );
}
