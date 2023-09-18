---
title: "[Blockchain Fundamentals][Bài 1] Tiền tệ và những ứng dụng đầu tiên của blockchain"
author: phnaharris
pubDatetime: 2021-12-18T00:00:00
postSlug: 2021-12-18-blockchain-fundamentals-bai-1
featured: false
draft: false
tags:
  - blockchain
  - fundamentals
  - vietnamese
ogImage: "/assets/blog/2021-12-18-blockchain-fundamentals-bai-1/What-Is-Blockchain-Infographic.jpg"
description: "Blockchain là một công nghệ đã bắt đầu xuất hiện một cách sơ khai từ những năm đầu của thập niên 90 trong một bài báo của Stuart Haber và W. Scott Stornetta. Tuy nhiên, trong những năm gần đây của thế kỷ 21, chúng ta mới được chứng kiến sự bùng nổ của blockchain và một trong những ứng dụng chính của công nghệ này ở thời điểm hiện tại: cryptocurrency."
---

Blockchain là một công nghệ có thể ứng dụng trong nhiều lĩnh vực, nhưng để nói
về ứng dụng nổi tiếng và được nhiều người biết nhất của công nghệ này, chắc hẳn
chúng ta sẽ nghĩ ngay đến cryptocurrency. Bản thân mình sau khi tìm hiểu về các
loại cryptocurrency ở những yếu tố bề nổi, cơ bản cũng đã rất hứng thú với
chúng, và với xuất phát từ đầu của mình là một developer, từ đó mình đã quyết
định đi sâu hơn ở những khía cạnh kĩ thuật của các loại cryptocurrency và công
nghệ blockchain để hiểu rõ hơn về lĩnh vực này, một phần để thỏa mãn sự tò mò
của mình, một phần là để giúp mọi người xung quanh mình hiểu rõ hơn về công nghệ
này, tránh được những rủi ro không đáng có khi quyết định đầu tư vào thị trường
cryptocurrency [^1].

# Table of contents

Chuỗi bài viết [Blockchain Fundamentals](/tag/Blockchain Fundamentals/) của mình
sẽ góp cho bạn những góc nhìn sơ khởi về mặt kỹ thuật của công nghệ blockchain,
các yếu tố công nghệ của các loại cryptocurrency như Bitcoin hay Ethereum,... và
mình hoàn toàn không khuyến nghị hay gợi ý cho người đọc về việc đầu tư bất kỳ
loại cryptocurrency nào. Vậy nên bạn hãy chỉ đọc những bài viết của mình dưới
góc nhìn kỹ thuật, và tự chịu trách nhiệm cho quyết định của mình nhé.

Những thông tin trong bài viết của mình được trích từ khóa học cùng tên
[Blockchain Fundamentals](https://www.youtube.com/playlist?list=PLxVihxZC42nF_MCN9PTvZMIifRjx9cZ2J)
của tác giả Bill Laboon, Web3 Foundation. Nếu có hứng thú với lĩnh vực này, hãy
học khóa học và trao đổi thêm với mình về những suy nghĩ của bạn nhé.

# Table of Contents

# Tiền tệ - phương tiện trao đổi giá trị của con người

Từ xa xưa, con người đã dùng rất nhiều loại vật chất khác nhau để trao đổi hàng
hóa và dịch vụ. Từ câu chuyện người ta trao đổi với nhau bằng những vật chất
theo nhu cầu của mình (như anh đưa cho tôi một con gà, tôi trả lại anh hai bó
rau), cho đến những vật chất được dùng làm quy chuẩn chung để trao đổi như lông
chim (được sử dụng trên đảo Santa Cruz) hay đá (được sử dụng trên đảo Yap, Thái
Bình Dương)... Một trong những công cụ trao đổi giá trị phổ biến nhất mà chúng
ta từng biết là vàng, và sau đó là tiền giấy và tiền ghi nợ (tiền gửi ngân hàng)
như chúng ta vẫn hay sử dụng ngày nay. Nhìn chung thì các hình thức trao đổi giá
trị ở trên thuộc vào hai dạng chính: tín dụng (tiền ghi nợ, tiền gửi ngân
hàng...) và tiền vật chất (vàng, tiền giấy, tiền xu, ...). Những hình thức này
của tiền đều mang một số tính chất chung như:

- **Tính bền vững, khó bị phá hủy**: Nếu tiền quá dễ bị phá hủy bằng những cách
  đơn giản như đốt đi hay rửa trôi thì khó mà bảo quản và trao đổi được qua
  nhiều nơi.
- **Tính di động**: Trong những năm 1200, người Trung Quốc đúc những đồng tiền
  bằng sắt. Những đồng tiền này giá trị chẳng là bao, cho nên người dân phải sử
  dụng một số lượng lớn khi mua hàng. Do đó rất bất tiện khi phải mang một số
  lượng lớn những đồng tiền sắt nặng nề nên chính phủ đã cho in những giấy biên
  nhận. Người ta mang các biên nhận này đến ngân hàng để đổi ra tiền xu [^2]. Ví
  dụ này cho ta thấy rằng tính di động của tiền là một trong những điều bắt buộc
  phải có (vì tiền được dùng làm phương tiện để trao đổi, nếu thiếu đi tính di
  động thì việc trao đổi diễn ra rất khó khăn và người ta sẽ tìm cách khắc phục
  điều này - bằng cách in tiền giấy như trong ví dụ).
- **Dễ dàng chia nhỏ**: Nếu tiền không có những đơn vị nhỏ thì rất khó khăn
  trong việc trao đổi mua bán hàng hóa thông thường trong cuộc sống. Tiền có
  tính dễ chia nhỏ để chúng ta có thể mua những thứ nhỏ hơn mà chúng ta muốn.
- **Có tính đồng nhất**: Các tờ tiền có cùng mệnh giá thì có cùng giá trị. Tờ
  một trăm nghìn của mình có giá trị như tờ một trăm nghìn của bạn và cùng có
  thể mua một món đồ có giá một trăm nghìn. Không có chuyện tờ một trăm nghìn
  của mình có giá trị hơn của bạn, mua được nhiều hàng hóa hơn của bạn và ngược
  lại.
- **Nguồn cung giới hạn**: Tiền có tính giới hạn. Nếu tiền là vô hạn và ai muốn
  bao nhiêu cũng có thì nó không còn giá trị để trao đổi hàng hóa và dịch vụ nữa
  vì ai cũng có thì ai sẽ cần nó?
- **Được chấp nhận rộng rãi**: Tiền có tính chấp nhận rộng rãi (ít nhất là trong
  một quốc gia hay một khu vực, rộng hơn là trên toàn thế giới như đồng USD).
  Nếu tiền không được chấp nhận rộng rãi thì việc thanh toán sẽ trở nên rất khó
  khăn và mục đích làm công cụ trao đổi giá trị của tiền sẽ khó mà đạt được.

Như ở trên ta đã nhắc đến thì chúng ta nhìn thấy tiền thông qua hai dạng chính:

- **Tín dụng**: Dựa trên hệ thống ghi nợ. Người sở hữu tiền ở dạng tín dụng
  không sở hữu tiền theo mặt vật chất, nghĩa là ta không thể cầm nắm loại tiền
  này được, mà người sở hữu vẫn có khả năng chi trả hay trao đổi giá trị hàng
  hóa và dịch vụ và có thể chuyển đổi từ dạng tín dụng sang dạng tiền vật chất
  nếu người sở hữu muốn, thường là thông qua một bên trung gian như ngân hàng...
- **Tiền vật chất**: Dựa trên tiền mặt và các sản phẩm tương đương tiền như
  vàng, bạc, đá quý... Người sở hữu tiền ở dạng tiền vật chất sở hữu trực tiếp
  tiền và các sản phẩm tương đương tiền, có thể dùng chúng để chi trả trực tiếp
  cho các giao dịch mà không cần thông qua bên trung gian nào.

Có thể thấy ở đây không có dạng hình thức của tiền nào là hoàn hảo, mỗi dạng
thức của tiền đều mang trong mình ưu và nhược điểm riêng và luôn có sự đánh đổi
khi ta sử dụng một dạng cụ thể. Vậy nên có một thực tế là mỗi xã hội khác nhau
sẽ lựa chọn hình thức sử dụng tiền tệ khác nhau sao cho phù hợp với xã hội đó.

# Tiền vật chất (tiền mặt)

Tiền vật chất (tiền mặt) cho thấy có nhiều ưu điểm:

- **Tính an toàn**: Người sở hữu tiền mặt trực tiếp nắm giữ tiền của họ, không
  hề có rủi ro từ bên khác như ngân hàng...
- **Tính ẩn danh và không bị theo dõi**: Sử dụng tiền trong hệ thống tín dụng
  rất dễ dàng bị theo dõi các giao dịch vì thông tin của giao dịch được lưu lại
  làm bằng chứng để có thể truy cập sau này khi cần. Nhưng khi chúng ta dùng
  tiền vật chất để đi mua một món hàng hay thanh toán một giao dịch thì không ai
  có thể biết được tiền đó là của bạn, và cũng không ai có thể theo dõi toàn bộ
  quá trình sử dụng tiền của bạn.
- **Tính linh hoạt, nhanh chóng**: Đối với hệ thống tín dụng, bạn cần phải
  online và thông qua một vài bước xác thực thông tin mới có thể sử dụng tiền
  của chính mình. Nhưng đối với tiền vật chất, bạn có thể chi trả cho bất cứ thứ
  gì ngay lập tức mà không cần thêm điều kiện gì khác (_có chăng điều kiện là
  bạn cần có tiền :v_[^3]).

# Tiền kỹ thuật số

Xã hội ngày càng phát triển khiến cho nhu cầu sử dụng tiền (cả khía cạnh vật
chất và tín dụng) của con người ngày càng phức tạp và đa dạng hơn. Từ những nhu
cầu này, tiền kỹ thuật số ra đời nhằm đem đến những tiện lợi mà giao dịch trực
tiếp không thể đáp ứng được.

## First Virtual

First Virtual là công ty thanh toán trực tuyến đầu tiên, tiên phong cung cấp
dịch vụ trong lĩnh vực tiền kỹ thuật số, được thành lập vào năm 1994 bởi First
Virtual Holdings, Inc., San Diego, CA.

Để sử dụng dịch vụ của First Virtual, trước hết khách hàng cần thiết lập tài
khoản với First Virtual bằng thẻ tín dụng thông qua điện thoại. Để thực hiện mua
hàng trực tuyến, khách hàng sẽ phải gửi First Virtual ID của họ cho nhà cung cấp
tham gia, họ sẽ lần lượt gửi email cho First Virtual và khách hàng để xác nhận.
Sau đó, tiền được chuyển đến nhà cung cấp thông qua mạng thanh toán bù trừ tự
động (ACH) [^4].

Hệ thống của First Virtual cung cấp một cách mua hàng mới tiện lợi và dễ dàng
hơn, cho phép chúng ta mua bán mà không cần tương tác trực tiếp giữa người mua
và người bán, nhưng nhìn chung tồn tại rất nhiều vấn đề. Một trong số đó là giao
dịch cần chờ đến 90 ngày để có thể hoàn thành.

## Double-spend issue

Việc thanh toán trực tuyến dẫn đến một vấn đề lớn: Doubles-spend issue (Lặp
chi).

Double-spend issue là tình huống khi một người dùng một khoản tiền để thực hiện
nhiều giao dịch. Giả sử tại một thời điểm Alice có thể chứng minh rằng mình sở
hữu số tiền **x** bằng một tờ giấy chứng nhận. Alice dùng số tiền **x** này mua
của Bob một món đồ. Nhưng trong thời điểm thực hiện giao dịch, Bob không có khả
năng online để kiểm tra giao dịch này nên đã lấy tờ giấy chứng nhận và giao món
đồ cho Alice rồi về nhà. Trong khi đó, Alice dùng tờ giấy chứng nhận mà cô đã
sao ra một bản khác trước đó, đến Caroll và mua một món hàng khác, dùng tờ giấy
chứng nhận này để thanh toán và Caroll kiểm tra tiền đúng là của Alice và thực
hiện giao dịch với món hàng. Như vậy, Alice đã sử dụng cùng một khoản tiền **x**
gian lận chi trả cho hai giao dịch với Bob và Caroll và Caroll là người nhận
được tiền.

Double-spend issue là vấn đề quan trọng cần giải quyết trong một hệ thống thanh
toán trực tuyến với tiền kĩ thuật số mà ta sẽ nhắc lại nhiều hơn ở những phần
còn lại của bài viết này cũng như những bài viết sắp tới.

## Chaumian Ecash

Vào năm 1983, nhà mật mã học người Mỹ David Chaum đã đưa ra những đề xuất chi
tiết đầu tiên về tiền điện tử mã hóa, sử dụng những ý tưởng về chữ ký mù
(**blind signature**[^5]) được ông công bố cùng năm, gọi là Ecash. Ecash nhằm
giúp người dùng sử dụng tiền điện tử ở bất cứ nơi nào chấp nhận Ecash mà không
cần phải tạo tài khoản hay giao số tài khoản tín dụng cho người bán, thương mại
hóa hóa lần đầu với công ty DigiCash của chính ông vào năm 1989, nhưng sau này
công ty này phá sản vào năm 1993.

Những đề xuất đầu tiên của David Chaum về chữ ký mù cho phép chúng ta có thể
chứng minh một chân lý nào đó mà không cần phải tiết lộ cụ thể về chân lý này,
bằng cách dùng chữ ký (signature). Ta sẽ nói về chữ ký mù cụ thể hơn trong ví dụ
sau. Giả sử Alice muốn chứng minh cô sở hữu một khoản tiền trong ngân hàng để
thực hiện giao dịch với Bob mua một chiếc áo. Đầu tiên Alice sẽ đến ngân hàng,
tạo một thông điệp m rằng cô sẽ thanh toán cho Bob với số tiền cụ thể. Ngân hàng
sẽ đưa cho cô cặp secret - public key (khóa bí mật - khóa công khai). Alice giao
cho Bob (hay bất cứ ai khác, trong nhiều giao dịch khác) public key, còn mình
giữ lại secret key. Khi giao dịch thực hiện, Bob chỉ cần gửi public key cho ngân
hàng, ngân hàng sẽ trả lại cho Bob một chuỗi thông điệp, yêu cầu Alice dùng
secret key của cô ký xác nhận thông điệp này là giao dịch đã được thực hiện và
tiền đã được thanh toán cho Bob, trong khi Bob vẫn không biết thông tin về tài
khoản hay khoản tiền của Alice trong ngân hàng, hay thậm chí Alice là ai vì bất
cứ ai có secret key của Alice đều có thể xác nhận cho giao dịch này.

Nhìn chung phương pháp sử dụng chữ ký mù có thể mang đến tính ẩn danh cho người
sử dụng, nhưng vẫn không hoàn toàn và cần một nơi quản lý tập trung đáng tin cậy
(như trong trường hợp ta đang ví dụ là ngân hàng quản lý tài khoản và thông tin
của Alice).

Vì là Ecash, bản chất là chúng ta mua nó từ ngân hàng và cặp key này đại diện
cho giá trị tương ứng với số tiền chúng ta bỏ ra, được nhiều nơi, nhiều ngân
hàng chấp nhận thanh toán. Đây là một loại tài sản điện tử mà bản chất nó không
có giá trị nội tại nhưng thể hiện cho một giá trị tiền mặt nhất định. Một vài ví
dụ có thể nhắc đến như vàng số, tiền điện tử, …

Câu hỏi đặt ra là có vẻ Chaumian Ecash là một hệ thống thanh toán có thể giúp
người sử dụng ẩn danh nhưng liệu có thể phòng tránh được double-spend issue mà
ta đã đề cập ở trên? Câu trả lời là có. Chaumian Ecash phòng tránh người dùng
gian lận double-spend issue bằng mô hình Chaum - Fiat - Naor [^6]. Nói một cách
dễ hiểu là khi thực hiện giao dịch, nếu Alice cố tình gian lận double-spend
issue thì khi Bob và Caroll cùng đến ngân hàng để nhận khoản tiền thanh toán,
ngân hàng có thể dựa vào thông tin họ cung cấp để biết được danh tính ai đang
gian lận và hoàn toàn có thể tác động đến những thông tin hay tài khoản của
Alice.

Nói đến đây thì ta có thể dễ dàng nhận ra trong hệ thống này có hai vấn đề rằng:

- Có thể Alice không quan tâm đến việc mình bị lộ danh tính và cô đã bỏ trốn với
  những món hàng mình mua được, trước khi những người bán đến ngân hàng để lãnh
  tiền (dựa vào thông điệp họ có và secret key của Alice trao cho họ).
- Có một sự bất công ở đây khi mà danh tính của Alice được giữ ẩn danh, bất cứ
  ai dùng secret key của Alice đều có thể chi trả cho hóa đơn, nhưng người bán -
  Bob và Caroll lại phải lộ danh tính của mình để ngân hàng có thể xác nhận và
  lãnh tiền.
- Cần một nơi lưu trữ mọi thông tin tập trung là ngân hàng. Nếu ngân hàng gặp sự
  cố, thông tin về những người tham gia và số tiền giao dịch có thể bị ảnh hưởng
  như đánh cắp, thất thoát...

## Hash cash

Nhắc lại một chút về tính khan hiếm của tiền ta đã đề cập ở trên:

- Tiền cần có giới hạn về nguồn cung.
- Cần hao tốn một chi phí nhất định đủ lớn để tạo ra một độ khó khăn nhất định
  trong việc sinh ra tiền (để nó có giá trị). Ví dụ như với vàng, cần một số
  tiền lớn để mua được vàng, hoặc phải tốn rất nhiều công sức để có thể khai
  thác vàng, đối với tiền tín dụng trong ngân hàng như ở các ví dụ trên, ta phải
  đưa cho ngân hàng một số tiền tương ứng để có quyền chi tiêu số tiền tín dụng
  đó,...

➡ Máy tính có thể thực hiện những công việc tính toán. Liệu những công việc này
có xứng đáng làm chi phí thay vì những giá trị vật chất hữu hình để làm cho một
đồng tiền nào đó có giá trị hay không?

Những ý tưởng đầu tiên về hash cash được Cynthia Dwork và Moni Naor nhắc đến
trong một bài báo của hai người vào năm 1992 [^7], sau này được một nhà mật mã
học người Anh Adam Back ứng dụng và phát triển thành một hệ thống thương mại là
Hashcash. Ứng dụng ban đầu của hash cash không hẳn là dùng làm hệ thống thanh
toán hay liên quan đến tiền tệ, mà dùng để đối phó với vấn đề thư rác (spam),
chúng ta sẽ hiểu rõ hơn về hash cash thông qua một ví dụ.

Giả sử Alice gửi cho Bob một email. Việc Alice cần chỉ đơn giản là nhấn nút gửi
thì có thể gửi email cho Bob, vậy lúc này Alice hoàn toàn có thể gửi cho Bob
1000 email tương tự một cách dễ dàng nếu cô có mục đích xấu với Bob, như muốn
làm Bob cảm thấy phiền toái hay bỏ lỡ công việc do quá nhiều email gửi đến mình
(nên nhớ vào những năm 90 của thế kỷ trước, việc phòng ngừa tấn công thư rác rất
khó khăn chứ không như ngày nay). Để phòng tránh tình huống tấn công này, ý
tưởng của hash cash yêu cầu Alice phải giải một bài toán trước khi có thể gửi
email cho Bob (giống như những hệ thống CAPTCHA ngày nay). Việc này không làm
Alice không thể tấn công thư rác với Bob, nhưng chắc hẳn sẽ gây khó khăn hơn rất
nhiều để làm việc đó, khi mà độ khó của bài toán có thể thay đổi theo ý muốn của
chúng ta. Đây cũng là cách các hệ thống blockchain sử dụng giao thức đồng thuận
là **proof of work** (bằng chứng công việc) hoạt động, bắt buộc chúng ta (hoặc
máy tính) phải trả một chi phí nào đó, bỏ một công sức nào đó (giải toán) để có
được điều mình muốn.

> Bitcoin is Hashcash extended with inflation control.
>
> -- <cite>Adam Back</cite> --

## Ledger (sổ cái)

Quay lại tình huống trước với Chaumian Ecash, làm sao chúng ta có thể biết được
Alice đã thực hiện giao dịch với ai trước nếu cả Bob và Caroll cùng đến ngân
hàng vào một thời điểm?

Trong cuộc sống, những sự kiện xảy ra liên tiếp nhau theo một thứ tự, sự kiện
này diễn ra sau sự kiện kia. Ví dụ như ngày hôm nay mình tắm vào 6 giờ sáng, ăn
sáng vào lúc 7 giờ sáng thì ta có thể kết luận mình ăn sáng sau khi tắm vào buổi
sáng. Điều này giúp chúng ta hình dung các sự kiện được liên kết với nhau tạo
thành một chuỗi các sự kiện (**chain**), hay chuỗi các giao dịch, để duy trì thứ
tự của chúng. Vậy làm thế nào để ta duy trì thứ tự này và lưu trữ chúng trong
máy tính?

Cơ chế **linked timestamping** cho phép chúng ta duy trì thứ tự của các sự kiện
bằng cách dùng **chữ ký (signature)** đánh dấu một sự kiện xảy ra và một con trỏ
trỏ tới sự kiện cuối cùng (signature của sự kiện cuối cùng) mỗi khi ta thêm vào
chuỗi sự kiện một sự kiện mới (_bạn có thể thấy cơ chế này tương tự cách hoạt
động của linked list - danh sách liên kết_[^3]). Đối với việc lưu trữ thứ tự của
các giao dịch, ta có thể thấy rằng với số lượng càng lớn các giao dịch thì việc
lưu trữ này sẽ giảm đi tính hiệu quả vì khối lượng thông tin ta phải lưu trữ sẽ
càng ngày càng lớn mà ta không cần lưu trữ chi tiết đến vậy. Từ đó người ta mới
gom góp những giao dịch này lại thành một **khối (block)** gồm nhiều giao dịch
khác nhau, rồi mới tiến hành liên kết các khối với nhau tạo thành **chuỗi
(chain)** qua cơ chế linked timestamping. Khái niệm **blockchain** ra đời từ
đây.

# Blockchain và Bitcoin

<div align="center" style="padding-left:50px;padding-right:50px">
    <img src="/assets/blog/2021-12-18-blockchain-fundamentals-bai-1/simple_blockchain.jpg" alt="Mô hình blockchain đơn giản với D1, D2, D3,... D7 là các phần dữ liệu trong khối"/>
    <p><i>Mô hình blockchain đơn giản với D1, D2, D3,... D7 là các phần dữ liệu trong khối</i></p>
</div>

## Bitcoin-style Blockchain

<div align="center" style="padding-left:50px;padding-right:50px">
    <img src="/assets/blog/2021-12-18-blockchain-fundamentals-bai-1/simple_bitcoin_blockchain.jpg" alt="Mô hình blockchain đơn giản với Tx1, Tx2, Tx3,... Tx7 là các phần dữ liệu trong khối"/>
    <p><i>Mô hình Bitcoin-style blockchain đơn giản với Tx1, Tx2, Tx3,... Tx7 là các giao dịch trong khối</i></p>
</div>

Mô hình Bitcoin-style blockchain cũng tương tự với mô hình blockchain cơ bản mà
ta đã nhắc đến ở trên. Thay vì để lưu trữ các phần dữ liệu, ta dùng các block để
lưu trữ các giao dịch, và nhằm đảm bảo có một độ khó nhất định để người khác khó
có thể tạo một phiên bản gian lận, ta liên kết các khối với nhau sử dụng cơ chế
proof of work tương tự với hash cash, yêu cầu một chi phí nhất định để thực hiện
giao dịch nhằm giảm thiểu gian lận khi thực hiện giao dịch.

Quay lại so sánh hệ thống blockchain ta vừa đề cập với Chaumian Ecash, ta có thể
thấy blockchain đã khắc phục được những vấn đề mà ta đã đặt ra:

- Vì để thực hiện giao dịch cần tiêu tốn một chi phí nhất định, nên sẽ gây ít
  nhiều khó khăn hơn cho Alice nếu cô (hay ngân hàng, hay Bob và Caroll) muốn
  thực hiện hành vi gian lận.
- Giả sử ta đã xây dựng được một hệ thống blockchain với chi phí để thực hiện
  hành vi gian lận đủ lớn, ta hoàn toàn không cần một nơi lưu trữ mọi thông tin
  tập trung như ngân hàng để lưu trữ dữ liệu nữa, thay vào đó ta có thể lưu trữ
  thông tin một cách phi tập trung hơn, đảm bảo mọi thông tin không chỉ phụ
  thuộc vào một nguồn tập trung nào đó, để nếu một nguồn dữ liệu bị gian lận thì
  tính trung thực của dữ liệu vẫn an toàn vì vẫn còn những nguồn dữ liệu khác
  thay thế.

Nhìn chung đã có một vài đề xuất áp dụng mô hình này từ rất sớm, nhìn chung dù
chưa hoàn toàn được xây dựng thực tế nhưng những đề xuất này cũng đã tạo những
tiền đề quan trọng để blockchain có thể được ứng dụng và phát triển như ngày
nay: b-money (Wei Dai - 1998) [^8], Bit Gold (Nick Szabo - 1998) [^9].

## Bitcoin

Dù công nghệ blockchain đã có những bước đi đầu tiên từ những năm 90 của thế kỷ
20, sau nhiều đề xuất và dự án chưa được thành công thì mãi đến năm 2008,
Bitcoin whitepaper được công bố bởi một người (hay nhóm người) ẩn danh tự xưng
là **Satoshi Nakamoto**[^10].

Satoshi Nakamoto tham gia phát triển Bitcoin và tương tác với cộng đồng từ khi
Bitcoin bắt đầu được khai sinh cho đến năm 2010 thì hoàn toàn biến mất. Cho đến
nay, dù có rất nhiều người bị tình nghi và có rất nhiều giả thiết về Satoshi
nhưng danh tính thật của Satoshi Nakamoto thì vẫn chưa được xác định cụ thể là
ai. Tất cả những tương tác của Satoshi được Phil Champagne tổng hợp lại trong
cuốn sách **The Book of Satoshi**[^12] xuất bản vào năm 2014.

<div align="center">
    <img src="/assets/blog/2021-12-18-blockchain-fundamentals-bai-1/Bust_of_Satoshi_Nakamoto_in_Budapest.jpg" alt="Một bức tượng ở Budapest dành riêng cho Satoshi Nakamoto"/>
    <p><i>Một bức tượng ở Budapest dành riêng cho Satoshi Nakamoto</i></p>
</div>

**Bitcoin**[^11], là loại **tiền mã hóa** hiện đại đầu tiên sử dụng công nghệ
**blockchain** được xuất hiện. Mọi giao dịch Bitcoin được **mã hóa** và lưu trữ
trong các **block**, các block này được các **máy tính (gọi là node)** trong
mạng lưới tạo ra thông qua quá trình gọi là **mining (đào [^13]) Bitcoin**. Vì
các node trong mạng lưới luân phiên tạo ra các block và **cùng lưu trữ** dữ liệu
của **toàn bộ blockchain** nên các thông tin giao dịch trong mạng lưới Bitcoin
được lưu trữ **phi tập trung** trong các node và **bất biến**, không node nào có
thể chỉnh sửa dữ liệu trong toàn bộ mạng lưới, nếu dữ liệu trong một node có
khác với phần còn lại của mạng lưới thì giao dịch trong mạng lưới vẫn có thể
diễn ra như bình thường.

Các block trong mạng lưới Bitcoin được liên kết với nhau thông qua cơ chế
**Proof of Work**, tức là các node sẽ cạnh tranh nhau để xác thực giao dịch, đưa
những giao dịch đó vào block và sẽ phải trả một chi phí công sức nhất định là
giải một bài toán để có thể tạo ra block. Node nào tạo ra block hợp lệ đầu tiên
sẽ nhận được phần thưởng là Bitcoin từ mạng lưới. Quá trình tạo ra block này gọi
là quá trình **mining Bitcoin**.

_Bitcoin có giải quyết được vấn đề double-spend issue không?_ Câu trả lời là có.
Với Bitcoin, để thêm vào mạng lưới một giao dịch mới, hay một block mới, các
node đều phải cạnh tranh với nhau đưa ra lời giải cho bài toán sớm nhất có thể.
Cách duy nhất để có thể ghi một giao dịch (chưa xét trường hợp hợp lệ hay không
hợp lệ) vào mạng lưới là năng lượng tính toán của bạn phải chiến thắng tất cả
các node còn lại trong mạng lưới, đưa ra đáp án sớm nhất để được quyền tạo ra
block. Mặt khác, Bitcoin có cơ chế giải quyết khi xảy ra tình huống xung đột,
khi mà dữ liệu trong các node không giống nhau, mặc định hệ thống sẽ chọn chuỗi
có độ dài lớn nhất làm chuỗi chính, và các block tiếp theo sẽ được xây dựng trên
chuỗi chính này, block mới sinh ra sẽ liên kết với block mới nhất của chuỗi
chính. Vì đó, để có thể ghi một giao dịch gian lận vào blockchain và thuyết phục
mạng lưới rằng chuỗi của bạn là chuỗi chính, bạn phải trả một chi phí cực kì lớn
để nắm giữ phần lớn năng lượng mining trong toàn mạng lưới, trong một khoảng
thời gian đủ dài để có thể tạo ra chuỗi dài nhất trong mạng lưới. Điều này tương
tự với việc bạn đang chống lại toàn bộ mạng lưới và gần như không thể thực hiện
được (theo lý thuyết hoàn toàn có thể thực hiện được khi bạn có rất nhiều tiền -
khả năng tính toán). Miner (thợ đào) là những người chạy những máy tính (node)
sẽ đảm nhận trách nhiệm bảo vệ mạng lưới và được trả thưởng là Bitcoin khi tạo
ra block mới, nghĩa là càng nhiều miner tham gia vào mạng lưới, bạn sẽ càng cần
nhiều sức mạnh tính toán từ máy tính hơn để có thể chiến thắng mạng lưới và thực
hiện hành vi gian lận. Đây là yếu tố giúp Bitcoin giải quyết được vấn đề gian
lận double-spend issue cũng như các vấn đề mà các hệ thống tiền điện tử khác mắc
phải.

Trên đây là những kiến thức khá cơ bản về tiền tệ, blockchain và Bitcoin mà mình
tổng hợp được qua khóa học và hành trình tìm kiếm thông tin của mình. Mong mọi
người đã có những cái nhìn đầu tiên rõ ràng hơn về blockchain và Bitcoin. Ở bài
viết sau, mình sẽ nói chi tiết hơn về các hình thức mã hóa thông tin, để bạn có
thể hiểu hơn Bitcoin mã hóa các giao dịch, các block như thế nào cũng như cách
các khóa cá nhân và địa chỉ ví của Bitcoin được sinh ra như thế nào. Nếu bạn
thấy bài viết này hay, đừng ngần ngại chia sẽ cho những người có cùng sự quan
tâm với chúng ta nhé.

**Disclamer: Mình chưa phải là một chuyên gia về lập trình hay blockchain nên
trong bài viết có thể còn nhiều thiếu sót hoặc nhầm lẫn. Mọi ý kiến đóng góp vui
lòng mang tính lịch sự và cùng nhau phát triển. Bài này khá dài và mình xin cảm
ơn sự quan tâm của mọi khi đã đọc đến đây. Chúc mọi người ngày càng phát triển
hơn trên con đường của mình đã chọn.**

[^1]:
    Vì để tránh những sự nhầm lẫn về các khái niệm như tiền ảo, tiền điện tử,
    tiền mã hóa... nên từ bây giờ mình sẽ dùng cụm từ cryptocurrency để chỉ đến
    những đồng tiền mã hóa như BTC, ETH...
    <br>

[^2]:
    [Wikipedia về Tiền.](https://vi.wikipedia.org/wiki/Tiền)
    <br>

[^3]:
    _Lời người viết_.
    <br>

[^4]:
    [Wikipedia về mạng thanh toán bù trừ tự động ACH.](https://en.wikipedia.org/wiki/Automated_clearing_house)
    <br>

[^5]:
    [Wikipedia về blind signature.](https://en.wikipedia.org/wiki/Blind_signature)
    <br>

[^6]:
    [Bài báo của ba tác giả về Untraceable Electronic Cash.](https://rdcu.be/cDZe0)
    <br>

    [comment]: (/assets/blog/2021-12-18-blockchain-fundamentals-bai-1/Bài_báo_của_ba_tác_giả_về_Untraceable_Electronic_Cash.pdf)

[^7]:
    [Bài báo của Dwork và Naor về Pricing via Processing or Combatting Junk Mail.](https://rdcu.be/cD0Hp)
    <br>

    [comment]: (/assets/blog/2021-12-18-blockchain-fundamentals-bai-1/Pricing_via_Processing_or_Combatting_Junk_Mail.pdf)

[^8]:
    [Investopedia về b-money.](https://www.investopedia.com/terms/b/bmoney.asp)
    <br>

[^9]:
    [Investopedia về Bit Gold.](https://www.investopedia.com/terms/b/bit-gold.asp)
    <br>

[^10]:
    [Wikipedia về Satoshi Nakamoto.](https://en.wikipedia.org/wiki/Satoshi_Nakamoto)
    <br>

[^11]:
    [Wikipedia về Bitcoin.](https://en.wikipedia.org/wiki/Bitcoin)
    <br>

[^12]:
    Website chính thức của cuốn sách The Book of Satoshi tại [https://www.bookofsatoshi.com](https://www.bookofsatoshi.com).
    <br>

[^13]:
    _Vì mình cảm thấy từ đào không diễn tả được chính xác lắm quá trình tạo ra một block
    của bitcoin, nên từ nay mình sẽ nhắc đến quá trình đào bitcoin bằng cụm từ
    mining bitcoin_.
    <br>
