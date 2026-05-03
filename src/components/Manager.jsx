import React, { useEffect, useEffectEvent } from 'react'
import { useRef, useState } from 'react';


const Manager = () => {
    const ref = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })

    const [passwordArray, setpasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        if (passwords) {
            setpasswordArray = (JSON.parse(passwords))
        }
    }, [])


    const showPassword = () => {
        alert("show the password");
        console.log(ref.current.src)
        if (ref.current.src.includes("icons/eyecross.png")) {
            ref.current.src = "icons/eye.png"
        }
        else {
            ref.current.src = "icons/eyecross.png"
        }
    }

    const savePassword = () => {
        setpasswordArray([...passwordArray, form])
        localStorage.setItem("password", JSON.stringify([...passwordArray, form]))
        console.log([...passwordArray, form])


    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }




    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
            </div>
            <div className="mycontainer">
                <h1 className='text-4xl text font-bold text-center'>
                    <span className='text-cyan-600'>&lt;</span>
                    <span className='text-purple-700'>Pass</span>
                    <span className='text-cyan-600'>OP/&gt;</span>
                </h1>
                <p className='text-violet-300 text-lg text-center'>Your own Password Manager</p>

                <div className=" flex flex-col p-4 text-black gap-8 items-center">
                    <input value={form.site} onChange={handleChange} placeholder='Enter Website URL' className='rounded-full border border-green-500 w-full  p-4 py-1' type="text" name="site" id="" />
                    <div className="flex w-full justify-between gap-8">
                        <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="username" id="" />
                        <div className="relative">



                            <input value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="password" id="" />
                            <span className='absolute right-[3px] top-[4px] cursor-pointer' onClick={showPassword}>
                                <img ref={ref} className='p-1' width={26} src="icons/eye.png" alt="eye" />
                            </span>
                        </div>
                    </div>
                    <button
                        onClick={savePassword}
                        className="flex justify-center items-center gap-2 
  bg-gradient-to-r from-blue-400 to-purple-900
  hover:from-purple-500 hover:to-pink-500
  rounded-full px-8 py-2 w-fit border transition-all duration-300"
                    >
                        <lord-icon
                            src="https://cdn.lordicon.com/axroojxh.json"
                            trigger="hover">
                        </lord-icon>
                        Add Password</button>
                </div>
                <div className="passwords">
                    <h2 className='font-bold text-2xl py-4 text-white'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div>No Passwords to Show</div>}
                        {passwordArray.length   !=0 &&<table className="table-auto w-full text-white rounded-md overflow-hidden">
                        <thead className=' text-white  bg-cyan-600'>
                            <tr>
                                <th className='py-2'>Site</th>
                                <th className='py-2'>Username</th>
                                <th className='py-2'>Password</th>
                            </tr>
                        </thead>
                        <tbody className='bg-gradient-to-r from-blue-600 to-purple-900'>
                            {passwordArray.map((item, index)=>{
                                return <tr key={index}>
                                <td className='py-2 border border-white text-center w-32'><a href={item.site} target='_blank'>{item.site}</a></td>
                                <td className='py-2 border border-white text-center w-32'>{item.username}</td>
                                <td className='py-2 border border-white text-center w-32'>{item.password}</td>
                            </tr>
                            })}
                     
                        </tbody>
                    </table>}
                </div>
            </div>

        </>


    )
}

export default Manager
