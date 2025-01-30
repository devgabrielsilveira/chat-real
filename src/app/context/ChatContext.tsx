import { ReactNode, createContext, useContext, useReducer } from 'react'
import { Message } from '../types/Message'
import { chatReducer } from '../reducers/chatReducer'

type ChatContext = {
  chat: Message[]
  addMessage: (user: string, text: string) => void
}
export const ChatContext = createContext<ChatContext | null>(null)

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [chat, dispatch] = useReducer(chatReducer, [])
  
  const addMessage = (user: string, text: string) => {
    dispatch ({
      type: 'add',
      payload: { user, text }
    })
  }

  return (
    <ChatContext.Provider value={{ chat, addMessage }}>{children}</ChatContext.Provider>
  )
}

export const useChat = () => useContext(ChatContext)