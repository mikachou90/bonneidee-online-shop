import "../styles/infoSticker.scss";
import { useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { AlertSnackbar } from "../components/Alert";

export default function InfoSticker() {
  const [showInfoSticker, setShowInfoSticker] = useState(true);
  const [showAlert, setShowAlert] = useState(false);

  function handleInfoSticker() {
    setShowInfoSticker(false);
    setShowAlert(true);
  }

  return (
    <>
      {showInfoSticker && (
        <div id="stickyInfo">
          <button>
            <IoCloseOutline className="closeIcon" onClick={handleInfoSticker} />
          </button>
          <div className="infoTitle">
            <IoMdInformationCircleOutline className="infoIcon" />
            <h3>提醒</h3>
          </div>
          <p>
            由於本網站使用免費伺服器，當伺服器處於休眠狀態時，啟動時間可能稍有延遲，敬請見諒。
          </p>
        </div>
      )}
      <AlertSnackbar
        open={showAlert}
        message="謝謝您的耐心與見諒!"
        setOpen={() => {
          setShowAlert(false);
        }}
        vertical="bottom"
        horizontal="right"
        severity="warning"
      />
    </>
  );
}
