import { Button, Checkbox, Form, Input } from 'antd';
import './loginForm.scss'
interface props{
  loginHandler:Function,
  userRemember:object,
}
interface initObject{
  username:string,
  password:string,
}
function LoginForm(props: props) {
  const [form] =Form.useForm();
  const onFinish = (values: object) => {
    console.log('Success:', values);
    props.loginHandler(values);
  };

  const onFinishFailed = (errorInfo: object) => {
    console.log('Failed:', errorInfo);
  };
  const onFill = (obj:object):void=> {
    console.log("onFill");
    form.setFieldsValue({
      username: obj.username,
      password: obj.password,
    });
  };
  console.log(props);
  if(props.userRemember){
    onFill(props.userRemember);
  }

  return (
    <Form
      name="basic"
      form={form}
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;