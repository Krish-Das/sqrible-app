const Logo = ({
  strokeWidth = 2,
  size = 24,
}: {
  strokeWidth?: number;
  size?: number;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-exposure-0"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 19a4 4 0 0 0 4 -4v-6a4 4 0 1 0 -8 0v6a4 4 0 0 0 4 4z" />
    </svg>
  );
};

export default Logo;
