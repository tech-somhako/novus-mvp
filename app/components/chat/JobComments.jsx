import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import UserImg from "@/app/assets/img/sam.png";
import Slackicon from "@/app/assets/img/slack_icon.png";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { ArrowUpRight, ArrowUp } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
export default function JobCommit() {
  return (
    <>
      <h4 className="text-lg py-3">Applicant Comments</h4>
      <div className="flex flex-col gap-3">
        <Card>
          <CardHeader className="rounded py-3 space-y-0">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8">
                  <Image src={UserImg} alt="" />
                </div>
                <div className="flex flex-col gap-2">
                  <CardTitle className="text-sm font-normal">
                    Young Alaska
                  </CardTitle>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Badge
                    variant="outline"
                    className="text-gray-500  border-0 font-normal"
                  >
                    10-23-2023,
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-gray-500 border-0 font-normal"
                  >
                    12:31:40 PM
                  </Badge>
                </div>
              </div>
              <div>
                <Badge
                  variant=""
                  className="font-medium text-sm text-gray-500 hover:bg-transparent px-0 flex gap-2 bg-transparent"
                >
                  <Image src={Slackicon} className="w-5 h-5" alt="" />{" "}
                  DataScientist
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-gray-500">
                  <span className="font-medium text-gray-600">@dipshandc</span>{" "}
                  Can tell me important points to consider him.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" className="h-auto text-gray-500">
                  Resume URL <ArrowUpRight />
                </Button>
                <Button variant="outline" className="h-auto text-gray-500">
                  Job Position <ArrowUpRight />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="rounded py-3 space-y-0">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8">
                  <Image src={UserImg} alt="" />
                </div>
                <div className="flex flex-col gap-2">
                  <CardTitle className="text-sm font-normal">
                    Young Alaska
                  </CardTitle>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Badge
                    variant="outline"
                    className="text-gray-500  border-0 font-normal"
                  >
                    10-23-2023,
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-gray-500 border-0 font-normal"
                  >
                    12:31:40 PM
                  </Badge>
                </div>
              </div>
              <div>
                <Badge
                  variant=""
                  className="font-medium text-sm text-gray-500 hover:bg-transparent px-0 flex gap-2 bg-transparent"
                >
                  <Image src={Slackicon} className="w-5 h-5" alt="" />{" "}
                  DataScientist
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-gray-500">
                  <span className="font-medium text-gray-600">@dipshandc</span>{" "}
                  Can tell me important points to consider him.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="relative">
          <Select>
            <SelectTrigger className="w-[150px] rounded-full absolute bottom-2 left-2">
              <SelectValue placeholder="Slack" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Slack</SelectItem>
              <SelectItem value="dark">Data Science</SelectItem>
              <SelectItem value="dark">Hiring</SelectItem>
            </SelectContent>
          </Select>
          <Input
            type="text"
            className="rounded-full ps-44 py-4 h-auto bg-gray-50"
            placeholder="Type '@' to mention a user...."
          />
          <Button asChild className="rounded-full w-8 h-8 absolute bottom-3 right-2">
            <Link href="https://slack.com/" target="_blank">
            <ArrowUp />
            </Link>
          </Button>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="terms" className="border-gray-500" />
          <label
            htmlFor="terms"
            className="text-sm text-gray-500 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Tick here to send it with resume and job position
          </label>
        </div>
      </div>
    </>
  );
}
