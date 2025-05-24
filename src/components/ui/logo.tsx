import Link from "next/link";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  return (
    <Link href="/" className={className}>
      {variant === "dark" ? (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          aria-label="Intercom logo"
        >
          <rect width="40" height="40" rx="4" fill="#161011" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.5 14.5A1.5 1.5 0 0 1 27 16v8a1.5 1.5 0 0 1-3 0v-8a1.5 1.5 0 0 1 1.5-1.5ZM12 16a1.5 1.5 0 0 1 3 0v8a1.5 1.5 0 0 1-3 0v-8Zm7.5-1.5a1.5 1.5 0 0 0-1.5 1.5v8a1.5 1.5 0 0 0 3 0v-8a1.5 1.5 0 0 0-1.5-1.5ZM8.5 9C7.67 9 7 9.67 7 10.5v19c0 .83.67 1.5 1.5 1.5h23c.83 0 1.5-.67 1.5-1.5v-19c0-.83-.67-1.5-1.5-1.5h-23Z"
            fill="#fff"
          />
        </svg>
      ) : (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          aria-label="Intercom logo"
        >
          <rect width="40" height="40" rx="4" fill="#fff" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.5 14.5A1.5 1.5 0 0 1 27 16v8a1.5 1.5 0 0 1-3 0v-8a1.5 1.5 0 0 1 1.5-1.5ZM12 16a1.5 1.5 0 0 1 3 0v8a1.5 1.5 0 0 1-3 0v-8Zm7.5-1.5a1.5 1.5 0 0 0-1.5 1.5v8a1.5 1.5 0 0 0 3 0v-8a1.5 1.5 0 0 0-1.5-1.5ZM8.5 9C7.67 9 7 9.67 7 10.5v19c0 .83.67 1.5 1.5 1.5h23c.83 0 1.5-.67 1.5-1.5v-19c0-.83-.67-1.5-1.5-1.5h-23Z"
            fill="#161011"
          />
        </svg>
      )}
    </Link>
  );
}
