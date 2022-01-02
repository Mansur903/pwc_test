var obj = {
  "100001": {
    "productInterest": {
      "view": {
        "daily": 8,
        "twoDays": 13,
        "weekly": 67,
        "twoWeeks": 119,
        "monthly": 320
      }
    },
    "productData": {
      "some_test_property": "",
      "expiration_date": "01.12.2024",
      "for_cutting": "",
      "usage_simplicity": "",
      "weight": "",
      "image_url": "https://some.ru/test.jpeg",
      "custom_url": "https://some.ru/test",
      "shadow": "false",
      "blossom": "9.0",
      "decorativeness": "1",
      "taste": "9.5"
    }
  },
  "100002": {
    "productInterest": {
      "view": {
        "daily": 1,
        "twoDays": 44,
        "weekly": 87,
        "twoWeeks": 219,
        "monthly": 430
      }
    },
    "productData": {
      "some_test_property": "",
      "expiration_date": "01.12.2024",
      "for_cutting": "",
      "usage_simplicity": "",
      "weight": "",
      "image_url": "https://some.ru/test.jpeg",
      "custom_url": "https://some.ru/test",
      "shadow": "false"
    }
  },
  "100003": {
    "productInterest": {
      "view": {
        "daily": 0,
        "twoDays": 0,
        "weekly": 0,
        "twoWeeks": 0,
        "monthly": 0
      }
    },
    "productData": {
      "some_test_property": "",
      "expiration_date": "01.12.2024",
      "for_cutting": "",
      "usage_simplicity": "",
      "weight": "",
      "image_url": "https://some.ru/test.jpeg",
      "custom_url": "https://some.ru/test",
      "shadow": "false",
      "blossom": "0",
      "decorativeness": "0",
      "taste": "0"
    }
  },
  "100004": {
    "productInterest": {
      "view": {
        "daily": 10,
        "twoDays": 10,
        "weekly": 10,
        "twoWeeks": 10,
        "monthly": 10
      }
    },
    "productData": {
      "some_test_property": "",
      "expiration_date": "01.12.2024",
      "for_cutting": "",
      "usage_simplicity": "",
      "weight": "",
      "image_url": "https://some.ru/test.jpeg",
      "custom_url": "https://some.ru/test",
      "shadow": "false",
      "blossom": "10",
      "decorativeness": "10",
      "taste": "10"
    }
  },
  "100005": {
    "productInterest": {
      "view": {
        "daily": 1,
        "twoDays": 2,
        "weekly": 7,
        "twoWeeks": 15,
        "monthly": 40
      }
    },
    "productData": {
      "some_test_property": "",
      "expiration_date": "01.12.2024",
      "for_cutting": "",
      "usage_simplicity": "",
      "weight": "",
      "image_url": "https://some.ru/test.jpeg",
      "custom_url": "https://some.ru/test",
      "shadow": "false",
      "blossom": "8",
      "decorativeness": "7",
      "taste": "6.5"
    }
  },
}

const objFilter = (obj) => {
  const goods = Object.keys(obj);
  const filteredGoods = goods.filter((item) => {
    return Number(obj[item].productData.decorativeness) > 9 ?  true : false;
  })
  const newObj = {};
  filteredGoods.forEach((item) => {
    newObj[item] = obj[item];
  })
  return newObj;
}
console.log(objFilter(obj));

// Время выполнения задания ~ 15 минут