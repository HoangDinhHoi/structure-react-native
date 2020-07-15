# Cấu trúc thư mục của một dự án React Native

**Author: ***Hoàng Đình Hợi*****
***

1. assets:

        Là thư mục chứa các resource của dự án như các Font chữ, các ảnh, và icon: 
            - fonts: Chứa bộ font chữ
            - icons: Chứa các tệp icon
            - images: Chứa các tệp ảnh

2. components:

        Là thư mục chứa toàn bộ các Component của dự án, các Component này có đặc điểm là có thể tái sử dụng nhiều lần.

3. configs:

        Là thư mục chứa các file cấu hình của dự án như:
            - Configs.js: Chứa cấu hình tĩnh như domain để kết nối đến server, menu, cấu hình ngôn ngữ, font chữ...
            - HTTP.js: Chứa các hàm để lấy dữ liệu như: post, get thông qua việc gọi API.
            - Database.js: Chứa các hàm để lấy và set, xóa dữ liệu cho local database.

4. pages:

        Là thư mục chứa toàn màn hình của dự án. Trong đó là các thư mục đại diện cho các chức năng chính.

5. redux:

        Là thư mục chứa toàn bộ state của dự án sử dụng thư viện redux và redux-thunk. Trong đó:

            - actions: Làm nhiệm vụ lấy dữ liệu từ ứng dụng và gửi đến store, các action này sẽ được định nghĩa trong file type.js.
            - reducers: Làm nhiệm vụ lấy các state cũ của ứng dụng, action và trả về state mới.
            - store.js: Là một object mà nó giữ các state của ứng dụng và cung cấp một số helper method để truy cập state, dispatch actions và đăng ký listeners. Toàn bộ state được đại diện bởi một single store.

6. repository:

        Toàn bộ hàm sử dụng để gọi API được lưu trữ tại đây.

7. routes:

        Làm nhiệm vụ điều hướng các màn hình trong folder pages. Sử dụng thư viên react-navigation.

8. styles:

        Chứa toàn bộ định nghĩa styles cho ứng dụng. Trong đó có file theme.style.js chứa các mã màu, các fontFamily mặc định.

9. utils:

        Chứa toàn bộ các hàm tính toán.

10. data.js:

        Là file chứa các dữ liệu mẫu.

## Lưu ý

        - Toàn bộ file trong dự án này đều phải ghi rõ ràng như sau:
                Author?: Tác giả là ai?
                Created on?: Tạo ngày tháng năm nào?
                Description?: Mô tả cho file hiện tại?
