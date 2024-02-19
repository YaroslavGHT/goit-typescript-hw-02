/*
  Створіть функцію (isWeekend), яка приймає день тижня
   (з вашого enum)
  і повертає boolean значення, що вказує,
   чи це день робочий чи вихідний.
*/

enum DaysOfWeek {
  MONDAY = 'Понеділок',
  TUESDAY = 'Вівторок',
  WEDNESDAY = 'Середа',
  THURSDAY = 'Четвер',
  FRIDAY = 'П`ятниця',
  SATURDAY = 'Субота',
  SUNDAY = 'Неділя'
}

function isWeekend(day: DaysOfWeek): boolean {
  return day === DaysOfWeek.SATURDAY || day === DaysOfWeek.SUNDAY;
}