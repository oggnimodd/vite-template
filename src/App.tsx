import { Button } from "components";
import { priceAtom } from "atoms";
import { useAtom } from "jotai";

const App = () => {
  const [price, setPrice] = useAtom(priceAtom);

  return (
    <div className="bg-black min-h-screen w-full flex items-center justify-center flex-col gap-3">
      <span className="text-white text-2xl font-bold">{price}</span>
      <div className="flex gap-x-3">
        <Button onClick={() => setPrice((prev) => prev + 1)}> Count Up</Button>
        <Button onClick={() => setPrice((prev) => prev - 1)}>
          {" "}
          Count Down
        </Button>
      </div>
    </div>
  );
};

export default App;
