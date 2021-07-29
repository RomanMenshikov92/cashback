'use strict';
const calculateCashback = function calculateCashback(specialCategoryPurchases,otherCategoryPurchases) {

    const specialCategoryPercent = 0.03;
    const otherCategoryPercent = 0.01;

    const specialCategoryCashback = specialCategoryPurchases * specialCategoryPercent;
    console.log(specialCategoryCashback);
    const otherCategoryCashback = otherCategoryPurchases * otherCategoryPercent;
    console.log(otherCategoryCashback);
    let totalCashback = specialCategoryCashback + otherCategoryCashback;
    const limit = 15000;

    return {
        specialCategoryCashback,
        otherCategoryCashback,
        totalCashback: totalCashback > limit ? limit : totalCashback,
    };
}

const cashBack = calculateCashback(5000,1000);
console.log(cashBack);

function handleSubmit (evt) {
    evt.preventDefault(); // отменяем поведение по умолчанию

    const specialAmountErrorEl = document.getElementById('special-amount-error');
    const otherAmountErrorEl = document.getElementById('other-amount-error');
    const specialCashbackEl = document.getElementById('special-cashback');
    const otherCashbackEl = document.getElementById('other-cashback');
    const totalCashbackEl = document.getElementById('total-cashback');

    specialAmountErrorEl.textContent = '';
    otherAmountErrorEl.textContent = '';
    specialCashbackEl.textContent = '';
    otherCashbackEl.textContent = '';
    totalCashbackEl.textContent = '';

    const specialAmountInputEl = document.getElementById('special-amount-input');
    const specialAmount = Number(specialAmountInputEl.value);

    if (Number.isNaN(specialAmount)) {
        // TODO: show error
        specialAmountErrorEl.textContent = 'Неверное значение. Введите число, например 10000';
        return;
    }
    if (!Number.isFinite(specialAmount)) {
        // TODO: show error
        specialAmountErrorEl.textContent = 'Слишком большое значение. Введите число, например: 10000';
        return;
    }

    const otherAmountInputEl = document.getElementById('other-amount-input');
    const otherAmount = Number(otherAmountInputEl.value);

    if (Number.isNaN(otherAmount)) {
        // TODO: show error
        otherAmountErrorEl.textContent = 'Неверное значение. Введите число, например 10000';
        return;
    }
    if (!Number.isFinite(otherAmount)) {
        // TODO: show error
        otherAmountErrorEl.textContent = 'Неверное значение. Введите число, например 10000';
        return;
    }

    const result = calculateCashback(specialAmount, otherAmount);

    specialCashbackEl.textContent = `${result.specialCategoryCashback} руб.`;
    otherCashbackEl.textContent = `${result.otherCategoryCashback} руб.`;
    totalCashbackEl.textContent = `${result.totalCashback} руб.`;

}

const formEl = document.getElementById('cashback-form');
formEl.onsubmit = handleSubmit;
