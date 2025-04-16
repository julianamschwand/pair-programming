import { Payslip, Salary, calculatePayslip } from "./payroll"

test("ein 16 jähriger Lernender mit einem Monatsgehalt von 700.-", () => {
  const salary: Salary = {
    born: new Date("2009-01-01"),
    payday: new Date("2025-05-01"),
    gross: 700
  } 
  
  const expected: Payslip = {
    salary: salary,
    deductions: new Map([["ALV", 7.7],["NBU", 5.11]]),
    totalDeductions: 12.81,
    net: 687.19
  }

  const actual: Payslip = calculatePayslip(salary)

  expect(actual).toBe(expected)
})


test("ein 18 jähriger Lernender mit einem Monatsgehalt von 1200.-", () => {
  const salary: Salary = {
    born: new Date("2007-01-01"),
    payday: new Date("2025-05-01"),
    gross: 1200
  } 
  
  const expected: Payslip = {
    salary: salary,
    deductions: new Map([["AHV", 8.7],
      ["IV", 1.4],
      ["EO", 0.5],
      ["ALV", 1.1],
      ["NBU", 0.73]]),
    totalDeductions: 149.16 ,
    net: 1050.84
  }

  const actual: Payslip = calculatePayslip(salary)

  expect(actual).toBe(expected)
})


test("ein 21 jähriger Angestellter mit einem Monatsgehalt von 5900.-", () => {
  const salary: Salary = {
    born: new Date("2004-01-01"),
    payday: new Date("2025-05-01"),
    gross: 5900
  } 
  
  const expected: Payslip = {
    salary: salary,
    deductions: new Map([["AHV", 8.7],
      ["IV", 1.4],
      ["EO", 0.5],
      ["ALV", 1.1],
      ["NBU", 0.73],
      ["PK", 8.9]]),
    totalDeductions: 1258.47 ,
    net: 4641.53
  }

  const actual: Payslip = calculatePayslip(salary)

  expect(actual).toBe(expected)
})