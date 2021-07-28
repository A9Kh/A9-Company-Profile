export const jobdescription = () => {
  return (
    <div className="container mx-auto">
      <div className="mt-10 mx-16">
        <h1 className="text-4xl font-bold pt-10">COMMERCAIL DEPARTMENT</h1>
        <h1 className="text-3xl font-bold pb-6 mt-12">JOB DESCRIPITON</h1>
        <p className="text-2xl pb-2">
          {" "}
          Reporting to Regional Category Director, your key roles and
          responsibilities are as follows:{" "}
        </p>
        <ul className="list-disc ml-6 text-2xl ">
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
      <div className="mx-16">
        <h1 className="text-2xl font-bold mt-10 pb-6">JOB REQUIREMENTS</h1>
        <ul className="list-disc ml-6 text-2xl pb-16">
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
      {/* form */}
      <div className="w-auto text-gray-700 bg-gray-100 rounded-lg shadow-md tracking-wide subpixel-antialiased lg:mb-32 mb-12 lg:m-16 m-4">
        <h1 className="text-center pt-10  font-bold text-3xl lg:text-5xl text-black ">
          Application Form
        </h1>
        <form className="">
          <div className="flex flex-wrap flex-col justify-start lg:justify-center py-10">
            <div className="flex-1">
              <label htmlFor="FirstName" className="text-2xl px-0 py-4">
                Firs Name
              </label>
              <input
                type="text"
                className="w-full p-4   border-black border rounded-lg box-border mt-2 mb-4 resize-y text-2xl mt-4"
              />
            </div>
            <div>
              <label htmlFor="LastName" className="text-2xl px-0 py-4">
                Last Name
              </label>
              <input
                type="text"
                className="w-full p-4   border-black border rounded-lg box-border mt-2 mb-4 resize-y text-2xl mt-4"
              />
            </div>
            <div>
              <label htmlFor="Email" className="text-2xl px-0 py-4">
                Email
              </label>
              <input
                type="text"
                className="w-full p-4   border-black border rounded-lg box-border mt-2 mb-4 resize-y text-2xl mt-4"
              />
            </div>
            <div className="grid grid-cols-2">
              <div className="mr-10">
                <label htmlFor="CountryCode" className="text-2xl px-0 py-4">
                  Country Code
                </label>
                <select
                  name="countrycode"
                  id="countrycode"
                  className="w-full p-4   border-black border rounded-lg box-border mt-2 mb-4 resize-y text-2xl mt-4"
                >
                  <option value="Select">Select</option>
                  <option value="885">855</option>
                  <option value="884">884</option>
                  <option value="93">93</option>
                </select>
              </div>
              <div className="ml-10">
                <label htmlFor="Phone Number" className="text-2xl px-0 py-4 ">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="w-full p-4   border-black border rounded-lg box-border mt-2 mb-4 resize-y text-2xl mt-4"
                />
              </div>
            </div>
            <div>
              <label htmlFor="CurrentLocation" className="text-2xl px-0 py-4">
                Current Location
              </label>
              <select
                name="country"
                id="country"
                className="w-full p-4   border-black border rounded-lg box-border mt-2 mb-4 resize-y text-2xl mt-4"
              >
                <option value="Cambodia">Cambodia</option>
                <option value="Thailand">Thailand</option>
                <option value="Chineses">Chineses</option>
              </select>
              <select
                name="state"
                id="state"
                className="w-full p-4   border-black border rounded-lg box-border mt-2 mb-4 resize-y text-2xl mt-4"
              >
                <option value="Phnom Penh">Phnom Penh</option>
                <option value="Bangkok">Bangkok</option>
                <option value="Pekang">Pekang</option>
              </select>
            </div>
            <div>
              <label htmlFor="Education" className="text-2xl px-0 py-4">
                Education
              </label>
              <select
                name="education"
                id="education"
                className="w-full p-4   border-black border rounded-lg box-border mt-2 mb-4 resize-y text-2xl mt-4"
              >
                <option value="BanchalerDegree">Banchaler Degree</option>
                <option value="Master">Master</option>
                <option value="PHD">PHD</option>
              </select>
            </div>
            <div className="mt-4">
              <label htmlFor="A9 Mall" className="text-2xl px-0 py-4">
                Why are you applying to A9 Mall?
              </label>
              <textarea
                name="A9 Mall"
                id="A9 Mall"
                rows="5"
                className="w-full p-4   border-black border rounded-lg box-border mt-2 mb-4 resize-y text-2xl mt-4"
              ></textarea>
            </div>
            <div className="mt-4 mb-4">
              <label
                htmlFor="UploadResume"
                className="text-2xl px-0 py-4 uppercase font-bold"
              >
                Upload Resume
              </label>
              <input
                type="text"
                className="w-full p-4   border-black border rounded-lg box-border mt-2 mb-4 resize-y text-2xl mt-4"
              />
              <span className="text-xl px-4 py-4 mt-4">
                Only supports docx, jpg, pdf, jpeg, png. File size maximum 5MB.
                File Name maximum 300 characters.
              </span>
            </div>
            <div>
              <label
                htmlFor="UploadAddionalDocument"
                className="text-2xl px-0 py-4 uppercase font-bold "
              >
                Upload Additional Document
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
            <div className="mt-1 mt-8 mb-8">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-8 w-8 checked border border-black"
                />
                <span className="ml-2 text-2xl">
                  I have read and understood
                </span>
              </label>
            </div>
            <div className="ml-96">
              <button className="bg-primary-300 text-2xl  text-white font-simibold hover:text-white white py-4 px-24 border border-blue hover: border-primary-300 rounded-full ">
                Apply
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default jobdescription;
