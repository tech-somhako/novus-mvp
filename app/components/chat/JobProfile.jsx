import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import UserImg from "@/app/assets/img/sam.png";
import { Share2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProfileTab from "@/components/common/profile/ProfileTab";
import { Chart02, Chart08 } from "./chart";
import JobFeedback from "./JobFeedback";
import JobCommit from "./JobComments";
import PredictionTab from "@/components/common/profile/PredictionTab";
import Link from "next/link";
export default function JobProfile() {
  return (
    <>
      <div className="w-full">
        <Card className="my-4">
          <CardHeader className="bg-gray-50 rounded space-y-0">
            <div className="flex gap-3">
              <div className="w-28 h-28">
                <Image src={UserImg} alt="" />
              </div>
              <div className="flex flex-col gap-2">
                <CardTitle className="text-lg">Michael Alexandro</CardTitle>

                <CardDescription>
                  I&apos;m UI/UX Designer based in Indonesia
                </CardDescription>
                <div className="flex flex-wrap gap-3">
                  <Button asChild variant="outline" className="p-3">
                    <Link href="https://www.reddit.com/" target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M11.0526 7.8154L11.8042 4.27941C12.0339 3.19898 13.0959 2.50929 14.1764 2.73894L17.3725 3.4183C17.8351 2.90546 18.5509 2.64644 19.275 2.80035C20.3554 3.03 21.0451 4.09204 20.8155 5.17247C20.5858 6.2529 19.5238 6.94259 18.4434 6.71294C17.7193 6.55903 17.1707 6.03124 16.9567 5.3746L13.7605 4.69523L13.0943 7.82978C14.8789 7.96683 16.6522 8.56079 18.2581 9.52961C19.0892 9.06763 20.0992 8.99337 21.007 9.36091C22.1731 9.833 22.9531 10.9459 22.9991 12.2031L22.9996 12.2241C23.0151 13.2277 22.559 14.1657 21.792 14.7742C21.7899 14.8178 21.7871 14.859 21.7836 14.8971C21.7836 18.8949 17.3341 21.9267 11.9852 21.9267C6.65232 21.9267 2.27693 18.9027 2.27987 14.9738C2.27523 14.9134 2.27162 14.853 2.26905 14.7926C1.46701 14.1873 0.984722 13.2277 1.00037 12.1962C1.01955 10.9317 1.78341 9.79777 2.94804 9.30491C3.85909 8.91936 4.881 8.98299 5.72371 9.44381C7.3578 8.46653 9.15777 7.91241 11.0526 7.8154ZM20.3385 13.341C20.7466 13.1382 21.003 12.7207 21.0001 12.2656C20.9789 11.8005 20.6887 11.3897 20.2565 11.2147C19.821 11.0384 19.3226 11.1343 18.9837 11.4597L18.3991 12.0207L17.729 11.5652C16.1137 10.4672 14.2771 9.8397 12.4995 9.80134L11.493 9.80123C9.61791 9.8295 7.84136 10.4002 6.25552 11.4757L5.59246 11.9254L5.00897 11.3764C4.66501 11.0528 4.16243 10.9627 3.7275 11.1468C3.29257 11.3308 3.0073 11.7543 3 12.2265C2.99298 12.6987 3.26526 13.1307 3.69441 13.3278L4.32738 13.6186L4.27399 14.3132C4.261 14.482 4.261 14.6516 4.27693 14.8971C4.27693 17.6071 7.63313 19.9267 11.9852 19.9267C16.3561 19.9267 19.7836 17.5913 19.7865 14.8205C19.7995 14.6516 19.7995 14.482 19.7865 14.3132L19.7348 13.6411L20.3385 13.341ZM6.95075 13.4999C6.95075 12.6715 7.62232 11.9999 8.45075 11.9999C9.27918 11.9999 9.95075 12.6715 9.95075 13.4999C9.95075 14.3283 9.27918 14.9999 8.45075 14.9999C8.05292 14.9999 7.67139 14.8419 7.39009 14.5606C7.10878 14.2793 6.95075 13.8977 6.95075 13.4999ZM13.9507 13.4999C13.9507 12.6715 14.6223 11.9999 15.4507 11.9999C16.2792 11.9999 16.9507 12.6715 16.9507 13.4999C16.9507 14.3283 16.2792 14.9999 15.4507 14.9999C15.0529 14.9999 14.6714 14.8419 14.3901 14.5606C14.1088 14.2793 13.9507 13.8977 13.9507 13.4999ZM11.9665 18.6028C10.5693 18.6028 9.19993 18.2329 8.08503 17.3928C7.94659 17.2241 7.95868 16.9779 8.11299 16.8236C8.2673 16.6693 8.51349 16.6572 8.68218 16.7956C9.62697 17.4886 10.805 17.7856 11.9507 17.7856C13.0965 17.7856 14.2813 17.5112 15.235 16.8271C15.3473 16.7176 15.5095 16.6763 15.6604 16.7188C15.8114 16.7613 15.9282 16.8811 15.9669 17.0331C16.0055 17.1851 15.9517 17.3346 15.8479 17.4556C15.1638 18.2531 13.3636 18.6028 11.9665 18.6028Z"></path>
                      </svg>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="p-3">
                    <Link href="https://stackoverflow.com/" target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M18.001 20.0026V14.6693H20.001V22.0026H4.00098V14.6693H6.00098V20.0026H18.001ZM7.59977 14.7359L7.913 12.7566L16.75 14.456L16.6367 16.0421L7.59977 14.7359ZM8.79937 10.2041L9.53245 8.60463L17.5298 12.3367L16.7967 13.9362L8.79937 10.2041ZM11.0653 6.27208L12.1982 4.9392L18.9959 10.604L17.863 11.9368L11.0653 6.27208ZM15.3972 2.14014L20.6621 9.20443L19.2625 10.2707L13.9976 3.20645L15.3972 2.14014ZM7.33319 18.6679V16.6686H16.6634V18.6679H7.33319Z"></path>
                      </svg>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="p-3">
                    <Link href="https://www.linkedin.com/" target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path>
                      </svg>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="p-3">
                    <Link href="https://github.com/" target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
                      </svg>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="p-3">
                    <Link href="https://x.com/" target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.6874 3.0625L12.6907 8.77425L8.37045 3.0625H2.11328L9.58961 12.8387L2.50378 20.9375H5.53795L11.0068 14.6886L15.7863 20.9375H21.8885L14.095 10.6342L20.7198 3.0625H17.6874ZM16.6232 19.1225L5.65436 4.78217H7.45745L18.3034 19.1225H16.6232Z"></path>
                      </svg>
                    </Link>
                  </Button>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="outline" className="text-gray-500">
                    Public Company
                  </Badge>
                  <Badge variant="outline" className="text-gray-500">
                    AI Experience
                  </Badge>
                  <Badge variant="outline" className="text-gray-500">
                    B2B Saas
                  </Badge>
                  <Badge variant="outline" className="text-gray-500">
                    Public Company
                  </Badge>
                  <Badge variant="outline" className="text-gray-500">
                    UI , UX developer
                  </Badge>
                </div>

                <p className="text-gray-500">
                  Pioneering quantum AI architect with a focus on neural network
                  optimization and quantum machine learning. Experienced in
                  developing cutting-edge solutions for interstellar data
                  processing and AI-driven space exploration.
                </p>
              </div>
              <div className="flex flex-col gap-3  items-end">
                <Button variant="outline" className="p-3">
                  <Share2 />
                </Button>

                <div className="w-16">
                  <Chart08 />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="py-4">
            <Tabs defaultValue="profile">
              <TabsList className="gap-3 bg-transparent">
                <TabsTrigger
                  value="profile"
                  className="data-[state=active]:bg-gray-900 data-[state=active]:text-white rounded-full data-[state=active]:border-gray-900 border border-gray-100"
                >
                  Profile
                </TabsTrigger>
                <TabsTrigger
                  value="prediction"
                  className="data-[state=active]:bg-gray-900 data-[state=active]:text-white data-[state=active]:border-gray-900 rounded-full border border-gray-100"
                >
                  Prediction
                </TabsTrigger>
                <TabsTrigger
                  value="feedback"
                  className="data-[state=active]:bg-gray-900 data-[state=active]:text-white data-[state=active]:border-gray-900 rounded-full border border-gray-100"
                >
                  Feedback
                </TabsTrigger>
                <TabsTrigger
                  value="comments"
                  className="data-[state=active]:bg-gray-900 data-[state=active]:text-white data-[state=active]:border-gray-900 rounded-full border border-gray-100"
                >
                  Comments
                </TabsTrigger>
              </TabsList>
              <TabsContent value="profile">
                <ProfileTab />
              </TabsContent>
              <TabsContent value="prediction">
                <PredictionTab />
              </TabsContent>
              <TabsContent value="feedback">
                <JobFeedback />
              </TabsContent>
              <TabsContent value="comments">
                <JobCommit />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
