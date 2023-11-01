/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
const Example = () => {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="data:image/jpeg;base64,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"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST"> {/*TODO: action에 요청을 보낼 경로 지정 */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#54AB75] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-[#54AB75] hover:text-[#49965F]">
                    비밀번호를 잊어버리셨나요?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#54AB75] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#54AB75] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#49965F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                로그인 
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-[#54AB75] hover:text-[#49965F]">
              Start a Register
            </a>
          </p>
        </div>
      </div>
    </>
  )
}
export {Example};
