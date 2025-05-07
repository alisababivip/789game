const n = `<div id="crash-help-fair" class="item">
  <h2>Trò chơi có công bằng không?</h2>
  <div class="help-content">
    <p>
      Chúng tôi là một nền tảng công bằng và dự đoán vô tư và phỏng đoán.
      Mục tiêu của chúng tôi là xoá bỏ tất cả các yếu tố không công bằng và tạo cho người chơi
      cảm giác thoải mái và vui vẻ.
    </p>
    <p>
      Chúng tôi đã tạo ra tổng cộng 10 triệu băm (chuỗi thế hệ có thể kiểm chứng), 
      và mỗi hash tương ứng với một số nhân Crash.
    </p>
    <p>
      Chúng tôi phát hành 10 triệu con số này theo thứ tự ngược lại, mỗi
      tương ứng với một lượt của trò chơi (tức là chúng tôi có 10 triệu
      tổng cộng).
    </p>
    <p>
      Nói cách khác, số vụ tai nạn của mỗi lượt đã tồn tại và
      không được tính sau khi trò chơi bắt đầu. Do đó, người chơi có thể
      đặt cược mà không cần lo lắng.
    </p>
  </div>
  <h2>
    Trò chơi sẽ bị thao túng bởi nền tảng?
    <a
      class="h2-link cl-primary"
      rel="noopener noreferrer"
      href="https://__BC_GITHUB__.github.io/verify/crash.html"
      target="_blank"
    >Xác minh
      
    </a><a
      class="h2-link cl-primary"
      rel="noopener noreferrer"
      href="https://__BC_GITHUB__.github.io/verify/crash.html"
      target="_blank"
    >GitHub
    
          </a>
    &nbsp;&nbsp;
  </h2>
  <div class="help-content">
    <p>
      Giá trị kiểm tra tính toàn vẹn là chìa khóa để xác minh xem có
      bất kỳ thao tác chính thức nào; Thuật toán kiểm tra được cung cấp như
      sau.
    </p>
    <p>
      Ví dụ:
      6b5124897c3c48d0e46cc9249f08c7e560792459f1bad1171224643b5d2be231
    </p>
    <ol>
      <li>
        Lấy một giá trị ngẫu nhiên trong phạm vi 2^52, cụ thể là 16^13, tức là
        Số thập lục phân 13 bit (vì giá trị băm là
        hexadecimal, 2^52 === 16^13)6b5124897c3c4 (0x6b5124897c3c4
        bằng 1887939992208324 trong hệ thập phân).
      </li>
      <li>
        Phân phối giá trị ngẫu nhiên thành 0~1, bằng cách chia nó cho
        giá trị tối đa 13 fs, cụ thể là 0x6b5124897c3c4/0x10000000000000.
        Với bản chất ngẫu nhiên rời rạc của giá trị băm, sau đó chúng tôi
        có thể nghĩ rằng bất kỳ giá trị băm nào cũng có thể được chuyển thành ngẫu nhiên
        số 0~1, 1887939992208324/4503599627370496 =
        0.419206889692064.
      </li>
      <li>
        Làm cho ngôi nhà cạnh 1%. Hơn nữa để tính 99/(1-X), trong đó X
        là giá trị ngẫu nhiên được tính ở Bước 2. Khi X bằng 0,
        kết quả là 99; khi X là 1, kết quả là dương vô hạn;
        khi X là 0,01, kết quả là 100; khi X nhỏ hơn 0,01,
        kết quả là ít hơn 100.
        <p>
          Kết luận: Phân phối số ngẫu nhiên tổng thể là 99 đến
          tích cực vô hạn; và khi phân phối số ngẫu nhiên
          là 0 ~ 0,01, kết quả nhỏ hơn 100.
        </p>
        <p>99/(1-0.419206889692064) = 170.45656748150867</p>
      </li>
      <li>
        Tất cả các giá trị nhỏ hơn 100 sẽ được đặt thành 100. Nói cách khác,
        có xác suất 1% rằng 100 sẽ xuất hiện. Làm tròn
        số và chia cho 100 để có kết quả cuối cùng.
        <p>170/100 = 1.70</p>
      </li>
    </ol>
    <p>
      Kết luận: Giá trị băm được sử dụng trong trò chơi là thứ tự nghịch đảo.
      Do đó, với thuật toán SHA256, một hàm băm trước đó được sử dụng trong
      trò chơi có thể được tính toán từ hash tiếp theo của nó. Vì có
      sự tương ứng một-một giữa khóa và giá trị của
      hash, chúng ta có thể rút ra kết luận rằng nếu một hash có thể được sử dụng để
      tính toán hàm băm trước nó, sau đó hàm băm này sẽ có
      đã được tạo ra khi giải thưởng trước đó được công bố.
      Tương tự như vậy, toàn bộ chuỗi băm được tạo ra tại chính
      bắt đầu và không thể thay đổi sau khi được tạo. Nếu không, nó
      không thể vượt qua xác minh bằng SHA256 và theo như khoản thanh toán là
      đây không gì khác hơn là một trò chơi xác suất trong đó
      crash là một Nhà tổ chức chính thức không thể thao túng bất kỳ bộ trò chơi nào. Do đó, TAI NẠN là minh bạch hơn các phương pháp cờ bạc khác. Đây là nền tảng mà trò chơi của chúng tôi được
      xây dựng.
    </p>
    <p>CÁCH TÍNH TOÁN ĐƠN GIẢN</p>
    <p>
      Khi giá trị băm 13 bit là 8000000000000 = 1,98, 0xb000000000
      = 3,168, 0xc000000000 = 3,96, nghĩa là chữ số đầu tiên là
      lớn hơn 8((16-8)/16≈0,5), kết quả xấp xỉ 2x;
      khi chữ số đầu tiên lớn hơn b((16-11)/16≈0.3),
      kết quả xấp xỉ 3x; và khi chữ số đầu tiên lớn hơn
      hơn c((16-12)/16≈0,25), kết quả xấp xỉ 4x và
      quy tắc tương tự áp dụng cho phần còn lại.
    </p>
    <p>
      Khi giá trị hash 13 bit là f000000000000 = 15.84,
      ff00000000000 = 253.44, fff000000
    </p>
  </div>
</div>`;
export {
    n as
    default
};