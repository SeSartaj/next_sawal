import { FC } from "react";

const LoadingSpinner: FC = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
      Loading...
    </div>
  );
};

export default LoadingSpinner;
