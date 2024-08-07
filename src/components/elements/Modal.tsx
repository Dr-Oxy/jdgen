interface ModalProp {
  children: any;
}

const Modal = ({ children }: ModalProp) => {
  return (
    <div className="bg-white/80 h-full w-full fixed top-0 bottom-0 left-0 z-50">
      <div className="h-[600px] w-full md:w-[420px] absolute bottom-0 lg:bottom-28 right-0 lg:right-32 px-6 pt-10 bg-[#F3F3F3] border border-black md:rounded-3xl ">
        {/* modal header */}
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-xl md:text-3xl text-black">
              JDGEN{' '}
            </h3>
            <p className="text-sm text-black -mt-1">
              AI job description generator.{' '}
            </p>
          </div>

          <div>
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5 23.8958C20.1369 23.8958 23.8958 20.1369 23.8958 15.5C23.8958 10.8631 20.1369 7.10416 15.5 7.10416C10.8631 7.10416 7.10413 10.8631 7.10413 15.5C7.10413 20.1369 10.8631 23.8958 15.5 23.8958Z"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M24.7225 24.7225L24.5546 24.5546M24.5546 6.44542L24.7225 6.2775L24.5546 6.44542ZM6.27754 24.7225L6.44546 24.5546L6.27754 24.7225ZM15.5 2.68667V2.58334V2.68667ZM15.5 28.4167V28.3133V28.4167ZM2.68671 15.5H2.58337H2.68671ZM28.4167 15.5H28.3134H28.4167ZM6.44546 6.44542L6.27754 6.2775L6.44546 6.44542Z"
                stroke="#292D32"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* modal body */}
        <div className="mt-8 h-3/4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
