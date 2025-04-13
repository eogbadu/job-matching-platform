import { useAuth } from '../context/AuthContext'

export default function Home() {
  const user = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center">
      {user ? (
        <div className="text-xl">Welcome, {user.email}</div>
      ) : (
        <div className="text-xl">You are not logged in</div>
      )}
    </div>
  );
}
