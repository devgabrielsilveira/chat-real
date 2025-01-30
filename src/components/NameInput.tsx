import { useUser } from "@/app/context/UserContext"
import { KeyboardEvent, useState } from "react"

export const NameInput = () => {
  const userCtx = useUser()
  const [nameInput, setNameInput] = useState('')

  const handleyKeyUpAction = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code.toLowerCase() === 'enter') {
      if (nameInput.trim() !== '' && nameInput !== 'bot') {
        userCtx?.setUser(nameInput.trim())
      }
    }
  }

  return (
    <div className="mt-14">
      <p className="text-xl mb-4 text-white/80">Qual o seu nome?</p>
      <div className="flex gap-3 items-center text-lg">
        <input
          type="text"
          className="flex-1 border border-black rounded-md px-4 py-3 text-white/70 bg-white/10 outline-none"
          value={nameInput}
          onChange={e => setNameInput(e.target.value)}
          onKeyUp={handleyKeyUpAction}
        
        />
      </div>
    </div>
  )
}