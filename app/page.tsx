import { getAdvisors } from '@/app/api/actions'
import AdvisorList from "@/app/Components/AdvisorList";

export default async function Home() {
  const advisors: Advisor[] = await getAdvisors();

  return (
    <main className="w-10/12 md:mt-20 md:w-1/2 mx-auto">
      <AdvisorList advisors={advisors} />
    </main>
  );
}
