import Swal from "sweetalert2";


export const registerSuccess = () => {
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Producto Agregado correctamente",
        showConfirmButton: false,
        timer: 1200,
        customClass: {
            title: 'custom-swal-title',
            content: 'custom-swal-content',
            confirmButton: 'custom-swal-button'
        }
      });
}
