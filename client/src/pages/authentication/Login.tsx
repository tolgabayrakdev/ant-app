import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function Login() {
    const [loading, setLoading] = useState(false);

    const onFinish = async (values: any) => {
        setLoading(true)

        console.log('Success:', values);
    };


    return (
        <div className="flex h-screen justify-center items-center">
            <Helmet>
                <title>Login | Dashboard</title>
            </Helmet>
            <div className="bg-gray-100 p-6 rounded-md">
                <h3 className="text-center mb-3 text-blue-600 font-sans">Log In</h3>
                <Form
                    className=" w-64"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        className=""
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Email!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="" />} type="email" placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                        className="mb-1"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item className="mb-3">
                        <Link className="hover:underline" to="/forget-password">Forget Password ?</Link>
                        <Link className="hover:underline ml-5" to="/register">Create account?</Link>

                    </Form.Item>


                    <Button type="primary" htmlType="submit" className="w-full" loading={loading}>
                        Log in
                    </Button>
                </Form>
            </div>



        </div>
    )
}