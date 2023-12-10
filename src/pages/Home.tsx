import { Counter } from "components";
import { IconButton, Chip, Typography } from "@mui/material";
import { useDarkMode } from "hooks";
import { Link } from "react-router-dom";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import Slider from "@mui/material/Slider";

const Home = () => {
  const { toggleTheme, isDark } = useDarkMode();

  return (
    <div className="flex flex-col">
      <div className="self-end flex p-4 gap-3">
        <Link to="/404">Go to 404</Link>
        <IconButton onClick={toggleTheme} color="primary">
          {isDark ? <LightModeOutlined /> : <DarkModeOutlined />}
        </IconButton>
      </div>
      <Counter />
      <div className="flex justify-center mt-4">
        <Chip
          label="This is a chip"
          color="primary"
          variant="outlined"
          size="small"
        />
      </div>
      <div className="mt-4 flex justify-center gap-3">
        <div className="bg-primary-main w-10 h-10" />
        <div className="bg-secondary-main w-10 h-10" />
        <div className="bg-success-main w-10 h-10" />
        <div className="bg-error-main w-10 h-10" />
        <div className="bg-info-main w-10 h-10" />
        <div className="bg-warning-main w-10 h-10" />
      </div>

      <div className="mt-8 flex justify-center w-full">
        <div className="w-full flex max-w-md flex-col gap-3">
          <Slider defaultValue={30} />
          <Slider
            defaultValue={30}
            className="text-error-main"
            slotProps={{ thumb: { className: "rounded-sm" } }}
          />
          <Slider
            className="text-common-black dark:text-common-white"
            defaultValue={30}
          />
        </div>
      </div>

      {/*Link to about page  */}
      <Link to="/about">
        <Typography variant="body1">Go to About</Typography>
      </Link>
    </div>
  );
};

export default Home;
