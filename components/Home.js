import Link from "next/link";
import Scroller from "./Scroller";

function Home() {
  return (
    <div>
      <Scroller />
      <div className="home_content bg-gray-400">
        <section class="bg-white dark:bg-gray-900">
          <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
            <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
              <h6 class="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
                A comprehensive support system dedicated to empowering
                individuals and businesses as they navigate the complexities of
                international education and integration
              </h6>
              {/* <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
                A comprehensive support system dedicated to empowering
                individuals and businesses as they navigate the complexities of
                international education and integration
              </p> */}
              {/* <Link
                href="/services"
                class="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Read more
                <svg
                  aria-hidden="true"
                  class="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link> */}
            </div>

            <div class="grid md:grid-cols-2 gap-8">
              <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                <p class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
                  <svg
                    class="w-3 h-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                      d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                    ></path>
                  </svg>
                  University
                </p>
                <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                  Simplify application processes
                </h2>
                <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                  SOP, motivational letter, cover letter writing, and
                  scholarship application assistance
                </p>
                <Link
                  href="/services"
                  class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
                >
                  See More
                  <svg
                    aria-hidden="true"
                    class="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </Link>
              </div>

              <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                <p class="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
                  <svg
                    class="w-3 h-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                      d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    ></path>
                  </svg>
                  Language
                </p>
                <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                  Bridge language barriers
                </h2>
                <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                  Professional translation services in English, Spanish, and
                  French
                </p>
                <Link
                  href="/services"
                  class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
                >
                  See More
                  <svg
                    aria-hidden="true"
                    class="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
