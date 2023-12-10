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
      <div className="flex gap-x-2 mt-4">
        <div className="w-10 h-10 bg-blue-6 rounded-xl" />
        <div className="w-10 h-10 bg-purple-6 rounded-xl" />
        <div className="w-10 h-10 bg-magenta-6 rounded-xl" />
        <div className="w-10 h-10 bg-green-6 rounded-xl" />
        <div className="w-10 h-10 bg-yellow-6 rounded-xl" />
      </div>
    </div>
  );
};

export default Counter;
