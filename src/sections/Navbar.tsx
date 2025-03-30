import { JetBrains_Mono} from 'next/font/google'
import { Inter} from 'next/font/google'
  
const jet = JetBrains_Mono({
  weight: ["400","700"],
  subsets: ['latin'],
})
const inter= Inter({
  weight: ["500","800"],
  subsets: ['latin'],
})

export default function Navbar() {
  return (
    <nav className="pt-12 md:pt-7 px-8 sticky top-0 z-20 backdrop-blur-xs bg-transparent">
      <div className='container'>
        <div className='flex justify-between items-center'>

          <h1 className={`${jet.className} font-bold text-black text-shadow text-2xl`}>CRANIOMETRIX</h1>
          
          <button className={`${inter.className} font-bold bg-white text-black border-2 rounded-md border-black py-1 px-3 leading-4 shadow-[2px_2px_0px_0px_rgba(0,0,0)] my-4 md:my-0`}>Sign In</button>

        </div>

      </div>
    </nav>
      )

}