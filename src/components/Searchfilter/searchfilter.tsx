import { useEffect } from "react";
import "./searchfilter.css";

export const SearchFilter = () => {
  useEffect(() => {
    const toastTrigger = document.getElementById("liveToastBtn");
    const toastTriggerbtnmob = document.getElementById("liveToastBtnmob");
    const toastLiveExample = document.getElementById("liveToast");

    if (toastTrigger && toastLiveExample && toastTriggerbtnmob) {
      const toastBootstrap = new window.bootstrap.Toast(toastLiveExample, {
        autohide: false,
      });

      const showToast = () => {
        toastBootstrap.show();
      };

      const hideToast = (event) => {
        const target = event.target as Node;
        if (
          !toastLiveExample.contains(target) &&
          !toastTrigger.contains(target) &&
          !toastTriggerbtnmob.contains(target)
        ) {
          toastBootstrap.hide();
        }
      };

      toastTrigger.addEventListener("click", showToast);
      toastTriggerbtnmob.addEventListener("click", showToast);
      document.body.addEventListener("click", hideToast);

      return () => {
        toastTrigger.removeEventListener("click", showToast);
        toastTriggerbtnmob.removeEventListener("click", showToast);
        document.body.removeEventListener("click", hideToast);
      };
    }
  }, []);

  return (
    <div className="toast-container position-fixed p-3">
      <div
        id="liveToast"
        className="toast toast-custom-width"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-body">
          <ul className=" list-group">
            <li className=" list-group-item btn btn-sm text-start">
              Js tutotial
            </li>
            <li className=" list-group-item btn btn-sm text-start">
              Js tutotial
            </li>
            <li className=" list-group-item btn btn-sm text-start">
              Js tutotial
            </li>

            <li className=" list-group-item btn btn-sm text-start">
              Js tutotial
            </li>
            <li className=" list-group-item btn btn-sm text-start">
              Js tutotial
            </li>
            <li className=" list-group-item btn btn-sm text-start">
              Js tutotial
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
