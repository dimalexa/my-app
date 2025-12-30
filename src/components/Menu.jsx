import React, { useState, useEffect, useRef } from 'react';
import './HamburgerMenu.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef(null);

  // Определяем мобильное устройство и закрываем меню при ресайзе
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(false); // Закрываем меню при переходе на десктоп
      }
    };

    // Проверяем при загрузке
    checkIsMobile();

    // Добавляем обработчик ресайза
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  // Закрываем меню при клике вне его
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { id: 1, label: 'Главная', link: '#home' },
    { id: 2, label: 'О нас', link: '#about' },
    { id: 3, label: 'Услуги', link: '#services' },
    { id: 4, label: 'Портфолио', link: '#portfolio' },
    { id: 5, label: 'Контакты', link: '#contact' },
  ];

  const handleMenuItemClick = (link) => {
    setIsOpen(false);
    // Здесь можно добавить плавную прокрутку или навигацию
    console.log(`Переход к: ${link}`);
  };

  return (
    <nav className="navbar" ref={menuRef}>
      <div className="nav-container">
        {/* Логотип */}
        <div className="nav-logo">
          <a href="#home">MyLogo</a>
        </div>

        {/* Гамбургер-иконка (только на мобильных) */}
        {isMobile && (
          <button 
            className={`hamburger ${isOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={isOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        )}

        {/* Меню */}
        <ul className={`nav-menu ${isOpen ? 'active' : ''} ${!isMobile ? 'desktop' : ''}`}>
          {menuItems.map((item) => (
            <li key={item.id} className="nav-item">
              <a
                href={item.link}
                className="nav-link"
                onClick={() => handleMenuItemClick(item.link)}
              >
                {item.label}
              </a>
            </li>
          ))}
          
          {/* Кнопка CTA (только на десктопе) */}
          {!isMobile && (
            <li className="nav-item nav-cta">
              <button className="cta-button">Связаться с нами</button>
            </li>
          )}
        </ul>

        {/* Кнопка CTA на мобильных (вне меню) */}
        {isMobile && !isOpen && (
          <button className="mobile-cta-button">Контакты</button>
        )}
      </div>
    </nav>
  );
};

export default HamburgerMenu;