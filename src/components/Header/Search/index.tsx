import React from 'react';
import { withFormik } from 'formik';

import SearchForm, { ISearch } from './Search';

const initialValue: ISearch = {
  search: ''
}

const EnhancedSearchForm = withFormik({
  mapPropsToValues: () => initialValue,
  handleSubmit: (values ) => {
    console.log(values);
  }
})(SearchForm);

export default EnhancedSearchForm;