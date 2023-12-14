import Link from "next/link";

export default function Header() {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/registration">Sign Up</Link>
      <Link href="/login">Sign In</Link>
    </div>
  );
}
