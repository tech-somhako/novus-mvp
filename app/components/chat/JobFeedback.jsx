import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import UserImg from "@/app/assets/img/sam.png";
import { ArrowUp } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function JobProfile() {
  return (
    <>
      <h4 className="text-lg py-3">Applicant Feedback</h4>
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
                  variant="destructive"
                  className=" border border-red-400 font-normal"
                >
                  Not Shortlisted
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="text-gray-500">
              How would you design a neuro-link interface for direct human-AI
              collaboration in zero-gravity environments?
            </p>
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
                  variant="destructive"
                  className=" border border-green-400 bg-green-500 font-normal"
                >
                  Shortlisted
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="text-gray-500">
              How would you design a neuro-link interface for direct human-AI
              collaboration in zero-gravity environments?
            </p>
          </CardContent>
        </Card>
        <div className="relative">
          <Select>
            <SelectTrigger className="w-[150px] rounded-full absolute bottom-2 left-2">
              <SelectValue placeholder="Shortlisted" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Shortlisted</SelectItem>
              <SelectItem value="dark">Not Shortlisted</SelectItem>
            </SelectContent>
          </Select>
          <Input
            type="text"
            className="rounded-full ps-44 py-4 h-auto bg-gray-50"
            placeholder="Type '@' to mention a user...."
          />
          <Button className="rounded-full w-8 h-8 absolute bottom-3 right-2">
            <ArrowUp />
          </Button>
        </div>

      
      </div>
    </>
  );
}
