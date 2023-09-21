---
title: "[Blockchain Fundamentals][Bài 2] Public-key cryptography và One-way function"
author: phnaharris
pubDatetime: 2022-02-07T00:00:00
postSlug: 2022-02-07-blockchain-fundamentals-bai-2
featured: false
draft: false
tags:
  - blockchain
  - fundamentals
  - vietnamese
ogImage: "/assets/blog/2022-02-07-blockchain-fundamentals-bai-2/encryption.png"
description: "Có bao giờ bạn tự hỏi rằng, liệu ngày xưa trong thời chiến tranh, những bên tham gia cuộc chiến truyền tin nội bộ bằng cách nào mà không bị phát hiện dù cho quân địch có bắt được người truyền tin của quân ta, và ngày nay, Bitcoin mã hóa các giao dịch trong mạng lưới như thế nào để dù mọi thông tin về giao dịch là công khai nhưng người sử dụng vẫn giữ được tính ẩn danh của mình?"
---

Chuỗi bài viết Blockchain Fundamentals của mình sẽ góp cho bạn những góc nhìn sơ
khởi về mặt kỹ thuật của công nghệ blockchain, các yếu tố công nghệ của các loại
cryptocurrency như Bitcoin hay Ethereum,... và mình hoàn toàn không khuyến nghị
hay gợi ý cho người đọc về việc đầu tư bất kỳ loại cryptocurrency nào. Vậy nên
bạn hãy chỉ đọc những bài viết của mình dưới góc nhìn kỹ thuật, và tự chịu trách
nhiệm cho quyết định của mình nhé.

Những thông tin trong bài viết của mình được trích từ khóa học cùng tên
[Blockchain Fundamentals](https://www.youtube.com/playlist?list=PLxVihxZC42nF_MCN9PTvZMIifRjx9cZ2J)
của tác giả Bill Laboon, Web3 Foundation. Nếu có hứng thú với lĩnh vực này, hãy
học khóa học và trao đổi thêm với mình về những suy nghĩ của bạn nhé.

Ở bài viết trước, mình đã giới thiệu cho các bạn về nhu cầu sử dụng tiền của
loài người được hình thành như thế nào, giải thích về cách blockchain dần được
phát triển từ những ngày sơ khai nhất, và Bitcoin được xem như là ứng dụng hiện
đại đầu tiên của blockchain. Ở bài viết này, mình sẽ nói về các dạng thức mã hóa
thông tin như **mã hóa khóa đối xứng (Symmetric-Key Encryption)** và **mã hóa
bất đối xứng (Public-Key Encryption)**, ưu nhược điểm của hai dạng thức mã hóa
này, cách Bitcoin sinh ra cặp **public-private key** và có những ý niệm sơ khai
nhất về **One-way Function**, để từ đó ta có thể đi sâu hơn tìm hiểu về Hash
function ở bài tiếp theo.

# Encryption [^1] (mã hóa)

<div align="center">
    <img src="/assets/blog/2022-02-07-blockchain-fundamentals-bai-2/encryption.png" alt="Encryption"/>
    <p><i>Encryption</i></p>
</div>

Trong mật mã học – một ngành toán học ứng dụng cho công nghệ thông tin,
**encrypt (mã hóa)** là phương pháp để biến thông tin (phim ảnh, văn bản, hình
ảnh...) từ định dạng bình thường sang dạng thông tin không thể hiểu được nếu
không có phương tiện giải mã.

**Decrypt (giải mã)** là phương pháp để đưa từ dạng thông tin đã được mã hóa về
dạng thông tin ban đầu, quá trình ngược của **encrypt (mã hóa)**.

Một hệ thống mã hóa bao gồm các thành phần:

1. thông tin trước khi mã hóa, ký hiệu là **P (Plaintext)**.
2. thông tin sau khi mã hóa, ký hiệu là **C (Ciphertext)**.
3. khóa, ký hiệu là **K (Key)**.
4. phương pháp mã hóa/giải mã, ký hiệu là **E/D (Encryption/Decryption)**.

Quá trình mã hóa được tiến hành bằng cách áp dụng hàm toán học E lên thông tin
P, vốn được biểu diễn dưới dạng số, để trở thành thông tin đã mã hóa C.

Quá trình giải mã được tiến hành ngược lại: áp dụng hàm D lên thông tin C để
được thông tin đã giải mã P.

## Symmetric-Key Encryption (mã hóa khóa đối xứng)

<div align="center">
    <img src="/assets/blog/2022-02-07-blockchain-fundamentals-bai-2/symmetric-key-encryption.png" alt="Symmetric-key Encryption"/>
    <p><i>Symmetric-key Encryption</i></p>
</div>

Symmetric-Key Encryption (mã hóa khóa đối xứng) là hệ thống mã hóa xuất hiện đầu
tiên, trước khi mã hóa bất đối xứng ra đời.

Nguyên lý chung của các hệ thống Symmetric-key Encryption là dùng **một khóa K**
cho cả việc encrypt (mã hóa) và decrypt (giải mã).

### Mật mã Caesar

Để hiểu hơn về cách hoạt động của một hệ thống Symmetric-key, ta hãy cùng xem
qua một ví dụ điển hình của hệ thống này là Mật mã Caesar.

Trong mật mã học, Mật mã Caesar, còn gọi là mật mã dịch chuyển, là một trong
những mật mã đơn giản và được biết đến nhiều nhất. Hệ mã Caesar là một hệ mã hóa
thay thế đơn âm, làm việc trên bảng chữ cái tiếng Anh 26 ký tự. Đó là một dạng
của mật mã thay thế, trong đó mỗi ký tự trong văn bản được thay thế bằng một ký
tự cách nó một đoạn trong bảng chữ cái để tạo thành bản mã.

Giả sử Alice và Bob có hàm $t(x)$ là hàm chuyển từ ký tự sang số $(t(A)=1,
t(B)=2,...,t(Z)=26)$, với $m = t(x)$ là nội dung tin nhắn, khóa $K_e = 5.$ Ta có
hàm mã hóa: $c = E(K_e, m) = m + K_e = t(x) + K_e$. Ta có hàm giải mã: $m =
D(K_e, c) = c - K_e = t(x) - K_e$

Để mã hóa kí tự **A**, với khóa $K_e = 5,$ ta nhận được

$$c = E(K_e, m) = m + K_e = t(x) + K_e$$ $$= t(A) + K_e = 1 + 5 = 6 = F$$

Để giải mã kí tự **F**, với khóa $K_e = 5,$ ta nhận được

$$m = D(K_e, c) = c - K_e = t(x) - K_e $$ $$= t(F) - K_e = 6 - 5 = 1 = A.$$

### Nguyên lý Kerckhoff [^2]

Trong mật mã học, nguyên tắc Kerckhoffs (còn gọi là tiên đề Kerckhoffs) được
Auguste Kerckhoffs đưa ra trong thế kỷ XIX: _"Độ an toàn của hệ thống mật mã
không phụ thuộc vào việc giữ bí mật thuật toán mã hóa, nó phụ thuộc vào việc giữ
bí mật chìa khóa mã."_. Hay nói cách khác, sự bảo mật bằng cách giấu diếm không
phải là cách phòng thủ đúng đắn, mà thay vào đó, hệ thống bảo mật nên không cần
bí mật mà vẫn an toàn khi rơi vào tay kẻ thù.

Mật mã Caesar có thể dễ dàng bị phá, bằng một số cách:

- **Frequency Analysis (Phân tích tần suất)**: Nguyên lý của phương pháp này là
  trong mỗi ngôn ngữ, mỗi ký tự trong bảng chữ cái có một tần suất xuất hiện
  nhất định. Từ việc phân tích tần suất xuất hiện của các kí tự trong bản mã và
  tần suất xuất hiện của các ký tự hoặc nhóm ký tự trong ngôn ngữ đó, ta có thể
  dự đoán ký tự hoặc nhóm ký tự trong bản mã tương ứng với ký tự hay nhóm ký tự
  nào trong thực tế. Cách tấn công này được dùng thường xuyên trong các hệ thống
  mật mã ở những thời kỳ đầu.
- **Known Plaintext Attack (Tấn công khi đã biết bản rõ)**: Cách tấn công này
  dựa vào việc đã tìm được một vài cặp bản rõ - bản mã, từ đó suy ra khóa được
  dùng và dùng khóa đã tìm được để giải những bản mã còn lại.
- **Brute Force (Vét cạn)**: Dễ nhận thấy rằng chỉ có 25 trường hợp có thể sử
  dụng làm khóa $K_e$ tương ứng với 25 kí tự còn lại trong bảng chữ cái (trường
  hợp khóa $K_e = 26$ cho ra kết quả giống với trường hợp $K_e = 0$, nghĩa là kí
  tự sau khi mã hóa không đổi so với kí tự ban đầu).

### Xác thực danh tính với hệ thống mã hóa khóa đối xứng

<div align="center">
    <img src="/assets/blog/2022-02-07-blockchain-fundamentals-bai-2/authentication-via-symmetric.png" alt="Authentication via Symmetric Encryption"/>
    <p><i>Authentication via Symmetric Encryption</i></p>
</div>

Giả sử Alice gửi cho Bob một đoạn tin nhắn đã được mã hóa khóa đối xứng kèm thêm
một kí tự MAC (message authentication code) làm khóa $K_a$. Bob không những từ
kí tự đó có thể giải mã ra tin nhắn ban đầu mà còn cần biết được đoạn message có
phải của Alice gửi cho mình hay không, mục đích là:

- Phòng trường hợp bị một người nào đó tấn công vào kết nối và thay đổi đoạn tin
  nhắn.
- Biết được có đúng Alice gửi cho mình đoạn tin nhắn đó hay không.

Nhu cầu này dẫn đến phát sinh một tình huống: Làm sao để Alice và Bob chia sẻ
khóa $K_a$ cho nhau một cách an toàn, khi mà kết nối hiện tại của họ đang bị một
bên khác nghe lén? Tình huống này có thể giải quyết bằng cách hai người gửi khóa
$K_a$ cho nhau trước khi trao đổi thông điệp bằng một vài cách an toàn hơn (gửi
trực tiếp chẳng hạn), nhưng nhìn chung việc này gây khó khăn ít nhiều và đây là
điểm yếu của phương pháp mã hóa khóa đối xứng, rằng khó có thể truyền tin an
toàn trong một môi trường kết nối không an toàn.

Để khắc phục điểm yếu này, ta sẽ tiếp tục tìm hiểu về hệ thống mã hóa bất đối
xứng.

## Public-Key Encryption (mã hóa bất đối xứng)

Hệ thống Public-Key Encryption (mã hóa bất đối xứng) là hệ thống khắc phục được
điểm yếu của hệ thống mã hóa khóa đối xứng đã được trình bày ở trên, hỗ trợ
truyền tin an toàn trong một môi trường kết nối không an toàn.

Nguyên lý của các hệ thống Public-Key Encryption là dùng hai khóa:

- **Public key** P: dùng để mã hóa thông tin, công khai cho tất cả mọi người và
  bất cứ ai cũng có thể dùng khóa này để mã hóa cùng thông điệp cần gửi cho bạn.
- **Private (Secret) key** S: dùng để giải mã thông tin, chỉ **duy nhất** một
  người giữ private key của mình mới có thể giải mã được thông tin gửi cho họ.

Sự ra đời của hệ thống Public-Key Encryption là một cột mốc lớn, mở ra một thời
đại mới trong ngành mật mã học.

Để hiểu hơn cách hoạt động của hệ thống Public-Key Encryption, ta cùng đi qua
một ví dụ sau.

Giả sử Alice gửi cho Bob một đoạn tin nhắn được mã hóa với public key của Bob
thông qua một kết nối không an toàn - đã bị nghe lén. Người nghe lén nào đó đã
nhận được đoạn tin này, nhưng cũng không thể làm gì được vì chỉ có Bob mới có
thể giải mã với private key của mình và đọc được đoạn tin nhắn này. Từ đó Alice
và Bob có thể truyền tin cho nhau một cách an toàn, trong một môi trường kết nối
không an toàn (tức đã bị nghe lén). Dù tin nhắn có bị người khác lấy được cũng
không bị lộ thông tin cần truyền đi vì người lấy được tin nhắn không có private
key của người nhận để giải mã.

**Một số đặc điểm của cặp public - secret key trong một blockchain:**

- Public key và secret key có mối liên hệ với nhau, phải được sinh ra cùng nhau
  chứ không chỉ đơn giản là 2 chuỗi ký tự ngẫu nhiên.
- Có nhiều thuật toán để tạo ra cặp key này như RSA [^3], ECDSA [^4]. Bitcoin sử
  dụng thuật toán ECDSA để tạo ra cặp public - secret key này, public key đóng
  vai trò như địa chỉ ví cá nhân, secret key đóng vai trò là chuỗi 24 ký tự bí
  mật của mỗi địa chỉ ví, chỉ chủ sở hữu ví cá nhân đó mới có chuỗi ký tự bí mật
  này.

Tính hiệu quả của Public-Key Encryption so với Symmetric-Key Encryption:

- **Về tốc độ**: Public-Key Encryption nhìn chung là chậm hơn Symmetric-Key
  Encryption vì phải thông qua quá trình tạo cặp khóa public - secret key rồi
  mới có thể mã hóa thông điệp và truyền tin, còn Symmetric-Key Encryption thì
  chỉ cần đơn giản là sử dụng khóa và mã hóa thông điệp là có thể truyền tin.
- **Về tính an toàn**: Trong khi Symmetric-Key Encryption có thể dễ dàng bị phá
  khi môi trường kết nối không an toàn hay bị nghe lén, người khác có thể dễ
  dàng đoán được khóa và thông điệp được truyền đi thì Public-Key Encryption đảm
  bảo việc thông tin dù có bị nghe lén thì người nghe lén cũng không thể giải mã
  thông tin này, chỉ người nhận mới có thể giải mã thông tin với secret key của
  mình.

Như ở trên mình đã trình bày thì dù là hệ thống Symmetric-Key Encryption hay
Public-Key Encryption đều có ưu và nhược điểm nhất định (về tốc độ và tính an
toàn thông tin). Vì vậy, để kết hợp được những ưu điểm và loại bỏ bớt những
nhược điểm của hai hệ thống mã hóa này, tăng tốc độ truyền tin và tính an toàn
thông tin, trong thực tế các hệ thống hiện đại, người ta thường truyền tin theo
quy trình sau:

1. Thành lập một kết nối dựa trên hệ thống public-key encryption.
2. Truyền symmetric-key cho nhau thông qua kết nối này.
3. Sử dụng symmetric-key để trao đổi dữ liệu về sau.

Quy trình này nhằm trước tiên tạo ra một môi trường truyền tin an toàn bằng hệ
thống mã hóa bất đối xứng, truyền khóa của hệ thống mã hóa khóa đối xứng cho các
bên liên quan và từ đây, khóa được truyền đi an toàn và ta có thể sử dụng hệ
thống mã hóa khóa đối xứng cho các công việc trao đổi dữ liệu về sau để đạt được
tốc độ tốt hơn hệ thống mã hóa bất đối xứng.

### Public-key Infrastructure (PKI) [^5]

> Not your keys, not your coins

Câu hỏi đặt ra là làm thế nào để ta có thể biết được các khóa public - secret
key là thuộc về một định danh nào đó nhất định (Làm sao để biết P<sub>Bob</sub>
là public key của Bob?)? Đây là lúc ta cần một tập hợp các vai trò, chính sách,
phần cứng, phần mềm và thủ tục cần thiết để tạo, quản lý, phân phối, sử dụng,
lưu trữ và thu hồi chứng chỉ số và quản lý mã hóa khóa công khai, gọi là
Public-key Infrastructure (PKI - hạ tầng khóa công khai). PKI có thể giải quyết
câu hỏi trên bằng nhiều phương thức, như Certificate Authorities - CA
(centralized), web of trust, Simple PKI - SPKI, Decentralized PKI - DPKI, … Mình
sẽ không đi sâu vào các khái niệm này, vì đây không phải nội dung mà chuỗi bài
viết này muốn hướng đến và mình cũng chưa có kiến thức nhiều lắm về PKI. Nếu bạn
quan tâm đến chủ đề này, đừng ngần ngại cho mình biết để mình tìm hiểu kĩ hơn và
viết thêm nhiều bài viết liên quan khác.

Hầu hết các blockchain ngày nay không có PKI được tích hợp sẵn, nghĩa là nếu bạn
sở hữu private key của một địa chỉ ví, bạn sẽ sở hữu các crypto thuộc về ví đó.
Nếu bạn không sở hữu private key, bạn không thực sự sở hữu crypto (_"Not your
keys, not your coins"_).

# One-way function (trapdoor function) [^6]

One-way function, hay hàm một chiều, là một khái niệm trong khoa học máy tính.
One-way function được định nghĩa là một hàm (một hoặc nhiều biến, ở đây ta gọi
một cách đơn giản là hàm $y = f(x)$) mà khi ta có được đối số đầu vào $x$ thì có
thể dễ dàng tính toán được giá trị $y$, nhưng ngược lại nếu ta có giá trị $y$
thì không thể (hoặc rất khó) tìm được đối số $x$ (lưu ý ở đây một toàn ánh không
đủ điều kiện để được xem là một one-way function). Trong các bài sau, ta sẽ tìm
hiểu sâu hơn về một số hàm được xem là one-way function thông qua các hàm băm
mật mã (hash function) như SHA-256.

Thực tế là không một hàm nào có thể được chứng minh là một one-way function một
cách tuyệt đối vì cho dù chiều ngược lại (suy từ $y$ ra $x$) có khó đến như thế
nào đi chăng nữa thì ta vẫn chưa thể chứng minh là hoàn toàn không thể tìm ra
cách tính $x$ từ $y$.

Trên đây là những kiến thức khá cơ bản về các hệ thống mã hóa thông tin mà mình
tổng hợp được qua khóa học và hành trình tìm kiếm thông tin của mình. Mong mọi
người đã có những cái nhìn đầu tiên rõ ràng hơn về blockchain và Bitcoin. Ở bài
viết sau, mình sẽ đề cập chi tiết hơn về các hàm băm mật mã (hash function) và
những tính chất của chúng để bạn đọc có thể hiểu hơn tại sao Bitcoin và các
blockchain lại cần dùng các hash function này và ưu nhược điểm của các phương
pháp nổi bật. Nếu bạn thấy bài viết này hay, đừng ngần ngại chia sẽ cho những
người có cùng sự quan tâm với chúng ta nhé.

**Disclamer: Mình chưa phải là một chuyên gia về lập trình hay blockchain nên
trong bài viết có thể còn nhiều thiếu sót hoặc nhầm lẫn. Mọi ý kiến đóng góp vui
lòng mang tính lịch sự và cùng nhau phát triển. Bài này khá dài và mình xin cảm
ơn sự quan tâm của mọi khi đã đọc đến đây. Chúc mọi người ngày càng phát triển
hơn trên con đường của mình đã chọn.**

[^1]: [Wikipedia về Encryption.](https://en.wikipedia.org/wiki/Encryption)
[^2]: [Wikipedia về nguyên tắc Kerckhoffs.](https://en.wikipedia.org/wiki/Kerckhoffs%27s_principle)
[^3]: [Thuật toán RSA.](https://www.geeksforgeeks.org/rsa-algorithm-cryptography/)
[^4]: [Thuật toán ECDSA.](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm)
[^5]: [Wikipedia về Public Key Infrastructure.](https://en.wikipedia.org/wiki/Public_key_infrastructure)
[^6]: [Wikipedia về One-way Function.](https://en.wikipedia.org/wiki/One-way_function)
