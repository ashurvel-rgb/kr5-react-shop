import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import FormField from '../components/FormField';
import { getProducts } from '../api/productsApi';
import { validateForm } from '../utils/formValidation';

const initialValues = { name: '', email: '', phone: '', product: '', comment: '' };
export default function OrderPage() {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  useEffect(() => { getProducts().then(setProducts).catch(() => setProducts([])); }, []);
  useEffect(() => { const productId = searchParams.get('product'); if (productId) setValues((current) => ({ ...current, product: productId })); }, [searchParams]);
  function changeValue(event) { setValues((current) => ({ ...current, [event.target.name]: event.target.value })); }
  function submitForm(event) { event.preventDefault(); const nextErrors = validateForm(values); setErrors(nextErrors); setSuccess(''); if (Object.keys(nextErrors).length === 0) { setSuccess('Заявка подготовлена.'); setValues(initialValues); } }

  return <main className="section"><div className="container"><h1>Форма заявки</h1><form className="order-form" onSubmit={submitForm} noValidate><FormField label="Имя" name="name" error={errors.name}><input id="name" name="name" value={values.name} onChange={changeValue}/></FormField><FormField label="E-mail" name="email" error={errors.email}><input id="email" name="email" type="email" value={values.email} onChange={changeValue}/></FormField><FormField label="Телефон" name="phone" error={errors.phone}><input id="phone" name="phone" value={values.phone} onChange={changeValue}/></FormField><FormField label="Товар" name="product" error={errors.product}><select id="product" name="product" value={values.product} onChange={changeValue}><option value="">Выберите товар</option>{products.map((product) => <option key={product.id} value={product.id}>{product.title}</option>)}</select></FormField><div className="form-field"><label htmlFor="comment">Комментарий</label><textarea id="comment" name="comment" rows="4" value={values.comment} onChange={changeValue}/></div><button className="button" type="submit">Подготовить заявку</button><p className="success">{success}</p></form></div></main>;
}

