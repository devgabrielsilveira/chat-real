'use client'

import { Chat } from '@/components/Chat'
import { ChatProvider } from './context/ChatContext'
import { UserProvider } from './context/UserContext'

const Page = () => {
  return (
    <div className="container mx-auto max-w-lg px-2">
        <UserProvider>
          <ChatProvider>
            <h1 className='text-3xl mt-10 mb-3 text-center text-white'>Bot está online 🟢</h1>

            <Chat />
          </ChatProvider>
        </UserProvider>
    </div>
  )
}

export default Page