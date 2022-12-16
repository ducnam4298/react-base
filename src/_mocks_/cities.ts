const cities = [
  {
    value: '11',
    label: 'Cao Bằng',
  },
  {
    value: '12',
    label: 'Lạng Sơn',
  },
  {
    value: '14',
    label: 'Quảng Ninh',
  },
  {
    value: '15,16',
    label: 'Hải Phòng',
  },
  {
    value: '17',
    label: 'Thái Bình',
  },
  {
    value: '18',
    label: 'Nam Định',
  },
  {
    value: '19',
    label: 'Phú Thọ',
  },
  {
    value: '20',
    label: 'Thái Nguyên',
  },
  {
    value: '21',
    label: 'Yên Bái',
  },
  {
    value: '22',
    label: 'Tuyên Quang',
  },
  {
    value: '23',
    label: 'Hà Giang',
  },
  {
    value: '24',
    label: 'Lào Cai',
  },
  {
    value: '25',
    label: 'Lai Châu',
  },
  {
    value: '26',
    label: 'Sơn La',
  },
  {
    value: '27',
    label: 'Điện Biên',
  },
  {
    value: '28',
    label: 'Hòa Bình',
  },
  {
    value: '29,30,31,32,33,40',
    label: 'Hà Nội',
  },
  {
    value: '34',
    label: 'Hải Dương',
  },
  {
    value: '35',
    label: 'Ninh Bình',
  },
  {
    value: '36',
    label: 'Thanh Hóa',
  },
  {
    value: '37',
    label: 'Nghệ An',
  },
  {
    value: '38',
    label: 'Hà Tĩnh',
  },
  {
    value: '39,60',
    label: 'Đồng Nai',
  },
  {
    value: '43',
    label: 'Đà Nẵng',
  },
  {
    value: '47',
    label: 'Đắk Lắk',
  },
  {
    value: '48',
    label: 'Đắk Nông',
  },
  {
    value: '49',
    label: 'Lâm Đồng',
  },
  {
    value: '41,50,51,52,53,54,55,56,57,58,59',
    label: 'Hồ Chí Minh',
  },
  {
    value: '61',
    label: 'Bình Dương',
  },
  {
    value: '62',
    label: 'Long An',
  },
  {
    value: '63',
    label: 'Tiền Giang',
  },
  {
    value: '64',
    label: 'Vĩnh Long',
  },
  {
    value: '65',
    label: 'Cần Thơ',
  },
  {
    value: '66',
    label: 'Đồng Tháp',
  },
  {
    value: '67',
    label: 'An Giang',
  },
  {
    value: '68',
    label: 'Kiên Giang',
  },
  {
    value: '69',
    label: 'Cà Mau',
  },
  {
    value: '70',
    label: 'Tây Ninh',
  },
  {
    value: '71',
    label: 'Bến Tre',
  },
  {
    value: '72',
    label: 'Bà Rịa - Vũng Tàu',
  },
  {
    value: '73',
    label: 'Quảng Bình',
  },
  {
    value: '74',
    label: 'Quảng Trị',
  },
  {
    value: '75',
    label: 'Thừa Thiên - Huế',
  },
  {
    value: '76',
    label: 'Quảng Ngãi',
  },
  {
    value: '77',
    label: 'Bình Định',
  },
  {
    value: '78',
    label: 'Phú Yên',
  },
  {
    value: '79',
    label: 'Khánh Hòa',
  },
  {
    value: '81',
    label: 'Gia Lai',
  },
  {
    value: '82',
    label: 'Kon Tum',
  },
  {
    value: '83',
    label: 'Sóc Trăng',
  },
  {
    value: '84',
    label: 'Trà Vinh',
  },
  {
    value: '85',
    label: 'Ninh Thuận',
  },
  {
    value: '86',
    label: 'Bình Thuận',
  },
  {
    value: '88',
    label: 'Vĩnh Phúc',
  },
  {
    value: '89',
    label: 'Hưng Yên',
  },
  {
    value: '90',
    label: 'Hà Nam',
  },
  {
    value: '92',
    label: 'Quảng Nam',
  },
  {
    value: '93',
    label: 'Bình Phước',
  },
  {
    value: '94',
    label: 'Bạc Liêu',
  },
  {
    value: '95',
    label: 'Hậu Giang',
  },
  {
    value: '97',
    label: 'Bắc Kạn',
  },
  {
    value: '13,98',
    label: 'Bắc Giang',
  },
  {
    value: '99',
    label: 'Bắc Ninh',
  },
];

const cities2 = [
  {
    value: 'cao bằng',
    label: 'Cao Bằng',
  },
  {
    value: 'lạng sơn',
    label: 'Lạng Sơn',
  },
  {
    value: 'quảng ninh',
    label: 'Quảng Ninh',
  },
  {
    value: 'hải phòng',
    label: 'Hải Phòng',
  },
  {
    value: 'thái bình',
    label: 'Thái Bình',
  },
  {
    value: 'nam định',
    label: 'Nam Định',
  },
  {
    value: 'phú thọ',
    label: 'Phú Thọ',
  },
  {
    value: 'thái nguyên',
    label: 'Thái Nguyên',
  },
  {
    value: 'yên bái',
    label: 'Yên Bái',
  },
  {
    value: 'tuyên quang',
    label: 'Tuyên Quang',
  },
  {
    value: 'hà giang',
    label: 'Hà Giang',
  },
  {
    value: 'lào cai',
    label: 'Lào Cai',
  },
  {
    value: 'lai châu',
    label: 'Lai Châu',
  },
  {
    value: 'sơn la',
    label: 'Sơn La',
  },
  {
    value: 'điện biên',
    label: 'Điện Biên',
  },
  {
    value: 'hòa bình',
    label: 'Hòa Bình',
  },
  {
    value: 'hà nội',
    label: 'Hà Nội',
  },
  {
    value: 'hải dương',
    label: 'Hải Dương',
  },
  {
    value: 'ninh bình',
    label: 'Ninh Bình',
  },
  {
    value: 'thanh hóa',
    label: 'Thanh Hóa',
  },
  {
    value: 'nghệ an',
    label: 'Nghệ An',
  },
  {
    value: 'hà tĩnh',
    label: 'Hà Tĩnh',
  },
  {
    value: 'đồng nai',
    label: 'Đồng Nai',
  },
  {
    value: 'đà nẵng',
    label: 'Đà Nẵng',
  },
  {
    value: 'đắk lắk',
    label: 'Đắk Lắk',
  },
  {
    value: 'đắk nông',
    label: 'Đắk Nông',
  },
  {
    value: 'lâm đồng',
    label: 'Lâm Đồng',
  },
  {
    value: 'hồ chí minh',
    label: 'Hồ Chí Minh',
  },
  {
    value: 'bình dương',
    label: 'Bình Dương',
  },
  {
    value: 'long an',
    label: 'Long An',
  },
  {
    value: 'tiền giang',
    label: 'Tiền Giang',
  },
  {
    value: 'vĩnh long',
    label: 'Vĩnh Long',
  },
  {
    value: 'cần thơ',
    label: 'Cần Thơ',
  },
  {
    value: 'đồng tháp',
    label: 'Đồng Tháp',
  },
  {
    value: 'an giang',
    label: 'An Giang',
  },
  {
    value: 'kiên giang',
    label: 'Kiên Giang',
  },
  {
    value: 'cà mau',
    label: 'Cà Mau',
  },
  {
    value: 'tây ninh',
    label: 'Tây Ninh',
  },
  {
    value: 'bến tre',
    label: 'Bến Tre',
  },
  {
    value: 'bà rịa - vũng tàu',
    label: 'Bà Rịa - Vũng Tàu',
  },
  {
    value: 'quảng bình',
    label: 'Quảng Bình',
  },
  {
    value: 'quảng trị',
    label: 'Quảng Trị',
  },
  {
    value: 'thừa thiên - huế',
    label: 'Thừa Thiên - Huế',
  },
  {
    value: 'quảng ngãi',
    label: 'Quảng Ngãi',
  },
  {
    value: 'bình định',
    label: 'Bình Định',
  },
  {
    value: 'phú yên',
    label: 'Phú Yên',
  },
  {
    value: 'khánh hòa',
    label: 'Khánh Hòa',
  },
  {
    value: 'gia lai',
    label: 'Gia Lai',
  },
  {
    value: 'kon tum',
    label: 'Kon Tum',
  },
  {
    value: 'sóc trăng',
    label: 'Sóc Trăng',
  },
  {
    value: 'trà vinh',
    label: 'Trà Vinh',
  },
  {
    value: 'ninh thuận',
    label: 'Ninh Thuận',
  },
  {
    value: 'bình thuận',
    label: 'Bình Thuận',
  },
  {
    value: 'vĩnh phúc',
    label: 'Vĩnh Phúc',
  },
  {
    value: 'hưng yên',
    label: 'Hưng Yên',
  },
  {
    value: 'hà nam',
    label: 'Hà Nam',
  },
  {
    value: 'quảng nam',
    label: 'Quảng Nam',
  },
  {
    value: 'bình phước',
    label: 'Bình Phước',
  },
  {
    value: 'bạc liêu',
    label: 'Bạc Liêu',
  },
  {
    value: 'hậu giang',
    label: 'Hậu Giang',
  },
  {
    value: 'bắc kạn',
    label: 'Bắc Kạn',
  },
  {
    value: 'bắc giang',
    label: 'Bắc Giang',
  },
  {
    value: 'bắc ninh',
    label: 'Bắc Ninh',
  },
];

const cities3 = [
  {
    group: 'cao bằng',
    cities: [
      { value: '11', label: 'Cao Bằng' },
    ],
  },
  {
    group: 'lạng sơn',
    cities: [
      { value: '12', label: 'Lạng sơn' },
    ],
  },
  {
    group: 'quảng ninh',
    cities: [
      { value: '14', label: 'Quảng Ninh' },
    ],
  },
  {
    group: 'hải phòng',
    cities: [
      { value: '15', label: 'Hải Phòng' },
      { value: '16', label: 'Hải Phòng' },
    ],
  },
  {
    group: 'thái bình',
    cities: [
      { value: '17', label: 'Thái bình' },
    ],
  },
  {
    group: 'nam định',
    cities: [
      { value: '18', label: 'Nam định' },
    ],
  },
  {
    group: 'phú thọ',
    cities: [
      { value: '19', label: 'Phú Thọ' },
    ],
  },
  {
    group: 'thái nguyên',
    cities: [
      { value: '20', label: 'Thái Nguyên' },
    ],
  },
  {
    group: 'yên bái',
    cities: [
      { value: '21', label: 'Yên Bái' },
    ],
  },
  {
    group: 'tuyên quang',
    cities: [
      { value: '22', label: 'Tuyên Quang' },
    ],
  },
  {
    group: 'hà giang',
    cities: [
      { value: '23', label: 'Hà Giang' },
    ],
  },
  {
    group: 'lào cai',
    cities: [
      { value: '24', label: 'Lào Cai' },
    ],
  },
  {
    group: 'lai châu',
    cities: [
      { value: '25', label: 'Lai Châu' },
    ],
  },
  {
    group: 'sơn la',
    cities: [
      { value: '26', label: 'Sơn La' },
    ],
  },
  {
    group: 'điện biên',
    cities: [
      { value: '27', label: 'Điện Biên' },
    ],
  },
  {
    group: 'hòa bình',
    cities: [
      { value: '28', label: 'Hòa bình' },
    ],
  },
  {
    group: 'hà nội',
    cities: [
      { value: '29', label: 'Hà Nội' },
      { value: '30', label: 'Hà Nội' },
      { value: '31', label: 'Hà Nội' },
      { value: '32', label: 'Hà Nội' },
      { value: '33', label: 'Hà Nội' },
      { value: '40', label: 'Hà Nội' },
    ],
  },
  {
    group: 'hải dương',
    cities: [
      { value: '34', label: 'Hải Dương' },
    ],
  },
  {
    group: 'ninh bình',
    cities: [
      { value: '35', label: 'Hòa Bình' },
    ],
  },
  {
    group: 'thanh hóa',
    cities: [
      { value: '36', label: 'Thanh Hóa' },
    ],
  },
  {
    group: 'nghệ an',
    cities: [
      { value: '37', label: 'Nghệ An' },
    ],
  },
  {
    group: 'hà tĩnh',
    cities: [
      { value: '38', label: 'Hà Tĩnh' },
    ],
  },
  {
    group: 'đồng nai',
    cities: [
      { value: '39', label: 'Đồng Nai' },
      { value: '60', label: 'Đồng Nai' },
    ],
  },
  {
    group: 'đà nẵng',
    cities: [
      { value: '43', label: 'Đà Nẵng' },
    ],
  },
  {
    group: 'đắk lắk',
    cities: [
      { value: '47', label: 'Đắk Lắk' },
    ],
  },
  {
    group: 'đắk nông',
    cities: [
      { value: '48', label: 'Đắk Nông' },
    ],
  },
  {
    group: 'lâm đồng',
    cities: [
      { value: '49', label: 'Lâm Đồng' },
    ],
  },
  {
    group: 'hồ chí minh',
    cities: [
      { value: '41', label: 'Hồ Chí Minh' },
      { value: '50', label: 'Hồ Chí Minh' },
      { value: '51', label: 'Hồ Chí Minh' },
      { value: '52', label: 'Hồ Chí Minh' },
      { value: '53', label: 'Hồ Chí Minh' },
      { value: '54', label: 'Hồ Chí Minh' },
      { value: '55', label: 'Hồ Chí Minh' },
      { value: '56', label: 'Hồ Chí Minh' },
      { value: '57', label: 'Hồ Chí Minh' },
      { value: '58', label: 'Hồ Chí Minh' },
      { value: '59', label: 'Hồ Chí Minh' },
    ],
  },
  {
    group: 'bình dương',
    cities: [
      { value: '61', label: 'Bình Dương' },
    ],
  },
  {
    group: 'long an',
    cities: [
      { value: '62', label: 'Long An' },
    ],
  },
  {
    group: 'tiền giang',
    cities: [
      { value: '63', label: 'Tiền Giang' },
    ],
  },
  {
    group: 'vĩnh long',
    cities: [
      { value: '64', label: 'Vĩnh Long' },
    ],
  },
  {
    group: 'cần thơ',
    cities: [
      { value: '65', label: 'Cần Thơ' },
    ],
  },
  {
    group: 'đồng tháp',
    cities: [
      { value: '66', label: 'Đồng Tháp' },
    ],
  },
  {
    group: 'an giang',
    cities: [
      { value: '67', label: 'An Giang' },
    ],
  },
  {
    group: 'kiên giang',
    cities: [
      { value: '68', label: 'Kiên Giang' },
    ],
  },
  {
    group: 'cà mau',
    cities: [
      { value: '69', label: 'Cà Mau' },
    ],
  },
  {
    group: 'tây ninh',
    cities: [
      { value: '70', label: 'Tây Ninh' },
    ],
  },
  {
    group: 'bến tre',
    cities: [
      { value: '71', label: 'Bến Tre' },
    ],
  },
  {
    group: 'bà rịa - vũng tàu',
    cities: [
      { value: '72', label: 'Bà Rịa - Vũng Tàu' },
    ],
  },
  {
    group: 'quảng bình',
    cities: [
      { value: '73', label: 'Quảng Bình' },
    ],
  },
  {
    group: 'quảng trị',
    cities: [
      { value: '74', label: 'Quảng Trị' },
    ],
  },
  {
    group: 'thừa thiên - huế',
    cities: [
      { value: '75', label: 'Thừa Thiên - Huế' },
    ],
  },
  {
    group: 'quảng ngãi',
    cities: [
      { value: '76', label: 'Quảng Ngãi' },
    ],
  },
  {
    group: 'bình định',
    cities: [
      { value: '77', label: 'Bình Định' },
    ],
  },
  {
    group: 'phú yên',
    cities: [
      { value: '78', label: 'Phú Yên' },
    ],
  },
  {
    group: 'khánh hòa',
    cities: [
      { value: '79', label: 'Khánh Hòa' },
    ],
  },
  {
    group: 'gia lai',
    cities: [
      { value: '81', label: 'Gia Lai' },
    ],
  },
  {
    group: 'kon tum',
    cities: [
      { value: '82', label: 'Kon Tum' },
    ],
  },
  {
    group: 'sóc trăng',
    cities: [
      { value: '83', label: 'Sóc Trăng' },
    ],
  },
  {
    group: 'trà vinh',
    cities: [
      { value: '84', label: 'Trà Vinh' },
    ],
  },
  {
    group: 'ninh thuận',
    cities: [
      { value: '85', label: 'Ninh Thuận' },
    ],
  },
  {
    group: 'bình thuận',
    cities: [
      { value: '86', label: 'Bình Thuận' },
    ],
  },
  {
    group: 'vĩnh phúc',
    cities: [
      { value: '88', label: 'Vĩnh Phúc' },
    ],
  },
  {
    group: 'hưng yên',
    cities: [
      { value: '89', label: 'Hưng Yên' },
    ],
  },
  {
    group: 'hà nam',
    cities: [
      { value: '90', label: 'Hà Nam' },
    ],
  },
  {
    group: 'quảng nam',
    cities: [
      { value: '92', label: 'Quảng Nam' },
    ],
  },
  {
    group: 'bình phước',
    cities: [
      { value: '93', label: 'Bình Phước' },
    ],
  },
  {
    group: 'bạc liêu',
    cities: [
      { value: '94', label: 'Bạc Liêu' },
    ],
  },
  {
    group: 'hậu giang',
    cities: [
      { value: '95', label: 'Hậu Giang' },
    ],
  },
  {
    group: 'bắc cạn',
    cities: [
      { value: '97', label: 'Bắc Cạn' },
    ],
  },
  {
    group: 'bắc giang',
    cities: [
      { value: '13', label: 'Bắc Giang' },
      { value: '98', label: 'Bắc Giang' },
    ],
  },
  {
    group: 'bắc ninh',
    cities: [
      { value: '99', label: 'Bắc Ninh' },
    ],
  },
];

export default { cities, cities2, cities3 };
