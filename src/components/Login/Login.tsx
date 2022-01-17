import React from "react";
import g from "./Login.module.css";
import * as yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {usersAPI} from "../../api/api";
import {setAuthUserReducerAC} from "../../Redux/auth-reducer";
import {useDispatch} from "react-redux";

type MyFormValues = {
    email: string
    password: string
    rememberMe: boolean
}

export const Login = () => {
    const dispatch = useDispatch()

    const initialValues: MyFormValues = {
        email: "",
        password: "",
        rememberMe: false
    };

    const validation = yup.object().shape({
        email: yup.string().email("Please enter a valid email address").required("Required"),
        password: yup.string().required("Required")
    })

    return (
        <div className={g.loginBlock}>
            <div>Login</div>
            <Formik
                initialValues={initialValues}
                validationSchema={validation}
                onSubmit={(values, actions) => {
                    usersAPI.logIn(values.email, values.password, values.rememberMe)
                        .then(data => {
                            if (data.resultCode === 0) {
                                usersAPI.isLoginIn()
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            let {id, login, email} = data.data
                                            dispatch(setAuthUserReducerAC(id, login, email))
                                        }
                                    })
                            }
                        })
                    actions.setSubmitting(false);
                }}
            >
                {({
                      isSubmitting,
                      dirty,
                      isValid,
                  }) => (
                    <Form>
                        <div>
                            <Field
                                type="email"
                                name="email"
                                placeholder={"Email"}
                            />
                            <ErrorMessage name="email" component="span" className={g.error}/>
                        </div>
                        <div>
                            <Field
                                type="password"
                                name="password"
                                placeholder={"Password"}
                            />
                            <ErrorMessage name="password" component="span" className={g.error}/>
                        </div>
                        <div>
                            <Field
                                type="checkbox"
                                name="rememberMe"
                            />
                        </div>
                        <div>
                            <button type="submit" disabled={!isValid || isSubmitting || !dirty}>
                                Submit
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}