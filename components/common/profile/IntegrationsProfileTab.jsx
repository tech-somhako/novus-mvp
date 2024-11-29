import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Googleicon from "@/app/assets/img/google-icon.png";
import Slackicon from "@/app/assets/img/slack-icon.png";
import Outlookicon from "@/app/assets/img/linked-icon.png";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
export default function IntegrationsProfileTab() {
  return (
    <>
      <h5 className="mb-4 text-lg">Integrations</h5>
      <div className="w-full">
        <Card className=" w-full">
          <CardContent className="flex gap-6 pt-6 flex-col">
            <div className="flex items-center justify-between gap-6">
              <div className="flex gap-4">
                <div className="h-12  bg-white w-12 text-center flex-none rounded-full">
                  <Image src={Googleicon} alt="" />
                </div>
                <div>
                  <h5 className="text-lg">Google Calender</h5>
                  <p className=" text-gray-500">
                    Sync your Google Calendar with your account
                  </p>
                </div>
              </div>

              <div>
                <Button
                  variant="outline"
                  className="rounded-full text-gray-500"
                >
                  Connect to Google Calender
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between gap-6">
              <div className="flex gap-4">
                <div className="h-12  bg-white w-12 text-center flex-none rounded-full">
                  <Image src={Outlookicon} alt="" />
                </div>
                <div>
                  <h5 className="text-lg">Outlook Calender</h5>
                  <p className=" text-gray-500">
                    Sync your Outlook Calendar with your account
                  </p>
                </div>
              </div>

              <div>
                <Button
                  variant="outline"
                  className="rounded-full text-gray-500"
                >
                  Connect to Outlook Calender
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between gap-6">
              <div className="flex gap-4">
                <div className="h-12  bg-white w-12 text-center flex-none rounded-full">
                  <Image src={Slackicon} alt="" />
                </div>
                <div>
                  <h5 className="text-lg">Slack</h5>
                  <p className=" text-gray-500">
                    Add Somhako to your your Slack workspace
                  </p>
                </div>
              </div>

              <div>
                <Button
                  variant="outline"
                  className="rounded-full text-gray-500"
                >
                  Connect to Slack
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <h5 className="my-4 text-lg">Your availability</h5>
      <div className="w-full">
        <Card >
          <CardContent className="flex gap-6 pt-6 flex-col">
            <div className="flex items-center gap-6">
              <div className="flex gap-4">
                <div className="flex items-center w-36 space-x-2">
                  <Switch id="airplane-mode" />
                  <Label htmlFor="airplane-mode">Monday</Label>
                </div>
                <div className="flex gap-4">
                  <div>
                    <Label className="absolute ps-3 pt-1 text-xs text-gray-500">OPEN AT</Label>
                    <Input type="time" placeholder="Email" className="h-auto pt-5" />
                  </div>
                 
                  <div>
                    <Label className="absolute ps-3 pt-1 text-xs text-gray-500">OPEN AT</Label>
                    <Input type="time" placeholder="Email" className="h-auto pt-5" />
                  </div>
                </div>
              </div>

              <div>
                <Button
                  variant="ghost"
                  className="hover:bg-transparent p-0 text-gray-500"
                >
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.95996 12H16.96"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.96 16V8"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.95996 22H15.96C20.96 22 22.96 20 22.96 15V9C22.96 4 20.96 2 15.96 2H9.95996C4.95996 2 2.95996 4 2.95996 9V15C2.95996 20 4.95996 22 9.95996 22Z"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex gap-4">
                <div className="flex items-center w-36 space-x-2">
                  <Switch id="airplane-mode" />
                  <Label htmlFor="airplane-mode">Tuesday</Label>
                </div>
                <div className="flex gap-4">
                  <div>
                    <Label className="absolute ps-3 pt-1 text-xs text-gray-500">OPEN AT</Label>
                    <Input type="time" placeholder="Email" className="h-auto pt-5" />
                  </div>
                 
                  <div>
                    <Label className="absolute ps-3 pt-1 text-xs text-gray-500">OPEN AT</Label>
                    <Input type="time" placeholder="Email" className="h-auto pt-5" />
                  </div>
                </div>
              </div>

              <div>
                <Button
                  variant="ghost"
                  className="hover:bg-transparent p-0 text-gray-500"
                >
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.95996 12H16.96"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.96 16V8"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.95996 22H15.96C20.96 22 22.96 20 22.96 15V9C22.96 4 20.96 2 15.96 2H9.95996C4.95996 2 2.95996 4 2.95996 9V15C2.95996 20 4.95996 22 9.95996 22Z"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex gap-4">
                <div className="flex items-center w-36 space-x-2">
                  <Switch id="airplane-mode" />
                  <Label htmlFor="airplane-mode">Wednesday</Label>
                </div>
                <div className="flex gap-4">
                  <div>
                    <Label className="absolute ps-3 pt-1 text-xs text-gray-500">OPEN AT</Label>
                    <Input type="time" placeholder="Email" className="h-auto pt-5" />
                  </div>
                 
                  <div>
                    <Label className="absolute ps-3 pt-1 text-xs text-gray-500">OPEN AT</Label>
                    <Input type="time" placeholder="Email" className="h-auto pt-5" />
                  </div>
                </div>
              </div>

              <div>
                <Button
                  variant="ghost"
                  className="hover:bg-transparent p-0 text-gray-500"
                >
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.95996 12H16.96"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.96 16V8"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.95996 22H15.96C20.96 22 22.96 20 22.96 15V9C22.96 4 20.96 2 15.96 2H9.95996C4.95996 2 2.95996 4 2.95996 9V15C2.95996 20 4.95996 22 9.95996 22Z"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex gap-4">
                <div className="flex items-center w-36 space-x-2">
                  <Switch id="airplane-mode" />
                  <Label htmlFor="airplane-mode">Thursday</Label>
                </div>
                <div className="flex gap-4">
                  <div>
                    <Label className="absolute ps-3 pt-1 text-xs text-gray-500">OPEN AT</Label>
                    <Input type="time" placeholder="Email" className="h-auto pt-5" />
                  </div>
                 
                  <div>
                    <Label className="absolute ps-3 pt-1 text-xs text-gray-500">OPEN AT</Label>
                    <Input type="time" placeholder="Email" className="h-auto pt-5" />
                  </div>
                </div>
              </div>

              <div>
                <Button
                  variant="ghost"
                  className="hover:bg-transparent p-0 text-gray-500"
                >
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.95996 12H16.96"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.96 16V8"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.95996 22H15.96C20.96 22 22.96 20 22.96 15V9C22.96 4 20.96 2 15.96 2H9.95996C4.95996 2 2.95996 4 2.95996 9V15C2.95996 20 4.95996 22 9.95996 22Z"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex gap-4">
                <div className="flex items-center w-36 space-x-2">
                  <Switch id="airplane-mode" />
                  <Label htmlFor="airplane-mode">Friday</Label>
                </div>
                <div className="flex gap-4">
                  <div>
                    <Label className="absolute ps-3 pt-1 text-xs text-gray-500">OPEN AT</Label>
                    <Input type="time" placeholder="Email" className="h-auto pt-5" />
                  </div>
                 
                  <div>
                    <Label className="absolute ps-3 pt-1 text-xs text-gray-500">OPEN AT</Label>
                    <Input type="time" placeholder="Email" className="h-auto pt-5" />
                  </div>
                </div>
              </div>

              <div>
                <Button
                  variant="ghost"
                  className="hover:bg-transparent p-0 text-gray-500"
                >
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.95996 12H16.96"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.96 16V8"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.95996 22H15.96C20.96 22 22.96 20 22.96 15V9C22.96 4 20.96 2 15.96 2H9.95996C4.95996 2 2.95996 4 2.95996 9V15C2.95996 20 4.95996 22 9.95996 22Z"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex gap-4">
                <div className="flex items-center w-36 space-x-2">
                  <Switch id="airplane-mode" />
                  <Label htmlFor="airplane-mode">Saturday</Label>
                </div>
                <div className="flex gap-4">
                  <div>
                    <Label className="absolute ps-3 pt-1 text-xs text-gray-500">OPEN AT</Label>
                    <Input type="time" placeholder="Email" className="h-auto pt-5" />
                  </div>
                 
                  <div>
                    <Label className="absolute ps-3 pt-1 text-xs text-gray-500">OPEN AT</Label>
                    <Input type="time" placeholder="Email" className="h-auto pt-5" />
                  </div>
                </div>
              </div>

              <div>
                <Button
                  variant="ghost"
                  className="hover:bg-transparent p-0 text-gray-500"
                >
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.95996 12H16.96"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.96 16V8"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.95996 22H15.96C20.96 22 22.96 20 22.96 15V9C22.96 4 20.96 2 15.96 2H9.95996C4.95996 2 2.95996 4 2.95996 9V15C2.95996 20 4.95996 22 9.95996 22Z"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex gap-4">
                <div className="flex items-center w-36 space-x-2">
                  <Switch id="airplane-mode" />
                  <Label htmlFor="airplane-mode">Sunday</Label>
                </div>
                <div className="flex gap-4">
                  <div>
                    <Label className="absolute ps-3 pt-1 text-xs text-gray-500">OPEN AT</Label>
                    <Input type="time" placeholder="Email" className="h-auto pt-5" />
                  </div>
                 
                  <div>
                    <Label className="absolute ps-3 pt-1 text-xs text-gray-500">OPEN AT</Label>
                    <Input type="time" placeholder="Email" className="h-auto pt-5" />
                  </div>
                </div>
              </div>

              <div>
                <Button
                  variant="ghost"
                  className="hover:bg-transparent p-0 text-gray-500"
                >
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.95996 12H16.96"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.96 16V8"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.95996 22H15.96C20.96 22 22.96 20 22.96 15V9C22.96 4 20.96 2 15.96 2H9.95996C4.95996 2 2.95996 4 2.95996 9V15C2.95996 20 4.95996 22 9.95996 22Z"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-6">
            <Button className="bg-gray-900 rounded-full">Update Availability</Button>
            <Button variant="ghost" className="rounded-full">Cancel Availability</Button>
            </div>
           

          </CardContent>
        </Card>
      </div>
    </>
  );
}
