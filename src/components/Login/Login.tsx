import React, {useState} from "react";
import g from "./Login.module.css";
import * as yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {usersAPI} from "../../api/api";
import {setAuthUserReducerAC} from "../../Redux/auth-reducer";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {AppRootStateType} from "../../Redux/redux-store";

type MyFormValues = {
    email: string
    password: string
    rememberMe: boolean
}


export const Login = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)
    const [wrongLogin, setWrongLogin] = useState<boolean>(false)

    const initialValues: MyFormValues = {
        email: "",
        password: "",
        rememberMe: false
    };

    const onClickHandler = () => setWrongLogin(false)

    const validation = yup.object().shape({
        email: yup.string().email("Please enter a valid email address").required("Required"),
        password: yup.string().required("Required")
    })

    if (isAuth) return <Redirect to={"/profile"}/>

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
                                setWrongLogin(false)
                                usersAPI.isLoginIn()
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            let {id, login, email} = data.data
                                            dispatch(setAuthUserReducerAC(id, login, email))
                                        }
                                    })
                            } else {
                                setWrongLogin(true)
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
                                onFocus={onClickHandler}
                            />
                            <ErrorMessage name="email" component="span" className={g.error}/>
                        </div>
                        <div>
                            <Field
                                type="password"
                                name="password"
                                placeholder={"Password"}
                                onFocus={onClickHandler}
                            />
                            <ErrorMessage name="password" component="span" className={g.error}/>
                        </div>
                        <div className={g.rememberMe}>
                            <Field
                                type="checkbox"
                                name="rememberMe"
                            />
                            <span>remember me</span>
                        </div>
                        <div className={g.submit}>
                            <button type="submit" disabled={!isValid || isSubmitting || !dirty}>
                                Submit
                            </button>
                            {wrongLogin ?
                                <span className={g.wrong}>Something wrong with email or password</span> : null}
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}