import { homeImages } from '../../content/images'
import Button from '../Shared/Button'
import Parallax from '../Shared/Parallax'
import Reveal from '../Shared/Reveal'
import SectionTitle from '../Shared/SectionTitle'
import DateInput from '../Shared/DateInput'

const input = 'block w-full border-0 bg-white px-7.5 py-4  text-dark outline-none placeholder:text-dark/50'

export default function Contact() {
  return (
    <section className="relative z-20">
      <Parallax src={homeImages.contact} strength={0.08} className="absolute inset-y-0 left-0 hidden w-5/12 lg:block" />
      <div className="relative">
        <div className="ml-auto lg:w-7/12">
          <div className="bg-light px-5 py-30 lg:pr-18 lg:pl-23 max-md:py-16">
            <Reveal>
              <SectionTitle sub="Contact Us">
                Planning a Visit <br />
                to Guwahati?
              </SectionTitle>
              <form onSubmit={(e) => e.preventDefault()} className="grid gap-5 sm:grid-cols-2">
                <input type="text" name="name" placeholder="Your Name" required className={input} />
                <input type="email" name="email" placeholder="Email Address" required className={input} />
                <DateInput name="checkin" placeholder="Check In" required className={input} />
                <DateInput name="checkout" placeholder="Check Out" required className={input} />
                <textarea name="textarea" placeholder="Write a Message" rows={2} className={`${input} sm:col-span-2`} />
                <div className="sm:col-span-2">
                  <Button type="submit" className="!px-8 !py-4">Contact the Hotel</Button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
