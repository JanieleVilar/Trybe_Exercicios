import { calculateAge } from "../utils/calculateAge";
import ModuleDetails from "./ModuleDetails";
import Title from "./Title";

function HelloWorld() {
  return (
    <>
      <Title/>
      <ModuleDetails/>
      <div>{calculateAge('30/09/2002')}</div>
    </>
  )
}

export default HelloWorld