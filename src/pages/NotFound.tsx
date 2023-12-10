import { Button, Typography } from "antd";
import { AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen w-full flex-1 justify-center flex-col items-center gap-y-3">
      <AlertTriangle className="text-red-500" size={80} />
      <Typography.Text className="font-bold">Page not found</Typography.Text>
      <Link to="/">
        <Button type="primary">Go to Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
