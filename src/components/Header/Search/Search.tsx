import React, { FC } from 'react';
import { FormikProps } from 'formik';

import { Input } from 'components';

export interface ISearch {
  search: string;
}

const fieldName = 'search';

const SearchForm: FC<FormikProps<ISearch>> = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit
}) => (
  <form onSubmit={handleSubmit}>
    <Input
      type="text"
      size="small"
      value={values[fieldName]}
      name="search"
      placeholder="Поиск"
      touched={touched[fieldName]}
      error={errors[fieldName]}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  </form>
);

export default SearchForm;
