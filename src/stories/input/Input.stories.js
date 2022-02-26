import Input from './Input.vue'

export default{
    title: 'Input',
    component: Input,
    argTypes:{
        type:{
            control:{type: 'select'},
            options: ['text', 'password', 'submit'],
        },
        sample:{
            control:{type: 'select'},
            options: ['Usuário', 'Senha'],
        },
        class:{
            control:{type: 'select'},
            options: ['textSpan', 'loginError'],
        },
        icon:{
            control: {type: 'select'},
            options: ['user', 'lock', false],
        },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Input },
    template: '<Input v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
}

export const User = Template.bind({});
User.args = {
    icon: 'user',
    sample: 'Usuário',
    type: 'text'
}

export const Password = Template.bind({});
Password.args = {
    icon: 'lock',
    sample: 'Senha',
    type: 'password'
}

export const Submit = Template.bind({});
Submit.args = {
    icon: false,
    type: 'submit',
    text: 'Continuar'
}