import Weather from './Weather.vue'

export default{
    title: 'Weather',
    component: Weather,
    argTypes:{
        icon:{
            control:{type: 'select'},
            options: ['cloudy', 'cloud', 'thunder', 'storm', 'raining', 'sun'],
        },
        stateText:{
            control:{type: 'select'},
            options: ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'],
        },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Weather },
    template: '<Weather v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
}