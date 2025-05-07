const n = `<div class="item">
  <h2>Xác minh tính công bằng</h2>
  <p>Giải quyết vấn đề niềm tin với cờ bạc trực tuyến</p>
  <p>
    Khái niệm cơ bản về sự công bằng có thể chứng minh là người chơi có
    khả năng chứng minh và xác minh rằng kết quả của họ là công bằng và
    không bị thao túng. Điều này đạt được thông qua việc sử dụng một cam kết
    sử dụng cryptographic hashing.
  </p>
  <p>
    Chương trình cam kết được sử dụng để đảm bảo rằng người chơi có một
    ảnh hưởng đến tất cả các kết quả được tạo ra. Cryptographic hashing được sử dụng để
    đảm bảo rằng sòng bạc cũng vẫn trung thực với chương trình cam kết này.
    Cả hai khái niệm kết hợp tạo ra một môi trường ít tin cậy khi đánh bạc
    trực tuyến.
  </p>
  <p>Điều này được đơn giản hóa trong đại diện sau:</p>
  <ul>
    <li>Đầu tiên, hash = HMAC_SHA512(clientSeed:nonce, serverSeed)</li>
    <li>
      Cuối cùng, chúng tôi chia băm thành 16 nhóm trong các nhóm 8
      ký tự, mỗi nhóm sẽ được chuyển đổi thành một số trong phạm vi
      [0, 1). Nếu nhỏ hơn 0,5, quả bóng sẽ rơi sang trái.
      nếu không, nó sẽ rơi xuống bên phải.
    </li>
  </ul>
  <br />
  <p>
    Lưu ý: Một hạt giống mới phải được đặt để xác minh dữ liệu trước đó (máy chủ
    hạt giống được mã hóa)
  </p>
</div>`;
export {
    n as
    default
};