import React , {useState , useEffect} from "react"
import Link from "next/link"
import { useRouter } from 'next/router'

const Navbar = () => {

  const [text , setText]=useState("")

  const router = useRouter()
  console.log("router" , router)

  const onEnter = (e) => {
      if(e.key==="Enter"){
          router.push(`/search?keyword=${text}`)
      }
  }

  return(
    <div>
      <div style={{display:"flex"}}>
          <p style={{margin:"10px"}}>
              <Link href="/">
                <span>Home</span>
              </Link>
          </p>
          <p style={{margin:"10px"}}>
            <Link href="/about">
                <span>About</span>
            </Link>
          </p>
          <p style={{margin:"10px"}}>
            <input onChange={(e)=>setText(e.target.value)} value={text} onKeyPress={onEnter}/>
          </p>
      </div>
    </div>
  )
}

export default Navbar