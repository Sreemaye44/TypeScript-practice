import { Button } from 'antd';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { useAppDispatch } from '../redux/hooks';
import { setUser } from '../redux/features/auth/authSlice';
import { verifyToken } from '../utils/verifyToken';

const Login = () => {

    const dispatch = useAppDispatch();

    const { register, handleSubmit } = useForm();
    const [login, { error }] = useLoginMutation();
    console.log("error", error)

    const onSubmit = async (data: any) => {
        const userInfo = {
            id: data.id,
            password: data.password
        }
        const res = await login(userInfo).unwrap();
        const user = verifyToken(res.data.accessToken);
        dispatch(setUser({ user: user, token: res.data.accessToken }))

    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="id">ID</label>
                    <input type="text" id='id' {...register('id')} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="text" id='password' {...register('password')} />
                </div>
                <Button htmlType='submit'>Login</Button>
            </form>

            <div class="position-relative overflow-hidden">
                <img
                    class="position-absolute img-fluid mt-3"

                    src=""
                    alt=""
                    srcset=""
                />
                <div

                >
                    <h1 class="heading">We Find the Way</h1>

                </div>
                <div class="details-line">
                    <p>
                        NX Group brings customers’ possibilities to reality.<br />
                        There are often many solutions, but only one way is the way.<br />
                        We use our determination to find the best way to overcome hurdles and
                        take our <br />
                        customers across the finish line.
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Login;