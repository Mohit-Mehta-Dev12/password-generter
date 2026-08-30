import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(14) // Clean standard default length
  const [numallow, setNumallow] = useState(false)
  const [numchar, setNumchar] = useState(false)
  const [password, setPassword] = useState("")
  const [copied, setCopied] = useState(false)

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numallow) str += "0123456789"
    if (numchar) str += "!@#$%^&*()_+{}[]~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numallow, numchar])
 
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 100) 
    window.navigator.clipboard.writeText(password)
    
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numallow, numchar, passwordGenerator])

  return (
    // Natural off-white background with subtle crisp gray selection fields
    <div className="min-h-screen bg-[#fafafa] flex flex-col items-center justify-center p-6 antialiased text-[#1a1a1a] selection:bg-[#e4e4e7]">
      <div className="w-full max-w-md space-y-5">
        
        {/* Minimalist Professional Header */}
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight text-[#111111]">
            Password Generator
          </h1>
          <p className="text-sm text-[#71717a]">
            Generate strong credentials locally in your browser.
          </p>
        </div>

        {/* Output Container — Styled like a modern input prompt bar */}
        <div className="bg-white border border-[#e4e4e7] rounded-xl p-2.5 flex items-center justify-between gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.04)] focus-within:border-[#a1a1aa] focus-within:ring-4 focus-within:ring-[#f4f4f5] transition-all">
          <input
            type="text"
            value={password}
            className="w-full bg-transparent text-[#18181b] font-mono text-lg py-1 px-3 outline-none tracking-wide select-all"
            placeholder="Click generate"
            readOnly
            ref={passwordRef}
          />
          <button 
            onClick={copyPasswordToClipboard} 
            className={`shrink-0 font-medium text-sm px-4 py-2 rounded-lg border transition-all duration-150 active:scale-[0.98] ${
              copied 
                ? 'bg-[#18181b] text-white border-[#18181b]' 
                : 'bg-white text-[#27272a] border-[#e4e4e7] hover:bg-[#f4f4f5] hover:text-[#111111]'
            }`}
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>

        {/* Settings Box — Modern Clean Card System */}
        <div className="bg-white border border-[#e4e4e7] rounded-xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] space-y-6">
          
          {/* Slider Layout */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm font-medium text-[#27272a]">
              <label htmlFor="length-range">Character Length</label>
              <span className="font-mono text-xs font-bold text-[#18181b] bg-[#f4f4f5] border border-[#e4e4e7] px-2.5 py-0.5 rounded-md">
                {length}
              </span>
            </div>
            <input 
              id="length-range"
              type="range"
              min={6}
              max={32}
              value={length}
              className="w-full h-1 bg-[#e4e4e7] rounded-lg appearance-none cursor-pointer accent-[#18181b] transition-all"
              onChange={(e) => setLength(parseInt(e.target.value))}
            />
          </div>

          <hr className="border-[#f4f4f5]" />

          {/* Toggle Switches */}
          <div className="space-y-4">
            
            {/* Numbers Selector row */}
            <label className="flex items-center justify-between cursor-pointer select-none group">
              <div className="space-y-0.5">
                <span className="text-sm font-medium text-[#27272a] group-hover:text-[#111111] transition-colors">Include Numbers</span>
                <p className="text-xs text-[#71717a]">Add digits (0-9) to the string</p>
              </div>
              <input 
                type="checkbox"
                checked={numallow}
                className="w-4 h-4 rounded border-[#d4d4d8] bg-white text-[#18181b] accent-[#18181b] cursor-pointer focus:ring-0 focus:ring-offset-0 transition-all"
                onChange={() => setNumallow(prev => !prev)}
              />
            </label>

            {/* Symbols Selector row */}
            <label className="flex items-center justify-between cursor-pointer select-none group">
              <div className="space-y-0.5">
                <span className="text-sm font-medium text-[#27272a] group-hover:text-[#111111] transition-colors">Include Symbols</span>
                <p className="text-xs text-[#71717a]">Add special characters (!@#$)</p>
              </div>
              <input 
                type="checkbox"
                checked={numchar}
                className="w-4 h-4 rounded border-[#d4d4d8] bg-white text-[#18181b] accent-[#18181b] cursor-pointer focus:ring-0 focus:ring-offset-0 transition-all"
                onChange={() => setNumchar(prev => !prev)}
              />
            </label>

          </div>
        </div>

      </div>
    </div>
  )
}

export default App


