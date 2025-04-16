import { Payslip, Salary, DEDUCTION_RATES, calculatePayslip } from "./payroll"

test("ein 16 jähriger Lernender mit einem Monatsgehalt von 700.-", () => {
  const salary: Salary = {
    born: new Date("2009-01-01"),
    payday: new Date("2025-05-01"),
    gross: 700
  } 
  
  const expected: Payslip = {
    salary: salary,
    deductions: DEDUCTION_RATES,
    totalDeductions: 149.31,
    net: 550.69
  }

  const actual: Payslip = calculatePayslip(salary)

  expect(actual).toBe(expected)
})