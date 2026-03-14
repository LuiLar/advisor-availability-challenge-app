import Image from "next/image";
import { JSX, Suspense } from "react";
import { formatPrice } from "@/app/utils/formatPrice";
import CommsActions from "@/app/Components/CommsActions";

type CardProps = {
  advisor: Advisor;
}

const Card = ({ advisor }: CardProps): JSX.Element => {
  const { fullName, imageUrl, price } = advisor;

  return (
    <div className="flex flex-col md:flex-row justify-between gap-7 py-7 [&:nth-child(n+1):nth-last-child(n+1)]:border-b [&:nth-child(n+1):nth-last-child(n+1)]:border-b-gray-400">
      <div className="flex gap-7">
        <Image
          width={120}
          height={120}
          className="rounded-full aspect-square object-cover"
          src={imageUrl}
          alt={fullName}
        />

        <p className="flex-1 text-teal-600 text-xl">{fullName}</p>
      </div>

      <div className="flex flex-col gap-2 justify-end">
        <p className="text-lg">
          <strong>{formatPrice(price)}</strong>
          <small>/min</small>
        </p>

        <Suspense>
          <CommsActions />
        </Suspense>
      </div>
    </div>
  )
}

export default Card;
