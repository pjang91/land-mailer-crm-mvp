import { getSession } from "@auth0/nextjs-auth0";

export default async function DashboardPage() {
  const session = await getSession();
  return (
    <div>
      {!!session?.user && (
        <div>
          {session.user.email} - <a href="/api/auth/logout">Logout</a>
        </div>
      )}
      This page needs to be protected!
    </div>
  );
}
