import Logo from 'assets/logo.svg';

// Styles
import styles from './header.module.scss';

type NavigationLink = {
  name: string;
  link: string;
};

const NAVIGATION: NavigationLink[] = [
  {
    name: 'Destinations',
    link: '#destinations',
  },

  {
    name: 'Food',
    link: '#food',
  },

  {
    name: 'Well being',
    link: '#well-being',
  },

  {
    name: 'Sport',
    link: '#sport',
  },

  {
    name: 'Family',
    link: '#family',
  },

  {
    name: 'Lifestyle',
    link: '#lifestyle',
  },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`wrapper ${styles.header__navigation}`}>
        <div className={styles.header__logo_container}>
          <Logo />
        </div>
        <nav className={styles.navigation}>
          <ul className={styles.navigation__list}>
            {NAVIGATION.map(({ name, link }) => (
              <li key={name}>
                <a href={link} className={styles.navigation__link}>
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={`wrapper ${styles.header__content}`}>
        <h1 className={styles.header__title}>
          Inspiration for travel by real people
        </h1>
        <h3 className={styles.header__subtitle}>Book smart, travel simple</h3>

        <a href="#" className={styles.header__action_link}>
          Start planning your trip
        </a>
      </div>
    </header>
  );
};

export default Header;
