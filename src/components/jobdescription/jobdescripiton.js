
import "./home.css"
export const jobdescription = () => {
  return (
    <div className="container mx-auto max-w-7xl lg:p-8 md:p-8 sm: p-8">
      <h1 className="text-4xl font-bold pt-10 lg:text-3xl md:text-2xl sm:text-xl">COMMERCAIL DEPARTMENT</h1>
      <div className="mt-10">
        <h1 className="text-2xl font-bold pb-6 lg:text-xl md:text-base sm:text-sm">JOB DESCRIPITON</h1>
        <p className="text-2xl pb-2 lg:text-xl md:text-base sm:text-sm">
          Reporting to Regional Category Director, your key roles and
          responsibilities are as follows:
        </p>
        <ul className="list-disc ml-6 text-2xl lg:text-xl md:text-base sm:text-sm">
          <li>
            Drive category operations regionally in partnership with country
            teams and to achieve the targeted KPIs
          </li>
          <li>Framing the strategy for the business for the region</li>
          <li>
            Ensuring good business health by focusing on the right fundamentals
            for retail and marketplace (right brands/sellers, right assortment,
            pricing etc.)
          </li>
          <li>Ensuring smooth execution of regional campaigns</li>
          <li>
            Ensuring optimal usage of tools and services by brands/sellers as
            well as internal teams
          </li>
          <li>Managing tech product roadmap for the category</li>
          <li>
            Running projects across the region to pilot new ideas as well as
            achieve strategic objectives.
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-2xl font-bold mt-10 pb-6 lg:text-xl md:text-base sm:text-sm">JOB REQUIREMENTS</h1>
        <ul className="list-disc ml-6 text-2xl pb-16 lg:text-xl md:text-base sm:text-sm">
          <li>
            Bachelor degree in Engineering or Business Administration, Masters
            degree is highly preferred.
          </li>
          <li>
            Relevant experience with proven performance in category management
            approaches in retail
          </li>
          <li>Ability to work and collaborate effectively with other teams</li>
          <li>
            Excellent data-driven, analytical skills. Must be a logical thinker.
          </li>
          <li>
            Strong project management and communication skills. Used to manage
            multiple stakeholders across multiple functions.
          </li>
          <li>
            Fluent in English, strong Microsoft office skills (Excel and PPT),
            able to deliver under pressure while being entrepreneurial and
            results driven.
          </li>

        </ul>
      </div>
      <div className="flex flew-wrap flex-col jutify-center w-full text-gray-700 bg-gray-100 rounded-lg shadow-md tracking-wide subpixel-antialiased lg:mb-32 mb-12">
          <div className = "flex justify-center md: pb-10">
          <h1 className = " pt-10  font-bold text-4xl text-black lg:text-3xl md:text-2xl sm:text-xl">Application Form</h1>
          </div>
        <form>
            <div className = "w-full mx-auto lg:mx-auto lg:w-10/12 md:mx-atuo md:w-10/12 sm:mx-auto sm:w-10/12  w-10/12 ">
            <div>
              <label htmlFor="FirstName" className = "text-2xl px-0 py-4 lg:text-xl md:text-base sm:text-sm">Firs Name</label>
              <input type="text" className = "w-full p-4   border-gray-400 border rounded-2xl box-border mt-2 mb-4 resize-y text-2xl lg:text-base md:text-sm sm:text-xs mt-4"/>
            </div>
            <div>
              <label htmlFor="LastName"className = "text-2xl px-0 py-4 lg:text-xl md:text-base sm:text-sm">Last Name</label>
              <input type="text" className = "w-full p-4   border-gray-400 border rounded-2xl box-border mt-2 mb-4 resize-y text-2xl lg:text-base md:text-sm sm:text-xs mt-4"/>
            </div>
            <div>
              <label htmlFor="Email"className = "text-2xl px-0 py-4 lg:text-xl md:text-base sm:text-sm">Email</label>
              <input type="text" className = "w-full p-4   border-gray-400 border rounded-2xl lg:text-base md:text-sm sm:text-xs box-border mt-2 mb-4 resize-y text-2xl  mt-4" />
            </div>
            <div className = "grid grid-cols-2">
            <div className = "mr-10">
              <label htmlFor="CountryCode" className = "text-2xl px-0 py-4 lg:text-xl md:text-base sm:text-sm">Country Code</label>
              <select name="countrycode" id="countrycode" className = "w-full lg:text-base sm:text-xs md:text-sm p-4 border-gray-400 border box-border mt-2 mb-4 resize-y text-2xl mt-4 arrow-bottom">
                <option value="Select">Select</option>
                <option value="885">855</option>
                <option value="884">884</option>
                <option value="93">93</option>
              </select>
            </div>
            <div className = "ml-10">
            <label htmlFor="Phone Number" className = "text-2xl px-0 py-4 lg:text-xl md:text-base sm:text-sm">Phone Number</label>
              <input type="text"className = "w-full p-4   border-gray-400 border rounded-2xl box-border mt-2 mb-4 resize-y text-2xl mt-4 lg:text-base md:text-sm sm:text-xs" />
            </div>
            </div>
            <div>
                <label htmlFor="CurrentLocation" className = "text-2xl px-0 py-4 lg:text-xl md:text-base sm:text-sm">Current Location</label>
                <select name="country" id="country" className = "w-full p-4   border-gray-400 border rounded-2xl box-border mt-2 mb-4 resize-y text-2xl mt-4 lg:text-base md:text-sm sm:text-xs arrow-bottom">
                    <option value="Cambodia">Cambodia</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Chineses">Chineses</option>
                </select>
                <select name="state" id="state" className = "w-full p-4   border-gray-400 border rounded-2xl box-border mt-2 mb-4 resize-y text-2xl mt-4 lg:text-base md:text-sm sm:text-xs arrow-bottom" >
                    <option value="Phnom Penh">Phnom Penh</option>
                    <option value="Bangkok">Bangkok</option>
                    <option value="Pekang">Pekang</option>
                </select>
            </div>
            <div>
                <label htmlFor="Education" className = "text-2xl px-0 py-4 lg:text-xl md:text-base sm:text-sm">Education</label>
                <select name="education" id="education" className = "w-full p-4   border-gray-400 border rounded-2xl box-border mt-2 mb-4 resize-y text-2xl mt-4 lg:text-base md:text-sm sm:text-xs arrow-bottom">
                    <option value="BanchalerDegree">Banchaler Degree</option>
                    <option value="Master">Master</option>
                    <option value="PHD">PHD</option>
                </select>
            </div>
            <div className = "mt-4">
                <label htmlFor="A9 Mall" className = "text-2xl px-0 py-4 lg:text-xl md:text-base sm:text-sm" >Why are you applying to A9 Mall?</label>
                <textarea name="A9 Mall" id="A9 Mall"  rows="5" className = "w-full  border-gray-400 border rounded-2xl box-border mt-2 mb-4 resize-y text-2xl mt-4 lg:text-base"></textarea>
            </div>
            <div className = "mt-4 mb-4">
                <div className = "pb-4">
                <label htmlFor="UploadResume" className = "text-2xl px-0 py-4 uppercase font-bold lg:text-xl md:text-base sm:text-sm">Upload Resume</label>
                </div>
                <div className = "custom-file">
                  <input type="file"  className = "custom-file-input" id= "customFile" />
                  <label htmlFor="customFile" className = "custom-file-label"></label>
                </div>
                <div className = "py-10 ">
                <span className = "text-xl lg:text-base md:text-sm sm:text-xs">Only supports docx, jpg, pdf, jpeg, png. File size maximum 5MB. File Name maximum 300 characters.</span>
                </div>
            </div>
            <div>
                <div className = "pb-4">
                <label htmlFor="UploadAddionalDocument" className = "text-2xl px-0 py-4 uppercase font-bold lg:text-xl md:text-base sm:text-xs">Upload Additional Document</label>
                </div>
                <div className = "custom-file">
                  <input type="file"  className = "custom-file-input" id= "customFile"/>
                  <label htmlFor="customFile" className = "custom-file-label"></label>
                </div> 
                <div className = "py-10">
                <span className = "text-xl lg:text-base md:text-sm sm:text-xs">Only supports docx, jpg, pdf, jpeg, png. File size maximum 5MB. File Name maximum 300 characters.</span>
                </div>
            </div>
          
            <div className = "mt-8 lg:mt-4 lg:mb-4  mb-8">
              <label className = "inline-flex items-center">
                <input type="checkbox" className = "form-checkbox h-8 w-8 sm:h-4 sm:h-4  md:h-4 md: w-4 lg:h-8 lg:w-8 checked border border-black" />
                <span className = "ml-2 text-2xl lg:text-xl md:text-base sm:text-sm">I have read and understood</span>
              </label>
              <input
                type="text"
                className="w-full p-4   border-black border rounded-lg box-border mt-2 mb-4 resize-y text-2xl mt-4"
              />
              <span className="text-xl">
                Only supports docx, jpg, pdf, jpeg, png. File size maximum 5MB.
                File Name maximum 300 characters.
              </span>
            </div>
            <div className = "flex justify-center mb-24">
                <button className = "bg-primary-300 lg:text-3xl md:text-2xl sm:text-xl text-4xl  text-white font-simibold hover:text-white white py-4 px-24 lg:px-16 md:px-10 sm:px-4 border border-blue hover: border-primary-300 rounded-full ">Apply</button>
            </div>
            </div>
          {/* </div> */}
        </form>
      </div>
    // </div>
  )
};
export default jobdescription;