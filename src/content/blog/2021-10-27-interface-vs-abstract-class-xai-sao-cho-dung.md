---
title: Interface vs abstract class - Xài sao cho đúng
author: phnaharris
pubDatetime: 2021-10-27T00:00:00
postSlug: 2021-10-27-interface-vs-abstract-class-xai-sao-cho-dung
featured: false
draft: false
tags:
  - csharp
  - fundamentals
  - vietnamese
ogImage: ""
description: Phân biệt giữa interface và abstract class trong C#.
---

# Table of contents

**Interface** và **abstract class** là hai công cụ quan trọng của lập trình
hướng đối tượng (OOP) mà không phải ai cũng có thể phân biệt rõ ràng được (vì
giữa chúng có rất nhiều đặc điểm giống nhau), nhất là với những người mới học
lập trình. Trong bài viết này, mình sẽ cùng nhau nói về định nghĩa, cách sử dụng
và sự khác biệt giữa hai khái niệm này, cũng như đưa ra những tình huống khi nào
thì chúng ta sẽ sử dụng interface, và khi nào chúng ta dùng abstract class. Ngôn
ngữ mình dùng trong các ví dụ sẽ là **C#**, đối với những ngôn ngữ khác có thể
khác biệt chút ít về tính năng (do sự đặc thù của từng ngôn ngữ được sử dụng
trong từng công việc khác nhau) nhưng bạn vẫn có thể tham khảo những nội dung cơ
bản nhé.

# Định nghĩa [^1]

## Interface là gì?

Trong lập trình hướng đối tượng (OOP), **interface** có thể được coi là một
**bản thiết kế** của **lớp** (class), nơi bao gồm một tập các **khai báo**
(declarations) của những tính năng có liên quan với nhau. Cũng có thể coi
interface gần như là một lớp trừu tượng "tuyệt đối" (completely "abstract
class"), vì interface **chỉ chứa các thuộc tính và phương thức trừu tượng**,
không thể chứa định nghĩa của các phương thức và **không thể trực tiếp tạo ra
đối tượng** từ interface.

Interface là một khái niệm thường thấy ở những ngôn ngữ cấp cao như Java, C#...
và là công cụ hiệu quả để triển khai đa kế thừa (trong Java, C#, một lớp không
thể kế thừa quá một lớp khác, nhưng có thể kế thừa nhiều interface khác nhau).
Thiết kế mối liên hệ giữa interface và các lớp (class) tốt có thể mang lại kiến
trúc tốt hơn cho hệ thống, tránh sơ sót và dễ dàng bảo trì.

Một ví dụ cơ bản về interface [^2]:

```c#
public interface IAnimal
{
    void Sound(); // interface method (does not have a body)
    void Run(); // interface method (does not have a body)
}
```

## Abstract class (Lớp trừu tượng) là gì?

Trong lập trình hướng đối tượng (OOP), **abstract class** (lớp trừu tượng) là
một lớp không được dùng trực tiếp để tạo ra đối tượng, để có thể sử dụng phải
được một lớp khác kế thừa. Vì lớp trừu tượng vẫn là một lớp nên có các đặc tính
của lớp như có thể chứa thuộc tính (**properties**), phương thức (**methods**)
(phương thức thường - **regular methods** và phương thức trừu tượng **abstract
methods**), hàm khởi tạo (**constructor**) (có thể có hoặc không),...

Lớp con kế thừa một lớp trừu tượng phải ghi đè (**override**) toàn bộ các phương
thức trừu tượng của lớp cha có (trong C#, không thể kế thừa nhiều lớp trừu
tượng, chỉ có thể kế thừa nhiều interface).

Một ví dụ cơ bản về lớp trừu tượng:

```c#
abstract class Shape
{
    public abstract int GetArea();
}

class Square : Shape
{
    private int _side;

    public Square(int n) => _side = n;

    // GetArea method is required to avoid a compile-time error.
    public override int GetArea()
    {
        return _side * _side;
    }

    static void Main()
    {
        var sq = new Square(12);
        Console.WriteLine($"Area of the square = {sq.GetArea()}");
    }
}
// Output: Area of the square = 144
```

_Trong ví dụ trên, lớp trừu tượng **Shape** luôn đi kèm từ khóa **abstract**, có
phương thức trừu tượng là **GetArea()** (cũng kèm từ khóa **abstract**). Lớp con
**Square** kế thừa lớp trừu tượng **Shape** này nên ghi đè (**override**) phương
thức trừu tượng **GetArea()**._[^3]

# Giống nhau

Cả interface và lớp trừu tượng đều có cùng một vài đặc điểm giống nhau:

- Đều là những công cụ để đạt được tính trừu tượng (**abstraction**) trong lập
  trình hướng đối tượng.
- Đều không thể tạo ra đối tượng trực tiếp mà phải được lớp khác kế thừa. Hai
  cách tạo đối tượng như bên dưới sẽ đều gặp lỗi.

```c#
public interface IAnimal
{
    void Sound(); // interface method (does not have a body)
    void Run(); // interface method (does not have a body)
}

class Program()
{
    static void Main()
    {
        IAnimal animal = new IAnimal(); // cannot create instance of an interface
    }
}
```

```c#
abstract class Shape
{
    public abstract int GetArea();
}

class Square : Shape
{
    private int _side;

    public Square(int n) => _side = n;

    // GetArea method is required to avoid a compile-time error.
    public override int GetArea()
    {
        return _side * _side;
    }

    static void Main()
    {
        Shape shape = new Shape(); // cannot create instance of a abstract class
    }
}
```

- Đều có thể chứa các thuộc tính (**properties**) và phương thức trừu tượng
  (**abstract methods**).
- Lớp con kế thừa lớp trừu tượng hay interface đều phải ghi đè (**override**)
  toàn bộ các phương thức trừu tượng của lớp trừu tượng hay interface có.
- Đều có thể kế thừa nhiều interface (đa kế thừa).

# Khác nhau

Nhìn chung thì, interface và abstract class có khá nhiều điểm tương đồng. Vậy
giữa chúng có những sự khác nhau gì để người ta phải phân biệt ra làm hai khái
niệm? Mình đã tìm kiếm và tổng hợp những điểm khác nhau tiêu biểu giữa interface
và abstract class dưới đây thành một bảng so sánh:

| STT | Kiểu                   | Interface                                                                              | Abstract class                                                                                                                         |
| --- | ---------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Phương thức            | Chỉ có phương thức trừu tượng.                                                         | Có thể có phương thức thường và phương thức trừu tượng.                                                                                |
| 2   | Hàm dựng (constructor) | Không có.                                                                              | Có thể có hoặc không.                                                                                                                  |
| 3   | Đa kế thừa             | Hỗ trợ.                                                                                | Không hỗ trợ.                                                                                                                          |
| 4   | Kế thừa                | Có thể implement (một hoặc nhiều) interface cơ sở, không thể kế thừa một lớp.          | Có thể kế thừa một lớp, và (một hoặc nhiều) interface khác.                                                                            |
| 5   | Static members         | Không có.                                                                              | Có thể có hoặc không.                                                                                                                  |
| 6   | Access Modifier        | public.                                                                                | public, private, protected etc.                                                                                                        |
| 7   | Tốc độ                 | Chậm hơn vì cần thời gian để tìm kiếm các phương thức tương ứng trong lớp thừa kế.     | Nhanh.                                                                                                                                 |
| 8   | Thành phần             | Methods, properties (not fields), indexers, and events.                                | Methods (non-abstract, abstract), properties (non-abstract, abstract), constructor, destructor, data member (fields, constants...),... |
| 9   | Sử dụng                | Được sử dụng để thực hiện những tính năng mà lớp không thể thực hiện (như đa kế thừa). | Được sử dụng để thực hiện những tính năng mà lớp thực hiện, với mục đích đạt được tính trừu tượng hóa trong lập trình hướng đối tượng. |
| 10  | Ghi đè                 | Lớp con kế thừa phải ghi đè toàn bộ các phương thức (trừu tượng) của interface.        | Có thể ghi đè toàn bộ, một phần hoặc không cần ghi đè nếu lớp trừu tượng không có phương thức trừu tượng.                              |

# Vậy khi nào thì chúng ta sử dụng interface, khi nào thì chúng ta sử dụng abstract class?

Nhìn chung thì, interface và abstract class đều được dùng để **đạt được tính
trừu tượng** trong lập trình hướng đối tượng, ngoài ra còn đạt được **tính bảo
mật** - **ẩn một số chi tiết nhất định** và chỉ hiển thị các chi tiết quan trọng
của một đối tượng (**giao diện** - các hành động đối tượng có thể thực hiện mà
không làm lộ ra chi tiết thực hiện).

Ngoài ra, có những tình huống chúng ta nên dùng một trong hai công cụ này hơn là
cái còn lại, cụ thể như bên dưới.

## Interface

Chúng ta có thể sử dụng interface để triển khai đa kế thừa.

Dùng trong trường hợp chỉ cần khai báo một nhóm các phương thức (hành động)
chung dành cho một nhóm khác đối tượng khác nhau như ví dụ bên dưới.

```c#
interface IRunable
{
    void Run();
}
interface IWorkable
{
    void Work();
}
interface IEatable
{
    void Eat();
}

class Person : IRunable,IWorkable, IEatable
{
    protected string _name;
    protected DateTime _birthDay;
    public void Run()
    {
        Console.Write("Person is runing...");
    }
    public void Work()
    {
        Console.Write("Person is working...");
    }
    public void Eat()
    {
        Console.Write("Person is eating...");
    }
}
class Animal : IRunable, IEatable
{
    protected string _name;
    protected int _legsCount;
    public void Run()
    {
        Console.Write("Animal is runing...");
    }
    public void Eat()
    {
        Console.Write("Animal is eating...");
    }
}
```

Mối quan hệ giữa lớp con thừa kế và interface là mối quan hệ **realization**
(hiện thực hóa).

## Abstract class

Abstract class giống như một kiểu dữ liệu, tức là một kiểu chung cho các lớp dẫn
xuất (thừa kế), các lớp dẫn xuất thuộc về một kiểu đó, nó sẽ cung cấp các thuộc
tính và hành vi chung nhất cho kiểu đó. Chúng ta nên dùng abstract class khi cần
cài đặt **phương thức chung** và những **thuộc tính chung** của các đối tượng
(**chứa thành phần dữ liệu chung**).

Quan sát ví dụ bên dưới:

```c#
abstract class Person
{
    protected string _name;
    protected DateTime _birthDay;
    protected void Say()
    {
        Console.Write("Person is saying....");
    }
    protected abstract void Work();
}
class Employee : Person
{
    private float _salary;
    protected override void Work()
    {
        throw new NotImplementedException();
    }
}
class Student : Person
{
    private float _mark;
    protected override void Work()
    {
        throw new NotImplementedException();
    }
}
```

Trong ví dụ này, ta có abstract class **Person** chứa những thông tin chung nhất
của một người là tên (**\_name**) và ngày sinh (**\_birthDay**), còn những lớp
con thừa kế Person sẽ có những thuộc tính và phương thức riêng được khai báo
thêm, nhưng những gì chung nhất thì được khai báo (và cài đặt) trong lớp trừu
tượng Person. Sử dụng abstract class theo cách này sẽ giúp lập trình viên hạn
chế viết lại code và dễ bảo trì hơn khi nếu cần chỉnh sửa những tính năng chung
thì có thể chỉnh sửa trong lớp Person thay vì phải sửa nhiều lần ở những lớp
con.

Ngoài ra, ta còn có thể sử dụng abstract class khi cần tạo phương thức mà lớp
con có thể sử dụng hoặc ghi đè từ lớp cha (không bắt buộc ghi đè hay sử dụng).

Mối quan hệ giữa abstract class và derived class là mối quan hệ
**generalization** (tổng quát hóa) (cụ thể hơn là mối quan hệ **IS-A**), tức là
mối quan hệ thuộc về tập cha con.

➡ Interface dùng khi cần thiết kế một tập các hành động có liên quan với nhau.
Abstract class dùng khi cần thiết kế một tập các lớp có liên quan với nhau.

# Kết

Trên đây mình vừa mới đưa ra cho bạn một cách nhìn về sự khác biệt giũa
interface và abstract class trong ngôn ngữ lập trình C#. Hi vọng đã phần nào
giúp bạn phân biệt rõ ràng hơn sự khác nhau về hai khái niệm này cũng như có thể
giúp bạn cải thiện kĩ năng lập trình của mình. Mọi ý kiến đóng góp xin vui lòng
gửi về Facebook cá nhân của mình
[Nam Anh Phạm Hoàng](https://www.facebook.com/phnaharris/) để góp phần làm cho
bài viết tốt hơn. Và hãy cùng chờ đợi những bài viết tiếp theo trong chuỗi bài
[Những điều khác biệt](/tag/Những%20điều%20khác%20biệt/) của mình nhé.

**Disclamer: Do mình cũng chưa phải là một chuyên gia về lập trình hay ngôn ngữ
C# nên trong bài viết chắc hẳn còn nhiều thiếu sót hoặc nhầm lẫn. Mọi ý kiến
đóng góp vui lòng mang tính lịch sự và cùng nhau phát triển. Bài này khá dài và
mình xin cảm ơn sự quan tâm của mọi khi đã đọc đến đây. Chúc mọi người ngày càng
phát triển hơn trên con đường lập trình của mình.**

[^1]:
    Trong phạm vi bài này, mình chỉ đề cập đến những kiến thức cơ bản nhất về
    interface và abstract class. Để biết thêm chi tiết về hai công cụ này, các bạn
    hãy đón đọc ở những bài tiếp theo nhé.
    <br>

[^2]:
    Trong C#, interface thường được đặt tên với chữ cái bắt đầu là "I".
    <br>

[^3]:
    Lời người viết.
    <br>
