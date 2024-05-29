import React, { useEffect, useRef, useState } from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

const PieChartComponent = ({ skill }) => {
  const chartRef = useRef(null);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef]);

  const data = {
    labels: ["Used", "Remaining"],
    datasets: [
      {
        data: [
          isVisible ? skill.level : 0,
          isVisible ? 100 - skill.level : 100,
        ],
        backgroundColor: ["#4CAF50", "#e0e0e0"],
        hoverBackgroundColor: ["#4CAF50", "#e0e0e0"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    cutout: "70%",
    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 2000,
      easing: "easeOutBounce",
      onComplete: () => {
        const chart = chartRef.current;
        if (chart) {
          const ctx = chart.ctx;
          const { width, height } = chart;
          ctx.font = "24px Arial";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "#4CAF50";
          ctx.fillText(`${skill.level}%`, width / 2, height / 2);
        }
      },
    },
  };

  return (
    <div ref={containerRef} className="chart-container">
      <Pie ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default PieChartComponent;
