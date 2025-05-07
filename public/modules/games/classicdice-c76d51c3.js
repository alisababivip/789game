const n = `<div class="item">
  <h2>Kết quả được tính toán như thế nào?</h2>
  <div class="help-content">
    <p>Để có được kết quả.</p>
    <ul>
      <li>
        Đầu tiên chúng ta tính toán giá trị hash của sự kết hợp với
        HMAC_SHA256. Điều này cho chúng ta một chuỗi hệ thập lục phân 64 ký tự:
        hash = HMAC_SHA256 (clientSeed:nonce, serverSeed).
      </li>
      <li>
        Cuối cùng, chúng tôi lấy 8 ký tự của băm và chuyển đổi nó thành một
        giá trị int32. Sau đó, chúng tôi chia giá trị chuyển đổi cho 0x100000000,
        nhân nó với 10001 và chia cho 100 để kết quả là
        số phù hợp với những hạn chế của phạm vi dice.
      </li>
    </ul>
    <br />
    <p>
      Lưu ý: Một hạt giống mới phải được đặt để xác minh dữ liệu trước đó (
      server seed được mã hóa).
    </p>
    <p></p>
    <p>
      Bạn có thực sự cần biết điều này không? Chắc là không.  Nó ở đó cho
      những người mong đợi sự minh bạch và chính xác trong một
      Trò chơi của Chance
    </p>
    <p>Chúng tôi đặt "thẻ trên bàn." </p>
    <p>Chúc em may mắn!</p>
  </div>
</div>`;
export {
    n as
    default
};