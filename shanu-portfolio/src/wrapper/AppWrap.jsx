import NavigationDots from '../components/NavigationDots/NavigationDots';
import SocialMedia from '../components/SocialMedia/SocialMedia';

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <section id={idName} className={`app__container ${classNames ?? ''}`}>
        <SocialMedia />

        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text">@2025 Shanu Farhan</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>

        <NavigationDots active={idName} />
      </section>
    );
  };

export default AppWrap;
