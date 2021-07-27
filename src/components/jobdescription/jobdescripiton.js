export const jobdescription = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold pt-10">COMMERCAIL DEPARTMENT</h1>
      <div className="mt-10">
        <h1 className="text-3xl font-bold pb-6">JOB DESCRIPITON</h1>
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
      <div>
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
      <div className="flex flew-wrap flex-col jutify-center w-full text-gray-700 bg-gray-100 rounded-lg shadow-md tracking-wide subpixel-antialiased lg:mb-32 mb-12">
        <form>
          <div>
            <div className = "container mx-auto">
              <label htmlFor="FirstName">Firs Name</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="LastName">Last Name</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="Email">Email</label>
            </div>
            <div>
              <label htmlFor="CountryCode">Country Code</label>
              <select name="countrycode" id="countrycode">
                <option value="Select">Select</option>
                <option value="885">855</option>
                <option value="884">884</option>
                <option value="93">93</option>
              </select>
              <label htmlFor="Phone Number">Phone Number</label>
              <input type="text" />
            </div>
            <div>
                <label htmlFor="CurrentLocation">Current Location</label>
                <select name="country" id="country">
                    <option value="Cambodia">Cambodia</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Chineses">Chineses</option>
                </select>
                <select name="state" id="state">
                    <option value="Phnom Penh">Phnom Penh</option>
                    <option value="Bangkok">Bangkok</option>
                    <option value="Pekang">Pekang</option>
                </select>
            </div>
            <div>
                <label htmlFor="Education">Education</label>
                <select name="education" id="education">
                    <option value="BanchalerDegree">Banchaler Degree</option>
                    <option value="Master">Master</option>
                    <option value="PHD">PHD</option>
                </select>
            </div>
            <div>
                <label htmlFor="A9 Mall">Why are you applying to A9 Mall</label>
                <textarea name="A9 Mall" id="A9 Mall" cols="20" rows="10"></textarea>
            </div>
            <div>
                <label htmlFor="UploadResume">Upload Resume</label>
                <input type="file" />
                <span>Only supports docx, jpg, pdf, jpeg, png. File size maximum 5MB. File Name maximum 300 characters.</span>
            </div>
            <div>
                <label htmlFor="UploadAddionalDocument">Upload Additional Document</label>
                <input type="file" />
                Only supports docx, jpg, pdf, jpeg, png. File size maximum 5MB. File Name maximum 300 characters.
            </div>
            <div>
                <input type="checkbox" />
                <label htmlFor="Ihavereadandunderstood">I have read and understood</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default jobdescription;
