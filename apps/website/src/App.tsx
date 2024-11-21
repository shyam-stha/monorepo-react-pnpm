import "./index.css";
import { isEmptyObject } from "@shared/utils";
import { Button } from "@shared/ui";
import { Ambulance } from "@shared/icons/expressive";

function App() {
  const isEmpty = isEmptyObject({ object: "Object", isEmptyObject: false });

  console.log({ isEmpty });

  return (
    <div>
      <Button colorSchema="hey" onClick={() => console.log("You did it")}>
        Click Here
      </Button>

      <div className="container">
        <Ambulance />
      </div>
    </div>
  );
}

export default App;
