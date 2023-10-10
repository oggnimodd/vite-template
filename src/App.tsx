import { Button } from "@nextui-org/react";
import { useCountStore } from "stores";

const App = () => {
  const count = useCountStore((state) => state.count);
  const { increment, decrement } = useCountStore();

  return (
    <div className="bg-black min-h-screen w-full flex items-center justify-center flex-col gap-3">
      <span className="text-white text-2xl font-bold">{count}</span>
      <div className="flex gap-x-3">
        <Button color="primary" onPress={decrement}>
          {" "}
          Count Down
        </Button>
        <Button color="primary" onPress={increment}>
          {" "}
          Count Up
        </Button>
      </div>
    </div>
  );
};

export default App;
