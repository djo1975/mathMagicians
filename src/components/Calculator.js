import { useState } from 'react';
import calculate from '../logic/calculate';

const obj = {
  total: null,
  next: null,
  operation: null,
};

export default function Calculator() {
  const [output, setOutput] = useState(obj);
  const [activeBtn, setActiveBtn] = useState(null);

  const gumbs = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];
  const handleBtnClick = (e) => {
    const btn = e.target.name;
    setOutput(calculate(output, btn));
    setActiveBtn(btn);
  };

  const screen = (item) => {
    if ((!item.total) && (!item.next)) {
      return '0';
    }
    if (!item.total) {
      return item.next;
    }
    if (item.next && item.total && item.operation) {
      return item.next;
    }
    return item.total;
  };

  return (
    <section id="calculator">
      <input
        type="text"
        value={screen(output)}
        disabled
        id="exit"
      />
      <section id="input">
        <article id="digits">
          {gumbs.map((gumb) => (
            <button
              key={gumb}
              type="button"
              name={gumb}
              className={activeBtn === gumb ? 'active' : ''}
              onClick={handleBtnClick}
            >
              {gumb}
            </button>
          ))}
        </article>
      </section>
    </section>
  );
}
