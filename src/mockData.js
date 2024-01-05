export const medicinesData = [
  {
    _id: "123456",
    dosage: "500mg",
    medicineName: "Analgin",
    signature: "2 x 1 тб",
    description:
      "Аналгин таблетки съдържа активно вещество метамизол натрий, което се отнася към обезболяващите лекарства (аналгетици). Освен обезболяващо, той притежава и температуропонижаващо действие. Аналгин се използва за: повлияване на умерено до силно изразени болки от различен произход: главоболие, зъбобол, невралгии, неврити, миалгии (мускулни болки), травми, изгаряния, следоперативни болки, фантомни болки (усещане за болка на мястото на отсъстващ крайник), менструални болки, болки при онкологични заболявания, бъбречни и жлъчни колики, за понижаване на висока температура.",
  },
  {
    _id: "123456",
    dosage: "500mg",
    medicineName: "Paracetamol",
    signature: "2 x 1 тб",
    description: "",
  },
]

export const doctorsData = [
  {
    id: "1",
    userId: "1",
    name: "Петров", //УИН номер
    hospitalName: "Първа Градска",
    specialty: "Педиатър",
    patients: ["Пешо", "Гошо", "Тошо"],
    prescriptions: ["12", "23", "34"],
  },
  {
    id: "2",
    userId: "2",
    name: "Георгиев", //УИН номер
    hospitalName: "Първа Градска",
    specialty: "Педиатър",
    patients: ["Пешо", "Гошо", "Тошо"],
    prescriptions: ["12", "23", "34"],
  },
  {
    id: "3",
    userId: "3",
    name: "Иванов", //УИН номер
    hospitalName: "Първа Градска",
    specialty: "Педиатър",
    patients: ["Пешо", "Гошо", "Тошо"],
    prescriptions: ["12", "23", "34"],
  },
]

export const prescriptionsData = [
  {
    _id: '12',
    medicines: [
      {
        article: "Нурофен 500",
        quantity: "2",
        methodOfUse: "след храна"
      },

      {
        article: "Аналгин 100",
        quantity: "1",
        methodOfUse: "сутрин"
      },

      {
        article: "Спазмалгон",
        quantity: "1",
        methodOfUse: "преди лягане"
      },
      {
        article: "Нурофен 500",
        quantity: "2",
        methodOfUse: "след храна"
      },

      {
        article: "Аналгин 100",
        quantity: "1",
        methodOfUse: "сутрин"
      },

      {
        article: "Спазмалгон",
        quantity: "1",
        methodOfUse: "преди лягане"
      },
    ],
    issuedOn: 'string',
    isCompleted: true,
    validPeriod: '10.10.2010',
    prescribedBy: {
      name: "Стефан",
      lastName: "Георгиев",
      doctorId: "7816000009",
      hospitalId: "7777773099",
      doctorPhone: "0893377777"
    },
    prescribedTo: {
      firstName: "Петър",
      secondName: "Иванов",
      lastName: "Митев",
      age: "28",
      specifics: "няма"
    }
},

{
  _id: '23',
  medicines: [
    {
      article: "Нурофен 500",
      quantity: "2",
      methodOfUse: "след храна"
    },

    {
      article: "Аналгин 100",
      quantity: "1",
      methodOfUse: "сутрин"
    },

    {
      article: "Спазмалгон",
      quantity: "1",
      methodOfUse: "преди лягане"
    },
    {
      article: "Нурофен 500",
      quantity: "2",
      methodOfUse: "след храна"
    },

    {
      article: "Аналгин 100",
      quantity: "1",
      methodOfUse: "сутрин"
    },

    {
      article: "Спазмалгон",
      quantity: "1",
      methodOfUse: "преди лягане"
    },
  ],
  issuedOn: 'string',
  isCompleted: true,
  validPeriod: '10.10.2010',
  prescribedBy: {
    name: "Иван",
    lastName: "Милев",
    doctorId: "8816840911",
    hospitalId: "7777773099",
    doctorPhone: "0893336491"
  },
  prescribedTo: {
    firstName: "Иван",
    secondName: "Иванов",
    lastName: "Попов",
    age: "38",
    specifics: "диабетик"
  }
},
{
  _id: '34',
  medicines: [
    {
      article: "Нурофен 500",
      quantity: "2",
      methodOfUse: "след храна"
    },

    {
      article: "Аналгин 100",
      quantity: "1",
      methodOfUse: "сутрин"
    },

    {
      article: "Спазмалгон",
      quantity: "1",
      methodOfUse: "преди лягане"
    },
    {
      article: "Нурофен 500",
      quantity: "2",
      methodOfUse: "след храна"
    },

    {
      article: "Аналгин 100",
      quantity: "1",
      methodOfUse: "сутрин"
    },

    {
      article: "Спазмалгон",
      quantity: "1",
      methodOfUse: "преди лягане"
    },
    {
      article: "Нурофен 500",
      quantity: "2",
      methodOfUse: "след храна"
    },

    {
      article: "Аналгин 100",
      quantity: "1",
      methodOfUse: "сутрин"
    },

    {
      article: "Спазмалгон",
      quantity: "1",
      methodOfUse: "преди лягане"
    },
  ],
  issuedOn: 'string',
  isCompleted: true,
  validPeriod: '10.10.2010',
  prescribedBy: {
    name: "Сара",
    lastName: "Иванова",
    doctorId: "9916847735",
    hospitalId: "7777773099",
    doctorPhone: "0893388674"
  },
  prescribedTo: {
    firstName: "Елена",
    secondName: "Кирова",
    lastName: "Самандова",
    age: "18",
    specifics: "няма"
  }
},
{
  _id: '43',
  medicines: [
    {
      article: "Нурофен 500",
      quantity: "2",
      methodOfUse: "след храна"
    },

    {
      article: "Аналгин 100",
      quantity: "1",
      methodOfUse: "сутрин"
    },

    {
      article: "Спазмалгон",
      quantity: "1",
      methodOfUse: "преди лягане"
    },
    {
      article: "Нурофен 500",
      quantity: "2",
      methodOfUse: "след храна"
    },

    {
      article: "Аналгин 100",
      quantity: "1",
      methodOfUse: "сутрин"
    },

    {
      article: "Спазмалгон",
      quantity: "1",
      methodOfUse: "преди лягане"
    },
  ],
  issuedOn: 'string',
  isCompleted: true,
  validPeriod: '10.10.2010',
  prescribedBy: {
    name: "Мария",
    lastName: "Стефанова",
    doctorId: "4416840555",
    hospitalId: "7777773099",
    doctorPhone: "0893444449"
  },
  prescribedTo: {
    firstName: "Виктор",
    secondName: "Александров",
    lastName: "Петров",
    age: "26",
    specifics: "няма"
  }
},
]
