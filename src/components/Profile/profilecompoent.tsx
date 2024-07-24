import { ReactElement, useEffect, useState } from "react";
import "../Profile/profile.css";
import { ProfileHeader } from "./profileheader";

export const ProfileComponent = () => {
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

      document.body.addEventListener("click", (event) => {
        const target = event.target as Node; // Type assertion
        if (
          !toastLiveExample.contains(target) &&
          !toastTrigger.contains(target)
        ) {
          toastBootstrap.hide();
        }
      });
    }
  }, []);

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        id="liveToastBtn"
        data-bs-toggle="toast"
        data-bs-target="#liveToast"
      >
        Profile
      </button>

      <div className="toast-container position-fixed">
        <div
          id="liveToast"
          className="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <ProfileHeader />
          <div className="toast-body">
            Hello, world! This is a toast message.
          </div>
        </div>
      </div>
    </>
  );
};
