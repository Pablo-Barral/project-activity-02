import Clock from './Clock.vue'

export default{
    title: 'Clock',
    component: Clock,
    argTypes:{
        hour:{
            control:{type: 'select'},
            options: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
        },
        minute:{
            control:{type: 'select'},
            options: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'],
        },
        weekDay:{
            control:{type: 'select'},
            options: ['domingio', 'segunda-feira', 'terça-feria', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'],
        },
        monthDay:{
            control:{type: 'select'},
            options: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
        },
        month: {
            control:{type: 'select'},
            options: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
        },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: {Clock},
    template: '<Clock v-bind=$props />'
});

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    year: '2022'
}