const WeatherMap = () => {
  return (
    <div className="weather-map">
      <img
        src="http://net.cive.gifu-u.ac.jp/pic/zumen/analysis/chart1001.jpg"
        alt="地上天気図(日本域)"
        width="500px"
        height="500px"
      />
      <p style={{ fontSize: "20px", textAlign: "center", color: "#55f" }}>
        地上天気図(日本域)
      </p>
    </div>
  );
};

export default WeatherMap;
