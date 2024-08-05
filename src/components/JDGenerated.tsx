import Modal from './elements/Modal';

const JDGenerated = () => {
  return (
    <Modal>
      <div className="h-full">
        <div className="mb-2 flex justify-between items-center">
          <h2 className="font-semibold text-base text-black">
            Frontend Developer
          </h2>

          <button className="font-semibold">Copy</button>
        </div>

        <div className=" h-[92%] overflow-y-scroll ">
          <h3 className="text-sm teext-black mb-1">Job Description:</h3>
          <p className="text-black text-xs mb-3">
            We are seeking a talented and experienced Frontend Developer with a
            strong background in React.js and Next.js to join our development
            team. The ideal candidate will be responsible for developing and
            maintaining high-quality web applications, ensuring an exceptional
            user experience. You will work closely with our backend developers,
            designers, and product managers to bring our innovative products to
            life.
          </p>

          <h3 className="text-sm teext-black mb-1">Key Responsibilities:</h3>
          <ul className="text-black text-xs mb-3">
            <li className="list-disc list-inside">
              {' '}
              Develop and maintain user-facing features using React.js and
              Next.js.
            </li>
            <li className="list-disc list-inside">
              {' '}
              Build reusable components and front-end libraries for future use.
            </li>
            <li className="list-disc list-inside">
              {' '}
              Translate designs and wireframes into high-quality code.{' '}
            </li>
            <li className="list-disc list-inside">
              Optimize components for maximum performance across a vast array of
              web-capable devices and browsers.
            </li>
            <li className="list-disc list-inside">
              Collaborate with backend developers to integrate user-facing
              elements with server-side logic.
            </li>
            <li>Ensure the technical feasibility of UI/UX designs.</li>
            <li className="list-disc list-inside">
              Participate in code reviews and provide constructive feedback to
              peers.
            </li>
            <li className="list-disc list-inside">
              Stay up-to-date with the latest industry trends and technologies
              to ensure our applications are current and competitive.
            </li>
          </ul>

          <h3 className="text-sm teext-black mb-1">Job Description:</h3>
          <p className="text-black text-xs">
            We are seeking a talented and experienced Frontend Developer with a
            strong background in React.js and Next.js to join our development
            team. The ideal candidate will be responsible for developing and
            maintaining high-quality web applications, ensuring an exceptional
            user experience. You will work closely with our backend developers,
            designers, and product managers to bring our innovative products to
            life.
          </p>
        </div>

        <form className="flex items-center gap-x-3 justify-between mt-4 bg-transparent py-2 px-5  border border-black rounded-xl focus-within::outline-0  focus-within:border-blue-600">
          <input
            className="flex-1 border-0 focus:border-0 outline-none shadow-none bg-transparent text-black text-base"
            type="text"
            placeholder="Follow up chat"
          />

          <button>Send</button>
        </form>
      </div>
    </Modal>
  );
};

export default JDGenerated;
