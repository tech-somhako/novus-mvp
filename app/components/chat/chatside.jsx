import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import UserImg from "@/app/assets/img/sam.png";
import ChatCardInside from "./chatcardinside";

export default function ChatSide() {
  return (
    <>
      <div>
        <div className="flex items-start gap-4 p-4">
          <div className="h-10 border bg-white w-10 p-2 text-center flex-none rounded-full">
          <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.05423 38.5953C2.26285 38.5953 0 36.3324 0 33.541V9.60377C0 4.32224 4.28153 0.0408398 9.56306 0.0407116V0.0407116C12.9477 0.0406295 14.7126 0.0406295 18.1784 0.0406295C22.9046 0.0406295 27.8605 -0.337168 30.4861 1.21132C33.1118 2.70986 33.7436 3.7027 34.7938 6.40007C35.3794 7.9039 35.6127 9.70323 35.7046 11.6244C35.8028 13.6795 35.8519 14.7071 35.5869 15.9643C35.3218 17.2214 34.7653 18.3352 33.6524 20.5628L33.5631 20.7415L31.7169 23.6684L29.5631 26.8879L26.7938 30.4001V30.4001C26.027 31.7075 24.0246 31.1636 24.0246 29.6479V17.6907C24.0246 15.293 23.8146 13.3699 23.3945 11.9213C22.9744 10.4727 22.2392 9.42374 21.1889 8.77437C20.1912 8.12501 18.7733 7.80032 16.9354 7.80032C16.0952 7.80032 15.1237 7.84313 14.1784 7.94303C13.2332 8.04293 12.64 7.94303 12.64 8.77437V23.1625V29.8359C12.64 31.7446 12.0072 33.5994 10.8406 35.1101V35.1101C10.3847 35.7005 9.85414 36.2293 9.26222 36.6833L8.13009 37.5516C7.24756 38.2284 6.16642 38.5953 5.05423 38.5953V38.5953Z" fill="url(#paint0_radial_1133_3600)"/>
<defs>
<radialGradient id="paint0_radial_1133_3600" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(2.15385 2.38205) rotate(30.6064) scale(47.2182 40.6679)">
<stop stopColor="#1B4FF9"/>
<stop offset="0.299737" stopColor="#1845D9"/>
<stop offset="0.777945" stopColor="#0A1D5C"/>
<stop offset="1" stopColor="#2393FA"/>
</radialGradient>
</defs>
</svg>

          </div>
          <div>
            <h5>Brytt</h5>
            <p className="text-gray-500">
              Located in the Bay Area, with experience in both startups and
              public companies, and have at least 3 years of experience working
              on AI.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4">
          <div className="h-10 bg-white w-10 text-center flex-none rounded-full">
            <Image src={UserImg} alt="" />
          </div>
          <div>
            <h5>Brytt</h5>
            <p className="text-gray-500">
              I&apos;ll take all that into account. Let&apos;s start with a few
              candidates, and you can tell me what you like or don&apos;t like.
              What do you think about Donna?
            </p>
          </div>
        </div>
        <div className="px-4">
          <ChatCardInside />
        </div>
        <div className="justify-items-center py-5">
          <div className="flex flex-wrap px-4 items-center gap-4">
            <Button
              asChild
              variant="secondary"
              className="rounded-3xl text-gray-500 border flex items-center"
            >
              <Link href="/pipeline">
                {" "}
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
                  </svg>
                </div>
                Yes, Shortlist
              </Link>
            </Button>

            <Button
              variant="secondary"
              className="rounded-3xl border  text-gray-500 flex items-center"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
                </svg>
              </div>
              Yes, Scout similar profiles
            </Button>
            {/* <Button
              variant="secondary"
              className="rounded-3xl border text-gray-500 flex items-center"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z"></path>
                </svg>
              </div>
              Calibrate on AI Engineer
            </Button> */}
          </div>
        </div>
      </div>
    </>
  );
}
