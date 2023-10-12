import { withListener } from "./withListener"

function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return (
      <div>
        <p>Had Changes</p>
        <button 
          onClick={() => toggleShow(false)}
        >
          Refresh
        </button>
      </div>
    )
  } else {
    return null
  }
}

export const ChangeAlertWithListener = withListener(ChangeAlert);