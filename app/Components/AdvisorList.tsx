import { JSX } from "react";
import Card from "@/app/Components/Card";

type AdvisorListProps = {
  advisors: Advisor[];
}

const AdvisorList = ({ advisors }: AdvisorListProps): JSX.Element => (
  <div className="flex flex-col">
    {advisors.map(adv => <Card key={adv.id} advisor={adv} />)}
  </div>
)

export default AdvisorList
