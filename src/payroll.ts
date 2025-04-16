  export type Salary = {
    born: Date;
    payday: Date;
    gross: number;
  };

  export type Deductions = Map<string, number>;

  export const DEDUCTION_RATES: Deductions = new Map([
    ["AHV", 8.7],
    ["IV", 1.4],
    ["EO", 0.5],
    ["ALV", 1.1],
    ["NBU", 0.73],
    ["PK", 8.9],
  ]);

  export type Payslip = {
    salary: Salary;
    deductions: Deductions;
    totalDeductions: number;
    net: number;
  };

  export function calculatePayslip(salary: Salary): Payslip {
    // const totalDeductions = salary.gross * 0.087 +
    //                         salary.gross * 0.014 +
    //                         salary.gross * 0.005 +
    //                         salary.gross * 0.011 +
    //                         salary.gross * 0.0073 +
    //                         salary.gross * 0.089
    const today = new Date()
    let totalDeductions = 0

    if (today.getFullYear() - salary.born.getFullYear() >= 17) {
      totalDeductions += (salary.gross * 0.087 + salary.gross * 0.014 + salary.gross * 0.005) 
    }

    const net = salary.gross - totalDeductions
    

    const result: Payslip = {
      salary: salary,
      deductions: new Map(),
      totalDeductions: totalDeductions,
      net: net,
    };
    return result;
  }
