import { Link } from 'react-router-dom';

export const Logo = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Link to="/" onClick={scrollToTop} className="block">
      <svg width="40" height="40" viewBox="0 0 51.02 51.02" className="sm:w-[51px] sm:h-[51px]">
        <rect y="0" fill="#F7F8F8" width="51.02" height="51.02"/>
        <path fill="#2B3187" d="M0,0v51.02h51.02V0H0z M46.77,46.77H4.69l3.83-4.25L39.15,8.5h-5.72L8.5,36.18l-4.25,4.72V4.25h42.08
          L42.51,8.5L11.88,42.52h5.72l24.92-27.68l4.25-4.72V46.77z"/>
        <g>
          <polygon fill="#0E0F1F" points="8.5,25.66 20.12,12.76 8.5,12.76 8.5,8.5 23.95,8.5 29.67,8.5 8.5,32.01"/>
        </g>
        <g>
          <polygon fill="#0E0F1F" points="42.52,25.37 30.9,38.27 42.52,38.27 42.52,42.52 27.07,42.52 21.35,42.52 42.52,19.01"/>
        </g>
      </svg>
    </Link>
  );
};