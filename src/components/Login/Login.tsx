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

    const [checked, setChecked] = useState<boolean>(false)

    const onClickChecked = () => {
        setChecked(!checked)
    }

    let showPassword = checked ? "text" : "password"

    const onClickHandler = () => setWrongLogin(false)

    const validation = yup.object().shape({
        email: yup.string().email("Please enter a valid email address").required("Required"),
        password: yup.string().required("Required")
    })

    if (isAuth) return <Redirect to={"/profile"}/>

    return (
        <div className={g.loginBlock}>
            <div className={g.login}>Login</div>
            <Formik
                initialValues={initialValues}
                validationSchema={validation}
                onSubmit={(values, actions) => {
                    usersAPI.logIn('527m@mail.ru', 'Pizza741258', values.rememberMe)
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
                        <div className={g.field}>
                            <div>
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder={"Email"}
                                    onFocus={onClickHandler}
                                    className={g.field}
                                /><br/>
                                <span style={{color: "darkgrey"}}>.</span>
                                <ErrorMessage name="email" component="span" className={g.error}/>
                            </div>
                            <div>
                                <Field
                                    type={showPassword}
                                    name="password"
                                    placeholder={"Password"}
                                    onFocus={onClickHandler}
                                    className={g.field}
                                />
                                <input type={"checkbox"} checked={checked} onClick={onClickChecked}/>
                                <span>show the password</span>
                                <br/>
                                <span style={{color: "darkgrey"}}>.</span>
                                <ErrorMessage name="password" component="span" className={g.error}/>
                            </div>
                        </div>
                        <div>
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
            <div>
                <div>
                    You can use common test account credentials:
                </div>
                <div className={g.credentials}>
                    <div>
                        Email: free@samuraijs.com
                    </div>
                    <div>
                        Password: free
                    </div>
                </div>
            </div>
        </div>
    )
}