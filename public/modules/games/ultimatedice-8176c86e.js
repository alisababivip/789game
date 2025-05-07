const n = `<div class="item">
  <h2>Kết quả được tính toán như thế nào?</h2>
  <div class="help-content">
    <p>Để có kết quả.</p>
    <ul>
      <li>
        Đầu tiên chúng ta tính toán sự kết hợp giá trị hash với HMAC_SHA256. Nó cho chúng ta một chuỗi thập lục phân 64 ký tự: hash = HMAC_SHA256 (clientSeed:nonce:row, serverSeed).
      </li>
      <li>
        Cuối cùng, chúng ta lấy 8 ký tự của hash và chuyển đổi thành một
        giá trị int32. Sau đó chúng ta chia giá trị đã chuyển đổi cho 0x100000000,
        nhân nó với 10000 để số kết quả phù hợp với
        các ràng buộc của phạm vi xúc xắc.
      </li>
    </ul>
    <br />
    <p>
      Lưu ý: Một seed mới phải được đặt để xác minh dữ liệu trước đó (
      máy chủ seed được mã hóa).
    </p>
    <p></p>
    <p>
      Bạn có thực sự cần biết điều này? Đương nhiên không. Nó ở đó cho
      những người mong đợi sự minh bạch và tính chính xác trong một trò chơi công bằng có thể chứng minh được
      cơ hội.
    </p>
    <p>Chúng tôi đặt "bài trên bàn." </p>
    <p>Chúc may mắn!</p>
  </div>
</div>`;
export {
    n as
    default
};