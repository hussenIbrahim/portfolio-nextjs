import Swal from "sweetalert2";

export const getConfirmFromUser = (text: string) => {
  Swal.fire({
    title: "Note",
    text: text,
    icon: "info",
    showCancelButton: false,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ok!",
  });
};
