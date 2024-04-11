import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';

const SearchForm = (props) => {
    const {onSearch} = props;

    const [user, setUser] = useState(null);

    const updateUser = (name) => {
        if (!name) {
            return;
        }
        setUser(onSearch(name));        
    }    

    return (
        <Formik
            initialValues = {{
                text: ''
            }} 
            onSubmit = {(values) => {
                updateUser(values.text);
                    return;
                }
            }        
        >
            <Form className='search-form border p-4 shadow-lg rounded'>
                <div>
                    <div className=''>
                        <label htmlFor="text" className="form-label fs-5">Find a user by name</label>
                    </div>
                    <div className="field-wrapper mb-3">
                        <Field
                            type="text"
                            name="text"
                            id="text"
                            placeholder="Enter a Name"
                        />                   
                    </div>

                    <div className='status-field'>
                        {(user != null && user.length > 0) ?
                            (
                                <div className='mb-3'>
                                    <p className='mb-0'>There is! Visit page of {user[0].name}:</p>
                                    <p>
                                        <a href={`/user/${user[0].id}`} className=''> To the Page</a>
                                    </p>                                   
                                </div>
                            ) : null
                         }
                    </div>

                    <button type="submit" className="btn btn-primary">
                            <div className="inner">Go</div>
                    </button> 
                </div>
            </Form>

        </Formik>
    )
}

export default SearchForm;