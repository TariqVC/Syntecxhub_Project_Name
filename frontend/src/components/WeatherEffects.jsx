import './WeatherEffects.css';

const getWeatherEffect = (conditionText) => {
  const text = conditionText?.toLowerCase() || '';
  if (text.includes('thunder') || text.includes('lightning')) return 'thunder';
  if (text.includes('rain') || text.includes('drizzle') || text.includes('shower')) return 'rain';
  if (text.includes('snow') || text.includes('blizzard') || text.includes('sleet')) return 'snow';
  if (text.includes('cloud') || text.includes('overcast') || text.includes('mist') || text.includes('fog')) return 'cloudy';
  if (text.includes('wind') || text.includes('gale') || text.includes('breeze')) return 'windy';
  if (text.includes('sunny') || text.includes('clear')) return 'clear';
  return null;
};

const Rain = () => (
  <div className="weather-effect rain-container">
    {Array.from({ length: 80 }).map((_, i) => (
      <div key={i} className="raindrop" style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
        animationDuration: `${0.5 + Math.random() * 0.5}s`,
        height: `${15 + Math.random() * 15}px`,
        opacity: 0.4 + Math.random() * 0.4,
      }} />
    ))}
  </div>
);

const Thunder = () => (
  <div className="weather-effect thunder-container">
    {Array.from({ length: 80 }).map((_, i) => (
      <div key={i} className="raindrop heavy" style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
        animationDuration: `${0.3 + Math.random() * 0.3}s`,
        height: `${20 + Math.random() * 20}px`,
        opacity: 0.6 + Math.random() * 0.4,
      }} />
    ))}
    {Array.from({ length: 3 }).map((_, i) => (
      <div key={i} className="lightning-bolt" style={{
        left: `${20 + i * 30}%`,
        animationDelay: `${i * 3 + Math.random() * 2}s`,
      }}>⚡</div>
    ))}
    <div className="lightning-flash" />
  </div>
);

const Cloudy = () => (
  <div className="weather-effect cloud-container">
    {Array.from({ length: 8 }).map((_, i) => (
      <div key={i} className="floating-cloud" style={{
        top: `${3 + i * 10}%`,
        animationDelay: `${i * 4}s`,
        animationDuration: `${25 + i * 5}s`,
        opacity: 0.1 + i * 0.04,
        fontSize: `${4 + i * 0.8}rem`,
      }}>☁</div>
    ))}
  </div>
);

const Sunny = () => (
  <div className="weather-effect sunny-container">
    <div className="sun-glow" />
    {Array.from({ length: 12 }).map((_, i) => (
      <div key={i} className="sun-ray" style={{
        transform: `rotate(${i * 30}deg)`,
        animationDelay: `${i * 0.2}s`,
      }} />
    ))}
    {Array.from({ length: 20 }).map((_, i) => (
      <div key={i} className="sun-particle" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 4}s`,
        animationDuration: `${3 + Math.random() * 3}s`,
        width: `${2 + Math.random() * 3}px`,
        height: `${2 + Math.random() * 3}px`,
      }} />
    ))}
  </div>
);

const Windy = () => (
  <div className="weather-effect wind-container">
    {Array.from({ length: 12 }).map((_, i) => (
      <div key={i} className="wind-line" style={{
        top: `${5 + i * 8}%`,
        animationDelay: `${i * 0.4}s`,
        animationDuration: `${1.5 + Math.random() * 1.5}s`,
        width: `${80 + Math.random() * 120}px`,
        opacity: 0.2 + Math.random() * 0.3,
      }} />
    ))}
  </div>
);

const Stars = () => (
  <div className="weather-effect stars-container">
    {Array.from({ length: 80 }).map((_, i) => (
      <div key={i} className="star" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 70}%`,
        animationDelay: `${Math.random() * 4}s`,
        animationDuration: `${2 + Math.random() * 3}s`,
        width: `${1 + Math.random() * 2}px`,
        height: `${1 + Math.random() * 2}px`,
      }} />
    ))}
    {Array.from({ length: 5 }).map((_, i) => (
      <div key={i} className="shooting-star" style={{
        top: `${5 + i * 12}%`,
        animationDelay: `${i * 4 + Math.random() * 4}s`,
        animationDuration: `${1 + Math.random()}s`,
      }} />
    ))}
  </div>
);

const WeatherEffects = ({ conditionText, hour }) => {
  const effect = getWeatherEffect(conditionText);
  const isNight = hour >= 20 || hour < 6;

  // Priority: thunder > rain > cloudy > windy > clear/stars
  // Stars only show when clear at night, sunny shows when clear during day
  if (effect === 'thunder') return <Thunder />;
  if (effect === 'rain') return <Rain />;
  if (effect === 'cloudy') return <Cloudy />;
  if (effect === 'windy') return <Windy />;
  if (effect === 'clear' && isNight) return <Stars />;
  if (effect === 'clear' && !isNight) return <Sunny />;

  return null;
};

export default WeatherEffects;