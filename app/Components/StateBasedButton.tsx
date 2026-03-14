import { JSX, useEffect, useEffectEvent, useState } from "react";
import CallIcon from "@mui/icons-material/Call";
import ChatIcon from "@mui/icons-material/Chat";
import clsx from "clsx";
import { CommType } from "@/app/Components/CommsActions";

type StateBasedButtonProps = {
  isDisabled?: boolean;
  type: CommType;
}

const StateBasedButton = ({ isDisabled, type }: StateBasedButtonProps): JSX.Element => {
  const [ isHidrated, setIsHidrated ] = useState(false);

  const updateHidration = useEffectEvent((value: boolean) => setIsHidrated(value))

  useEffect(() => {
    updateHidration(true);
  }, [])

  if (!isHidrated) return <></>

  return (
    <button
      className={clsx(
        "flex items-center gap-2 px-6 py-1 rounded-sm",
        isDisabled ? "bg-gray-400" : "bg-teal-600 cursor-pointer"
      )}
      disabled={isDisabled}
    >
      {type === CommType.CALL && <><CallIcon /><span>Call {`${isDisabled ? 'Later' : 'Now'}`}</span></>}
      {type === CommType.CHAT && <><ChatIcon /><span>Chat {`${isDisabled ? 'Later' : 'Now'}`}</span></>}
    </button>
  )
}

export default StateBasedButton
