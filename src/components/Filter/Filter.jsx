import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { filterAdverts } from 'redux/adverts/advertsSlice';
import { selectAdverts } from 'redux/adverts/selectors';

export const FilterAdverts = () => {
  const dispatch = useDispatch();
  const allAdverts = useSelector(selectAdverts);


const uniqueMakes = [...new Set(allAdverts.map(advert => advert.make))];

  const options = uniqueMakes.map(make => ({
    value: make,
    label: make,
  }));

  const formik = useFormik({
    initialValues: {
      make: '',
      price: '',
      from: '',
      to: '',
    },


    onSubmit: value => {
        dispatch(filterAdverts({value}))
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label>
          Car brand
          <Select
            type="text"
            name={formik.values.label}
            value={options.find(option => option.value === formik.values.make)}
            options={options}
            placeholder="Enter the text"
            onChange={({ value }) => formik.setFieldValue('make', value)}
            onBlur={formik.handleBlur}
          />
        </label>

        <label>
          Price/ 1 hour
          <Select
            type="text"
            name={formik.values.label}
            value={formik.values.value}
            options={options}
            placeholder="To $"
            onChange={({ value }) => formik.setFieldValue('price', value)}
            onBlur={formik.handleBlur}
          />
        </label>

        <label>
          Car mileage / km
          <input
            type="number"
            name="from"
            value={formik.values.from}
            placeholder="From"
            autoComplete="off"
            onChange={formik.handleChange}
            min="1"
          />
          <input
            type="number"
            name="to"
            value={formik.values.to}
            placeholder="To"
            autoComplete="off"
            onChange={formik.handleChange}
          />
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
