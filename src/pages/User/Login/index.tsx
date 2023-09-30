import { login } from "@/services/ant-design-pro/api";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import {
  LoginForm,
  ProFormCheckbox,
  ProFormText,
} from "@ant-design/pro-components";
import {
  FormattedMessage,
  Helmet,
  history,
  useIntl,
  useModel,
} from "@umijs/max";
import { Alert, message } from "antd";
import React, { useState } from "react";
import { flushSync } from "react-dom";
import Settings from "../../../../config/defaultSettings";
import styles from "./index.less";

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => {
  return (
    <Alert
      style={{
        marginBottom: 24,
      }}
      message={content}
      type="error"
      showIcon
    />
  );
};

const Login: React.FC = () => {
  const [userLoginState, setUserLoginState] = useState<API.LoginResult>({});
  const [type, setType] = useState<string>("account");
  const { initialState, setInitialState } = useModel("@@initialState");

  const intl = useIntl();

  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();
    if (userInfo) {
      flushSync(() => {
        setInitialState((s) => ({
          ...s,
          currentUser: userInfo,
        }));
      });
    }
  };

  const handleSubmit = async (values: API.LoginParams) => {
    try {
      // 登录
      const msg = await login({ ...values, type });
      if (msg.status === "ok") {
        const defaultLoginSuccessMessage = intl.formatMessage({
          id: "pages.login.success",
        });
        message.success(defaultLoginSuccessMessage);
        await fetchUserInfo();
        const urlParams = new URL(window.location.href).searchParams;
        history.push(urlParams.get("redirect") || "/");
        return;
      }
      // 如果失败去设置用户错误信息
      setUserLoginState(msg);
    } catch (error) {
      const defaultLoginFailureMessage = intl.formatMessage({
        id: "pages.login.failure",
      });
      console.log(error);
      message.error(defaultLoginFailureMessage);
    }
  };
  const { status } = userLoginState;

  return (
    <div className={styles.container}>
      <Helmet>
        <title>
          {intl.formatMessage({
            id: "menu.login",
          })}
          - {Settings.title}
        </title>
      </Helmet>
      <div
        style={{
          flex: "1",
          padding: "32px 0",
        }}
      >
        <LoginForm
          contentStyle={{
            minWidth: 280,
            maxWidth: "75vw",
          }}
          otherStyle={{ justifyContent: "center" }}
          logo={false}
          title="Joidea interview test"
          subTitle=" "
          initialValues={{
            autoLogin: true,
          }}
          onFinish={async (values) => {
            await handleSubmit(values as API.LoginParams);
          }}
        >
          {status === "error" && (
            <LoginMessage
              content={intl.formatMessage({
                id: "pages.login.accountLogin.errorMessage",
              })}
            />
          )}
          <>
            <ProFormText
              name="username"
              fieldProps={{
                size: "large",
                prefix: <UserOutlined />,
              }}
              placeholder={"joidea"}
              rules={[
                {
                  required: true,
                  message: (
                    <FormattedMessage id="pages.login.username.required" />
                  ),
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: "large",
                prefix: <LockOutlined />,
              }}
              placeholder={"joidea"}
              rules={[
                {
                  required: true,
                  message: (
                    <FormattedMessage id="pages.login.password.required" />
                  ),
                },
              ]}
            />
          </>

          <div
            style={{
              marginBottom: 24,
            }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
              <FormattedMessage id="pages.login.rememberMe" />
            </ProFormCheckbox>
          </div>
        </LoginForm>
      </div>
    </div>
  );
};

export default Login;
