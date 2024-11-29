import { CircleCheck } from "lucide-react";


export default function ProfileTab() {
  return (
    <>
      <div>
        <h5 className="font-medium text-sm py-2">About this role </h5>
        
        <p className="text-gray-500 text-xs font-normal">
          As an UI/UX Designer on Novus, you&apos;ll focus on design
          user-friendly on several platform (web, mobile, dashboard, etc) to our
          users needs. Your innovative solution will enhance the user experience
          on several platforms. Join us and let&apos;s making impact on user
          engagement at Novus.
        </p>
      </div>
      <div >
        <h5 className="font-medium text-sm py-2">Education</h5>
        <ul className="text-gray-500 text-xs font-normal ps-4 list-disc" >
          <li>
            At least 2-4 years of relevant experience in product design or
            related roles.
          </li>
          <li>
            Knowledge of design validation, either through quantitative or
            qualitative research.
          </li>
          <li>Have good knowledge using Figma and Figjam</li>
          <li>Experience with analytics tools to gather data from users.</li>
        </ul>
      </div>
      <div>
      <h5 className="font-medium text-sm py-2">internships</h5>
       <p className="text-gray-500 text-xs font-normal"> Highlights: improving retrieval efforts and RAG workflows, experiments to improve user retention,  and scaling the notifications                           
       platform</p>
      </div>
      <div>
      <h5 className="font-medium text-sm py-2 flex gap-1 items-center"> <CircleCheck  size={16} /> Senior UI/UX Designer - Google</h5>
      <p className="text-xs font-normal">(August 2022 - October 2024)</p>
       <p className="text-gray-500 text-xs font-normal">I&apos;ve led numerous projects, with complex concepts into
       visually compelling & user-friendly interfaces</p>
      </div>
    </>
  );
}
