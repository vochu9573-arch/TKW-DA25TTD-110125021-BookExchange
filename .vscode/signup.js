// Đảm bảo code chỉ chạy khi trang đã tải xong
document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('registerForm');

    if (registerForm) {
        registerForm.addEventListener('submit', function (event) {
            // 1. Chặn trình duyệt gửi form đi (Tránh lỗi 405 trên GitHub)
            event.preventDefault();

            // 2. Lấy dữ liệu từ các ô input
            const fullName = document.getElementById('fullname').value;
            const password = document.getElementById('pwd').value;
            const rePassword = document.getElementById('re-pwd').value;

            // 3. Kiểm tra mật khẩu khớp nhau
            if (password !== rePassword) {
                alert("Mật khẩu xác nhận không khớp. Vui lòng kiểm tra lại!");
                return;
            }

            // 4. Tạo hiệu ứng che mật khẩu bằng dấu *
            const maskedPassword = "*".repeat(password.length);

            // 5. Hiển thị thông báo
            alert(`Cảm ơn bạn đã đăng ký tài khoản!\nTên tài khoản của bạn là: ${fullName}\nMật khẩu: ${maskedPassword}`);
            
            // 6. Xóa dữ liệu trên form sau khi đăng ký xong (tùy chọn)
            registerForm.reset();
        });
    } else {
        console.error("Không tìm thấy form với id 'registerForm'");
    }
});