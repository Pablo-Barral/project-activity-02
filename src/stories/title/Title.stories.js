
import Title from './Title.vue'

export default{
    title: 'Title',
    component: Title,
    argTypes:{
        usage:{
            control:{type: 'select'},
            options: ['greetingTitle', 'loginTitle', 'homeFirstTitle', 'homeTitle'],
        },
        size:{
            control:{type: 'select'},
            options: ['1', '2', '3', '4', '5', '6'],
        },
        textColor:{control: 'color'}
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Title },
    template: '<Title v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    text: 'Sample Title'
};

export const Greeting = Template.bind({});
Greeting.args = {
    usage: 'greetingTitle',
    size: '2',
    text: 'Sample Title'
};

export const Login = Template.bind({});
Login.args = {
    usage: 'loginTitle',
    size: '3',
    text: 'Sample Title'
};

export const HomeFirst = Template.bind({});
HomeFirst.args = {
    usage: 'homeFirstTitle',
    size: '2',
    text: 'Sample Title',
    textColor: '#C12D18'
};

export const HomeTitle = Template.bind({});
HomeTitle.args = {
    usage: 'homeTitle',
    size: '3',
    text: 'Sample Title',
    textColor: '#C12D18'
};