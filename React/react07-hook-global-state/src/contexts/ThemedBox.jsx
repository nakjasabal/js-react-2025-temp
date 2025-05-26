import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemedBox = () => {
  const { isDark } = useContext(ThemeContext);

  const boxStyle = {
    padding: '20px',
    marginTop: '10px',
    backgroundColor: isDark ? '#333' : '#eee',
    color: isDark ? '#fff' : '#000',
    textAlign: 'center'
  };

  return (<>
    <div style={boxStyle}>
      현재 테마: {isDark ? '🌙 다크모드' : '☀️ 라이트모드'}
    </div>
  </>);
};

export default ThemedBox;
