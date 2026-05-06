import React, { useEffect, useEffectEvent } from 'react'
import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { v4 as uuidv4 } from "uuid";

const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })

    const [passwordArray, setpasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }
    }, [])


    const copyText = (text) => {
        toast('Copied to Clipboard', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        navigator.clipboard.writeText(text)
    }


    const showPassword = () => {
        passwordRef.current.type = "text"
        console.log(ref.current.src)
        if (ref.current.src.includes("icons/eyecross.png")) {
            ref.current.src = "icons/eye.png"
            passwordRef.current.type = "password"
        }
        else {
            passwordRef.current.type = "text"
            ref.current.src = "icons/eyecross.png"
        }
    }

    const savePassword = () => {
        setpasswordArray([...passwordArray,{...form, id: uuidv4()}])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray,{...form, id: uuidv4()}]))
        console.log([...passwordArray, form])
        setform({ site: "", username: "", password: "" })


    }


    const deletePassword = (id) => {
        console.log("Deleting password with id", id)
        let c= confirm("Do you really want to delete this password")
        if(c){
            setpasswordArray(passwordArray.filter(item=>item.id!==id))
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id!==id)))
            
        }

    }
    const editPassword = (id) => {
        console.log("Editing password with id", id)
        setform(passwordArray.filter(i=>i.id===id)[0])
        setpasswordArray(passwordArray.filter(item=>item.id!==id))


    }




    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }




    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce"

            />
            <ToastContainer />
            <div className="animated-bg absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
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



                            <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full border border-green-500 w-full p-4 py-1' type="password" name="password" id="" />
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
                        Save Password</button>
                </div>
                <div className="passwords">
                    <h2 className='font-bold text-2xl py-4 text-white'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div>No Passwords to Show</div>}
                    {passwordArray.length != 0 && <table className="table-auto w-full text-white rounded-md overflow-hidden">
                        <thead className=' text-white  bg-cyan-600'>
                            <tr>
                                <th className='py-2'>Site</th>
                                <th className='py-2'>Username</th>
                                <th className='py-2'>Password</th>
                                <th className='py-2'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='bg-gradient-to-r from-blue-600 to-purple-900'>
                            {passwordArray.map((item, index) => {
                                return <tr key={index}>
                                    <td className='  py-2 border border-white text-center '>
                                        <div className="flex items-center justify-center">
                                            <a href={item.site} target='_blank'>{item.site}</a>
                                            <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.site) }}>


                                                <lord-icon
                                                    style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                    src="https://cdn.lordicon.com/exymduqj.json"
                                                    trigger="hover">
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>
                                    <td className=' py-2 border border-white text-center '>
                                        <div className="flex items-center justify-center">
                                            <span>{item.username}</span>
                                            <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.username) }}>


                                                <lord-icon
                                                    style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                    src="https://cdn.lordicon.com/exymduqj.json"
                                                    trigger="hover">
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='  py-2 border border-white text-center '>
                                        <div className="flex items-center justify-center">
                                            <span>{item.password}</span>
                                            <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.password) }}>


                                                <lord-icon
                                                    style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                    src="https://cdn.lordicon.com/exymduqj.json"
                                                    trigger="hover">
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='justify-center py-2 border border-white text-center '>
                                        <span className='cursor-pointer mx-1'onClick={()=>{editPassword(item.id)}}>
                                            <lord-icon
                                              src="https://cdn.lordicon.com/exymduqj.json"
                                                trigger="hover"
                                                style={{"width":"25px" , "height":"25px"}}>
                                            </lord-icon>
                                        </span>
                                        <span className='cursor-pointer mx-1' onClick={()=>{deletePassword(item.id)}}>
                                            <lord-icon
                                           src="https://cdn.lordicon.com/jzinekkv.json"
                                                trigger="hover"
                                                style={{"width":"25px" , "height":"25px"}}>
                                            </lord-icon>
                                        </span>
                                    </td>
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
