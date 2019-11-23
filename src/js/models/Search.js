export default class Search {
  constructor(epicName) {
    this.epicName = epicName;
    this.data = {};
    this.error = {};
  }

  async getStats() {
    const url = `https://cors-anywhere.herokuapp.com/https://api.fortnitetracker.com/v1/profile/pc/${this.epicName}`;
    const options = {
      method: 'GET',
      headers: {
        'TRN-Api-Key': '0d247163-65a5-47b4-ad8c-c2d3bfe7cf2d'
      }
    };

    const res = await fetch(url, options);
    this.data = await res.json();
  }
}
