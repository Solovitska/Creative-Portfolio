
function encodeStringToArray(e) {
    e = unescape(encodeURIComponent(e));
    const t = [];
    for (let r = 0; r < e.length; ++r) {
        t.push(e.charCodeAt(r));
    }
    return t;
}

function i(e, i, o, a) {

    if ("string" == typeof e) {
        e = encodeStringToArray(e);
    }

    // Створюємо об'єкт для зберігання результату
    let result = {
        name: e,
        DNS: o,
        URL: a
    };

    // Повертаємо результат
    return result;
}

// Приклад використання
const result1 = i("myString", [1, 2, 3], "some DNS", "some URL");
const result2 = i("anotherString", [4, 5, 6], "another DNS", "another URL");

// Виведемо результат у консоль
console.log(result1);
console.log(result2); 
