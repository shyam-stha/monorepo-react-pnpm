import type { SVGProps } from "react";
const Ambulance = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <path fill="#0061A0" d="M20.693 7.208h3.53l4.445 4.705v4.21h-7.975z" />
    <path
      fill="#0090DA"
      d="M2.544 3.602c-.333.409-.524.914-.544 1.44v19.054c-.007.298.085.59.263.83a1.1 1.1 0 0 0 .835.331H29c.29-.032.559-.17.75-.39.168-.214.256-.478.25-.75v-12.1a3.1 3.1 0 0 0-.378-1.322 5.2 5.2 0 0 0-.917-1.079L21.6 3.715q-.453-.3-.956-.507A3.2 3.2 0 0 0 19.627 3H3.975a1.9 1.9 0 0 0-1.431.6m24.569 10.44a.44.44 0 0 1-.287.088H22.04a.64.64 0 0 1-.354-.16.56.56 0 0 1-.083-.365V8.222a.37.37 0 0 1 .193-.378c.241-.156.583.132.583.132l4.533 3.783q.12.113.2.258.07.146.087.305v1.42a.5.5 0 0 1-.086.3"
    />
    <path
      fill="#fff"
      d="M13.368 7.953h-3.42v3.398H6.527v3.399h3.42v3.398h3.42V14.75h3.42V11.35h-3.42z"
    />
    <path
      fill="#0061A0"
      d="M8.729 29c2.202 0 3.987-1.774 3.987-3.962s-1.785-3.962-3.987-3.962S4.74 22.85 4.74 25.038 6.526 29 8.729 29M23.682 29c2.203 0 3.988-1.774 3.988-3.962s-1.786-3.962-3.988-3.962-3.987 1.774-3.987 3.962S21.48 29 23.682 29"
    />
    <path
      fill="#fff"
      d="M8.73 26.623c.88 0 1.595-.71 1.595-1.585a1.59 1.59 0 0 0-1.595-1.585c-.881 0-1.595.71-1.595 1.585a1.59 1.59 0 0 0 1.595 1.585M23.683 26.623c.881 0 1.595-.71 1.595-1.585a1.59 1.59 0 0 0-1.595-1.585c-.88 0-1.595.71-1.595 1.585a1.59 1.59 0 0 0 1.595 1.585"
    />
  </svg>
);
export { Ambulance };
