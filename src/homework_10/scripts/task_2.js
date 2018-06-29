console.log('task_2 init');

const user={};
console.log('Создаем пустой список', user);

user.name = 'Вася';
console.log('Добавляем имя в список', user, user.name);

user.surname = 'Петров';
console.log('Добавляем фамилию в список', user, user.surname);

user.name = 'Сергей';
console.log('Меняем имя на Сергей', user, user.name);

delete user.name;
console.log('Удаляем имя из списка', user, user.name);