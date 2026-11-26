import { Link } from "react-router-dom";
export default function NotFoundPage() {
  return (
    <main className="section">
      <div className="container message">
        <h1>404</h1>
        <p>Страница не найдена.</p>
        <Link className="button" to="/">
          На главную
        </Link>
      </div>
    </main>
  );
}
