export const printingPriceOptions = [
  {
    id: '1',
    material: 'Плівка с/к біла/прозора (мат./гл., 80 мкр), КНР',
    material_cost: '95',
    quality: [
      { label: 'standart720', price: '145' },
      { label: 'top720', price: '175' },
      { label: 'standart1440', price: '190' },
      { label: 'top1440', price: '245' },
    ],
  },
  {
    id: '2',
    material: 'Плівка с/к біла/прозора (мат/гл., 80 мкр), POLI-TAPE, Нім.',
    material_cost: '115',
    quality: [
      { label: 'standart720', price: '165' },
      { label: 'top720', price: '195' },
      { label: 'standart1440', price: '210' },
      { label: 'top1440', price: '265' },
    ],
  },
  {
    id: '3',
    material: 'Плівка с/к сірий клей (гл., 80 мкр) КНР',
    material_cost: '110',
    quality: [
      { label: 'standart720', price: '160' },
      { label: 'top720', price: '190' },
      { label: 'standart1440', price: '205' },
      { label: 'top1440', price: '260' },
    ],
  },
  {
    id: '4',
    material: 'Плівка с/к сірий клей (гл., 80 мкр) POLI-TAPE, Нім.',
    material_cost: '125',
    quality: [
      { label: 'standart720', price: '175' },
      { label: 'top720', price: '205' },
      { label: 'standart1440', price: '220' },
      { label: 'top1440', price: '275' },
    ],
  },
  {
    id: '5',
    material: 'Плівка перфорована One Way Vision (140 мкр) КНР',
    material_cost: '155',
    quality: [
      { label: 'standart720', price: '205' },
      { label: 'top720', price: '235' },
      { label: 'standart1440', price: '250' },
      { label: 'top1440', price: '305' },
    ],
  },
  {
    id: '6',
    material: 'Банер ламінований (440 гр/м²) КНР',
    material_cost: '90',
    quality: [
      { label: 'standart720', price: '140' },
      { label: 'top720', price: '170' },
      { label: 'standart1440', price: '185' },
      { label: 'top1440', price: '240' },
    ],
  },
  {
    id: '7',
    material: 'Банер литий (440 гр/м²) КНР',
    material_cost: '115',
    quality: [
      { label: 'standart720', price: '165' },
      { label: 'top720', price: '195' },
      { label: 'standart1440', price: '210' },
      { label: 'top1440', price: '265' },
    ],
  },
  {
    id: '8',
    material: 'Плотно синтетичне (260 гр/м²)',
    material_cost: '225',
    quality: [
      { label: 'standart720', price: '275' },
      { label: 'top720', price: '305' },
      { label: 'standart1440', price: '320' },
      { label: 'top1440', price: '375' },
    ],
  },
  {
    id: '9',
    material: 'Плотно натуральне, 100% бавовна (360 гр/м²)',
    material_cost: '355',
    quality: [
      { label: 'standart720', price: '405' },
      { label: 'top720', price: '435' },
      { label: 'standart1440', price: '450' },
      { label: 'top1440', price: '505' },
    ],
  },
  {
    id: '10',
    material: 'Скролл папір Ahlstrom (150 гр/м²) Нім.',
    material_cost: '150',
    quality: [
      { label: 'standart720', price: '200' },
      { label: 'top720', price: '230' },
      { label: 'standart1440', price: '245' },
      { label: 'top1440', price: '300' },
    ],
  },
  {
    id: '11',
    material: 'Папір Citylight (150 гр/м²) Іспанія',
    material_cost: '35',
    quality: [
      { label: 'standart720', price: '85' },
      { label: 'top720', price: '115' },
      { label: 'standart1440', price: '130' },
      { label: 'top1440', price: '185' },
    ],
  },
  {
    id: '12',
    material: 'Папір Blue Back (115 гр/м²) Австрія',
    material_cost: '20',
    quality: [
      { label: 'standart720', price: '70' },
      { label: 'top720', price: '100' },
      { label: 'standart1440', price: '115' },
      { label: 'top1440', price: '170' },
    ],
  },
  {
    id: '13',
    material: 'Плівка автомобільна Ораджет 3551',
    material_cost: '300',
    quality: [
      { label: 'standart720', price: '420' },
      { label: 'top720', price: '450' },
      { label: 'standart1440', price: '465' },
      { label: 'top1440', price: '520' },
    ],
  },
  {
    id: '14',
    material: 'Матеріал клієнта',
    material_cost: '0',
    quality: [
      { label: 'standart720', price: '70' },
      { label: 'top720', price: '100' },
      { label: 'standart1440', price: '115' },
      { label: 'top1440', price: '170' },
    ],
  },
];

export const dataInput = [
  { title: 'Ширина файлу', label: 'мм' },
  { title: 'Довжина файлу', label: 'мм' },
  { title: 'Кількість файлів', label: 'шт' },
  { title: 'Ширина матеріалу', label: 'мм' },
  { title: 'Довжина матеріалу', label: 'мм' },
];

export const lamination = ['Так', 'Ні'];

export const dataOutput = [
  { title: 'Площа друку', label: 'м.кв.' },
  { title: 'Площа залишку', label: 'м.кв.' },
  { title: 'Площа ламінації', label: 'м.кв.' },
  { title: 'Вартість друку, грн.', label: 'Width' },
  { title: 'Вартість залишку, грн.', label: 'Height' },
  { title: 'Вартість ламінації, грн.', label: 'Height' },
];
