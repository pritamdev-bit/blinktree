"use client"
import React, { use, useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import QRCode from 'react-qr-code'
import Link from 'next/link'


const HandlePage = ({ params }) => {
  const handle = use(params).handle
  const [link1, setLink1] = useState("")
  const [link2, setLink2] = useState("")
  const [link3, setLink3] = useState("")
  const [linkUrl1, setLinkUrl1] = useState("")
  const [linkUrl2, setLinkUrl2] = useState("")
  const [linkUrl3, setLinkUrl3] = useState("")
  const [pic, setPic] = useState("")

  const getData = async () => {
    const res = await fetch('/api/userdata', { method: "POST", body: JSON.stringify({ handle }) })
    const response = await res.json()

    if (response.data) {
      if (response?.data?.link1 !== "") {
        setLink1(response.data.link1)
        setLinkUrl1(response.data.linkUrl1)
      }
      if (response.data.link2 !== "") {
        setLink2(response.data.link2)
        setLinkUrl2(response.data.linkUrl2)
      }
      if (response.data.link3 !== "") {
        setLink3(response.data.link3)
        setLinkUrl3(response.data.linkUrl3)
      }
      setPic(response.data.pic)
      
    }
  }

  useEffect(() => {
    getData()
  }, [])


  const copyLink = () => {
    navigator.clipboard.writeText(`https://blinktree.vercel.app/${handle}`);
    toast.success("Copied to clipboard");
  }

  return (
    <div className='min-h-screen max-w-screen  bg-black text-white sm:pt-10'>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toasterId="default"
        toastOptions={{
          // Define default options
          className: '',
          duration: 3000,
          removeDelay: 1000,
          style: {
            background: '#363636',
            color: '#fff',
          },

          // Default options for specific types
          success: {
            duration: 2000,
            iconTheme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
      <div className='min-h-screen lg:max-w-[40vw] sm:max-w-[80vw] w-[100%] bg-[#1d2021] mx-auto sm:rounded-t-3xl p-7'>
        <div className='flex justify-between mb-5'>
          <Link href='/'>
            <div className='w-fit h-fit bg-gray-400 p-3 rounded-full'>
              <svg fill="none" height="18px" width="18px" viewBox="0 0 28 28" className="animation_rotate__CpTPZ hover:invert transition-all duration-300 ease-in-out"><clipPath id="a"><path d="m0 0h28v28h-28z"></path></clipPath><g clipPath="url(#a)"><path d="m15.7603 6.829 4.6725-4.80317 2.712 2.77734-4.9012 4.67248h6.8944v3.85565h-6.9271l4.9339 4.7922-2.712 2.7229-6.6983-6.731-6.69829 6.731-2.712-2.712 4.93387-4.7923h-6.92703v-3.86645h6.89436l-4.9012-4.67248 2.712-2.77734 4.67249 4.80317v-6.829h4.0516zm-4.0516 12.0243h4.0516v9.1489h-4.0516z" fill="black"></path></g></svg>
            </div>
          </Link>
          <div onClick={() => copyLink()} className='w-fit h-fit bg-gray-400 p-3 rounded-full cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18px" height="18px"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="copy-icon invert hover:invert-0 transition-all duration-300 ease-in-out">
              <rect x="8" y="4" width="10" height="12" rx="2" ry="2" />
              <rect x="4" y="8" width="10" height="12" rx="2" ry="2" />
            </svg>
          </div>
        </div>
        <div className='flex flex-col gap-2 items-center'>
          {!pic && <img src="/profile.png" alt="profile" className="rounded-full" width={"100px"} height={"100px"} />}
          {pic && <img src={pic} alt="profile" className="rounded-full" width={"100px"} height={"100px"} />}
          <p className='text-gray-200 mb-2 font-semibold text-xl'>@{handle}</p>
        </div>

        <p className='text-gray-200 mb-2 font-semibold text-4xl my-10 text-center'>Links</p>

        {!link1 && <div className='flex justify-center items-center my-5 p-4 transition-all duration-300 bg-white text-black rounded-md outline-gray-400 hover:outline-4'>
          <p className='text-lg font-semibold'>No links found</p>
        </div>}

        {link1 && <Link href={linkUrl1} target='_blank'>
        <div className='flex justify-center items-center my-5 p-4 transition-all duration-300 bg-white text-black rounded-md outline-gray-400 hover:outline-4'>
          <p className='text-lg font-semibold'>{link1} 🔗</p>
        </div>
        </Link>}

        {link2 && <Link href={linkUrl2} target='_blank'><div className='flex justify-center items-center my-5 p-4 transition-all duration-300 bg-white text-black rounded-md outline-gray-400 hover:outline-4'>
          <p className='text-lg font-semibold'>{link2} 🔗</p>
        </div></Link>}

        {link3 && <Link href={linkUrl3} target='_blank'><div className='flex justify-center items-center my-5 p-4 transition-all duration-300 bg-white text-black rounded-md outline-gray-400 hover:outline-4'>
          <p className='text-lg font-semibold'>{link3} 🔗</p>
        </div></Link>}

        <div className='fixed bottom-10 -right-30 sm:block hidden'>
          <p className='text-gray-200 mb-2'>view on mobile</p>
          <QRCode
            className='bg-white p-2 ml-1'
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "40%" }}
            value={`https://blinktree.vercel.app/${handle}`}
            viewBox={`0 0 256 256`}
          />
        </div>
      </div>
    </div>
  )
}

export default HandlePage
