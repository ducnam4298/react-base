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
  { value: '11', label: 'Cao Bằng', group: 'cao bằng' },
  { value: '12', label: 'Lạng sơn', group: 'lạng sơn' },
  { value: '14', label: 'Quảng Ninh', group: 'quảng ninh' },
  { value: '15', label: 'Hải Phòng - 15', group: 'hải phòng' },
  { value: '16', label: 'Hải Phòng - 16', group: 'hải phòng' },
  { value: '17', label: 'Thái bình', group: 'thái bình' },
  { value: '18', label: 'Nam định', group: 'nam định' },
  { value: '19', label: 'Phú Thọ', group: 'phú thọ' },
  { value: '20', label: 'Thái Nguyên', group: 'thái nguyên' },
  { value: '21', label: 'Yên Bái', group: 'yên bái' },
  { value: '22', label: 'Tuyên Quang', group: 'tuyên quang' },
  { value: '23', label: 'Hà Giang', group: 'hà giang' },
  { value: '24', label: 'Lào Cai', group: 'lào cai' },
  { value: '25', label: 'Lai Châu', group: 'lai châu' },
  { value: '26', label: 'Sơn La', group: 'sơn la' },
  { value: '27', label: 'Điện Biên', group: 'điện biên' },
  { value: '28', label: 'Hòa bình', group: 'hòa bình' },
  { value: '29', label: 'Hà Nội - 29', group: 'hà nội' },
  { value: '30', label: 'Hà Nội - 30', group: 'hà nội' },
  { value: '31', label: 'Hà Nội - 31', group: 'hà nội' },
  { value: '32', label: 'Hà Nội - 32', group: 'hà nội' },
  { value: '33', label: 'Hà Nội - 33', group: 'hà nội' },
  { value: '40', label: 'Hà Nội - 40', group: 'hà nội' },
  { value: '34', label: 'Hải Dương', group: 'hải dương' },
  { value: '35', label: 'Hòa Bình', group: 'ninh bình' },
  { value: '36', label: 'Thanh Hóa', group: 'thanh hóa' },
  { value: '37', label: 'Nghệ An', group: 'nghệ an' },
  { value: '38', label: 'Hà Tĩnh', group: 'hà tĩnh' },
  { value: '39', label: 'Đồng Nai - 39', group: 'đồng nai' },
  { value: '60', label: 'Đồng Nai - 60', group: 'đồng nai' },
  { value: '43', label: 'Đà Nẵng', group: 'đà nẵng' },
  { value: '47', label: 'Đắk Lắk', group: 'đắk lắk' },
  { value: '48', label: 'Đắk Nông', group: 'đắk nông' },
  { value: '49', label: 'Lâm Đồng', group: 'lâm đồng' },
  { value: '41', label: 'Hồ Chí Minh - 41', group: 'hồ chí minh' },
  { value: '50', label: 'Hồ Chí Minh - 50', group: 'hồ chí minh' },
  { value: '51', label: 'Hồ Chí Minh - 51', group: 'hồ chí minh' },
  { value: '52', label: 'Hồ Chí Minh - 52', group: 'hồ chí minh' },
  { value: '53', label: 'Hồ Chí Minh - 53', group: 'hồ chí minh' },
  { value: '54', label: 'Hồ Chí Minh - 54', group: 'hồ chí minh' },
  { value: '55', label: 'Hồ Chí Minh  - 55', group: 'hồ chí minh' },
  { value: '56', label: 'Hồ Chí Minh  - 56', group: 'hồ chí minh' },
  { value: '57', label: 'Hồ Chí Minh - 57', group: 'hồ chí minh' },
  { value: '58', label: 'Hồ Chí Minh - 58', group: 'hồ chí minh' },
  { value: '59', label: 'Hồ Chí Minh - 59', group: 'hồ chí minh' },
  { value: '61', label: 'Bình Dương', group: 'bình dương' },
  { value: '62', label: 'Long An', group: 'long an' },
  { value: '63', label: 'Tiền Giang', group: 'tiền giang' },
  { value: '64', label: 'Vĩnh Long', group: 'vĩnh long' },
  { value: '65', label: 'Cần Thơ', group: 'cần thơ' },
  { value: '66', label: 'Đồng Tháp', group: 'đồng tháp' },
  { value: '67', label: 'An Giang', group: 'an giang' },
  { value: '68', label: 'Kiên Giang', group: 'kiên giang' },
  { value: '69', label: 'Cà Mau', group: 'cà mau' },
  { value: '70', label: 'Tây Ninh', group: 'tây ninh' },
  { value: '71', label: 'Bến Tre', group: 'bến tre' },
  { value: '72', label: 'Bà Rịa - Vũng Tàu', group: 'bà rịa - vũng tàu' },
  { value: '73', label: 'Quảng Bình', group: 'quảng bình' },
  { value: '74', label: 'Quảng Trị', group: 'quảng trị' },
  { value: '75', label: 'Thừa Thiên - Huế', group: 'thừa thiên - huế' },
  { value: '76', label: 'Quảng Ngãi', group: 'quảng ngãi' },
  { value: '77', label: 'Bình Định', group: 'bình định' },
  { value: '78', label: 'Phú Yên', group: 'phú yên' },
  { value: '79', label: 'Khánh Hòa', group: 'khánh hòa' },
  { value: '81', label: 'Gia Lai', group: 'gia lai' },
  { value: '82', label: 'Kon Tum', group: 'kon tum' },
  { value: '83', label: 'Sóc Trăng', group: 'sóc trăng' },
  { value: '84', label: 'Trà Vinh', group: 'trà vinh' },
  { value: '85', label: 'Ninh Thuận', group: 'ninh thuận' },
  { value: '86', label: 'Bình Thuận', group: 'bình thuận' },
  { value: '88', label: 'Vĩnh Phúc', group: 'vĩnh phúc' },
  { value: '89', label: 'Hưng Yên', group: 'hưng yên' },
  { value: '90', label: 'Hà Nam', group: 'hà nam' },
  { value: '92', label: 'Quảng Nam', group: 'quảng nam' },
  { value: '93', label: 'Bình Phước', group: 'bình phước' },
  { value: '94', label: 'Bạc Liêu', group: 'bạc liêu' },
  { value: '95', label: 'Hậu Giang', group: 'hậu giang' },
  { value: '97', label: 'Bắc Cạn', group: 'bắc cạn' },
  { value: '13', label: 'Bắc Giang - 13', group: 'bắc giang' },
  { value: '98', label: 'Bắc Giang - 98', group: 'bắc giang' },
  { value: '99', label: 'Bắc Ninh', group: 'bắc ninh' },
];

export default { cities, cities2, cities3 };
