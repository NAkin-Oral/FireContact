import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function toastifySuccess(msg) {
  toast.success(msg, {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

export default toastifySuccess;

export function toastifyInfo(msg) {
  toast.info(msg, {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

export function toastifyWarn(msg) {
  toast.warn(msg, {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
