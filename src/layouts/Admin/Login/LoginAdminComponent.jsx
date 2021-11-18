import React, { useState , useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { Form, Input, Button, Checkbox } from 'antd';
import './login.scss';
import { apiAdmin } from '../../../services/adminApi';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
import { alertErrors, STATUS_FAIL } from '../../../Settings/config';
import { authAction } from '../../../Redux/Actions/Admin/authActions';
import { ACCESS_TOKEN } from '../../../Settings/configUrl';


export default function LoginAdminComponent(props) {
    let [validate, setValidate] = useState('');
    let [isCheck, setCheckBox] = useState(false);
    let [loading, setLoading] = useState(false);
    const token = localStorage.getItem(ACCESS_TOKEN);
    const history = useHistory();
    const dispatch = useDispatch();
    const handleSubmit = (values) => {
        setLoading(true);
        let data = {
            "email": values.email,
            "password": values.password
          }
        apiAdmin.fetchApiLogin(data).then(res => {
            if (res.data.success === true) {
                localStorage.setItem(ACCESS_TOKEN ,JSON.stringify(res.data.token))
                history.push('/admin/dashboard');
                
            }else{
                setLoading(false);
                setValidate('Tai Khoan Mat Khau Khong Chinh Xac');
                history.push('/admin');
            }
                
        }).catch(e => {
            console.log(e);
            setLoading(false);
            setValidate('Tai Khoan Mat Khau Khong Chinh Xac');
            history.push('/admin');
        });
    }

    useEffect(() => {
        if(token){
            history.push("/admin/dashboard");
        }
    },[token])
    return (
        <div className="main">
            <ToastContainer />
            <div className="main-content">
                <div className="card">
                    <h5 className="card-header">Login</h5>
                    <p style={{textAlign: 'center'}}>{validate ? validate : ''}</p>
                    <div className="card-body">
                        <Form
                            name="basic"
                            labelCol={{
                                span: 24,
                            }}
                            wrapperCol={{
                                span: 24,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={handleSubmit}
                        >
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your email!',
                                    },
                                    {
                                        pattern: /^\S+@\S+\.\S+$/,
                                        message: 'Email wrong format!',
                                    },
                                ]}
                                style={{ marginBottom: "0px" }}
                            >
                                <Input placeholder="Enter address email" />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                    {
                                        min: 6,
                                        message: 'Password less than 6 characters '
                                    }
                                ]}
                            >
                                <Input.Password placeholder="Enter password" />
                            </Form.Item>
                            <Form.Item
                                wrapperCol={{
                                    offset: 0,
                                    span: 24,
                                }}
                            >
                                <Button type="primary" htmlType="submit" style={{ width: "100%", padding: "5px 0" }} loading={loading}>
                                    Login
                                </Button>
                            </Form.Item>
                            <Form.Item
                                name="remember"
                                valuePropName="checked"
                                wrapperCol={{
                                    offset: 0,
                                    span: 8,
                                }}
                            >
                                <Checkbox checked={isCheck} onChange={() => { setCheckBox(!isCheck) }} >Remember me</Checkbox>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}
