'use client'

import { useCallback, useEffect, useEffectEvent, useState } from "react";
import StateBasedButton from "@/app/Components/StateBasedButton";
import { formatAvailabilityApiData } from "@/app/utils/formatApiData";

export enum CommType {
  CALL = "CALL",
  CHAT = "CHAT"
}

const AVAILABILITY_INTERVAL: number = parseInt(process.env.NEXT_PUBLIC_AVAILABILITY_INTERVAL || "30000");

const CommsActions = () => {
  const [ availibility, setAvailibility ] = useState<Availability>({ callable: false, chatable: false });

  const fetchAvailability = useCallback(
    async (): Promise<void> => {
      try {
        //const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/advisor-availability`)

        //const data = await response.json() as AvailabilityApiResponse

        setAvailibility(formatAvailabilityApiData({
          callable: (Math.random() < 0.5).toString(),
          chatable: (Math.random() < 0.5).toString(),
        }))
      } catch (error) {
        console.error(error)
      }
    }, [])

  const updateInitialAvailibility = useEffectEvent(() => setAvailibility({
    callable: (Math.random() < 0.5),
    chatable: (Math.random() < 0.5),
  }))

  useEffect(() => {
    // Set a random initial value on component mount
    updateInitialAvailibility();

    const intervalId = setInterval(fetchAvailability, AVAILABILITY_INTERVAL)

    return () => clearInterval(intervalId);
  }, [ fetchAvailability ])

  return (
    <>
      <StateBasedButton isDisabled={!availibility.callable} type={CommType.CALL} />
      <StateBasedButton isDisabled={!availibility.chatable} type={CommType.CHAT} />
    </>
  )
}

export default CommsActions;
