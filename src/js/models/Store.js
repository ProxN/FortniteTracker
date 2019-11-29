import { fnbrUrl, fnbrKey } from './../config';

class Shop {
  constructor() {
    this.data = {};
  }

  async getShopItems() {
    const options = {
      method: 'GET',
      headers: {
        'x-api-key': fnbrKey
      }
    };

    const res = await fetch(fnbrUrl, options);
    const { data } = await res.json();
    this.data = {
      ...this.data,
      daily: data.daily,
      featured: data.featured,
      date: data.date
    };
  }
}

export default Shop;
