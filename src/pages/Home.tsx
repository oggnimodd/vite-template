import { Counter } from "components";
import { Button, Typography } from "antd";
import { useDarkMode } from "hooks";
import { Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { useViewportSize } from "@mantine/hooks";

const CheckBreakPoints = () => {
  const { width } = useViewportSize();

  return (
    <div>
      <div className="w-10 h-10 bg-red-6 xs:bg-blue-6 sm:bg-green-6 md:bg-yellow-6 lg:bg-purple-6 xl:bg-magenta-6 xxl:bg-blue-6" />
      <Typography.Text>{width}</Typography.Text>
    </div>
  );
};

const Home = () => {
  const { toggleTheme, isDark } = useDarkMode();

  return (
    <div className="flex flex-col">
      <div className="self-end flex p-4 gap-3 flex items-center">
        <Link to="/404">Go to 404</Link>
        <Button
          size="large"
          type="primary"
          onClick={toggleTheme}
          icon={isDark ? <Sun size={18} /> : <Moon size={18} />}
          shape="circle"
        />
      </div>
      <Counter />
      <div className="flex justify-center py-10">
        <Link to="/about">
          <Button type="primary">Go to About</Button>
        </Link>
      </div>
      <div className="flex justify-center py-10">
        <CheckBreakPoints />
      </div>
    </div>
  );
};

export default Home;
