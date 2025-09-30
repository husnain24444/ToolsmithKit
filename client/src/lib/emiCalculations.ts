export interface EMIResult {
  emi: number;
  totalInterest: number;
  totalAmount: number;
}

/**
 * Calculate EMI using the standard formula:
 * EMI = P × r × (1 + r)^n / ((1 + r)^n - 1)
 * 
 * @param principal - Loan amount
 * @param annualRate - Annual interest rate (in percentage)
 * @param tenureYears - Loan tenure in years
 * @returns EMI calculation result
 */
export function calculateEMI(
  principal: number,
  annualRate: number,
  tenureYears: number
): EMIResult {
  // Convert annual rate to monthly rate (divide by 12 and 100)
  const monthlyRate = annualRate / (12 * 100);
  
  // Convert years to months
  const months = tenureYears * 12;
  
  // Calculate EMI using the formula
  let emi = 0;
  if (monthlyRate === 0) {
    // If interest rate is 0, EMI is simply principal divided by months
    emi = principal / months;
  } else {
    const numerator = principal * monthlyRate * Math.pow(1 + monthlyRate, months);
    const denominator = Math.pow(1 + monthlyRate, months) - 1;
    emi = numerator / denominator;
  }
  
  // Calculate total amount and interest
  const totalAmount = emi * months;
  const totalInterest = totalAmount - principal;
  
  return {
    emi: Math.round(emi),
    totalInterest: Math.round(totalInterest),
    totalAmount: Math.round(totalAmount),
  };
}

/**
 * Format number as currency (Indian Rupees)
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Generate amortization schedule
 */
export interface AmortizationRow {
  month: number;
  emi: number;
  principal: number;
  interest: number;
  balance: number;
}

export function generateAmortizationSchedule(
  principal: number,
  annualRate: number,
  tenureYears: number
): AmortizationRow[] {
  const monthlyRate = annualRate / (12 * 100);
  const months = tenureYears * 12;
  const { emi } = calculateEMI(principal, annualRate, tenureYears);
  
  const schedule: AmortizationRow[] = [];
  let balance = principal;
  
  for (let month = 1; month <= months; month++) {
    const interest = balance * monthlyRate;
    const principalPaid = emi - interest;
    balance = Math.max(0, balance - principalPaid);
    
    schedule.push({
      month,
      emi: Math.round(emi),
      principal: Math.round(principalPaid),
      interest: Math.round(interest),
      balance: Math.round(balance),
    });
  }
  
  return schedule;
}
