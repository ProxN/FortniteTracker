import { elements } from './base';

export const formatDate = date => {
  var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const d = new Date(date);

  return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
};

const renderItem = item => `
<div class="shop-item ${item.rarity}">
    <img
        src="${item.images.icon}" />
    <div class="shop-item__price">
        <img class="shop-item__price--img" src="https://image.fnbr.co/price/icon_vbucks.png">
        <span>${item.price}</span>
    </div>
    <div class="shop-item__name">
        <p>${item.name}</p>
    </div>
</div>
`;

const createItem = items => {
  const itemsMarkup = items.map(item => {
    return renderItem(item);
  });
  return itemsMarkup.join('');
};

const renderListItems = (title, items) => {
  const markup = `
    <div class="shop__itemsBox">
        <div class="shop__itemTitle">
            <h4>${title}</h4>
        </div>
        <div class="shop-items">
            ${createItem(items)}
        </div>
    </div>
    `;
  return markup;
};

export const renderShop = data => {
  console.log(data);
  const markup = `
    <section class="shop">
        <div class="shop__container">
            <div class="shop__date">
              <div class="shop__date--box">
              ${formatDate(data.date)}
              </div>
            </div>
            ${renderListItems('Daily Items', data.daily)}
            ${renderListItems('Featured Items', data.featured)}
        </div>
    </section> -->
    `;

  elements.main.insertAdjacentHTML('beforeend', markup);
};
