class StudentData {
  constructor(name, rate, comment) {
    this.name = name;
    this.rate = rate;
    this.comment = comment;
  }
}

class DataCollection {
  constructor() {
    this._data = [
      {name: "Ana", rate: 9, comment:"Very intensive but challenging. I love it"},
      {name: "Mike", rate: 5, comment:"It’s too hard for me and I struggle understand the lessons"},
      {name: "Jacob", rate: 10, comment:"I love the academy! I learn so many new things!"},
      {name: "Sil", rate: 7, comment:"It’s cool, I expected more challenges"},
      {name: "Vanya", rate: 8, comment:"The lessons are very organized and it’s easy to keep up."},
      {name: "David", rate: 3, comment:"I couldn’t understand anything from the first day. I would like more lessons than working by myself"},
      {name: "Karel", rate: 10, comment:"Best academy ever! So challenging and exciting"},
      {name: "Jiri", rate: 9, comment:"I love the teachers and the challenges."},
      {name: "Kate", rate: 9, comment:"I am satisfied with the level of intensity."},
      {name: "Jane", rate: 9, comment:"It is exactly what I expected, a great academy"},
    ];
    this._dataCounts = [{rate: 1, count: 0},
                        {rate: 2, count: 0},
                        {rate: 3, count: 0},
                        {rate: 4, count: 0},
                        {rate: 5, count: 0},
                        {rate: 6, count: 0},
                        {rate: 7, count: 0},
                        {rate: 8, count: 0},
                        {rate: 9, count: 0},
                        {rate: 10, count: 0}];
    this._data.forEach(data.forEach(i => this._dataCounts[i.rate-1].count++ ));
  }

  addDataPoint(name, rate, comment) {
    this._data.push(new StudentData(name, rate, comment));
    this._dataCounts[rate-1].count++;
  }

  removeDataPoint(name) {
    const removeIndex = this._data.findIndex(e => e.name === name);
    this._dataCounts[this._data[removeIndex].rate-1]--;
    this._data.splice(removeIndex, 1);
  }

  get data() {
    return this._data;
  }

  get dataCounts() {
    return this._dataCounts;
  }
}



/*
let data = new DataCollection();

data.addDataPoint("Bob", 6, "Absolutely awesome");

data.getData() //ipv data
data.getDataCounts() //ipv dataCounts

const newStudent = new StudentData("jiri", 9, "loved it");