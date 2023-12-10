import { Button, Typography } from "antd";
import { useCountStore } from "stores";

const { Text } = Typography;

const Counter = () => {
  const count = useCountStore((state) => state.count);
  const { increment, decrement } = useCountStore();

  return (
    <div className="w-full flex items-center justify-center flex-col gap-3">
      <Text className="text-2xl font-bold">{count}</Text>
      <div className="flex gap-x-3">
        <Button type="primary" onClick={decrement}>
          {" "}
          Count Down
        </Button>
        <Button type="primary" onClick={increment}>
          {" "}
          Count Up
        </Button>
      </div>
    </div>
  );
};

export default Counter;
