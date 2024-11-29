import {
  Card,
  CardContent
} from "@/components/ui/card";
export default function JobCard() {
  return (
    <>
      <Card>
        <CardContent className="py-4 flex flex-col gap-2">
          <div>
            <h5 className="font-normal text-sm py-1">
              What does an AI Engineer do?
            </h5>
            <p className="text-gray-500 font-light text-sm">
              AI Engineers are involved in the end-to-end development and
              deployment of machine learning models. They translate complex data
              into AI-driven solutions that can perform autonomously in
              real-time environments. This role includes writing code, deploying
              models to production, and continuously monitoring and updating
              them as needed.
            </p>
          </div>
          <div>
            <h5 className="font-normal text-sm py-1">Key responsibilities:</h5>
            <ul className="text-gray-500 font-light text-sm">
              <li>Design and develop AI models and algorithms from scratch.</li>
              <li>
                Implement AI solutions that integrate with existing business
                systems to enhance functionality and user interaction.
              </li>
              <li>
                Manage the data flow and infrastructure for effective AI
                deployment.
              </li>
              <li>
                Collaborate across teams to align AI initiatives with
                organizational goals.
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-normal text-sm py-1">Job brief</h5>
            <p className="text-gray-500 font-light text-sm">
              We are seeking an AI Engineer to join our dynamic team and
              contribute to the development and enhancement of our AI-driven
              platforms. The ideal candidate will possess deep technical
              expertise in machine learning and artificial intelligence, with a
              proven track record of developing scalable AI solutions.
            </p>
            <p className="text-gray-500 font-light text-sm">
              Your role will involve everything from data analysis and model
              building to integration and deployment, ensuring our AI
              initiatives drive substantial business impact.
            </p>
          </div>
          <div>
            <h5 className="font-normal text-sm py-1">Responsibilities</h5>
            <ul className="list-disc text-sm text-gray-500 font-light ps-5">
              <li>Test, deploy, and maintain AI systems</li>
              <li>
                Collaborate with data scientists and other engineers to
                integrate AI into broader system architectures
              </li>
              <li>
                Stay current with AI trends and suggest improvements to existing
                systems and workflows
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
