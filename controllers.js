const fs = require('fs');

const screenSizeToListNumber = {
  large: 8,
  medium: 9,
  small: 10,
};

const getListData = async () => {
  return new Promise((res, rej) => {
    fs.readFile('./lists.json', 'utf8', (err, data) => {
      if (err) {
        rej(err);
      } else {
        res(data);
      }
    });
  });
};

const getListFile = async () => {
  return new Promise((res, rej) => {
    fs.readFile('./lists.json', 'binary', (err, data) => {
      if (err) {
        rej(err);
      } else {
        res(data);
      }
    });
  });
};

module.exports = {
  listGet: async (req, res) => {
    try {
      const data = await getListData();
      const parsedData = JSON.parse(data);
      res.status(200).send(parsedData);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  test: async (req, res) => {
    try {
      const file = await getListFile();
      res.status(200).send(file);
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
