import { Trash2, Pencil  } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import UserImg from "@/app/assets/img/sam.png";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
export default function IndividualProfileTab() {
  return (
    <>
      <div className="w-full mt-5">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center pb-5 justify-between">
              <div className="w-20 h-20 relative">
                <Image src={UserImg} alt=""/>
                <div className="absolute left-0 right-0 top-0">
                <div className="w-20 h-20 rounded-full bg-slate-500 bg-opacity-30 relative">
                <Button variant="link" className="w-20 h-20 text-white ">
                  <Pencil  /> 
                </Button>
                </div>
                </div>
               
              </div>
              <div className="text-end">
                <Button  className="rounded-full">
                  <Trash2 /> Remove Photo
                </Button>
                <p className="py-2 text-gray-500">Accepted file types: PNG, JPEG. Max size: 2MB</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label>Organization Name</Label>
                <Input type="text" placeholder="" />
              </div>
              <div>
                <Label>Full Name</Label>
                <Input type="text" placeholder="" />
              </div>

              <div>
                <Label>Email</Label>
                <Input type="email" placeholder="" />
              </div>
              <div>
                <Label>Phone Number</Label>
                <Input type="number" placeholder="" />
              </div>
              <div>
                <Label>Job Title</Label>
                <Input type="text" placeholder="" />
              </div>
              <div>
                <Label>Department</Label>
                <Input type="text" placeholder="" />
              </div>
            </div>

            <div className="flex items-center my-4 gap-6">
              <Button className="bg-gray-900 rounded-full">
                Update Profile{" "}
              </Button>
              <Button variant="ghost" className="rounded-full">
                Cancel{" "}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
