// шаблон COMPOSITE
// в задачі створюємо можливість писати (публіковати) коментарі до відео (по типу YouTube)
// class Comment {
//     constructor(text) {
//         this.text = text;
//     }
//     display() {
//         console.log(`- Коментар: ${this.text}`);       
//     }
// }
// class Video {
//     comments = []; // створили масив де будемо зберігати коментарі
//     constructor(title) {
//         this.title = title;
//     }
//     addComment(comment) {
//         this.comments.push(comment);
//         // console.log(this.comments.slice(-1, -2));
//     } // додавання коментаря в масив коментарів
//     removeComment(comment) {
//         const index = this.comments.indexOf(comment);
//         if (index !== -1) {
//             this.comments.splice(index, 1)
//         }
//     }  //видалення коментаря з масиву
//     display() {
//         console.log(`Відео: ${this.title}`);
//         for (let comment of this.comments) {
//             comment.display();
//         }
//     }
// }
// const video = new Video("Навчальне відео"); //створили відео
// video.addComment(new Comment("Дуже корисне відео"));  // створили коментар до відео через клас Comment
// video.addComment(new Comment("Це відео краще за попередні"));  // створили коментар до відео через клас Comment
// video.display() // вивели коментар до відео
// весь цей шаблон дозволяє робити коментарі, але нижче ми зроюимо функціонал щоб давати коментарі до коментарів

// class Comment {
//     comments = []; // масив з коментарями
//     constructor(text) {
//         this.text = text;
//     }
//     addComment(comment) {
//         this.comments.push(comment);
//     } // додавання коментарю до масиву
//     removeComment(comment) {
//         const index = this.comments.lastIndexOf(comment);
//         if (index !== -1) {
//             this.comments.splice(index, 1);
//         }
//     } // видалення коментаря з масиву
//         display() {
//         console.log(`- Коментар: ${this.text}`);
//         for (let comment of this.comments) {
//             comment.display();
//         }
//     }
// }
// const video = new Video("Навчальне відео"); //створили відео
// video.addComment(new Comment("Дуже корисне відео"));  // створили коментар до відео через клас Comment
// video.addComment(new Comment("Це відео краще за попередні"));  // створили коментар до відео через клас Comment
// video.comments[0].addComment(new Comment("відповідь: Згоден !!"))
// video.display() // вивели коментар до відео.comments[0].addComment(new Comment("відповідь: Згоден !!"))
// console.log(video.comments);

// можна винести код що повторюєтсься в окремий клас
// class Composite {
//     comments = [];
    
//     addComment(comment) {
//         this.comments.push(comment);
//     } // додавання коментарю до масиву
    
//     removeComment(comment) {
//         const index = this.comments.lastIndexOf(comment);
//         if (index !== -1) {
//             this.comments.splice(index, 1);
//         }
//     } // видалення коментаря з масиву
// } // цу батьківсткий клас для Comment and Video
// class Video extends Composite {
//     constructor(title) {
//         super();
//         this.title = title;
//     }

    
//     display() {
//         console.log(`Відео: ${this.title}`);
//         for (let comment of this.comments) {
//             comment.display();
//         }
//     }
// }
// class Comment extends Composite {
//     constructor(text) {
//         super();
//         this.text = text;
//     }
    
//     display() {
//         console.log(`- Коментар: ${this.text}`);
//         for (let comment of this.comments) {
//             comment.display();
//         }
//     }
// }
// const video = new Video("Навчальне відео"); //створили відео
// video.addComment(new Comment("Дуже корисне відео"));  // створили коментар до відео через клас Comment
// video.addComment(new Comment("Це відео краще за попередні"));  // створили коментар до відео через клас Comment
// video.comments[0].addComment(new Comment("відповідь: Згоден !!"))
// video.display() // вивели коментар до відео.comments[0].addComment(new Comment("відповідь: Згоден !!"))
// console.log(video.comments);

// WLYWEIGHT шаблон МУХА
// class Category {
//     static #categories = {};
//     constructor(name) {
//         this.name = name;
//     }
//     static createName(name) {
//         if (this.#categories[name]) {
//             return this.#categories[name];
//         } else {
//             this.#categories[name] = new Category(name);
//             return this.#categories[name];
//         }
//     }
// } // цей клас ми створили за шаблон ОДИНОЧКА

// class Product {
//     constructor(name, category) {
//         this.name = name;
//         this.category = category
//     }
//     display() {
//         console.log(`Product: ${this.name}, Category: ${this.category.name}`);
//     }
// }

// const electronics = Category.createName("Electronics");
// const books = Category.createName("books");
// const electronics2 = Category.createName("Electronics");
// console.log(electronics, books, electronics2);
// console.log(electronics === electronics2); // було створено дві змінних з одною назвою категорії, тому вони рівні і це є одна категорія

// const product1 = new Product("Laptop", electronics)
// const product2 = new Product("Headphones", electronics)
// const product3 = new Product("Book Title", books)
// const product4 = new Product("Smartphone", electronics2)

// product1.display();
// product2.display();
// product3.display();
// product4.display();


// TEMPLATE METHOD (ШАБЛОНИЙ МЕТОД)
// class CoffeMachine {
//     prepareCoffee() {
//         this.boilWater();
//         this.grindCoffeeBeans();
//         this.brewCoffee();
//         this.pourIntoCup();
//         this.addIngridients();
//         this.serveCoffee();
//     }
//     boilWater() {
//         console.log('Boiling water ...')
//     }
//     grindCoffeeBeans() {
//         console.log('Grinding coffee beans ...')
//     }
//     brewCoffee() {
//         console.log('Brewing coffee ...')
//     }
//     pourIntoCup() {
//         console.log('Pouring coffee into cup ...')
//     }
//     addIngridients() {
//         // цей метод може бути перевизначений у підкласах
//     }
//     serveCoffee() {
//         console.log('Coffee served !!')
//     }
// }
// class LatteMachine extends CoffeMachine {
//     addIngridients() {
//         console.log('Adding milk to make latte ...')
//         // цей метод може бути перевизначений у підкласах
//     }
// }
// class CappuchinoMachine extends CoffeMachine {
//     addIngridients() {
//         console.log('Adding frothed milk and sprinkle of cocoa poweder to make cappuchino ...')
//         // цей метод може бути перевизначений у підкласах
//     }
// }

// const latteMachine = new LatteMachine();
// latteMachine.prepareCoffee();
// console.log("=== === === === === === ===");
// const cappuchinoMachine = new CappuchinoMachine();
// cappuchinoMachine.prepareCoffee();

// VISITOR (відвідувач)
// class TextFile {
//     constructor(name, content) {
//         this.name = name;
//         this.content = content;
//     }
// }
// class ImageFile {
//     constructor(name, size) {
//         this.name = name;
//         this.size = size;
//     }
// }
// class VideoFile {
//     constructor(name, duration) {
//         this.name = name;
//         this.duration = duration;
//     }
// }
// class TextEditor {
//     constructor() {
//         this.files = [];
//     }
//     addFile(file) {
//         this.files.push(file);
//     }
// }

// const textEditor = new TextEditor();
// const textFile = new TextFile('document.txt', 'Lorem ipsum');
// const imageFile = new ImageFile('image.jpg', 1024);
// const videoFile = new VideoFile('video.mp4', 60);

// textEditor.addFile(textFile);
// textEditor.addFile(imageFile);
// textEditor.addFile(videoFile);

// console.log(textEditor);

// додамо методи реалізації по вивиду файлів всередині класу TextEditor, додамо нові методи
// class TextEditor {
//     constructor() {
//         this.files = [];
//     }
//     addFile(file) {
//         this.files.push(file);
//     }

//     readTextFile(file) {
//         console.log(`Text file: ${file.name}, size: ${file.content.length} characters`)
//     }
//     readImageFile(file) {
//         console.log(`Image file: ${file.name}, size: ${file.size} KB`)
//     }
//     readVideoFile(file) {
//         console.log(`Video file: ${file.name}, duration: ${file.duration} minutes`)
//     }
//     // саме в різних методах представлення різних класів з котрими взаємодіє і є основа патерну ВІДВІДУВАЧ
//     readFiles() {
//         for (const file of this.files) {
//             if (file instanceof TextFile) {
//                 this.readTextFile(file);
//             } else if (file instanceof ImageFile) {
//                 this.readImageFile(file);
//             } else if (file instanceof VideoFile) {
//                 this.readVideoFile(file);
//             }
//         }
//     }
// }
// const textEditor = new TextEditor();
// const textFile = new TextFile('document.txt', 'Lorem ipsum');
// const imageFile = new ImageFile('image.jpg', 1024);
// const videoFile = new VideoFile('video.mp4', 60);

// textEditor.addFile(textFile);
// textEditor.addFile(imageFile);
// textEditor.addFile(videoFile);

// console.log(textEditor);
// textEditor.readFiles();


// ADAPTER - шаблон Адаптер
// система електроних платежів з власним АРІ
// class ElectronicPaymentSystem {
//     makePayment(amount) {
//         const convertedAmount = this.convertAmount(amount);
//         console.log(`Making electronic payment: $${convertedAmount}`)
//     }
//     convertAmount(amount) {
//         // логіка конвертації платежу
//         return amount * 1.2 // курс конвертації
//     }
// }

// const electronicPaymentSystem = new ElectronicPaymentSystem();
// electronicPaymentSystem.makePayment(100);
// а зараз нам сказали що треба додати ще одну платіжну систему

// class OtherPaymentSystem {
//     submit(amount) {
//         console.log(`Submitted payment request: ${amount}`)
//     }
// }

// як бачимо маємо два різних методи платежу: makePayment (в нашому класі ElectronicPaymentSystem) та submit (в доданому класі OtherPaymentSystemб причому навіть назви цих методів не співпадають)
// робимо клас PaymentAdapter
// class PaymentAdapter {
//     constructor(paymentSystem) {
//         this.paymentSystem = paymentSystem;
//     }
//     makePayment(amount) {
//         const convertedAmount = this.convertAmount(amount);
//         this.paymentSystem.submit(convertedAmount)
//     }
//     convertAmount(amount) {
//         // логіка конвертації платежу
//         return amount * 1.2 // курс конвертації
//     }
// }
// // робимо клас Order
// class Order {
//     constructor(amount) {
//         this.amount = amount;
//         if (amount < 100) {
//             this.paymentSystem = new PaymentAdapter(new OtherPaymentSystem());
//         } else {
//             this.paymentSystem = new ElectronicPaymentSystem();
//         }
//     }
//     makePayment() {
//         if (this.paymentSystem.makePayment) {
//             return this.paymentSystem.makePayment(this.amount)
//         }
//         if (this.paymentSystem.submit) {
//             return this.paymentSystem.submit(this.amount)
//         }
//     }
// }
// const order1 = new Order(1000);
// order1.makePayment();
// const order2 = new Order(10);
// order2.makePayment();


// STRATEGY - Стратегія
// class ShoppingCart {
//     constructor() {
//         this.items = [];
//     }
//     addItem(item) {
//         this.items.push(item);
//     }
//     // додамо систему знижок до нашого кошика
//     discountStrategy(price) {
//         return price > 100 ? price * 0.9 : price // зробили умову коротким записом через тернарний оператор
//     }
//     calculateTotalPrice() {
//         let totalPrice = 0;
//         for (let item of this.items) {
//             totalPrice += item.price;
//         }
//         const finalPrice = this.discountStrategy(totalPrice);
//         return finalPrice;
//     }
// }
// const shoppingCart1 = new ShoppingCart();
// shoppingCart1.addItem({name: "product1", price: 100})
// shoppingCart1.addItem({ name: "product2", price: 50 })
// console.log(shoppingCart1.calculateTotalPrice());
// в подальшому у нас може бути декілька різних систем знижок і вони мають передаватися до кошика зовні
// class ShoppingCart {
//     constructor(discountStrategy) {
//         this.discountStrategy = discountStrategy;
//         this.items = [];
//     }
//     addItem(item) {
//         this.items.push(item);
//     }
//     calculateTotalPrice() {
//         const price = this.items.reduce((acc, item) => acc + item.price, 0);
//         return (price - this.discountStrategy.calculateDiscount(price));
//     }
// }
// // зробимо декілька систем знижок
// class DiscountStrategy {
//     calculateDiscount(price) {
//         return price;
//     }
// }
// class RegularDiscountStrategy extends DiscountStrategy{
//     calculateDiscount(price) {
//         return price * 0.1; //discount 10%
//     }
// }
// class PremiumDiscountStrategy extends DiscountStrategy{
//     calculateDiscount(price) {
//         return price * 0.2 //discount 20%
//     }
// }
// class NewCustomerDiscountStrategy extends DiscountStrategy{
//     calculateDiscount(price) {
//         return price * 0.05 //discount 5%
//     }
// }
// const shoppingCart1 = new ShoppingCart(new NewCustomerDiscountStrategy());
// shoppingCart1.addItem({name: "product1", price: 100})
// shoppingCart1.addItem({ name: "product2", price: 50 })
// console.log(shoppingCart1.calculateTotalPrice());


// ITERATOR - ітератор
// class User {    // клас користувачів
//     constructor(name, email, password) {
//         this.name = name;
//         this.email = email;
//         this.password = password;
//     }
// }
// class UserGroup {   // клас груп користувачів, наприклад група в Телеграм
//     users = [];
//     addUser(user) {
//         this.users.push(user);
//     }
// }
// class UserIterator {    //клас створений для стр.446 і перенесений сюди задля правильності коду
//     #users = null;
//     #currentIndex = 0;
//     constructor(userGroup) {    //прийнамємо групу користувачів
//         this.#users = userGroup.users;    // в масив імен кладемо імена із групи за допомогою методу перебору масива map();
//     }
//     hasNext() {
//         return this.#currentIndex < this.#users.length
//     }
//     next() {
//         if (this.hasNext()) {
//             const name = this.#users[this.#currentIndex].name;
//             this.#currentIndex++;
//             return name
//         }
//         return null;
//     }
//     list() {
//         return this.#users.map((user) => user.name).join(', ');
//     }
// }   // можно додати приватності в цей клас, давши приватність для currentInderx, names, методу hasNext()

// створюємо дві групи та додаємо до них по користувачу
// const group = new UserGroup();
// group.addUser(new User("John Doe", "john@example.com", "password1"));
// group.addUser(new User("Jane Smith", "jane@example.com", "password2"))
// const group2 = new UserGroup();
// group2.addUser(new User("Jane Smith", "jane@example.com", "password2"))
// для подальшої роботи працюємо з однією групою
// console.log(group);
// маємо задачу: вивести імена користувачів в строку через кому
// console.log(group.users.map((user) => user.name).join(', '));   // але ми вставимо цей код виклику в іншому місці нашого класу UserGroup. Тому створюємо клас UserIterator, який і буде відповідати за коректну ітерацію нашого класу
// const iterator = new UserIterator(group);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.list());


// шаблон MEDIATOR (медіатор)
// у нас будуть клас Користувача (User) та клас чату (Chat) де користувачі будуть відправляти повідомлення
class User {
    constructor(name, chat) {
        this.name = name;
        this.chat = chat;   // це саме наш шаблон котрий поєднає два класи User & Chat
    }
    sendMessage(message) {  // відправлення повідомлення комусь
        console.log(`${this.name} відправив повідомлення ${message}`);
        return this.chat.sendMessage(this, message);
        }
    recieveMessage(user, message) { // отримання повідомлення від когось
        console.log(`${this.name} отримав повідомлення від ${user.name}: ${message}`);
    }
}
class Chat {
    constructor() {
        this.users = [];
    }
    addUser(user) { // додаємо користувачівв до чату
        this.users.push(user);
    }
    sendMessage(sender, message) {  // відправка повідомлення для інших користувачів з перевіркою щоб не відправити самому собі )))
        for (const user of this.users) {
            if (user !== sender) {
                user.recieveMessage(sender, message)
            }
        }
    }
}
// const chatMediator = new Chat();
// const user1 = new User("John", chatMediator);
// const user2 = new User("Jane", chatMediator);
// const user3 = new User("Mike", chatMediator);

// chatMediator.addUser(user1);
// chatMediator.addUser(user2);
// chatMediator.addUser(user3);

// user1.sendMessage("Hello everybody");
// console.log("=== === === === === === ===");
// user2.sendMessage("Hi, John");