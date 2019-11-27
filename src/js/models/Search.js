import { proxy, baseUrl, key } from './../config';
export default class Search {
  constructor(epicName) {
    this.epicName = epicName;
    this.data = {};
    this.error = {};
  }

  async getStats() {
    const url = `${proxy}${baseUrl}profile/pc/${this.epicName}`;
    const options = {
      method: 'GET',
      headers: {
        'TRN-Api-Key': key
      }
    };

    const res = await fetch(url, options);
    this.data = await res.json();
  }
}
