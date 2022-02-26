import TextContent from './TextContent.vue';

export default {
  title: 'TextContent',
  component: TextContent,
  argTypes: {
    usage: {
      control: { type: 'select' },
      options: ['greeting', 'temperature', 'date', 'location', 'homeParagraph', 'footerText', 'timerText', 'continueText', 'loginError'],
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TextContent },
  template: '<TextContent v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  text: 'Sample Text'
};

export const Greeting = Template.bind({});
Greeting.args = {
    usage: 'greeting',
    text: 'Sample Text'
};

export const Temperature = Template.bind({});
Temperature.args = {
    usage: 'temperature',
    text: 'Sample Text'
};

export const Date = Template.bind({});
Date.args = {
    usage: 'date',
    text: 'Sample Text'
};
export const Location = Template.bind({});
Location.args = {
    usage: 'location',
    text: 'Sample Text'
};
export const HomeParagraph = Template.bind({});
HomeParagraph.args = {
    usage: 'homeParagraph',
    text: 'Sample Text'
};
export const FooterText = Template.bind({});
FooterText.args = {
    usage: 'footerText',
    text: 'Sample Text'
};
export const TimerText = Template.bind({});
TimerText.args = {
    usage: 'timerText',
    text: 'Sample Text'
};
export const ContinueText = Template.bind({});
ContinueText.args = {
    usage: 'continueText',
    text: 'Sample Text'
};
export const LoginError = Template.bind({});
LoginError.args = {
    usage: 'loginError',
    text: 'Sample Text'
};
