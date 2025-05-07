const n = `<div class="item">
  <h2>Kết quả được tính toán như thế nào?</h2>
  <div class="help-content">
    <p>Để có được kết quả.</p>
    <div>
      Chuỗi Hex: hash = HMAC_SHA256(clientSeed:nonce, serverSeed)
    </div>
    <p>
      Ví dụ:
      6b5124897c3c48d0e46cc9249f08c7e560792459f1bad1171224643b5d2be231
    </p>
    <ol class="special">
      <li>
        Lấy một giá trị ngẫu nhiên trong phạm vi 2^52, cụ thể là 16^13, tức là 13 bit
        số thập lục phân (vì giá trị băm là thập lục phân, 2^52
        === 16^13)6b5124897c3c4 (6b5124897c3c4 bằng 1887939992208324 trong
        hệ thập phân (decimal system).
      </li>
      <li>
        Phân phối giá trị ngẫu nhiên thành 0~1, bằng cách chia cho giá trị lớn nhất
        giá trị của 13 fs, cụ thể là 6b5124897c3c4/fffffffffffff. Với bản
        chất ngẫu nhiên rời rạc của giá trị băm, sau đó chúng ta có thể nghĩ rằng
        bất kỳ giá trị băm nào cũng có thể được chuyển đổi thành một số ngẫu nhiên 0~1
        (fffffffffffff bằng 45035996270496 trong hệ thập phân)
        1887939992208324/4503599627370496 = 0.419206889692064.
      </li>
      <li>
        Làm cho ngôi nhà cạnh 1%. Hơn nữa để tính 99/(1-X), trong đó X là
        giá trị ngẫu nhiên được tính ở Bước 2. Khi X bằng 0, kết quả là
        99; khi X là 1, kết quả là dương vô hạn; khi X là 0,01,
        kết quả là 100; khi X nhỏ hơn 0,01, kết quả nhỏ
        hơn 100. <p>99/(1-0.419206889692064) = 170.45656748150867</p>
      </li>
      <li>
        Tất cả các giá trị nhỏ hơn 100 sẽ được đặt thành 100. Nói cách khác, ở đó
        là xác suất 1% mà 100 sẽ xuất hiện. Làm tròn số
        và chia cho 100 để có kết quả cuối cùng.
        <p>170/100 = 1.70</p>
      </li>
    </ol>
    <br />
    <p>
      Lưu ý: Một hạt giống mới phải được đặt để xác minh dữ liệu trước đó (máy chủ
      hạt giống được mã hóa).
    </p>
    <p></p>
    <p>
      Bạn có thực sự cần biết điều này không? Chắc là không.  Nó ở đó cho những
      những người mong đợi sự minh bạch và chính xác trong một trò chơi may rủi công bằng có thể chứng minh
      được.
    </p>
    <p>Chúng tôi đặt "thẻ trên bàn". </p>
    <p>Chúc em may mắn!</p>
  </div>
</div>`;
export {
    n as
    default
};