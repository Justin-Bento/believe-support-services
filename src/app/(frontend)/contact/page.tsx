import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <>
      <main className="container p-4 mx-auto my-16 space-y-16">
        {/* Support Center Section */}
        <section>
          <div className="max-w-2xl mx-auto lg:mx-0 space-y-2">
            <p className="text-base font-semibold leading-7 text-primary capitalize">
              Get the help you need
            </p>
            <h1 className="scroll-m-20 text-5xl font-bold tracking-tight capitalize">
              Support center
            </h1>
            <p className="text-lg max-w-[120ch] text-balance">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section>
          <form action="#" method="POST">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {/* First Name */}
              <div>
                <Label
                  htmlFor="first-name"
                  className="text-sm font-semibold capitalize"
                >
                  First name
                </Label>
                <div className="mt-2.5">
                  <Input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="shadow-none border-foreground/65"
                  />
                </div>
              </div>

              {/* Last Name */}
              <div>
                <Label
                  htmlFor="last-name"
                  className="text-sm font-semibold capitalize"
                >
                  Last name
                </Label>
                <div className="mt-2.5">
                  <Input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="shadow-none border-foreground/65"
                  />
                </div>
              </div>

              {/* Company */}
              <div className="sm:col-span-2">
                <Label
                  htmlFor="company"
                  className="text-sm font-semibold capitalize"
                >
                  Company
                </Label>
                <div className="mt-2.5">
                  <Input
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="organization"
                    className="shadow-none border-foreground/65"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="sm:col-span-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-semibold capitalize"
                >
                  Email
                </Label>
                <div className="mt-2.5">
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="shadow-none border-foreground/65"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="text-sm font-semibold capitalize"
                >
                  Phone number
                </label>
                <div className="relative mt-2.5">
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <label htmlFor="country" className="sr-only">
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      className="h-full py-0 pl-4 text-gray-400 bg-transparent border-0 rounded-md dark:bg-primary-950 bg-none pr-9 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    >
                      <option>US</option>
                      <option>CA</option>
                      <option>EU</option>
                    </select>
                  </div>
                  <Input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="shadow-none border-foreground/65"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold capitalize"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <Textarea
                    name="message"
                    id="message"
                    placeholder="Type your message here"
                    className="shadow-none border-foreground/65"
                    rows={4}
                    defaultValue={""}
                  />
                </div>
              </div>

              {/* Privacy Policy Switch */}
              {/* <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                <div className="flex items-center h-6">
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className={classNames(
                      agreed ? "bg-indigo-600" : "bg-gray-200",
                      "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    )}
                  >
                    <span className="sr-only">Agree to policies</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        agreed ? "translate-x-3.5" : "translate-x-0",
                        "h-4 w-4 transform rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                      )}
                    />
                  </Switch>
                </div>
                <Switch.Label className="body-small">
                  By selecting this, you agree to our{" "}
                  <a
                    href="#"
                    className="font-semibold text-gray-950 dark:text-yellow-600"
                  >
                    privacy&nbsp;policy
                  </a>
                  .
                </Switch.Label>
              </Switch.Group> */}
            </div>

            {/* Submit Button */}
            <div className="mt-10">
              <Button type="submit" className="w-32">
                Let&#39;s talk
              </Button>
            </div>
          </form>
        </section>

        {/* Offices Section */}
        <section>
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="scroll-m-20 pb-2 text-3xl font-bold tracking-tight first:mt-0 capitalize">
              Our offices
            </h2>
            <p className="mt-3 body-large">
              Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate
              id malesuada non. Cras aliquet purus dui laoreet diam sed lacus,
              fames.
            </p>
          </div>
          <div className="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-16 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {/* Los Angeles */}
            <div>
              <h3 className="pl-6 font-semibold">Los Angeles</h3>
              <address className="pt-2 pl-6 not-italic border-l border-primary/50">
                <p>4556 Brendan Ferry</p>
                <p>Los Angeles, CA 90210</p>
              </address>
            </div>

            {/* New York */}
            <div>
              <h3 className="pl-6 font-semibold">New York</h3>
              <address className="pt-2 pl-6 not-italic border-l border-primary/50">
                <p>886 Walter Street</p>
                <p>New York, NY 12345</p>
              </address>
            </div>

            {/* Toronto */}
            <div>
              <h3 className="pl-6 font-semibold">Toronto</h3>
              <address className="pt-2 pl-6 not-italic border-l border-primary/50">
                <p>7363 Cynthia Pass</p>
                <p>Toronto, ON N3Y 4H8</p>
              </address>
            </div>

            {/* London */}
            <div>
              <h3 className="pl-6 font-semibold">London</h3>
              <address className="pt-2 pl-6 not-italic border-l border-primary/50">
                <p>114 Cobble Lane</p>
                <p>London N1 2EF</p>
              </address>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
