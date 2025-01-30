import { useChat } from "@/app/context/ChatContext"
import { useUser } from "@/app/context/UserContext"
import { useEffect, useRef } from "react"

export const ChatMessages = () => {
  const chatCtx = useChat()
  const userCtx = useUser()
  const lastMessageRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [chatCtx?.chat])

  return (
    <div className="flex flex-col gap-1 overflow-hidden h-full no-scroll">
      {chatCtx?.chat.map((item, index) => (
        <div
          key={item.id}
          ref={index === chatCtx.chat.length - 1 ? lastMessageRef : null}
          className={`border border-red rounded-md p-2 text-sm
            ${item.user === userCtx?.user ? 
              'self-end bg-gray-300 text-right' : 
              'self-start bg-gray-500'  
            }  
          `}
        >
          <div className="font-bold">{item.user}</div>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  )
}
