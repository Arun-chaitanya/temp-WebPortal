const Google: React.FC<React.SVGProps<SVGSVGElement>> = ({ width = "1rem", height = "1rem", fill = "white" }) => (
  <svg width={width} height={height} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.16435 0C3.6557 0 0 3.7014 0 8.26667C0 12.8319 3.6557 16.5333 8.16435 16.5333C14.9726 16.5333 16.5064 10.1315 15.8678 6.88889H14.9631H13.4208H8.1617V9.64444H13.4248C12.8198 12.0199 10.6959 13.7778 8.1617 13.7778C5.15683 13.7778 2.72057 11.3102 2.72057 8.26667C2.72057 5.22316 5.15683 2.75556 8.1617 2.75556C9.5281 2.75556 10.7729 3.26929 11.7285 4.11181L13.6613 2.15547C12.2099 0.816269 10.2816 0 8.16435 0Z"
      fill={fill}
    />
  </svg>
);

export default Google;
