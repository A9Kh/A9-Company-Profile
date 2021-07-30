import { useState } from "react";

const AppForm = () => {
    const [resume, setResume] = useState("");
    const [addDoc, setAddDoc] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="bg-gray-100 p-5 lg:p-10 shadow-md rounded-xl flex flex-col items-center">
            <h1 className="uppercase font-bold text-lg sm:text-xl lg:text-2xl mb-5">APPLICATION FORM</h1>
            <form className="sm:w-11/12 lg:w-9/12" onSubmit={(e) => handleSubmit(e)}>
                <div className="mb-3 sm:mb-5 flex flex-col sm:flex-row gap-3 sm:gap-5">
                    <div className="flex flex-col w-full">
                        <label htmlFor="fname" className="mb-1 md:mb-2 text-sm sm:text-base">First Name</label>
                        <input type="text" id="fname" className="border border-black p-1 sm:p-2 rounded-lg outline-none" placeholder="First Name" />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="lname" className="mb-1 md:mb-2 text-sm sm:text-base">Last Name</label>
                        <input type="text" id="lname" className="border border-black p-1 sm:p-2 rounded-lg outline-none" placeholder="Last Name" />
                    </div>
                </div>
                <div className="flex flex-col mb-3 sm:mb-5">
                    <label htmlFor="email" className="mb-1 md:mb-2 text-sm sm:text-base">Email</label>
                    <input type="email" id="email" className="border border-black p-1 sm:p-2 rounded-lg outline-none" placeholder="me@example.com" />
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mb-3 sm:mb-5">
                    <div className="flex flex-col w-full">
                        <label htmlFor="country-code" className="mb-1 md:mb-2 text-sm sm:text-base">Country Code</label>
                        <select type="text" id="country-code" className="border border-black p-1 sm:p-2 rounded-lg outline-none">
                            <option value="null">Select</option>
                            <option value="cambodia">Cambodia +855</option>
                            <option value="thailand">Thailand +66</option>
                            <option value="vietnam">Vietnam +84</option>
                            <option value="philippines">Philippines +63</option>
                            <option value="taiwan">Taiwan +886</option>
                        </select>
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="phone" className="mb-1 md:mb-2 text-sm sm:text-base">Phone Number</label>
                        <input type="number" id="phone" className="border border-black p-1 sm:p-2 rounded-lg outline-none appearance-none" min={0} placeholder="Phone Number" />
                    </div>
                </div>
                <div className="flex flex-col mb-3 sm:mb-5">
                    <label htmlFor="c-location" className="mb-1 md:mb-2 text-sm sm:text-base">Current Loction</label>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-5">
                        <select type="text" id="c-location" className="border border-black p-1 sm:p-2 rounded-lg outline-none w-full" >
                            <option value="null">Select Country</option>
                            <option value="cambodia">Cambodia</option>
                        </select>
                        <select type="text" id="c-location" className="border border-black p-1 sm:p-2 rounded-lg outline-none w-full" >
                            <option value="null">Select State</option>
                            <option value="phnom penh">Phnom Penh</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-col mb-3 sm:mb-5">
                    <label htmlFor="edu" className="mb-1 md:mb-2 text-sm sm:text-base">Education</label>
                    <select type="text" id="edu" className="border border-black p-1 sm:p-2 rounded-lg outline-none" >
                        <option value="null">Select</option>
                        <option value="bec2">BecII</option>
                        <option value="bachelor">Bachelor</option>
                        <option value="master">Master</option>
                        <option value="phd">PHD</option>
                    </select>
                </div>
                <div className="flex flex-col mb-3 sm:mb-5">
                    <label htmlFor="why" className="mb-1 md:mb-2 text-sm sm:text-base">Why are you applying to A9 Mall?</label>
                    <textarea name="" id="why" rows="5" className="resize-none border border-black p-1 sm:p-2 rounded-lg outline-none" placeholder="Because..."></textarea>
                </div>
                <div className="flex flex-col mb-3 sm:mb-5">
                    <label htmlFor="" className="mb-1 md:mb-2 uppercase font-bold text-base sm:text-lg lg:text-xl">upload resume</label>
                    <div className="flex">
                        <input type="text" readOnly className="border border-black p-1 sm:p-2 rounded-lg flex-1 outline-none" value={resume} />
                        <label htmlFor="browse-resume" className="px-5 py-1 sm:py-2 text-white bg-primary-300 rounded-lg -ml-3 hover:bg-primary-200 cursor-pointer active:bg-primary-400 text-sm sm:text-base">Browse</label>
                        <input type="file" id="browse-resume" className="absolute opacity-0 w-1" onChange={(e) => setResume(e.target.value)} />
                    </div>
                    <span className="text-xs sm:text-sm text-gray-400">Only supports docx, jpg, pdf, jpeg, png. File size maximum 5MB. File Name maximum 300 characters.</span>
                </div>
                <div className="flex flex-col mb-5">
                    <label htmlFor="" className="mb-1 md:mb-2 uppercase font-bold text-base sm:text-lg lg:text-xl">UPLOAD ADDITIONAL DOCUMENT</label>
                    <div className="flex">
                        <input type="text" readOnly className="border border-black p-1 sm:p-2 rounded-lg flex-1 outline-none" value={addDoc} />
                        <label htmlFor="browse-additional-doc" className="px-5 py-1 sm:py-2 text-white bg-primary-300 rounded-lg -ml-3 hover:bg-primary-200 cursor-pointer active:bg-primary-400 text-sm sm:text-base">Browse</label>
                        <input type="file" id="browse-additional-doc" className="absolute opacity-0 w-1" onChange={(e) => setAddDoc(e.target.value)} />
                    </div>
                    <span className="text-xs sm:text-sm text-gray-400">Only supports docx, jpg, pdf, jpeg, png. File size maximum 5MB. File Name maximum 300 characters.</span>
                </div>
                <div className="flex items-center gap-3">
                    <input type="checkbox" id="check-box" className="w-5 h-5" /> <label htmlFor="check-box" className=" text-sm sm:text-base">I have read and understood</label>
                </div>
                <div className="flex justify-center my-3 sm:my-5 lg:my-10">
                    <button type="submit" className="py-2 px-10 bg-primary-300 rounded-full text-base sm:text-lg lg:text-xl text-white hover:bg-primary-200 active:bg-primary-400">Apply</button>
                </div>
            </form>
        </div>
    )
}

export default AppForm
