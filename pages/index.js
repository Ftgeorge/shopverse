
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()

  if (!session){
    return (
<div className="flex items-center w-screen h-screen bg-white">
      <div className="text-center w-full">
        <button onClick={() => signIn('google')} className="bg-black p-2 px-4 rounded-lg text-white">Log in with Google</button></div>
    </div>
    );
  }
 return(
<div>Logged in {session.user.email}</div>
 );
}
