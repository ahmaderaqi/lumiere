import Image from "next/image";
import { Inter } from "next/font/google";
import Home from "@/components/Home";
import Layout from "@/components/layout/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home1() {
  return (
    <Layout>
      <div className="bg-gray-100">
        <Home />
        <div className="bg-white">
          <section className="container mx-auto mt-8 p-4">
            <h1 className="text-3xl md:text-4xl text-center font-bold mb-8">
              Lumière offers a wide range of services
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 border-2 rounded-lg shadow-md p-4">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                    Enhance communication skills
                  </h2>
                </div>
                <img
                  src="https://gitmind.com/wp-content/uploads/2022/11/how-to-improve-communication-skills.jpg" // Replace with your chart image URL
                  alt="Ecommerce Growth Chart"
                  className="w-full rounded-lg"
                />
                <p className="text-gray-700 text-lg mt-4">
                  English and Spanish language courses tailored to various
                  levels and needs{" "}
                </p>
              </div>

              <div className="bg-gray-50 border-2 rounded-lg shadow-md p-4">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                    Facilitate seamless interactions
                  </h2>
                </div>
                <img
                  src="https://si-interactive.s3.amazonaws.com/prod/plansponsor-com/wp-content/uploads/2023/03/06102159/PS-030623-How-Plan-Sponsors-Can-Best-Communicate-With-Participants-1070519266-web.jpg" // Replace with your country usage image URL
                  alt="Ecommerce Usage by Country"
                  className="w-full rounded-lg"
                />
                <p className="text-gray-700 text-lg mt-4">
                  Interpretation services for meetings, conferences, and events
                </p>
              </div>

              <div className="bg-gray-50 border-2 rounded-lg shadow-md p-4">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Enrich cultural experiences
                  </h2>
                </div>
                <img
                  src="https://img.jakpost.net/c/2019/06/19/2019_06_19_74715_1560938146._large.jpg" // Replace with your ecommerce overview image URL
                  alt="Ecommerce Overview"
                  className="w-full rounded-lg"
                />
                <p className="text-gray-700 text-lg mt-4">
                  Knowledgeable tour guides to explore the local area
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 border-2 rounded-lg shadow-md p-4">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                    Support research endeavors
                  </h2>
                </div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKy48NlLou7ZClrlUACo-9m5XQFD-UHivB_GVMFt5XxQ&s" // Replace with your chart image URL
                  alt="Ecommerce Growth Chart"
                  className="w-full rounded-lg"
                />
                <p className="text-gray-700 text-lg mt-4">
                  Auditing, translation, and writing services tailored to your
                  research needs
                </p>
              </div>

              <div className="bg-gray-50 border-2 rounded-lg shadow-md p-4">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                    Streamline scholarship applications
                  </h2>
                </div>
                <img
                  src="https://www.smarterselect.com/hs-fs/hubfs/Leveraging-Technology-to-Streamline-Corporate-Scholarship-Applications.jpg?quality=high&width=800&upsize=true&name=Leveraging-Technology-to-Streamline-Corporate-Scholarship-Applications.jpg" // Replace with your country usage image URL
                  alt="Ecommerce Usage by Country"
                  className="w-full rounded-lg"
                />
                <p className="text-gray-700 text-lg mt-4">
                  Our user-friendly Uni App simplifies scholarship search and
                  application processes
                </p>
              </div>

              <div className="bg-gray-50 border-2 rounded-lg shadow-md p-4">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Maximize scholarship opportunities
                  </h2>
                </div>
                <img
                  src="https://media.licdn.com/dms/image/D4E12AQEnZJ_FlQeeRg/article-cover_image-shrink_720_1280/0/1689850840552?e=2147483647&v=beta&t=G-I489TfheddbUW7eU7VQs3J8APgYx-ogrhFo6ZptWM" // Replace with your ecommerce overview image URL
                  alt="Ecommerce Overview"
                  className="w-full rounded-lg"
                />
                <p className="text-gray-700 text-lg mt-4">
                  Active assistance with contacting professors and universities
                  for scholarship inquiries
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"> {/* Added mb-8 here */}
              <div className="bg-gray-50 border-2 rounded-lg shadow-md p-4">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                    Ensure well-being
                  </h2>
                </div>
                <img
                  src="https://www.recipesforwellbeing.org/wp-content/uploads/2021/07/120-SDG3-Ensure-healthy-lives-and-promote-well-being-for-all-at-all-ages_landscape-scaled.jpg" // Replace with your chart image URL
                  alt="Ecommerce Growth Chart"
                  className="w-full rounded-lg"
                />
                <p className="text-gray-700 text-lg mt-4">
                  Access to suitable medical insurance plans for exchange
                  students
                </p>
              </div>

              <div className="bg-gray-50 border-2 rounded-lg shadow-md p-4">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                    Ease housing concerns
                  </h2>
                </div>
                <img
                  src="https://www.mtroyal.ca/nonprofit/InstituteforCommunityProsperity/Happenings/Housing-Crisis-Image-4.png" // Replace with your country usage image URL
                  alt="Ecommerce Usage by Country"
                  className="w-full rounded-lg"
                />
                <p className="text-gray-700 text-lg mt-4">
                  Assistance in finding comfortable and convenient
                  accommodations
                </p>
              </div>

              <div className="bg-gray-50 border-2 rounded-lg shadow-md p-4">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Provide airport transportation
                  </h2>
                </div>
                <img
                  src="https://lh5.googleusercontent.com/proxy/KZP9RJzBPFA-FAqW6Ol_B8kpQZyMEYYc9jPIS02yNe2bB3PYz6H3UoEd1it0lxX3g78nPbusioWibwM3fPLqJOayTA7CdXvnBZRUkQJpgrfgq6U" // Replace with your ecommerce overview image URL
                  alt="Ecommerce Overview"
                  className="w-full rounded-lg"
                />
                <p className="text-gray-700 text-lg mt-4">
                  Reliable services to and from the airport for a smooth arrival
                  and departure
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
