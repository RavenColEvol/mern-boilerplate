import React from "react";
import {connect} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import {login} from '../../redux/actions/auth.actions'

function Register({login, isAuthenticated}) {

  if(isAuthenticated) return <Redirect to='/' />

  const onFinish = values => {
    login(values);
  };

  return (
    <div className="container center">
      <Form
        name="normal_login"
        className="login-form form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        size="large"
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" },{whitespace:true, message:'Please enter valid characters.'}]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username / Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }, {whitespace:true, message:'Please enter valid characters!'}, {min:6, message:'Password should be 6+ character long!'}]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item
          name="password2"
          rules={[{ required: true, message: "Please confirm your password" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Confirm Password"
          />
        </Form.Item>


        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            block
          >
            Register
          </Button>
          <Link href="/login">I already have an account</Link>
        </Form.Item>
      </Form>
    </div>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {login})(Register)
