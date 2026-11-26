import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>Учебный React-магазин</h1>
          <p>Контрольная работа №5: SPA-приложение на React.</p>
          <Link className="button" to="/catalog">
            Открыть каталог
          </Link>
        </div>
      </section>
    </main>
  );
}
