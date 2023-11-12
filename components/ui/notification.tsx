// import React from "react";
// import { toast } from "react-toastify";
// import PropTypes from "prop-types";
// import AlertIcon from "@/icons/alert-icon";
// import CheckCircleIcon from "@/icons/check-circle-icon";
// import CrossIcon from "@/icons/cross-icon";
// import InfoIcon from "@/icons/info-icon";
// import XCircleIcon from "@/icons/x-circle-icon";
// import ToasterContainer from "@/components/ToasterContainer";

// export type NotificationTypes = "success" | "warning" | "error" | "info";

// type ToastMessageProps = {
//   type: NotificationTypes;
//   message: string;
// };

// const ToastMessage: React.FC<ToastMessageProps> = ({
//   type,
//   message,
// }) => 
//   toast[type](
//     <div style={{ display: "flex" }}>
//       <div style={{ flexGrow: 1, fontSize: 15, padding: "8px 12px" }}>
//         {message}
//       </div>
//     </div>
// );

// const ICON_SIZE = 20;

// function displayIcon(type: NotificationTypes) {
//   switch (type) {
//     case "success":
//       return <CheckCircleIcon size={ICON_SIZE} className="text-emerald-40" />;
//     case "warning":
//       return <AlertIcon size={ICON_SIZE} className="text-orange-40" />;
//     case "error":
//       return <XCircleIcon size={ICON_SIZE} className="text-rose-40" />;
//     default:
//       return <InfoIcon size={ICON_SIZE} className="text-grey-40" />;
//   }
// }

// ToastMessage.propTypes = {
//   message: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired
// };

// ToastMessage.dismiss = toast.dismiss;

// export default ToastMessage;
