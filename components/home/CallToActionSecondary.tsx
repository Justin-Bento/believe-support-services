export default function CallToActionSecondary() {
  return (
    <div className="bg-blue-50">
      <div className="px-6 py-12 mx-auto max-w-7xl lg:flex lg:items-center lg:justify-between lg:py-24 lg:px-8">
        <h3 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-blue-600">Start your free trial today.</span>
        </h3>
        <div className="flex mt-8 lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
          <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
