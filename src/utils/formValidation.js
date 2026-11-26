export function validateOrder(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = 'Введите не менее двух символов.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Введите корректный e-mail.';
  if (!/^\+?[\d\s()-]{10,}$/.test(values.phone)) errors.phone = 'Введите корректный телефон.';
  if (!values.product) errors.product = 'Выберите товар.';
  if (!values.consent) errors.consent = 'Подтвердите согласие.';
  return errors;
}

