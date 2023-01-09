import { HiInbox, HiSparkles } from "react-icons/hi";

export default function PrimaryFeatures() {
  return (
    <div className="relative pt-16 pb-32 overflow-hidden bg-white">
      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="max-w-xl px-6 mx-auto lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div>
              <div>
                <span className="flex items-center justify-center w-12 h-12 bg-yelllow-600 rounded-xl">
                  <HiInbox className="w-8 h-8 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h4 className="type-headline-large">
                  Embrace Each Indivisuals Uniquness
                </h4>
                <p className="mt-4 type-body-large">
                  We strive to create an inclusive community that celebrates
                  diversity and promotes an atmosphere of understanding and
                  acceptance. We recognize that everyone has a unique
                  perspective and strive to create an environment that
                  facilitates open dialogue and encourages collaboration.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-6 mt-8 border-t border-gray-200">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    &ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed
                    diam. Sit orci risus aenean curabitur donec aliquet. Mi
                    venenatis in euismod ut.&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        className="w-6 h-6 rounded-full"
                        src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                        alt=""
                      />
                    </div>
                    <div className="text-base font-medium text-gray-700">
                      Marcia Hill, Digital Marketing Manager
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-6 -mr-48 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="max-w-xl px-6 mx-auto lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
            <div>
              <div>
                <span className="flex items-center justify-center w-12 h-12 bg-yelllow-600 rounded-xl">
                  <HiSparkles
                    className="w-8 h-8 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h4 className="type-headline-large">
                  Move for individuals with complex needs
                </h4>
                <p className="mt-4 type-body-large">
                  Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis
                  bibendum malesuada faucibus lacinia porttitor. Pulvinar
                  laoreet sagittis viverra duis. In venenatis sem arcu pretium
                  pharetra at. Lectus viverra dui tellus ornare pharetra.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
            <div className="pr-6 -ml-48 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
