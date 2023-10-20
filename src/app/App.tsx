import "./styles/index.scss";
import {IconButton} from "../shared/ui/icon-button";
import TestIcon from "shared/assets/icons/test.svg?react";
import {TextButton} from "../shared/ui/text-button";

export const App = () => {
  return (
    <>

        <IconButton bgColor="#000000" onClick={() => console.log("ывпывпывп")} Icon={TestIcon}/>
        <TextButton color="#ffffff" bgColor="#000000" styled={"filled"}>-10см хую серёжи</TextButton>
        <TextButton width="500px" padding="20px" color="#333333" bgColor="#000000" styled={"outline"}>-20см хую серёжи</TextButton>
    </>
  )
}
