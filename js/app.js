const calculateCashback = function calculateCashback(specialCategoryPurchases,otherCategoryPurchases) {

    const specialCategoryPercent = 0.03;
    const otherCategoryPercent = 0.01;

    const specialCategoryCashback = specialCategoryPurchases * specialCategoryPercent;
    console.log(specialCategoryCashback);

    const otherCategoryCashback = otherCategoryPurchases * otherCategoryPercent;
    console.log(otherCategoryCashback);

    let totalCashback = specialCategoryCashback + otherCategoryCashback;
    const limit = 15000;
    if (totalCashback > limit) {
        totalCashback = limit;
    }
    return totalCashback;
};
const cashBack = calculateCashback(5000,1000);
console.log(cashBack);
