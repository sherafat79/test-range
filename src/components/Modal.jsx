export default function Modal({ showModal, children }) {
    return (
      <>
        {showModal ? (
          <>
            <div className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none px-4 focus:outline-none animate__animated animate__bounceInDown">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
                  {children}
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    );
  }
  