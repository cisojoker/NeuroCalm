import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className={`wrapper py-10 transition-all relative duration-300 px-2 mt-10 mb-10 lg:mb-32 lg:-mt-7 `}
    >
      <div
        className={`contact relative transition-all duration-1000  backdrop-blur-3xl z-10 lg:top-24 top-10 lg:flex border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,1)] shadow-2xl shadow-black rounded-2xl m-1 lg:p-8 lg:mx-32`}
      >
        <div className="details space-y-8 p-6 lg:w-1/2">
          <h1 className="lg:text-6xl text-5xl font-jost font-bold">
            We believe there&apos;s a better way to Scale your Business.
          </h1>
          <p className={`text-xl font-medium`}>
            Thank you for visiting our website! If you have any questions,
            concerns, or feedback, please don&apos;t hesitate to reach out to
            us. We are dedicated to providing you with excellent customer
            service and support.
          </p>
        </div>
        <div className="form p-6 lg:p-0 lg:w-1/2">
          <h1 className="text-2xl font-bold font-jost">
            Got a
            <span className="ml-2 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#E74A9F] relative inline-block">
              <span className="relative text-white text-6xl font-bold">
                Project
              </span>
            </span>
          </h1>
          <form
            className="flex pt-8 pb-5 space-y-6 flex-col"
            action="https://formsubmit.co/madhurciso01@gmail.com"
            method="post"
          >
            <input
              required
              className={`outline-none transition-all duration-300 border-slate-400 drop-shadow-sm border-2 rounded-xl p-4`}
              type="text"
              placeholder="Enter Full Name*"
              name="clientname"
              id="clientname"
            />
            <input
              required
              className={`outline-none transition-all duration-300 border-slate-400 drop-shadow-sm border-2 rounded-xl p-4`}
              type="email"
              placeholder="Enter Email Address"
              name="email"
              id="email"
            />
            <textarea
              required
              className={` transition-all duration-300 outline-none border-slate-400 drop-shadow-sm border-2 rounded-xl p-4`}
              name="message"
              id=""
              placeholder="Tell Us Something About Your Project"
              cols="30"
              rows="4"
            ></textarea>
            <input
              type="submit"
              value="Contact Us"
              className={`bg-[#E74A9F] text-white p-3 w-fit cursor-pointer rounded-sm transition-all duration-300 hover:-translate-y-1`}
            />
            <input
              type="hidden"
              name="_next"
              value="https://clip-surf.vercel.app/"
            />
            <input type="hidden" name="_captcha" value="false"></input>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
