import s from './ChartCategory.module.scss';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

export default function ChartCategory({ expenses, incomes, curCategory }) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    indexAxis: 'x',
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },

    minBarThickness: 15,
    maxBarThickness: 20,

    scales: {
      x: {
        display: true,
        grid: {
          color: 'transparent',
          borderColor: 'transparent',
          tickColor: 'transparent',
        },
      },
      y: {
        grid: {
          color: '#F5F6FB',
          borderColor: 'transparent',
          tickColor: 'transparent',
          lineWidth: 2,
        },
      },
    },
  };

  const Транспорт = {
    total: 4000,
    СТО: 3500,
    Мойка: 500,
    Бензин: 1500,
    Масло: 500,
    Фильтры: 1500,
    Чистка: 1500,
  };

  const labels = Object.keys(curCategory.data).filter(el => el !== 'total');
  console.log(labels);

  const data = {
    labels,
    datasets: [
      {
        label: '',
        data: labels.map(element => curCategory.data[element]),
        backgroundColor: ['#FF751D', '#FED9BF', '#FED9BF'],
        borderRadius: 10,
      },
    ],
  };

  return (
    <div className={s.backgroundChartCategory}>
      <Bar className={s.canvas} options={options} data={data} />
    </div>
  );
}
