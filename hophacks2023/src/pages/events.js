import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const inter = Inter({ subsets: ['latin'] })

export default function Events() {
        
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
        <h1>Test</h1>
    </main>

    
    
  )
}
