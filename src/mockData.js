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
    prescriptionId: '12',
    medicines: ['1234', '5678'],
    issuedOn: 'string',
    isCompleted: true,
    validPeriod: '10.10.2010',
    prescribedBy: 'Pensho10',
    prescribedTo: 'Ivan10'
},

{
  prescriptionId: '23',
  medicines: ['1234', '5678'],
  issuedOn: 'string',
  isCompleted: true,
  validPeriod: '10.10.2010',
  prescribedBy: 'Ivan2',
  prescribedTo: 'Pesho2'
},
{
  prescriptionId: '34',
  medicines: ['1234', '5678'],
  issuedOn: 'string',
  isCompleted: true,
  validPeriod: '10.10.2010',
  prescribedBy: 'Ivan',
  prescribedTo: 'RandomName'
},
{
  prescriptionId: '43',
  medicines: ['1234', '5678'],
  issuedOn: 'string',
  isCompleted: true,
  validPeriod: '10.10.2010',
  prescribedBy: 'Pesho',
  prescribedTo: 'Gosho'
},
]
