import Alert from "../ui/Alert";

export default function Header() {
  return (
    <header>
      <section class="header-top">
        <div className="container">
          <Alert textColor="green" bgColor="bg-green">
            Testo
          </Alert>
        </div>
      </section>
      <section id="page-header">
        <div className="container">
          <img src="/dc-logo.png" alt="logo dc"></img>
          <ul>
            <li>
              <a href="#">CARACTERS</a>
            </li>
            <li className="active">
              <a href="#">COMICS</a>
            </li>
            <li>
              <a href="#">MOVIES</a>
            </li>
            <li>
              <a href="#">TV</a>
            </li>
            <li>
              <a href="#">GAMES</a>
            </li>
            <li>
              <a href="#">COLLECTIBLES</a>
            </li>
            <li>
              <a href="#">VIDEOS</a>
            </li>
            <li>
              <a href="#">FANS</a>
            </li>
            <li>
              <a href="#">NEWS</a>
            </li>
            <li>
              <a href="#">SHOP</a>
            </li>
          </ul>
        </div>
      </section>
    </header>
  );
}
