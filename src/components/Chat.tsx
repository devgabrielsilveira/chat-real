import { useUser } from "@/app/context/UserContext"
import { NameInput } from "./NameInput"
import { ChatInput } from "./ChatInput"
import { ChatMessages } from "./ChatMessages"

export const Chat = () => {
  const userCtx = useUser()

  if (!userCtx) return null
  if (!userCtx.user) return <NameInput /> 

  return (
    <div className="border border-white/70 rounded-md">
      <div className="h-96 p-3 overflow-y-scroll">
        <ChatMessages />  
      </div>
      <div className="border-t border-t-white/70 p-3">
        <ChatInput name={userCtx.user}/>
      </div>
      <div className="border-t border-t-white/70 p-3">
      <ChatInput name={'bot'}/>
      </div>
    </div>
  )
}