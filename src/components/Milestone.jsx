import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Milestone = () => {
  return (
    <section className="col-lg-6 py-4 mt-3 mx-auto">
      <header className="fs-5 fw-bold ">
        <h2 className="text-center">
          <span className="textAccent fs-1">Milestone</span>
        </h2>
      </header>
      {/* <div className="text-center">
        <div className="spinner-grow spinner-grow-sm bg-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div> */}
      <div className="p-3 border-start border-3 rounded m-5 mt-0 border-yellow shadow bg-light">
        <div className="fw-bold fs-5">Software Developer</div>
        <div className="fw-bold opacity-75 d-sm-flex justify-content-between border-bottom border-2 pb-2">
          <div>Premier Software Enterprise Inc.</div>
          <div>
            <span> May 22, 2023 to Current</span>
          </div>
        </div>
        <div>
          <span>Amorsolo, Makati</span>
        </div>
      </div>
    </section>
  );
};
