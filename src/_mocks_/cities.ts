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
    label: 'Bà Rịa-Vũng Tàu',
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
    label: 'Thừa Thiên-Huế',
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
    label: 'Bắc Giang (13)',
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
    value: 'bà rịa-vũng tàu',
    label: 'Bà Rịa-Vũng Tàu',
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
    value: 'thừa thiên-huế',
    label: 'Thừa Thiên-Huế',
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

export default {cities,cities2};
