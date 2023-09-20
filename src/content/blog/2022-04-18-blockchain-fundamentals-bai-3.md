---
title: "[Blockchain Fundamentals][Bài 3] Hash function"
author: phnaharris
pubDatetime: 2022-04-18T00:00:00
postSlug: 2022-04-18-blockchain-fundamentals-bai-3
featured: false
draft: false
tags:
  - blockchain
  - fundamentals
  - vietnamese
ogImage: "/assets/blog/2022-04-18-blockchain-fundamentals-bai-3/cryptographic_hash_function.png"
description: "Không có hash function nào là không có nhược điểm. Việc lựa chọn hash function phụ thuộc vào độ phù hợp của hash function đó với mục đích công việc cần sử dụng."
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

Ở bài viết trước, mình đã giới thiệu cho các bạn về các hình thức mã hóa thông
tin được sử dụng phổ biến, các đặc điểm và ứng dụng của chúng. Ở bài viết này,
mình sẽ đưa ra những khái niệm cơ bản nhất về **cryptographic hash function (hàm
băm mật mã)**, những tính chất cần có của một hash function và ứng dụng của
những tính chất đó trong thực tế.

# Table of Contents

# Hash function là cái chi chi?

Hash function là một hàm toán học, nhận **giá trị đầu vào tùy ý** (mà ta gọi là
**message**) và trả về một giá trị có **độ dài cố định**, gọi là **hash value**
(hay hash, message digest...). Hash value có thể được sử dụng cho nhiều mục đích
khác nhau: hash maps, data distribution, nearest neighbor search, …

Mỗi hàm hash khác nhau sẽ có những tính chất đặc trưng khác nhau, ví dụ như
continuous hash function sẽ tốt khi được dùng trong thuật toán nearest neighbor
search, nhưng lại rất tệ khi dùng với data distribution,... Trong bài viết này,
mình sẽ đề cập chủ yếu đến **cryptographic hash function (hàm băm mật mã)**.

<div align="center">
    <img src="/assets/blog/2022-04-18-blockchain-fundamentals-bai-3/cryptographic_hash_function.png" alt="Cryptographic Hash Function"/>
    <p><i>Cryptographic Hash Function. Nguồn: Wikipedia</i></p>
</div>

Hash function là một one-way function, nghĩa là chúng ta không thể đảo ngược
phép tính, suy ra giá trị đầu vào ban đầu từ hash value. Nói một cách khác, một
hàm hash function đủ tốt là hàm mà để tìm ra message truyền vào từ một hash
value, cách duy nhất ta có thể làm là **brute-force (vét cạn)** tất cả các
message có thể có, truyền vào hash function và so sánh hash value trả về với
hash value mà ta đang có, từ đó tìm ra message (Đây là việc rất khó, gần như bạn
không thể tìm được tất cả các message có thể có trong thực tế). Để tìm hiểu về
one-way function, bạn hãy đọc bài viết
[[Blockchain Fundamentals][Bài 2] Public-key cryptography và One-way function](2022-02-07-blockchain-fundamentals-bai-2).

# Những đặc tính của một hash function

Hash function sẽ có những đặc tính cơ bản:

1. **Collision-free (Collision resistant)**: Hash function là một one-way
   function. Vì vậy, hash function cũng không thể trả về cùng một giá trị hash
   value $y$ với các giá trị đầu vào $x$ khác nhau.

- Vì hash value của chúng ta có độ dài cố định, nên số lượng giá trị hash value
  cũng là cố định, nhưng message đầu vào của ta lại là tùy ý, nên có thể kết
  luận chắc chắn rằng luôn tồn tại những giá trị hash value sao cho tương ứng
  với nó là các message khác nhau (theo nguyên lý Dirichlet - nguyên lý chuồng
  bồ câu).
- Do đó, một cách tương đối, ta vẫn chấp nhận rằng một hash function đủ tốt là
  hash function mà thời gian tìm được hash value thỏa mãn điều kiện tương ứng
  với nhiều message khác nhau bằng phương pháp brute-force là nhanh nhất.

2. **Hiding**: Một đặc tính quan trọng khác của one-way function là độ khó của
   việc truy ngược giá trị truyền vào. Nghĩa là với hash function $y=f(x):$

- Nếu cho biết giá trị của hash value $y$ thì ta cũng không có cách nào (tốt hơn
  brute-force) để tìm ra giá trị của $x$.
- Nếu chọn giá trị $x$ truyền vào một cách có quy luật thì cũng không thể đoán
  được giá trị $y$ là gì.

3. **Puzzle-friendliness**: Nếu ta muốn tìm giá trị $x$ sao cho khi truyền vào
   hash function $y=f(x)$ ta sẽ nhận được giá trị $y$ theo ý muốn thì cách tốt
   nhất là ta phải thử tất cả các giá trị có thể có của $x$ cho đến khi tìm được
   $y$ ta mong muốn (brute-force).

Dựa vào những tính chất cơ bản trên, một hash function được coi là "không đủ
tốt" nếu vi phạm một trong ba (hoặc cả ba) tính chất cơ bản trên:

- **Collision resistant**: Dễ dàng bị trùng lặp giá trị hash value trả về khi
  truyền vào hash function các đối số khác nhau.
- **Hiding**: Khi chọn đối số truyền vào $x$ một cách có quy luật thì dễ dàng
  đoán được giá trị trả về hash value $y$ là gì.
- **Puzzle-friendliness**: Dễ dàng nhận thấy quy luật giữa đối số truyền vào $x$
  và giá trị trả về hash value $y$ từ đó dễ dàng thay đổi giá trị đầu vào
  (input) để tạo ra giá trị đầu ra (output) như ý.

Dù ta có thể dựa vào các tính chất cơ bản của hash function để đánh giá độ tốt
của chúng, nhưng nên nhớ rằng mỗi hash function đều có nhược điểm, việc quan
trọng là chọn lựa hash function phù hợp với mục đích sử dụng chứ không phải là
tìm ra hash function tốt nhất.

# Ứng dụng các tính chất của hash function trong thực tế

Trong phần này chúng ta sẽ nhìn qua một vài ví dụ ứng dụng các tính chất của
hash function trong thực tế có thể áp dụng. Đương nhiên phần này mình chỉ nhắc
đến một vài ví dụ nổi bật và dễ hiểu, còn thực tế bạn có thể suy nghĩ ra thêm
hằng hà sa số cách ứng dụng hash function và những tính chất để giải quyết những
vấn đề trong cuộc sống khác.

- **Collision resistant**: Người ta có thể ứng dụng tính collision resistant của
  hash function vào việc kiểm tra tin nhắn đã được đọc hay chưa, bằng cách lưu
  hash value của tất cả tin nhắn vào database (cơ sở dữ liệu). Mỗi tin nhắn khác
  nhau có độ dài khác nhau (và thường là dài hơn độ dài của hash value), sau khi
  đưa vào làm đối số cho một hash function thì (hầu như) sẽ trả về giá trị hash
  value khác nhau. Muốn kiểm tra tin nhắn đã được đọc hay chưa, ta có thể đưa
  tin nhắn vào hash function và kiểm tra sự tồn tại của hash value trong
  database (thay vì lưu và kiểm tra tin nhắn sẽ cần không gian bộ nhớ nhiều hơn
  để lưu trữ, quá trình so sánh cũng sẽ tốn chi phí thời gian nhiều hơn và khi
  tin nhắn dài hơn, việc sử dụng hash function sẽ làm quá trình so sánh không
  tăng thêm chi phí), nếu tồn tại giá trị này trong database thì ta có thể kết
  luận tin nhắn đã được xem, và ngược lại.
- **Hiding**: Tính hiding của hash function có thể giúp bạn cá cược mà không cần
  lộ ra thông tin nội dung cá cược là gì. Giả sử Alice và Bob muốn cược với nhau
  về kết quả cuối học kỳ của một người khác, Caroll, xem cô có thể được học bổng
  hay không. Nếu trong tình huống không sử dụng hash function, ta có thể cần đến
  một bên thứ ba để làm chứng cho vụ cá cược này, nhằm đảm bảo việc cả hai người
  Alice và Bob không được gian lận và tính minh bạch cũng như bất biến của những
  dự đoán (nhưng thực tế thì bên thứ ba này có thể thông đồng với một trong hai
  người để gian lận). Với hash function, ta có thể đưa ra một mô hình cam kết
  (commitment scheme) như sau.

```c#
com = commit(message, nonce);
verify(com, message, nonce);
```

Alice đưa ra dự đoán của mình trước, gọi là _message_, kèm thêm một giá trị ngẫu
nhiên vô nghĩa, gọi là _nonce_ (number used once) (chỉ Alice mới có thể biết
được hai giá trị message và nonce này). Dùng một hash function làm hàm
<code>commit()</code>, ví dụ như SHA-256, để hash giá trị message kèm nonce của
Alice đã có, trả về một giá trị hash value, là _com_. Sau đó, Alice có thể đưa
cho Bob giá trị _com_ này như một dự đoán của mình. Do hash function có tính
hiding, dù Bob có biết được hash value cũng không thể truy ngược ra Alice đã dự
đoán gì, nên Alice vẫn không lo ngại rằng kết quả của mình đưa ra trước có thể
làm ảnh hưởng đến dự đoán của Bob, và Bob có thể thực hiện quá trình tương tự,
đưa ra dự đoán của mình một cách khách quan và công bằng nhất, gần như không bị
tác động ảnh hưởng bởi bất kỳ yếu tố nào (như kết quả của Alice, hay bên thứ ba)
mà vẫn giữ được tính minh bạch của các kết quả. Sau khi biết được kết quả học
tập của Caroll, cả hai có thể dùng hàm <code>verify()</code> cùng với giá trị
com, message và nonce của mình để kiểm tra kết quả của cuộc cá cược. _Hash
function dùng trong Bitcoin blockchain: SHA-256, RIPEMD-160._

- **Puzzle-friendliness**: Tính puzzle-friendliness được ứng dụng để sử dụng
  trong các Proof of Work (PoW) blockchain, khi cần công nhận một người xứng
  đáng nhận được phần thưởng sau khi hoàn thành một công việc nào đó (đủ khó),
  như là với việc tìm giá trị tham số truyền vào hash function $y=H(x)$ khi đã
  biết giá trị hash value $y$ ta phải thử tất cả các giá trị $x$ có thể nghĩ ra
  đế đưa ra câu trả lời (brute-force) - đây là một việc đủ khó.

Trên đây là những kiến thức khá cơ bản về cryptographic hash function mà mình
tổng hợp được qua khóa học và hành trình tìm kiếm thông tin của mình. Mong mọi
người đã có những cái nhìn đầu tiên rõ ràng hơn về hash function nói riêng và
blockchain nói chung. Thực tế còn rất nhiều kiến thức về hash function mà hiện
tại mình chưa thể khái quát được trong khuôn khổ bài viết này. Mình sẽ đưa đến
bạn đọc những phần kiến thức này ở trong những bài viết khác trong tương lai . Ở
bài viết sau, mình sẽ viết về một cấu trúc dữ liệu cơ bản được sử dụng trong
blockchain - hash pointer. Nếu bạn thấy bài viết này hay, đừng ngần ngại chia sẽ
cho những người có cùng sự quan tâm với chúng ta nhé.

**Disclamer: Mình chưa phải là một chuyên gia về lập trình hay blockchain nên
trong bài viết có thể còn nhiều thiếu sót hoặc nhầm lẫn. Mọi ý kiến đóng góp vui
lòng mang tính lịch sự và cùng nhau phát triển. Chúc mọi người ngày càng phát
triển hơn trên con đường của mình đã chọn.**
