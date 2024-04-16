import FotterComponent from '@/components/molecules/Fotter'
import Navbar from '@/components/molecules/navbar'
import React, { useState } from 'react'
import sapStyle from "../../styles/sapTalentStyle.module.css"
import hireDevStyles from "./../../styles/hireDevStyles.module.css";
import { cardsStyling } from '@/constants/commonStyle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import sapficoStyle from "../../styles/sapficoTalentHubStyle.module.css";
import css from "../../styles/sapTalentStyle.module.css"
import CustomButton2 from '@/components/atoms/CustomButton2';
import Image from 'next/image';
const SapficoTalentHubPage = () => {
    const [muduleSelect, setModuleSelect] = useState("SAPModules");
    const [selected, setSelected] = useState("AI-Vetted");
    return (
        <div>
            <Navbar />
            <section className={sapficoStyle.outerSectionMost} >
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <div className={sapficoStyle.topsection}>
                        <div style={{ fontSize: "48px", width: "300px", fontWeight: "600", lineHeight: "59px" }}>SAP-FICO Talent Hub</div>
                        <div style={{ fontSize: "20px" }}>Find a transformation consultant to achieve meaningful change.</div>
                        <div>
                            <CustomButton2
                                label="FIND OVERVIEW"
                                // onClick={hirenowClick}
                                buttonStyle={{
                                    width: "272px",
                                    height: "51.6px",
                                    border: "1px solid #2871ff",
                                    color: "#fff",
                                    fontSize: "20px",
                                    backgroundColor: "#2871ff",
                                }}
                                hoverStyle={{
                                    backgroundColor: "lightblue",
                                    color: "#2871ff",
                                }}
                            />
                        </div>
                    </div>
                    <Image style={{borderRadius:"10px"}} src="/TalentPoolImages/sapfico.png" height={330} width={330} alt="" />
                </div>
            </section>
            
            <section>
                <div className={hireDevStyles.headingunleash} >
                    {/* <br />
                    <br /> */}
                    {/* <h2 style={cardsStyling.sapCloudLegacyMainHeading}>
                        Unleashing the Power of Tech Talent Expertise
                    </h2> */}
                    {/* <br /> */}
                    {/* <h3 style={cardsStyling.sapCloudLegacySubHeading}>Elevate Your Projects with Our Talent Experience, Versatility, and Collaboration at Your Service</h3> */}


                </div>
                <section id={hireDevStyles.fontpopBelow}>
                    <div id={hireDevStyles.selectbar}>
                        <div style={selected === "AI-Vetted" ? { borderBottom: "2px solid yellow" } : { borderBottom: "2px solid grey" }}>
                            <div style={{ padding: "30px" }} onClick={() => setSelected("AI-Vetted")}>Expertise Showcase</div>
                        </div>
                        <div style={selected === "Certified" ? { borderBottom: "2px solid yellow" } : { borderBottom: "2px solid grey" }}>
                            <div style={{ padding: "30px" }} onClick={() => setSelected("Certified")}>Client Testimonials</div>
                        </div>
                        <div style={selected === "Accomplished" ? { borderBottom: "2px solid yellow" } : { borderBottom: "2px solid grey" }}>
                            <div style={{ padding: "30px" }} onClick={() => setSelected("Accomplished")}>Solution Offerings</div>
                        </div>
                        <div style={selected === "On-Demand" ? { borderBottom: "2px solid yellow" } : { borderBottom: "2px solid grey" }}>
                            <div style={{ padding: "30px" }} onClick={() => setSelected("On-Demand")}>Partnership Opportunities</div>
                        </div>
                        <div style={selected === "Versatile" ? { borderBottom: "2px solid yellow" } : { borderBottom: "2px solid grey" }}>
                            <div style={{ padding: "30px" }} onClick={() => setSelected("Versatile")}>Contact Information</div>
                        </div>
                        
                    </div>
                </section>
            </section>
            {selected === "AI-Vetted" && <section id={hireDevStyles.fontpop2}>
                <div id={hireDevStyles.scalableGrowth2}>
                    <div id={hireDevStyles.scalableGrowthInner}>

                        <Image src="/HireDevImages/sapSolution.jpg" style={{ padding: "0px" }} alt="" height={300} width={300} />
                    </div>
                    <div id={hireDevStyles.scalableGrowthInner2}>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <div id={hireDevStyles.mosteinnerContainer}>
                                {/* <div id={hireDevStyles.scalableGrowthHeading}>Agile Team Composition</div> */}
                                <div className={hireDevStyles.scalableSubheading}>Our seasoned SAP FICO consultants bring years of hands-on experience in financial management, accounting, and controlling. With deep knowledge of SAP solutions, they excel in optimizing processes and driving business growth.</div>
                            </div>
                        </div>
                        <div style={{ padding: "40px", marginTop: "30px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More - SAP consulting</span></div>

                    </div>
                </div>
            </section>}
            {selected === "Certified" && <section id={hireDevStyles.fontpop2}>
                <div id={hireDevStyles.scalableGrowth2}>
                    <div id={hireDevStyles.scalableGrowthInner}>

                        <Image src="/HireDevImages/migration.jpg" style={{ padding: "0px" }} alt="" height={300} width={350} />
                    </div>
                    <div id={hireDevStyles.scalableGrowthInner2}>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <div id={hireDevStyles.mosteinnerContainer}>
                                {/* <div id={hireDevStyles.scalableGrowthHeading}>Agile Team Composition</div> */}
                                <div className={hireDevStyles.scalableSubheading}>Hear from satisfied clients who have witnessed tangible results and transformational changes through our consulting services. Their feedback underscores our commitment to delivering exceptional value and exceeding expectations.</div>
                            </div>
                        </div>
                        <div style={{ padding: "40px", marginTop: "30px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More</span></div>

                    </div>
                </div>
            </section>}
            {selected === "Accomplished" && <section id={hireDevStyles.fontpop2}>
                <div id={hireDevStyles.scalableGrowth2}>
                    <div id={hireDevStyles.scalableGrowthInner}>

                        <Image src="/HireDevImages/industrySap.webp" style={{ padding: "0px" }} alt="" height={200} width={300} />
                    </div>
                    <div id={hireDevStyles.scalableGrowthInner2}>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <div id={hireDevStyles.mosteinnerContainer}>
                                {/* <div id={hireDevStyles.scalableGrowthHeading}>Agile Team Composition</div> */}
                                <div className={hireDevStyles.scalableSubheading}>From seamless system implementations to tailored customization and ongoing support, our comprehensive suite of consulting services caters to every aspect of SAP FICO requirements. We empower businesses to leverage technology for strategic advantage.</div>
                            </div>
                        </div>
                        <div style={{ padding: "40px", marginTop: "30px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More</span></div>

                    </div>
                </div>
            </section>}
            {selected === "On-Demand" && <section id={hireDevStyles.fontpop2}>
                <div id={hireDevStyles.scalableGrowth2}>
                    <div id={hireDevStyles.scalableGrowthInner}>

                        <Image src="/HireDevImages/integration.jpg" style={{ padding: "0px" }} alt="" height={300} width={300} />
                    </div>
                    <div id={hireDevStyles.scalableGrowthInner2}>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <div id={hireDevStyles.mosteinnerContainer}>
                                {/* <div id={hireDevStyles.scalableGrowthHeading}>Agile Team Composition</div> */}
                                <div className={hireDevStyles.scalableSubheading}>Collaborate with us to leverage our expertise and resources in SAP FICO for mutual success. Whether you're a business seeking consultancy or a fellow consultancy firm, let's explore synergies and create value together.</div>
                            </div>
                        </div>
                        <div style={{ padding: "40px", marginTop: "30px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More</span></div>

                    </div>
                </div>
            </section>}
            {selected === "Versatile" && <section id={hireDevStyles.fontpop2}>
                <div id={hireDevStyles.scalableGrowth2}>
                    <div id={hireDevStyles.scalableGrowthInner}>

                        <Image src="/HireDevImages/sapSupport.webp" style={{ padding: "0px" }} alt="" height={300} width={300} />
                    </div>
                    <div id={hireDevStyles.scalableGrowthInner2}>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <div id={hireDevStyles.mosteinnerContainer}>
                                {/* <div id={hireDevStyles.scalableGrowthHeading}>Agile Team Composition</div> */}
                                <div className={hireDevStyles.scalableSubheading}>Ready to unlock the full potential of SAP FICO for your business? Reach out to us today for expert insights, personalized consultations, and bespoke solutions. Connect with our team via phone, email, or through our online inquiry form.</div>
                            </div>
                        </div>
                        <div style={{ padding: "40px", marginTop: "30px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More</span></div>

                    </div>
                </div>
            </section>}
            <section>
                <div className={sapStyle.leftbuttonSection2}>
                    
                    <div className={sapStyle.buttonSection}>
                        <div style={{ marginTop: "50px" }}>
                            <div className={muduleSelect === "SAPModules" ? sapStyle.singleButtonClicked : sapStyle.singleButton} onClick={() => setModuleSelect("SAPModules")}>Knowledge Repository</div>
                            <div className={muduleSelect === "SAPSolutions" ? sapStyle.singleButtonClicked : sapStyle.singleButton} onClick={() => setModuleSelect("SAPSolutions")}>Learning Opportunities</div>
                            <div className={muduleSelect === "SAPFunctional" ? sapStyle.singleButtonClicked : sapStyle.singleButton} onClick={() => setModuleSelect("SAPFunctional")}>Community Engagement</div>
                            <div className={muduleSelect === "SAPTechnical" ? sapStyle.singleButtonClicked : sapStyle.singleButton} onClick={() => setModuleSelect("SAPTechnical")}>Industry Insights</div>
                            {/* <div className={muduleSelect === "ProjectType" ? sapStyle.singleButtonClicked : sapStyle.singleButton} onClick={() => setModuleSelect("ProjectType")}>SAP Project Types</div>
                            <div className={muduleSelect === "RoleType" ? sapStyle.singleButtonClicked : sapStyle.singleButton} onClick={() => setModuleSelect("RoleType")}>SAP Talent Roles</div> */}
                        </div>
                        {muduleSelect === "SAPModules" && <div className={sapStyle.buttonContent}>
                            <div style={{ fontSize: "25px", fontWeight: "600", color: "#2871FF" }}>Knowledge Repository</div>
                            {/* <div style={{ fontSize: "19px", fontWeight: "600" }}>Explore Talent for a Diverse Array of 50+ SAP Modules and Sub-Modules</div> */}
                            <div style={{ fontSize: "16px", color: "#3C3C3C" }}>Dive into our extensive library featuring a wealth of articles, templates, and tools curated to support your journey in SAP FICO. Access valuable resources to deepen your understanding and enhance your proficiency in financial management and SAP systems.</div>
                            {/* <div style={{ fontSize: "16px", color: "#3C3C3C" }}>50+</div> */}
                            {/* <div>sapfico-resource-hub</div> */}
                            <div style={{ padding: "10px", marginTop: "10px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More - sapfico-resource-hub</span></div>
                            

                        </div>}
                        {muduleSelect === "SAPSolutions" && <div className={sapStyle.buttonContent}>
                            <div style={{ fontSize: "25px", fontWeight: "600", color: "#2871FF" }}>Learning Opportunities</div>
                            {/* <div style={{ fontSize: "19px", fontWeight: "600" }}>Discover Consultants for a Wide Range of 30+ SAP Solutions and Specializations</div> */}
                            <div style={{ fontSize: "16px", color: "#3C3C3C" }}>Join our vibrant community of learners and experts in SAP FICO through our diverse range of webinars, workshops, and events. Expand your knowledge, acquire new skills, and stay ahead of industry trends with our dynamic learning experiences.</div>
                            {/* <div style={{ fontSize: "16px", color: "#3C3C3C" }}>40+</div> */}
                            <div style={{ padding: "10px", marginTop: "10px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More</span></div>

                        </div>}
                        {muduleSelect === "SAPFunctional" && <div className={sapStyle.buttonContent}>
                            <div style={{ fontSize: "25px", fontWeight: "600", color: "#2871FF" }}>Community Engagement</div>
                            {/* <div style={{ fontSize: "19px", fontWeight: "600" }}>Figure out Our SAP Talent&apos;s Functional Proficiency Across 40+ Key Functional Areas</div> */}
                            <div style={{ fontSize: "16px", color: "#3C3C3C" }}>Engage in meaningful discussions, share insights, and seek guidance from fellow professionals in our forums and discussion groups. Connect with like-minded individuals, collaborate on projects, and foster a culture of knowledge exchange within the SAP FICO community.</div>
                            {/* <div style={{ fontSize: "16px", color: "#3C3C3C" }}>20+</div> */}
                            <div style={{ padding: "10px", marginTop: "10px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More</span></div>

                        </div>}
                        {muduleSelect === "SAPTechnical" && <div className={sapStyle.buttonContent}>
                            <div style={{ fontSize: "25px", fontWeight: "600", color: "#2871FF" }}>Industry Insights</div>
                            {/* <div style={{ fontSize: "19px", fontWeight: "600" }}>Figure out Our SAP Talent&apos;s Functional Proficiency Across 40+ Key Functional Areas</div> */}
                            <div style={{ fontSize: "16px", color: "#3C3C3C" }}> Stay abreast of the rapidly evolving landscape of SAP FICO with our latest updates on trends, regulations, and innovations. Gain valuable insights that empower you to make informed decisions and adapt to changes in the industry landscape effectively.</div>
                            {/* <div style={{ fontSize: "16px", color: "#3C3C3C" }}>20+</div> */}
                            <div style={{ padding: "10px", marginTop: "10px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More</span></div>

                        </div>}

                    </div>
                </div>
            </section>
            <section id={hireDevStyles.fontpop}>
                {/* <div style={{ textAlign: "center" }}>
                    <div id={hireDevStyles.scalableGrowthHeading}>
                       Flexi bility and Scalability for Your SAP Projects
                    </div>
                    <div className={hireDevStyles.scalableSubheading}>Tailored Talent Solutions to Match Your Unique Business Needs, Project Size and Complexity</div>
                </div> */}
                <div id={hireDevStyles.scalableGrowth}>
                    <div id={hireDevStyles.scalableGrowthInner}>
                        <div id={hireDevStyles.scalableGrowthHeading}>Unlock Your Potential with Our SAP Talent Pool</div>
                        <div>Discover Certified Experts in SAP Modules for Flexible Engagement Models</div>
                        <div style={{ padding: "10px", marginTop: "10px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More</span></div>

                    </div>
                    <div id={hireDevStyles.scalableGrowthInner2}>
                        <div style={{ display: "flex", gap: "10px",alignItems:"center"  }}>
                            <div>
                                <Image src="/HireDevImages/skillset.png" alt="" height={50} width={50} />
                            </div>
                            <div id={hireDevStyles.mosteinnerContainer}>
                                <div id={hireDevStyles.scalableGrowthHeading}>Exclusive Access and Networking</div>
                                <div className={hireDevStyles.scalableSubheading}>oin our SAP FICO talent pool to access top job opportunities, projects, and freelance gigs while networking with like-minded professionals.</div>
                            </div>
                        </div>
                        <div style={{ display: "flex", gap: "10px",alignItems:"center"  }}>
                            <div>
                                <Image src="/HireDevImages/certified_exp.webp" alt="" height={50} width={50} />
                            </div>
                            <div id={hireDevStyles.mosteinnerContainer}>
                                <div id={hireDevStyles.scalableGrowthHeading}>Stay Informed and Supported</div>
                                <div className={hireDevStyles.scalableSubheading}>Receive regular updates on industry trends and skill requirements, along with access to career support resources like workshops and counseling, to propel your SAP FICO career forward. </div>
                            </div>
                        </div>
                        <div style={{ display: "flex", gap: "10px",alignItems:"center" }}>
                            <div>
                                <Image src="/HireDevImages/engagement.jpg" alt="" height={50} width={50} />
                            </div>
                            <div id={hireDevStyles.mosteinnerContainerLast}>
                                <div id={hireDevStyles.scalableGrowthHeading}>Community Engagement</div>
                                <div className={hireDevStyles.scalableSubheading}> Connect with peers within our vibrant community, exchange insights, and collaborate on projects, fostering growth and advancement in the SAP FICO domain.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={sapficoStyle.transsection}>
                <div className={sapficoStyle.transsectionHeading}>
                    <div style={{fontSize:"20px",marginBottom:"10px",fontWeight:"600"}}>SAP-FICO Expertise</div>
                    <div>SAP FICO professionals encompass Functional, Technical, and Techno-Functional Consultants, each with distinct responsibilities. </div>
                    <div style={{ padding: "10px", marginTop: "10px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More</span></div>
                </div>
                <div className={sapficoStyle.transsectionBoxOuter}>
                <div className={sapficoStyle.transsectionBox}>
                    <div style={{fontSize:"18px",marginBottom:"10px",fontWeight:"600"}}>Skills Development and Validation</div>
                    <div style={{ padding: "10px", marginTop: "10px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More</span></div>
                </div>
                <div className={sapficoStyle.transsectionBox}>
                    <div style={{fontSize:"18px",marginBottom:"10px",fontWeight:"600"}}>Expert-Led Learning</div>
                    <div style={{ padding: "10px", marginTop: "10px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More</span></div>
                </div>
                <div className={sapficoStyle.transsectionBox}>
                    <div style={{fontSize:"18px",marginBottom:"10px",fontWeight:"600"}}>Practical Learning Environment</div>
                    <div style={{ padding: "10px", marginTop: "10px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More</span></div>
                </div>
                </div>
            </section>
            <FotterComponent />
        </div>
    )
}

export default SapficoTalentHubPage
