// Đợi DOM tải xong để đảm bảo các phần tử HTML đã sẵn sàng
document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.querySelector('form');

    if (registerForm) {
        registerForm.addEventListener('submit', function (event) {
            // Ngăn chặn load lại trang
            event.preventDefault();

            // Lấy dữ liệu từ các ô input
            const fullName = document.getElementById('fullname').value;
            const password = document.getElementById('pwd').value;
            const rePassword = document.getElementById('re-pwd').value;

            // Kiểm tra mật khẩu khớp nhau
            if (password !== rePassword) {
                alert("Mật khẩu xác nhận không khớp. Vui lòng kiểm tra lại!");
                return;
            }

            // Tạo chuỗi dấu sao để che mật khẩu
            const maskedPassword = "*".repeat(password.length);

            // Hiển thị thông báo
            alert(`Cảm ơn bạn đã đăng nhập tài khoản!\nTên tài khoản của bạn là: ${fullName}\nMật khẩu: ${maskedPassword}`);
            
            // Tùy chọn: Gửi form đi sau khi hiện thông báo (nếu có server thật)
            // this.submit();
        });
    }
});