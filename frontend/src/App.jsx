import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Filler,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
const API_URL = import.meta.env.VITE_API_URL;
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

const spendingData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Income',
      data: [50000, 60000, 55000, 70000, 65000, 75000],
      backgroundColor: '#C8AD7E',
      borderRadius: 6,
    },
    {
      label: 'Expenses',
      data: [30000, 35000, 40000, 32000, 45000, 38000],
      backgroundColor: '#64748b',
      borderRadius: 6,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        color: '#F5F5DC',
      },
    },
  },
  scales: {
    x: {
      ticks: { color: '#F5F5DC' },
      grid: { color: '#26334A' },
    },
    y: {
      beginAtZero: true,
      ticks: { color: '#F5F5DC' },
      grid: { color: '#26334A' },
    },
  },
};


const lineData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],

  datasets: [
    {
      label: 'Food',
      data: [12000, 15000, 18000, 14000, 22000, 19000],
      borderColor: '#C8AD7E',
      backgroundColor: 'rgba(200, 173, 126, 0.15)',
      fill: true,
      tension: 0.4,
      pointRadius: 4,
    },
    {
      label: 'Hobbies',
      data: [5000, 7000, 6000, 11000, 8000, 9000],
      borderColor: '#60A5FA',
      backgroundColor: 'rgba(96, 165, 250, 0.12)',
      fill: true,
      tension: 0.4,
      pointRadius: 4,
    },
    {
      label: 'Subscriptions',
      data: [3000, 4000, 3500, 5000, 4500, 5500],
      borderColor: '#2DD4BF',
      backgroundColor: 'rgba(45, 212, 191, 0.12)',
      fill: true,
      tension: 0.4,
      pointRadius: 4,
    },
    {
      label: 'Utilities',
      data: [6000, 6500, 7000, 7500, 8000, 8500],
      borderColor: '#F59E0B',
      backgroundColor: 'rgba(245, 158, 11, 0.12)',
      fill: true,
      tension: 0.4,
      pointRadius: 4,
    },
  ],
};


const lineOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: { color: '#F5F5DC' },
    },
  },
  scales: {
    x: {
      ticks: { color: '#F5F5DC' },
      grid: { color: '#26334A' },
    },
    y: {
      beginAtZero: true,
      ticks: { color: '#F5F5DC' },
      grid: { color: '#26334A' },
    },
  },
};

const monthlyExpenseData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Monthly Expenses',
      data: [30000, 35000, 40000, 32000, 45000, 38000],
      borderColor: '#C8AD7E',
      backgroundColor: 'rgba(200, 173, 126, 0.15)',
      fill: true,
      tension: 0.4,
      pointRadius: 5,
      pointBackgroundColor: '#C8AD7E',
    },
  ],
};

const doughnutData = {
  labels: [
    'Food',
    'Transport',
    'Shopping',
    'Bills',
    'Education',
    'Others',
  ],
  datasets: [
    {
      data: [12000, 8000, 10000, 7000, 5000, 3000],
      backgroundColor: [
        '#C8AD7E',
        '#8C7653',
        '#64748B',
        '#A3B5C7',
        '#D8C5A3',
        '#475569',
      ],
      borderColor: '#151F32',
      borderWidth: 3,
    },
  ],
};

const doughnutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        color: '#F5F5DC',
        padding: 18,
      },
    },
  },
};

const savingsData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Monthly Savings',
      data: [20000, 25000, 15000, 38000, 20000, 37000],
      borderColor: '#C8AD7E',
      backgroundColor: 'rgba(200, 173, 126, 0.18)',
      fill: true,
      tension: 0.4,
      pointRadius: 5,
      pointBackgroundColor: '#C8AD7E',
    },
  ],
};

const savingsOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        color: '#F5F5DC',
      },
    },
  },
  scales: {
    x: {
      ticks: { color: '#F5F5DC' },
      grid: { color: '#26334A' },
    },
    y: {
      beginAtZero: true,
      ticks: { color: '#F5F5DC' },
      grid: { color: '#26334A' },
    },
  },
};
const savingsTimelineData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Total Saved',
      data: [500, 1200, 2200, 3000, 4000, 4000],
      borderColor: '#2DD4BF',
      backgroundColor: 'rgba(45, 212, 191, 0.12)',
      fill: true,
      stepped: 'before',
      tension: 0,
      pointRadius: 4,
      pointBackgroundColor: '#2DD4BF',
    },
    {
      label: 'Savings Goal',
      data: [1000, 2000, 3000, 4000, 5000, 6000],
      borderColor: '#C8AD7E',
      borderDash: [7, 6],
      fill: false,
      tension: 0,
      pointRadius: 3,
    },
  ],
};

const savingsContributionData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Monthly Contribution',
      data: [500, 700, 1000, 800, 1000, 0],
      backgroundColor: '#2DD4BF',
      borderRadius: 6,
    },
  ],
};

const savingsProgressOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: { color: '#F5F5DC' },
    },
  },
  scales: {
    x: {
      ticks: { color: '#F5F5DC' },
      grid: { color: '#26334A' },
    },
    y: {
      beginAtZero: true,
      ticks: {
        color: '#F5F5DC',
        callback: (value) => 'Rs. ' + value.toLocaleString(),
      },
      grid: { color: '#26334A' },
    },
  },
};
function App() {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [authMode, setAuthMode] = useState('login');

  const [savingsTab, setSavingsTab] = useState('timeline');

  const [savingsGoal, setSavingsGoal] = useState(
    Number(localStorage.getItem('savingsGoal')) || 0
  );

  const [selectedMonth, setSelectedMonth] = useState('all');

  useEffect(() => {
    localStorage.setItem('savingsGoal', savingsGoal);
  }, [savingsGoal]);
  useEffect(() => {
  const checkLogin = async () => {
    if (new URLSearchParams(window.location.search).get('demo') === '1') {
      setUser({ id: 0, name: 'Demo User', email: 'demo@finsight.local' });
      setAuthLoading(false);
      return;
    }
    try {
      const response = await fetch(`${API_URL}/api/auth/me`, {
        method: 'GET',
        credentials: 'include',
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data.user);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error('Login check error:', error);
      setUser(null);
    } finally {
      setAuthLoading(false);
    }
  };

  checkLogin();
}, []);

const handleAuth = async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const name = formData.get('name');
  const email = formData.get('email');
  const password = formData.get('password');

  try {
    const response = await fetch(
      `${API_URL}/api/auth/${authMode === 'login' ? 'login' : 'signup'}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || 'Authentication failed.');
      return;
    }

    setUser(data.user);
  } catch (error) {
    console.error('Authentication error:', error);
    alert('Server connection failed. Please try again.');
  }
};

const handleLogout = async () => {
  try {
    await fetch(`${API_URL}/api/auth/logout`, {
      method: 'POST',
      credentials: 'include',
    });
  } catch (error) {
    console.error('Logout error:', error);
  }

  setUser(null);
  setAuthMode('login');
};

  const [activePage, setActivePage] = useState('Dashboard');
 const [incomeRecords, setIncomeRecords] = useState(() => {
  try {
    const savedIncome = localStorage.getItem('incomeRecords');
    return savedIncome ? JSON.parse(savedIncome) : [];
  } catch {
    return [];
  }
});

useEffect(() => {
  localStorage.setItem('incomeRecords', JSON.stringify(incomeRecords));
}, [incomeRecords]);

const [expenseRecords, setExpenseRecords] = useState(() => {
  try {
    const savedExpenses = localStorage.getItem('expenseRecords');
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  } catch {
    return [];
  }
});

useEffect(() => {
  localStorage.setItem('expenseRecords', JSON.stringify(expenseRecords));
}, [expenseRecords]);

const [savingsRecords, setSavingsRecords] = useState(() => {
  try {
    const savedSavings = localStorage.getItem('savingsRecords');
    return savedSavings ? JSON.parse(savedSavings) : [];
  } catch {
    return [];
  }
});

useEffect(() => {
  localStorage.setItem('savingsRecords', JSON.stringify(savingsRecords));
}, [savingsRecords]);

const filteredIncomeRecords = selectedMonth === 'all'
  ? incomeRecords
  : incomeRecords.filter(
      (record) => record.date?.slice(0, 7) === selectedMonth
    );

const filteredExpenseRecords = selectedMonth === 'all'
  ? expenseRecords
  : expenseRecords.filter(
      (record) => record.date?.slice(0, 7) === selectedMonth
    );

const filteredSavingsRecords = selectedMonth === 'all'
  ? savingsRecords
  : savingsRecords.filter(
      (record) => record.date?.slice(0, 7) === selectedMonth
    );

const totalIncome = filteredIncomeRecords.reduce(
  (total, record) => total + Number(record.amount || 0),
  0
);

const totalExpenses = filteredExpenseRecords.reduce(
  (total, record) => total + Number(record.amount || 0),
  0
);

const totalSavings = filteredSavingsRecords.reduce(
  (total, record) => total + Number(record.amount || 0),
  0
);
const savingsProgress = savingsGoal > 0
  ? Math.min((totalSavings / savingsGoal) * 100, 100)
  : 0;

const remainingSavingsGoal = Math.max(savingsGoal - totalSavings, 0);
// Monthly chart data from actual records
const monthlyData = {};

[...incomeRecords, ...expenseRecords, ...savingsRecords].forEach((record) => {
  if (!record.date) return;

  const month = record.date.slice(0, 7);

  if (!monthlyData[month]) {
    monthlyData[month] = {
      income: 0,
      expenses: 0,
      savings: 0,
    };
  }

  if (incomeRecords.some((item) => item.id === record.id)) {
    monthlyData[month].income += record.amount;
  }

  if (expenseRecords.some((item) => item.id === record.id)) {
    monthlyData[month].expenses += record.amount;
  }

  if (savingsRecords.some((item) => item.id === record.id)) {
    monthlyData[month].savings += record.amount;
  }
});

const monthLabels = Object.keys(monthlyData).sort();

const filteredMonthLabels = selectedMonth === 'all'
  ? monthLabels
  : monthLabels.filter((month) => month === selectedMonth);

const filteredActualMonths = filteredMonthLabels.length
  ? filteredMonthLabels
  : ['No data'];

const actualMonths = monthLabels.length ? monthLabels : ['No data'];

const actualIncomeExpensesData = {
  labels: filteredActualMonths,
  datasets: [
    {
      label: 'Income',
      data: filteredMonthLabels.map((month) => monthlyData[month].income),
      backgroundColor: '#C8AD7E',
      borderRadius: 6,
    },
    {
      label: 'Expenses',
      data: filteredMonthLabels.map((month) => monthlyData[month].expenses),
      backgroundColor: '#64748b',
      borderRadius: 6,
    },
  ],
};

const categoryTotals = {};

expenseRecords.forEach((record) => {

  if (
    selectedMonth !== 'all' &&
    record.date?.slice(0, 7) !== selectedMonth
  ) {
    return;
  }

  categoryTotals[record.category] =
    (categoryTotals[record.category] || 0) + Number(record.amount || 0);
});

const actualExpenseBreakdown = {
  labels: Object.keys(categoryTotals).length
    ? Object.keys(categoryTotals)
    : ['No expenses'],
  datasets: [
    {
      label: 'Spending by Category',
      data: Object.keys(categoryTotals).length
        ? Object.values(categoryTotals)
        : [0],
      backgroundColor: [
        '#C8AD7E',
        '#8C7653',
        '#64748B',
        '#A3B5C7',
        '#D8C5A3',
        '#475569',
        '#2DD4BF',
      ],
      borderColor: '#151F32',
      borderWidth: 3,
    },
  ],
};

const actualCategoryData = {
  labels: Object.keys(categoryTotals).length
    ? Object.keys(categoryTotals)
    : ['No expenses'],
  datasets: [{
    label: 'Spending by Category',
    data: Object.keys(categoryTotals).length
      ? Object.values(categoryTotals)
      : [0],
    borderColor: '#C8AD7E',
    backgroundColor: 'rgba(200, 173, 126, 0.18)',
    fill: true,
    tension: 0.4,
    pointRadius: 5,
  }],
};
const monthlyCategoryTotals = {};

expenseRecords.forEach((record) => {
  if (!record.date) return;

  const month = record.date.slice(0, 7);
  const category = record.category || 'Other';

  if (!monthlyCategoryTotals[month]) {
    monthlyCategoryTotals[month] = {};
  }

  monthlyCategoryTotals[month][category] =
    (monthlyCategoryTotals[month][category] || 0) +
    Number(record.amount || 0);
});

const categoryNames = [
  ...new Set(expenseRecords.map((record) => record.category || 'Other'))
];

const categoryColors = [
  '#C8AD7E',
  '#38BDF8',
  '#F472B6',
  '#A78BFA',
  '#34D399',
  '#FBBF24',
  '#FB7185',
];

const actualMonthlyCategoryData = {
  labels: filteredActualMonths,
  datasets: categoryNames.map((category, index) => ({
    label: category,
    data: filteredMonthLabels.map(
  (month) => monthlyCategoryTotals[month]?.[category] || 0
),
    borderColor: categoryColors[index % categoryColors.length],
    backgroundColor: categoryColors[index % categoryColors.length],
    fill: false,
    tension: 0.4,
    pointRadius: 4,
  })),
};

const actualSavingsData = {
  labels: filteredActualMonths,
  datasets: [
    {
      label: 'Savings Contributions',
      data: filteredMonthLabels.map((month) => monthlyData[month].savings),
      borderColor: '#C8AD7E',
      backgroundColor: 'rgba(200, 173, 126, 0.18)',
      fill: true,
      tension: 0.4,
    },
  ],
};
const actualMonthlyExpenseData = {
  labels: filteredActualMonths,
  datasets: [{
    label: 'Monthly Expenses',
    data: filteredMonthLabels.map((month) => monthlyData[month].expenses),
    borderColor: '#C8AD7E',
    backgroundColor: 'rgba(200, 173, 126, 0.15)',
    fill: true,
    tension: 0.4,
    pointRadius: 5,
  }],
};
const cumulativeSavings = [];
let runningSavings = 0;

monthLabels.forEach((month) => {
  runningSavings += monthlyData[month].savings;
  cumulativeSavings.push(runningSavings);
});
const filteredCumulativeSavings = filteredMonthLabels.map((month) => {
  const monthIndex = monthLabels.indexOf(month);

  return monthLabels
    .slice(0, monthIndex + 1)
    .reduce((total, itemMonth) => total + monthlyData[itemMonth].savings, 0);
});

const actualSavingsTimelineData = {
  labels: filteredActualMonths,
  datasets: [
    {
      label: 'Total Saved',
      data: filteredCumulativeSavings,
      borderColor: '#C8AD7E',
      backgroundColor: 'rgba(200, 173, 126, 0.18)',
      fill: true,
      tension: 0.4,
    },
    {
      label: 'Savings Goal',
      data: monthLabels.map(() => savingsGoal),
      borderColor: '#64748b',
      borderDash: [5, 5],
      fill: false,
    },
  ],
};
const [budgetRecords, setBudgetRecords] = useState(() => {
  try {
    const savedBudgets = localStorage.getItem('budgetRecords');
    return savedBudgets ? JSON.parse(savedBudgets) : [];
  } catch {
    return [];
  }
});
const financialHealthScore = totalIncome <= 0
  ? 0
  : Math.max(
      0,
      Math.min(
        100,
        Math.round(
          ((totalIncome - totalExpenses) / totalIncome) * 100
        )
      )
    );

useEffect(() => {
  localStorage.setItem('budgetRecords', JSON.stringify(budgetRecords));
}, [budgetRecords]);

 const menuItems = [
    "Dashboard",
    "Income",
    "Expenses",
    "Budgets",
    "Savings",
    "Reports",
  ];

  const cardStyle = {
    background: "#151F32",
    border: "1px solid #26334A",
    borderRadius: "14px",
    padding: "22px",
  };
const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "8px",
  background: "#1D293D",
  color: "#F5F5DC",
  border: "1px solid #303C50",
  borderRadius: "8px",
  outline: "none",
};

const authInputStyle = {
  width: '100%',
  padding: '13px',
  marginTop: '15px',
  background: '#0b1120',
  border: '1px solid #39465c',
  borderRadius: '8px',
  color: '#F5F5DC',
  fontSize: '14px',
  outline: 'none',
};

const authButtonStyle = {
  width: '100%',
  padding: '13px',
  marginTop: '22px',
  background: '#C8AD7E',
  color: '#0b1120',
  border: 'none',
  borderRadius: '8px',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
};

if (authLoading) {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0b1120',
      color: '#C8AD7E',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '20px'
    }}>
      Loading FinSight...
    </div>
  );
}

if (!user) {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0b1120',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px'
    }}>
      <form onSubmit={handleAuth} style={{
        width: '100%',
        maxWidth: '420px',
        background: '#111B2D',
        padding: '35px',
        borderRadius: '14px',
        border: '1px solid #26334A',
        color: '#F5F5DC'
      }}>
        <h1 style={{
          color: '#C8AD7E',
          textAlign: 'center',
          fontSize: '30px',
          marginBottom: '10px'
        }}>
          FinSight
        </h1>

        <h2 style={{ textAlign: 'center' }}>
          {authMode === 'login' ? 'Welcome Back' : 'Create Account'}
        </h2>

        {authMode === 'signup' && (
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            style={authInputStyle}
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          style={authInputStyle}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          minLength="8"
          style={authInputStyle}
        />

        <button type="submit" style={authButtonStyle}>
          {authMode === 'login' ? 'Login' : 'Sign Up'}
        </button>

        <p style={{ textAlign: 'center', marginTop: '20px' }}>
          {authMode === 'login'
            ? "Don't have an account?"
            : 'Already have an account?'}
          <button
            type="button"
            onClick={() =>
              setAuthMode(authMode === 'login' ? 'signup' : 'login')
            }
            style={{
              background: 'none',
              border: 'none',
              color: '#C8AD7E',
              cursor: 'pointer',
              marginLeft: '6px'
            }}
          >
            {authMode === 'login' ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </form>
    </div>
  );
}


  return (
    <div className="app">
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #0b1120;
          color: #F5F5DC;
          font-family: Arial, sans-serif;
        }

        .app {
          display: flex;
          min-height: 100vh;
        }

        .sidebar {
          width: 230px;
          background: #111B2D;
          padding: 28px 18px;
          border-right: 1px solid #26334A;
          flex-shrink: 0;
        }

        .logo {
          color: #C8AD7E;
          font-size: 25px;
          font-weight: bold;
          margin-bottom: 40px;
        }

        .menu-item {
          padding: 13px;
          margin-bottom: 8px;
          border-radius: 8px;
          color: #AAB4C5;
          font-size: 14px;
        }

        .menu-item.active {
          background: #29344A;
          color: #C8AD7E;
        }

        .main {
          flex: 1;
          padding: 30px;
          min-width: 0;
        }

        .topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 35px;
        }

        .muted {
          color: #9AA7B9;
          font-size: 13px;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin: 22px 0;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 18px;
          margin-top: 18px;
        }

        .amount {
          font-size: 25px;
          font-weight: bold;
          margin-top: 12px;
        }

        .score {
          font-size: 48px;
          font-weight: bold;
          color: #C8AD7E;
          margin: 15px 0;
        }

        .progress {
          height: 9px;
          background: #303C50;
          border-radius: 10px;
          overflow: hidden;
          margin-top: 15px;
        }

        .progress-fill {
          width: 0%;
          height: 100%;
          background: #C8AD7E;
        }

        @media (max-width: 800px) {
          .sidebar {
            width: 160px;
            padding: 20px 10px;
          }

          .main {
            padding: 18px;
          }

          .cards {
            grid-template-columns: 1fr;
          }

          .content-grid {
            grid-template-columns: 1fr;
          }
        }
          .charts-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  margin-top: 18px;
}

.chart-card {
  min-width: 0;
  overflow: hidden;
}
  
.chart-card:last-child {
  grid-column: 1 / -1;
}
@media (max-width: 800px) {
  .charts-grid {
    grid-template-columns: 1fr;
  }
}
.savings-summary {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
  margin-top: 22px;
}

.savings-total-card {
  background: #1D293D;
  border: 1px solid #303C50;
  border-radius: 10px;
  padding: 18px 12px;
  text-align: center;
}

.savings-total-card h2 {
  color: #C8AD7E;
  font-size: 22px;
  margin: 5px 0 10px;
}

.savings-total-card p {
  color: #AAB4C5;
  font-size: 13px;
  margin: 0;
}

.savings-tab-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  margin-top: 28px;
  flex-wrap: wrap;
}

.savings-tabs {
  display: flex;
  gap: 8px;
}

.savings-tab {
  background: #1D293D;
  color: #AAB4C5;
  border: 1px solid #303C50;
  border-radius: 7px;
  padding: 9px 16px;
  cursor: pointer;
}

.savings-tab.active {
  background: #C8AD7E;
  color: #111827;
  font-weight: bold;
}

@media (max-width: 800px) {
  .savings-summary {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
  .savings-summary {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
  margin-top: 22px;
}

.savings-total-card {
  background: #1D293D;
  border: 1px solid #303C50;
  border-radius: 10px;
  padding: 18px 12px;
  text-align: center;
}

.savings-total-card h2 {
  color: #C8AD7E;
  font-size: 22px;
  margin: 5px 0 10px;
}

.savings-total-card p {
  color: #AAB4C5;
  font-size: 13px;
  margin: 0;
}

.savings-tab-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  margin-top: 28px;
  flex-wrap: wrap;
}

.savings-tabs {
  display: flex;
  gap: 8px;
}

.savings-tab {
  background: #1D293D;
  color: #AAB4C5;
  border: 1px solid #303C50;
  border-radius: 7px;
  padding: 9px 16px;
  cursor: pointer;
}

.savings-tab.active {
  background: #C8AD7E;
  color: #111827;
  font-weight: bold;
}

@media (max-width: 800px) {
  .savings-summary {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

        @media (max-width: 520px) {
          .app {
            flex-direction: column;
          }

          .sidebar {
            width: 100%;
            padding: 15px;
          }

          .logo {
            margin-bottom: 15px;
          }

          .menu-item {
            display: inline-block;
            margin: 3px;
          }
        }
        .income-button {
  background: #C8AD7E;
  color: #111827;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
}

.income-button:hover {
  background: #D8C5A3;
}  
      `}</style>

      <aside className="sidebar">
        <div className="logo">FinSight.</div>

        {menuItems.map((item) => (
  <div
    key={item}
    className={`menu-item ${activePage === item ? "active" : ""}`}
    onClick={() => setActivePage(item)}
    style={{ cursor: 'pointer' }}
  >
    {item}
  </div>
))}
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <h2 style={{ margin: 0 }}>Dashboard</h2>
            <p className="muted">Your personal financial overview</p>
          </div>

          <div style={{
  display: 'flex',
  alignItems: 'center',
  gap: '15px'
}}>
  <span style={{ color: '#C8AD7E' }}>
    Welcome, {user.name}
  </span>

  <button
    onClick={handleLogout}
    style={{
      background: '#C8AD7E',
      color: '#0b1120',
      border: 'none',
      padding: '9px 15px',
      borderRadius: '7px',
      cursor: 'pointer',
      fontWeight: 'bold'
    }}
  >
    Logout
  </button>
</div>
        </header>

        <h2>
  {activePage === 'Dashboard' ? 'Financial Overview' : activePage}
</h2>

<p className="muted">
  {activePage === 'Dashboard'
    ? 'Track your money and improve your financial health.'
    : activePage === 'Income'
    ? 'Manage and track all your income sources.'
    : `Manage your ${activePage.toLowerCase()} information.`}
</p>
{activePage === 'Income' && (
  <section style={{
    ...cardStyle,
    marginTop: 20,
    marginBottom: 20
  }}>
    <h3>Add New Income</h3>
    <p className="muted">Enter your income details below.</p>

    <form onSubmit={(e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const newIncome = {
    id: Date.now(),
    title: formData.get('title'),
    source: formData.get('source'),
    amount: Number(formData.get('amount')),
    date: formData.get('date'),
  };
  if (
  !newIncome.title.trim() ||
  !newIncome.source ||
  !Number.isFinite(newIncome.amount) ||
  newIncome.amount <= 0 ||
  !newIncome.date
) {
  alert('Please enter valid income details.');
  return;
}

  setIncomeRecords((previous) => [...previous, newIncome]);

  e.currentTarget.reset();
}}>
      <div style={{ marginBottom: 15 }}>
        <label>Income Title</label>
        <input
          type="text"
          name="title"
          placeholder="e.g. Monthly Salary"
          required
          style={inputStyle}
        />
      </div>

      <div style={{ marginBottom: 15 }}>
        <label>Income Source</label>
        <select name="source" required style={inputStyle}>
          <option value="">Select Source</option>
          <option>Salary</option>
          <option>Business</option>
          <option>Freelance</option>
          <option>Investment</option>
          <option>Other</option>
        </select>
      </div>

      <div style={{ marginBottom: 15 }}>
        <label>Amount (Rs.)</label>
        <input
          type="number"
          name="amount"
          min="1"
          placeholder="Enter amount"
          required
          style={inputStyle}
        />
      </div>

      <div style={{ marginBottom: 15 }}>
        <label>Income Date</label>
        <input
          type="date"
          name="date"
          required
          style={inputStyle}
        />
      </div>

      <button type="submit" className="income-button">
        Add Income
      </button>
    </form>
  </section>
)}


{activePage === 'Income' && (
  <section style={{ ...cardStyle, marginTop: 20 }}>
    <h3>Income History</h3>
    <p className="muted">Your recorded income transactions.</p>

    {incomeRecords.length === 0 ? (
      <p className="muted">No income records added yet.</p>
    ) : (
      <div style={{ overflowX: 'auto' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginTop: 15,
          textAlign: 'left'
        }}>
          <thead>
            <tr style={{ color: '#C8AD7E' }}>
              <th style={{ padding: 12 }}>Title</th>
              <th style={{ padding: 12 }}>Source</th>
              <th style={{ padding: 12 }}>Amount</th>
              <th style={{ padding: 12 }}>Date</th>
              <th style={{ padding: 12 }}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {incomeRecords.map((record) => (
              <tr key={record.id}>
                <td style={{ padding: 12 }}>{record.title}</td>
                <td style={{ padding: 12 }}>{record.source}</td>
                <td style={{ padding: 12 }}>
                  Rs. {record.amount.toLocaleString()}
                </td>
                <td style={{ padding: 12 }}>{record.date}</td>
                <td style={{ padding: 12 }}>
  <button
    type="button"
    onClick={() => {
      const title = window.prompt('Income Title:', record.title);
      if (title === null) return;

      const source = window.prompt('Income Source:', record.source);
      if (source === null) return;

      const amount = window.prompt('Amount:', record.amount);
      if (amount === null) return;

      const date = window.prompt('Date (YYYY-MM-DD):', record.date);
      if (date === null) return;

      if (
        !title.trim() ||
        !source.trim() ||
        !Number.isFinite(Number(amount)) ||
        Number(amount) <= 0 ||
        !date.trim()
      ) {
        alert('Please enter valid details.');
        return;
      }

      setIncomeRecords((previous) =>
        previous.map((item) =>
          item.id === record.id
            ? {
                ...item,
                title: title.trim(),
                source: source.trim(),
                amount: Number(amount),
                date,
              }
            : item
        )
      );
    }}
  >
    Edit
  </button>

  <button
    type="button"
    onClick={() => {
      if (window.confirm('Delete this income record?')) {
        setIncomeRecords((previous) =>
          previous.filter((item) => item.id !== record.id)
        );
      }
    }}
    style={{ marginLeft: 8 }}
  >
    Delete
  </button>
</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </section>
)}

{activePage === 'Expenses' && (
  <section style={{
    ...cardStyle,
    marginTop: 20,
    marginBottom: 20
  }}>
    <h3>Add New Expense</h3>
    <p className="muted">Enter your expense details below.</p>

    <form onSubmit={(e) => {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);

      const newExpense = {
        id: Date.now(),
        title: formData.get('title'),
        category: formData.get('category'),
        amount: Number(formData.get('amount')),
        date: formData.get('date'),
      };
      if (
  !newExpense.title.trim() ||
  !newExpense.category ||
  !Number.isFinite(newExpense.amount) ||
  newExpense.amount <= 0 ||
  !newExpense.date
) {
  alert('Please enter valid expense details.');
  return;
}

      setExpenseRecords((previous) => [...previous, newExpense]);

      e.currentTarget.reset();
    }}>
      <div style={{ marginBottom: 15 }}>
        <label>Expense Title</label>
        <input
          type="text"
          name="title"
          placeholder="e.g. Grocery Shopping"
          required
          style={inputStyle}
        />
      </div>

      <div style={{ marginBottom: 15 }}>
        <label>Expense Category</label>
        <select name="category" required style={inputStyle}>
          <option value="">Select Category</option>
          <option>Food</option>
          <option>Transport</option>
          <option>Shopping</option>
          <option>Bills</option>
          <option>Education</option>
          <option>Healthcare</option>
          <option>Other</option>
        </select>
      </div>

      <div style={{ marginBottom: 15 }}>
        <label>Amount (Rs.)</label>
        <input
          type="number"
          name="amount"
          min="1"
          placeholder="Enter amount"
          required
          style={inputStyle}
        />
      </div>

      <div style={{ marginBottom: 15 }}>
        <label>Expense Date</label>
        <input
          type="date"
          name="date"
          required
          style={inputStyle}
        />
      </div>

      <button type="submit" className="income-button">
        Add Expense
      </button>
    </form>
  </section>
)}

{activePage === 'Expenses' && (
  <section style={{ ...cardStyle, marginTop: 20 }}>
    <h3>Expense History</h3>
    <p className="muted">Your recorded expense transactions.</p>

    {expenseRecords.length === 0 ? (
      <p className="muted">No expense records added yet.</p>
    ) : (
      <div style={{ overflowX: 'auto' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginTop: 15,
          textAlign: 'left'
        }}>
          <thead>
            <tr style={{ color: '#C8AD7E' }}>
              <th style={{ padding: 12 }}>Title</th>
              <th style={{ padding: 12 }}>Category</th>
              <th style={{ padding: 12 }}>Amount</th>
              <th style={{ padding: 12 }}>Date</th>
              <th style={{ padding: 12 }}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {expenseRecords.map((record) => (
              <tr key={record.id}>
                <td style={{ padding: 12 }}>{record.title}</td>
                <td style={{ padding: 12 }}>{record.category}</td>
                <td style={{ padding: 12 }}>
                  Rs. {Number(record.amount).toLocaleString()}
                </td>
                <td style={{ padding: 12 }}>{record.date}</td>

                <td style={{ padding: 12 }}>
                  <button
                    type="button"
                    onClick={() => {
                      const title = window.prompt('Expense Title:', record.title);
                      if (title === null) return;

                      const category = window.prompt('Category:', record.category);
                      if (category === null) return;

                      const amount = window.prompt('Amount:', record.amount);
                      if (amount === null) return;

                      const date = window.prompt('Date (YYYY-MM-DD):', record.date);
                      if (date === null) return;

                      if (
                        !title.trim() ||
                        !category.trim() ||
                        !Number.isFinite(Number(amount)) ||
                        Number(amount) <= 0 ||
                        !date.trim()
                      ) {
                        alert('Please enter valid expense details.');
                        return;
                      }

                      setExpenseRecords((previous) =>
                        previous.map((item) =>
                          item.id === record.id
                            ? {
                                ...item,
                                title: title.trim(),
                                category: category.trim(),
                                amount: Number(amount),
                                date,
                              }
                            : item
                        )
                      );
                    }}
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (window.confirm('Delete this expense record?')) {
                        setExpenseRecords((previous) =>
                          previous.filter((item) => item.id !== record.id)
                        );
                      }
                    }}
                    style={{ marginLeft: 8 }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </section>
)}


{activePage === 'Savings' && (
  <section style={{
    ...cardStyle,
    marginTop: 20,
    marginBottom: 20
  }}>
    <h3>Add New Savings</h3>
    <p className="muted">Record your savings contributions.</p>

    <form onSubmit={(e) => {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);

      const newSaving = {
        id: Date.now(),
        title: formData.get('title'),
        amount: Number(formData.get('amount')),
        date: formData.get('date'),
      };

  if (
  !newSaving.title.trim() ||
  !Number.isFinite(newSaving.amount) ||
  newSaving.amount <= 0 ||
  !newSaving.date
) {
  alert('Please enter valid savings details.');
  return;
}

      setSavingsRecords((previous) => [...previous, newSaving]);

      e.currentTarget.reset();
    }}>
      <div style={{ marginBottom: 15 }}>
        <label>Savings Title</label>
        <input
          type="text"
          name="title"
          placeholder="e.g. Emergency Fund"
          required
          style={inputStyle}
        />
      </div>

      <div style={{ marginBottom: 15 }}>
        <label>Amount (Rs.)</label>
        <input
          type="number"
          name="amount"
          min="1"
          placeholder="Enter savings amount"
          required
          style={inputStyle}
        />
      </div>

      <div style={{ marginBottom: 15 }}>
        <label>Savings Date</label>
        <input
          type="date"
          name="date"
          required
          style={inputStyle}
        />
      </div>

      <button type="submit" className="income-button">
        Add Savings
      </button>
    </form>
  </section>
)}
{activePage === 'Savings' && (
  <section style={{ ...cardStyle, marginTop: 20 }}>
    <h3>Savings History</h3>
    <p className="muted">Your recorded savings contributions.</p>

    {savingsRecords.length === 0 ? (
      <p className="muted">No savings records added yet.</p>
    ) : (
      <div style={{ overflowX: 'auto' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginTop: 15,
          textAlign: 'left'
        }}>
          <thead>
            <tr style={{ color: '#C8AD7E' }}>
              <th style={{ padding: 12 }}>Title</th>
              <th style={{ padding: 12 }}>Amount</th>
              <th style={{ padding: 12 }}>Date</th>
              <th style={{ padding: 12 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {savingsRecords.map((record) => (
              <tr key={record.id}>
                <td style={{ padding: 12 }}>{record.title}</td>
                <td style={{ padding: 12 }}>
                  Rs. {Number(record.amount).toLocaleString()}
                </td>
                <td style={{ padding: 12 }}>{record.date}</td>
                <td style={{ padding: 12 }}>
                  <button
                    type="button"
                    onClick={() => {
                      const title = window.prompt('Savings Title:', record.title);
                      if (title === null) return;

                      const amount = window.prompt('Amount:', record.amount);
                      if (amount === null) return;

                      const date = window.prompt('Date (YYYY-MM-DD):', record.date);
                      if (date === null) return;

                      if (
                        !title.trim() ||
                        !Number.isFinite(Number(amount)) ||
                        Number(amount) <= 0 ||
                        !date.trim()
                      ) {
                        alert('Please enter valid savings details.');
                        return;
                      }

                      setSavingsRecords((previous) =>
                        previous.map((item) =>
                          item.id === record.id
                            ? {
                                ...item,
                                title: title.trim(),
                                amount: Number(amount),
                                date,
                              }
                            : item
                        )
                      );
                    }}
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (window.confirm('Delete this savings record?')) {
                        setSavingsRecords((previous) =>
                          previous.filter((item) => item.id !== record.id)
                        );
                      }
                    }}
                    style={{ marginLeft: 8 }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </section>
)}

{activePage === 'Budgets' && (
  <section style={{
    ...cardStyle,
    marginTop: 20,
    marginBottom: 20
  }}>
    <h3>Set Monthly Budget</h3>
    <p className="muted">Create a spending limit for each category.</p>

    <form onSubmit={(e) => {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);

      const newBudget = {
        id: Date.now(),
        category: formData.get('category'),
        amount: Number(formData.get('amount')),
      };
if (
  !newBudget.category ||
  !Number.isFinite(newBudget.amount) ||
  newBudget.amount <= 0
) {
  alert('Please enter valid budget details.');
  return;
}

      setBudgetRecords((previous) => [...previous, newBudget]);
      e.currentTarget.reset();
    }}>
      <div style={{ marginBottom: 15 }}>
        <label>Budget Category</label>
        <select name="category" required style={inputStyle}>
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Shopping">Shopping</option>
          <option value="Bills">Bills</option>
          <option value="Education">Education</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div style={{ marginBottom: 15 }}>
        <label>Monthly Budget (Rs.)</label>
        <input
          type="number"
          name="amount"
          min="1"
          placeholder="Enter monthly limit"
          required
          style={inputStyle}
        />
      </div>

      <button type="submit" className="income-button">
        Save Budget
      </button>
    </form>
  </section>
)}

{activePage === 'Budgets' && (
  <section style={{ ...cardStyle, marginTop: 20 }}>
    <h3>Budget History</h3>
    <p className="muted">Your monthly spending limits.</p>

    {budgetRecords.length === 0 ? (
      <p className="muted">No budgets added yet.</p>
    ) : (
      <div style={{ overflowX: 'auto' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginTop: 15,
          textAlign: 'left'
        }}>
          <thead>
            <tr style={{ color: '#C8AD7E' }}>
              <th style={{ padding: 12 }}>Category</th>
              <th style={{ padding: 12 }}>Monthly Budget</th>
              <th style={{ padding: 12 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {budgetRecords.map((record) => (
              <tr key={record.id}>
                <td style={{ padding: 12 }}>{record.category}</td>
                <td style={{ padding: 12 }}>
                  Rs. {Number(record.amount).toLocaleString()}
                </td>
                <td style={{ padding: 12 }}>
                  <button
                    type="button"
                    onClick={() => {
                      const category = window.prompt(
                        'Budget Category:',
                        record.category
                      );
                      if (category === null) return;

                      const amount = window.prompt(
                        'Monthly Budget:',
                        record.amount
                      );
                      if (amount === null) return;

                      if (
                        !category.trim() ||
                        !Number.isFinite(Number(amount)) ||
                        Number(amount) <= 0
                      ) {
                        alert('Please enter valid budget details.');
                        return;
                      }

                      setBudgetRecords((previous) =>
                        previous.map((item) =>
                          item.id === record.id
                            ? {
                                ...item,
                                category: category.trim(),
                                amount: Number(amount),
                              }
                            : item
                        )
                      );
                    }}
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (window.confirm('Delete this budget record?')) {
                        setBudgetRecords((previous) =>
                          previous.filter((item) => item.id !== record.id)
                        );
                      }
                    }}
                    style={{ marginLeft: 8 }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </section>
)}

{activePage === 'Reports' && (
  <section style={{ ...cardStyle, marginTop: 20 }}>
    <h3>Financial Reports</h3>
    <p className="muted">Your personal financial summary.</p>

    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: 15,
      marginTop: 20
    }}>
      <div style={cardStyle}>
        <p className="muted">Total Income</p>
        <h3>Rs. {totalIncome.toLocaleString()}</h3>
      </div>

      <div style={cardStyle}>
        <p className="muted">Total Expenses</p>
        <h3>Rs. {totalExpenses.toLocaleString()}</h3>
      </div>

      <div style={cardStyle}>
        <p className="muted">Total Savings</p>
        <h3>Rs. {totalSavings.toLocaleString()}</h3>
      </div>

      <div style={cardStyle}>
        <p className="muted">Remaining Balance</p>
        <h3>
          Rs. {(totalIncome - totalExpenses).toLocaleString()}
        </h3>
      </div>
    </div>
  </section>
)}

        {activePage === 'Dashboard' && (
  <section className="cards">
          <div style={cardStyle}>
            <p className="muted">Total Income</p>
            <div className="amount">
  Rs. {totalIncome.toLocaleString()}
</div>
          </div>

          <div style={cardStyle}>
            <p className="muted">Total Expenses</p>
            <div className="amount">
  Rs. {totalExpenses.toLocaleString()}
</div>
          </div>

          <div style={cardStyle}>
            <p className="muted">Total Savings</p>
            <div className="amount">
  Rs. {totalSavings.toLocaleString()}
</div>
          </div>
        </section>
)}
{activePage === 'Dashboard' && (
  <div style={{ margin: '20px 0', ...cardStyle }}>
    <label style={{ marginRight: '12px' }}>
      Filter by Month:
    </label>

    <select
      value={selectedMonth}
      onChange={(e) => setSelectedMonth(e.target.value)}
      style={{
        padding: '10px',
        borderRadius: '8px',
        background: '#151F32',
        color: '#F5F5DC',
        border: '1px solid #C8AD7E',
      }}
    >
      <option value="all">All Months</option>

      {monthLabels.map((month) => (
        <option key={month} value={month}>
          {month}
        </option>
      ))}
    </select>
  </div>
)}

{activePage === 'Dashboard' && (
<div className="charts-grid">


  {/* 1. Income vs Expenses */}
  <section className="chart-card" style={cardStyle}>
    <h3>Monthly Income vs Expenses</h3>
    <p className="muted">Compare your monthly income and spending.</p>
    <div style={{ height: '220px', marginTop: 15 }}>
      <Bar data={actualIncomeExpensesData} options={chartOptions} />
    </div>
  </section>

  {/* 2. Expense Breakdown */}
  <section className="chart-card" style={cardStyle}>
    <h3>Expense Breakdown</h3>
    <p className="muted">Understand where your money is going.</p>
    <div style={{ height: '260px', marginTop: 15 }}>
      <Doughnut data={actualExpenseBreakdown} options={doughnutOptions} />
    </div>
  </section>

  {/* 3. Multiple Category Spending */}
  <section className="chart-card" style={cardStyle}>
    <h3>Category Spending Progress</h3>
    <p className="muted">Compare spending across categories.</p>
    <div style={{ height: '220px', marginTop: 15 }}>
      <Line
  data={actualMonthlyCategoryData}
  options={lineOptions}
/>
    </div>
  </section>

  {/* 4. Monthly Expenses Trend */}
  <section className="chart-card" style={cardStyle}>
    <h3>Monthly Expenses Trend</h3>
    <p className="muted">Track your monthly spending changes.</p>
    <div style={{ height: '220px', marginTop: 15 }}>
      <Line data={actualMonthlyExpenseData} options={lineOptions} />
    </div>
  </section>

  {/* 5. Savings Progress */}
<section
  className="chart-card savings-section"
  style={{ ...cardStyle, gridColumn: '1 / -1' }}
>
  <h3>Savings Progress</h3>
  <p className="muted">Track your savings and contributions.</p>

  {/* Total Summary Cards */}
  <div className="savings-summary">
    <div className="savings-total-card">
      <h2>Rs. {totalSavings.toLocaleString()}</h2>
      <p>Total Saved</p>
    </div>

    <div className="savings-total-card">
      <h2>Rs. {totalExpenses.toLocaleString()}</h2>
      <p>Total Spent</p>
    </div>

    <div className="savings-total-card">
      <h2>
  Rs. {Math.max(totalIncome - totalExpenses - totalSavings, 0).toLocaleString()}
</h2>
      <p>Available to Spend</p>
    </div>

    <div className="savings-total-card">
      <h2>Rs. {remainingSavingsGoal.toLocaleString()}</h2>
      <p>Left to Save</p>
    </div>
  </div>

  {/* Timeline and Contributions Tabs */}
  <div className="savings-tab-header">
    <div>
      <h3 style={{ marginBottom: 5 }}>
        {savingsTab === 'timeline' ? 'Timeline' : 'Contributions'}
      </h3>
      <p className="muted">
        {savingsTab === 'timeline'
          ? 'See your savings growth month by month.'
          : 'See how much you contributed each month.'}
      </p>
    </div>

    <div className="savings-tabs">
      <button
        className={savingsTab === 'timeline' ? 'savings-tab active' : 'savings-tab'}
        onClick={() => setSavingsTab('timeline')}
      >
        Timeline
      </button>

      <button
        className={savingsTab === 'contributions' ? 'savings-tab active' : 'savings-tab'}
        onClick={() => setSavingsTab('contributions')}
      >
        Contributions
      </button>
    </div>
  </div>

  {/* Savings Graph */}
  <div style={{ height: '300px', marginTop: 20 }}>
    {savingsTab === 'timeline' ? (
      <Line
  data={actualSavingsTimelineData}
  options={savingsProgressOptions}
/>
    ) : (
      <Bar
        data={actualSavingsData}
        options={savingsProgressOptions}
      />
    )}
  </div>
</section>

</div>
)}

{activePage === 'Dashboard' && (
        <section className="content-grid">
          <div style={cardStyle}>
            


            <h3>Financial Health Score</h3>
            {financialHealthScore} / 100
            <p className="muted">
              Your score will appear after adding financial data.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>Savings Goal</h3>
            <input
  type="number"
  min="0"
  placeholder="Enter your savings goal"
  value={savingsGoal || ''}
  onChange={(e) => setSavingsGoal(Number(e.target.value))}
  style={{
    width: '100%',
    padding: '10px',
    marginTop: '12px',
    marginBottom: '12px',
    borderRadius: '8px',
    background: '#0b1120',
    color: '#F5F5DC',
    border: '1px solid #C8AD7E',
  }}
/>
            <p className="muted">Your savings progress</p>
            <div className="amount">
  Rs. {totalSavings.toLocaleString()} / Rs. {savingsGoal.toLocaleString()}
</div>
            <div className="progress">
              <div
  className="progress-fill"
  style={{ width: `${savingsProgress}%` }}
></div>
            </div>
            <p className="muted">
  {savingsGoal > 0
    ? `Rs. ${remainingSavingsGoal.toLocaleString()} left to reach your goal`
    : 'Please add your savings goal amount.'}
</p>
          </div>
        </section>
)}

{activePage === 'Dashboard' && (
        <section style={{ ...cardStyle, marginTop: 18 }}>
          <h3>Recent Activity</h3>
          <p className="muted">
            Your income and expense transactions will appear here.
          </p>
        </section>
)}
        
      </main>
    </div>
  );
}

export default App;
