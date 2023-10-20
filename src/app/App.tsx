import "./styles/index.scss";
import {IconButton} from "../shared/ui/icon-button";
import TestIcon from "shared/assets/icons/test.svg?react";

export const App = () => {
  return (
    <>
        <h1 className="text-3xl font-bold underline">
            Hello world!
        </h1>
        <h1>
            Hello world!
        </h1>
        <IconButton Icon={TestIcon}/>
    </>
  )
}
