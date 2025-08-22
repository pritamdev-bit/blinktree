"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { use, useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const page = ({ searchParams }) => {
  const url = use(searchParams)

  const router = useRouter()
  const [handle, setHandle] = useState("")
  const [tempLink, setTempLink] = useState("")
  const [tempUrl, setTempUrl] = useState("")
  const [link1, setLink1] = useState("")
  const [link2, setLink2] = useState("")
  const [link3, setLink3] = useState("")
  const [linkUrl1, setLinkUrl1] = useState("")
  const [linkUrl2, setLinkUrl2] = useState("")
  const [linkUrl3, setLinkUrl3] = useState("")
  const [limit, setLimit] = useState(0)
  const [pic, setPic] = useState("")

  useEffect(() => {
    if (url.handle) {
      setHandle(url.handle)
    }
  }, [])

  const addLink = () => {
    if (limit <= 3) {

      if (tempLink && tempUrl) {

        if (link1 === "") {
          setLimit(limit + 1)
          setLink1(tempLink)
          setLinkUrl1(tempUrl)
          setTempLink("")
          setTempUrl("")

        } else if (link2 === "") {
          setLimit(limit + 1)
          setLink2(tempLink)
          setLinkUrl2(tempUrl)
          setTempLink("")
          setTempUrl("")

        } else if (link3 === "") {
          setLimit(limit + 1)
          setLink3(tempLink)
          setLinkUrl3(tempUrl)
          setTempLink("")
          setTempUrl("")

        } else {
          toast.error("You can add only 3 links")
        }
      } else {
        if (!tempLink || !tempUrl) {
          toast.error("Please enter link and url")

        }
      }
    } else {
      toast.error("You can add only 3 links")
    }

  }

  const generateLink = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "text/plain");

      const raw = JSON.stringify({
        "handle": handle,
        "link1": link1,
        "linkUrl1": linkUrl1,
        "link2": link2,
        "linkUrl2": linkUrl2,
        "link3": link3,
        "linkUrl3": linkUrl3,
        "pic": pic
      })

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      const res = await fetch("/api/generate", requestOptions)
      const response = await res.json()

      if (response.success) {
        toast.success(response.message)
        console.log(response.data);
        const url = handle
        setHandle("")
        setLink1("")
        setLink2("")
        setLink3("")
        setPic("")
        setLinkUrl1("")
        setLinkUrl2("")
        setLinkUrl3("")
        setTempLink("")
        setTempUrl("")
        setLimit(0)
        router.push(`/${url}`)
      } else {
        toast.error(response.message)
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className='bg-[#225AC0] min-h-screen grid lg:grid-cols-2 grid-cols-1'>
      <div className='flex flex-col h-full w-full pt-40 pb-20 sm:px-20 px-5'>
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
              duration: 3000,
              iconTheme: {
                primary: 'green',
                secondary: 'black',
              },
            },
          }}
        />
        <h1 className='sm:text-5xl text-3xl font-extrabold text-white sm:text-left text-center'>Create your BlinkTree</h1>
        <h2 className='sm:text-2xl text-lg font-semibold text-white mt-6'>1. Claim your handle</h2>
        <input
          type="text"
          onChange={(e) => setHandle(e.target.value)}
          value={handle} placeholder="Enter your handle"
          className='text-black bg-white px-4 py-2 rounded-lg mt-2 w-full' />

        <h2 className='sm:text-2xl text-lg font-semibold text-white mt-6'>2. Add links</h2>
        {link1 && <div className='w-full'>
          <h3 className='sm:text-2xl text-lg font-semibold text-white mt-6'>Link: 1</h3>
          <div className='flex sm:gap-2 sm:flex-row flex-col w-full'>
            <input type="text" disabled value={link1} className='text-black bg-white px-4 py-2 rounded-lg mt-2 w-full' />
            <input type="text" disabled value={linkUrl1} className='text-black bg-white px-4 py-2 rounded-lg mt-2 w-full' />
          </div>
        </div>}
        {link2 && <div className='w-full'>
          <h3 className='sm:text-2xl text-lg font-semibold text-white mt-6'>Link: 2</h3>
          <div className='flex sm:gap-2 sm:flex-row flex-col w-full'>
            <input type="text" disabled value={link2} className='text-black bg-white px-4 py-2 rounded-lg mt-2 w-full' />
            <input type="text" disabled value={linkUrl2} className='text-black bg-white px-4 py-2 rounded-lg mt-2 w-full' />
          </div>
        </div>}
        {link3 && <div className='w-full'>
          <h3 className='sm:text-2xl text-lg font-semibold text-white mt-6'>Link: 3</h3>
          <div className='flex sm:gap-2 sm:flex-row flex-col w-full'>
            <input type="text" disabled value={link3} className='text-black bg-white px-4 py-2 rounded-lg mt-2 w-full' />
            <input type="text" disabled value={linkUrl3} className='text-black bg-white px-4 py-2 rounded-lg mt-2 w-full' />
          </div>
        </div>}
        {limit < 3 &&
          <div className='flex sm:gap-2 sm:flex-row flex-col sm:mt-0 mt-2 w-full'>
            <input
              type="text"
              onChange={(e) => setTempLink(e.target.value)}
              value={tempLink}
              placeholder="Enter link text"
              className='text-black bg-white px-4 py-2 rounded-lg mt-2 w-full' />

            <input
              type="text"
              onChange={(e) => setTempUrl(e.target.value)}
              value={tempUrl}
              placeholder="Enter link url"
              className='text-black bg-white px-4 py-2 rounded-lg mt-2 w-full' />
          </div>
        }
        {limit < 3 &&
          <button
            onClick={addLink}
            className='bg-[#283857] shadow shadow-white hover:shadow-md cursor-pointer text-white px-4 py-2 rounded-lg mt-2'>
            Add Link
          </button>
        }
        <h2 className='sm:text-2xl text-lg font-semibold text-white mt-6'>3. Add Profile Picture and Finalize</h2>
        <input
          type="text"
          onChange={(e) => setPic(e.target.value)}
          value={pic}
          placeholder="Enter link to your profile picture"
          className='text-black bg-white px-4 py-2 rounded-lg mt-2' />

        <button
          disabled={!handle || !link1}
          onClick={generateLink}
          className='bg-[#283857] disabled:bg-gray-400 disabled:cursor-not-allowed shadow shadow-white hover:shadow-md cursor-pointer text-white px-4 py-2 rounded-lg mt-2'>
          Generate
        </button>
      </div>
      <div className='overflow-hidden h-screen w-full hidden lg:block'>
        <img src="/banner.webp" alt="banner" className='object-cover h-full w-full' />
      </div>
    </div>
  )
}

export default page
