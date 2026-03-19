import React from 'react'
import { Form, Input, Button } from 'antd'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

const onFinish = values => {
    console.log(values);
};

export const FormEdit = () => {

    return (
        <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            style={{ maxWidth: 600 }}
            validateMessages={validateMessages}
        >
            <Form.Item name={['user', 'name']} label="Имя" rules={[{ required: true }]}>
                <Input placeholder="ваше имя"/>
            </Form.Item>
            <Form.Item name={['user', 'email']} label="Эл.почта" rules={[{ type: 'email' }]}>
                <Input  placeholder="ваша эл.почта"/>
            </Form.Item>
            <Form.Item
                name="url"
                label="Другие соцсети"
                rules={[{ required: true }, { type: 'url', warningOnly: true }, { type: 'string', min: 6 }]}
            >
                 <Input placeholder="ссылка на аватар" />
            </Form.Item>
            <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                    Сохранить
                </Button>
            </Form.Item>
        </Form>
    )
}