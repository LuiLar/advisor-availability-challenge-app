'use server'

import advisorsMockData from "@/app/api/advisors_mock.json"
import { formatApiData } from "@/app/utils/formatApiData";

export const getAdvisors = async (): Promise<Advisor[]> => {
  try {
    //const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/agents`)

    //const data = await response.json() as AdvisorApiResponse[]

    return formatApiData(advisorsMockData) as Advisor[]
  } catch (error) {
    console.error(error)
    return []
  }
}
