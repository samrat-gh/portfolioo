import { FC, SVGProps } from "react";

const TwitterIcon: FC<SVGProps<SVGSVGElement>> = ({
  color,
  className,
  ...props
}) => (
  <svg
    viewBox="0 0 128 128"
    {...props}
    className={className} // Directly applying className here
    fill={color ? color : "currentColor"} // Use "currentColor" to allow text color styling
  >
    <path
      d="M75.916 54.2 122.542 0h-11.05L71.008 47.06 38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303 89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086-39.42-56.386h16.972L65.19 53.824l4.954 7.086 41.353 59.15h-16.97L60.782 71.793Z"
      strokeWidth=".104373"></path>
  </svg>
);

export default TwitterIcon;
