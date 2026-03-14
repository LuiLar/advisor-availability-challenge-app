import { getAdvisors } from '@/app/api/actions'
import AdvisorList from "@/app/Components/AdvisorList";

export default async function Home() {
  const advisors: Advisor[] = await getAdvisors();

  return (
    <main className="mt-20 w-1/2 ml-auto mr-auto">
      <AdvisorList advisors={advisors} />
    </main>
  );
}
