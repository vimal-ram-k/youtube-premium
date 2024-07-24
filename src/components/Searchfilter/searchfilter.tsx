import { useEffect } from "react";
import "./searchfilter.css";

export const SearchFilter = () => {
  useEffect(() => {
    const toastTrigger = document.getElementById("liveToastBtn");
    const toastLiveExample = document.getElementById("liveToast");

    if (toastTrigger && toastLiveExample) {
      const toastBootstrap = new window.bootstrap.Toast(toastLiveExample, {
        autohide: false,
      });

      toastTrigger.addEventListener("click", () => {
        toastBootstrap.show();
      });
    }
  }, []);

  return (
    <>
      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div
          id="liveToast"
          className="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body">
            Hello, world! This is a toast message.
          </div>
        </div>
      </div>
    </>
  );
};
