import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, CheckIcon } from '@heroicons/react/24/outline';
import Navigation from '../Navigation/Navigation'
const features = [
  {
    name: 'Budget and Location',
    description:
      'At our agency, we pride ourselves on delivering homes that perfectly align with your budget and desired location. Our dedicated team works tirelessly to curate a diverse selection of properties, ensuring there is something for everyone. Whether you are seeking a cozy apartment',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Versatile',
    description:
      'Our house rental services offer a wide range of properties, from cozy apartments to spacious family homes, tailored to meet your needs and preferencesSit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: LockClosedIcon,
  },
  {
    name: 'Convenience',
    description:
      'this website for house rental services because of its user-friendly interface, extensive property listings, and reliable customer support. It provides a seamless experience for finding rental homes tailored to my budget and preferred location.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Secure',
    description:
      'Ensuring the utmost security, our rental documentation and payment processes are meticulously designed to safeguard your interests. From encrypted online transactions to comprehensive lease agreements, we prioritize your peace of mind.',
    icon: FingerPrintIcon,
  },
]

const includedFeatures = [
  'Private forum access',
  'Member resources',
  'Entry to annual conference',
  'Official member t-shirt',
]

export default function Services() {
  return (
    <>
    <Navigation/>
      <div className="bg-white py-24 sm:py-32" style={{ backgroundImage: `url('https://images.pexels.com/photos/1652402/pexels-photo-1652402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-black-900 sm:text-4xl">
              Everything you need to Find Here
            </p>
            <p className="mt-6 text-lg leading-8 text-black-600">
              Experience hassle-free renting with our dedicated team, committed to providing transparent processes, fair pricing, and exceptional customer service.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16 font-bold">
                  <dt className="text-base font-bold leading-7 text-black-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-black-00">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-black-900 sm:text-2xl ">Simple no-tricks pricing</h2>
            <p className="mt-6 text-lg leading-8 text-black-600">
              Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas
              in. Explicabo id ut laborum.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-black-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-black-900">Lifetime membership</h3>
              <p className="mt-6 text-base leading-7 text-black-600">
                Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis
                repellendus etur quidem assumenda.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h4>
                <div className="h-px flex-auto bg-black-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-black-600 sm:grid-cols-2 sm:gap-6"
              >
                {includedFeatures.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-black-50 py-10 text-center ring-1 ring-inset ring-black-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-black-600">Pay accoridng to plan</p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-sm font-semibold leading-6 tracking-wide text-black-600">If you subscribe and pay for a subscription on the house rental website</span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-black-600">you'll gain access to the 1-year and 2-year subscription plans.</span>
                  </p>
                  <a
                    href="#"
                    className="mt-10 block w-full rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-black-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get access
                  </a>
                  <p className="mt-6 text-xs leading-5 text-black-600">
                    Invoices and receipts available for easy company reimbursement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}