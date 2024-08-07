import ThemeProvider from './ThemeProvider';

interface ModalProp {
  children: any;
}

const Modal = ({ children }: ModalProp) => {
  return (
    <div className="bg-white/80 h-full w-full fixed top-0 bottom-0 left-0 z-50">
      <div className="h-[600px] w-full md:w-[420px] absolute bottom-0 lg:bottom-28 right-0 lg:right-32 px-6 pt-10 bg-[#F3F3F3] dark:bg-[#272727] border border-black dark:border-white md:rounded-3xl ">
        {/* modal header */}
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-xl md:text-3xl text-black dark:text-white">
              JDGEN{' '}
            </h3>
            <p className="text-sm text-black dark:text-white/70 -mt-1">
              AI job description generator.{' '}
            </p>
          </div>

          <div>
            <ThemeProvider />
          </div>
        </div>

        {/* modal body */}
        <div className="mt-8 h-3/4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
