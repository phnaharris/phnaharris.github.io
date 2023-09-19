---
title: "Finality in Consensus Protocols (Tính kết thúc của giao dịch trong các giao thức đồng thuận)"
author: phnaharris
pubDatetime: 2022-04-22T00:00:00
postSlug: 2022-04-22-finality-in-consensus-protocols
featured: true
draft: false
tags:
  - blockchain
  - fundamentals
  - vietnamese
  - representations
ogImage: "/assets/blog/2022-04-22-finality-in-consensus-protocols/finality.jpeg"
description: "Tính kết thúc của một giao dịch trong một hệ thống thanh toán là một trong những yếu tố tối quan trọng để xem xét đến việc sử dụng hệ thống này trong thanh toán thực tế."
---

Sau ba bài viết về Blockchain cơ bản, mình nghĩ mọi người cũng đã cảm thấy khá
nhàm chán (_thực ra là mình cũng thấy chán_) với những kiến thức thuần túy là
trên lý thuyết như vậy. Nhân lúc mình vừa có bài thuyết trình ở lớp về tính kết
thúc của giao dịch trong các giao thức đồng thuận, đối với mình là một chủ đề
khá thực tế, kiến thức của mình vẫn còn mới mẻ và đầy đủ thì mình muốn chia sẻ
đến mọi người chủ đề này, phần nào làm giảm sự nhàm chán sau những bài viết
thiếu tính thực tế vừa qua, phần nào giúp mình lưu trữ lại những phần kiến thức
đã tìm hiểu được.

# Table of Contents

# Đặt vấn đề

Giả sử bạn muốn vào một quán cafe để mua một ly cafe. Câu chuyện sẽ rất bình
thường nếu bạn cứ thế mà vào quán, gọi nước, trả tiền (bằng tiền mặt hoặc thẻ
tín dụng), ngay lập tức bạn có thể nhận một ly cafe tương ứng với số tiền mà bạn
đã trả.

Vậy nếu bạn muốn thanh toán bằng Bitcoin thì sao? Nên nhớ rằng khi giao dịch
trong mạng lưới Bitcoin, giao dịch vẫn có thể bị hủy bỏ ngay cả sau khi giao
dịch đã đưa vào block, miner (thợ đào) đã xử lý và cập nhật lên blockchain, vì
nhiều lý do (bị tấn công _khai thác ích kỷ_ - withholding attack/selfish mining,
bị tấn công 51% - 51% attack,...). Vậy cửa hàng sẽ phải xử lý như thế nào, khi
gặp tình huống bạn thanh toán cho cửa hàng (giao dịch được xác nhận), nhận nước
và sau khi bạn rời cửa hàng, giao dịch đột nhiên bị hủy bỏ?

_Giao dịch với Bitcoin được khuyến khích đợi 6 blocks ~ 1 giờ kể từ khi giao
dịch của bạn được đưa lên blockchain để chắc chắn giao dịch hoàn toàn kết thúc
(không thể bị hủy)._

# Các dạng kết thúc của giao dịch

## Finality là gì?

Như ví dụ ở trên mình đã đề cập, có thể hiểu finality là tính kết thúc của một
giao dịch, chính là thời gian mà giao dịch được lưu lại vĩnh viễn trên
blockchain và không thể bị hủy bỏ. Một cách tổng quát hơn, ta có thể hiểu rằng
finality trong blockchain là khoảng thời gian một block được đưa lên blockchain
vĩnh viễn và block này cũng như dữ liệu bên trong không thể bị xóa đi nữa.

Có 2 dạng finality (tính kết thúc/cuối cùng) chính: Probabilistic Finality (kết
thúc tương đối) và Absolute Finality (kết thúc tuyệt đối).

## Probabilistic finality (Kết thúc tương đối)

Những chain-based consensus protocol (giống như Bitcoin's Nakamoto consensus)
thường sẽ chỉ đạt được đến giao dịch có tính kết thúc tương đối. Tính kết thúc
tương đối dựa trên nguyên lý rằng, **nếu block ở vị trí càng sâu trên blockchain
(được đưa lên blockchain càng sớm) thì khả năng block đó bị hủy bỏ càng thấp**.
Vì vậy ta có thể dễ dàng nhận ra rằng giao dịch được xác thực trong block này
cũng sẽ càng khó bị hủy bỏ. Đó cũng là lý do tại sao, Bitcoin khuyến khích chúng
ta đợi 6 blocks được sinh ra từ block chứa giao dịch, để đảm bảo giao dịch đã
kết thúc và xác suất bị hủy bỏ là rất thấp.

## Absolute finality (Kết thúc tuyệt đối)

Không như probabilistic finality, những pBFT-based consensus protocol (như
Tendermint, Harmony...) có thể đạt được tính kết thúc tuyệt đối
(absolute/instant/deterministic finality). Nghĩa là một khi giao dịch được đưa
vào block và thêm vào blockchain, block này sẽ tồn tại trong blockchain vĩnh
viễn và những giao dịch chứa trong block sẽ không thể bị hủy bỏ.

## Economics finality

Ngoài ra còn có một khái niệm về tính kết thúc dựa vào kinh tế (economic
finality). Yếu tố kinh tế không phải là một loại finality nhưng đôi lúc cũng có
tác động đến tính kết thúc của giao dịch. Như đã đề cập ở trên, giao dịch chỉ bị
hủy bỏ khi block chứa giao dịch đó bị loại bỏ khỏi blockchain. Để xảy ra điều
này, ngoài lý do khách quan đến từ tốc độ truyền tải thông tin và tính đồng bộ
giữa các nodes, còn một vài lý do chủ quan đến từ việc mạng lưới bị tấn công
(withholding attack, 51% attack...). Một số PoS-based protocol có slashing
mechanism (cơ chế chém), trong đó staker sẽ bị mất đi phần tài sản đã gửi vào
mạng lưới nếu cố tình tấn công làm block bị hủy (hay có ý tấn công mạng lưới).
Như vậy, staker sẽ không có động lực để làm block bị thu hồi hay bị hủy (vì họ
sẽ bị mất tài sản), từ đó thúc đẩy tính kết thúc của block hay giao dịch trong
mạng lưới dễ đạt được hơn.

# CAP Theorem

Như những gì mình đã đề cập ở phần trên của bài viết, các bạn có thể thấy rằng
chúng ta thích một mạng lưới đạt được absolute finality hơn là probabilistic
finality (_vì chúng ta không muốn chờ 1 giờ để mua 1 ly cafe_[^1]). Nhưng thực
tế thì không đơn giản như vậy. Với những blockchain đạt được absolute finality,
ta dễ dàng thấy rằng khi mạng lưới gặp lỗi, chắc chắn mạng lưới sẽ không thể
hoạt động được như bình thường mà phải dừng lại để thực hiện các cơ chế sửa lỗi
rồi mới có thể tiếp tục hoạt động (_điều này hẳn là làm người dùng ngày nay cảm
thấy khó chịu, khi mà một dịch vụ hoạt động không ổn định và phải chờ đợi_[^2]).
So sánh ở khía cạnh tương tự với những blockchain đạt được tính probabilistic
finality, dù giao dịch có thể bị hủy, nhưng tính sẵn sàng của dịch vụ luôn được
đảm bảo, người dùng có thể liên tục gửi giao dịch của mình vào mạng lưới dù mạng
lưới có đang bị lỗi hay không (_xét về khía cạnh trải nghiệm người dùng thì điều
này có vẻ dễ chịu hơn trong ngày nay_[^2]).

Vì vậy, CAP Theorem của Eric A. Brewer có thể hữu ích để ta xem xét chọn lựa
rằng hệ thống của mình sẽ đạt được tính probabilistic hay absolute finality.

<div align="center">
    <img src="/assets/blog/2022-04-22-finality-in-consensus-protocols/cap-theorem.png" alt="CAP Theorem - Eric A. Brewer"/>
    <p><i>CAP Theorem - Eric A. Brewer</i></p>
</div>

> Theorem: You can have at most two of these properties for any shared-data
> system. [^3]
>
> <cite>Eric A. Brewer.</cite>

Tạm dịch là:

> Trong mọi hệ thống có chia sẻ dữ liệu, chúng ta chỉ có thể đạt được tối đa hai
> trong ba thuộc tính: **tính nhất quán (consistency), tính sẵn sàng
> (availability)** và **tính tập trung (partition tolerance)**.

Từ định lý này ta có thể suy ra rằng **không tồn tại hệ thống phân tán (như
blockchain) thỏa mãn được cả hai tính chất: tính nhất quán và tính sẵn sàng**.
Thật vậy, trong một hệ thống phân tán, ta chỉ có thể đạt được tính nhất quán
hoặc tính sẵn sàng.

- **Tính nhất quán (consistency)** thể hiện sự đồng nhất về dữ liệu giữa các
  nodes của hệ thống, và giúp hệ thống đạt được **kết thúc tuyệt đối (absolute
  finality)**.
- **Tính sẵn sàng (availability)** thể hiện mức độ khả dụng nếu có dữ liệu
  truyền tới, ngay cả khi hệ thống đang có lỗi. Những hệ thống phân tán đạt được
  tính sẵn sàng cao thường sẽ chỉ đạt đến tính **kết thúc tương đối
  (probabilistic finality)**.

Vì vậy, không thể xem xét rằng probabilistic finality hay absolute finality là
tốt hơn, vì mỗi hệ thống đều sẽ có ưu và nhược điểm của nó. Thay vào đó, hãy xem
xét đến mục đích của hệ thống là gì để lựa chọn mục tiêu finality cho phù hợp.
Ví dụ một hệ thống thanh toán ưu tiên độ sẵn sàng thực hiện giao dịch bất cứ lúc
nào với tần suất cao sẽ mong muốn có tính avalability hơn là consistency, vì
không thể buộc khách hàng chờ 1 giờ để mua 1 ly cafe [^1] được, nên những hệ
thống này chỉ có thể đạt được probabilistic finality. Nhưng với những ứng dụng
khác, như DApps chẳng hạn, mong muốn sự đồng bộ về dữ liệu trong hệ thống hơn,
thì có thể đạt được absolute finality, trong khi mất đi tính availability.

Dông dài đủ rồi, tiếp theo chúng ta sẽ cùng xem xét tính finality trong một vài
giao thức Proof of Stake, để thấy rằng vẫn có những blockchain chỉ ưu tiên đạt
đến probabilistic finality, và vẫn có những blockchain đạt được absolute
finality, bất kể hệ thống mới hay cũ, lớn hay nhỏ.

# Finality in PoS consensus (Tính kết thúc của giao dịch trong các giao thức Proof of Stake)

Sau đây chúng ta sẽ cùng xem xét tính finality của một vài giao thức cụ thể, là
Tendermint, Thunderella và Ouroboros Genesis. Với các giao thức khác, bạn có thể
tìm kiếm đến trang web chính thức của giao thức để tìm đọc về tính finality của
giao thức đó.

## [Tendermint](https://tendermint.com/) ([Cosmos Network](https://cosmos.network/))

**Tendermint đạt được absolute finality.** Nhờ vào 2 quá trình trong việc đưa
block lên blockchain (voting và commiting) mà Tendermint xác định được tính hợp
lệ của block, đó là chỉ khi nào block được 2/3 số validators trở lên của mạng
lưới xác nhận vượt qua cả 2 quá trình pre-vote và pre-commit mới được xem là
block hợp lệ và được khóa (locked) để đưa lên blockchain, nên một khi block đã
được đưa lên blockchain thì sẽ không bị hủy bỏ nữa (nếu block không hợp lệ đã bị
loại bỏ từ quá trình trước).

Một khi mạng lưới không đáp ứng đủ 2/3 validators nghiêm túc (honest nodes),
Tendermint sẽ chờ một khoảng thời gian đến khi đủ lượng validators cần thiết mới
bắt đầu vòng (round) commit mới. Do đó, ta có thể nói Tendermint **ưu tiên tính
nhất quán (consistency) hơn là tính sẵn sàng (availability)**.

## Thunderella ([ThunderCore](https://www.thundercore.com/))

**Thunderella đạt được absolute finality khi giao dịch được chuyển đến
slow-chain.** Thunderella kiểm soát 2 trạng thái của mạng lưới: **fast-path** và
**slow-chain**. Giao dịch được xem xét ngay từ quá trình ở fast-path, nếu thỏa
mãn 3/4 thành viên là nghiêm túc (honest commitee) thì ngay lập tức được xác
nhận, đã có thể đạt đến probabilistic finality với xác suất giao dịch bị hủy rất
thấp (có thể coi là optimistic finality). Khi cơ chế fast-path xảy ra vấn đề, hệ
thống sẽ kích hoạt **quá trình cool-down (cool-down period)**, giao dịch sẽ được
chuyển đến slow-chain để xử lý. Sau khi thoát ra khỏi quá trình xử lý của
slow-chain, block (và giao dịch trong block đó) được đưa lên blockchain và không
thể bị hủy bỏ nữa.

Từ những phân tích sơ bộ trên, ta có thể nhận thấy rằng dù Thunderella đạt được
absolute finality nhưng với quá trình cool-down, giao dịch được đưa xuống
slow-chain xử lý, Thunderella vẫn có thể tiếp nhận giao dịch mới vào fast-path,
vì vậy vẫn **đảm bảo được tính sẵn sàng (availability)** của hệ thống.

_Để tìm hiểu cụ thể hơn về fast-path, slow-chain và quá trình cool-down, bạn đọc
có thể tìm hiểu thêm tại **ThunderCore (LitePaper)**[^4] và tài liệu
**Thunderella Blockchains with Optimistic Instant Confirmation**[^5] của Rafael
Pass và Elaine Shi mà mình đính kèm bên dưới._

## Ouroboros Genesis ([Cardano](https://cardano.org/))

**Ouroboros Genesis đạt được probabilistic finality.** Vì mạng lưới sử dụng cơ
chế Ouroboros Genesis có quy luật chọn chuỗi riêng (chain selection rules), dựa
vào thời gian và số lượng block từ khi chia chuỗi (forked), nên sau khi thực
hiện xong quá trình chọn chuỗi chính (chain selection), những block không thuộc
chuỗi được chọn có thể bị loại bỏ và những giao dịch này cũng sẽ bị loại bỏ theo
block (dù giao dịch đã được đưa lên blockchain).

_Bạn đọc có thể tìm hiểu thêm về Ouroboros Genesis tại tài liệu **Ouroboros
Genesis: Composable Proof-of-Stake Blockchains with Dynamic Availability**[^6]._

Trên đây là những gì mình biết về tính kết thúc của một giao dịch trong các giao
thức đồng thuận (consensus protocol). Hi vọng thông qua những nội dung mình
truyền tải đã giúp các bạn phần nào hiểu được như thế nào là tính kết thúc của
giao dịch và có thể đánh giá được một giao thức là đủ tốt (ở nhiều khía cạnh) để
có thể sử dụng trong việc thanh toán. Nếu bạn thấy bài viết này hay, đừng ngần
ngại chia sẽ cho những người có cùng sự quan tâm với chúng ta nhé.

_Lời cuối cùng xin cảm ơn tác giả Alexis Gauba và bài viết Finality in
Blockchain Consensus của cô ở Medium. Bạn đọc có thể đọc bài viết này tại
[link](https://medium.com/mechanism-labs/finality-in-blockchain-consensus-d1f83c120a9a)._

**Disclamer: Mình chưa phải là một chuyên gia về lập trình hay blockchain nên
trong bài viết có thể còn nhiều thiếu sót hoặc nhầm lẫn. Mọi ý kiến đóng góp vui
lòng mang tính lịch sự và cùng nhau phát triển. Chúc mọi người ngày càng phát
triển hơn trên con đường của mình đã chọn.**

[^1]: _Nếu sử dụng Bitcoin. Lời người viết._
[^2]: _Lời người viết._
[^3]:
    [Towards Robust Distributed Systems. Eric A. Brewer.](https://people.eecs.berkeley.edu/~brewer/cs262b-2004/PODC-keynote.pdf)

    [comment]: (/assets/blog/2022-04-22-finality-in-consensus-protocols/Towards_Robust_Distributed_Systems_Eric_A_Brewer.pdf)

[^4]:
    [ThunderCore \(LitePaper\). Rafael Pass and Elaine Shi.](https://docs.thundercore.com/thunder-litepaper.pdf)

    [comment]: (/assets/blog/2022-04-22-finality-in-consensus-protocols/ThunderCore_(LitePaper)_Rafael_Pass_and_Elaine_Shi.pdf)

[^5]:
    [Thunderella: Blockchains with Optimistic Instant Confirmation. Rafael Pass and Elaine Shi.](https://eprint.iacr.org/2017/913.pdf)

    [comment]: (/assets/blog/2022-04-22-finality-in-consensus-protocols/Thunderella_Blockchains_with_Optimistic_Instant_Confirmation_Rafael_Pass_and_Elaine_Shi.pdf)

[^6]:
    [Ouroboros Genesis: Composable Proof-of-Stake Blockchains with Dynamic Availability.](https://eprint.iacr.org/2018/378.pdf)

    [comment]: (/assets/blog/2022-04-22-finality-in-consensus-protocols/Ouroboros_Genesis_Composable_Proof-of-Stake_Blockchains_with_Dynamic_Availability.pdf)
