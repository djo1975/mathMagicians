export default function Calculator() {
  const gumbs = ['AC', '+/-', '%', '/', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];

  return (
    <section id="calculator">
      <input
        type="text"
        value="0"
        disabled
        id="exit"
      />
      <section id="input">
        <article id="digits">
          {
            gumbs.map((gumb) => <button key={gumb} type="button">{gumb}</button>)
          }
        </article>
      </section>
    </section>
  );
}
